export class Mirror {
	private Dummy!: typeof ig.ENTITY.Player;
	private entity!: ig.ENTITY.Player;

	private portalA: Vec2 = {x: 0, y: 0};
	private portalB: Vec2 = {x: 10000, y: 10000};

	public init(): void {
		const self = this;
		this.Dummy = ig.ENTITY.Player.extend({
			update(): void {
				self.update();
			}
		}) as typeof ig.ENTITY.Player;
	}

	public onLevelLoaded(): void {
		this.spawn();
	}

	public setPortals(a: Vec2, b: Vec2): void {
		this.portalA = a;
		this.portalB = b;
		this.entity.show();
	}

	private update(): void {
		if (ig.game.playerEntity) {
			const pos = this.mirror(ig.game.playerEntity.coll.pos, this.portalA, this.portalB);
			this.entity.setPos(pos.x, pos.y, pos.z, undefined);
		}
	}

	public spawn(): void {
		if (this.entity && !this.entity._killed) {
			this.entity.kill(undefined);
		}

		this.entity = ig.game.spawnEntity(this.Dummy, 0, 0, 0, undefined, false) as ig.ENTITY.Player;
		this.entity.hide();
	}


	public mirror(init: Vec3, a: Vec2, b: Vec2): Vec3 {
		const offset = Vec2.sub(init, a, Vec2.create());
		offset.x *= -1;
		offset.y *= -1;
		Vec2.add(offset, b);
		return {
			x: offset.x,
			y: offset.y,
			z: init.z
		};
	}
}