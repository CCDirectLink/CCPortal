export class Renderer {
	private readonly canvas: HTMLCanvasElement;
	private readonly ctx: CanvasRenderingContext2D;
	private rawPortals!: ig.Image;
	private rawPortalAlpha!: ig.Image;

	public constructor() {
		this.canvas = document.createElement('canvas');
		this.ctx = this.canvas.getContext('2d')!;
	}

	public init(): void {
		this.rawPortals = new ig.Image('media/entity/portal/portals.png');
		this.rawPortalAlpha = new ig.Image('media/entity/portal/portalMask.png');

		this.canvas.width = 24;
		this.canvas.height = 32;
	}

	public trace(pos: Vec3, blue: boolean): HTMLCanvasElement {
		pos.y -= 12;

		const portalOffset = (pos.x - 12) % 16;

		this.clear();

		const left = this.tile(Vec3.add({x: -12, y: 0, z: 0}, pos));
		const middle = this.tile(Vec3.add({x: 4, y: 0, z: 0}, pos));
		const right = this.tile(Vec3.add({x: 20, y: 0, z: 0}, pos));
		

		this.render(left, {x: -portalOffset, y: 0});
		this.render(Vec3.add({x: 0, y: 1, z: 0}, left), {x: -portalOffset, y: 16});

		this.render(middle, {x: 16 - portalOffset, y: 0});
		this.render(Vec3.add({x: 0, y: 1, z: 0}, middle), {x: 16 - portalOffset, y: 16});
		
		this.render(right, {x: 32 - portalOffset, y: 0});
		this.render(Vec3.add({x: 0, y: 1, z: 0}, right), {x: 32 - portalOffset, y: 16});

		this.drawPortal(blue);

		return this.canvas;
	} 

	private clear(): void {
		this.ctx.globalCompositeOperation = 'destination-out';
		this.ctx.fillStyle = '#0000';
		this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);

		this.ctx.globalCompositeOperation = 'source-over';
		this.ctx.drawImage(this.rawPortalAlpha.data as unknown as HTMLImageElement, 0, 0, 24, 32, 0, 0, 24, 32);

		this.ctx.globalCompositeOperation = 'source-atop';
	}

	private render(tile: Vec3, target: Vec2): void {
		const levels = ig.game.levels as Levels;
		const filtered = <Level[]>Object.values(levels)
			.filter(l => l.height <= tile.z)
			.reverse();

		for (const level of filtered) {
			for (const map of level.maps) {
				const tiles = map.tiles;
				const row = tile.y + (tile.z - level.height)/16 ;

				if (!map.data[row] || !map.data[row][tile.x]) {
					continue;
				}
				this.drawTile(tiles, map.data[row][tile.x]-1, target);
			}
		}
	}

	private drawTile(tileset: ig.Image, source: number, target: Vec2) {
		const img = tileset.data as unknown as HTMLImageElement;
		
		const tilesetWidth = tileset.width / 16;
		const x = source % tilesetWidth;
		const y = (source - x) / tilesetWidth;


		this.ctx.drawImage(img, x * 16, y * 16, 16, 16, target.x, target.y, 16, 16);
	}

	private tile(pos: Vec3): Vec3 {
		return {
			x: (pos.x - pos.x % 16) / 16,
			y: (pos.y - pos.y % 16) / 16,
			z: pos.z
		};
	}

	private drawPortal(blue: boolean): void {
		const x = blue ? 0 : 24;

		this.ctx.globalCompositeOperation = 'source-over';
		this.ctx.drawImage(this.rawPortals.data as unknown as HTMLImageElement, x, 0, 24, 32, 0, 0, 24, 32);
	}
}