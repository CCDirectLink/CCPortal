declare class Vec2 {
    public x: number;
    public y: number;

    public static create(copy?: Vec2): Vec2;
    public static add(to: Vec2, from: Vec2, target?: Vec2): Vec2;
    public static sub(to: Vec2, from: Vec2, target?: Vec2): Vec2;
    public static div(to: Vec2, from: Vec2, target?: Vec2): Vec2;
}

declare class Vec3 {
    public x: number;
    public y: number;
    public z: number;
}

interface CollData {
    blockDir: Vec2;
    collided: boolean;
    skipPhysics: boolean;
    skipped: boolean;
}

interface Level {
    collision: ig.MAP.Collision;
    height: number;
}
declare namespace ig {
    export enum PROJECTILE_KILL_TYPE {
        WALL = 1,
        AIR = 2,
        OTHER = 3
    }

    export enum ENTITY_ALIGN {
        BOTTOM = 1,
        CENTER = 2,
        TOP = 3,
        FACE = 4,
        BASE = 5,
        WALL_HIT = 6,
        FACE_BASE = 7
    }

    export enum COLLSHAPE {
        RECTANGLE = 1,
        SLOPE_NE = 2,
        SLOPE_SE = 3,
        SLOPE_SW = 4,
        SLOPE_NW = 5
    }

    export enum COLL_HEIGHT_SHAPE {
        NONE = 0,
        NORTH_UP = 1,
        EAST_UP = 2,
        WEST_UP = 3,
        SOUTH_UP = 4
    }

    const game: sc.CrossCode;
}