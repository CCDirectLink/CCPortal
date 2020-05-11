import { Mirror } from './mirror.js';
import { Trigger } from './trigger.js';
import { Renderer } from './renderer.js';

enum COLL_TYPE {
	WALL = 2,
	EMPTY = 3
}

interface PortalData {
	pos: Vec2;
	left: ig.Entity;
	right: ig.Entity;
	display: ig.Entity;
	data: number[];
	original: number[];
	index: number[];
	render: HTMLCanvasElement;
}

export default class CCPortal extends Plugin {
	private blue?: PortalData;
	private orange?: PortalData;
	private last = 0;
	private dummy1!: ig.Image;
	private dummy2!: ig.Image;
	private readonly mirror = new Mirror();
	private readonly trigger = new Trigger();
	private readonly blueRenderer = new Renderer();
	private readonly orangeRenderer = new Renderer();

	public async prestart(): Promise<void> {
		this.mirror.init();
		this.blueRenderer.init();
		this.orangeRenderer.init();

		this.dummy1 = new ig.Image('media/entity/portal/dummy1.png');
		this.dummy2 = new ig.Image('media/entity/portal/dummy2.png');

		const self = this;
		ig.ENTITY.Ball.inject({
			onProjectileKill(type: ig.PROJECTILE_KILL_TYPE, pos: Vec2, data: CollData): void {
				if (type === ig.PROJECTILE_KILL_TYPE.WALL) {
					if (data.blockDir.y == -1) {
						if (self.last == 0 || self.last == 2) {
							if (self.blue) {
								self.removePortal(self.blue);
								self.blue = undefined;
							}
							const alignedBottom = this.getAlignedPos(ig.ENTITY_ALIGN.BOTTOM, undefined) as Vec3;
							self.blue = self.makePortalUp('blue', pos, alignedBottom, self.blueRenderer, self.orange);
							self.last = 1;
						} else {
							if (self.orange) {
								self.removePortal(self.orange);
								self.orange = undefined;
							}
							const alignedBottom = this.getAlignedPos(ig.ENTITY_ALIGN.BOTTOM, undefined) as Vec3;
							self.orange = self.makePortalUp('orange', pos, alignedBottom, self.orangeRenderer, self.blue);
							self.last = 2;
						}
						if (self.blue && self.orange) {
							self.mirror.setPortals(self.blue.pos, self.orange.pos);
							self.trigger.setPortals(self.blue.pos, self.orange.pos);
						}
					}
				}

				this.parent(type, pos, data);
			}
		});

		sc.CrossCode.inject({
			init(): void {
				this.parent();
				this.addons.levelLoaded.push(self.mirror);
				this.addons.preUpdate.push(self.trigger);
			}
		});
	}
	
	private makePortalUp(color: string, pos: Vec2, alignedBottom: Vec3, renderer: Renderer, connected?: PortalData): PortalData {
		const groundPos = this.calcGroundPosUp(pos);
		const levels = ig.game.levels as Levels;
		//TODO: pick correct level
		const level = levels[0];
		const collData = level.collision.data as number[][];
		const row = collData[groundPos.y];
		const index = [groundPos.x];
		const original: number[] = [row[groundPos.x]];
		row[groundPos.x] = COLL_TYPE.EMPTY;
		
		//right
		let xOff = 0;
		if (pos.x % 16 > 4 && groundPos.x !== row.length - 1) {
			original.push(row[groundPos.x + 1]);
			index.push(groundPos.x + 1);
			row[groundPos.x + 1] = COLL_TYPE.EMPTY;
			xOff = 16;
		}
		const left = this.buildBlock({
			x: groundPos.x * 16 + xOff + ((pos.x + 12) % 16),
			y: groundPos.y * 16,
			z: 0
		}, {
			x: 16 - ((pos.x + 12) % 16),
			y: 16,
			z: 32
		});
		
		//left
		xOff = 0;
		if (pos.x % 16 < 12 && groundPos.x !== 0) {
			original.push(row[groundPos.x - 1]);
			index.push(groundPos.x - 1);
			row[groundPos.x - 1] = COLL_TYPE.EMPTY;
			xOff = -16;
		}
		const right = this.buildBlock({
			x: groundPos.x * 16 + xOff,
			y: groundPos.y * 16,
			z: 0
		}, {
			x: (pos.x - 12) % 16,
			y: 16,
			z: 32
		});
		
		const displayPos: Vec3 = {
			x: alignedBottom.x,
			y: alignedBottom.y,
			z: alignedBottom.z - alignedBottom.z%16
		};
		const display = ig.game.spawnEntity('Prop', displayPos.x, displayPos.y, displayPos.z, {name: '', propType: {
			sheet: 'portal',
			name: color
		}}, undefined) as ig.ENTITY.Prop;

		const render = renderer.trace(alignedBottom, color !== 'blue'); //Inverted color because it's displayed on the other side

		displayPos.x -= 8;
		displayPos.y -= 16;
		
		if (connected) {
			display.fixDraw.x = 0;
			display.fixDraw.image = color === 'blue' ? this.dummy1 : this.dummy2;
			display.fixDraw.image.increaseRef();
			display.fixDraw.image.data = connected.render as unknown as ig.Image;
			display.fixDraw.flipX = true;
			display.fixDraw.flipY = true;
		}

		return {
			pos: displayPos,
			data: row,
			original,
			display,
			index,
			left,
			right,
			render
		};
	}

	private calcGroundPosUp(impact: Vec2): Vec2 {
		return Vec2.add(
			Vec2.div({x: impact.x - impact.x%16, y: impact.y - impact.y%16}, {x: 16, y: 16}), 
			{x: 0, y: -1}
		);
	}
	
	private buildBlock(pos: Vec3, size: Vec3): ig.Entity {
		return ig.game.spawnEntity('HiddenBlock', pos.x, pos.y, pos.z, {
			size: size,
			zHeight: size.z
		}, undefined);
	}

	private removePortal(data: PortalData): void {
		data.left.kill(undefined);
		data.right.kill(undefined);
		data.display.kill(undefined);

		for (let i = 0; i < data.index.length; i++) {
			data.data[data.index[i]] = data.original[i];
		}
	}
}