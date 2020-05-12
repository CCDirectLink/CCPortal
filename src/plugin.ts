import { Mirror } from './mirror.js';
import { Trigger } from './trigger.js';
import { Portal } from './portal.js';

export default class CCPortal extends Plugin {
	private last = 0;
	
	private readonly blue = new Portal('blue');
	private readonly orange = new Portal('orange');
	private readonly mirror = new Mirror();
	private readonly trigger = new Trigger();

	public async prestart(): Promise<void> {
		this.mirror.init();
		this.blue.init();
		this.orange.init();

		this.blue.connectTo(this.orange);


		const self = this;
		ig.ENTITY.Ball.inject({
			onProjectileKill(type: ig.PROJECTILE_KILL_TYPE, pos: Vec2, data: CollData): void {
				if (type === ig.PROJECTILE_KILL_TYPE.WALL) {
					if (data.blockDir.y == -1) {
						const alignedBottom = this.getAlignedPos(ig.ENTITY_ALIGN.BOTTOM, undefined) as Vec3;
						Vec3.add(alignedBottom, {x: 0, y: 0, z: -12}); //Map to floor

						if (self.last == 0 || self.last == 2) {
							self.blue.open(alignedBottom, data.blockDir);
							self.last = 1;
						} else {
							self.orange.open(alignedBottom, data.blockDir);
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
}