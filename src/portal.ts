import { Hole } from './hole.js';
import { Renderer } from './renderer.js';

export class Portal {
	private readonly color: string;
	private readonly renderer = new Renderer();
	
	private displayDummy!: ig.Image;

	private hole?: Hole;
	private display?: ig.ENTITY.Prop;
	private position?: Vec3;
	private texture?: HTMLCanvasElement;
	private connected?: Portal;

	public constructor(color: string) {
		this.color = color;
	}

	public get pos(): Vec3 {
		return this.position || {x: -100000, y: -100000, z: -100000};
	}

	public init(): void {
		this.renderer.init();
		
		this.displayDummy = new ig.Image('media/entity/portal/dummy.png');

		//Remove from cache
		this.displayDummy.decreaseRef();
		delete ig.Image.cache['media/entity/portal/dummy.png'];
	}

	public connectTo(portal: Portal): void {
		this.connected = portal;
		portal.connected = this;
	}

	public open(position: Vec3, dir: Vec2): void {
		this.close();

		this.position = position;
		this.hole = Hole.open(position, dir);
		
		if (dir.x == 0 && dir.y == -1) {
			const displayPos: Vec3 = {
				x: position.x,
				y: position.y - 5 - 32,
				z: position.z - position.z%16
			};
			
			this.display = ig.game.spawnEntity('Prop', displayPos.x, displayPos.y, displayPos.z, {name: '', propType: {
				sheet: 'portal',
				name: this.color
			}}, undefined) as ig.ENTITY.Prop;
		}
		
		this.texture = this.renderer.trace(position, this.color !== 'blue'); //Inverted color because it's displayed on the other side
		this.applyTexture();
	}

	public close(): void {
		if (this.display) {
			this.display.kill(undefined);
			this.display = undefined;
		}

		if (this.hole) {
			this.hole.close();
			this.hole = undefined;
		}
	}

	private applyTexture(): void {
		if (this.display && this.connected && this.connected.texture) {
			this.display.fixDraw.x = 0;
			this.display.fixDraw.image = this.displayDummy;
			this.display.fixDraw.image.increaseRef();
			this.display.fixDraw.image.data = this.connected.texture as unknown as ig.Image;
			this.display.fixDraw.flipX = true;
			this.display.fixDraw.flipY = true;
		}
	}
}