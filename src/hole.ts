enum COLL_TYPE {
	WALL = 2,
	EMPTY = 3
}

export class Hole {
	private readonly left: ig.Entity;
	private readonly right: ig.Entity;
	private readonly pointer: number[];
	private readonly indexes: number[];
	private readonly original: number[];

	private constructor(
		left: ig.Entity,
		right: ig.Entity,
		pointer: number[],
		indexes: number[],
		original: number[],

	) {
		this.left = left;
		this.right = right;
		this.pointer = pointer;
		this.indexes = indexes;
		this.original = original;
	}

	public close(): void {
		this.left.kill(undefined);
		this.right.kill(undefined);

		for (let i = 0; i < this.indexes.length; i++) {
			this.pointer[this.indexes[i]] = this.original[i];
		}
	}

	public static open(position: Vec3, dir: Vec2): Hole | undefined {
		if (dir.x == 0 && dir.y == -1) {
			return this.openTop(position);
		}

		return undefined;
	}

	private static openTop(position: Vec3): Hole {
		const level = this.level(position);
		const tile = this.tile(position);

		//Move up
		Vec2.add(tile, {x: 0, y: -1});

		const left = Vec2.add({x: -1, y: 0}, tile);
		const center = tile;
		const right = Vec2.add({x: 1, y: 0}, tile);

		const indexes: number[] = [];
		const original: number[] = [];

		const row = level.collision.data[tile.y] as number[];

		this.removeCollision(left, level, indexes, original);
		this.removeCollision(center, level, indexes, original);	
		this.removeCollision(right, level, indexes, original);		
		
		const leftEdge = position.x - 12;
		const leftEdgeTile = leftEdge - leftEdge%16;
		const leftBlock = this.buildBlock({
			x: leftEdgeTile,
			y: tile.y * 16,
			z: position.z
		}, {
			x: leftEdge - leftEdgeTile,
			y: 16,
			z: 32
		});

		const rightEdge = position.x + 12;
		const rightEdgeTileEnd = rightEdge - rightEdge % 16 + 16;
		const rightBlock = this.buildBlock({
			x: rightEdge,
			y: tile.y * 16,
			z: position.z
		}, {
			x: rightEdgeTileEnd - rightEdge,
			y: 16,
			z: 32
		});

		return new Hole(
			leftBlock,
			rightBlock,
			row,
			indexes,
			original,
		);
	}

	private static level(position: Vec3): Level {
		const levels = ig.game.levels as Levels;
		const lower = (Object.values(levels) as Level[])
			.filter(l => l.height <= position.z);

		return lower[0];
	}

	private static tile(position: Vec3): Vec2 {
		return {
			x: (position.x - position.x % 16) / 16,
			y: (position.y - position.y % 16) / 16
		};
	}

	private static isInLevel(tile: Vec2, level: Level): boolean {
		return tile.y >= 0 && tile.y < level.collision.height
			&& tile.x >= 0 && tile.x < level.collision.width;
	}

	private static removeCollision(tile: Vec2, level: Level, indexes: number[], original: number[]): void {
		if (this.isInLevel(tile, level)) {
			indexes.push(tile.x);
			original.push(level.collision.data[tile.y][tile.x]);
			level.collision.data[tile.y][tile.x] = COLL_TYPE.EMPTY;
		}
	}

	private static buildBlock(pos: Vec3, size: Vec3): ig.Entity {
		return ig.game.spawnEntity('HiddenBlock', pos.x, pos.y, pos.z, {
			size: size,
			zHeight: size.z
		}, undefined);
	}
}