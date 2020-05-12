import { Input } from './input.js';

export class Trigger {
	private readonly input = new Input();

	private portalA: Vec2 = {x: 10000, y: 10000};
	private portalB: Vec2 = {x: 10000, y: 10000};

	public init(): void {
		this.input.init();
	}
	
	public setPortals(a: Vec2, b: Vec2): void {
		this.portalA = a;
		this.portalB = b;
	}

	public onPreUpdate(): void {
		const player = ig.game.playerEntity as ig.ENTITY.Player | undefined;
		if (player) {
			if (this.isInPortal(player, this.portalA)) {
				this.translate(player, this.portalA, this.portalB);
				this.input.mirror();
			} else if (this.isInPortal(player, this.portalB)) {
				this.translate(player, this.portalB, this.portalA);
				this.input.mirror();
			}
		}
	}

	private isInPortal(player: ig.ENTITY.Player, portal: Vec2): boolean {
		const center = player.getAlignedPos(ig.ENTITY_ALIGN.BOTTOM, undefined) as Vec3;

		return center.x >= portal.x - 12 && center.x <= portal.x + 12
			&& center.y >= portal.y - 16 && center.y < portal.y;
	}

	private translate(player: ig.ENTITY.Player, start: Vec2, end: Vec2): void {
		const center = player.getAlignedPos(ig.ENTITY_ALIGN.BOTTOM, undefined) as Vec3;

		const result = Vec3.create(player.coll.pos);
		result.x += end.x - start.x + 2 * (start.x - player.coll.pos.x) - player.coll.size.x;
		result.y += end.y - start.y + 2 * (start.y - center.y);

		player.setPos(result.x, result.y, result.z, undefined);
	}
}