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
		const player = ig.game.playerEntity as ig.ENTITY.Player | undefined;
		if (player) {
			const pos = this.mirror(player.coll.pos, this.portalA, this.portalB, player.coll.size);
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


	public mirror(init: Vec3, a: Vec2, b: Vec2, size: Vec2): Vec3 {
		return {
			x: init.x + 2 * (a.x - init.x) + (b.x - a.x) - size.x + 12,
			y: init.y + 2 * (a.y - init.y) + (b.y - a.y) - size.y,
			z: init.z
		};
	}
}