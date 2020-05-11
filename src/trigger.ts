import { Mirror } from './mirror.js';

export class Trigger {
	private portalA: Vec2 = {x: 10000, y: 10000};
	private portalB: Vec2 = {x: 10000, y: 10000};
	
	public setPortals(a: Vec2, b: Vec2): void {
		this.portalA = a;
		this.portalB = b;
	}

	public onPreUpdate(): void {
		const player = ig.game.playerEntity as ig.ENTITY.Player | undefined;
		if (player) {
			if (this.isInPortal(player, this.portalA)
				|| this.isInPortal(player, this.portalB)) {
				const pos = Mirror.mirror(player.coll.pos, this.portalA, this.portalB);
				player.setPos(pos.x, pos.y, pos.z, undefined);
			}
		}
	}

	private isInPortal(player: ig.ENTITY.Player, portal: Vec2): boolean {
		return player.coll.contains(portal.x + 12, portal.y - 0.001, false);
	}
}