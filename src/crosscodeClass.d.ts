declare namespace ig {
	export namespace SPRITE_FX {
		export class SLIDE extends ig.SpriteEffectBase {
			public dir: any;
			public start: number;
			public end: number;
			public keySpline: any;

			public constructor(b: any);

			public init(b: any): void;
			public apply(b: any, a: any): void;
		}
	}
	export namespace Renderer2d {
		export class SpriteDrawSlot extends ig.Class {
			public cubeSprite: any;
			public ground: boolean;
			public yIndex: number;
			public zMin: number;
			public zMax: number;
			public spriteIdx: number;
			public drawShadow: boolean;

			public constructor(a: any, b: any, c: any);

			public init(a: any, b: any, c: any): void;
			public update(a: any): void;
			public draw(a: any, b: any): void;
		}
	}
	export namespace MAP {
		export class Collision extends ig.Map {
			public _wm: ig.Config;

			public constructor(a: any, b: any);

			public init(a: any, b: any): void;
			public prepare(a: any, b: any): void;
			public isTileGround(a: any, b: any): any;
			public isTileAreaBlocked(b: any, c: any, e: any, f: any): any;
			public isGridHole(d: any, c: any): any;
			public isOverHole(d: any, c: any, e: any, f: any, g: any): any;
			public trace(d: any, c: any, e: any, f: any, g: any, h: any, i: any, j: any, k: any): any;
		}
		export class Background extends ig.ChunkedMap {
			public tiles: ig.Image;
			public tilesetName: string;
			public tileInfo: ig.TileInfo;
			public hasAnimatedTiles: boolean;
			public screenRender: boolean;
			public lighter: boolean;
			public _wm: ig.Config;

			public constructor(a: any, b: any);

			public init(a: any, b: any): void;
			public clearCached(): void;
			public readyToDraw(): any;
			public checkAnimatedTiles(): any;
			public setTileset(a: any): void;
			public preRenderChunk(a: any, b: any, c: any, e: any, f: any): any;
			public preRenderScreen(a: any, b: any, c: any, e: any, f: any, g: any, h: any): void;
			public drawAnimated(a: any, d: any, c: any, e: any): void;
			public redrawChunkTile(a: any, b: any, c: any, e: any): void;
			public drawTiled(a: any, b: any, c: any, e: any): void;
		}
		export class MovingParallax extends ig.MAP.Background {
			public _wm: ig.Config;
			public moveTimer: number;
			public stopped: boolean;

			public constructor(a: any, b: any);

			public init(a: any, b: any): void;
			public setStopped(a: any): void;
			public update(): void;
			public setScreenPos(a: any, b: any): void;
		}
		export class Light extends ig.ChunkedMap {
			public lightmapGfx: ig.Image;
			public _wm: ig.Config;
			public lightSources: any;
			public glowSources: any;
			public noMerge: boolean;
			public lightCanvas: any;
			public shadowOrder: number;

			public constructor(b: any, a: any);

			public init(b: any, a: any): void;
			public clear(): void;
			public preRenderChunk(b: any, a: any, d: any, c: any, e: any): void;
			public drawShadows(): void;
			public drawGlow(): void;
			public draw(): void;
			public drawTiled(): void;
		}
		export class HeightMap extends ig.Map {
			public _wm: ig.Config;
			public noMerge: boolean;

			public constructor(a: any, b: any);

			public init(a: any, b: any): void;
			public draw(): void;
			public drawTiled(): void;
		}
		export class Navigation extends ig.Map {
			public nodes: any;
			public freeNodeIds: any;
			public initialized: boolean;
			public _wm: ig.Config;

			public constructor(a: any, b: any);

			public init(a: any, b: any): void;
			public levelInit(b: any): void;
			public reparse(b: any, c: any, d: any, e: any, f: any): void;
			public connectAirNodes(a: any): void;
			public draw(a: any): void;
			public _getGridValue(a: any, b: any, c: any): any;
			public _setGridValue(a: any, b: any, c: any, d: any): void;
			public _setGridFlag(a: any, b: any, c: any, d: any): void;
			public _clearGridFlag(a: any, b: any, c: any, d: any): void;
			public getEntityFlagValue(a: any, b: any, c: any): any;
			public setEntityFlagValue(a: any, b: any, c: any, d: any): void;
			public increaseEntityFlagValue(a: any, b: any, c: any): any;
			public decreaseEntityFlagValue(a: any, b: any, c: any): void;
			public getGridAreaFlag(a: any, b: any): any;
			public getGridForceGround(a: any, b: any): any;
			public getGridNode(a: any, b: any): any;
			public getGridNodeId(a: any, b: any): any;
			public setGridNodeId(a: any, b: any, c: any): any;
			public getGridBuildFlags(a: any, b: any): any;
			public setGridBuildFlag(a: any, b: any, c: any): any;
			public clearGridBuildFlags(a: any, b: any): any;
			public getNode(a: any, b: any): any;
		}
	}
	export namespace ACTION_STEP {
		export class LABEL extends ig.ActionStepBase {
			public name: any;
			public _wm: ig.Config;

			public constructor(a: any);

			public init(a: any): void;
		}
		export class GOTO_LABEL extends ig.ActionStepBase {
			public name: any;
			public _wm: ig.Config;

			public constructor(a: any);

			public init(a: any): void;
			public getJumpLabelName(): any;
		}
		export class SELECT_RANDOM extends ig.ActionStepBase {
			public options: any;
			public branches: any;
			public _wm: ig.Config;

			public constructor(a: any);

			public init(a: any): void;
			public getBranchNames(): any;
			public getNext(): any;
		}
		export class RESET_ACTOR extends ig.ActionStepBase {
			public _wm: ig.Config;

			public constructor();

			public init(): void;
			public start(a: any): void;
		}
		export class WAIT extends ig.ActionStepBase {
			public time: number;
			public _wm: ig.Config;

			public constructor(a: any);

			public init(a: any): void;
			public start(a: any): void;
			public run(a: any): any;
		}
		export class WAIT_UNTIL extends ig.ActionStepBase {
			public condition: ig.VarCondition;
			public _wm: ig.Config;

			public constructor(a: any);

			public init(a: any): void;
			public start(a: any): void;
			public run(a: any): any;
		}
		export class WAIT_RANDOM extends ig.ActionStepBase {
			public maxTime: number;
			public minTime: number;
			public _wm: ig.Config;

			public constructor(a: any);

			public init(a: any): void;
			public start(a: any): void;
			public run(a: any): any;
		}
		export class IF extends ig.ActionStepBase {
			public condition: ig.VarCondition;
			public withElse: boolean;
			public branches: any;
			public _wm: ig.Config;

			public constructor(a: any);

			public init(a: any): void;
			public getBranchNames(): any;
			public getNext(): any;
		}
		export class WAIT_UNTIL_ON_GROUND extends ig.ActionStepBase {
			public _wm: ig.Config;

			public constructor(a: any);

			public init(a: any): void;
			public start(a: any): void;
			public run(a: any): any;
		}
		export class WAIT_UNTIL_PLAYER_ON_TOP extends ig.ActionStepBase {
			public _wm: ig.Config;

			public constructor(a: any);

			public init(a: any): void;
			public start(a: any): void;
			public run(a: any): any;
		}
		export class MOVE_FORWARD extends ig.ActionStepBase {
			public target: any;
			public _wm: ig.Config;

			public constructor(a: any);

			public init(a: any): void;
			public start(a: any): void;
			public run(a: any): any;
		}
		export class SLIDE_OUT extends ig.ActionStepBase {
			public target: any;
			public _wm: ig.Config;

			public constructor(a: any);

			public init(a: any): void;
			public start(a: any): void;
			public run(a: any): any;
		}
		export class MOVE_BACKWARD extends ig.ActionStepBase {
			public target: any;
			public _wm: ig.Config;

			public constructor(a: any);

			public init(a: any): void;
			public start(a: any): void;
			public run(a: any): any;
		}
		export class MOVE_TO_ENTITY_DISTANCE extends ig.ActionStepBase {
			public entity: number;
			public min: number;
			public max: number;
			public maxTime: number;
			public subRadius: boolean;
			public _wm: ig.Config;

			public constructor(a: any);

			public init(a: any): void;
			public start(a: any): void;
			public run(a: any): any;
		}
		export class MOVE_TO_ENTITY_CLOSEST_OFFSET extends ig.ActionStepBase {
			public entity: number;
			public min: number;
			public max: number;
			public maxTime: number;
			public subRadius: boolean;
			public _wm: ig.Config;

			public constructor(a: any);

			public init(a: any): void;
			public start(a: any): void;
			public run(a: any): any;
		}
		export class MOVE_TO_POINT extends ig.ActionStepBase {
			public target: any;
			public precise: boolean;
			public _wm: ig.Config;

			public constructor(a: any);

			public init(a: any): void;
			public start(a: any): void;
			public run(a: any): any;
		}
		export class SYNC_ACTION_WITH_ENTITY extends ig.ActionStepBase {
			public entity: any;
			public _wm: ig.Config;

			public constructor(a: any);

			public init(a: any): void;
			public start(a: any): void;
			public run(a: any): any;
		}
		export class SET_Z_VEL extends ig.ActionStepBase {
			public value: any;
			public _wm: ig.Config;

			public constructor(a: any);

			public init(a: any): void;
			public run(a: any): any;
		}
		export class SET_FLOAT_HEIGHT extends ig.ActionStepBase {
			public value: any;
			public _wm: ig.Config;

			public constructor(a: any);

			public init(a: any): void;
			public run(a: any): any;
		}
		export class SET_FLOAT_PARAMS extends ig.ActionStepBase {
			public speed: any;
			public accel: any;
			public variance: any;
			public _wm: ig.Config;

			public constructor(a: any);

			public init(a: any): void;
			public run(a: any): any;
		}
		export class SET_FLY_HEIGHT extends ig.ActionStepBase {
			public value: any;
			public _wm: ig.Config;

			public constructor(a: any);

			public init(a: any): void;
			public run(a: any): any;
		}
		export class SET_FLY_KEEP_HEIGHT extends ig.ActionStepBase {
			public value: any;
			public _wm: ig.Config;

			public constructor(a: any);

			public init(a: any): void;
			public run(a: any): any;
		}
		export class FORCE_FLY_HEIGHT extends ig.ActionStepBase {
			public value: any;
			public _wm: ig.Config;

			public constructor();

			public init(): void;
			public run(a: any): any;
		}
		export class WAIT_UNTIL_Z_DISTANCE extends ig.ActionStepBase {
			public distance: number;
			public _wm: ig.Config;

			public constructor(a: any);

			public init(a: any): void;
			public start(a: any): void;
			public run(a: any): any;
		}
		export class WAIT_UNTIL_Z_ZENITH extends ig.ActionStepBase {
			public minWait: number;
			public _wm: ig.Config;

			public constructor(a: any);

			public init(a: any): void;
			public start(a: any): void;
			public run(a: any): any;
		}
		export class STOP_Z_ZENITH extends ig.ActionStepBase {
			public minWait: number;
			public _wm: ig.Config;

			public constructor(a: any);

			public init(a: any): void;
			public start(a: any): void;
			public run(a: any): any;
		}
		export class FLY_TO_POINT extends ig.ActionStepBase {
			public target: any;
			public precise: boolean;
			public maxFlySpeed: number;
			public flyVariance: number;
			public keepFloating: boolean;
			public _wm: ig.Config;

			public constructor(a: any);

			public init(a: any): void;
			public start(a: any): void;
			public run(a: any): any;
		}
		export class MOVE_TO_DIR extends ig.ActionStepBase {
			public dir: any;
			public time: number;
			public _wm: ig.Config;

			public constructor(a: any);

			public init(a: any): void;
			public start(a: any): void;
			public run(b: any): any;
		}
		export class MOVE_TO_LINE extends ig.ActionStepBase {
			public target1: any;
			public target2: any;
			public _wm: ig.Config;

			public constructor(a: any);

			public init(a: any): void;
			public start(a: any): void;
			public run(b: any): any;
		}
		export class MOVE_RANDOM extends ig.ActionStepBase {
			public minTime: number;
			public maxTime: number;
			public dirChanges: number;
			public _wm: ig.Config;

			public constructor(a: any);

			public init(a: any): void;
			public start(a: any): void;
			public run(a: any): any;
		}
		export class SET_WALK_ANIMS extends ig.ActionStepBase {
			public config: any;
			public _wm: ig.Config;

			public constructor(a: any);

			public init(a: any): void;
			public run(a: any): any;
		}
		export class STOP_XY extends ig.ActionStepBase {
			public _wm: ig.Config;

			public constructor();

			public init(): void;
			public run(a: any): any;
		}
		export class JUMP extends ig.ActionStepBase {
			public jumpSpeed: any;
			public wait: boolean;
			public ignoreSound: boolean;
			public _wm: ig.Config;

			public constructor(a: any);

			public init(a: any): void;
			public start(a: any): void;
			public run(a: any): any;
		}
		export class JUMP_TO_POINT extends ig.ActionStepBase {
			public adjustAbove: number;
			public offset: any;
			public _wm: ig.Config;

			public constructor(a: any);

			public init(a: any): void;
			public start(b: any): void;
			public run(b: any): any;
		}
		export class SET_GROUND_CONNECTED extends ig.ActionStepBase {
			public value: boolean;
			public _wm: ig.Config;

			public constructor(a: any);

			public init(a: any): void;
			public run(a: any): any;
		}
		export class SET_JUMPING extends ig.ActionStepBase {
			public value: boolean;
			public _wm: ig.Config;

			public constructor(a: any);

			public init(a: any): void;
			public run(a: any): any;
		}
		export class SET_Z_GRAVITY_FACTOR extends ig.ActionStepBase {
			public value: number;
			public _wm: ig.Config;

			public constructor(a: any);

			public init(a: any): void;
			public run(a: any): any;
		}
		export class SET_SIZE extends ig.ActionStepBase {
			public value: number;
			public _wm: ig.Config;

			public constructor(a: any);

			public init(a: any): void;
			public run(a: any): any;
		}
		export class SET_SPEED extends ig.ActionStepBase {
			public value: number;
			public _wm: ig.Config;

			public constructor(a: any);

			public init(a: any): void;
			public run(a: any): any;
		}
		export class SET_RELATIVE_SPEED extends ig.ActionStepBase {
			public value: number;
			public _wm: ig.Config;

			public constructor(a: any);

			public init(a: any): void;
			public run(a: any): any;
		}
		export class SET_ACCEL_SPEED extends ig.ActionStepBase {
			public value: number;
			public _wm: ig.Config;

			public constructor(a: any);

			public init(a: any): void;
			public run(a: any): any;
		}
		export class SET_STATIC_TIME extends ig.ActionStepBase {
			public value: number;
			public _wm: ig.Config;

			public constructor(a: any);

			public init(a: any): void;
			public run(a: any): any;
		}
		export class DETACH_TIME_PARENT extends ig.ActionStepBase {
			public _wm: ig.Config;

			public constructor();

			public init(): void;
			public run(a: any): any;
		}
		export class SET_WEIGHT extends ig.ActionStepBase {
			public value: number;
			public _wm: ig.Config;

			public constructor(a: any);

			public init(a: any): void;
			public run(a: any): any;
		}
		export class SET_FRICTION extends ig.ActionStepBase {
			public value: number;
			public _wm: ig.Config;

			public constructor(a: any);

			public init(a: any): void;
			public run(a: any): any;
		}
		export class SET_AIR_FRICTION extends ig.ActionStepBase {
			public value: number;
			public _wm: ig.Config;

			public constructor(a: any);

			public init(a: any): void;
			public run(a: any): any;
		}
		export class SET_TERRAIN_FRICTION_IGNORE extends ig.ActionStepBase {
			public _wm: ig.Config;

			public constructor(a: any);

			public init(a: any): void;
			public run(a: any): any;
		}
		export class SET_SHADOW extends ig.ActionStepBase {
			public size: number;
			public _wm: ig.Config;

			public constructor(a: any);

			public init(a: any): void;
			public run(a: any): any;
		}
		export class SET_Z_BOUNCINESS extends ig.ActionStepBase {
			public value: number;
			public _wm: ig.Config;

			public constructor(a: any);

			public init(a: any): void;
			public run(a: any): any;
		}
		export class SET_BOUNCINESS extends ig.ActionStepBase {
			public value: number;
			public _wm: ig.Config;

			public constructor(a: any);

			public init(a: any): void;
			public run(a: any): any;
		}
		export class SET_FACE_FIX extends ig.ActionStepBase {
			public value: boolean;
			public _wm: ig.Config;

			public constructor(a: any);

			public init(a: any): void;
			public run(a: any): any;
		}
		export class SET_FACE extends ig.ActionStepBase {
			public face: any;
			public rotate: boolean;
			public rotateSpeed: number;
			public _wm: ig.Config;

			public constructor(a: any);

			public init(a: any): void;
			public start(): void;
			public run(b: any): any;
		}
		export class SET_CLOSEST_FACE extends ig.ActionStepBase {
			public face: any;
			public rotate: boolean;
			public rotateSpeed: number;
			public _wm: ig.Config;

			public constructor(a: any);

			public init(a: any): void;
			public start(b: any): void;
			public run(b: any): any;
		}
		export class SET_FACE_TO_VEL extends ig.ActionStepBase {
			public _wm: ig.Config;

			public constructor();

			public init(): void;
			public start(a: any): void;
		}
		export class ROTATE_FACE extends ig.ActionStepBase {
			public time: number;
			public turn: number;
			public _wm: ig.Config;

			public constructor(a: any);

			public init(a: any): void;
			public start(a: any): void;
			public run(a: any): any;
		}
		export class SET_FACE_TO_DIR extends ig.ActionStepBase {
			public dir: any;
			public _wm: ig.Config;

			public constructor(a: any);

			public init(a: any): void;
			public start(b: any): void;
		}
		export class SET_FACE_TO_ENTITY extends ig.ActionStepBase {
			public entity: any;
			public rotate: boolean;
			public rotateSpeed: number;
			public _wm: ig.Config;

			public constructor(a: any);

			public init(a: any): void;
			public run(a: any): any;
		}
		export class SET_COLL_TYPE extends ig.ActionStepBase {
			public value: number;
			public _wm: ig.Config;

			public constructor(a: any);

			public init(a: any): void;
			public run(a: any): any;
		}
		export class SET_COLL_SHAPE extends ig.ActionStepBase {
			public value: number;
			public _wm: ig.Config;

			public constructor(a: any);

			public init(a: any): void;
			public run(a: any): any;
		}
		export class SET_SLIP_THROUGH extends ig.ActionStepBase {
			public value: boolean;
			public _wm: ig.Config;

			public constructor(a: any);

			public init(a: any): void;
			public run(a: any): any;
		}
		export class SHOW_ANIMATION extends ig.ActionStepBase {
			public anim: any;
			public followUp: any;
			public wait: any;
			public viaWalkConfig: boolean;
			public _wm: ig.Config;

			public constructor(a: any);

			public init(a: any): void;
			public start(a: any): void;
			public run(a: any): any;
		}
		export class WAIT_UNTIL_ANIM_LOOP_END extends ig.ActionStepBase {
			public _wm: ig.Config;

			public constructor();

			public init(): void;
			public start(): void;
			public run(a: any): any;
		}
		export class SHOW_PART_ANIMATION extends ig.ActionStepBase {
			public anim: any;
			public followUp: any;
			public wait: any;
			public _wm: ig.Config;

			public constructor(a: any);

			public init(a: any): void;
			public start(a: any): void;
		}
		export class SHOW_RANDOM_ANIMATION extends ig.ActionStepBase {
			public randAnims: any;
			public _wm: ig.Config;

			public constructor(a: any);

			public init(a: any): void;
			public start(a: any): void;
		}
		export class SHOW_EXTERN_ANIM extends ig.ActionStepBase {
			public animSheet: ig.AnimationSheet;
			public animName: any;
			public followUpSheet: ig.AnimationSheet;
			public followUpName: any;
			public wait: any;
			public _wm: ig.Config;

			public constructor(a: any);

			public init(a: any): void;
			public clearCached(): void;
			public start(a: any): void;
			public run(a: any): any;
		}
		export class CLEAR_ANIMATION extends ig.ActionStepBase {
			public _wm: ig.Config;

			public constructor();

			public init(): void;
			public run(a: any): any;
		}
		export class SET_COLL_SIZE extends ig.ActionStepBase {
			public _wm: ig.Config;

			public constructor(a: any);

			public init(a: any): void;
			public start(a: any): void;
		}
		export class CHANGE_VAR_NUMBER extends ig.ActionStepBase {
			public varName: any;
			public changeType: any;
			public value: number;
			public _wm: ig.Config;

			public constructor(a: any);

			public init(a: any): void;
			public run(a: any): any;
		}
		export class SET_RANDOM_VAR_NUMBER extends ig.ActionStepBase {
			public varName: any;
			public min: number;
			public max: number;
			public _wm: ig.Config;

			public constructor(a: any);

			public init(a: any): void;
			public run(): any;
		}
		export class CHANGE_VAR_BOOL extends ig.ActionStepBase {
			public varName: any;
			public changeType: any;
			public value: number;
			public _wm: ig.Config;

			public constructor(a: any);

			public init(a: any): void;
			public run(a: any): any;
		}
		export class CHANGE_VAR_STRING extends ig.ActionStepBase {
			public varName: any;
			public changeType: any;
			public value: number;
			public _wm: ig.Config;

			public constructor(a: any);

			public init(a: any): void;
			public run(a: any): any;
		}
		export class CHANGE_VAR_LANG extends ig.ActionStepBase {
			public varName: any;
			public changeType: any;
			public value: ig.LangLabel;
			public _wm: ig.Config;

			public constructor(a: any);

			public init(a: any): void;
			public run(a: any): any;
		}
		export class SET_ATTRIB_VEC2 extends ig.ActionStepBase {
			public name: any;
			public value: any;
			public _wm: ig.Config;

			public constructor(a: any);

			public init(a: any): void;
			public run(a: any): any;
		}
		export class SET_ATTRIB_BOOL extends ig.ActionStepBase {
			public name: any;
			public value: any;
			public _wm: ig.Config;
			public init: any;
			public run: any;

		}
		export class SET_ATTRIB_STRING extends ig.ActionStepBase {
			public name: any;
			public value: any;
			public _wm: ig.Config;

			public constructor(a: any);

			public init(a: any): void;
			public run(a: any): any;
		}
		export class SET_ATTRIB_NUMBER extends ig.ActionStepBase {
			public attribName: any;
			public changeOperator: any;
			public value: number;
			public _wm: ig.Config;

			public constructor(a: any);

			public init(a: any): void;
			public run(a: any): any;
		}
		export class SET_ATTRIB_NUMBER_RANDOM extends ig.ActionStepBase {
			public attribName: any;
			public _wm: ig.Config;

			public constructor(a: any);

			public init(a: any): void;
			public run(a: any): any;
		}
		export class SET_ATTRIB_FACE extends ig.ActionStepBase {
			public name: any;
			public _wm: ig.Config;

			public constructor(a: any);

			public init(a: any): void;
			public start(a: any): void;
			public run(): any;
		}
		export class SET_ATTRIB_POS extends ig.ActionStepBase {
			public name: any;
			public value: any;
			public _wm: ig.Config;

			public constructor(a: any);

			public init(a: any): void;
			public start(a: any): void;
			public run(): any;
		}
		export class PLAY_SOUND extends ig.ActionStepBase {
			public sound: ig.Sound;
			public global: boolean;
			public loop: boolean;
			public settings: any;
			public _wm: ig.Config;

			public constructor(a: any);

			public init(a: any): void;
			public clearCached(): void;
			public run(a: any): any;
		}
		export class STOP_SOUNDS extends ig.ActionStepBase {
			public _wm: ig.Config;

			public constructor();

			public init(): void;
			public run(a: any): any;
		}
		export class PLAY_RANDOM_SOUND extends ig.ActionStepBase {
			public sounds: any;
			public global: boolean;
			public loop: boolean;
			public settings: any;
			public _wm: ig.Config;

			public constructor(a: any);

			public init(a: any): void;
			public clearCached(): void;
			public run(a: any): any;
		}
		export class HIDE extends ig.ActionStepBase {
			public _wm: ig.Config;

			public constructor();

			public init(): void;
			public run(a: any): any;
		}
		export class HIDE_OTHER extends ig.ActionStepBase {
			public entity: any;
			public _wm: ig.Config;

			public constructor(a: any);

			public init(a: any): void;
			public run(): any;
		}
		export class SET_POS extends ig.ActionStepBase {
			public newPos: any;
			public _wm: ig.Config;

			public constructor(a: any);

			public init(a: any): void;
			public start(a: any): void;
		}
		export class ROUND_POSITION extends ig.ActionStepBase {
			public _wm: ig.Config;

			public constructor();

			public init(): void;
			public start(a: any): void;
		}
		export class ADD_Z_POS_DELTA extends ig.ActionStepBase {
			public zDelta: any;
			public _wm: ig.Config;

			public constructor(a: any);

			public init(a: any): void;
			public start(a: any): void;
		}
		export class TELEPORT_TO_ATTRIB_POS extends ig.ActionStepBase {
			public newPos: any;
			public _wm: ig.Config;

			public constructor(a: any);

			public init(a: any): void;
			public start(a: any): void;
		}
		export class INTERPOLATE_POSITION extends ig.ActionStepBase {
			public newPos: any;
			public duration: number;
			public keySpline: any;
			public timePerTile: boolean;
			public _wm: ig.Config;

			public constructor(a: any);

			public init(a: any): void;
			public start(a: any): void;
			public run(a: any): any;
		}
		export class Z_INTERPOLATE extends ig.ActionStepBase {
			public newZPos: number;
			public duration: number;
			public keySpline: any;
			public _wm: ig.Config;

			public constructor(a: any);

			public init(a: any): void;
			public start(a: any): void;
			public run(a: any): any;
		}
		export class DO_ATTRIB_ACTION extends ig.ActionStepBase {
			public _wm: ig.Config;

			public constructor(a: any);

			public init(a: any): void;
			public start(a: any): void;
		}
		export class ADD_ANIM_MOD extends ig.ActionStepBase {
			public _wm: ig.Config;

			public constructor(a: any);

			public init(a: any): void;
			public start(a: any): void;
		}
		export class REMOVE_ANIM_MOD extends ig.ActionStepBase {
			public _wm: ig.Config;

			public constructor(a: any);

			public init(a: any): void;
			public start(a: any): void;
		}
		export class FOCUS_CAMERA extends ig.EventStepBase {
			public offsetX: number;
			public offsetY: number;
			public speed: number;
			public transition: any;
			public wait: boolean;
			public waitSkip: number;
			public zoom: number;
			public _wm: ig.Config;

			public constructor(d: any);

			public init(d: any): void;
			public start(b: any): void;
			public run(): any;
		}
		export class RESET_CAMERA extends ig.EventStepBase {
			public speed: number;
			public transition: any;
			public wait: boolean;
			public waitSkip: number;
			public _wm: ig.Config;

			public constructor(a: any);

			public init(a: any): void;
			public start(a: any): void;
			public run(): any;
		}
		export class SET_CAMERA_ZOOM extends ig.EventStepBase {
			public duration: number;
			public transition: any;
			public wait: boolean;
			public waitSkip: number;
			public _wm: ig.Config;

			public constructor(a: any);

			public init(a: any): void;
			public start(a: any): void;
			public run(): any;
		}
		export class RUMBLE_SCREEN extends ig.ActionStepBase {
			public rumbleType: any;
			public name: any;
			public duration: number;
			public power: number;
			public speed: number;
			public fade: boolean;
			public _wm: ig.Config;

			public constructor(a: any);

			public init(a: any): void;
			public run(): any;
		}
		export class ADD_SLOW_MOTION extends ig.ActionStepBase {
			public factor: number;
			public time: number;
			public _wm: ig.Config;

			public constructor(b: any);

			public init(b: any): void;
			public start(b: any): void;
		}
		export class CLEAR_SLOW_MOTION extends ig.ActionStepBase {
			public time: number;
			public _wm: ig.Config;

			public constructor(b: any);

			public init(b: any): void;
			public start(b: any): void;
		}
		export class SHOW_EFFECT extends ig.ActionStepBase {
			public effect: ig.EffectHandle;
			public duration: number;
			public offset: any;
			public align: number;
			public rotateFace: number;
			public wait: boolean;
			public waitSkip: number;
			public group: any;
			public partName: any;
			public _wm: ig.Config;

			public constructor(a: any);

			public init(a: any): void;
			public clearCached(): void;
			public start(d: any): void;
			public run(a: any): any;
		}
		export class CLEAR_EFFECTS extends ig.ActionStepBase {
			public entity: any;
			public group: any;
			public _wm: ig.Config;

			public constructor(a: any);

			public init(a: any): void;
			public entityAttachedCondition(a: any): any;
			public actionAttachedCondition(a: any): any;
			public run(a: any): any;
		}
		export class ADD_DARKNESS extends ig.EventStepBase {
			public intensity: number;
			public duration: number;
			public fadeIn: number;
			public fadeOut: number;
			public _wm: ig.Config;

			public constructor(b: any);

			public init(b: any): void;
			public start(b: any): void;
		}
		export class CLEAR_DARKNESS extends ig.EventStepBase {
			public _wm: ig.Config;

			public constructor();

			public init(): void;
			public start(b: any): void;
		}
		export class NAVIGATE_TO_TARGET extends ig.ActionStepBase {
			public maxTime: number;
			public forceTime: boolean;
			public distance: number;
			public planOnly: boolean;
			public targetType: number;
			public _wm: ig.Config;

			public constructor(a: any);

			public init(a: any): void;
			public start(a: any): void;
			public run(a: any): any;
		}
		export class NAVIGATE_ESCAPE_TARGET extends ig.ActionStepBase {
			public maxTime: number;
			public distance: number;
			public throwing: boolean;
			public planOnly: boolean;
			public targetType: number;
			public _wm: ig.Config;

			public constructor(a: any);

			public init(a: any): void;
			public start(a: any): void;
			public run(a: any): any;
		}
		export class NAVIGATE_SIDEWAYS_TARGET extends ig.ActionStepBase {
			public maxTime: number;
			public distance: number;
			public distVariance: number;
			public throwing: boolean;
			public planOnly: boolean;
			public _wm: ig.Config;

			public constructor(a: any);

			public init(a: any): void;
			public start(a: any): void;
			public run(a: any): any;
		}
		export class NAVIGATE_TO_ENTITY extends ig.ActionStepBase {
			public entity: any;
			public maxTime: number;
			public distance: number;
			public ignoreBelow: number;
			public planOnly: boolean;
			public _wm: ig.Config;

			public constructor(a: any);

			public init(a: any): void;
			public start(a: any): void;
			public run(a: any): any;
		}
		export class NAVIGATE_ESCAPE_ENTITY extends ig.ActionStepBase {
			public entity: any;
			public maxTime: number;
			public distance: number;
			public throwing: boolean;
			public planOnly: boolean;
			public _wm: ig.Config;

			public constructor(a: any);

			public init(a: any): void;
			public start(a: any): void;
			public run(a: any): any;
		}
		export class NAVIGATE_DODGE extends ig.ActionStepBase {
			public maxTime: number;
			public distance: number;
			public planOnly: boolean;
			public dodgeType: any;
			public _wm: ig.Config;

			public constructor(a: any);

			public init(a: any): void;
			public start(a: any): void;
			public run(a: any): any;
		}
		export class NAVIGATE_TO_POINT extends ig.ActionStepBase {
			public target: boolean;
			public maxTime: number;
			public distance: number;
			public precise: boolean;
			public planOnly: boolean;
			public _wm: ig.Config;

			public constructor(a: any);

			public init(a: any): void;
			public start(b: any): void;
			public run(c: any): any;
		}
		export class DO_NAVIGATION extends ig.ActionStepBase {
			public maxTime: number;
			public _wm: ig.Config;

			public constructor(a: any);

			public init(a: any): void;
			public start(a: any): void;
			public run(a: any): any;
		}
		export class CANCEL_IF_NAVIGATION_FAILED extends ig.ActionStepBase {
			public time: number;
			public _wm: ig.Config;

			public constructor(a: any);

			public init(a: any): void;
			public start(a: any): void;
			public run(a: any): any;
		}
		export class SET_ATTRIB_CLOSE_TARGET_POS extends ig.ActionStepBase {
			public name: any;
			public distance: number;
			public searchType: any;
			public _wm: ig.Config;

			public constructor(a: any);

			public init(a: any): void;
			public run(b: any): any;
		}
		export class SET_ATTRIB_NAV_TARGET_POS extends ig.ActionStepBase {
			public name: any;
			public distance: number;
			public searchType: any;
			public _wm: ig.Config;

			public constructor(a: any);

			public init(a: any): void;
			public run(a: any): any;
		}
		export class ENTER_DOOR extends ig.ActionStepBase {
			public door: any;
			public _wm: ig.Config;

			public constructor(b: any);

			public init(b: any): void;
			public run(b: any): any;
		}
		export class SET_ZOOM_BLUR extends ig.ActionStepBase {
			public zoomType: any;
			public fadeIn: number;
			public duration: number;
			public fadeOut: number;
			public name: any;
			public _wm: ig.Config;

			public constructor(b: any);

			public init(b: any): void;
			public start(b: any): void;
		}
		export class FADE_OUT_ZOOM_BLUR extends ig.ActionStepBase {
			public name: any;
			public fadeOut: number;
			public _wm: ig.Config;

			public constructor(b: any);

			public init(b: any): void;
			public start(): void;
		}
		export class ADD_TEMP_INFLUENCE extends ig.ActionStepBase {
			public _wm: ig.Config;

			public constructor(b: any);

			public init(b: any): void;
			public start(a: any): void;
		}
		export class CLEAR_TEMP_INFLUENCE extends ig.ActionStepBase {
			public _wm: ig.Config;

			public constructor();

			public init(): void;
			public start(a: any): void;
		}
		export class SHOW_AR_MSG extends ig.ActionStepBase {
			public text: ig.LangLabel;
			public time: any;
			public mode: boolean;
			public color: any;
			public actionDetached: boolean;
			public partName: any;
			public _wm: ig.Config;

			public constructor(a: any);

			public init(a: any): void;
			public start(a: any): void;
		}
		export class CLEAR_AR_MSG extends ig.ActionStepBase {
			public _wm: ig.Config;

			public constructor();

			public init(): void;
			public start(a: any): void;
		}
		export class SET_SOUNDTYPE extends ig.ActionStepBase {
			public value: any;
			public _wm: ig.Config;

			public constructor(a: any);

			public init(a: any): void;
			public run(a: any): any;
		}
		export class CHANGE_STAT_MAP_NUMBER extends ig.ActionStepBase {
			public map: string;
			public stat: string;
			public changeType: any;
			public value: number;
			public _wm: ig.Config;

			public constructor(a: any);

			public init(a: any): void;
			public start(): void;
		}
		export class CIRCLE_ENTITY extends ig.ActionStepBase {
			public _wm: ig.Config;

			public constructor(a: any);

			public init(a: any): void;
			public start(a: any, b: any): void;
			public run(e: any): any;
		}
		export class FACE_TO_TARGET extends ig.ActionStepBase {
			public value: boolean;
			public immediately: boolean;
			public _wm: ig.Config;

			public constructor(a: any);

			public init(a: any): void;
			public run(a: any): any;
		}
		export class UNLOCK_ENEMY extends ig.ActionStepBase {
			public enemy: any;
			public asSpecial: any;
			public _wm: ig.Config;

			public constructor(a: any);

			public init(a: any): void;
			public run(): any;
		}
		export class FACE_TO_TARGET_OFFSET extends ig.ActionStepBase {
			public value: boolean;
			public _wm: ig.Config;

			public constructor(a: any);

			public init(a: any): void;
			public run(a: any): any;
		}
		export class FACE_TO_TARGET_SPEED extends ig.ActionStepBase {
			public value: boolean;
			public _wm: ig.Config;

			public constructor(a: any);

			public init(a: any): void;
			public run(a: any): any;
		}
		export class FACE_ALIGN extends ig.ActionStepBase {
			public value: boolean;
			public _wm: ig.Config;

			public constructor(a: any);

			public init(a: any): void;
			public run(a: any): any;
		}
		export class SHOW_THROW_FX extends ig.ActionStepBase {
			public _wm: ig.Config;

			public constructor(a: any);

			public init(a: any): void;
			public start(a: any): void;
		}
		export class COMBAT_ART_CHARGE extends ig.ActionStepBase {
			public _wm: ig.Config;

			public constructor(a: any);

			public init(a: any): void;
			public start(a: any): void;
			public chargeStep(a: any): void;
			public run(a: any): any;
		}
		export class MOVE_TO_DISTANCE extends ig.ActionStepBase {
			public min: number;
			public max: number;
			public maxTime: number;
			public offset: any;
			public forceTime: boolean;
			public _wm: ig.Config;

			public constructor(a: any);

			public init(a: any): void;
			public start(a: any): void;
			public run(a: any): any;
		}
		export class MOVE_TO_PINPOINT extends ig.ActionStepBase {
			public maxTime: number;
			public offset: any;
			public forceTime: boolean;
			public _wm: ig.Config;

			public constructor(a: any);

			public init(a: any): void;
			public start(a: any): void;
			public _calculateDir(a: any, b: any): any;
			public run(a: any): any;
		}
		export class SET_ATTRIB_CLOSEST_ENTITY extends ig.ActionStepBase {
			public _wm: ig.Config;

			public constructor(a: any);

			public init(a: any): void;
			public start(a: any): void;
		}
		export class MOVE_TO_ATTRIB_ENTITY extends ig.ActionStepBase {
			public _wm: ig.Config;

			public constructor(a: any);

			public init(a: any): void;
			public start(a: any): void;
			public run(a: any): any;
		}
		export class SET_COMBATANT_PARTY extends ig.ActionStepBase {
			public _wm: ig.Config;

			public constructor(a: any);

			public init(a: any): void;
			public run(a: any): any;
		}
		export class JUMP_TO_TARGET extends ig.ActionStepBase {
			public jumpSpeed: number;
			public adjustAbove: number;
			public offset: any;
			public _wm: ig.Config;

			public constructor(a: any);

			public init(a: any): void;
			public start(a: any): void;
			public run(a: any): any;
		}
		export class JUMP_TARGET_MOVEMENT extends ig.ActionStepBase {
			public adjustAbove: number;
			public offset: any;
			public _wm: ig.Config;

			public constructor(a: any);

			public init(a: any): void;
			public start(a: any): void;
			public run(a: any): any;
		}
		export class SET_MISSILE_SPEED extends ig.ActionStepBase {
			public _wm: ig.Config;

			public constructor(a: any);

			public init(a: any): void;
			public start(a: any): void;
		}
		export class ESCAPE_FROM_TARGET extends ig.ActionStepBase {
			public distance: number;
			public minTime: number;
			public maxTime: number;
			public _wm: ig.Config;

			public constructor(a: any);

			public init(a: any): void;
			public start(a: any): void;
			public run(a: any): any;
		}
		export class CIRCLE_TARGET extends ig.ActionStepBase {
			public minTime: number;
			public maxTime: number;
			public _wm: ig.Config;

			public constructor(a: any);

			public init(a: any): void;
			public start(a: any): void;
			public run(a: any): any;
		}
		export class STICK_TO_TARGET extends ig.ActionStepBase {
			public _wm: ig.Config;

			public constructor(a: any);

			public init(a: any): void;
			public start(a: any): void;
			public run(a: any): any;
		}
		export class STICKY_CIRCLE_AROUND extends ig.ActionStepBase {
			public _wm: ig.Config;

			public constructor(a: any);

			public init(a: any): void;
			public start(a: any): void;
			public run(a: any): any;
		}
		export class SET_CIRCLE_AROUND_POS extends ig.ActionStepBase {
			public _wm: ig.Config;

			public constructor(a: any);

			public init(a: any): void;
			public start(a: any): void;
			public _getDeltaVector(a: any, b: any): any;
		}
		export class TACKLE extends ig.ActionStepBase {
			public time: number;
			public missReactTime: any;
			public attack: any;
			public cancelOnHit: boolean;
			public withBranches: boolean;
			public rotateSpeed: number;
			public _wm: ig.Config;

			public constructor(a: any);

			public init(a: any): void;
			public start(a: any): void;
			public run(a: any): any;
			public getBranchNames(): any;
			public getNext(a: any): any;
		}
		export class CIRCLE_ATTACK extends ig.ActionStepBase {
			public circleSettings: any;
			public attack: any;
			public fixPos: boolean;
			public _wm: ig.Config;

			public constructor(a: any);

			public init(a: any): void;
			public run(a: any): any;
		}
		export class COMBAT_SWEEP extends ig.ActionStepBase {
			public _wm: ig.Config;

			public constructor(a: any);

			public init(a: any): void;
			public run(a: any): any;
		}
		export class SET_TARGET_Z_VEL extends ig.ActionStepBase {
			public value: any;
			public _wm: ig.Config;

			public constructor(a: any);

			public init(a: any): void;
			public run(a: any): any;
		}
		export class PUSH_PULL_FORCE extends ig.ActionStepBase {
			public pushPullSettings: any;
			public _wm: ig.Config;

			public constructor(a: any);

			public init(a: any): void;
			public clearCached(): void;
			public run(a: any): any;
		}
		export class SET_INVINCIBLE extends ig.ActionStepBase {
			public value: boolean;
			public _wm: ig.Config;

			public constructor(a: any);

			public init(a: any): void;
			public run(a: any): any;
		}
		export class MOD_GENERIC_PROXY extends ig.ActionStepBase {
			public killEffect: ig.EffectHandle;
			public clearKillEffect: boolean;
			public hp: any;
			public _wm: ig.Config;

			public constructor(a: any);

			public init(a: any): void;
			public clearCached(): void;
			public start(a: any): void;
		}
		export class CONNECT_PROXY_TO_TARGET extends ig.ActionStepBase {
			public _wm: ig.Config;

			public constructor();

			public init(): void;
			public start(a: any): void;
		}
		export class DISCONNECT_PROXY_FROM_TARGET extends ig.ActionStepBase {
			public _wm: ig.Config;

			public constructor();

			public init(): void;
			public start(a: any): void;
		}
		export class SET_ELEMENT_FILTER extends ig.ActionStepBase {
			public value: boolean;
			public _wm: ig.Config;

			public constructor(a: any);

			public init(a: any): void;
			public run(a: any): any;
		}
		export class DODGE_FREE_LINE extends ig.ActionStepBase {
			public time: number;
			public _wm: ig.Config;

			public constructor(a: any);

			public init(a: any): void;
			public start(a: any): void;
			public run(a: any): any;
		}
		export class ENABLE_REACTION extends ig.ActionStepBase {
			public reaction: any;
			public _wm: ig.Config;

			public constructor(a: any);

			public init(a: any): void;
			public run(a: any): any;
		}
		export class SET_SPIKE_DAMAGE extends ig.ActionStepBase {
			public value: any;
			public _wm: ig.Config;

			public constructor(a: any);

			public init(a: any): void;
			public run(a: any): any;
		}
		export class DISABLE_REACTION extends ig.ActionStepBase {
			public reaction: any;
			public _wm: ig.Config;

			public constructor(a: any);

			public init(a: any): void;
			public run(a: any): any;
		}
		export class SET_DAMAGE_FACTOR extends ig.ActionStepBase {
			public value: any;
			public _wm: ig.Config;

			public constructor(a: any);

			public init(a: any): void;
			public run(a: any): any;
		}
		export class SET_HIT_STABLE extends ig.ActionStepBase {
			public value: any;
			public _wm: ig.Config;

			public constructor(a: any);

			public init(a: any): void;
			public run(a: any): any;
		}
		export class SET_DAMAGE_CEILING extends ig.ActionStepBase {
			public value: any;
			public _wm: ig.Config;

			public constructor(a: any);

			public init(a: any): void;
			public run(a: any): any;
		}
		export class CLEAR_DAMAGE_CEILING extends ig.ActionStepBase {
			public _wm: ig.Config;

			public constructor(a: any);

			public init(a: any): void;
			public run(a: any): any;
		}
		export class SET_ENEMY_STATE extends ig.ActionStepBase {
			public enemyState: number;
			public _wm: ig.Config;

			public constructor(a: any);

			public init(a: any): void;
			public run(a: any): any;
		}
		export class SHOOT_PROXY extends ig.ActionStepBase {
			public proxySrc: any;
			public offset: any;
			public align: any;
			public dir: any;
			public posType: any;
			public _wm: ig.Config;

			public constructor(a: any);

			public init(a: any): void;
			public clearCached(): void;
			public run(a: any): any;
		}
		export class SET_HIT_PROXY extends ig.ActionStepBase {
			public proxySrc: any;
			public offset: any;
			public align: any;
			public posType: any;
			public _wm: ig.Config;

			public constructor(a: any);

			public init(a: any): void;
			public clearCached(): void;
			public start(a: any): void;
		}
		export class SET_PROXY_OWNER_TO_POS extends ig.ActionStepBase {
			public _wm: ig.Config;

			public constructor();

			public init(): void;
			public clearCached(): void;
			public run(a: any): any;
		}
		export class CLEAR_HIT_PROXY extends ig.ActionStepBase {
			public _wm: ig.Config;

			public constructor();

			public init(): void;
			public start(a: any): void;
		}
		export class SHOOT_PROXY_RANGE extends ig.ActionStepBase {
			public forceSettings: any;
			public _wm: ig.Config;

			public constructor(a: any);

			public init(a: any): void;
			public clearCached(): void;
			public run(a: any): any;
		}
		export class SHOOT_PROXY_GRID extends ig.ActionStepBase {
			public _wm: ig.Config;

			public constructor(a: any);

			public init(a: any): void;
			public clearCached(): void;
			public run(a: any): any;
		}
		export class STOP_REPEATING_FORCE extends ig.ActionStepBase {
			public _wm: ig.Config;

			public constructor();

			public init(): void;
			public run(a: any): any;
		}
		export class UNSTICK_STICKING_PROXIES extends ig.ActionStepBase {
			public _wm: ig.Config;

			public constructor();

			public init(): void;
			public start(a: any): void;
		}
		export class REMOVE_PROXIES extends ig.ActionStepBase {
			public _wm: ig.Config;

			public constructor(a: any);

			public init(a: any): void;
			public start(a: any): void;
		}
		export class FANCY_AIM extends ig.ActionStepBase {
			public _wm: ig.Config;

			public constructor(a: any);

			public init(a: any): void;
			public start(a: any): void;
			public run(a: any): any;
		}
		export class WAIT_UNTIL_PLAYER_ACTION extends ig.ActionStepBase {
			public _wm: ig.Config;

			public constructor(a: any);

			public init(a: any): void;
			public start(a: any): void;
			public run(a: any): any;
		}
		export class SHARE_PROXY_TEMP_TARGET extends ig.ActionStepBase {
			public _wm: ig.Config;

			public constructor(a: any);

			public init(a: any): void;
			public start(a: any): void;
		}
		export class WAIT_UNTIL_PROXIES_DONE extends ig.ActionStepBase {
			public _wm: ig.Config;

			public constructor(a: any);

			public init(a: any): void;
			public run(a: any): any;
		}
		export class WAIT_UNTIL_COMBAT_TRUE extends ig.ActionStepBase {
			public _wm: ig.Config;

			public constructor(a: any);

			public init(a: any): void;
			public start(a: any): void;
			public run(a: any): any;
		}
		export class WAIT_UNTIL_TRAP_OVER extends ig.ActionStepBase {
			public _wm: ig.Config;

			public constructor();

			public init(): void;
			public start(): void;
			public run(a: any): any;
		}
		export class WAIT_UNTIL_TARGET_DEFEATED extends ig.ActionStepBase {
			public _wm: ig.Config;

			public constructor(a: any);

			public init(a: any): void;
			public start(a: any): void;
			public run(a: any): any;
		}
		export class SPAWN_BURSTS extends ig.ActionStepBase {
			public offset: any;
			public dir: any;
			public inFaceDir: boolean;
			public burstSettings: any;
			public dirRotate: number;
			public _wm: ig.Config;

			public constructor(a: any);

			public init(a: any): void;
			public clearCached(): void;
			public run(a: any): any;
		}
		export class DIRECT_HIT extends ig.ActionStepBase {
			public directHitSettings: any;
			public effect: ig.EffectHandle;
			public _wm: ig.Config;

			public constructor(a: any);

			public init(a: any): void;
			public clearCached(): void;
			public start(a: any): void;
		}
		export class CLEAR_STUN_LOCKED extends ig.ActionStepBase {
			public directHitSettings: any;
			public effect: any;
			public _wm: ig.Config;

			public constructor();

			public init(): void;
			public clearCached(): void;
			public start(a: any): void;
		}
		export class REGEN_HP extends ig.ActionStepBase {
			public _wm: ig.Config;

			public constructor(a: any);

			public init(a: any): void;
			public start(a: any): void;
		}
		export class HEAL_STATUS extends ig.ActionStepBase {
			public _wm: ig.Config;

			public constructor();

			public init(): void;
			public start(a: any): void;
		}
		export class CLEAR_STATUS_BAR extends ig.ActionStepBase {
			public _wm: ig.Config;

			public constructor();

			public init(): void;
			public start(a: any): void;
		}
		export class SET_ENEMY_STATUS_VISIBILITY extends ig.ActionStepBase {
			public _wm: ig.Config;

			public constructor(a: any);

			public init(a: any): void;
			public start(a: any): void;
		}
		export class SET_HP_CRITICAL extends ig.ActionStepBase {
			public _wm: ig.Config;

			public constructor();

			public init(): void;
			public start(a: any): void;
		}
		export class REDUCE_HP extends ig.ActionStepBase {
			public _wm: ig.Config;

			public constructor(a: any);

			public init(a: any): void;
			public start(a: any): void;
		}
		export class SET_HIT_IGNORE extends ig.ActionStepBase {
			public _wm: ig.Config;

			public constructor(a: any);

			public init(a: any): void;
			public start(a: any): void;
		}
		export class WAIT_UNTIL_GUARDED extends ig.ActionStepBase {
			public _wm: ig.Config;

			public constructor(a: any);

			public init(a: any): void;
			public start(a: any): void;
			public run(a: any): any;
		}
		export class ABSORB_BLOCKED_DAMAGE extends ig.ActionStepBase {
			public _wm: ig.Config;

			public constructor(a: any);

			public init(a: any): void;
			public start(a: any): void;
		}
		export class ABSORB_DAMAGE extends ig.ActionStepBase {
			public _wm: ig.Config;

			public constructor(a: any);

			public init(a: any): void;
			public start(a: any): void;
		}
		export class ABSORB_DAMAGE_VIA_SUM extends ig.ActionStepBase {
			public _wm: ig.Config;

			public constructor(a: any);

			public init(a: any): void;
			public start(a: any): void;
		}
		export class CONSUME_SP extends ig.ActionStepBase {
			public _wm: ig.Config;

			public constructor(a: any);

			public init(a: any): void;
			public start(a: any): void;
		}
		export class SET_FREE_LINE_CMD extends ig.ActionStepBase {
			public time: number;
			public _wm: ig.Config;

			public constructor(a: any);

			public init(a: any): void;
			public run(a: any): any;
		}
		export class ADD_SHIELD extends ig.ActionStepBase {
			public name: any;
			public shield: any;
			public actionDetached: boolean;
			public perfectGuardTime: any;
			public _wm: ig.Config;

			public constructor(a: any);

			public init(a: any): void;
			public clearCached(): void;
			public run(a: any): any;
		}
		export class REMOVE_SHIELD extends ig.ActionStepBase {
			public name: any;
			public _wm: ig.Config;

			public constructor(a: any);

			public init(a: any): void;
			public run(a: any): any;
		}
		export class SPAWN_ASSAULT extends ig.ActionStepBase {
			public _wm: ig.Config;

			public constructor(a: any);

			public init(a: any): void;
			public run(a: any): any;
		}
		export class SHOW_COMBAT_MSG extends ig.ActionStepBase {
			public _wm: ig.Config;

			public constructor(a: any);

			public init(a: any): void;
			public start(a: any): void;
		}
		export class ADD_TARGET_STUN_LOCK extends ig.ActionStepBase {
			public _wm: ig.Config;

			public constructor();

			public init(): void;
			public run(a: any): any;
		}
		export class THROW_ENERGY_DROPS extends ig.ActionStepBase {
			public target: any;
			public dropType: any;
			public healValue: any;
			public _wm: ig.Config;

			public constructor(a: any);

			public init(a: any): void;
			public run(a: any): any;
		}
		export class THROW_GENERIC_DROP extends ig.ActionStepBase {
			public target: any;
			public dropType: any;
			public minVal: any;
			public maxVal: any;
			public varIncrease: any;
			public circleEffect: any;
			public pickupEffect: any;
			public _wm: ig.Config;

			public constructor(a: any);

			public init(a: any): void;
			public run(a: any): any;
		}
		export class NAVIGATE_TO_SPAWN_POINT extends ig.ActionStepBase {
			public maxTime: number;
			public maxDistance: number;
			public precise: boolean;
			public _wm: ig.Config;

			public constructor(a: any);

			public init(a: any): void;
			public start(a: any): void;
			public run(a: any): any;
		}
		export class DO_DAMAGE_MOVEMENT extends ig.ActionStepBase {
			public flyLevel: any;
			public breaking: boolean;
			public stable: boolean;
			public wait: boolean;
			public _wm: ig.Config;

			public constructor(a: any);

			public init(a: any): void;
			public start(a: any): void;
			public run(a: any): any;
		}
		export class COMBAT_IF extends ig.ActionStepBase {
			public conditions: sc.CombatConditions;
			public withElse: boolean;
			public branches: any;
			public _wm: ig.Config;

			public constructor(a: any);

			public init(a: any): void;
			public getBranchNames(): any;
			public getNext(a: any): any;
		}
		export class CHANGE_COLLAB_VAR extends ig.ActionStepBase {
			public varName: any;
			public changeOperator: any;
			public value: number;
			public _wm: ig.Config;

			public constructor(a: any);

			public init(a: any): void;
			public run(a: any): any;
		}
		export class SET_COLLAB_BREAK_TYPE extends ig.ActionStepBase {
			public _wm: ig.Config;

			public constructor(a: any);

			public init(a: any): void;
			public start(a: any): void;
		}
		export class ASSIGN_COLLAB_POINTS extends ig.ActionStepBase {
			public _wm: ig.Config;

			public constructor(a: any);

			public init(a: any): void;
			public start(a: any): void;
		}
		export class SET_ATTRIB_TARGET_VALUE extends ig.ActionStepBase {
			public _wm: ig.Config;

			public constructor(a: any);

			public init(a: any): void;
			public start(a: any): void;
		}
		export class SET_COLLAB_ENTITY extends ig.ActionStepBase {
			public entityType: any;
			public entityLabel: any;
			public labelFilter: any;
			public _wm: ig.Config;

			public constructor(a: any);

			public init(a: any): void;
			public start(a: any): void;
		}
		export class STORE_IN_COLLAB_PARTNER extends ig.ActionStepBase {
			public label: any;
			public _wm: ig.Config;

			public constructor(a: any);

			public init(a: any): void;
			public start(a: any): void;
		}
		export class CONNECT_HP_TO_STORED_ENEMIES extends ig.ActionStepBase {
			public _wm: ig.Config;

			public constructor();

			public init(): void;
			public start(a: any): void;
		}
		export class CONNECT_HP_TO_TYPES_ENEMIES extends ig.EventStepBase {
			public target: number;
			public _wm: ig.Config;

			public constructor(a: any);

			public init(a: any): void;
			public start(a: any): void;
		}
		export class UPDATE_RESPAWN_POINT extends ig.ActionStepBase {
			public _wm: ig.Config;

			public constructor();

			public init(): void;
			public start(a: any): void;
		}
		export class SEND_ENEMY_MSG extends ig.ActionStepBase {
			public _wm: ig.Config;

			public constructor(a: any);

			public init(a: any): void;
			public run(a: any): any;
		}
		export class RESET_TRACKER extends ig.ActionStepBase {
			public tracker: any;
			public forceValue: any;
			public _wm: ig.Config;

			public constructor(a: any);

			public init(a: any): void;
			public start(a: any): void;
		}
		export class RESET_FREQUENCY extends ig.ActionStepBase {
			public tracker: any;
			public forceValue: any;
			public _wm: ig.Config;

			public constructor(a: any);

			public init(a: any): void;
			public start(a: any): void;
		}
		export class RELEASE_STORED_ENEMIES extends ig.ActionStepBase {
			public align: any;
			public distance: number;
			public centralAngle: number;
			public startAngle: number;
			public actionName: any;
			public uniformRandom: number;
			public _wm: ig.Config;

			public constructor(a: any);

			public init(a: any): void;
			public start(a: any): void;
		}
		export class REASSIGN_TARGET extends ig.ActionStepBase {
			public _wm: ig.Config;

			public constructor();

			public init(): void;
			public start(a: any): void;
		}
		export class DESTROY_DESTRUCTIBLES extends ig.ActionStepBase {
			public _wm: ig.Config;

			public constructor();

			public init(): void;
			public start(): void;
		}
		export class SPAWN_ENEMIES extends ig.ActionStepBase {
			public forceSettings: any;
			public enemyInfo: sc.EnemyInfo;
			public enemyType: any;
			public _wm: ig.Config;

			public constructor(a: any);

			public init(a: any): void;
			public clearCached(): void;
			public start(a: any): void;
		}
		export class SPAWN_ENEMY_CLOSEBY extends ig.ActionStepBase {
			public forceSettings: any;
			public enemyInfo: sc.EnemyInfo;
			public enemyType: any;
			public _wm: ig.Config;

			public constructor(a: any);

			public init(a: any): void;
			public clearCached(): void;
			public start(a: any): void;
		}
		export class KILL_ENEMIES extends ig.ActionStepBase {
			public enemyType: any;
			public noRumble: boolean;
			public _wm: ig.Config;

			public constructor(a: any);

			public init(a: any): void;
			public start(): void;
		}
		export class SELF_DESTRUCT extends ig.ActionStepBase {
			public entity: any;
			public _wm: ig.Config;

			public constructor(a: any);

			public init(a: any): void;
			public start(a: any): void;
		}
		export class SET_TEMP_TARGET extends ig.ActionStepBase {
			public _wm: ig.Config;

			public constructor(a: any);

			public init(a: any): void;
			public start(a: any): void;
		}
		export class SET_ATTRIB_TARGET_ENTITY extends ig.ActionStepBase {
			public _wm: ig.Config;

			public constructor(a: any);

			public init(a: any): void;
			public start(a: any): void;
		}
		export class SET_CLOSE_TEMP_TARGET extends ig.ActionStepBase {
			public _wm: ig.Config;

			public constructor(a: any);

			public init(a: any): void;
			public start(a: any): void;
		}
		export class SET_OWNER_REPLACE_TARGET extends ig.ActionStepBase {
			public _wm: ig.Config;

			public constructor();

			public init(): void;
			public start(a: any): void;
		}
		export class SET_POI_TEMP_TARGET extends ig.ActionStepBase {
			public _wm: ig.Config;

			public constructor(a: any);

			public init(a: any): void;
			public start(a: any): void;
		}
		export class SET_PROXY_TEMP_TARGET extends ig.ActionStepBase {
			public _wm: ig.Config;

			public constructor(a: any);

			public init(a: any): void;
			public start(a: any): void;
		}
		export class REDUCE_PROXY_HP extends ig.ActionStepBase {
			public _wm: ig.Config;

			public constructor(a: any);

			public init(a: any): void;
			public start(a: any): void;
		}
		export class CLEAR_TEMP_TARGET extends ig.ActionStepBase {
			public _wm: ig.Config;

			public constructor();

			public init(): void;
			public start(a: any): void;
		}
		export class CLEAR_PREV_HIT extends ig.ActionStepBase {
			public _wm: ig.Config;

			public constructor();

			public init(): void;
			public start(a: any): void;
		}
		export class CLEAR_TARGET extends ig.ActionStepBase {
			public _wm: ig.Config;

			public constructor();

			public init(): void;
			public start(a: any): void;
		}
		export class DETOUR_COMPRESSOR_THREAT extends ig.ActionStepBase {
			public _wm: ig.Config;

			public constructor();

			public init(): void;
			public start(a: any): void;
		}
		export class ADD_ACTION_BUFF extends ig.ActionStepBase {
			public _wm: ig.Config;

			public constructor(a: any);

			public init(a: any): void;
			public start(a: any): void;
		}
		export class MOD_ACTION_BUFF_PARAM extends ig.ActionStepBase {
			public _wm: ig.Config;

			public constructor(a: any);

			public init(a: any): void;
			public start(a: any): void;
		}
		export class SET_ATTRIB_POS_COMBAT extends ig.ActionStepBase {
			public _wm: ig.Config;

			public constructor(a: any);

			public init(a: any): void;
			public start(a: any): void;
		}
		export class CHANGE_ENEMY_ANNOTATION extends ig.ActionStepBase {
			public _wm: ig.Config;

			public constructor(b: any);

			public init(b: any): void;
			public run(b: any): any;
		}
		export class DO_ENEMY_ACTION extends ig.ActionStepBase {
			public actionName: any;
			public _wm: ig.Config;

			public constructor(b: any);

			public init(b: any): void;
			public run(b: any): any;
		}
		export class DO_ENEMY_ACTION_INLINE extends ig.ActionStepBase {
			public actionName: any;
			public _wm: ig.Config;

			public constructor(b: any);

			public init(b: any): void;
			public run(b: any): any;
		}
		export class SET_AGGRESSION extends ig.ActionStepBase {
			public value: boolean;
			public _wm: ig.Config;

			public constructor(b: any);

			public init(b: any): void;
			public run(b: any): any;
		}
		export class SET_ENEMY_ELEMENT_MODE extends ig.ActionStepBase {
			public _wm: ig.Config;

			public constructor(b: any);

			public init(b: any): void;
			public start(b: any): void;
		}
		export class SHOW_DREAM_MSG extends ig.EventStepBase {
			public text: ig.LangLabel;
			public time: number;
			public _wm: ig.Config;

			public constructor(a: any);

			public init(a: any): void;
			public start(a: any): void;
			public run(a: any): any;
		}
		export class RESET_NPC extends ig.ActionStepBase {
			public _wm: ig.Config;

			public constructor();

			public init(): void;
			public run(b: any): any;
		}
		export class APPLY_NPC_CONFIG extends ig.EventStepBase {
			public config: any;
			public _wm: ig.Config;

			public constructor(b: any);

			public init(b: any): void;
			public run(b: any): any;
		}
		export class SHOOT_PROXY_PLAYER extends ig.ActionStepBase {
			public proxySrc: any;
			public elementProxy: any;
			public align: number;
			public startDist: number;
			public _wm: ig.Config;

			public constructor(a: any);

			public init(a: any): void;
			public run(a: any): any;
		}
		export class SET_PLAYER_ACTION_BLOCK extends ig.ActionStepBase {
			public blockTypes: any;
			public _wm: ig.Config;

			public constructor(a: any);

			public init(a: any): void;
			public run(a: any): any;
		}
		export class SET_PLAYER_ANIM_SHEET extends ig.ActionStepBase {
			public animSheet: ig.AnimationSheet;
			public _wm: ig.Config;

			public constructor(a: any);

			public init(a: any): void;
			public clearCached(): void;
			public run(a: any): any;
		}
		export class CLEAR_PLAYER_ANIM_SHEET extends ig.ActionStepBase {
			public _wm: ig.Config;

			public constructor();

			public init(): void;
			public run(a: any): any;
		}
		export class SET_PLAYER_INVINCIBLE extends ig.ActionStepBase {
			public factor: boolean;
			public _wm: ig.Config;

			public constructor(a: any);

			public init(a: any): void;
			public run(a: any): any;
		}
		export class PLAYER_ADJUST_FACE extends ig.ActionStepBase {
			public time: number;
			public _wm: ig.Config;

			public constructor(a: any);

			public init(a: any): void;
			public start(a: any): void;
			public run(a: any): any;
		}
		export class PLAYER_ADJUST_MOVE_DIR extends ig.ActionStepBase {
			public _wm: ig.Config;

			public constructor();

			public init(): void;
			public start(a: any): void;
		}
		export class PLAYER_MOVE_TO_DIR extends ig.ActionStepBase {
			public _wm: ig.Config;

			public constructor(a: any);

			public init(a: any): void;
			public start(a: any): void;
			public run(a: any): any;
		}
		export class ADD_PLAYER_CAMERA_TARGET extends ig.ActionStepBase {
			public _wm: ig.Config;

			public constructor(a: any);

			public init(a: any): void;
			public start(a: any): void;
		}
		export class REMOVE_PLAYER_CAMERA_TARGET extends ig.ActionStepBase {
			public _wm: ig.Config;

			public constructor(a: any);

			public init(a: any): void;
			public start(a: any): void;
		}
		export class ADD_PLAYER_SHIELD extends ig.ActionStepBase {
			public _wm: ig.Config;

			public constructor(a: any);

			public init(a: any): void;
			public clearCached(): void;
			public run(a: any): any;
		}
		export class START_ITEM_CONSUME extends ig.ActionStepBase {
			public item: any;
			public _wm: ig.Config;

			public constructor();

			public init(): void;
			public start(a: any): void;
		}
		export class SHOW_FOOD_ICON extends ig.ActionStepBase {
			public icon: any;
			public _wm: ig.Config;

			public constructor(a: any);

			public init(a: any): void;
			public start(a: any): void;
		}
		export class CHANGE_FOOD_ICON extends ig.ActionStepBase {
			public state: any;
			public _wm: ig.Config;

			public constructor(a: any);

			public init(a: any): void;
			public start(a: any): void;
		}
		export class CONSUME_ITEM extends ig.ActionStepBase {
			public item: any;
			public _wm: ig.Config;

			public constructor(a: any);

			public init(a: any): void;
			public start(a: any): void;
		}
		export class OPEN_CHEST extends ig.ActionStepBase {
			public entity: number;

			public constructor(b: any);

			public init(b: any): void;
			public start(): void;
		}
		export class ALIGN_PUSH_PULL_POS extends ig.ActionStepBase {
			public component: any;
			public duration: number;

			public constructor(a: any);

			public init(a: any): void;
			public start(a: any): void;
			public run(a: any): any;
		}
		export class DO_WAVE_TELEPORT extends ig.ActionStepBase {
			public entity: any;

			public constructor(a: any);

			public init(a: any): void;
			public start(): void;
		}
		export class THROW_BOMB extends ig.ActionStepBase {
			public gfx: ig.Image;
			public offset: any;
			public align: any;
			public speed: any;
			public zVel: any;
			public timeAdvance: any;
			public _wm: ig.Config;

			public constructor(a: any);

			public init(a: any): void;
			public clearCached(): void;
			public start(a: any): void;
		}
		export class RAIN_BOMB extends ig.ActionStepBase {
			public gfx: ig.Image;
			public count: any;
			public offset: any;
			public align: any;
			public area: any;
			public zVary: any;
			public _wm: ig.Config;

			public constructor(a: any);

			public init(a: any): void;
			public clearCached(): void;
			public start(a: any): void;
		}
		export class SHOOT_BUBBLE extends ig.ActionStepBase {
			public gfx: ig.Image;
			public offset: any;
			public align: any;
			public speed: any;
			public zVel: any;
			public timeAdvance: any;
			public _wm: ig.Config;

			public constructor(a: any);

			public init(a: any): void;
			public clearCached(): void;
			public start(a: any): void;
		}
		export class SET_ELEMENT_POLE_TIMER extends ig.ActionStepBase {
			public _wm: ig.Config;

			public constructor(a: any);

			public init(a: any): void;
			public start(a: any): void;
		}
		export class PLACE_WAVE_TELEPORT extends ig.ActionStepBase {
			public _wm: ig.Config;

			public constructor(a: any);

			public init(a: any): void;
			public start(a: any): void;
		}
		export class PLACE_TESLA_COIL extends ig.ActionStepBase {
			public _wm: ig.Config;

			public constructor(a: any);

			public init(a: any): void;
			public start(a: any): void;
		}
		export class PLACE_ELEMENT_SHIELD extends ig.ActionStepBase {
			public _wm: ig.Config;

			public constructor(a: any);

			public init(a: any): void;
			public start(a: any): void;
		}
		export class WAIT_UNTIL_ELEMENT_SHIELD_USED extends ig.ActionStepBase {
			public _wm: ig.Config;

			public constructor(a: any);

			public init(a: any): void;
			public run(a: any): any;
		}
		export class STOP_PLAYER_ELEMENT_SHIELD extends ig.ActionStepBase {
			public _wm: ig.Config;

			public constructor(a: any);

			public init(a: any): void;
			public start(): void;
		}
		export class DO_PLATFORM_SHOCKWAVE extends ig.ActionStepBase {
			public _wm: ig.Config;

			public constructor(a: any);

			public init(a: any): void;
			public start(a: any): void;
		}
		export class SET_PARTY_TEMP_TARGET extends ig.ActionStepBase {
			public _wm: ig.Config;

			public constructor(a: any);

			public init(a: any): void;
			public start(b: any): void;
		}
		export class CONSUME_PARTY_SANDWICH extends ig.ActionStepBase {
			public constructor(a: any);

			public init(a: any): void;
			public start(a: any): void;
		}
	}
	export namespace EVENT_STEP {
		export class SELECT_RANDOM extends ig.EventStepBase {
			public options: any;
			public branches: any;
			public _wm: ig.Config;

			public constructor(a: any);

			public init(a: any): void;
			public getBranchNames(): any;
			public getNext(): any;
		}
		export class LABEL extends ig.EventStepBase {
			public name: any;
			public _wm: ig.Config;

			public constructor(a: any);

			public init(a: any): void;
		}
		export class GOTO_LABEL extends ig.EventStepBase {
			public name: any;
			public _wm: ig.Config;

			public constructor(a: any);

			public init(a: any): void;
			public getJumpLabelName(): any;
		}
		export class GOTO_LABEL_WHILE extends ig.EventStepBase {
			public name: any;
			public condition: ig.VarCondition;
			public _wm: ig.Config;

			public constructor(a: any);

			public init(a: any): void;
			public getJumpLabelName(): any;
		}
		export class WAIT extends ig.EventStepBase {
			public time: number;
			public _timer: number;
			public ignoreSlowDown: boolean;
			public _wm: ig.Config;

			public constructor(a: any);

			public init(a: any): void;
			public start(a: any): void;
			public run(a: any): any;
		}
		export class WAIT_RANDOM extends ig.EventStepBase {
			public maxTime: number;
			public minTime: number;
			public _wm: ig.Config;

			public constructor(a: any);

			public init(a: any): void;
			public start(a: any): void;
			public run(a: any): any;
		}
		export class WAIT_UNTIL_TRUE extends ig.EventStepBase {
			public condition: ig.VarCondition;
			public _timer: number;
			public ignoreSlowDown: boolean;
			public _wm: ig.Config;

			public constructor(a: any);

			public init(a: any): void;
			public start(a: any): void;
			public run(a: any): any;
		}
		export class WAIT_UNTIL_ACTION_DONE extends ig.EventStepBase {
			public entity: number;
			public _wm: ig.Config;

			public constructor(a: any);

			public init(a: any): void;
			public start(a: any, b: any): void;
			public run(a: any): any;
		}
		export class STOP_SKIP_MODE extends ig.EventStepBase {
			public _wm: ig.Config;

			public constructor();

			public init(): void;
			public start(): void;
		}
		export class SET_ENTITY_STATIC_TIME extends ig.EventStepBase {
			public entity: any;
			public value: boolean;
			public global: boolean;
			public _wm: ig.Config;

			public constructor(a: any);

			public init(a: any): void;
			public start(a: any, b: any): void;
		}
		export class SET_ENTITY_POS extends ig.EventStepBase {
			public entity: any;
			public position: any;
			public _wm: ig.Config;

			public constructor(a: any);

			public init(a: any): void;
			public start(a: any, b: any): void;
		}
		export class SET_ENTITY_POS_TO_ENTITY extends ig.EventStepBase {
			public entity: any;
			public position: any;
			public _wm: ig.Config;

			public constructor(a: any);

			public init(a: any): void;
			public start(a: any, b: any): void;
		}
		export class SET_ENTITY_ON_TOP_OTHER extends ig.EventStepBase {
			public entity: any;
			public groundEntity: any;
			public _wm: ig.Config;

			public constructor(a: any);

			public init(a: any): void;
			public start(a: any, b: any): void;
		}
		export class ADJUST_ENTITY_POS extends ig.EventStepBase {
			public entity: any;
			public offset: any;
			public _wm: ig.Config;

			public constructor(a: any);

			public init(a: any): void;
			public start(a: any, b: any): void;
		}
		export class HIDE_ENTITY extends ig.EventStepBase {
			public entity: any;
			public _wm: ig.Config;

			public constructor(a: any);

			public init(a: any): void;
			public start(a: any, b: any): void;
		}
		export class SHOW_ENTITY extends ig.EventStepBase {
			public entity: any;
			public _wm: ig.Config;

			public constructor(a: any);

			public init(a: any): void;
			public start(a: any, b: any): void;
		}
		export class SHOW_ANIMATION extends ig.EventStepBase {
			public entity: any;
			public anim: any;
			public reset: boolean;
			public followUp: any;
			public _wm: ig.Config;

			public constructor(a: any);

			public init(a: any): void;
			public start(a: any, b: any): void;
		}
		export class SHOW_EXTERN_ANIM extends ig.EventStepBase {
			public entity: any;
			public animSheet: ig.AnimationSheet;
			public animName: any;
			public followUpSheet: ig.AnimationSheet;
			public followUpName: any;
			public _wm: ig.Config;

			public constructor(a: any);

			public init(a: any): void;
			public clearCached(): void;
			public start(a: any, b: any): void;
		}
		export class CLEAR_ANIMATION extends ig.EventStepBase {
			public _wm: ig.Config;

			public constructor(a: any);

			public init(a: any): void;
			public start(a: any, b: any): void;
		}
		export class DO_ACTION extends ig.EventStepBase {
			public entity: number;
			public action: ig.Action;
			public wait: boolean;
			public keepState: boolean;
			public _actionEntity: any;
			public _wm: ig.Config;

			public constructor(a: any);

			public init(a: any): void;
			public clearCached(): void;
			public start(a: any, b: any): void;
			public run(a: any): any;
		}
		export class TELEPORT extends ig.EventStepBase {
			public map: string;
			public marker: string;
			public _wm: ig.Config;

			public constructor(a: any);

			public init(a: any): void;
			public start(): void;
		}
		export class IF extends ig.EventStepBase {
			public condition: ig.VarCondition;
			public withElse: boolean;
			public branches: any;
			public _wm: ig.Config;

			public constructor(a: any);

			public init(a: any): void;
			public getBranchNames(): any;
			public getNext(): any;
		}
		export class CHANGE_VAR_NUMBER extends ig.EventStepBase {
			public varName: any;
			public changeType: any;
			public value: number;
			public _wm: ig.Config;

			public constructor(a: any);

			public init(a: any): void;
			public start(): void;
		}
		export class SET_RANDOM_VAR_NUMBER extends ig.EventStepBase {
			public varName: any;
			public min: number;
			public max: number;
			public _wm: ig.Config;

			public constructor(a: any);

			public init(a: any): void;
			public start(): void;
		}
		export class ROUND_VAR_NUMBER extends ig.EventStepBase {
			public varName: any;
			public _wm: ig.Config;

			public constructor(a: any);

			public init(a: any): void;
			public start(): void;
		}
		export class SET_VAR_TIME extends ig.EventStepBase {
			public varName: any;
			public changeType: any;
			public value: number;
			public _wm: ig.Config;

			public constructor(a: any);

			public init(a: any): void;
			public start(): void;
		}
		export class CHANGE_VAR_VEC2 extends ig.EventStepBase {
			public varName: any;
			public changeType: any;
			public value: number;
			public _wm: ig.Config;

			public constructor(a: any);

			public init(a: any): void;
			public start(): void;
		}
		export class CHANGE_VAR_VEC3 extends ig.EventStepBase {
			public varName: any;
			public changeType: any;
			public value: number;
			public _wm: ig.Config;

			public constructor(a: any);

			public init(a: any): void;
			public start(): void;
		}
		export class CHANGE_VAR_BOOL extends ig.EventStepBase {
			public varName: any;
			public changeType: any;
			public value: number;
			public _wm: ig.Config;

			public constructor(a: any);

			public init(a: any): void;
			public start(): void;
		}
		export class CLEAR_TEMP_STORAGE extends ig.EventStepBase {
			public _wm: ig.Config;

			public constructor();

			public init(): void;
			public start(): void;
		}
		export class CHANGE_VAR_STRING extends ig.EventStepBase {
			public varName: any;
			public changeType: any;
			public value: number;
			public _wm: ig.Config;

			public constructor(a: any);

			public init(a: any): void;
			public start(): void;
		}
		export class CHANGE_VAR_LANG extends ig.EventStepBase {
			public varName: any;
			public changeType: any;
			public value: ig.LangLabel;
			public _wm: ig.Config;

			public constructor(a: any);

			public init(a: any): void;
			public start(): void;
		}
		export class SET_ATTRIB_VEC2 extends ig.EventStepBase {
			public actor: number;
			public name: any;
			public value: any;
			public _wm: ig.Config;

			public constructor(a: any);

			public init(a: any): void;
			public start(a: any, b: any): void;
		}
		export class SET_ATTRIB_VEC3 extends ig.EventStepBase {
			public actor: number;
			public name: any;
			public value: any;
			public _wm: ig.Config;
			public init: any;
			public start: any;

		}
		export class SET_ATTRIB_STRING extends ig.EventStepBase {
			public actor: number;
			public name: any;
			public value: any;
			public _wm: ig.Config;
			public init: any;
			public start: any;

		}
		export class PLAY_SOUND extends ig.EventStepBase {
			public sound: ig.Sound;
			public position: any;
			public loop: boolean;
			public settings: any;
			public name: any;
			public speed: any;
			public _wm: ig.Config;

			public constructor(a: any);

			public init(a: any): void;
			public clearCached(): void;
			public start(): void;
		}
		export class STOP_SOUND extends ig.EventStepBase {
			public name: any;
			public _wm: ig.Config;

			public constructor(a: any);

			public init(a: any): void;
			public start(): void;
		}
		export class SET_MOVING_LAYER_STOP extends ig.EventStepBase {
			public _wm: ig.Config;

			public constructor(a: any);

			public init(a: any): void;
			public start(): void;
		}
		export class CONSOLE_LOG extends ig.EventStepBase {
			public text: any;
			public consoleType: any;
			public _wm: ig.Config;

			public constructor(a: any);

			public init(a: any): void;
			public start(): void;
		}
		export class PLAY_BGM extends ig.EventStepBase {
			public track: any;
			public volume: any;
			public mode: any;
			public _wm: ig.Config;

			public constructor(b: any);

			public init(b: any): void;
			public clearCached(): void;
			public run(): any;
		}
		export class PAUSE_BGM extends ig.EventStepBase {
			public mode: any;
			public _wm: ig.Config;

			public constructor(b: any);

			public init(b: any): void;
			public run(): any;
		}
		export class RESUME_BGM extends ig.EventStepBase {
			public mode: any;
			public _wm: ig.Config;

			public constructor(b: any);

			public init(b: any): void;
			public run(): any;
		}
		export class PUSH_BGM extends ig.EventStepBase {
			public track: any;
			public volume: any;
			public mode: any;
			public _wm: ig.Config;

			public constructor(b: any);

			public init(b: any): void;
			public clearCached(): void;
			public run(): any;
		}
		export class POP_BGM extends ig.EventStepBase {
			public _wm: ig.Config;

			public constructor(b: any);

			public init(b: any): void;
			public run(): any;
		}
		export class PLAY_IN_BETWEEN_BGM extends ig.EventStepBase {
			public track: any;
			public volume: any;
			public mode: any;
			public _wm: ig.Config;

			public constructor(b: any);

			public init(b: any): void;
			public clearCached(): void;
			public run(): any;
		}
		export class SET_DEFAULT_BGM extends ig.EventStepBase {
			public trackSet: any;
			public mode: any;
			public _wm: ig.Config;

			public constructor(b: any);

			public init(b: any): void;
			public clearCached(): void;
			public run(): any;
		}
		export class RESUME_DEFAULT_BGM extends ig.EventStepBase {
			public _wm: ig.Config;

			public constructor(b: any);

			public init(b: any): void;
			public run(): any;
		}
		export class CALL_EVENT_FROM_SHEET extends ig.EventStepBase {
			public eventSheet: ig.EventSheet;
			public eventName: any;
			public eventInput: any;
			public _wm: ig.Config;

			public constructor(b: any);

			public init(b: any): void;
			public clearCached(): void;
			public getInlineEvent(): any;
			public getInlineEventInput(): any;
		}
		export class SET_CAMERA_TARGET extends ig.EventStepBase {
			public entity: any;
			public offsetX: number;
			public offsetY: number;
			public speed: number;
			public transition: any;
			public wait: boolean;
			public waitSkip: number;
			public zoom: number;
			public lockZ: boolean;
			public _wm: ig.Config;

			public constructor(a: any);

			public init(a: any): void;
			public start(a: any, b: any): void;
			public run(): any;
		}
		export class SET_CAMERA_POS extends ig.EventStepBase {
			public pos: any;
			public speed: number;
			public transition: any;
			public wait: boolean;
			public waitSkip: number;
			public zoom: number;
			public _wm: ig.Config;

			public constructor(a: any);

			public init(a: any): void;
			public start(a: any, b: any): void;
			public run(): any;
		}
		export class SET_CAMERA_BETWEEN extends ig.EventStepBase {
			public entity1: any;
			public entity2: any;
			public speed: number;
			public transition: any;
			public wait: boolean;
			public waitSkip: number;
			public zoom: number;
			public _wm: ig.Config;

			public constructor(a: any);

			public init(a: any): void;
			public start(a: any, b: any): void;
			public run(): any;
		}
		export class RESET_CAMERA extends ig.EventStepBase {
			public speed: number;
			public transition: any;
			public wait: boolean;
			public waitSkip: number;
			public name: any;
			public _wm: ig.Config;

			public constructor(a: any);

			public init(a: any): void;
			public start(a: any, b: any): void;
			public run(): any;
		}
		export class UNDO_CAMERA extends ig.EventStepBase {
			public speed: number;
			public transition: any;
			public wait: boolean;
			public waitSkip: number;
			public _wm: ig.Config;

			public constructor(a: any);

			public init(a: any): void;
			public start(a: any, b: any): void;
			public run(): any;
		}
		export class SET_CAMERA_ZOOM extends ig.EventStepBase {
			public duration: number;
			public transition: any;
			public wait: boolean;
			public waitSkip: number;
			public _wm: ig.Config;

			public constructor(a: any);

			public init(a: any): void;
			public start(a: any, b: any): void;
			public run(): any;
		}
		export class RUMBLE_SCREEN extends ig.EventStepBase {
			public rumbleType: any;
			public name: any;
			public duration: number;
			public power: number;
			public speed: number;
			public fade: boolean;
			public _wm: ig.Config;

			public constructor(a: any);

			public init(a: any): void;
			public start(): void;
		}
		export class RUMBLE_STOP_CONTINUES extends ig.EventStepBase {
			public name: any;
			public _wm: ig.Config;

			public constructor(a: any);

			public init(a: any): void;
			public start(): void;
		}
		export class ADD_SLOW_MOTION extends ig.EventStepBase {
			public name: any;
			public factor: number;
			public time: number;
			public _wm: ig.Config;

			public constructor(b: any);

			public init(b: any): void;
			public start(): void;
		}
		export class CLEAR_SLOW_MOTION extends ig.EventStepBase {
			public name: any;
			public time: number;
			public _wm: ig.Config;

			public constructor(b: any);

			public init(b: any): void;
			public start(): void;
		}
		export class SHOW_EFFECT extends ig.EventStepBase {
			public entity: any;
			public effect: ig.EffectHandle;
			public duration: number;
			public offset: any;
			public group: any;
			public wait: boolean;
			public waitSkip: number;
			public target2: any;
			public target2Offset: any;
			public target2Align: any;
			public _wm: ig.Config;

			public constructor(a: any);

			public init(a: any): void;
			public clearCached(): void;
			public start(b: any, c: any): void;
			public run(a: any): any;
		}
		export class CLEAR_EFFECTS extends ig.EventStepBase {
			public entity: any;
			public group: any;
			public _wm: ig.Config;

			public constructor(a: any);

			public init(a: any): void;
			public entityAttachedCondition(a: any): any;
			public start(a: any, b: any): void;
		}
		export class ADD_GUI extends ig.EventStepBase {
			public name: any;
			public guiInfo: any;
			public guiElement: any;
			public _wm: ig.Config;

			public constructor(b: any);

			public init(b: any): void;
			public start(): void;
			public clearCached(): void;
		}
		export class REMOVE_GUI extends ig.EventStepBase {
			public name: any;
			public guiInfo: any;
			public _wm: ig.Config;

			public constructor(b: any);

			public init(b: any): void;
			public start(): void;
		}
		export class CHANGE_GUI_STATE extends ig.EventStepBase {
			public name: any;
			public guiState: any;
			public immediate: boolean;
			public remove: boolean;
			public _wm: ig.Config;

			public constructor(b: any);

			public init(b: any): void;
			public start(): void;
		}
		export class SHOW_IMAGE extends ig.EventStepBase {
			public name: any;
			public image: any;
			public guiState: any;
			public alignX: any;
			public alignY: any;
			public renderMode: any;
			public overGui: boolean;
			public _wm: ig.Config;

			public constructor(b: any);

			public init(b: any): void;
			public start(): void;
			public clearCached(): void;
		}
		export class MOVE_IMAGE extends ig.EventStepBase {
			public name: any;
			public guiState: any;
			public time: any;
			public keySpline: any;
			public removeAfterwards: boolean;
			public _wm: ig.Config;

			public constructor(b: any);

			public init(b: any): void;
			public start(): void;
		}
		export class REMOVE_IMAGE extends ig.EventStepBase {
			public name: any;
			public _wm: ig.Config;

			public constructor(b: any);

			public init(b: any): void;
			public start(): void;
		}
		export class NUDGE_PROP extends ig.EventStepBase {
			public prop: any;
			public playSound: boolean;
			public _wm: ig.Config;

			public constructor(b: any);

			public init(b: any): void;
			public start(b: any, a: any): void;
		}
		export class OPEN_DOOR extends ig.EventStepBase {
			public door: any;
			public _wm: ig.Config;

			public constructor(b: any);

			public init(b: any): void;
			public start(): void;
		}
		export class CLOSE_DOOR extends ig.EventStepBase {
			public door: any;
			public _wm: ig.Config;

			public constructor(b: any);

			public init(b: any): void;
			public start(): void;
		}
		export class SHOW_MAP_IMAGE extends ig.EventStepBase {
			public _wm: ig.Config;

			public constructor(b: any);

			public init(b: any): void;
			public start(): void;
			public clearCached(): void;
		}
		export class REMOVE_MAP_IMAGE extends ig.EventStepBase {
			public _wm: ig.Config;

			public constructor(b: any);

			public init(b: any): void;
			public start(): void;
		}
		export class SET_OVERLAY extends ig.EventStepBase {
			public color: ig.RGBColor;
			public alpha: number;
			public time: number;
			public lighter: boolean;
			public _wm: ig.Config;

			public constructor(b: any);

			public init(b: any): void;
			public start(): void;
		}
		export class SET_OVERLAY_CORNER extends ig.EventStepBase {
			public color: any;
			public alpha: number;
			public time: number;
			public blinkAlpha: any;
			public _wm: ig.Config;

			public constructor(b: any);

			public init(b: any): void;
			public start(): void;
		}
		export class START_DREAM_FX extends ig.EventStepBase {
			public _wm: ig.Config;

			public constructor(b: any);

			public init(b: any): void;
			public clearCached(): void;
			public start(): void;
		}
		export class CLEAR_DREAM_FX extends ig.EventStepBase {
			public _wm: ig.Config;

			public constructor();

			public init(): void;
			public start(): void;
		}
		export class SET_DREAM_FX_COLORS extends ig.EventStepBase {
			public _wm: ig.Config;

			public constructor(b: any);

			public init(b: any): void;
			public start(): void;
		}
		export class SET_DREAM_FX_CIRCLE_SIZE extends ig.EventStepBase {
			public _wm: ig.Config;

			public constructor(b: any);

			public init(b: any): void;
			public start(): void;
		}
		export class SHOW_PARALLAX extends ig.EventStepBase {
			public parallaxGui: any;
			public _wm: ig.Config;

			public constructor(b: any);

			public init(b: any): void;
			public clearCached(): void;
			public start(): void;
			public run(): any;
		}
		export class SET_SCREEN_BLUR extends ig.EventStepBase {
			public alpha: number;
			public _wm: ig.Config;

			public constructor(b: any);

			public init(b: any): void;
			public start(): void;
		}
		export class CLEAR_SCREEN_BLUR extends ig.EventStepBase {
			public _wm: ig.Config;

			public constructor();

			public init(): void;
			public start(): void;
		}
		export class SET_ZOOM_BLUR extends ig.EventStepBase {
			public zoomType: any;
			public fadeIn: number;
			public duration: number;
			public fadeOut: number;
			public name: any;
			public _wm: ig.Config;

			public constructor(b: any);

			public init(b: any): void;
			public start(): void;
		}
		export class FADE_OUT_ZOOM_BLUR extends ig.EventStepBase {
			public name: any;
			public fadeOut: number;
			public _wm: ig.Config;

			public constructor(b: any);

			public init(b: any): void;
			public start(): void;
		}
		export class SET_ENV_PARTICLES extends ig.EventStepBase {
			public spawner: ig.EnvParticleSpawner;
			public quantity: number;
			public _wm: ig.Config;

			public constructor(b: any);

			public init(b: any): void;
			public clearCached(): void;
			public start(): void;
		}
		export class CLEAR_ENV_PARTICLES extends ig.EventStepBase {
			public spawner: ig.EnvParticleSpawner;
			public _wm: ig.Config;

			public constructor(b: any);

			public init(b: any): void;
			public clearCached(): void;
			public start(): void;
		}
		export class SET_WEATHER extends ig.EventStepBase {
			public weather: ig.WeatherInstance;
			public _wm: ig.Config;

			public constructor(b: any);

			public init(b: any): void;
			public clearCached(): void;
			public start(): void;
		}
		export class RESTORE_WEATHER_PARTICLES extends ig.EventStepBase {
			public _wm: ig.Config;

			public constructor(b: any);

			public init(b: any): void;
			public start(): void;
		}
		export class SET_MAP_SOUNDS extends ig.EventStepBase {
			public soundEntry: ig.MapSoundEntry;
			public _wm: ig.Config;

			public constructor(b: any);

			public init(b: any): void;
			public clearCached(): void;
			public start(): void;
		}
		export class ADD_TIMER extends ig.EventStepBase {
			public name: any;
			public mode: any;
			public duration: number;
			public area: any;
			public temp: any;
			public showGui: boolean;
			public millis: boolean;
			public quest: any;
			public _wm: ig.Config;

			public constructor(b: any);

			public init(b: any): void;
			public start(): void;
		}
		export class REMOVE_TIMER extends ig.EventStepBase {
			public name: any;
			public _wm: ig.Config;

			public constructor(b: any);

			public init(b: any): void;
			public start(): void;
		}
		export class RESET_TIMER extends ig.EventStepBase {
			public name: any;
			public mode: any;
			public duration: any;
			public _wm: ig.Config;

			public constructor(b: any);

			public init(b: any): void;
			public start(): void;
		}
		export class PAUSE_TIMER extends ig.EventStepBase {
			public name: any;
			public _wm: ig.Config;

			public constructor(b: any);

			public init(b: any): void;
			public start(): void;
		}
		export class RESUME_TIMER extends ig.EventStepBase {
			public name: any;
			public _wm: ig.Config;

			public constructor(b: any);

			public init(b: any): void;
			public start(): void;
		}
		export class ENABLED_STATS extends ig.EventStepBase {
			public _wm: ig.Config;

			public constructor();

			public init(): void;
			public start(): void;
		}
		export class DISABLE_STATS extends ig.EventStepBase {
			public _wm: ig.Config;

			public constructor();

			public init(): void;
			public start(): void;
		}
		export class UNLOCK_TROPHY extends ig.EventStepBase {
			public trophy: any;
			public _wm: ig.Config;

			public constructor(b: any);

			public init(b: any): void;
			public start(): void;
		}
		export class ADD_STAT_MAP_NUMBER extends ig.EventStepBase {
			public map: any;
			public stat: any;
			public value: number;
			public _wm: ig.Config;

			public constructor(b: any);

			public init(b: any): void;
			public start(): void;
		}
		export class SET_STAT_MAP_NUMBER extends ig.EventStepBase {
			public map: any;
			public stat: any;
			public value: number;
			public _wm: ig.Config;

			public constructor(b: any);

			public init(b: any): void;
			public start(): void;
		}
		export class START_AUTO_CTRL extends ig.EventStepBase {
			public _wm: ig.Config;

			public constructor();

			public init(): void;
			public start(b: any, a: any): void;
		}
		export class END_AUTO_CTRL extends ig.EventStepBase {
			public _wm: ig.Config;

			public constructor();

			public init(): void;
			public start(b: any, a: any): void;
		}
		export class SET_AUTO_CTRL_MOUSE extends ig.EventStepBase {
			public pos: any;
			public duration: number;
			public _wm: ig.Config;

			public constructor(b: any);

			public init(b: any): void;
			public start(): void;
		}
		export class SET_AUTO_CTRL_STICK extends ig.EventStepBase {
			public stick: any;
			public value: any;
			public duration: number;
			public _wm: ig.Config;

			public constructor(b: any);

			public init(b: any): void;
			public start(): void;
		}
		export class SET_AUTO_CTRL_ACTION extends ig.EventStepBase {
			public action: any;
			public value: any;
			public hold: boolean;
			public deviceFilter: any;
			public _wm: ig.Config;

			public constructor(b: any);

			public init(b: any): void;
			public start(): void;
		}
		export class CLEAR_AUTO_CTRL_ACTION extends ig.EventStepBase {
			public action: any;
			public deviceFilter: any;
			public _wm: ig.Config;

			public constructor(b: any);

			public init(b: any): void;
			public start(): void;
		}
		export class STOP_TIMER extends ig.EventStepBase {
			public hide: any;
			public _wm: ig.Config;

			public constructor(b: any);

			public init(b: any): void;
			public start(): void;
		}
		export class SHOW_AR_MSG extends ig.EventStepBase {
			public entity: any;
			public text: ig.LangLabel;
			public time: any;
			public mode: boolean;
			public color: any;
			public partName: any;
			public _wm: ig.Config;

			public constructor(a: any);

			public init(a: any): void;
			public start(a: any, b: any): void;
		}
		export class CLEAR_AR_MSG extends ig.EventStepBase {
			public entity: any;
			public _wm: ig.Config;

			public constructor(a: any);

			public init(a: any): void;
			public start(a: any, d: any): void;
		}
		export class SET_TELEPORT_COLOR extends ig.EventStepBase {
			public color: ig.RGBColor;
			public lighter: boolean;
			public _wm: ig.Config;

			public constructor(a: any);

			public init(a: any): void;
			public start(): void;
		}
		export class SET_TELEPORT_TIME extends ig.EventStepBase {
			public color: any;
			public lighter: boolean;
			public _wm: ig.Config;

			public constructor(a: any);

			public init(a: any): void;
			public start(): void;
		}
		export class LOAD extends ig.EventStepBase {
			public _wm: ig.Config;

			public constructor();

			public init(): void;
			public start(): void;
		}
		export class SAVE extends ig.EventStepBase {
			public marker: any;
			public _wm: ig.Config;

			public constructor(a: any);

			public init(a: any): void;
			public start(a: any, b: any): void;
		}
		export class GOTO_TITLE extends ig.EventStepBase {
			public _wm: ig.Config;

			public start(): void;
		}
		export class ADD_MONEY extends ig.EventStepBase {
			public amount: number;
			public _wm: ig.Config;

			public constructor(a: any);

			public init(a: any): void;
			public start(): void;
		}
		export class REMOVE_MONEY extends ig.EventStepBase {
			public amount: number;
			public _wm: ig.Config;

			public constructor(a: any);

			public init(a: any): void;
			public start(): void;
		}
		export class DROP_ITEM_ENTITY extends ig.EventStepBase {
			public entity: any;
			public item: number;
			public amount: number;
			public _wm: ig.Config;

			public constructor(a: any);

			public init(a: any): void;
			public start(a: any, b: any): void;
		}
		export class GIVE_ITEM extends ig.EventStepBase {
			public item: number;
			public amount: number;
			public skip: boolean;
			public _wm: ig.Config;

			public constructor(a: any);

			public init(a: any): void;
			public start(): void;
		}
		export class REMOVE_ITEM extends ig.EventStepBase {
			public item: number;
			public amount: number;
			public unequip: boolean;
			public _wm: ig.Config;

			public constructor(a: any);

			public init(a: any): void;
			public start(): void;
		}
		export class SET_VAR_ENTITY_STAT extends ig.EventStepBase {
			public varName: any;
			public stat: any;
			public entity: any;
			public _wm: ig.Config;

			public constructor(a: any);

			public init(a: any): void;
			public start(a: any, d: any): void;
		}
		export class SPAWN_ENEMY extends ig.EventStepBase {
			public position: any;
			public enemyInfo: sc.EnemyInfo;
			public enemyType: any;
			public targetPlayer: boolean;
			public name: any;
			public noEffects: boolean;
			public _wm: ig.Config;

			public constructor(a: any);

			public init(a: any): void;
			public clearCached(): void;
			public start(): void;
		}
		export class SPAWN_DESTRUCTIBLE extends ig.EventStepBase {
			public _wm: ig.Config;

			public constructor(a: any);

			public init(a: any): void;
			public start(): void;
		}
		export class SPAWN_ENEMY_ON_ENTITY extends ig.EventStepBase {
			public entity: any;
			public enemyInfo: sc.EnemyInfo;
			public enemyType: any;
			public targetPlayer: boolean;
			public _wm: ig.Config;

			public constructor(a: any);

			public init(a: any): void;
			public clearCached(): void;
			public start(a: any, b: any): void;
		}
		export class KILL_ENEMIES extends ig.EventStepBase {
			public enemyType: any;
			public noRumble: boolean;
			public _wm: ig.Config;

			public constructor(a: any);

			public init(a: any): void;
			public start(): void;
		}
		export class SET_ENEMY_STATE extends ig.EventStepBase {
			public enemy: number;
			public enemyState: number;
			public _wm: ig.Config;

			public constructor(a: any);

			public init(a: any): void;
			public start(a: any, b: any): void;
		}
		export class SET_ENEMY_TARGET extends ig.EventStepBase {
			public enemy: number;
			public target: number;
			public _wm: ig.Config;

			public constructor(a: any);

			public init(a: any): void;
			public start(a: any, b: any): void;
		}
		export class SET_SCREEN_ENEMY_TARGET extends ig.EventStepBase {
			public target: number;
			public _wm: ig.Config;

			public constructor(a: any);

			public init(a: any): void;
			public start(a: any, b: any): void;
		}
		export class SET_ALL_ENEMY_TARGET extends ig.EventStepBase {
			public target: number;
			public _wm: ig.Config;

			public constructor(a: any);

			public init(a: any): void;
			public start(a: any, b: any): void;
		}
		export class REMOVE_ALL_ENEMY_TARGET extends ig.EventStepBase {
			public _wm: ig.Config;

			public constructor();

			public init(): void;
			public start(): void;
		}
		export class RESET_SP extends ig.EventStepBase {
			public target: number;
			public _wm: ig.Config;

			public constructor(a: any);

			public init(a: any): void;
			public start(a: any, b: any): void;
		}
		export class SET_RELATIVE_HP extends ig.EventStepBase {
			public _wm: ig.Config;

			public constructor(a: any);

			public init(a: any): void;
			public start(a: any, b: any): void;
		}
		export class REGEN_HP extends ig.EventStepBase {
			public _wm: ig.Config;

			public constructor(a: any);

			public init(a: any): void;
			public start(a: any, b: any): void;
		}
		export class SET_TYPED_ENEMY_TARGET extends ig.EventStepBase {
			public target: number;
			public _wm: ig.Config;

			public constructor(a: any);

			public init(a: any): void;
			public start(a: any, b: any): void;
		}
		export class SET_ENEMIES_NAV_TOLERANT extends ig.EventStepBase {
			public target: number;
			public _wm: ig.Config;

			public constructor(a: any);

			public init(a: any): void;
			public start(a: any, b: any): void;
		}
		export class SET_FINAL_DRAMATIC_EFFECT extends ig.EventStepBase {
			public effectType: any;
			public _wm: ig.Config;

			public constructor(a: any);

			public init(a: any): void;
			public start(): void;
		}
		export class SET_COMBAT_SPEED extends ig.EventStepBase {
			public speed: number;
			public _wm: ig.Config;

			public constructor(a: any);

			public init(a: any): void;
			public start(): void;
		}
		export class MASS_REPLACE_ENTITIES_WITH_ENEMY extends ig.EventStepBase {
			public regExp: any;
			public spawnEnemyInfo: any;
			public enemyType: any;
			public target: any;
			public _wm: ig.Config;

			public constructor(a: any);

			public init(a: any): void;
			public clearCached(): void;
			public start(b: any, d: any): void;
		}
		export class SWAP_ENTITY_WITH_ENEMY extends ig.EventStepBase {
			public entity: any;
			public spawnEnemyInfo: any;
			public enemyType: any;
			public manualKill: any;
			public _wm: ig.Config;

			public constructor(a: any);

			public init(a: any): void;
			public clearCached(): void;
			public start(b: any, d: any): void;
		}
		export class SWAP_BACK_ENEMY_WITH_ENTITY extends ig.EventStepBase {
			public entity: any;
			public _wm: ig.Config;

			public constructor(a: any);

			public init(a: any): void;
			public start(b: any, d: any): void;
		}
		export class SET_COMBAT_ACTIVE extends ig.EventStepBase {
			public active: boolean;
			public _wm: ig.Config;

			public constructor(a: any);

			public init(a: any): void;
			public start(): void;
		}
		export class DO_ENEMY_ACTION extends ig.EventStepBase {
			public enemy: any;
			public actionName: any;
			public _wm: ig.Config;

			public constructor(a: any);

			public init(a: any): void;
			public start(a: any, b: any): void;
		}
		export class SET_VAR_COMBAT_STAT extends ig.EventStepBase {
			public varName: any;
			public stat: any;
			public entity: any;
			public _wm: ig.Config;

			public constructor(a: any);

			public init(a: any): void;
			public start(a: any, b: any): void;
		}
		export class MANUAL_COMBATANT_KILL extends ig.EventStepBase {
			public entity: any;
			public _wm: ig.Config;

			public constructor(a: any);

			public init(a: any): void;
			public start(a: any, b: any): void;
		}
		export class MANUAL_COMBATANT_REVIVE extends ig.EventStepBase {
			public entity: any;
			public _wm: ig.Config;

			public constructor(a: any);

			public init(a: any): void;
			public start(a: any, b: any): void;
		}
		export class SET_COMBATANT_MANUAL_KILL extends ig.EventStepBase {
			public entity: any;
			public _wm: ig.Config;

			public constructor(a: any);

			public init(a: any): void;
			public start(a: any, b: any): void;
		}
		export class START_PVP_BATTLE extends ig.EventStepBase {
			public winPoints: number;
			public entity: any;
			public _wm: ig.Config;

			public constructor(a: any);

			public init(a: any): void;
			public start(a: any, b: any): void;
		}
		export class PREPARE_PVP_ROUND extends ig.EventStepBase {
			public autoContinue: boolean;
			public _wm: ig.Config;

			public constructor(a: any);

			public init(a: any): void;
			public start(): void;
			public run(): any;
		}
		export class START_PVP_ROUND extends ig.EventStepBase {
			public _wm: ig.Config;

			public constructor();

			public init(): void;
			public start(): void;
		}
		export class STOP_PVP_BATTLE extends ig.EventStepBase {
			public _wm: ig.Config;

			public constructor();

			public init(): void;
			public start(): void;
		}
		export class SET_RESPAWN_POINT extends ig.EventStepBase {
			public _wm: ig.Config;

			public constructor(a: any);

			public init(a: any): void;
			public start(a: any, b: any): void;
		}
		export class COMBAT_IF extends ig.EventStepBase {
			public conditions: sc.CombatConditions;
			public withElse: boolean;
			public branches: any;
			public _wm: ig.Config;

			public constructor(a: any);

			public init(a: any): void;
			public getBranchNames(): any;
			public getNext(): any;
		}
		export class REMOVE_PROXIES extends ig.EventStepBase {
			public _wm: ig.Config;

			public constructor(a: any);

			public init(a: any): void;
			public start(): void;
		}
		export class OPEN_RHOMBUS_MAP extends ig.EventStepBase {
			public _wm: ig.Config;
			public _characterName: any;
			public _mapName: any;

			public constructor(b: any);

			public init(b: any): void;
			public start(b: any, a: any): void;
			public run(b: any): any;
		}
		export class MOVE_ELEVATOR extends ig.EventStepBase {
			public entity: any;
			public floorOption: number;
			public _wm: ig.Config;

			public constructor(b: any);

			public init(b: any): void;
			public start(b: any, a: any): void;
			public run(): any;
		}
		export class MOVE_ELEVATOR_START extends ig.EventStepBase {
			public entity: any;
			public floorOption: number;
			public _wm: ig.Config;

			public constructor(b: any);

			public init(b: any): void;
			public start(b: any, a: any): void;
			public run(): any;
		}
		export class UNTRIGGER_PROP extends ig.EventStepBase {
			public entity: any;
			public _wm: ig.Config;

			public constructor(b: any);

			public init(b: any): void;
			public start(b: any, a: any): void;
		}
		export class START_DEMO_HIGHSCORE_TIMER extends ig.EventStepBase {
			public _wm: ig.Config;

			public start(): void;
		}
		export class STOP_DEMO_HIGHSCORE_TIMER extends ig.EventStepBase {
			public observatory: boolean;
			public _wm: ig.Config;

			public constructor(b: any);

			public init(b: any): void;
			public start(): void;
		}
		export class SET_TASK extends ig.EventStepBase {
			public task: ig.LangLabel;
			public keepDisplayed: boolean;
			public _wm: ig.Config;

			public constructor(b: any);

			public init(b: any): void;
			public start(): void;
		}
		export class SET_PERMA_TASK extends ig.EventStepBase {
			public task: ig.LangLabel;
			public _wm: ig.Config;

			public constructor(b: any);

			public init(b: any): void;
			public start(): void;
		}
		export class SET_PAUSE_MUSIC_STOP extends ig.EventStepBase {
			public stop: boolean;
			public _wm: ig.Config;

			public constructor(b: any);

			public init(b: any): void;
			public start(): void;
		}
		export class SET_MOBILITY_BLOCK extends ig.EventStepBase {
			public value: any;
			public _wm: ig.Config;

			public constructor(b: any);

			public init(b: any): void;
			public start(): void;
		}
		export class ACTIVATE_CANCEL_BUTTON extends ig.EventStepBase {
			public text: ig.LangLabel;
			public _wm: ig.Config;

			public constructor(b: any);

			public init(b: any): void;
			public start(): void;
		}
		export class CLEAR_CANCEL_BUTTON extends ig.EventStepBase {
			public _wm: ig.Config;

			public constructor();

			public init(): void;
			public start(): void;
		}
		export class SET_FORCE_COMBAT extends ig.EventStepBase {
			public value: boolean;
			public _wm: ig.Config;

			public constructor(b: any);

			public init(b: any): void;
			public start(): void;
		}
		export class INCREASE_COMBAT_RANK extends ig.EventStepBase {
			public value: boolean;
			public _wm: ig.Config;

			public constructor(b: any);

			public init(b: any): void;
			public start(): void;
		}
		export class CLEAR_TASK extends ig.EventStepBase {
			public _wm: ig.Config;

			public constructor();

			public init(): void;
			public start(): void;
		}
		export class SET_PLAYER_CORE extends ig.EventStepBase {
			public core: any;
			public value: any;
			public _wm: ig.Config;

			public constructor(b: any);

			public init(b: any): void;
			public start(): void;
		}
		export class SET_PLAYER_SP_LEVEL extends ig.EventStepBase {
			public level: any;
			public _wm: ig.Config;

			public constructor(b: any);

			public init(b: any): void;
			public start(): void;
		}
		export class INCREASE_PLAYER_SP_LEVEL extends ig.EventStepBase {
			public _wm: ig.Config;

			public constructor();

			public init(): void;
			public start(): void;
		}
		export class ADD_PLAYER_EXP extends ig.EventStepBase {
			public exp: number;
			public level: number;
			public _wm: ig.Config;

			public constructor(b: any);

			public init(b: any): void;
			public start(): void;
		}
		export class SET_ALL_PLAYER_CORE extends ig.EventStepBase {
			public value: any;
			public _wm: ig.Config;

			public constructor(b: any);

			public init(b: any): void;
			public start(): void;
		}
		export class SHOW_MSG extends ig.EventStepBase {
			public person: any;
			public charExpression: sc.CharacterExpression;
			public message: ig.LangLabel;
			public autoContinue: boolean;
			public hiCount: number;
			public _wm: ig.Config;

			public constructor(a: any);

			public init(a: any): void;
			public clearCached(): void;
			public start(): void;
			public run(): any;
		}
		export class RING_PRIVATE_MSG extends ig.EventStepBase {
			public outgoing: boolean;
			public _wm: ig.Config;

			public constructor(a: any);

			public init(a: any): void;
			public start(): void;
			public run(): any;
		}
		export class START_PRIVATE_MSG extends ig.EventStepBase {
			public _wm: ig.Config;

			public constructor();

			public init(): void;
			public start(): void;
			public run(): any;
		}
		export class END_PRIVATE_MSG extends ig.EventStepBase {
			public _wm: ig.Config;

			public constructor(a: any);

			public init(a: any): void;
			public start(): void;
			public run(): any;
		}
		export class SHOW_OFFSCREEN_MSG extends ig.EventStepBase {
			public leftSide: any;
			public message: ig.LangLabel;
			public autoContinue: boolean;
			public _wm: ig.Config;

			public constructor(a: any);

			public init(a: any): void;
			public start(): void;
			public run(): any;
		}
		export class SHOW_CHOICE extends ig.EventStepBase {
			public person: any;
			public charExpression: sc.CharacterExpression;
			public columns: any;
			public forceWidth: number;
			public options: any;
			public branches: any;
			public _wm: ig.Config;

			public constructor(a: any);

			public init(a: any): void;
			public clearCached(): void;
			public start(): void;
			public run(): any;
			public getBranchNames(): any;
			public getNext(): any;
		}
		export class ADD_MSG_PERSON extends ig.EventStepBase {
			public charExpression: sc.CharacterExpression;
			public side: number;
			public order: number;
			public clearSide: boolean;
			public name: ig.LangLabel;
			public _wm: ig.Config;

			public constructor(a: any);

			public init(a: any): void;
			public clearCached(): void;
			public start(): void;
		}
		export class REMOVE_MSG_PERSON extends ig.EventStepBase {
			public person: any;
			public _wm: ig.Config;

			public constructor(a: any);

			public init(a: any): void;
			public start(): void;
		}
		export class SET_MSG_EXPRESSION extends ig.EventStepBase {
			public person: any;
			public charExpression: sc.CharacterExpression;
			public _wm: ig.Config;

			public constructor(a: any);

			public init(a: any): void;
			public clearCached(): void;
			public start(): void;
		}
		export class CLEAR_MSG extends ig.EventStepBase {
			public side: any;
			public _wm: ig.Config;

			public constructor(a: any);

			public init(a: any): void;
			public start(): void;
		}
		export class SHOW_CENTER_MSG extends ig.EventStepBase {
			public titleText: ig.LangLabel;
			public text: ig.LangLabel;
			public _wm: ig.Config;

			public constructor(a: any);

			public init(a: any): void;
			public start(a: any): void;
			public run(a: any): any;
		}
		export class SHOW_DREAM_MSG extends ig.EventStepBase {
			public titleText: any;
			public text: ig.LangLabel;
			public time: number;
			public _wm: ig.Config;

			public constructor(a: any);

			public init(a: any): void;
			public start(a: any, b: any): void;
			public run(a: any): any;
		}
		export class SHOW_TUTORIAL_START extends ig.EventStepBase {
			public msgType: any;
			public title: ig.LangLabel;
			public content: ig.LangLabel;
			public imageSrc: any;
			public branches: any;
			public _wm: ig.Config;

			public constructor(a: any);

			public init(a: any): void;
			public start(a: any): void;
			public run(a: any): any;
			public getBranchNames(): any;
			public getNext(a: any): any;
		}
		export class SHOW_MODAL_CHOICE extends ig.EventStepBase {
			public text: ig.LangLabel;
			public options: any;
			public branches: any;
			public _wm: ig.Config;

			public constructor(a: any);

			public init(a: any): void;
			public start(a: any): void;
			public run(a: any): any;
			public getBranchNames(): any;
			public getNext(a: any): any;
		}
		export class SHOW_TUTORIAL_MSG extends ig.EventStepBase {
			public pos: any;
			public size: any;
			public text: ig.LangLabel;
			public direction: any;
			public connectPos: number;
			public _wm: ig.Config;

			public constructor(a: any);

			public init(a: any): void;
			public start(a: any): void;
			public run(a: any): any;
		}
		export class SHOW_TUTORIAL_PLAYER_MSG extends ig.EventStepBase {
			public pos: any;
			public size: any;
			public text: ig.LangLabel;
			public direction: any;
			public connectPos: number;
			public _wm: ig.Config;

			public constructor(a: any);

			public init(a: any): void;
			public start(b: any): void;
			public run(a: any): any;
		}
		export class SHOW_DEMO_HIGHSCORE extends ig.EventStepBase {
			public observatory: boolean;
			public _wm: ig.Config;

			public constructor(a: any);

			public init(a: any): void;
			public start(a: any): void;
			public run(a: any): any;
		}
		export class SHOW_DEMO_TIME extends ig.EventStepBase {
			public observatory: boolean;
			public _wm: ig.Config;

			public constructor(a: any);

			public init(a: any): void;
			public start(a: any): void;
			public run(a: any): any;
		}
		export class SHOW_GET_MSG extends ig.EventStepBase {
			public text: any;
			public track: any;
			public wordLearned: boolean;
			public _wm: ig.Config;

			public constructor(a: any);

			public init(a: any): void;
			public clearCached(): void;
			public start(a: any): void;
			public run(a: any): any;
		}
		export class SHOW_SIDE_MSG extends ig.EventStepBase {
			public charExpression: sc.CharacterExpression;
			public message: ig.LangLabel;
			public hiCount: number;
			public _wm: ig.Config;

			public constructor(a: any);

			public init(a: any): void;
			public clearCached(): void;
			public start(): void;
		}
		export class CLEAR_SIDE_MSG extends ig.EventStepBase {
			public _wm: ig.Config;

			public constructor();

			public init(): void;
			public start(): void;
		}
		export class SHOW_BOARD_MSG extends ig.EventStepBase {
			public text: ig.LangLabel;
			public title: any;
			public center: any;
			public _wm: ig.Config;

			public constructor(a: any);

			public init(a: any): void;
			public start(): void;
			public run(): any;
		}
		export class CLEAR_BOARD_MSG extends ig.EventStepBase {
			public _wm: ig.Config;

			public constructor();

			public init(): void;
			public start(): void;
		}
		export class DO_THE_SHAKE extends ig.EventStepBase {
			public person: any;
			public expression: any;
			public message: any;
			public _wm: ig.Config;

			public constructor(b: any);

			public init(b: any): void;
			public clearCached(): void;
			public start(): void;
			public run(): any;
		}
		export class RESET_NPC extends ig.EventStepBase {
			public npc: any;
			public _wm: ig.Config;

			public constructor(b: any);

			public init(b: any): void;
			public start(b: any, a: any): void;
		}
		export class SET_NPC_RUNNERS extends ig.EventStepBase {
			public frequency: any;
			public _wm: ig.Config;

			public constructor(b: any);

			public init(b: any): void;
			public start(): void;
		}
		export class RESET_NPC_RUNNERS extends ig.EventStepBase {
			public _wm: ig.Config;

			public constructor();

			public init(): void;
			public start(): void;
		}
		export class SET_NPC_CONFIG extends ig.EventStepBase {
			public npc: any;
			public config: any;
			public _wm: ig.Config;

			public constructor(b: any);

			public init(b: any): void;
			public start(b: any, a: any): void;
		}
		export class SAVE_PLAYER_MODEL_VALUE extends ig.EventStepBase {
			public modelType: any;
			public _wm: ig.Config;

			public constructor(b: any);

			public init(b: any): void;
			public start(): void;
		}
		export class ADD_PLAYER_CAMERA_TARGET extends ig.EventStepBase {
			public entity: any;
			public _wm: ig.Config;

			public constructor(a: any);

			public init(a: any): void;
			public start(a: any, b: any): void;
		}
		export class REMOVE_PLAYER_CAMERA_TARGET extends ig.EventStepBase {
			public entity: any;
			public _wm: ig.Config;

			public constructor(a: any);

			public init(a: any): void;
			public start(a: any, b: any): void;
		}
		export class REMOVE_ALL_PLAYER_CAMERAS extends ig.EventStepBase {
			public speed: any;
			public _wm: ig.Config;

			public constructor(a: any);

			public init(a: any): void;
			public start(): void;
		}
		export class LEARN_SKILL extends ig.EventStepBase {
			public skill: any;
			public _wm: ig.Config;

			public constructor(a: any);

			public init(a: any): void;
			public start(): void;
		}
		export class DO_INLINE_LEVELUP extends ig.EventStepBase {
			public skill: any;
			public _wm: ig.Config;

			public constructor();

			public init(): void;
			public start(): void;
			public run(): any;
		}
		export class RESET_SKILL_TREE extends ig.EventStepBase {
			public element: any;
			public _wm: ig.Config;

			public constructor(a: any);

			public init(a: any): void;
			public start(): void;
		}
		export class SET_ELEMENT_LOAD extends ig.EventStepBase {
			public value: any;
			public _wm: ig.Config;

			public constructor(a: any);

			public init(a: any): void;
			public start(): void;
		}
		export class SWITCH_PLAYER_CONFIG extends ig.EventStepBase {
			public name: any;
			public config: sc.PlayerConfig;
			public _wm: ig.Config;

			public constructor(a: any);

			public init(a: any): void;
			public clearCached(): void;
			public start(): void;
		}
		export class WAIT_UNTIL_PLAYER_CHARGED extends ig.EventStepBase {
			public level: any;
			public _wm: ig.Config;

			public constructor(a: any);

			public init(a: any): void;
			public run(): any;
		}
		export class SWITCH_ELEMENT_MODE extends ig.EventStepBase {
			public element: any;
			public _wm: ig.Config;

			public constructor(a: any);

			public init(a: any): void;
			public start(): void;
		}
		export class SWITCH_TO_ELEMENT_WITH_COMBAT_ART extends ig.EventStepBase {
			public _wm: ig.Config;

			public constructor(a: any);

			public init(a: any): void;
			public start(): void;
		}
		export class SET_VAR_COMBAT_ART_TYPE_WITH_MIN_LEVEL extends ig.EventStepBase {
			public _wm: ig.Config;

			public constructor(a: any);

			public init(a: any): void;
			public start(): void;
		}
		export class HIDE_PETS extends ig.EventStepBase {
			public _wm: ig.Config;

			public constructor(a: any);

			public init(a: any): void;
			public start(): void;
		}
		export class ACTIVATE_CROSSHAIR extends ig.EventStepBase {
			public entity: any;
			public _wm: ig.Config;

			public constructor(a: any);

			public init(a: any): void;
			public start(a: any, c: any): void;
		}
		export class DEACTIVATE_CROSSHAIR extends ig.EventStepBase {
			public _wm: ig.Config;

			public constructor();

			public init(): void;
			public start(): void;
		}
		export class SET_CROSSHAIR_TARGET extends ig.EventStepBase {
			public pos: any;
			public _wm: ig.Config;

			public constructor(a: any);

			public init(a: any): void;
			public start(): void;
		}
		export class SET_CROSSHAIR_SPEED extends ig.EventStepBase {
			public value: any;
			public _wm: ig.Config;

			public constructor(a: any);

			public init(a: any): void;
			public start(): void;
		}
		export class REDUCE_CROSSHAIR_PRECISION extends ig.EventStepBase {
			public value: any;
			public _wm: ig.Config;

			public constructor(a: any);

			public init(a: any): void;
			public start(): void;
		}
		export class GET_CROSSHAIR_DIR extends ig.EventStepBase {
			public variable: any;
			public _wm: ig.Config;

			public constructor(a: any);

			public init(a: any): void;
			public start(): void;
		}
		export class DESTROY_DESTRUCTIBLE extends ig.EventStepBase {
			public entity: any;
			public _wm: ig.Config;

			public constructor(a: any);

			public init(a: any): void;
			public start(a: any, b: any): void;
		}
		export class RESET_PUSH_PULL_POS extends ig.EventStepBase {
			public _wm: ig.Config;

			public constructor(a: any);

			public init(a: any): void;
			public start(a: any, b: any): void;
		}
		export class SPAWN_BOMB extends ig.EventStepBase {
			public gfx: ig.Image;
			public pos: any;
			public offset: any;
			public align: any;
			public area: any;
			public zVary: any;
			public _wm: ig.Config;

			public constructor(a: any);

			public init(a: any): void;
			public clearCached(): void;
			public start(): void;
		}
		export class SPAWN_BUBBLE extends ig.EventStepBase {
			public offset: any;
			public _wm: ig.Config;

			public constructor(a: any);

			public init(a: any): void;
			public start(): void;
		}
		export class DESTROY_BOMBS extends ig.EventStepBase {
			public _wm: ig.Config;

			public constructor();

			public init(): void;
			public clearCached(): void;
			public start(): void;
		}
		export class STOP_PLAYER_ELEMENT_SHIELD extends ig.EventStepBase {
			public _wm: ig.Config;

			public constructor(a: any);

			public init(a: any): void;
			public start(): void;
		}
		export class FIX_SHOCKWAVE_PLATFORMS extends ig.EventStepBase {
			public _wm: ig.Config;

			public constructor(a: any);

			public init(a: any): void;
			public start(): void;
		}
		export class RELEASE_FIXED_PLATFORMS extends ig.EventStepBase {
			public _wm: ig.Config;

			public constructor();

			public init(): void;
			public start(): void;
		}
		export class ADD_PLANT extends ig.EventStepBase {
			public key: any;
			public anim: any;
			public _wm: ig.Config;

			public constructor(b: any);

			public init(b: any): void;
			public start(): void;
		}
		export class UNLOCK_ENEMY extends ig.EventStepBase {
			public enemy: any;
			public asSpecial: any;
			public _wm: ig.Config;

			public constructor(b: any);

			public init(b: any): void;
			public start(): void;
		}
		export class UNLOCK_LORE extends ig.EventStepBase {
			public lore: any;
			public notify: boolean;
			public _wm: ig.Config;

			public constructor(b: any);

			public init(b: any): void;
			public start(): void;
		}
		export class UNLOCK_LORE_ALL extends ig.EventStepBase {
			public _wm: ig.Config;

			public constructor();

			public init(): void;
			public start(): void;
		}
		export class UNLOCK_LORE_FIRST_TIME extends ig.EventStepBase {
			public _wm: ig.Config;

			public constructor();

			public init(): void;
			public start(): void;
		}
		export class UNLOCK_LORE_ENTRY extends ig.EventStepBase {
			public lore: any;
			public entry: any;
			public notify: boolean;
			public _wm: ig.Config;

			public constructor(b: any);

			public init(b: any): void;
			public start(): void;
		}
		export class ACTIVATE_LANDMARK extends ig.EventStepBase {
			public area: any;
			public landmark: any;
			public _wm: ig.Config;

			public constructor(b: any);

			public init(b: any): void;
			public start(): void;
		}
		export class SET_LANDMARK_ACTIVE_STATE extends ig.EventStepBase {
			public area: any;
			public landmark: any;
			public _wm: ig.Config;

			public constructor(b: any);

			public init(b: any): void;
			public start(): void;
		}
		export class UNDO_OPENED_CHEST_TRACK extends ig.EventStepBase {
			public _wm: ig.Config;

			public constructor(b: any);

			public init(b: any): void;
			public start(): void;
		}
		export class OPEN_SHOP extends ig.EventStepBase {
			public shop: any;
			public _wm: ig.Config;

			public constructor(b: any);

			public init(b: any): void;
			public start(): void;
		}
		export class OPEN_QUEST_HUB extends ig.EventStepBase {
			public hub: any;
			public _wm: ig.Config;

			public constructor(b: any);

			public init(b: any): void;
			public start(): void;
		}
		export class UNDO_VISITED_AREA extends ig.EventStepBase {
			public hub: any;
			public _wm: ig.Config;

			public constructor(b: any);

			public init(b: any): void;
			public clearCached(): void;
			public start(): void;
		}
		export class START_FORCE_INPUT extends ig.EventStepBase {
			public inputEntry: any;
			public title: any;
			public textKeyboard: any;
			public textGamepad: any;
			public _wm: ig.Config;

			public constructor(b: any);

			public init(b: any): void;
			public start(): void;
			public run(): any;
		}
		export class CLEAR_FORCE_INPUT extends ig.EventStepBase {
			public _wm: ig.Config;

			public constructor();

			public init(): void;
			public start(): void;
		}
		export class RESET_TRADER extends ig.EventStepBase {
			public trader: any;
			public _wm: ig.Config;

			public constructor(b: any);

			public init(b: any): void;
			public start(): void;
		}
		export class START_NPC_TRADE_MENU extends ig.EventStepBase {
			public _wm: ig.Config;

			public constructor(b: any);

			public init(b: any): void;
			public start(b: any, a: any): void;
			public run(b: any): any;
			public getBranchNames(): any;
			public getNext(): any;
		}
		export class CREATE_QUEST extends ig.EventStepBase {
			public settings: any;
			public _wm: ig.Config;

			public constructor(b: any);

			public init(b: any): void;
			public start(): void;
		}
		export class START_STATIC_QUEST extends ig.EventStepBase {
			public quest: any;
			public _wm: ig.Config;

			public constructor(b: any);

			public init(b: any): void;
			public start(): void;
		}
		export class SOLVE_QUEST_CONDITION extends ig.EventStepBase {
			public questId: any;
			public label: any;
			public _wm: ig.Config;

			public constructor(b: any);

			public init(b: any): void;
			public start(): void;
		}
		export class UPDATE_QUEST_LOCATION extends ig.EventStepBase {
			public questId: any;
			public _wm: ig.Config;

			public constructor(b: any);

			public init(b: any): void;
			public start(): void;
		}
		export class RESET_QUEST_TASK extends ig.EventStepBase {
			public quest: any;
			public index: any;
			public _wm: ig.Config;

			public constructor(b: any);

			public init(b: any): void;
			public start(): void;
		}
		export class OPEN_QUEST_DIALOG extends ig.EventStepBase {
			public quest: any;
			public acceptVar: any;
			public npc: any;
			public _wm: ig.Config;
			public _characterName: any;
			public _mapName: any;

			public constructor(b: any);

			public init(b: any): void;
			public getBranchNames(): any;
			public start(b: any, a: any): void;
			public run(b: any): any;
			public getNext(b: any): any;
		}
		export class FINISH_STATIC_QUEST extends ig.EventStepBase {
			public quest: any;
			public _wm: ig.Config;

			public constructor(b: any);

			public init(b: any): void;
			public start(): void;
		}
		export class RESOLVE_FINISHED_QUESTS extends ig.EventStepBase {
			public _wm: ig.Config;

			public constructor();

			public init(): void;
			public start(b: any): void;
			public run(b: any): any;
		}
		export class SET_CONTACT_ONLINE extends ig.EventStepBase {
			public member: any;
			public online: any;
			public _wm: ig.Config;

			public constructor(a: any);

			public init(a: any): void;
			public start(): void;
		}
		export class SET_MEMBER_LOCKED extends ig.EventStepBase {
			public member: any;
			public locked: any;
			public _wm: ig.Config;

			public constructor(a: any);

			public init(a: any): void;
			public start(): void;
		}
		export class SET_CONTACT_TYPE extends ig.EventStepBase {
			public member: any;
			public status: any;
			public _wm: ig.Config;

			public constructor(a: any);

			public init(a: any): void;
			public start(): void;
		}
		export class SET_CONTACT_TYPE_ALL extends ig.EventStepBase {
			public status: any;
			public _wm: ig.Config;

			public constructor(a: any);

			public init(a: any): void;
			public start(): void;
		}
		export class ADD_PARTY_MEMBER extends ig.EventStepBase {
			public member: any;
			public npc: any;
			public _wm: ig.Config;

			public constructor(a: any);

			public init(a: any): void;
			public start(a: any, b: any): void;
		}
		export class SET_PARTY_MEMBER_LEVEL extends ig.EventStepBase {
			public member: any;
			public level: any;
			public exp: any;
			public updateEquipment: boolean;
			public _wm: ig.Config;

			public constructor(a: any);

			public init(a: any): void;
			public start(): void;
		}
		export class SET_PARTY_MEMBER_NO_DIE extends ig.EventStepBase {
			public noDie: boolean;
			public _wm: ig.Config;

			public constructor(a: any);

			public init(a: any): void;
			public start(): void;
		}
		export class SET_PARTY_MEMBER_SP_LEVEL extends ig.EventStepBase {
			public _wm: ig.Config;

			public constructor(a: any);

			public init(a: any): void;
			public start(): void;
		}
		export class SET_PARTY_MEMBER_ALL_ELEMENTS extends ig.EventStepBase {
			public _wm: ig.Config;

			public constructor(a: any);

			public init(a: any): void;
			public start(): void;
		}
		export class REMOVE_PARTY_MEMBER extends ig.EventStepBase {
			public member: any;
			public npc: any;
			public _wm: ig.Config;

			public constructor(a: any);

			public init(a: any): void;
			public start(a: any, b: any): void;
		}
		export class REVIVE_PARTY_MEMBER extends ig.EventStepBase {
			public member: any;
			public _wm: ig.Config;

			public constructor(a: any);

			public init(a: any): void;
			public start(): void;
		}
		export class SET_PARTY_AI extends ig.EventStepBase {
			public _wm: ig.Config;

			public constructor(a: any);

			public init(a: any): void;
			public start(): void;
		}
		export class PARTY_KEEP_MAP_DUNGEON extends ig.EventStepBase {
			public _wm: ig.Config;

			public constructor();

			public init(): void;
			public start(): void;
		}
		export class TRIGGER_COMMON_EVENTS extends ig.EventStepBase {
			public commonEventType: any;
			public _wm: ig.Config;

			public constructor(b: any);

			public init(b: any): void;
			public start(): void;
		}
		export class CALL_EVENT extends ig.EventStepBase {
			public callEvent: any;
			public _wm: ig.Config;

			public constructor(b: any);

			public init(b: any): void;
			public start(): void;
		}
		export class CANCEL_COMMON_EVENTS extends ig.EventStepBase {
			public _wm: ig.Config;

			public constructor(b: any);

			public init(b: any): void;
			public start(): void;
		}
		export class SHOW_CREDIT_SECTION extends ig.EventStepBase {
			public name: any;
			public credits: sc.CreditSectionLoadable;
			public guiElement: any;
			public _wm: ig.Config;

			public constructor(b: any);

			public init(b: any): void;
			public start(): void;
			public clearCached(): void;
		}
		export class WAIT_UNTIL_CREDIT_TRIGGER extends ig.EventStepBase {
			public credits: any;
			public trigger: any;
			public _wm: ig.Config;

			public constructor(b: any);

			public init(b: any): void;
			public start(b: any): void;
			public run(b: any): any;
		}
		export class WAIT_UNTIL_CREDIT_SECTION_DONE extends ig.EventStepBase {
			public name: any;
			public offscreen: boolean;
			public _wm: ig.Config;

			public constructor(b: any);

			public init(b: any): void;
			public start(b: any): void;
			public run(b: any): any;
		}
		export class RESET_ARENA_CHAIN extends ig.EventStepBase {
			public _wm: ig.Config;

			public start(): void;
		}
		export class INCREASE_ARENA_CHAIN extends ig.EventStepBase {
			public _wm: ig.Config;
			public amount: number;

			public constructor(b: any);

			public init(b: any): void;
			public start(): void;
		}
		export class ADD_ARENA_SCORE_IGNORE extends ig.EventStepBase {
			public _wm: ig.Config;
			public scoreType: any;

			public constructor(b: any);

			public init(b: any): void;
			public start(): void;
		}
		export class REMOVE_ARENA_SCORE_IGNORE extends ig.EventStepBase {
			public _wm: ig.Config;
			public scoreType: any;

			public constructor(b: any);

			public init(b: any): void;
			public start(): void;
		}
		export class CLEAR_ARENA_SCORE_IGNORE extends ig.EventStepBase {
			public _wm: ig.Config;

			public start(): void;
		}
		export class ADD_ARENA_IGNORE_TYPE extends ig.EventStepBase {
			public _wm: ig.Config;
			public enemy: any;

			public constructor(b: any);

			public init(b: any): void;
			public start(): void;
		}
		export class ADD_ARENA_SCORE extends ig.EventStepBase {
			public _wm: ig.Config;
			public type: any;

			public constructor(b: any);

			public init(b: any): void;
			public start(): void;
		}
		export class OPEN_ARENA_MENU extends ig.EventStepBase {
			public arenaCache: sc.ArenaCache;
			public custom: boolean;
			public noWait: boolean;
			public _wm: ig.Config;

			public constructor(b: any);

			public init(b: any): void;
			public start(): void;
			public run(): any;
			public clearCached(): void;
		}
		export class START_ARENA_CUP extends ig.EventStepBase {
			public _wm: ig.Config;

			public constructor();

			public init(): void;
			public start(): void;
		}
		export class END_ARENA_CUP extends ig.EventStepBase {
			public _wm: ig.Config;

			public constructor();

			public init(): void;
			public start(): void;
		}
		export class SPAWN_ARENA_WAVE extends ig.EventStepBase {
			public _wm: ig.Config;

			public constructor(b: any);

			public init(b: any): void;
			public start(): void;
		}
		export class START_ARENA_ROUND extends ig.EventStepBase {
			public _wm: ig.Config;
			public score: boolean;
			public time: boolean;

			public constructor(b: any);

			public init(b: any): void;
			public start(): void;
		}
		export class TP_TO_CUR_ARENA_ROUND extends ig.EventStepBase {
			public _wm: ig.Config;

			public constructor();

			public init(): void;
			public start(): void;
		}
		export class PREP_ARENA_ROUND_END extends ig.EventStepBase {
			public _wm: ig.Config;

			public start(): void;
		}
		export class END_ARENA_ROUND extends ig.EventStepBase {
			public _wm: ig.Config;
			public onDeath: boolean;

			public constructor(b: any);

			public init(b: any): void;
			public start(): void;
			public run(): any;
		}
		export class SHOW_ARENA_ROUND_GUI extends ig.EventStepBase {
			public _wm: ig.Config;

			public constructor(b: any);

			public init(b: any): void;
			public start(b: any): void;
			public run(b: any): any;
		}
	}
	export namespace ENTITY {
		export class Marker extends ig.Entity {
			public name: string;
			public dir: any;
			public face: any;
			public _wm: ig.Config;

			public constructor(b: any, a: any, d: any, c: any);

			public init(b: any, a: any, d: any, c: any): void;
			public update(): void;
			public applyMarkerPosition(b: any): void;
		}
		export class ObjectLayerView extends ig.AnimatedEntity {
			public maps: any;
			public spritesInitialized: boolean;
			public hideManager: ig.EntityHideManager;
			public wallY: number;
			public fx: any;
			public _wm: ig.Config;

			public constructor(a: any, b: any, e: any, f: any);

			public init(a: any, b: any, e: any, f: any): void;
			public onKill(a: any): void;
			public show(a: any): void;
			public onHideRequest(): void;
			public onEffectEvent(): void;
			public initSprites(): void;
			public update(): void;
			public updateSprites(): void;
		}
		export class TouchTrigger extends ig.Entity {
			public name: string;
			public face: any;
			public touchType: number;
			public touchedCnt: number;
			public startCondition: ig.VarCondition;
			public isOn: boolean;
			public _wm: ig.Config;

			public constructor(b: any, a: any, d: any, c: any);

			public init(b: any, a: any, d: any, c: any): void;
			public update(): void;
			public setOn(): void;
			public setOff(): void;
		}
		export class SoundSource extends ig.Entity {
			public sound: ig.Sound;
			public soundHandle: any;
			public radius: number;
			public rangeType: any;
			public _wm: ig.Config;

			public constructor(b: any, a: any, d: any, c: any);

			public init(b: any, a: any, d: any, c: any): void;
			public show(b: any): void;
			public stop(): void;
			public update(): void;
			public hide(): void;
			public onKill(b: any): void;
		}
		export class Effect extends ig.Entity {
			public offset: any;
			public rotOffset: any;
			public angle: number;
			public flipX: boolean;
			public duration: number;
			public state: any;
			public effect: any;
			public target: any;
			public spriteFilter: any;
			public timelineIndex: number;
			public timer: number;
			public looped: boolean;
			public particles: any;
			public runners: any;
			public align: any;
			public target2: any;
			public attachGroup: any;
			public callback: any;
			public rotateFace: number;
			public flipLeftFace: boolean;

			public constructor(a: any, b: any, e: any, f: any);

			public init(a: any, b: any, e: any, f: any): void;
			public reset(a: any, b: any, e: any, f: any): void;
			public _initEffect(b: any): void;
			public attachToAction(a: any): void;
			public setTimeEntity(a: any): void;
			public setIgnoreSlowdown(): void;
			public getTarget2Pos(a: any): any;
			public stop(): void;
			public isDone(): any;
			public getRemainingTime(): any;
			public setCallback(a: any): void;
			public onActionEndDetach(): void;
			public onEntityKillDetach(): void;
			public spawnParticle(a: any, b: any, e: any, f: any): void;
			public update(): void;
			public deferredUpdate(): void;
			public updateRunners(): void;
			public cancelRunners(a: any): void;
			public onKill(a: any): void;
		}
		export class Particle extends ig.AnimatedEntity {
			public handle: ig.ParticleHandle;

			public constructor(a: any, b: any, c: any, d: any);

			public init(a: any, b: any, c: any, d: any): void;
			public reset(a: any, b: any, c: any, d: any): void;
			public _initParticle(a: any): void;
			public update(): void;
		}
		export class FaceParticle extends ig.AnimatedEntity {
			public handle: ig.ParticleHandle;
			public face: any;

			public constructor(a: any, b: any, c: any, d: any);

			public init(a: any, b: any, c: any, d: any): void;
			public reset(a: any, b: any, c: any, d: any): void;
			public _initFaceParticle(a: any): void;
			public update(): void;
		}
		export class CopyParticle extends ig.Entity {
			public handle: ig.ParticleHandle;
			public color: any;
			public colorAlpha: any;
			public noLighter: boolean;
			public oldPos: any;

			public constructor(a: any, b: any, c: any, d: any);

			public init(a: any, b: any, c: any, d: any): void;
			public reset(a: any, b: any, c: any, d: any): void;
			public _initCopyParticle(a: any): void;
			public initSprites(): void;
			public update(): void;
			public updateSprites(): void;
		}
		export class DebrisParticle extends ig.AnimatedEntity {
			public handle: ig.ParticleHandle;
			public minZVel: number;

			public constructor(a: any, b: any, c: any, d: any);

			public init(a: any, b: any, c: any, d: any): void;
			public reset(a: any, b: any, c: any, d: any): void;
			public _initDeprisParticle(a: any): void;
			public update(): void;
			public onTouchGround(_usedInChild0: any): void;
		}
		export class OffsetParticle extends ig.ENTITY.Particle {
			public startFactor: number;
			public moveOffset: any;
			public alongZ: boolean;
			public keySpline: any;
			public inverse: boolean;
			public moveRotate: number;
			public rotateWithTime: boolean;
			public rotateGfx: boolean;
			public normalMoveDist: number;
			public moveDuration: number;
			public prevWeight: number;
			public moveTimer: number;

			public constructor(a: any, b: any, c: any, d: any);

			public init(a: any, b: any, c: any, d: any): void;
			public reset(a: any, b: any, c: any, d: any): void;
			public _initOffsetParticle(a: any): void;
			public _updatePos(): void;
			public update(): void;
		}
		export class RhombusParticle extends ig.ENTITY.Particle {
			public startFactor: number;
			public moveFactor: number;
			public radius: number;
			public alongZ: boolean;
			public keySpline: any;
			public prevWeight: number;

			public constructor(a: any, b: any, c: any, d: any);

			public init(a: any, b: any, c: any, d: any): void;
			public reset(a: any, b: any, c: any, d: any): void;
			public _initOffsetParticle(a: any): void;
			public _updatePos(): void;
			public _getRhombusOffset(a: any, b: any, c: any): any;
			public update(): void;
		}
		export class HomingParticle extends ig.ENTITY.Particle {
			public inverse: boolean;
			public flyType: any;
			public ownerEffect: number;
			public normalXY: number;
			public normalZ: number;
			public moveTimer: number;
			public phaseDurations: any;

			public constructor(a: any, b: any, c: any, d: any);

			public init(a: any, b: any, c: any, d: any): void;
			public reset(a: any, b: any, c: any, d: any): void;
			public _initOffsetParticle(a: any): void;
			public _updatePos(a: any): void;
			public update(): void;
		}
		export class LaserParticle extends ig.Entity {
			public handle: ig.ParticleHandle;

			public constructor(a: any, b: any, c: any, d: any);

			public init(a: any, b: any, c: any, d: any): void;
			public reset(a: any, b: any, c: any, d: any): void;
			public _initLaserParticle(a: any): void;
			public initSprites(): void;
			public update(): void;
			public updateSprites(): void;
		}
		export class EffectPreviewer extends ig.ActorEntity {
			public cameraHandle: ig.Camera.TargetHandle;
			public currentEffectSheet: ig.EffectSheet;
			public newEffectData: any;
			public currentEffectHandle: any;
			public spawnData: any;
			public resetTimer: number;
			public _wm: ig.Config;

			public constructor(b: any, a: any, d: any, c: any);

			public init(b: any, a: any, d: any, c: any): void;
			public update(): void;
			public stopCurrentEffect(): void;
			public resetEntity(): void;
			public onExternalMessage(b: any, a: any): void;
			public onLoadableComplete(b: any, a: any): void;
		}
		export class ConditionalLight extends ig.Entity {
			public glowColor: ig.GlowColor;
			public _wm: ig.Config;

			public constructor(b: any, a: any, d: any, c: any);

			public init(b: any, a: any, d: any, c: any): void;
			public onKill(b: any): void;
			public update(): void;
		}
		export class HiddenBlock extends ig.Entity {
			public terrain: number;
			public _wm: ig.Config;

			public constructor(b: any, a: any, d: any, c: any);

			public init(b: any, a: any, d: any, c: any): void;
		}
		export class HiddenSkyBlock extends ig.Entity {
			public terrain: number;
			public _wm: ig.Config;

			public constructor(b: any, a: any, d: any, c: any);

			public init(b: any, a: any, d: any, c: any): void;
		}
		export class Door extends ig.AnimatedEntity {
			public doorType: any;
			public condition: ig.VarCondition;
			public map: string;
			public marker: string;
			public dir: string;
			public doorMat: any;
			public active: boolean;
			public openTimer: number;
			public hasDoorMat: boolean;
			public hasDoorGlow: boolean;
			public hideManager: ig.EntityHideManager;
			public blockEvent: ig.Event;
			public blockEventCondition: ig.VarCondition;
			public openEffect: ig.EffectHandle;
			public sounds: any;
			public fx: any;
			public openSound: any;
			public _wm: ig.Config;

			public constructor(a: any, d: any, c: any, e: any);

			public init(a: any, d: any, c: any, e: any): void;
			public onKill(a: any): void;
			public show(a: any): void;
			public update(): void;
			public close(): void;
			public open(a: any): void;
			public varsChanged(): void;
			public collideWith(a: any, d: any): void;
			public enterEntity(a: any): void;
			public leaveEntity(): void;
			public getEnterActionData(a: any): any;
			public getEnterEventData(a: any): any;
			public getStartPoint(a: any): any;
			public getEndPoint(): any;
			public applyMarkerPosition(a: any): void;
		}
		export class TeleportStairs extends ig.Entity {
			public gfx: ig.Image;
			public map: string;
			public marker: string;
			public stairType: any;
			public blockEvent: ig.Event;
			public blockEventCondition: ig.VarCondition;
			public spawnDistance: number;
			public transitionType: number;
			public npcRunnerProb: number;
			public centerWalkThrough: boolean;
			public objMaps: any;
			public _wm: ig.Config;

			public constructor(a: any, c: any, d: any, e: any);

			public init(a: any, c: any, d: any, e: any): void;
			public onKill(a: any): void;
			public initSprites(): void;
			public updateSprites(): void;
			public collideWith(a: any, b: any): void;
			public enterEntity(a: any): void;
			public leaveEntity(): void;
			public getEnterActionData(a: any): any;
			public getStartPoint(a: any): any;
			public applyMarkerPosition(a: any): void;
			public getRunnerDestination(): any;
		}
		export class NPCWaypoint extends ig.Entity {
			public name: string;
			public wpConnection: sc.WPConnection;
			public _wm: ig.Config;

			public constructor(b: any, a: any, d: any, c: any);

			public init(b: any, a: any, d: any, c: any): void;
			public initWayPoints(): void;
			public getWPConnect(): any;
		}
		export class TeleportGround extends ig.Entity {
			public map: string;
			public marker: string;
			public dir: string;
			public blockEvent: ig.Event;
			public blockEventCondition: ig.VarCondition;
			public spawnDistance: number;
			public transitionType: number;
			public npcRunnerProb: number;
			public centerWalkThrough: boolean;
			public wpConnection: sc.WPConnection;
			public _wm: ig.Config;

			public constructor(a: any, d: any, c: any, e: any);

			public init(a: any, d: any, c: any, e: any): void;
			public collideWith(a: any, d: any): void;
			public enterEntity(a: any): void;
			public leaveEntity(): void;
			public getEnterActionData(): any;
			public applyMarkerPosition(a: any): void;
			public getRunnerDestination(): any;
			public getWPConnect(): any;
		}
		export class GlowingGround extends ig.Entity {
			public color1: string;
			public color2: string;
			public duration: number;
			public timer: number;
			public colorGfx: ig.TransitionColor;
			public _wm: ig.Config;

			public constructor(b: any, a: any, d: any, c: any);

			public init(b: any, a: any, d: any, c: any): void;
			public initSprites(): void;
			public update(): void;
			public updateSprites(): void;
		}
		export class Prop extends ig.AnimatedEntity {
			public terrain: number;
			public face: any;
			public propSet: any;
			public propName: any;
			public propAnim: any;
			public nudging: any;
			public collideSound: any;
			public condAnims: any;
			public touchVar: any;
			public _triggered: boolean;
			public shuffleAnims: boolean;
			public interact: ig.PROP_INTERACT_CLASS;
			public currentInteract: any;
			public ballKill: any;
			public effects: any;
			public _wm: ig.Config;

			public constructor(b: any, a: any, d: any, c: any);

			public init(b: any, a: any, d: any, c: any): void;
			public show(b: any): void;
			public initPermaEffects(): void;
			public onHideRequest(): void;
			public initSprites(): void;
			public onLoadableComplete(b: any): void;
			public onKill(b: any): void;
			public update(): void;
			public onEffectEvent(b: any): void;
			public updateSprites(): void;
			public collideWith(b: any): void;
			public onGroundAdd(b: any): void;
			public nudge(b: any, a: any): void;
			public untriggerProp(): void;
			public varsChanged(): void;
			public changeInteract(b: any): void;
			public ballHit(b: any): any;
			public _updateAnimations(): any;
		}
		export class ScalableProp extends ig.AnimatedEntity {
			public terrain: number;
			public propConfig: any;
			public scalePropSheet: ig.ScalePropSheet;
			public hasSize: boolean;
			public gfx: ig.Image;
			public patternSheet: ig.ImagePatternSheet;
			public patternOffset: any;
			public pivot: any;
			public wallY: number;
			public renderHeight: number;
			public renderMode: any;
			public gfxEnds: any;
			public animFrames: any;
			public animTime: any;
			public timePadding: number;
			public timer: number;
			public touchVar: any;
			public _triggered: boolean;
			public effects: any;
			public _wm: ig.Config;

			public constructor(a: any, b: any, c: any, e: any);

			public init(a: any, b: any, c: any, e: any): void;
			public show(a: any): void;
			public createSkyBlock(): void;
			public onHideRequest(): void;
			public onLoadableComplete(a: any): void;
			public initSprites(): void;
			public onKill(a: any): void;
			public update(): void;
			public onEffectEvent(a: any): void;
			public updateSprites(): void;
			public collideWith(a: any): void;
			public varsChanged(): void;
			public ballHit(a: any): any;
		}
		export class Note extends ig.Entity {
			public text: string;
			public _wm: ig.Config;

			public constructor(b: any, a: any, d: any, c: any);

			public init(b: any, a: any, d: any, c: any): void;
		}
		export class Projectile extends ig.AnimatedEntity {
			public speedVary: any;
			public combatant: any;
			public hitProxy: any;
			public remainingHits: number;
			public maxHits: number;
			public alreadyCollided: any;
			public skipBounce: boolean;
			public noMoveRotate: boolean;

			public constructor(b: any, a: any, d: any, c: any);

			public init(b: any, a: any, d: any, c: any): void;
			public spawnHitProxy(b: any, a: any, d: any): void;
			public update(): void;
			public handleMovementTrace(b: any): any;
			public onKill(b: any): void;
			public collideWith(b: any): void;
			public clearIgnored(): void;
			public addIgnore(b: any): void;
			public getHitCenter(b: any, a: any): any;
			public getHitVel(b: any, a: any): any;
			public getElement(): any;
			public getCombatant(): any;
			public getCombatantRoot(): any;
			public getAttackInfo(): any;
		}
		export class Ball extends ig.ENTITY.Projectile {
			public isBall: boolean;
			public party: number;
			public target: any;
			public params: any;
			public attackInfo: any;
			public multiHit: boolean;
			public maxTime: number;
			public timer: number;
			public timeBoni: any;
			public effects: any;
			public effectKeys: any;
			public speed: number;
			public speedFactor: number;
			public lightHandle: ig.LightHandle;
			public grab: any;
			public destroyProxySrc: any;
			public bounceProxySrc: any;
			public behaviors: any;
			public behaviorData: any;
			public hitSideways: boolean;

			public constructor(a: any, b: any, c: any, d: any);

			public init(a: any, b: any, c: any, d: any): void;
			public getTarget(): any;
			public setBallInfo(b: any, c: any): void;
			public grabPoint(a: any, b: any): any;
			public changeSpeed(a: any, b: any): void;
			public resetSpeed(): any;
			public changeDirection(a: any): void;
			public onBounce(a: any, b: any): void;
			public destroy(): void;
			public _spawnBounceProxy(a: any, c: any): void;
			public onProjectileKill(a: any, b: any, c: any): void;
			public onProjectileHit(a: any, b: any): any;
			public update(): void;
			public getElement(): any;
			public getHitVel(a: any, b: any): any;
			public resetBounceCount(): void;
			public resetTime(a: any): void;
			public cleanDirection(a: any): void;
		}
		export class CombatantMarble extends ig.AnimatedEntity {
			public tileSheet: ig.TileSheet;
			public effects: ig.EffectSheet;
			public startPos: any;
			public startZPos: number;
			public target: any;
			public timer: number;
			public maxZHeight: number;
			public maxTime: number;
			public lineHandle: any;

			public constructor(b: any, a: any, d: any, c: any);

			public init(b: any, a: any, d: any, c: any): void;
			public update(): void;
		}
		export class HitNumber extends sc.HitNumberEntityBase {
			public timer: number;
			public blockerEntry: any;
			public combatant: any;

			public constructor(a: any, b: any, c: any, d: any);

			public init(a: any, b: any, c: any, d: any): void;
			public reset(a: any, b: any, c: any, d: any): void;
			public _initHitNumber(a: any): void;
			public clear(): void;
			public update(): void;
			public unlock(): void;
			public onKill(a: any): void;
		}
		export class HitNumberSum extends sc.HitNumberEntityBase {
			public timer: number;
			public disappear: boolean;
			public combatant: any;
			public entityOff: any;

			public constructor(a: any, b: any, c: any, d: any);

			public init(a: any, b: any, c: any, d: any): void;
			public reset(a: any, b: any, c: any, d: any): void;
			public _initHitNumber(a: any): void;
			public updateEntityOffset(): void;
			public updateSum(a: any): void;
			public clear(): void;
			public update(): void;
			public deferredUpdate(): void;
			public _updatePos(): void;
			public onKill(a: any): void;
		}
		export class Combatant extends sc.BasicCombatant {
			public params: any;
			public isCombatant: boolean;
			public party: number;
			public material: any;
			public damageTimer: number;
			public defeatNotified: boolean;
			public dying: any;
			public skipRumble: boolean;
			public deathEffect: any;
			public manualKill: any;
			public invincibleTimer: number;
			public stunThreshold: number;
			public stunCombatant: any;
			public stunSteps: any;
			public stunData: any;
			public targetedBy: any;
			public threat: any;
			public regenFactor: number;
			public regenTimer: number;
			public walkAnims: any;
			public hitStable: number;
			public hitIgnore: boolean;
			public statusGui: ig.GUI.StatusBar;
			public shieldsConnections: any;
			public spikeDmg: any;
			public pvp: any;
			public respawn: any;
			public effects: any;

			public constructor(a: any, b: any, c: any, d: any);

			public init(a: any, b: any, c: any, d: any): void;
			public show(a: any): void;
			public hide(): void;
			public hasStun(): any;
			public setRespawnPoint(a: any): void;
			public isDefeated(): any;
			public cancelStun(): void;
			public setTarget(a: any, b: any): void;
			public setReplaceTarget(a: any): any;
			public _addTargetedBy(a: any): void;
			public _removeTargetedBy(a: any): void;
			public sendEnemyEvent(a: any, b: any): void;
			public hasShield(a: any): any;
			public updateShields(): void;
			public addShield(a: any, b: any): any;
			public removeShield(a: any): void;
			public removeNamedShield(a: any): void;
			public damage(a: any, b: any, c: any): any;
			public isShielded(a: any, b: any, c: any, d: any): any;
			public getSpikeShieldFactor(): any;
			public onPreDamageModification(_usedInChild0: any, _usedInChild1: any, _usedInChild2: any, _usedInChild3: any, _usedInChild4: any, _usedInChild5: any, _usedInChild6: any): any;
			public onPerfectDash(): void;
			public onStunLockClear(): void;
			public onDamage(a: any, c: any, g: any): any;
			public regenPvp(a: any): void;
			public onPvpEnd(a: any): void;
			public setCombatStat(a: any, b: any): void;
			public getCombatStat(a: any, b: any): any;
			public addCombatStat(a: any, b: any): void;
			public _onDeathHit(a: any): void;
			public addSpikeDamage(a: any, b: any, c: any, d: any, e: any): void;
			public updateSpikeDamage(): void;
			public instantDamage(a: any, d: any, e: any): void;
			public doDamageMovement(a: any, b: any, c: any, d: any, e: any, f: any, g: any, n: any): any;
			public onTargetHit(a: any, b: any, c: any, _usedInChild3: any, _usedInChild4: any): void;
			public heal(a: any, b: any): void;
			public instantDefeat(a: any, b: any): void;
			public selfDestruct(a: any): void;
			public doManualKill(a: any): void;
			public doManualRevive(a: any): void;
			public onKill(a: any): void;
			public update(): void;
			public resetStunData(): void;
			public clearDamageSum(): void;
			public onTerrainUpdate(): void;
			public checkQuickRespawn(): void;
			public quickFall(a: any): void;
			public handleRespawn(): void;
			public doQuickRespawn(a: any, b: any, c: any): void;
			public onDefeat(_usedInChild0: any): void;
			public getAnimPartyEntityClass(): any;
			public onStunEnd(): void;
			public onEnemyEvent(a: any, b: any, d: any): any;
		}
		export class Enemy extends ig.ENTITY.Combatant {
			public party: any;
			public aggression: any;
			public enemyName: any;
			public enemyType: sc.EnemyType;
			public enemyGroup: any;
			public defeatVarIncrease: any;
			public enemyTypeInitialized: boolean;
			public dropHealOrb: number;
			public hpAttached: any;
			public spawnPoint: any;
			public currentState: any;
			public postStun: any;
			public nextState: any;
			public nextTimerChange: any;
			public stateTimers: any;
			public trackers: any;
			public deferredPerformedConds: any;
			public targetLoseTimer: number;
			public reactions: any;
			public dodge: any;
			public annotate: any;
			public hpBreakReached: number;
			public lastPoICheck: any;
			public targetFixed: boolean;
			public collaboration: any;
			public collabAttribs: any;
			public elementModes: any;
			public storedEnemies: any;
			public ownerEnemy: any;
			public cameraZFocus: number;
			public startEffect: ig.EffectHandle;
			public targetOnSpawn: boolean;
			public boosterState: number;
			public level: any;
			public visibility: any;
			public _wm: ig.Config;

			public constructor(a: any, b: any, d: any, g: any);

			public init(a: any, b: any, d: any, g: any): void;
			public setElementMode(a: any, b: any): void;
			public getQuickMenuSettings(): any;
			public connectHpToEnemies(a: any): void;
			public setLevelOverride(a: any): void;
			public getLevel(): any;
			public storeEnemy(a: any): void;
			public onStoredRelease(): any;
			public onEnemyEvent(a: any, b: any, d: any): any;
			public onMagnetStart(): any;
			public onMagnetEnd(): void;
			public isBoss(): any;
			public getHeadIdx(): any;
			public show(b: any): void;
			public onHideRequest(): void;
			public hide(): void;
			public onKill(a: any): void;
			public regenPvp(a: any): void;
			public update(): void;
			public onTargetHit(a: any, b: any, d: any, g: any, h: any): any;
			public setCounterCooldown(): void;
			public onFallBehavior(a: any): any;
			public postActionUpdate(): void;
			public onStunEnd(): void;
			public changeState(a: any, b: any): void;
			public onPreDamageModification(a: any, d: any, f: any, g: any, h: any, i: any, j: any): any;
			public _delegateDamage(): void;
			public onInstantDamage(a: any, d: any): any;
			public _checkHitReactions(a: any, d: any, f: any, g: any): any;
			public collabReady(a: any): any;
			public doCollabReaction(a: any): void;
			public doEnemyAction(a: any, b: any, d: any): void;
			public onDamage(a: any, b: any, d: any): any;
			public onNavigationFailed(a: any): void;
			public onDefeat(a: any): void;
			public enableReactions(a: any): void;
			public enableReaction(a: any): void;
			public disableReaction(a: any): void;
			public onVarAccess(a: any, b: any): any;
		}
		export class EnemySpawner extends ig.Entity {
			public enemyTypes: any;
			public maxEnemies: number;
			public respawnTimer: number;
			public initialSpawn: boolean;
			public effectInitialSpawn: boolean;
			public _wm: ig.Config;

			public constructor(b: any, a: any, d: any, c: any);

			public init(b: any, a: any, d: any, c: any): void;
			public show(b: any): void;
			public onKill(b: any): void;
			public _storeState(b: any): void;
			public _getVarPrefix(): any;
			public update(): void;
			public respawnEnemies(b: any, a: any): void;
			public spawnEnemy(b: any, a: any): any;
		}
		export class RespawnBlocker extends ig.Entity {
			public _wm: ig.Config;

			public constructor(b: any, a: any, d: any, c: any);

			public init(b: any, a: any, d: any, c: any): void;
		}
		export class Stone extends ig.ENTITY.Projectile {
			public party: number;
			public target: any;
			public params: any;
			public attackInfo: sc.AttackInfo;
			public multiHit: boolean;
			public remainingGroundHits: number;
			public effects: any;
			public effectKeys: any;
			public lightHandle: ig.LightHandle;
			public grab: any;
			public behaviors: any;
			public behaviorData: any;

			public constructor(a: any, b: any, c: any, e: any);

			public init(a: any, b: any, c: any, e: any): void;
			public setStoneInfo(a: any): void;
			public onBounce(a: any, b: any): void;
			public onProjectileKill(): void;
			public onProjectileHit(a: any): any;
			public onTouchGround(): void;
			public getElement(): any;
		}
		export class Elevator extends ig.Entity {
			public markerDir: any;
			public markerFaceDir: any;
			public elevatorData: any;
			public ground: any;
			public groundGfx: ig.Image;
			public condition: ig.VarCondition;
			public startZ: number;
			public targetZ: any;
			public stopDelay: number;
			public elevatorVel: number;
			public destinations: any;
			public stuckTimer: number;
			public blockEvent: ig.Event;
			public blockEventCondition: ig.VarCondition;
			public switchEntity: any;
			public sounds: any;
			public doTeleport: boolean;
			public _wm: ig.Config;

			public constructor(a: any, b: any, c: any, e: any);

			public init(a: any, b: any, c: any, e: any): void;
			public initDestinatins(a: any): void;
			public initSprites(): void;
			public onKill(a: any): void;
			public show(a: any): void;
			public pressSwitch(): void;
			public moveToDestination(a: any): void;
			public performTeleport(a: any): void;
			public _addMoveEvent(a: any, b: any, c: any, e: any, f: any): void;
			public showElevatorOptions(): void;
			public _addWaitSteps(a: any): void;
			public update(): void;
			public setArrived(): void;
			public deferredUpdate(): void;
			public varsChanged(): void;
			public updateSprites(): void;
			public applyMarkerPosition(a: any): void;
			public onPostPlacementAction(): void;
			public placeEntity(a: any, d: any): void;
		}
		export class JumpPanel extends ig.AnimatedEntity {
			public effects: ig.EffectSheet;
			public jumpHeightData: any;
			public condition: ig.VarCondition;
			public _wm: ig.Config;

			public constructor(a: any, c: any, d: any, e: any);

			public init(a: any, c: any, d: any, e: any): void;
			public onTopEntityJump(a: any): any;
			public varsChanged(): void;
			public onNavMapInfluence(): void;
		}
		export class JumpPanelFar extends ig.AnimatedEntity {
			public panelType: any;
			public effects: ig.EffectSheet;
			public jumpHeightData: any;
			public condition: ig.VarCondition;
			public _wm: ig.Config;

			public constructor(a: any, b: any, d: any, f: any);

			public init(a: any, b: any, d: any, f: any): void;
			public onTopEntityJumpFar(a: any): any;
			public varsChanged(): void;
			public onNavMapInfluence(): void;
		}
		export class JumpPanelFloat extends ig.AnimatedEntity {
			public panelType: any;
			public effects: ig.EffectSheet;
			public jumpHeightData: any;
			public condition: ig.VarCondition;
			public dir: any;
			public _wm: ig.Config;

			public constructor(a: any, b: any, c: any, d: any);

			public init(a: any, b: any, c: any, d: any): void;
			public collideWith(a: any): any;
			public varsChanged(): void;
			public onNavMapInfluence(): void;
		}
		export class TeleportCentral extends ig.Entity {
			public map: string;
			public marker: string;
			public effects: ig.EffectSheet;
			public fxHandle: any;
			public npcRunnerEnterProb: number;
			public npcRunnerExitProb: number;
			public landmark: any;
			public landmarkTarget: any;
			public landmarkCondition: ig.VarCondition;
			public landmarkDetectDelay: number;
			public hasEffects: boolean;
			public detectType: string;
			public wpConnection: sc.WPConnection;
			public _wm: ig.Config;

			public constructor(a: any, b: any, c: any, d: any);

			public init(a: any, b: any, c: any, d: any): void;
			public update(): void;
			public onKill(a: any): void;
			public show(a: any): void;
			public enterEntity(): void;
			public leaveEntity(): void;
			public applyMarkerPosition(a: any): void;
			public getRunnerDestination(): any;
			public getWPConnect(): any;
		}
		export class TeleportField extends ig.AnimatedEntity {
			public centralName: any;
			public map: any;
			public marker: any;
			public dir: string;
			public glowHandle: any;
			public glowFxReplace: ig.EffectHandle;
			public initialized: boolean;
			public longTelCond: ig.VarCondition;
			public teleportIcon: sc.MapInteractIcon;
			public interactEntry: sc.MapInteractEntry;
			public effects: any;
			public blockEvent: ig.Event;
			public blockEventCondition: ig.VarCondition;
			public gfxType: any;
			public _wm: ig.Config;

			public constructor(a: any, b: any, c: any, d: any);

			public init(a: any, b: any, c: any, d: any): void;
			public show(a: any): void;
			public onHideRequest(): void;
			public onEffectEvent(a: any): void;
			public onKill(a: any): void;
			public hasInteract(): any;
			public collideWith(a: any): void;
			public update(): void;
			public recheckGlowStart(): void;
			public startGlow(): void;
			public enterEntity(a: any): void;
			public leaveEntity(a: any): any;
			public getEnterActionData(a: any, b: any): any;
			public _addMoveEvent(a: any, b: any, c: any, d: any): void;
			public onInteraction(): any;
			public varsChanged(): void;
			public applyMarkerPosition(a: any): void;
			public onPostPlacementAction(a: any): void;
			public _addPartyEnterSteps(a: any, b: any): void;
			public _addEnterSteps(a: any): void;
			public isRunnerDestBlocked(): any;
		}
		export class RhombusPoint extends ig.Entity {
			public _wm: ig.Config;
			public title: any;
			public description: any;
			public condition: any;
			public map: any;
			public marker: any;
			public icon: number;

			public constructor(b: any, a: any, d: any, c: any);

			public init(b: any, a: any, d: any, c: any): void;
		}
		export class EventTrigger extends ig.Entity {
			public eventType: any;
			public startCondition: ig.VarCondition;
			public endCondition: ig.VarCondition;
			public event: ig.Event;
			public eventCall: any;
			public triggerVar: any;
			public _wm: ig.Config;

			public constructor(a: any, b: any, c: any, e: any);

			public init(a: any, b: any, c: any, e: any): void;
			public onKill(a: any): void;
			public update(): any;
			public varsChanged(): void;
		}
		export class LocationEvent extends ig.Entity {
			public startCondition: ig.VarCondition;
			public event: ig.Event;
			public triggerVar: any;
			public _wm: ig.Config;

			public constructor(a: any, d: any, c: any, e: any);

			public init(a: any, d: any, c: any, e: any): void;
			public onKill(a: any): void;
			public update(): void;
		}
		export class NPC extends sc.ActorEntity {
			public characterName: any;
			public character: sc.Character;
			public npcStates: any;
			public npcStatesData: any;
			public activeStateIdx: any;
			public configs: any;
			public hidden: boolean;
			public interactEntry: sc.MapInteractEntry;
			public eventBlocked: boolean;
			public deferredReset: boolean;
			public npcEffects: ig.EffectSheet;
			public interactIcons: any;
			public lookAtAction: ig.Action;
			public eventCall: any;
			public doPostEventAction: boolean;
			public xenoDialog: any;
			public xenoDialogGui: sc.XenoDialogIcon;
			public permaEffect: any;
			public displayName: any;
			public displayTrigger: any;
			public displayNameRandom: any;
			public respawn: any;
			public _wm: ig.Config;
			public hideHandle: any;
			public hideManager: ig.EntityHideManager;

			public constructor(a: any, b: any, c: any, d: any);

			public init(a: any, b: any, c: any, d: any): void;
			public onTerrainUpdate(): void;
			public setRespawnPoint(a: any): void;
			public checkQuickRespawn(): void;
			public doQuickRespawn(): void;
			public getQuickMenuSettings(): any;
			public onLoadableComplete(c: any): void;
			public onKill(a: any): void;
			public update(): void;
			public onPartySwapHide(): void;
			public postActionUpdate(): void;
			public varsChanged(): void;
			public resetNpcState(a: any): void;
			public setConfig(a: any): void;
			public hasNpcStateChanged(): any;
			public updateNpcState(b: any, c: any): void;
			public setMapInteractIcon(a: any): void;
			public setXenoDialog(a: any): void;
			public isXenoTextFinished(): any;
			public cancelXenoDialog(): void;
			public _initXenoDialogGui(): void;
			public onInteraction(): any;
			public onEventStart(): void;
			public onEventEnd(): void;
			public startTradeMenu(): void;
			public cancelPostEventAction(): void;
		}
		export class Crosshair extends ig.Entity {
			public offset: any;
			public tileSheet: ig.TileSheet;
			public thrower: any;
			public controller: any;
			public rangeStart: any;
			public aimTime: number;
			public maxAngleMove: any;
			public chargeActive: boolean;
			public rangeCurrent: number;
			public currentCharge: number;
			public speedFactor: number;
			public baseSpeedFactor: number;
			public doBlink: boolean;
			public gamepadMode: boolean;
			public active: boolean;
			public special: boolean;
			public circleGlow: number;
			public _lastDir: any;
			public _aimDir: any;
			public _dots: any;
			public _currentDot: number;
			public sounds: any;
			public soundTimer: number;
			public dirHelperDrawInfo: any;

			public constructor(a: any, b: any, c: any, d: any);

			public init(a: any, b: any, c: any, d: any): void;
			public initSprites(): void;
			public getDir(a: any): any;
			public getThrowDir(a: any): any;
			public isThrowCharged(): any;
			public setThrown(): any;
			public setBaseSpeedFactor(a: any): void;
			public setSpeedFactor(a: any): void;
			public setCircleGlow(): void;
			public reducePrecision(a: any): void;
			public setSpecial(a: any): void;
			public setActive(a: any): void;
			public deferredUpdate(): void;
			public updateSprites(): void;
			public onKill(a: any): void;
			public _updateCrossHair(b: any, e: any, g: any, h: any, i: any, j: any, v: any, q: any, s: any): any;
			public _getThrowerPos(a: any): any;
		}
		export class CrosshairDot extends ig.AnimatedEntity {
			public blocks: any;
			public tileSheet: ig.TileSheet;

			public constructor(a: any, b: any, c: any, d: any);

			public init(a: any, b: any, c: any, d: any): void;
			public update(): void;
		}
		export class Player extends sc.PlayerBaseEntity {
			public skin: any;
			public proxies: any;
			public model: any;
			public state: number;
			public throwCounter: number;
			public attackCounter: number;
			public attackResetTimer: number;
			public throwDir: any;
			public throwDirData: any;
			public doAttack: boolean;
			public lastMoveDir: any;
			public dashCount: number;
			public dashAttackCount: number;
			public maxDash: number;
			public keepLastMoveDir: number;
			public moveDirStartedTimer: number;
			public jumpPoint: any;
			public jumpForwardDir: any;
			public idle: any;
			public gui: any;
			public cameraHandle: any;
			public cameraTargets: any;
			public mapStartPos: any;
			public actionBlocked: any;
			public combatStats: any;
			public dashDir: any;
			public dashDirData: any;
			public dashTimer: number;
			public dashBlock: number;
			public doEscapeTimer: number;
			public stunEscapeDash: boolean;
			public dashPerfect: boolean;
			public perfectGuardCooldown: number;
			public charging: any;
			public chargeThrowCharged: boolean;
			public floating: boolean;
			public recordInput: boolean;
			public interactObject: any;
			public explicitAimStart: number;
			public levelUpNotifier: sc.PlayerLevelNotifier;
			public itemConsumer: sc.ItemConsumption;
			public isPlayer: boolean;
			public hidePets: boolean;

			public constructor(a: any, b: any, c: any, d: any);

			public init(a: any, b: any, c: any, d: any): void;
			public initModel(): void;
			public replaceAnimSheet(a: any): void;
			public initIdleActions(): void;
			public doPetAction(): void;
			public updateAnimSheet(a: any): void;
			public updateSkinStepFx(): void;
			public updateSkinAura(): void;
			public updateSkinPet(a: any): void;
			public onEffectEvent(a: any): void;
			public regenPvp(a: any): void;
			public updateModelStats(a: any): void;
			public hasCameraTarget(a: any): any;
			public addCameraTarget(a: any, b: any): void;
			public removeCameraTarget(a: any, b: any): void;
			public removeAllCameraTargets(a: any): void;
			public _updateCameraHandle(a: any): void;
			public onPlayerPlaced(): void;
			public onMoveEffect(a: any): void;
			public setAction(a: any, b: any, c: any): void;
			public doCombatAction(a: any): void;
			public setActionBlocked(a: any): void;
			public clearActionBlocked(): void;
			public showChargeEffect(a: any): void;
			public clearCharge(): void;
			public onKill(a: any): void;
			public show(): void;
			public getChargeType(a: any, b: any): any;
			public getCurrentChargeLevel(): any;
			public getMaxChargeLevel(a: any): any;
			public startCharge(a: any): any;
			public getChargeAction(a: any, b: any): any;
			public quickStateSwitch(a: any): void;
			public isElementChangeBlocked(): any;
			public isControlBlocked(): any;
			public update(): void;
			public gatherInput(): any;
			public handleDash(a: any, b: any, c: any, d: any): void;
			public handleGuard(a: any, b: any): void;
			public handleCharge(a: any, c: any): void;
			public handleStateChange(a: any, b: any): void;
			public updatePlayerMovement(a: any, b: any): void;
			public handleStateStart(a: any, b: any): void;
			public startThrowAction(a: any, b: any): void;
			public startCloseCombatAction(a: any, b: any): void;
			public startDash(): any;
			public deferredUpdate(): void;
			public postActionUpdate(): void;
			public cancelInteract(): void;
			public onPreDamageModification(a: any, b: any, c: any, d: any, e: any, f: any): any;
			public onPlayerShieldBreak(): void;
			public onPerfectDash(): void;
			public onDamageTaken(a: any, b: any): void;
			public onHeal(a: any, b: any): void;
			public onTargetHit(a: any, b: any, c: any, d: any): void;
			public onJump(a: any, b: any): void;
			public onPhysicsSquish(a: any): void;
			public varsChanged(): void;
			public modelChanged(a: any, b: any, c: any): void;
			public copyModelSkills(): void;
			public doQuickRespawn(a: any, b: any, c: any): void;
			public onRespawnEnd(): void;
			public isThrowCharged(): any;
			public setOverrideBall(a: any): void;
			public useItem(a: any): void;
			public onVarAccess(a: any, b: any): any;
		}
		export class Block extends ig.AnimatedEntity {
			public tileSheet: ig.TileSheet;
			public timer: number;
			public style: number;
			public _wm: ig.Config;

			public constructor(b: any, a: any, d: any, c: any);

			public init(b: any, a: any, d: any, c: any): void;
			public update(): void;
			public collideWith(): void;
		}
		export class Blocker extends ig.AnimatedEntity {
			public active: boolean;
			public maxHeight: number;
			public minHeight: number;
			public variable: any;
			public _wm: ig.Config;

			public constructor(b: any, a: any, d: any, c: any);

			public init(b: any, a: any, d: any, c: any): void;
			public update(): void;
			public varsChanged(): void;
			public animationEnded(): void;
		}
		export class BombPanel extends ig.AnimatedEntity {
			public respawnTimer: number;
			public bomb: any;
			public _wm: ig.Config;
			public effects: any;

			public constructor(a: any, b: any, c: any, e: any);

			public init(a: any, b: any, c: any, e: any): void;
			public show(a: any): void;
			public onHideRequest(): void;
			public onEffectEvent(a: any): void;
			public update(): void;
			public spawnBomb(a: any): void;
			public hasBomb(): any;
			public onBombStart(): void;
			public onBombExplode(): void;
		}
		export class WaterBubblePanel extends ig.AnimatedEntity {
			public respawnTimer: number;
			public currentBubble: any;
			public active: boolean;
			public _wm: ig.Config;
			public effects: any;

			public constructor(a: any, b: any, c: any, e: any);

			public init(a: any, b: any, c: any, e: any): void;
			public show(a: any): void;
			public onHideRequest(): void;
			public onEffectEvent(a: any): void;
			public update(): void;
			public spawnBubble(a: any): void;
			public onBubbleStart(): void;
			public onBubbleBurst(): void;
		}
		export class Compressor extends ig.AnimatedEntity {
			public chargeState: number;
			public dischargeTimer: number;
			public currentElement: number;
			public compressorBall: any;
			public ballHeight: number;
			public _wm: ig.Config;
			public effects: any;
			public sounds: any;

			public constructor(a: any, b: any, c: any, d: any);

			public init(a: any, b: any, c: any, d: any): void;
			public show(a: any): void;
			public onHideRequest(): void;
			public onEffectEvent(a: any): void;
			public createCompressorBall(): void;
			public update(): void;
			public resetCharge(): void;
			public updateSprites(): void;
			public ballHit(a: any): any;
			public isBallAdjust(): any;
			public doBallAdjust(a: any, b: any, c: any): any;
			public isBallDestroyer(a: any, b: any, c: any): any;
		}
		export class AntiCompressor extends ig.AnimatedEntity {
			public _wm: ig.Config;
			public effects: any;

			public constructor(a: any, b: any, c: any, d: any);

			public init(a: any, b: any, c: any, d: any): void;
			public show(a: any): void;
			public onHideRequest(): void;
			public onEffectEvent(a: any): void;
			public ballHit(a: any): any;
		}
		export class CompressorBouncer extends ig.AnimatedEntity {
			public _wm: ig.Config;
			public effects: any;
			public face: any;

			public constructor(a: any, b: any, c: any, d: any);

			public init(a: any, b: any, c: any, d: any): void;
			public show(a: any): void;
			public onHideRequest(): void;
			public onEffectEvent(a: any): void;
			public ballHit(a: any): any;
			public varsChanged(): void;
		}
		export class WaterBlock extends ig.AnimatedEntity {
			public blockType: number;
			public state: number;
			public changeDuration: number;
			public timer: number;
			public compressorSlow: number;
			public effects: any;
			public _wm: ig.Config;

			public constructor(a: any, c: any, e: any, f: any);

			public init(a: any, c: any, e: any, f: any): void;
			public onKill(a: any): void;
			public steam(a: any, b: any): void;
			public isFrozen(): any;
			public turnIce(): void;
			public melt(): void;
			public onEffectEvent(a: any): void;
			public reform(): void;
			public bounce(): void;
			public collideWith(b: any, c: any): void;
			public onGroundAdd(a: any): void;
			public ballHit(b: any): any;
			public update(): void;
		}
		export class KeyPanel extends ig.AnimatedEntity {
			public _wm: ig.Config;
			public effects: any;
			public throwerEntity: any;
			public active: boolean;
			public keyType: any;

			public constructor(a: any, d: any, c: any, e: any);

			public init(a: any, d: any, c: any, e: any): void;
			public show(a: any): void;
			public setThrower(a: any): void;
			public setActive(a: any): void;
			public hasKeys(): any;
			public update(): void;
			public collideWith(a: any): void;
		}
		export class BallChanger extends ig.AnimatedEntity {
			public isOn: boolean;
			public condition: ig.VarCondition;
			public changerType: any;
			public disableTimer: number;
			public disableBall: any;
			public ballTime: number;
			public resetBounce: boolean;
			public _wm: ig.Config;
			public fx: any;

			public constructor(a: any, b: any, c: any, e: any);

			public init(a: any, b: any, c: any, e: any): void;
			public update(): void;
			public varsChanged(): void;
			public ballHit(a: any): any;
		}
		export class WallBase extends ig.Entity {
			public condition: ig.VarCondition;
			public active: boolean;
			public wallCollType: number;
			public wallZHeight: number;
			public wallBlockers: any;
			public skipRender: boolean;
			public noNavMapBlock: boolean;

			public constructor(a: any, b: any, c: any, e: any);

			public init(a: any, b: any, c: any, e: any): void;
			public onKill(a: any): void;
			public updateWallBlockers(a: any): void;
			public varsChanged(): void;
		}
		export class WallHorizontal extends ig.ENTITY.WallBase {
			public gfx: ig.Image;
			public patterns: ig.ImagePatternSheet;
			public leftEnd: number;
			public rightEnd: number;
			public _wm: ig.Config;

			public constructor(a: any, b: any, c: any, e: any);

			public init(a: any, b: any, c: any, e: any): void;
			public show(a: any): void;
			public initSprites(): void;
			public update(): void;
			public updateSprites(): void;
		}
		export class WallVertical extends ig.ENTITY.WallBase {
			public gfx: ig.Image;
			public patterns: ig.ImagePatternSheet;
			public topEnd: number;
			public bottomEnd: number;
			public _wm: ig.Config;

			public constructor(a: any, b: any, c: any, e: any);

			public init(a: any, b: any, c: any, e: any): void;
			public show(a: any): void;
			public initSprites(): void;
			public update(): void;
			public updateSprites(): void;
		}
		export class WallBlocker extends ig.Entity {
			public maxHeight: number;
			public colorGfx: ig.DoubleColor;
			public timer: number;
			public MOVE_TIME: number;
			public GLOW_TIME: number;
			public skipRender: boolean;
			public navBlocker: any;
			public noNavMapBlock: boolean;
			public effectPattern: ig.ImagePatternSheet;
			public _wm: ig.Config;

			public constructor(a: any, b: any, c: any, e: any);

			public init(a: any, b: any, c: any, e: any): void;
			public onKill(a: any): void;
			public initSprites(): void;
			public update(): void;
			public updateSprites(): void;
			public setActive(a: any, b: any): void;
		}
		export class GlowingLine extends ig.Entity {
			public patterns: ig.ImagePatternSheet;
			public timer: number;
			public glowing: boolean;
			public _wm: ig.Config;

			public constructor(b: any, a: any, d: any, c: any);

			public init(b: any, a: any, d: any, c: any): void;
			public initSprites(): void;
			public update(): void;
			public updateSprites(): void;
			public varsChanged(): void;
		}
		export class Lorry extends ig.AnimatedEntity {
			public lorryType: any;
			public respawnTimer: number;
			public moveType: any;
			public initDir: any;
			public moving: boolean;
			public maxSpeed: number;
			public currentSpeed: number;
			public slowDownAccel: number;
			public pauseTimer: number;
			public lightHandle: ig.LightHandle;
			public bombSnap: boolean;
			public fxHandle: any;
			public moveDest: any;
			public _wm: ig.Config;

			public constructor(a: any, b: any, d: any, g: any);

			public init(a: any, b: any, d: any, g: any): void;
			public show(a: any): void;
			public resetPos(a: any, e: any): void;
			public setMove(a: any, b: any): void;
			public update(): void;
			public moveLorry(): void;
			public collideWith(a: any): void;
			public varsChanged(): void;
			public stepPoint(): any;
			public flip(): void;
			public grabRail(a: any): void;
			public applyMarkerPosition(a: any): void;
		}
		export class LorryRespawner extends ig.AnimatedEntity {
			public lorrySrc: any;
			public lorry: any;
			public initDir: any;
			public lastAlpha: number;
			public _wm: ig.Config;

			public constructor(a: any, b: any, d: any, g: any);

			public init(a: any, b: any, d: any, g: any): void;
			public fetchLorry(): void;
			public update(): void;
		}
		export class LorryRail extends ig.AnimatedEntity {
			public entries: any;
			public currentEntry: any;
			public connectedNeighbours: boolean;
			public _wm: ig.Config;

			public constructor(a: any, b: any, d: any, g: any);

			public init(a: any, b: any, d: any, g: any): void;
			public initSprites(): void;
			public show(a: any): void;
			public connectNeighbours(): void;
			public connectNeighboursForEntry(a: any): void;
			public pushEntry(a: any, b: any): void;
			public getInitialPoints(b: any, d: any, f: any): void;
			public getGoalDistance(a: any, b: any, d: any): any;
			public getPoints(a: any, b: any): void;
			public _getPointsForEntry(a: any, b: any, d: any, g: any): any;
			public _transferPoints(a: any, b: any, d: any): void;
			public updateEntry(a: any): void;
			public update(): void;
			public onKill(a: any): void;
			public setEntrySprite(a: any, b: any): void;
			public updateSprites(): void;
			public varsChanged(): void;
		}
		export class OneTimeSwitch extends ig.AnimatedEntity {
			public hitCondition: any;
			public ballDestroyer: boolean;
			public timer: number;
			public fullZHeight: number;
			public variable: string;
			public isOn: boolean;
			public sounds: any;
			public switchType: any;
			public data: any;
			public fx: any;
			public fxHandle: any;
			public fxHideHandle: any;
			public _wm: ig.Config;

			public constructor(b: any, a: any, d: any, c: any);

			public init(b: any, a: any, d: any, c: any): void;
			public show(b: any): void;
			public onHideRequest(): void;
			public onEffectEvent(b: any): void;
			public onKill(b: any): void;
			public update(): void;
			public ballHit(b: any): any;
			public animationEnded(b: any): void;
			public setOn(): void;
			public finalizeOn(): void;
			public varsChanged(): void;
			public setOff(): void;
		}
		export class ElementShieldSrc extends ig.AnimatedEntity {
			public respawnTimer: number;
			public currentShield: any;
			public active: boolean;
			public _wm: ig.Config;

			public constructor(a: any, b: any, c: any, d: any);

			public init(a: any, b: any, c: any, d: any): void;
			public show(a: any): void;
			public onHideRequest(): void;
			public onEffectEvent(a: any): void;
			public update(): void;
			public spawnShield(a: any): void;
			public onShieldReset(): void;
		}
		export class FloorSwitch extends ig.AnimatedEntity {
			public hitCondition: any;
			public ballDestroyer: boolean;
			public switchType: any;
			public variable: string;
			public isOn: boolean;
			public lockCondition: ig.VarCondition;
			public setOnDelay: number;
			public effects: any;
			public _wm: ig.Config;

			public constructor(b: any, a: any, d: any, c: any);

			public init(b: any, a: any, d: any, c: any): void;
			public show(b: any): void;
			public onHideRequest(): void;
			public onEffectEvent(b: any): void;
			public _isStillPressed(): any;
			public update(): void;
			public activate(b: any): void;
			public deactivate(): void;
			public varsChanged(): void;
			public collideWith(b: any): void;
			public onGroundAdd(b: any): void;
			public checkEntityArraySupport(b: any): any;
			public isEntitySupported(b: any): any;
		}
		export class Magnet extends ig.AnimatedEntity {
			public dir: number;
			public targetDir: number;
			public defaultDir: number;
			public face: any;
			public altDirs: any;
			public pull: any;
			public effects: any;
			public _wm: ig.Config;

			public constructor(a: any, b: any, e: any, f: any);

			public init(a: any, b: any, e: any, f: any): void;
			public onHideRequest(): void;
			public onEffectEvent(a: any): void;
			public update(): void;
			public startPull(): void;
			public fetchPullEntities(): void;
			public isPullActive(): any;
			public pullEntities(): void;
			public varsChanged(): void;
			public updateDir(a: any): void;
			public ballHit(a: any): any;
		}
		export class MultiHitSwitch extends ig.AnimatedEntity {
			public hitCondition: any;
			public ballDestroyer: boolean;
			public activeZHeight: number;
			public variable: string;
			public isOn: boolean;
			public hitsToActive: number;
			public currentHits: number;
			public decreaseDelay: number;
			public decreaseRepeat: number;
			public timerUntilDecrease: number;
			public timerDecreaseStep: number;
			public hitSound: ig.Sound;
			public countSound: ig.Sound;
			public activateSound: ig.Sound;
			public fx: any;
			public _wm: ig.Config;

			public constructor(b: any, a: any, d: any, c: any);

			public init(b: any, a: any, d: any, c: any): void;
			public show(b: any): void;
			public onHideRequest(): void;
			public onEffectEvent(b: any): void;
			public onKill(b: any): void;
			public update(): void;
			public ballHit(b: any): any;
			public animationEnded(b: any): void;
			public _setAnimation(): void;
		}
		export class BounceSwitch extends ig.AnimatedEntity {
			public ballDestroyer: boolean;
			public variable: any;
			public group: any;
			public isOn: boolean;
			public effects: ig.EffectSheet;
			public sounds: any;
			public timer: number;
			public cameraHandle: ig.Camera.TargetHandle;
			public _wm: ig.Config;

			public constructor(b: any, a: any, d: any, c: any);

			public init(b: any, a: any, d: any, c: any): void;
			public update(): void;
			public ballHit(b: any): any;
			public animationEnded(b: any): void;
			public onGroupReset(): void;
			public onGroupResolve(): void;
		}
		export class BounceBlock extends ig.AnimatedEntity {
			public group: any;
			public blockState: number;
			public maxZHeight: number;
			public timer: ig.WeightTimer;
			public cameraAction: any;
			public effects: ig.EffectSheet;
			public ballTime: number;
			public sounds: any;
			public _wm: ig.Config;

			public constructor(b: any, a: any, d: any, c: any);

			public init(b: any, a: any, d: any, c: any): void;
			public ballHit(b: any, a: any): any;
			public onGroupResolve(b: any): void;
			public onGroupReset(): void;
			public update(): void;
			public updateSprites(): void;
		}
		export class ElementPole extends ig.AnimatedEntity {
			public data: any;
			public gfx: ig.Image;
			public group: any;
			public active: boolean;
			public charge: any;
			public effects: any;
			public _wm: ig.Config;

			public constructor(a: any, b: any, c: any, e: any);

			public init(a: any, b: any, c: any, e: any): void;
			public onKill(a: any): void;
			public show(a: any): void;
			public onHideRequest(): void;
			public onEffectEvent(a: any): void;
			public initSprites(): void;
			public update(): void;
			public updateSprites(): void;
			public chargeElement(a: any, b: any, c: any, d: any): void;
			public resetTimer(b: any): void;
			public addLight(a: any): void;
			public discharge(b: any): void;
			public showEffect(b: any, c: any, d: any): void;
			public ballHit(c: any): any;
			public onComplete(): void;
			public onDestInit(b: any): void;
			public onFinalize(): void;
			public onCancel(): void;
			public isBallAdjust(): any;
			public doBallAdjust(a: any, b: any, c: any, d: any): any;
			public isBallDestroyer(): any;
		}
		export class ElementPoleDest extends ig.AnimatedEntity {
			public group: any;
			public element: any;
			public state: any;
			public _wm: ig.Config;
			public effects: any;

			public constructor(a: any, b: any, d: any, e: any);

			public init(a: any, b: any, d: any, e: any): void;
			public onKill(a: any): void;
			public update(): void;
			public isOn(): any;
			public onPoleHit(a: any, b: any, d: any): void;
			public onEffectEvent(a: any): void;
			public onCancel(): void;
			public turnOn(): void;
			public turnOnGfx(): void;
			public turnOff(): void;
		}
		export class PushPullBlock extends ig.AnimatedEntity {
			public _wm: ig.Config;
			public effects: any;
			public pushPullable: sc.PushPullable;
			public squishRespawn: boolean;
			public compressorSlow: number;
			public pushPullDirection: number;
			public bombSnap: boolean;

			public constructor(b: any, a: any, d: any, c: any);

			public init(b: any, a: any, d: any, c: any): void;
			public show(b: any): void;
			public onHideRequest(): void;
			public onEffectEvent(b: any): void;
			public update(): void;
			public deferredUpdate(): void;
			public resetPos(b: any, a: any): void;
			public onInteraction(): void;
			public onInteractionEnd(): void;
			public onKill(b: any): void;
			public onMagnetStart(): any;
			public onMagnetEnd(b: any): void;
		}
		export class WavePushPullBlock extends ig.AnimatedEntity {
			public _wm: ig.Config;
			public pushPullable: sc.PushPullable;
			public phased: boolean;
			public squishRespawn: boolean;
			public compressorSlow: number;
			public bombSnap: boolean;
			public effects: any;

			public constructor(b: any, a: any, d: any, c: any);

			public init(b: any, a: any, d: any, c: any): void;
			public show(b: any): void;
			public onHideRequest(): void;
			public onEffectEvent(b: any): void;
			public update(): void;
			public deferredUpdate(): void;
			public onInteraction(): void;
			public onInteractionEnd(): void;
			public onKill(b: any): void;
			public resetPos(b: any, a: any): void;
			public onEntityKillDetach(): void;
			public doTeleport(): void;
			public ballHit(b: any): any;
			public onMagnetStart(): any;
			public onMagnetEnd(b: any): void;
		}
		export class PushPullDest extends ig.AnimatedEntity {
			public variable: any;
			public zMove: number;
			public saveType: number;
			public placedData: any;
			public placed: boolean;
			public zStart: number;
			public placeTimer: ig.WeightTimer;
			public delayed: boolean;
			public effects: ig.EffectSheet;
			public sound: any;
			public _wm: ig.Config;

			public constructor(a: any, b: any, f: any, g: any);

			public init(a: any, b: any, f: any, g: any): void;
			public onPushPullableDetect(a: any, d: any): any;
			public onPushPullablePlaced(a: any): void;
			public savePushPullable(a: any): void;
			public loadPushPullable(): void;
			public initPushPullable(): void;
			public _getVarName(): any;
			public update(): void;
			public deferredUpdate(): void;
			public onInteraction(): void;
			public onInteractionEnd(): void;
		}
		export class SlidingBlock extends ig.AnimatedEntity {
			public _wm: ig.Config;
			public moving: boolean;
			public moveDir: any;
			public bombSnap: boolean;
			public squishRespawn: boolean;
			public effects: any;

			public constructor(a: any, b: any, e: any, f: any);

			public init(a: any, b: any, e: any, f: any): void;
			public ballHit(d: any): any;
			public update(): void;
		}
		export class Switch extends ig.AnimatedEntity {
			public ballDestroyer: boolean;
			public variable: string;
			public isOn: boolean;
			public sounds: any;
			public _wm: ig.Config;

			public constructor(b: any, a: any, d: any, c: any);

			public init(b: any, a: any, d: any, c: any): void;
			public ballHit(b: any): any;
			public varsChanged(): void;
		}
		export class Destructible extends ig.AnimatedEntity {
			public enemyInfo: sc.EnemyInfo;
			public permaDestruct: any;
			public onDestructIncrease: any;
			public onPreDestructIncrease: any;
			public hitSide: any;
			public hitCount: number;
			public conditionFunction: any;
			public sounds: any;
			public effects: any;
			public range: any;
			public keyConsume: any;
			public hitSound: any;
			public blockNavMap: boolean;
			public navBlocker: any;
			public blinkTimer: number;
			public noBlinking: boolean;
			public varState: number;
			public _wm: ig.Config;

			public constructor(a: any, b: any, c: any, e: any);

			public init(a: any, b: any, c: any, e: any): void;
			public show(a: any): void;
			public onKill(a: any): void;
			public onSave(): void;
			public getDestructVarName(): any;
			public update(): void;
			public onEffectEvent(a: any): void;
			public ballHit(a: any): any;
			public startDestruction(): void;
			public destroy(a: any): void;
			public setVariables(): void;
			public invokeRangeKill(a: any): void;
			public onRangeKill(a: any, b: any): void;
			public throwDebris(): void;
			public isBallDestroyer(a: any, b: any): any;
		}
		export class ItemDestruct extends ig.AnimatedEntity {
			public _wm: ig.Config;
			public blinkTimer: number;
			public dropped: boolean;
			public itemDrops: any;
			public typeData: any;
			public permaDeath: boolean;
			public globalKey: any;
			public enemyInfo: sc.EnemyInfo;
			public enemyChance: any;
			public boomEffect: ig.EffectHandle;
			public debrisEffect: ig.EffectHandle;
			public trigger: string;
			public indestructible: boolean;

			public constructor(a: any, b: any, c: any, e: any);

			public init(a: any, b: any, c: any, e: any): any;
			public _getVarPrefix(): any;
			public onKill(a: any): void;
			public update(): void;
			public ballHit(a: any): any;
			public destroy(): void;
			public setDropped(): void;
			public dropItem(): void;
			public isBallDestroyer(): any;
		}
		export class RegenDestruct extends ig.AnimatedEntity {
			public hitSide: any;
			public conditionFunction: any;
			public effects: any;
			public blockNavMap: boolean;
			public navBlocker: any;
			public blinkTimer: number;
			public regenMaxTime: number;
			public regenTimer: number;
			public collType: any;
			public collideCallback: any;
			public zHeight: number;
			public _wm: ig.Config;

			public constructor(a: any, b: any, e: any, f: any);

			public init(a: any, b: any, e: any, f: any): void;
			public show(a: any): void;
			public onKill(a: any): void;
			public startRegen(): void;
			public isActive(): any;
			public regenerate(): void;
			public regenComplete(): void;
			public update(): void;
			public onEffectEvent(a: any): void;
			public ballHit(a: any): any;
			public destroy(a: any, b: any): void;
			public varsChanged(): void;
			public collideWith(a: any, b: any): void;
			public throwDebris(): void;
			public isBallDestroyer(a: any, b: any): any;
		}
		export class ExtractPlatform extends ig.AnimatedEntity {
			public _wm: ig.Config;
			public condition: ig.VarCondition;
			public terrain: any;
			public zTimer: number;
			public zTime: number;
			public activeZHeight: number;
			public inactiveZHeight: number;
			public activeState: boolean;
			public _baseZ: number;
			public _startZ: number;
			public _targetZ: number;

			public constructor(b: any, a: any, d: any, c: any);

			public init(b: any, a: any, d: any, c: any): void;
			public update(): void;
			public varsChanged(): void;
		}
		export class DynamicPlatform extends ig.ActorEntity {
			public _wm: ig.Config;
			public currentState: any;
			public states: any;
			public pauseCondition: ig.VarCondition;
			public pauseAnimation: any;
			public baseConfig: ig.ActorConfig;
			public paused: boolean;
			public skipWaitForAction: boolean;
			public _switchState: boolean;
			public _stateReached: boolean;
			public fx: any;

			public constructor(a: any, d: any, c: any, e: any);

			public init(a: any, d: any, c: any, e: any): void;
			public show(a: any): void;
			public onHideRequest(): void;
			public onEffectEvent(a: any): void;
			public update(): void;
			public postActionUpdate(): void;
			public onKill(a: any): void;
			public updateStates(a: any): void;
			public playCurrentState(a: any): void;
			public varsChanged(): void;
			public updatePause(): void;
		}
		export class OLPlatform extends ig.Entity {
			public _wm: ig.Config;
			public terrain: any;
			public maps: any;
			public startPos: any;
			public states: any;
			public speed: number;
			public staticSpeed: boolean;
			public squishRespawn: boolean;
			public usePositionalSound: boolean;
			public sound: any;
			public _lastPos: any;
			public timer: ig.WeightTimer;
			public currentState: any;
			public spritesInitialized: boolean;
			public navBlocker: any;
			public quickNavUpdate: boolean;

			public constructor(a: any, b: any, e: any, f: any);

			public init(a: any, b: any, e: any, f: any): void;
			public show(a: any): void;
			public onKill(): void;
			public updateState(b: any): void;
			public update(): void;
			public updateSprites(): void;
			public varsChanged(): void;
		}
		export class EnemyCounter extends ig.AnimatedEntity {
			public gfx: ig.Image;
			public enemyGroup: any;
			public enemyCount: number;
			public preCount: number;
			public postCount: number;
			public preVariable: any;
			public postVariable: any;
			public done: boolean;
			public shuffleCondition: any;
			public timer: number;
			public MAX_FLASH_TIME: number;
			public sounds: any;
			public effects: any;
			public _wm: ig.Config;

			public constructor(a: any, b: any, c: any, e: any);

			public init(a: any, b: any, c: any, e: any): void;
			public show(a: any): void;
			public onHideRequest(): void;
			public onEffectEvent(a: any): void;
			public initSprites(): void;
			public update(): void;
			public onCombatEvent(a: any, b: any): any;
			public onCombatMarbleReach(): void;
			public updateSprites(): void;
			public onKill(a: any): void;
			public decreaseCount(): void;
		}
		export class KillCounter extends ig.Entity {
			public enemyGroup: any;
			public killCount: number;
			public mode: any;
			public preCount: number;
			public variable: any;
			public done: boolean;
			public _wm: ig.Config;

			public constructor(a: any, d: any, c: any, e: any);

			public init(a: any, d: any, c: any, e: any): void;
			public onCombatEvent(a: any, d: any): void;
			public onKill(a: any): void;
		}
		export class GroupSwitch extends ig.AnimatedEntity {
			public hitCondition: any;
			public ballDestroyer: boolean;
			public activeCondition: ig.VarCondition;
			public group: any;
			public updateType: any;
			public activeBoolVar: any;
			public activeCountVar: any;
			public activeZHeight: number;
			public firstTrigger: any;
			public isOn: boolean;
			public sounds: any;
			public time: number;
			public timer: number;
			public isSpinning: boolean;
			public _wm: ig.Config;

			public constructor(a: any, d: any, c: any, e: any);

			public init(a: any, d: any, c: any, e: any): void;
			public onKill(a: any): void;
			public setOff(): void;
			public setOn(): void;
			public update(): void;
			public ballHit(a: any): any;
			public animationEnded(a: any): void;
		}
		export class Chest extends ig.AnimatedEntity {
			public _wm: ig.Config;
			public mapIcons: sc.MapInteractIcon;
			public mapIconsKey: sc.MapInteractIcon;
			public effects: any;
			public interactEntry: sc.MapInteractEntry;
			public hideHandle: any;
			public isOpen: boolean;
			public chestVariable: boolean;
			public item: any;
			public amount: number;
			public chestType: any;
			public lockedIcon: boolean;
			public _itemName: any;
			public _trigger: any;
			public _initialized: boolean;

			public constructor(b: any, a: any, d: any, c: any);

			public init(b: any, a: any, d: any, c: any): void;
			public _initGfx(): void;
			public onEffectEvent(b: any): void;
			public show(b: any): void;
			public _updateIcon(): void;
			public onHideRequest(): void;
			public update(): void;
			public onInteraction(): any;
			public openUp(): void;
			public _reallyOpenUp(): void;
			public isOpened(): any;
			public animationEnded(b: any): void;
			public varsChanged(): void;
		}
		export class QuicksandHole extends ig.AnimatedEntity {
			public _wm: ig.Config;
			public effects: any;

			public constructor(b: any, a: any, d: any, c: any);

			public init(b: any, a: any, d: any, c: any): void;
			public show(b: any): void;
			public update(): void;
			public onQuickSandFall(b: any): void;
			public onGroundAdd(b: any): void;
			public onGroundRemove(b: any): void;
		}
		export class SteamPipe extends ig.Entity {
			public pipeType: any;
			public gfx: any;
			public steam: any;
			public _wm: ig.Config;

			public constructor(a: any, b: any, c: any, d: any);

			public init(a: any, b: any, c: any, d: any): void;
			public onKill(a: any): void;
			public initSprites(): void;
			public update(): void;
			public updateSprites(): void;
			public _cutSprite(a: any, b: any, c: any): void;
			public receiveSteam(a: any, b: any, c: any): any;
		}
		export class SteamTurnout extends ig.AnimatedEntity {
			public turnDefault: any;
			public turnAlt: any;
			public condition: ig.VarCondition;
			public points: any;
			public isOn: boolean;
			public effects: any;
			public _wm: ig.Config;

			public constructor(a: any, b: any, c: any, d: any);

			public init(a: any, b: any, c: any, d: any): void;
			public receiveSteam(a: any, b: any, c: any): any;
			public varsChanged(): void;
		}
		export class SteamOven extends ig.AnimatedEntity {
			public effects: any;
			public _wm: ig.Config;

			public constructor(a: any, b: any, c: any, d: any);

			public init(a: any, b: any, c: any, d: any): void;
			public collideWith(a: any, b: any): void;
			public startSteam(): void;
		}
		export class TeslaCoil extends ig.AnimatedEntity {
			public chargeTimer: number;
			public chargeHitExceptions: any;
			public source: boolean;
			public fast: boolean;
			public effects: any;
			public effectAlign: any;
			public _wm: ig.Config;
			public dischargeAction: any;

			public constructor(a: any, b: any, e: any, f: any);

			public init(a: any, b: any, e: any, f: any): void;
			public show(a: any): void;
			public onHideRequest(): void;
			public onEffectEvent(a: any): void;
			public onActionEndDetach(): void;
			public extendCharge(a: any): void;
			public discharge(d: any): void;
			public update(): void;
			public ballHit(a: any): any;
		}
		export class WaveTeleport extends ig.AnimatedEntity {
			public effects: any;
			public teleportTimer: number;
			public teleportTargets: any;
			public _wm: ig.Config;
			public permaRemove: boolean;
			public delayedHide: boolean;

			public constructor(a: any, b: any, d: any, g: any);

			public init(a: any, b: any, d: any, g: any): void;
			public show(a: any): void;
			public onActionEndDetach(): void;
			public onHideRequest(): void;
			public onEffectEvent(a: any): void;
			public startTeleport(): void;
			public doTeleport(): void;
			public update(): void;
			public hasBlockOnTop(): any;
			public ballHit(a: any): any;
			public isBallDestroyer(a: any, b: any, d: any): any;
		}
		export class RotateBlocker extends ig.AnimatedEntity {
			public _wm: ig.Config;
			public active: boolean;
			public currentDir: number;
			public currentAngle: number;
			public destAngle: number;
			public turnTimer: number;
			public interactIcons: any;
			public effects: any;

			public constructor(a: any, d: any, c: any, e: any);

			public init(a: any, d: any, c: any, e: any): void;
			public show(a: any): void;
			public onHideRequest(): void;
			public setActive(a: any, d: any): void;
			public onEffectEvent(a: any): void;
			public onKill(a: any): void;
			public onInteraction(): any;
			public ballHit(a: any): any;
			public turn(a: any): void;
			public update(): void;
			public updateSprites(): void;
			public varsChanged(): void;
		}
		export class BossPlatform extends ig.Entity {
			public _wm: ig.Config;
			public terrain: any;
			public maps: any;
			public startPos: any;
			public movements: any;
			public fixedHeight: number;
			public fixedState: number;
			public color: any;
			public colorAlpha: number;
			public respawnOkay: boolean;
			public gfx: ig.Image;

			public constructor(a: any, b: any, e: any, f: any);

			public init(a: any, b: any, e: any, f: any): void;
			public show(a: any): void;
			public onKill(): void;
			public update(): void;
			public nudge(a: any, b: any, e: any, f: any, g: any): void;
			public setFixedHeight(a: any): void;
			public releaseHeightFix(): void;
			public updateSprites(): void;
		}
		export class Analyzable extends ig.Entity {
			public _wm: ig.Config;
			public color: any;
			public text: any;
			public visible: any;

			public constructor(a: any, d: any, c: any, e: any);

			public init(a: any, d: any, c: any, e: any): void;
			public isQuickMenuVisible(): any;
			public getQuickMenuSettings(): any;
		}
		export class XenoDialog extends ig.Entity {
			public _wm: ig.Config;
			public dialog: any;
			public members: any;
			public running: boolean;
			public blockTimer: number;
			public padTimer: number;
			public currentTextIndex: any;
			public currentEntity: any;
			public currentText: string;
			public currentEvent: any;
			public fx: any;
			public once: boolean;
			public hasRunOnce: boolean;
			public ignoreZ: boolean;

			public constructor(a: any, b: any, c: any, d: any);

			public init(a: any, b: any, c: any, d: any): void;
			public onHideRequest(): void;
			public onKill(a: any): void;
			public update(): void;
			public startDialog(): void;
			public cancelDialog(): void;
			public getCurrentText(): any;
			public getCallbackEvent(): any;
			public onEventStart(): void;
			public onEventEnd(): void;
			public _clearFx(): void;
			public _showFx(): void;
			public _showNextMessage(): any;
			public _clearCurrentIndex(): void;
			public _isInRange(a: any, b: any): any;
			public _initMembers(): void;
		}
		export class ArenaSpawn extends ig.Entity {
			public text: string;
			public _wm: ig.Config;

			public constructor(b: any, a: any, d: any, c: any);

			public init(b: any, a: any, d: any, c: any): void;
		}
	}
	export namespace Camera {
		export class PosTarget extends ig.Class {
			public pos: any;

			public constructor(a: any);

			public init(a: any): void;
			public start(): void;
			public getPos(a: any): void;
		}
		export class EntityTarget extends ig.Class {
			public entity: any;
			public _zSlow: boolean;
			public _currentZ: number;
			public _lockZ: boolean;

			public constructor(a: any, b: any);

			public init(a: any, b: any): void;
			public start(): void;
			public getPos(a: any): void;
		}
		export class MultiEntityTarget extends ig.Class {
			public entities: any;
			public _zSlow: boolean;
			public _prevFloat: boolean;
			public _currentZ: number;
			public keepFirstTarget: boolean;

			public constructor(a: any, b: any);

			public init(a: any, b: any): void;
			public start(): void;
			public _getEntitiesZ(): any;
			public getPos(a: any): void;
		}
		export class TargetHandle extends ig.Class {
			public target: any;
			public offset: any;
			public zoomOffset: any;
			public keepZoomFocusAligned: boolean;
			public _offsetDuration: number;
			public _offsetTime: number;
			public _currentOffset: any;
			public _currentZoomOffset: any;
			public _lastOffset: any;
			public _lastZoomOffset: any;
			public zoomTimer: ig.WeightTimer;
			public oldZoom: number;
			public targetZoom: number;
			public keyspline: any;
			public lockZ: boolean;

			public constructor(a: any, b: any, c: any);

			public init(a: any, b: any, c: any): void;
			public setOffset(a: any, b: any, c: any, d: any, i: any, j: any): void;
			public setZoomFocus(): void;
			public setZoom(a: any, b: any, c: any): void;
			public update(): void;
			public getZoom(): any;
			public onEventEndDetach(): void;
			public onActionEndDetach(): void;
		}
	}
	export namespace Rumble {
		export class RumbleHandle extends ig.Class {
			public type: number;
			public name: any;
			public power: number;
			public shakeDuration: number;
			public time: number;
			public fade: boolean;
			public offset: any;
			public _target: any;
			public _start: any;
			public _temp: any;
			public _timer: number;
			public _duration: number;
			public _shakeTimer: number;
			public ignoreSlowDown: boolean;

			public constructor(b: any, a: any, d: any, c: any, e: any, f: any);

			public init(b: any, a: any, d: any, c: any, e: any, f: any): void;
			public onEntityKillDetach(): void;
			public update(): void;
			public _updatePosition(b: any): void;
			public _lerp(b: any, a: any, d: any): any;
			public stop(): void;
			public isDone(): any;
			public set(b: any, a: any, d: any, c: any): void;
		}
	}
	export namespace EFFECT_ENTRY {
		export class RUMBLE extends ig.Class {
			public rumbleType: any;
			public duration: number;
			public power: number;
			public speed: number;
			public fade: boolean;
			public _wm: ig.Config;

			public constructor(a: any, b: any);

			public init(a: any, b: any): void;
			public start(a: any): void;
		}
		export class CLEAR_RUMBLE extends ig.Class {
			public rumbleType: any;
			public duration: number;
			public power: number;
			public speed: number;
			public fade: boolean;
			public _wm: ig.Config;

			public constructor();

			public init(): void;
			public start(a: any): void;
		}
		export class WAIT extends ig.EffectStepBase {
			public _wm: ig.Config;

		}
		export class LOOP_START extends ig.EffectStepBase {
			public _wm: ig.Config;

		}
		export class LOOP_END extends ig.EffectStepBase {
			public _wm: ig.Config;

		}
		export class PLAY_ANIM extends ig.EffectStepBase {
			public _wm: ig.EffectConfig;
			public particleData: any;
			public offset: any;
			public rotOffset: any;
			public useTargetAngle: boolean;

			public constructor(a: any, b: any);

			public init(a: any, b: any): void;
			public start(a: any): void;
			public getDuration(): any;
		}
		export class PLAY_FACE_ANIM extends ig.EffectStepBase {
			public particleData: any;
			public offset: any;
			public _wm: ig.EffectConfig;

			public constructor(a: any, b: any);

			public init(a: any, b: any): void;
			public start(a: any): void;
			public getDuration(): any;
		}
		export class PLAY_ANIM_RANGE extends ig.EffectStepBase {
			public particleData: any;
			public offset: any;
			public radius: number;
			public duration: number;
			public numParticles: number;
			public useTargetAngle: boolean;
			public _wm: ig.EffectConfig;

			public constructor(a: any, b: any);

			public init(a: any, b: any): void;
			public getDuration(): any;
			public start(): any;
			public update(b: any, c: any, d: any): void;
		}
		export class PLAY_ANIMS_OVER_ENTITY extends ig.EffectStepBase {
			public particleData: any;
			public duration: number;
			public xScale: number;
			public yScale: number;
			public circular: boolean;
			public offset: any;
			public numParticles: number;
			public keySpline: number;
			public moveZDist: number;
			public _wm: ig.EffectConfig;

			public constructor(a: any, b: any);

			public init(a: any, b: any): void;
			public start(a: any): any;
			public getDuration(): any;
			public update(b: any, d: any, f: any, g: any): void;
		}
		export class DEBRIS_OVER_ENTITY extends ig.EffectStepBase {
			public particleData: any;
			public xScale: number;
			public yScale: number;
			public circular: boolean;
			public offset: any;
			public numParticles: number;
			public debrisSize: number;
			public _wm: ig.EffectConfig;

			public constructor(a: any, b: any);

			public init(a: any, b: any): void;
			public start(a: any): void;
			public getDuration(): any;
		}
		export class PLAY_SOUND extends ig.EffectStepBase {
			public sound: ig.Sound;
			public global: boolean;
			public loop: boolean;
			public attachHandle: boolean;
			public settings: any;
			public _wm: ig.Config;

			public constructor(a: any, b: any);

			public init(a: any, b: any): void;
			public clearCached(): void;
			public start(a: any): void;
		}
		export class PLAY_RANDOM_SOUND extends ig.EffectStepBase {
			public sounds: any;
			public global: boolean;
			public loop: boolean;
			public settings: any;
			public _wm: ig.Config;

			public constructor(a: any, b: any);

			public init(a: any, b: any): void;
			public clearCached(): void;
			public start(a: any): void;
		}
		export class STOP_SOUNDS extends ig.EffectStepBase {
			public _wm: ig.Config;

			public constructor();

			public init(): void;
			public start(a: any): void;
		}
		export class PARTICLE_BOX extends ig.EffectStepBase {
			public particleData: any;
			public padding: any;
			public boxSide: number;
			public numParticles: number;
			public flipRightParticles: boolean;
			public minSpeed: number;
			public maxSpeed: number;
			public collision: boolean;
			public random: number;
			public moveZ: number;
			public moveZVariance: number;
			public _wm: ig.EffectConfig;

			public constructor(a: any, b: any);

			public init(a: any, b: any): void;
			public getDuration(): any;
			public start(a: any): void;
			public spawnBoxLine(f: any, h: any, i: any): void;
		}
		export class FLASH_COLOR extends ig.EffectStepBase {
			public color: any;
			public alpha: number;
			public keepDuration: number;
			public duration: number;
			public _wm: ig.Config;

			public constructor(b: any, a: any);

			public init(b: any, a: any): void;
			public start(b: any): any;
			public getDuration(): any;
			public update(b: any, a: any, d: any, c: any): void;
			public finish(b: any, a: any): void;
		}
		export class BLINK_COLOR extends ig.EffectStepBase {
			public color: any;
			public maxAlpha: number;
			public minAlpha: number;
			public blinkDuration: number;
			public blinkCount: number;
			public _wm: ig.Config;

			public constructor(b: any, a: any);

			public init(b: any, a: any): void;
			public start(b: any): any;
			public getDuration(): any;
			public update(b: any, a: any, d: any, c: any): void;
			public cancel(b: any, a: any): any;
			public finish(b: any, a: any): void;
		}
		export class FADE_COLOR extends ig.EffectStepBase {
			public color: any;
			public alpha: number;
			public fadeIn: number;
			public fadeOut: number;
			public duration: number;
			public _wm: ig.Config;

			public constructor(b: any, a: any);

			public init(b: any, a: any): void;
			public start(b: any): any;
			public getDuration(): any;
			public update(b: any, a: any, d: any, c: any): void;
			public cancel(b: any, a: any): any;
			public finish(b: any, a: any): void;
		}
		export class CHANGE_ALPHA extends ig.EffectStepBase {
			public alpha: number;
			public duration: number;
			public _wm: ig.Config;

			public constructor(b: any, a: any);

			public init(b: any, a: any): void;
			public getDuration(): any;
			public start(b: any): any;
			public update(b: any, a: any, d: any, c: any): void;
			public finish(b: any): void;
		}
		export class CHANGE_SCALE extends ig.EffectStepBase {
			public scaleX: number;
			public scaleY: number;
			public duration: number;
			public spline: any;
			public _wm: ig.Config;

			public constructor(b: any, a: any);

			public init(b: any, a: any): void;
			public getDuration(): any;
			public start(b: any): any;
			public update(b: any, a: any, d: any, c: any): void;
			public finish(b: any): void;
		}
		export class OFFSET_PARTICLE_CIRCLE extends ig.EffectStepBase {
			public moveDist: number;
			public moveVariance: number;
			public keySpline: any;
			public moveRotate: number;
			public rotateWithTime: boolean;
			public inverse: boolean;
			public normalMoveDist: number;
			public _wm: ig.EffectConfig;

			public constructor(a: any, b: any);

			public init(a: any, b: any): void;
			public spawn(a: any, b: any, c: any, d: any): void;
		}
		export class PARTICLE_CIRCLE extends ig.EffectStepBase {
			public minSpeed: number;
			public maxSpeed: number;
			public _wm: ig.EffectConfig;

			public constructor(a: any, b: any);

			public init(a: any, b: any): void;
			public spawnVel(a: any, b: any, c: any): void;
		}
		export class DEBRIS_CIRCLE extends ig.EffectStepBase {
			public minSpeed: number;
			public maxSpeed: number;
			public minZSpeed: number;
			public maxZSpeed: number;
			public zGravityFactor: number;
			public zBounciness: any;
			public _wm: ig.EffectConfig;

			public constructor(a: any, b: any);

			public init(a: any, b: any): void;
			public spawnVel(a: any, b: any, c: any): void;
		}
		export class SHOOT_HOMING_PARTICLE extends ig.EffectStepBase {
			public _wm: ig.EffectConfig;
			public particleData: any;

			public constructor(a: any, b: any);

			public init(a: any, b: any): void;
			public start(a: any): any;
			public _spawnParticles(a: any, d: any, c: any): void;
			public update(a: any, b: any, c: any): void;
			public getDuration(): any;
		}
		export class LIGHT extends ig.EffectStepBase {
			public size: any;
			public fadeIn: number;
			public fadeOut: number;
			public duration: number;
			public maxAlpha: number;
			public glow: any;
			public _wm: ig.Config;

			public constructor(a: any, b: any);

			public init(a: any, b: any): void;
			public start(a: any): void;
			public getDuration(): any;
		}
		export class CLEAR_LIGHT extends ig.EffectStepBase {
			public _wm: ig.Config;

			public constructor();

			public init(): void;
			public start(a: any): void;
			public getDuration(): any;
		}
		export class DARKNESS extends ig.EffectStepBase {
			public fadeIn: number;
			public fadeOut: number;
			public duration: number;
			public intensity: number;
			public _wm: ig.Config;

			public constructor(a: any, b: any);

			public init(a: any, b: any): void;
			public start(a: any): void;
			public getDuration(): any;
		}
		export class CLEAR_DARKNESS extends ig.EffectStepBase {
			public _wm: ig.Config;

			public constructor();

			public init(): void;
			public start(b: any): void;
			public getDuration(): any;
		}
		export class SCREEN_FLASH extends ig.EffectStepBase {
			public color: any;
			public fadeIn: number;
			public fadeOut: number;
			public duration: number;
			public intensity: number;
			public _wm: ig.Config;

			public constructor(a: any, b: any);

			public init(a: any, b: any): void;
			public start(a: any): void;
			public getDuration(): any;
		}
		export class COPY_SPRITE extends ig.EffectStepBase {
			public particleData: any;
			public color: any;
			public colorAlpha: number;
			public offset: any;
			public _wm: ig.EffectConfig;

			public constructor(b: any, a: any);

			public init(b: any, a: any): void;
			public start(b: any): void;
		}
		export class LASER_SPRITE extends ig.EffectStepBase {
			public particleData: any;
			public _wm: ig.EffectConfig;

			public constructor(b: any, a: any);

			public init(b: any, a: any): void;
			public clearCached(): void;
			public start(b: any): void;
		}
		export class PARTICLE_RHOMBUS extends ig.EffectStepBase {
			public particleData: any;
			public duration: number;
			public numParticles: number;
			public scale: number;
			public radiusSub: number;
			public offset: any;
			public moveDistance: number;
			public moveVariance: number;
			public randomDirFlip: boolean;
			public keySpline: any;
			public alongZ: any;
			public zRange: number;
			public _wm: ig.EffectConfig;

			public constructor(a: any, b: any);

			public init(a: any, b: any): void;
			public start(a: any): any;
			public getDuration(): any;
			public update(d: any, c: any, e: any, f: any): void;
		}
		export class MOVE_OFFSET extends ig.EffectStepBase {
			public _wm: ig.Config;

			public constructor(a: any, b: any);

			public init(a: any, b: any): void;
			public getDuration(): any;
			public start(a: any): any;
			public update(a: any, d: any, f: any): void;
			public finish(): void;
			public setEntityOffset(a: any, b: any, d: any): void;
		}
		export class WIPE extends ig.EffectStepBase {
			public dir: number;
			public startValue: number;
			public endValue: number;
			public duration: number;
			public _wm: ig.Config;

			public constructor(a: any, b: any);

			public init(a: any, b: any): void;
			public getDuration(): any;
			public start(a: any): any;
			public update(a: any, b: any, d: any, g: any): void;
			public finish(a: any): void;
			public setEntityClipping(a: any, b: any, d: any, g: any, h: any, i: any, j: any): void;
		}
		export class WIPE_PARTICLES extends ig.EffectStepBase {
			public particleData: any;
			public dir: number;
			public startValue: number;
			public endValue: number;
			public duration: number;
			public numParticles: number;
			public moveOffset: any;
			public keySpline: any;
			public inverse: boolean;
			public _wm: ig.EffectConfig;

			public constructor(a: any, b: any);

			public init(a: any, b: any): void;
			public start(b: any): any;
			public getDuration(): any;
			public update(a: any, e: any, f: any, g: any): void;
		}
	}
	export namespace GUI {
		export class Parallax extends ig.SequenceGui {
			public parallax: ig.Parallax;
			public keepOnEnd: boolean;
			public _wm: ig.Config;
			public transitions: any;

			public constructor(b: any, a: any);

			public init(b: any, a: any): void;
			public clearCached(): void;
			public onLoadableComplete(): void;
			public onAttach(): void;
			public start(b: any): void;
			public end(): void;
		}
		export class IntroScreen extends ig.SequenceGui {
			public gfx: any;
			public gui: any;
			public timeLine: any;
			public transitions: any;
			public screenInteract: sc.ScreenInteractEntry;

			public constructor(b: any);

			public init(b: any): void;
			public onInteraction(): void;
			public updateDrawables(b: any): void;
			public start(): void;
			public end(): void;
		}
		export class TitleLogo extends ig.SequenceGui {
			public gfx: any;
			public gui: any;
			public timeLine: any;

			public constructor(b: any);

			public init(b: any): void;
		}
		export class PauseScreenLabel extends ig.GuiElementBase {
			public timer: number;
			public timerTime: number;
			public gfx: ig.Image;
			public transitions: any;

			public constructor();

			public init(): void;
			public update(): void;
			public updateDrawables(b: any): void;
		}
		export class CreditsScreen extends ig.GuiElementBase {
			public _wm: ig.Config;
			public credits: any;
			public timeLine: any;
			public timer: number;
			public timeLineIndex: number;
			public done: boolean;
			public startCreditsUpdate: boolean;
			public variable: any;
			public transitions: any;
			public logoGui: any;

			public constructor(b: any);

			public init(b: any): void;
			public clearCached(): void;
			public onAttach(): void;
			public update(): void;
			public _logoDone(): void;
			public _setVar(): void;
		}
		export class GamepadBox extends ig.GuiElementBase {
			public transitions: any;
			public gfx: ig.Image;
			public infoButton: sc.ButtonGui;
			public text: sc.TextGui;
			public gamepadActive: boolean;

			public constructor(b: any, a: any, d: any);

			public init(b: any, a: any, d: any): void;
			public varsChanged(): void;
			public updateDrawables(b: any): void;
		}
		export class CounterHud extends sc.RightHudBoxGui {
			public maxCount: number;
			public currentCount: number;
			public variable: any;
			public zIndex: number;
			public _wm: ig.Config;
			public maxNumberGui: sc.MaxNumberGui;

			public constructor(b: any);

			public init(b: any): void;
			public varsChanged(): void;
			public updateNumber(): void;
			public remove(): void;
			public modelChanged(b: any, a: any): void;
			public onSpawn(): void;
		}
		export class ScoreHud extends sc.RightHudBoxGui {
			public currentCount: number;
			public variable: any;
			public zIndex: number;
			public _wm: ig.Config;
			public numberGui: sc.NumberGui;
			public _cutscene: boolean;

			public constructor(b: any);

			public init(b: any): void;
			public varsChanged(): void;
			public remove(): void;
			public modelChanged(b: any, a: any): void;
			public onSpawn(): void;
		}
		export class Information extends sc.SideBoxGui {
			public text: ig.LangLabel;
			public altText: ig.LangLabel;
			public altCondition: ig.VarCondition;
			public _wm: ig.Config;
			public useAltText: boolean;
			public textGui: sc.TextGui;
			public hidden: boolean;

			public constructor(b: any);

			public init(b: any): void;
			public onAttach(): void;
			public onDetach(): void;
			public updateText(): void;
			public modelChanged(b: any, a: any): void;
			public varsChanged(): void;
			public remove(): void;
		}
		export class BarWidget extends sc.BigGenericBar {
			public transitions: any;
			public _wm: ig.Config;
			public labelGui: sc.TextGui;
			public variable: any;
			public barType: any;
			public prevValue: any;
			public hideWhite: boolean;

			public constructor(d: any);

			public init(d: any): void;
			public onAttach(): void;
			public onDetach(): void;
			public modelChanged(a: any, b: any): void;
			public updateValue(a: any, c: any): void;
			public varsChanged(): void;
			public remove(): void;
		}
		export class LevelUpHud extends ig.SimpleGui {
			public transitions: any;
			public screenInteract: sc.ScreenInteractEntry;
			public currentEntry: number;
			public timer: number;
			public sideStatGui: sc.LevelUpSideStatsGui;
			public lineBox: sc.LineBoxGui;

			public constructor(a: any);

			public init(a: any): void;
			public update(): void;
			public onInteraction(): void;
			public remove(): void;
		}
		export class Social extends ig.SimpleGui {
			public transitions: any;
			public _wm: ig.Config;

			public constructor();

			public init(): void;
			public remove(): void;
		}
		export class TimerGui extends sc.SlickBoxRawGui {
			public pos: any;
			public size: any;
			public pivot: any;
			public align: any;
			public _wm: ig.Config;
			public transitions: any;
			public gfx: ig.Image;
			public centiseconds: sc.NumberGui;
			public seconds: sc.NumberGui;
			public minutes: sc.NumberGui;
			public time: number;
			public running: boolean;
			public zIndex: number;

			public constructor(b: any);

			public init(b: any): void;
			public update(): void;
			public start(): void;
			public stop(): void;
			public remove(): void;
		}
		export class SergeyMode extends ig.GuiElementBase {
			public _wm: ig.Config;
			public transitions: any;
			public cornerImage: ig.Image;
			public patternSheet: ig.ImagePatternSheet;
			public startSound: ig.Sound;
			public endSound: ig.Sound;
			public scroll: number;

			public constructor();

			public init(): void;
			public clearCached(): void;
			public onAttach(): void;
			public update(): void;
			public updateDrawables(b: any): void;
			public remove(): void;
		}
		export class QuestSolvedDialog extends sc.QuestDialogWrapper {
			public constructor(a: any);

			public init(a: any): void;
			public onCollectRewards(): void;
		}
		export class ARBox extends ig.GuiElementBase {
			public transitions: any;
			public gfx: ig.Image;
			public target: any;
			public text: any;
			public timer: number;
			public maxTime: number;
			public prevMove: any;
			public delta: any;
			public arrowX: number;
			public mode: any;
			public color: any;
			public finished: boolean;
			public hideOutsideOfScreen: boolean;
			public tracker: any;

			public constructor(b: any, a: any, d: any, c: any, e: any);

			public init(b: any, a: any, d: any, c: any, e: any): void;
			public setTracker(b: any): void;
			public update(): void;
			public updateDrawables(b: any): void;
			public remove(): void;
			public isFinished(): any;
			public onActionEndDetach(): void;
			public onEntityKillDetach(): void;
			public _getCurrentNumber(): any;
			public _updatePos(b: any): void;
		}
		export class StatusBar extends ig.GuiElementBase {
			public transitions: any;
			public gfx: ig.Image;
			public barIconTiles: ig.TileSheet;
			public target: any;
			public replaceTarget: any;
			public currentHp: number;
			public targetHp: number;
			public timer: number;
			public largeTimer: number;
			public subHpHandler: any;
			public subHpType: number;
			public statusEntries: any;
			public statusDisplayOrder: any;

			public constructor(a: any);

			public init(a: any): void;
			public showHpBar(): any;
			public initWithParams(): void;
			public updateSubHpHandler(): void;
			public modelChanged(a: any, b: any, e: any): void;
			public initStatusEntries(): void;
			public _shiftFrontStatusDisplayOrder(a: any, b: any): void;
			public setStatusEntry(a: any, b: any): void;
			public updateStatusEntry(a: any, b: any): void;
			public setReplaceTarget(a: any): void;
			public setStatusEntryStick(a: any, b: any): void;
			public clearStatusEntry(a: any): void;
			public clearAllStatusEntries(): void;
			public setHp(a: any, b: any): void;
			public update(): void;
			public _updateStatusEntry(a: any): any;
			public updateDrawables(a: any): void;
			public _drawHpBar(a: any): void;
			public drawStatusEntry(b: any, c: any, e: any, f: any): void;
			public remove(): void;
			public forceRemove(): void;
		}
		export class Interact extends ig.GuiElementBase {
			public iconState: number;
			public transitions: any;
			public gfx: ig.Image;
			public target: any;
			public offset: any;
			public icon: any;
			public timer: number;
			public offsetTimer: number;
			public overlayIcon: sc.InteractOverlayIcon;
			public subGui: any;

			public constructor(a: any, b: any);

			public init(a: any, b: any): void;
			public setIconState(a: any): void;
			public setSubGui(a: any): void;
			public update(): void;
			public remove(): void;
			public _updatePos(): void;
		}
		export class CreditSection extends ig.GuiElementBase {
			public transitions: any;
			public credits: any;
			public imageContent: ig.GuiElementBase;
			public content: ig.GuiElementBase;
			public contentWidth: number;
			public finished: boolean;
			public isOffscreen: boolean;
			public triggers: any;

			public constructor(b: any);

			public init(b: any): void;
			public update(): void;
			public onAttach(): void;
			public onDetach(): void;
			public varsChanged(): void;
			public remove(): void;
			public createSection(): void;
			public createImage(b: any, a: any): void;
			public createHeader(b: any, a: any, d: any): void;
			public createColumnGuis(b: any, a: any): any;
			public createNames(b: any, a: any, d: any, c: any): void;
			public createTrigger(b: any, a: any): void;
			public getAlignPos(b: any): any;
		}
	}
	export namespace MessageOverlayGui {
		export class BlackBar extends ig.GuiElementBase {
			public transitions: any;

			public constructor();

			public init(): void;
			public updateDrawables(a: any): void;
		}
		export class BottomShadow extends ig.GuiElementBase {
			public gfx: ig.Image;
			public transitions: any;

			public constructor();

			public init(): void;
			public updateDrawables(a: any): void;
		}
		export class Entry extends ig.GuiElementBase {
			public name: any;
			public isEntry: boolean;
			public lookRight: boolean;
			public order: number;
			public beepSound: ig.Sound;
			public transitions: any;

			public constructor(a: any, b: any, c: any, e: any, f: any);

			public init(a: any, b: any, c: any, e: any, f: any): void;
			public addMessage(a: any, d: any): any;
			public hasMessages(): any;
			public clearMessages(): void;
			public setDisplayNameVisible(a: any): void;
			public setDisplayName(a: any): void;
			public setLookRight(a: any): void;
			public remove(): void;
		}
		export class Portrait extends ig.GuiElementBase {
			public name: any;
			public charExpression: any;
			public lookRight: boolean;
			public order: number;
			public timer: number;
			public displayName: any;
			public transitions: any;

			public constructor(a: any, b: any, c: any, e: any);

			public init(a: any, b: any, c: any, e: any): void;
			public setLookRight(a: any): void;
			public setExpression(a: any, b: any): void;
			public remove(): void;
			public update(): void;
			public updateDrawables(a: any): void;
		}
		export class DisplayName extends ig.GuiElementBase {
			public ninepatch: ig.NinePatch;
			public transitions: any;
			public text: any;

			public constructor(a: any);

			public init(a: any): void;
			public updateDrawables(a: any): void;
			public setText(a: any): void;
		}
	}
	export class Config extends ig.Class {
		public _data: any;

		public constructor(a: any);

		public init(a: any): void;
		public copy(): any;
	}
	export class Worker extends ig.Class {
		public lastId: number;
		public runningTasks: any;
		public worker: Worker;
		public key: any;

		public constructor(a: any, b: any);

		public init(a: any, b: any): void;
		public doTask(a: any, b: any, c: any): void;
		public _onMessage(a: any): void;
	}
	export class Cacheable extends ig.Class {
		public cacheType: string;
		public cacheKey: any;
		public referenceCount: number;
		public emptyMapChangeCount: number;

		public constructor();

		public staticInstantiate(): any;
		public init(_usedInChild0: any, _usedInChild1: any, _usedInChild2: any, _usedInChild3: any, _usedInChild4: any, _usedInChild5: any, _usedInChild6: any, _usedInChild7: any): void;
		public increaseRef(): void;
		public decreaseRef(): void;
		public getCacheKey(a: any, _usedInChild1: any, _usedInChild2: any, _usedInChild3: any, _usedInChild4: any, _usedInChild5: any, _usedInChild6: any, _usedInChild7: any): any;
		public onCacheCleared(): void;
	}
	export class Loadable extends ig.Cacheable {
		public loaded: boolean;
		public failed: boolean;
		public path: string;
		public tolerateMissingResources: boolean;
		public loadListeners: any;
		public loadCollectors: any;

		public constructor(a: any);

		public init(a: any, _usedInChild1: any, _usedInChild2: any, _usedInChild3: any, _usedInChild4: any): void;
		public onInstanceReused(): void;
		public getCacheKey(a: any, _usedInChild1: any, _usedInChild2: any, _usedInChild3: any, _usedInChild4: any, _usedInChild5: any, _usedInChild6: any, _usedInChild7: any): any;
		public load(a: any): void;
		public loadingFinished(a: any): void;
		public addLoadListener(a: any): void;
	}
	export class JsonLoadable extends ig.Loadable {
		public constructor(a: any);

		public init(a: any): void;
		public loadInternal(): void;
		public onJsonLoaded(a: any): void;
		public onJsonError(): void;
	}
	export class SingleLoadable extends ig.Class {
		public loaded: boolean;
		public failed: boolean;
		public path: string;

		public constructor();

		public staticInstantiate(): any;
		public init(): void;
		public load(a: any): void;
		public loadingFinished(a: any): void;
	}
	export class Loader extends ig.Class {
		public resources: any;
		public prevResourcesCnt: number;
		public status: number;
		public done: boolean;
		public lastPath: string;
		public gameObjectCreated: boolean;
		public _unloaded: any;
		public _drawStatus: number;
		public _intervalId: number;
		public _loadCallbackBound: any;
		public _loadIndex: number;
		public _nextStepFunction: any;

		public constructor(a: any);

		public init(a: any): void;
		public load(): void;
		public loadResource(a: any): void;
		public end(): void;
		public onEnd(): void;
		public finalize(): any;
		public draw(): void;
		public _loadCallback(a: any, b: any, c: any): void;
	}
	export class LoadCollector extends ig.Class {
		public listener: any;
		public resources: any;

		public constructor(a: any);

		public init(a: any): void;
		public finalizeLoadableFetching(): void;
		public addResource(a: any): void;
		public setResourceLoaded(a: any): void;
		public done(): void;
	}
	export class JsonTemplate extends ig.Class {
		public templates: any;

		public constructor();

		public init(): void;
		public register(a: any, b: any): void;
		public resolve(b: any): any;
	}
	export class Image extends ig.Loadable {
		public cacheType: string;
		public data: Image;
		public filtered: any;
		public width: number;
		public height: number;
		public toBeFiltered: any;
		public additionalCallbacks: any;

		public constructor(a: any);

		public init(a: any, _usedInChild1: any, _usedInChild2: any, _usedInChild3: any, _usedInChild4: any): void;
		public loadInternal(): void;
		public onCacheCleared(): void;
		public addCallback(a: any): void;
		public addFiltered(a: any, b: any, c: any): void;
		public hasFiltered(a: any): any;
		public _createFiltered(a: any, b: any, c: any): void;
		public reload(): void;
		public onload(_usedInChild0: any): void;
		public onresized(a: any): void;
		public onfiltered(a: any): void;
		public onerror(): void;
		public getTileSrc(a: any, b: any, c: any, d: any, e: any, f: any, g: any): any;
		public resize(a: any): void;
		public draw(a: any, b: any, c: any, d: any, e: any, f: any, g: any, h: any, i: any, j: any, k: any, m: any): void;
		public drawCheck(a: any, b: any, c: any, d: any, e: any, f: any, g: any, h: any, i: any, j: any, k: any): void;
		public drawTileCheck(a: any, b: any, c: any, d: any, e: any, f: any, g: any, h: any, i: any, j: any, k: any, m: any): void;
		public drawTile(a: any, b: any, c: any, d: any, e: any, f: any, g: any, h: any, i: any, j: any, k: any): void;
		public createPattern(a: any, b: any, c: any, d: any, e: any): any;
		public getTileModFragment(a: any, b: any, c: any, d: any): any;
		public getMaxTileIdx(a: any, b: any): any;
	}
	export class ImageCanvasWrapper extends ig.Class {
		public data: any;
		public width: number;
		public height: number;
		public loaded: boolean;
		public filtered: any;
		public draw: any;

		public constructor(a: any);

		public init(a: any): void;
	}
	export class ImagePattern extends ig.Class {
		public image1: any;
		public image2: any;
		public pattern: any;
		public sourceImage: any;
		public optMode: number;
		public sourceX: number;
		public sourceY: number;
		public width: number;
		public height: number;
		public totalWidth: number;
		public totalHeight: number;
		public usePatternDraw: boolean;

		public constructor(a: any, b: any, c: any, d: any, e: any, f: any);

		public init(a: any, b: any, c: any, d: any, e: any, f: any): void;
		public initBuffer(): void;
		public clearCached(): void;
		public draw(a: any, b: any, c: any, d: any, e: any, f: any, g: any): void;
	}
	export class SimpleColor extends ig.Class {
		public color: any;

		public constructor(a: any);

		public init(a: any): void;
		public draw(a: any, b: any, c: any, d: any): void;
	}
	export class ComplexLineCircleBox extends ig.Class {
		public color: any;
		public circleColor: any;
		public target: any;
		public radius: number;

		public constructor(a: any, b: any, c: any, d: any, e: any);

		public init(a: any, b: any, c: any, d: any, e: any): void;
		public draw(a: any, b: any, c: any, d: any): void;
	}
	export class SimpleCircle extends ig.Class {
		public color: any;
		public borderColor: any;
		public radius: number;

		public constructor(a: any, b: any, c: any);

		public init(a: any, b: any, c: any): void;
		public draw(a: any, b: any, c: any, d: any): void;
	}
	export class TransitionColor extends ig.Class {
		public colorA: any;
		public colorB: any;
		public colorBWeight: number;

		public constructor(a: any, b: any, c: any);

		public init(a: any, b: any, c: any): void;
		public setColorBWeight(a: any): void;
		public draw(a: any, b: any, c: any, d: any): void;
	}
	export class DoubleColor extends ig.Class {
		public color1: any;
		public color2: any;

		public constructor(a: any, b: any);

		public init(a: any, b: any): void;
	}
	export class ImagePatternSheet extends ig.Cacheable {
		public cacheType: string;
		public image: ig.Image;
		public patternTileWidth: number;
		public patternTileHeight: number;
		public offX: number;
		public offY: number;
		public xCount: number;
		public yCount: number;
		public optimization: any;
		public patterns: any;

		public constructor(a: any, b: any, c: any, d: any, e: any, f: any, g: any, h: any);

		public init(a: any, b: any, c: any, d: any, e: any, f: any, g: any, h: any): void;
		public getCacheKey(a: any, b: any, c: any, d: any, e: any, f: any, g: any, h: any): any;
		public onCacheCleared(): void;
		public onImageLoaded(): void;
		public getPattern(a: any): any;
	}
	export class ImageModFragment extends ig.Class {
		public image: number;
		public sourceX: number;
		public sourceY: number;
		public width: number;
		public height: number;
		public resX: any;
		public resY: any;

		public constructor(a: any, b: any, c: any, d: any, e: any, f: any);

		public init(a: any, b: any, c: any, d: any, e: any, f: any): void;
		public prepare(a: any, b: any): void;
		public draw(a: any, b: any, c: any, d: any, e: any, f: any, g: any, h: any): void;
	}
	export class ImageAtlas extends ig.Class {
		public buffers: any;
		public debugActive: boolean;
		public lines: any;
		public scale: number;

		public constructor();

		public init(): void;
		public getFragment(a: any, b: any, c: any): any;
		public fillFragments(): void;
		public defragment(a: any): void;
		public release(a: any): any;
		public _getFragment(a: any, b: any, c: any): any;
		public _createLine(a: any): any;
		public _createBuffer(): any;
		public _splitEntry(a: any, b: any, c: any): any;
	}
	export class ImageAtlasFragment extends ig.Class {
		public buffer: any;
		public offX: number;
		public offY: number;
		public width: number;
		public height: number;
		public fillCallback: any;
		public filled: boolean;
		public lineIdx: number;

		public constructor(a: any, b: any, c: any, d: any, e: any, f: any, g: any);

		public init(a: any, b: any, c: any, d: any, e: any, f: any, g: any): void;
		public invalidate(): void;
		public release(): void;
		public draw(a: any, b: any, c: any, d: any, e: any, f: any, g: any, h: any): void;
		public _fill(): void;
	}
	export class ScreenBuffer extends ig.Class {
		public width: number;
		public height: number;
		public buffer: any;
		public scroll: any;
		public off: any;
		public shift: any;
		public redrawFull: boolean;
		public ownerMap: any;

		public constructor(a: any);

		public init(a: any): void;
		public clearCached(): void;
		public resetBuffer(): void;
		public fetchBuffer(): void;
		public update(a: any): void;
		public draw(a: any, b: any, c: any, d: any, e: any, f: any): void;
		public setGridTile(a: any, b: any, c: any, d: any): void;
		public _redrawFull(a: any): void;
		public _redrawShift(a: any): void;
		public _splitDraw(a: any, b: any, c: any, d: any, e: any, f: any, g: any): void;
	}
	export class Font extends ig.Image {
		public cacheType: string;
		public widthMap: any;
		public indicesX: any;
		public indicesY: any;
		public firstChar: number;
		public charHeight: number;
		public sizeIndex: number;
		public color: any;

		public constructor(a: any, b: any, c: any, d: any, e: any);

		public init(a: any, b: any, c: any, d: any, e: any): void;
		public onload(a: any): void;
		public widthForString(a: any): any;
		public draw(): void;
		public getSystemFont(a: any): any;
		public _drawChar(a: any, b: any, c: any, d: any): any;
		public _drawSystemChar(a: any, b: any, c: any, d: any): any;
		public getSystemCharWidth(a: any): any;
		public _loadMetrics(a: any): void;
	}
	export class MultiFont extends ig.Font {
		public cacheType: string;
		public fontStyles: any;
		public iconSets: any;
		public mapping: any;
		public indexMapping: any;
		public iconChangeListeners: any;
		public colorSets: any;

		public constructor(a: any, b: any, c: any, d: any);

		public init(a: any, b: any, c: any, d: any): void;
		public pushIconSet(b: any): void;
		public setIconSet(b: any, c: any): void;
		public addIconChangeListener(a: any): void;
		public removeIconChangeListener(a: any): void;
		public callChangeListeners(): void;
		public setMapping(b: any): void;
		public pushColorSet(a: any, b: any, c: any): void;
		public _getActualIndex(a: any): any;
		public getLineWidth(a: any, b: any, c: any): any;
		public getTextDimensions(a: any, b: any): any;
		public wrapText(a: any, b: any, c: any, d: any, e: any): any;
		public drawLines(a: any, b: any, c: any, d: any, e: any, f: any): void;
		public getCharWidth(a: any): any;
	}
	export class TextBlock extends ig.Class {
		public font: any;
		public maxWidth: number;
		public parsedText: string;
		public commands: any;
		public speed: number;
		public padding: number;
		public align: any;
		public size: any;
		public currentLine: number;
		public currentIndex: number;
		public currentCmd: number;
		public currentSpeed: number;
		public timer: number;
		public onFinish: any;
		public prerendered: boolean;
		public drawCallback: any;

		public constructor(a: any, b: any, c: any);

		public init(a: any, b: any, c: any): void;
		public setText(a: any): void;
		public setDrawCallback(a: any): void;
		public prerender(): void;
		public clearPrerendered(): void;
		public reset(): void;
		public getState(): any;
		public setState(a: any): void;
		public setSpeed(a: any): void;
		public finish(): void;
		public isFinished(): any;
		public _updateCommands(): void;
		public update(): void;
		public draw(a: any, b: any): void;
		public onIconChange(): void;
	}
	export class WebAudio extends ig.Class {
		public context: any;
		public timeOffset: number;

		public constructor();

		public init(): void;
		public getDestination(): any;
		public getSampleRate(): any;
		public decodeAudioData(a: any, b: any, c: any): void;
		public getCurrentTime(): any;
		public getCurrentTimeRaw(): any;
		public createGain(): any;
		public createDynamicCompressor(): any;
		public createPanner(): any;
		public createBufferGain(a: any, b: any, c: any): any;
		public _createContext(): any;
	}
	export class SoundManager extends ig.Class {
		public clips: any;
		public volume: number;
		public format: any;
		public context: ig.WebAudio;
		public buffers: any;
		public volumes: any;
		public namedSounds: any;
		public soundHandles: any;
		public soundStack: any;
		public soundGroups: any;
		public requestedGroups: any;
		public tracksToUpdate: any;
		public hasWebAudio: boolean;

		public constructor();

		public init(): void;
		public reset(): void;
		public update(): void;
		public playSoundHandle(a: any, b: any): void;
		public stopSoundHandle(a: any): void;
		public pushPaused(a: any): void;
		public popPaused(): void;
		public _getGroup(a: any): any;
		public _solveGroupRequests(a: any): any;
		public requestPlaySoundHandle(a: any, b: any): void;
		public getSampleRate(): any;
		public _createWebAudioContext(): void;
		public connectSound(a: any): void;
		public disconnectSound(a: any): void;
		public connectMusic(a: any): void;
		public disconnectMusic(a: any): void;
		public setSoundVolume(a: any): void;
		public setMusicVolume(a: any): void;
		public setMasterVolume(a: any): void;
		public onWindowFocusLost(): void;
		public onWindowFocusGained(): void;
		public addNamedSound(a: any, b: any): void;
		public getNamedSounds(a: any): any;
		public stopNamedSounds(a: any): void;
		public getBuffer(a: any): any;
		public loadWebAudio(c: any, d: any): any;
		public registerTrack(a: any): void;
		public unregisterTrack(a: any): void;
		public _updateTracks(): void;
		public load(c: any, d: any, e: any): void;
		public _increaseChannels(a: any, b: any, c: any, d: any): void;
		public get(a: any): any;
		public getChannel(a: any, b: any): any;
		public freeMultiAudio(a: any): void;
		public freeWebAudioBuffer(a: any): void;
	}
	export class MultiAudio extends ig.Loadable {
		public cacheType: string;
		public channelCount: number;

		public constructor(a: any, b: any);

		public init(a: any, b: any): void;
		public get(): any;
		public getChannel(a: any): any;
		public onCacheCleared(): void;
		public loadInternal(): void;
		public onload(a: any, b: any, c: any): void;
	}
	export class WebAudioBuffer extends ig.Loadable {
		public cacheType: string;

		public constructor(a: any);

		public init(a: any): void;
		public get(): any;
		public onCacheCleared(): void;
		public loadInternal(): void;
		public onload(a: any, b: any): void;
	}
	export class Music extends ig.Class {
		public inBetweenTrack: any;
		public currentTrack: any;
		public trackStack: any;
		public paused: boolean;
		public _volume: number;
		public _interval: number;
		public _timer: ig.Timer;
		public _fadeInTime: number;
		public _nextTrackReset: boolean;
		public _transitionType: number;

		public constructor();

		public init(): void;
		public play(a: any, b: any, c: any, d: any, e: any): void;
		public push(a: any, b: any, c: any, d: any, e: any): void;
		public pop(a: any, b: any): void;
		public inbetween(a: any, b: any, c: any, d: any): void;
		public pause(a: any): void;
		public resume(a: any): void;
		public getStackSize(): any;
		public isTrackPlaying(a: any, b: any): any;
		public getVolume(): any;
		public setVolume(a: any): void;
		public _checkCurrentTrackEquality(): any;
		public _getTopTrack(): any;
		public _pushNextTrack(a: any, b: any, c: any): void;
		public _setFadeOut(a: any, b: any): void;
		public _startInterval(): void;
		public _intervalStep(): void;
		public _playTopSong(): void;
		public _endFadeIn(): void;
		public _trackEnded(): void;
		public onWindowFocusLost(): void;
		public onWindowFocusGained(): void;
	}
	export class TrackDefault extends ig.Cacheable {
		public cacheType: string;
		public multiAudio: ig.MultiAudio;
		public introMultiAudio: any;
		public loopEnd: number;
		public introEnd: number;
		public endCallback: any;
		public baseVolume: number;
		public sound: any;
		public swapSound: any;
		public introSound: any;
		public introPlayed: boolean;
		public loop: boolean;

		public constructor(a: any, b: any, c: any, d: any, e: any);

		public init(a: any, b: any, c: any, d: any, e: any): void;
		public getCacheKey(a: any, b: any, c: any, d: any): any;
		public onCacheCleared(): void;
		public setVolume(a: any): void;
		public getVolume(): any;
		public reset(): void;
		public play(): void;
		public pause(): void;
		public _initSounds(): void;
		public _initSound(a: any): void;
		public _endedCallback(a: any): void;
		public _timeUpdateCallback(a: any): void;
		public _loopTrack(): void;
		public _endIntro(): void;
	}
	export class TrackWebAudio extends ig.Cacheable {
		public cacheType: string;
		public bufferHandle: ig.WebAudioBuffer;
		public introBufferHandle: any;
		public loopEnd: number;
		public introEnd: number;
		public endCallback: any;
		public baseVolume: number;
		public loop: boolean;
		public playing: boolean;
		public soundBuffer: any;
		public introBuffer: any;
		public currentNode: any;
		public nextNode: any;
		public introNode: any;
		public _context: any;
		public _volume: number;
		public _startTime: number;
		public _pauseTime: any;
		public _loopCount: number;
		public _nextOffset: number;
		public _introBufferDuration: number;

		public constructor(a: any, b: any, c: any, d: any, e: any);

		public init(a: any, b: any, c: any, d: any, e: any): void;
		public getCacheKey(a: any, b: any, c: any, d: any): any;
		public onCacheCleared(): void;
		public _initAudioBuffers(): void;
		public checkForEndCallback(): any;
		public setVolume(a: any): void;
		public getVolume(): any;
		public reset(): void;
		public _recreateNodes(): void;
		public _clearNodes(): void;
		public play(): void;
		public pause(): void;
	}
	export class SoundDefault extends ig.Class {
		public group: any;
		public multiAudio: ig.MultiAudio;
		public volume: number;
		public currentClip: any;
		public multiChannel: boolean;

		public constructor(a: any, b: any, c: any, d: any);

		public init(a: any, b: any, c: any, d: any): void;
		public clone(): any;
		public clearCached(): void;
		public play(a: any): any;
		public stop(): void;
	}
	export class SoundWebAudio extends ig.Class {
		public group: any;
		public webAudioBuffer: ig.WebAudioBuffer;
		public volume: number;
		public variance: number;

		public constructor(a: any, b: any, c: any, d: any);

		public init(a: any, b: any, c: any, d: any): void;
		public clone(): any;
		public clearCached(): void;
		public play(a: any, b: any): any;
		public stop(): void;
	}
	export class SoundHandleBase extends ig.Class {
		public pos: any;

		public setFixPosition(a: any, b: any, c: any): void;
		public setEntityPosition(a: any, b: any, c: any, d: any, f: any): void;
		public _updateEntityPos(a: any): void;
	}
	export class SoundHandleDefault extends ig.SoundHandleBase {
		public group: any;
		public position: any;
		public _time: number;
		public _duration: number;
		public _offset: number;
		public _startTime: number;
		public _clip: any;

		public constructor(a: any, b: any, c: any, d: any, e: any);

		public init(a: any, b: any, c: any, d: any, e: any): void;
		public update(): any;
		public setSize(): void;
		public play(): void;
		public stop(): void;
		public isLooping(): any;
		public getPlayTime(): any;
		public pause(): void;
		public onActionEndDetach(): void;
		public onEntityKillDetach(): void;
	}
	export class SoundHandleWebAudio extends ig.SoundHandleBase {
		public group: any;
		public _buffer: any;
		public _volume: number;
		public _speed: number;
		public _time: number;
		public _duration: number;
		public _offset: number;
		public _startTime: number;
		public _nodeSource: any;
		public _nodePosition: any;
		public _loop: boolean;
		public _width: number;
		public _height: number;
		public _playing: boolean;
		public _fadeTimer: number;
		public _fadeIn: boolean;
		public _fadeDuration: number;
		public _contextTimeOnStart: number;
		public _contextTimeOnPause: any;

		public constructor(a: any, b: any, c: any, d: any, e: any, f: any, g: any);

		public init(a: any, b: any, c: any, d: any, e: any, f: any, g: any): void;
		public update(): any;
		public isLooping(): any;
		public setSize(a: any, b: any): void;
		public play(): void;
		public stop(): void;
		public _disconnect(): void;
		public getPlayTime(): any;
		public pause(a: any): void;
		public _setPosition(): void;
		public onActionEndDetach(): void;
		public onEntityKillDetach(): void;
	}
	export class Timer extends ig.Class {
		public target: number;
		public base: number;
		public last: number;
		public stopped: boolean;

		public constructor(a: any);

		public init(a: any): void;
		public set(a: any, b: any): void;
		public reverseRelativeDelta(): void;
		public stop(): void;
		public resume(): void;
		public reset(): void;
		public tick(): any;
		public weight(): any;
		public delta(): any;
	}
	export class WeightTimer extends ig.Class {
		public duration: number;
		public timer: number;
		public actualTick: boolean;
		public mode: any;
		public repeatCount: number;
		public _rndBool: boolean;

		public constructor(a: any, b: any, c: any);

		public init(a: any, b: any, c: any): void;
		public set(a: any, b: any): void;
		public getRemainingTime(): any;
		public setRemainingTime(a: any): void;
		public tick(): void;
		public done(): any;
		public getTimePassed(): any;
		public get(): any;
		public getTotalWeight(): any;
		public hasRepeated(): any;
		public getRepeatCount(): any;
		public onBlinkDecline(): any;
	}
	export class Vars extends ig.Class {
		public currentLevelName: any;
		public varAccessors: any;
		public entityAccessors: any;
		public storage: any;

		public constructor();

		public init(): void;
		public get(a: any): any;
		public _get(a: any): any;
		public _getAccessObject(a: any): any;
		public set(a: any, b: any): any;
		public setDefault(a: any, b: any): void;
		public add(a: any, b: any): any;
		public sub(a: any, b: any): any;
		public mul(a: any, b: any): any;
		public div(a: any, b: any): any;
		public mod(a: any, b: any): any;
		public and(a: any, b: any): any;
		public or(a: any, b: any): any;
		public xor(a: any, b: any): any;
		public append(a: any, b: any): any;
		public prepend(a: any, b: any): any;
		public setupCallScope(a: any): void;
		public clear(): void;
		public getVarAccessor(a: any): any;
		public forwardEntityVarAccess(a: any, b: any, c: any): any;
		public resolveObjectAccess(a: any, b: any, c: any): any;
		public registerVarAccessor(a: any, b: any, c: any): void;
		public pushEntityAccessor(a: any): void;
		public popEntityAccessor(a: any): void;
		public _getVariable(b: any, c: any): any;
		public onLevelChange(a: any): void;
		public getJson(): any;
		public clearTemp(): void;
		public restoreFromJson(a: any): void;
	}
	export class VarCondition extends ig.Class {
		public condition: Function;
		public code: string;
		public pretty: string;
		public vars: any;

		public constructor(a: any);

		public init(a: any): void;
		public setCondition(a: any): void;
		public evaluate(): any;
		public toString(): any;
	}
	export class System extends ig.Class {
		public fps: number;
		public frameSkip: number;
		public width: number;
		public height: number;
		public contextWidth: number;
		public contextHeight: number;
		public realWidth: number;
		public realHeight: number;
		public screenWidth: number;
		public screenHeight: number;
		public zoomFocus: any;
		public zoom: number;
		public scale: number;
		public contextScale: number;
		public systemFontScale: number;
		public focusLost: boolean;
		public focusListeners: any;
		public windowFocusLost: boolean;
		public imageSmoothingKey: any;
		public imageSmoothingDisabled: boolean;
		public crashed: boolean;
		public cursorType: any;
		public skipMode: boolean;
		public timeFactor: number;
		public totalTimeFactor: number;
		public rawTick: number;
		public tick: number;
		public actualTick: number;
		public ingameTick: number;
		public intervalId: number;
		public newGameClass: any;
		public running: boolean;
		public delegate: any;
		public clock: ig.Timer;
		public inputDom: any;
		public canvas: any;
		public context: any;
		public smoothPositioning: boolean;

		public constructor(a: any, b: any, c: any, d: any, e: any, f: any);

		public init(a: any, b: any, c: any, d: any, e: any, f: any): void;
		public onVarAccess(a: any, b: any): any;
		public resize(a: any, b: any, c: any): void;
		public setGame(a: any): void;
		public setGameNow(a: any): void;
		public setDelegate(a: any): void;
		public setZoom(a: any): void;
		public setZoomFocus(a: any, b: any): void;
		public stopRunLoop(): void;
		public startRunLoop(): void;
		public getZoomMinOffset(a: any): any;
		public getScreenFromMapPos(a: any, b: any, c: any): any;
		public getMapFromScreenPos(a: any, b: any, c: any): any;
		public getMapFromScrollPos(a: any, b: any, c: any, d: any): any;
		public clear(a: any): void;
		public startZoomedDraw(): void;
		public endZoomedDraw(): void;
		public setTimeFactor(a: any): void;
		public run(): void;
		public getBufferContext(a: any): any;
		public error(a: any): void;
		public hasFocusLost(): any;
		public getDrawPos(a: any): any;
		public createImageBuffer(a: any, b: any, c: any): any;
		public setWindowFocus(a: any): void;
		public callFocusListeners(): void;
		public clearCursorType(): void;
		public setCursorType(a: any): void;
		public updateCursorClass(): void;
		public setCanvasSize(a: any, b: any, c: any): void;
		public setFocusLost(): void;
		public regainFocus(): void;
		public addFocusListener(a: any): void;
		public removeFocusListener(a: any): void;
		public setMasterVolume(a: any): void;
		public setSoundVolume(a: any): void;
		public setMusicVolume(a: any): void;
	}
	export class Input extends ig.Class {
		public bindings: any;
		public actions: any;
		public presses: any;
		public keyups: any;
		public locks: any;
		public delayedKeyup: any;
		public currentDevice: any;
		public isUsingMouse: boolean;
		public isUsingKeyboard: boolean;
		public isUsingAccelerometer: boolean;
		public mouse: any;
		public accel: any;
		public mouseGuiActive: boolean;
		public lastMousePos: any;
		public ignoreKeyboard: boolean;

		public constructor();

		public init(): void;
		public initMouse(): any;
		public initKeyboard(): void;
		public initAccelerometer(): void;
		public mousewheel(a: any): void;
		public mousemove(a: any): void;
		public mouseout(): void;
		public mouseOutOfScreen(): any;
		public contextmenu(a: any): void;
		public isInIframe(): any;
		public isInIframeAndUnfocused(): any;
		public keydown(a: any): void;
		public keyup(a: any): void;
		public blur(a: any): void;
		public focus(): void;
		public devicemotion(a: any): void;
		public bind(a: any, b: any): void;
		public bindTouch(a: any, b: any): void;
		public unbind(a: any): void;
		public unbindAll(): void;
		public state(a: any): any;
		public pressed(a: any): any;
		public keyupd(a: any): any;
		public clearPressed(): void;
		public touchStart(a: any, b: any): any;
		public touchEnd(a: any, b: any): any;
	}
	export class Lang extends ig.SingleLoadable {
		public cacheType: string;
		public labels: any;
		public _responseCount: number;

		public constructor();

		public init(): void;
		public get(b: any): any;
		public loadInternal(): void;
		public onerror(): void;
		public onload(a: any): void;
		public grammarReplace(a: any, b: any, d: any): any;
		public _doCallback(): void;
	}
	export class LangLabel extends ig.Class {
		public value: any;
		public data: any;
		public langUid: any;
		public originFile: any;

		public constructor(a: any);

		public init(a: any): void;
		public getSaveData(): any;
		public toString(): any;
	}
	export class SpriteEffectBase extends ig.Class {
		public delay: number;
		public duration: number;

		public constructor(b: any);

		public init(b: any): void;
		public updateSprite(b: any, a: any, d: any): void;
		public apply(_usedInChild0: any, _usedInChild1: any): void;
	}
	export class TileSheet extends ig.Class {
		public width: number;
		public height: number;
		public offX: number;
		public offY: number;
		public xCount: number;
		public image: ig.Image;

		public constructor(a: any, b: any, c: any, d: any, e: any, f: any);

		public init(a: any, b: any, c: any, d: any, e: any, f: any): void;
		public generateHit(): void;
		public getTileSrc(a: any, b: any): any;
		public clearCached(): void;
	}
	export class Animation extends ig.Class {
		public sheet: any;
		public shapeType: any;
		public frameTime: number;
		public stop: boolean;
		public flip: any;
		public pivot: any;
		public centerPivot: boolean;
		public wallY: number;
		public aboveZ: number;
		public sequence: any;
		public sequenceSpriteOff: any;
		public framesGfxOffset: any;
		public framesAlpha: any;
		public framesAngle: any;
		public framesFlipX: any;
		public angle: number;
		public offset: any;
		public gfxOffset: any;
		public size: any;
		public renderMode: any;
		public guiSprites: boolean;
		public globalTiming: boolean;
		public fx: any;
		public onAnimationStart: any;
		public onUpdate: any;

		public constructor(a: any, b: any);

		public init(a: any, b: any): void;
		public getDuration(): any;
		public getFrameCount(): any;
		public updateSprite(a: any, b: any, c: any, d: any): void;
	}
	export class MultiEntityAnimationPart extends ig.Class {
		public name: any;
		public group: any;
		public persistAnim: any;
		public collType: number;
		public heightShape: number;
		public padding: any;
		public size: any;
		public pos: any;
		public animSheet: ig.AnimationSheet;
		public synced: boolean;

		public constructor(a: any, b: any, c: any);

		public init(a: any, b: any, c: any): void;
		public createSubEntity(a: any, b: any): any;
	}
	export class MultiEntityAnimation extends ig.Class {
		public parts: any;
		public baseSize: any;
		public anchor: any;
		public frameTime: number;
		public frameCount: number;
		public stop: boolean;
		public flipDir: boolean;
		public partAnims: any;

		public constructor(a: any, b: any, c: any);

		public init(a: any, b: any, c: any): void;
		public getAnchorOffset(a: any): any;
		public getDuration(): any;
		public getFrameCount(): any;
		public onAnimationStart(a: any): void;
		public onUpdate(a: any, b: any): void;
		public updateSprite(a: any, b: any, c: any): void;
	}
	export class AnimationState extends ig.Class {
		public animations: any;
		public followUp: any;
		public timer: number;
		public loopCount: number;
		public alpha: number;
		public angle: number;
		public scaleX: number;
		public scaleY: number;
		public flipX: boolean;
		public colorOverlays: any;
		public animMods: any;

		public constructor();

		public init(): void;
		public reset(): void;
		public shuffleTime(): void;
		public hasAnimations(): any;
		public setAnimation(a: any, b: any): void;
		public addColorOverlay(a: any): void;
		public getFrame(): any;
		public isStatic(): any;
		public isRepeat(): any;
		public hasStopped(): any;
		public rewind(): any;
		public update(a: any, b: any): void;
		public updateSprite(a: any): void;
		public updateSpriteColor(a: any): void;
	}
	export class AnimModification extends ig.Class {
		public entity: any;
		public name: any;
		public spriteIdx: number;
		public tileOffset: number;

		public constructor(a: any, b: any, c: any);

		public init(a: any, b: any, c: any): void;
		public remove(): void;
		public onActionEndDetach(): void;
	}
	export class ColorOverlay extends ig.Class {
		public color: ig.RGBColor;
		public alpha: any;
		public spriteFilter: any;
		public lighter: boolean;

		public constructor(a: any, b: any, c: any, d: any);

		public init(a: any, b: any, c: any, d: any): void;
		public clear(): void;
	}
	export class SingleDirAnimationSet extends ig.Class {
		public animations: any;

		public constructor(a: any);

		public init(a: any): void;
		public getAnimations(): any;
		public getAnchorOffset(a: any, b: any): any;
		public getDuration(): any;
		public merge(a: any): void;
	}
	export class MultiDirAnimationSet extends ig.Class {
		public numDirs: number;
		public animations: any;
		public anchorOffsetX: any;
		public anchorOffsetY: any;
		public anchorOffsetZ: any;

		public constructor(a: any);

		public init(a: any): void;
		public setAnimations(a: any, b: any): void;
		public addAnimation(a: any): void;
		public merge(a: any): void;
		public getAnchorOffset(a: any, b: any): any;
		public getAnimations(a: any): any;
		public getDuration(): any;
	}
	export class AnimationSheet extends ig.JsonLoadable {
		public cacheType: string;
		public namedSheets: any;
		public createdSheets: any;
		public anims: any;
		public sharedAnimData: any;

		public replaceAnimationSet(a: any, b: any): void;
		public removeAnimSet(a: any): void;
		public hasAnimation(a: any): any;
		public addAnimationSet(a: any, b: any): void;
		public clearCached(): void;
		public getJsonPath(): any;
		public onload(b: any): void;
		public _getSheet(a: any): any;
	}
	export class CollEntry extends ig.Class {
		public entity: any;
		public _active: boolean;
		public _inCollisionMap: boolean;
		public _killed: boolean;
		public type: number;
		public updateType: any;
		public shape: number;
		public heightShape: any;
		public size: any;
		public alwaysRender: boolean;
		public padding: any;
		public ignoreCollision: boolean;
		public groundConnect: any;
		public groundSlip: boolean;
		public edgeSlipInward: boolean;
		public weight: any;
		public friction: any;
		public accelSpeed: number;
		public maxVel: number;
		public relativeVel: number;
		public bounciness: number;
		public zBounciness: number;
		public minBounceVelocity: number;
		public zGravityFactor: number;
		public float: any;
		public time: any;
		public pos: any;
		public level: number;
		public baseZPos: number;
		public shadow: any;
		public vel: any;
		public pushVel: any;
		public accelDir: any;
		public parentColl: any;
		public parentGroup: any;
		public subColls: any;
		public totalBlockTimer: number;
		public partlyBlockTimer: number;
		public updated: number;
		public _collData: any;
		public _collisionList: any;
		public _collisionListData: any;

		public constructor(a: any);

		public init(a: any): void;
		public initCollData(): any;
		public reset(): void;
		public setPos(a: any, b: any, d: any, g: any): void;
		public setType(a: any): void;
		public setUpdateType(a: any): void;
		public setSize(a: any, d: any, f: any, g: any, h: any): void;
		public setPadding(a: any, b: any): void;
		public getCenter(a: any): any;
		public addSubCollEntry(a: any): void;
		public getTick(a: any, b: any): any;
		public update(): void;
		public contains(a: any, b: any, d: any): any;
		public intersectsWith(a: any, b: any, d: any, g: any, h: any, i: any, j: any, k: any, l: any): any;
		public trace(b: any, d: any, f: any, g: any, h: any, i: any, j: any, k: any, l: any, o: any): any;
		public getOverlapCenterCoords(a: any, b: any): any;
		public setGroundEntry(a: any): void;
		public getOverlapHeight(a: any, b: any, d: any, g: any, h: any): any;
		public handleMovementTrace(a: any): void;
	}
	export class Entity extends ig.Class {
		public id: number;
		public uid: number;
		public mapId: number;
		public settings: any;
		public name: string;
		public coll: ig.CollEntry;
		public sprites: any;
		public entityAttached: any;
		public _hidden: boolean;
		public _hideRequest: boolean;
		public _killed: boolean;
		public _wm: ig.Config;

		public constructor(a: any, b: any, d: any, g: any);

		public init(a: any, b: any, d: any, g: any): void;
		public reset(a: any, b: any, d: any, g: any): void;
		public initSprites(): void;
		public setPos(a: any, b: any, d: any, g: any): void;
		public setZPos(a: any): void;
		public setSize(a: any, b: any, d: any): void;
		public getCenter(a: any): any;
		public getAlignedPos(a: any, b: any): any;
		public getOverlapCenterCoords(a: any, b: any): any;
		public getHitDir(a: any, b: any): any;
		public getCollideSide(a: any): any;
		public update(): void;
		public handleMovementTrace(a: any): void;
		public setSpriteCount(a: any, b: any): void;
		public updateSprites(): void;
		public addEntityAttached(a: any): void;
		public removeEntityAttached(a: any): void;
		public clearEntityAttached(a: any): void;
		public show(_usedInChild0: any): void;
		public hide(): void;
		public kill(a: any): void;
		public onKill(_usedInChild0: any): void;
		public erase(): void;
		public getOverlappingEntities(a: any): any;
		public setSlipThrough(a: any): void;
		public distanceTo(a: any): any;
		public onVarAccess(a: any, b: any): any;
		public check(): void;
		public collideWith(_usedInChild0: any, _usedInChild1: any): void;
		public animationEnded(_usedInChild0: any): void;
		public onHideRequest(): void;
		public onTouchGround(_usedInChild0: any): void;
		public onFallFromEdge(a: any): void;
	}
	export class AnimatedEntity extends ig.Entity {
		public animSheet: ig.AnimationSheet;
		public animState: ig.AnimationState;
		public animSpeedFactor: number;
		public currentAnim: any;
		public followUpAnim: any;
		public callbackOnFinish: boolean;
		public _createdAnimSheet: boolean;

		public constructor(a: any, b: any, d: any, g: any);

		public init(a: any, b: any, d: any, g: any): void;
		public reset(a: any, b: any, d: any, g: any): void;
		public onKill(a: any): void;
		public initSprites(): void;
		public initAnimations(a: any): void;
		public getCurrentAnimFaceCount(): any;
		public rewindAnim(): void;
		public setCurrentAnim(a: any, b: any, d: any, g: any, h: any): void;
		public updateAnim(): void;
		public update(): void;
		public updateSprites(): void;
	}
	export class AnimationPartEntity extends ig.AnimatedEntity {
		public partName: any;
		public owner: any;
		public persistAnim: any;

		public constructor(a: any, b: any, d: any, g: any);

		public init(a: any, b: any, d: any, g: any): void;
	}
	export class StepBase extends ig.Class {
		public _nextStep: any;
		public _cacheIsCleared: boolean;
		public branches: any;

		public constructor();

		public init(_usedInChild0: any): void;
		public start(_usedInChild0: any, _usedInChild1: any): void;
		public run(_usedInChild0: any): any;
		public getNext(_usedInChild0: any): any;
		public getJumpLabelName(): any;
	}
	export class EventManager extends ig.Class {
		public runningEventCalls: any;
		public blockingEventCall: any;
		public blockedEventCallQueue: any;

		public constructor();

		public init(): void;
		public callEvent(b: any, a: any, d: any, c: any, e: any, f: any, g: any): any;
		public getBlockingEventCall(): any;
		public hasBlockingEventCallHint(b: any): any;
		public isInterruptible(): any;
		public update(): void;
		public clearQueue(): void;
		public clear(): void;
		public _startEventCall(b: any): void;
		public _endEventCall(b: any): void;
	}
	export class EventCall extends ig.Class {
		public runType: number;
		public done: boolean;
		public blocked: boolean;
		public stack: any;
		public eventAttached: any;
		public pauseParallel: boolean;
		public onStart: any;
		public onEnd: any;
		public callEntity: any;
		public data: any;

		public constructor(b: any, a: any, d: any, c: any, e: any, f: any, g: any);

		public init(b: any, a: any, d: any, c: any, e: any, f: any, g: any): void;
		public hasHint(b: any): any;
		public callInlineEvent(b: any, a: any): any;
		public addEventAttached(b: any): void;
		public setDone(): void;
		public isBlocked(): any;
		public isRunning(): any;
		public performStep(b: any): any;
		public update(): any;
	}
	export class Event extends ig.Class {
		public name: any;
		public rootStep: any;
		public labeledSteps: any;
		public hints: any;

		public constructor(b: any);

		public init(b: any): void;
		public addHint(b: any): void;
		public hasHint(b: any): any;
		public clearCached(): void;
		public setupInput(b: any): any;
	}
	export class CubeSprite extends ig.Class {
		public pos: any;
		public size: any;
		public shadow: any;
		public gfxOffset: any;
		public gfxCut: any;
		public tmpOffset: any;
		public wallY: number;
		public image: any;
		public src: any;
		public alpha: number;
		public flip: any;
		public scale: any;
		public rotate: number;
		public pivot: any;
		public overlay: any;
		public lighterOverlay: any;
		public aboveZ: number;
		public mergeTop: boolean;
		public renderData: any;
		public gui: boolean;
		public renderMode: any;
		public alwaysRender: boolean;
		public noOverlapSolving: boolean;

		public constructor(b: any);

		public init(b: any): void;
		public clear(b: any): void;
		public kill(): void;
		public setPos(b: any, a: any, d: any): void;
		public setGfxOffset(b: any, a: any): void;
		public setGfxCut(b: any, a: any, d: any, c: any): void;
		public setShadow(b: any, a: any, d: any, c: any, e: any, f: any): void;
		public setSize(b: any, a: any, d: any, c: any): void;
		public setImageSrc(b: any, a: any, d: any): void;
		public setFlip(b: any, a: any): void;
		public setPivot(b: any, a: any): void;
		public setTransform(b: any, a: any, d: any): void;
		public setAlpha(b: any): void;
		public setOverlayColor(b: any, a: any): void;
		public setLighterOverlayColor(b: any, a: any): void;
		public setInvisible(): void;
		public setSizeFromEntity(b: any, a: any, d: any, c: any, e: any): void;
		public setImageSrcFromEntity(b: any, a: any, d: any, c: any, e: any, f: any): void;
		public setShadowFromEntity(b: any): void;
		public setPosFromEntity(b: any, a: any, d: any, c: any): void;
		public centerPivot(b: any): void;
		public setEntityDefault(b: any, a: any, d: any, c: any, e: any, f: any, g: any, h: any, i: any): void;
		public assign(b: any): void;
	}
	export class SpritePool extends ig.Class {
		public sprites: any;

		public get(b: any): any;
	}
	export class Renderer2d extends ig.Class {
		public spriteSlots: any;
		public guiSpriteSlots: any;

		public constructor();

		public init(): void;
		public prepareDraw(a: any, b: any): any;
		public drawLayers(a: any, c: any): void;
		public drawLight(): void;
		public drawPostLayerSprites(): void;
		public drawEntities(b: any): void;
		public drawAnimation(a: any, b: any, d: any, e: any, f: any, g: any, h: any, i: any): void;
		public mapCleared(): void;
	}
	export class Physics extends ig.Class {
		public cellSize: number;
		public collUpdateList: any;
		public collOutOfScreenList: any;
		public collEntryMap: any;
		public _updateCount: number;
		public _trackEntityTouch: boolean;
		public groundDangerCallback: any;
		public groundEntityDangerCallback: any;

		public mapCleared(): void;
		public mapLoaded(): void;
		public update(): void;
		public updateCollEntry(a: any, b: any): void;
		public getEntitiesInRectangle(a: any, b: any, c: any, d: any, e: any, f: any, g: any, h: any, i: any): any;
		public getEntitiesInCircle(a: any, b: any, d: any, f: any, g: any, h: any, i: any, r: any, v: any, q: any, s: any): any;
		public initTraceResult(a: any): any;
		public trace(a: any, b: any, c: any, d: any, e: any, f: any, g: any, h: any, i: any, q: any, s: any, u: any, y: any): any;
		public addCollEntry(a: any): void;
		public removeCollEntry(a: any): void;
		public addToUpdateList(a: any): void;
		public removeFromUpdateList(a: any): void;
		public addToCollMap(a: any): void;
		public removeFromCollMap(a: any): void;
		public moveEntity(c: any, f: any): void;
		public moveEntityXY(a: any, c: any, e: any, f: any, g: any): any;
		public isGroundDanger(a: any): any;
		public isGroundEntityDanger(a: any): any;
		public moveEntityZ(d: any, e: any, f: any): any;
		public forcePushEntry(a: any, b: any, c: any, d: any): void;
		public updateGroundEntity(a: any, c: any, d: any, e: any, f: any): void;
		public updateBaseZPos(a: any, b: any, c: any, d: any): any;
		public getBaseZPos(a: any, b: any, c: any, d: any, e: any): any;
		public traceOnEntryMap(a: any, b: any, c: any, d: any, e: any, f: any, g: any, h: any, i: any, q: any, s: any, u: any, y: any): any;
		public getGroundEntry(a: any, b: any, c: any, d: any, e: any, f: any, g: any, h: any, i: any): any;
	}
	export class GameState extends ig.Class {
		public game: any;
		public system: any;
		public physics: any;
		public physicsInitialized: boolean;
		public renderer: any;

		public constructor();

		public init(): void;
		public clear(): void;
		public initEmpty(b: any, a: any): void;
		public initFromGame(b: any): void;
		public forceUpdate(): void;
		public forceDraw(b: any, a: any): void;
		public onEnd(b: any): void;
		public onStart(b: any): void;
	}
	export class Map extends ig.Class {
		public tilesize: number;
		public width: number;
		public height: number;
		public data: any;
		public zHeight: number;
		public zTileOff: number;
		public moveSpeed: any;

		public constructor(a: any, b: any);

		public init(a: any, b: any): void;
		public copy(a: any): void;
		public clear(): void;
		public getTile(a: any, b: any): any;
		public getGridTile(a: any, b: any): any;
		public setTile(a: any, b: any, c: any): any;
		public setGridTile(a: any, b: any, c: any): any;
	}
	export class ChunkedMap extends ig.Map {
		public scroll: any;
		public distance: number;
		public yDistance: number;
		public repeat: boolean;
		public enabled: boolean;
		public preRender: boolean;
		public screenRender: boolean;
		public screenBuffer: boolean;
		public preRenderedChunks: any;
		public chunkSizeX: number;
		public chunkSizeY: number;
		public debugDraw: boolean;
		public merged: boolean;

		public constructor(a: any, b: any);

		public init(a: any, b: any): void;
		public clear(): void;
		public clearPreRenderedChunks(): void;
		public setScreenPos(a: any, d: any): void;
		public setGridTile(a: any, b: any, c: any): void;
		public preRenderMapToChunks(a: any): any;
		public readyToDraw(): any;
		public preRenderChunk(_usedInChild0: any, _usedInChild1: any, _usedInChild2: any, _usedInChild3: any, _usedInChild4: any): any;
		public preRenderScreen(_usedInChild0: any, _usedInChild1: any, _usedInChild2: any, _usedInChild3: any, _usedInChild4: any, _usedInChild5: any, _usedInChild6: any): void;
		public redrawChunkTile(_usedInChild0: any, _usedInChild1: any, _usedInChild2: any, _usedInChild3: any): void;
		public _draw(a: any, d: any, c: any, e: any): void;
		public draw(a: any, b: any, c: any, e: any): void;
		public drawFromScreenBuffer(a: any, b: any, c: any, e: any): any;
		public drawPreRendered(a: any, b: any, c: any, e: any): any;
		public drawTiled(_usedInChild0: any, _usedInChild1: any, _usedInChild2: any, _usedInChild3: any): void;
		public drawAnimated(a: any, d: any, c: any, e: any): void;
	}
	export class TileInfoList extends ig.SingleLoadable {
		public tiledata: any;

		public constructor();

		public init(): void;
		public loadInternal(): void;
		public onerror(): void;
		public onload(b: any): void;
	}
	export class TileInfo extends ig.Class {
		public animatedTiles: any;

		public constructor(b: any);

		public init(b: any): void;
		public getAnimTiles(b: any): any;
	}
	export class GlobalSettings extends ig.SingleLoadable {
		public cacheType: string;
		public data: any;
		public modified: boolean;

		public constructor();

		public init(): void;
		public getGlobalSettingOptions(b: any, a: any): any;
		public getGlobalSetting(b: any, a: any, d: any): any;
		public storeGlobalSetting(b: any, a: any, d: any, c: any): void;
		public resolveEntitySettings(b: any, a: any): any;
		public loadInternal(): void;
		public onerror(): void;
		public onload(b: any): void;
	}
	export class ExtensionManager extends ig.Class {
		public enabled: any;
		public list: ig.ExtensionList;
		public listeners: any;

		public constructor();

		public init(): void;
		public addListener(a: any, b: any): void;
		public load(): void;
		public getExtensionList(): any;
		public getExtension(a: any): any;
		public hasExtension(a: any): any;
		public setExtensionEnabled(a: any, b: any): void;
		public onExtensionLoaded(a: any): void;
	}
	export class ExtensionList extends ig.SingleLoadable {
		public extensions: any;

		public get(a: any): any;
		public loadInternal(): void;
		public loadExtensionsPHP(): void;
		public _getExtensionFolder(): any;
		public loadExtensionsNWJS(): void;
		public onDirRead(a: any, b: any): void;
		public onExtensionListLoaded(a: any): void;
	}
	export class Extension extends ig.JsonLoadable {
		public cacheType: string;
		public files: any;
		public entries: any;
		public name: ig.LangLabel;
		public description: ig.LangLabel;

		public getJsonPath(): any;
		public onload(a: any): void;
		public checkFileList(): void;
		public addFileForwarding(a: any): void;
	}
	export class UniformRNG extends ig.Class {
		public lastIndex: number;
		public values: any;

		public constructor(a: any, b: any);

		public init(a: any, b: any): any;
		public get(): any;
	}
	export class Game extends ig.Class {
		public clearColor: string;
		public gravity: number;
		public screen: any;
		public soundPos: any;
		public size: any;
		public paused: boolean;
		public mapRenderingBlocked: boolean;
		public isReset: boolean;
		public shadowImage: ig.Image;
		public previousMap: any;
		public mapName: any;
		public currentLoadingResource: string;
		public entities: any;
		public mapEntities: any;
		public shownEntities: any;
		public freeEntityIds: any;
		public namedEntities: any;
		public conditionalEntities: any;
		public maps: any;
		public levels: any;
		public maxLevel: number;
		public minLevelZ: number;
		public masterLevel: number;
		public backgroundAnims: any;
		public backgroundAnimTimer: number;
		public cellSize: number;
		public events: ig.EventManager;
		public renderer: ig.Renderer2d;
		public physics: ig.Physics;
		public _deferredDetach: any;
		public _levelToLoad: any;
		public playerEntity: any;
		public marker: string;
		public postPlacementAction: any;
		public teleporting: any;
		public addons: any;
		public states: any;

		public constructor();

		public staticInstantiate(): any;
		public init(): any;
		public pushState(b: any): void;
		public popState(): void;
		public printGameAddonsString(): void;
		public printGameAddonsStringFromArray(b: any, a: any): void;
		public getLevelIdx(b: any): any;
		public getLevelHeight(b: any): any;
		public getHeightFromLevelOffset(b: any): any;
		public getEntityByName(b: any): any;
		public getEntityByMapId(b: any): any;
		public swapNamedEntities(b: any, a: any): void;
		public getEntityCount(): any;
		public getObjectMaps(b: any): any;
		public isMapTileEmpty(b: any, a: any): any;
		public getEntitiesInRectangle(b: any, a: any, d: any, c: any, e: any, f: any, g: any, h: any): any;
		public getOverlapEntities(b: any): any;
		public getEntitiesInCircle(b: any, a: any, d: any, c: any, e: any, f: any, g: any, h: any, i: any, j: any, k: any): any;
		public getEntitiesByType(b: any): any;
		public getEntitiesOnTop(b: any): any;
		public isInterruptible(): any;
		public isEventStartReady(): any;
		public isPlayerTouch(b: any, a: any, d: any): any;
		public isControlBlocked(): any;
		public getErrorData(_usedInChild0: any): void;
		public onExternalMessageReceived(b: any, a: any): void;
		public sendExternalMessage(b: any, a: any): void;
		public setPaused(b: any): void;
		public spawnEntity(b: any, a: any, d: any, c: any, e: any, f: any): any;
		public showEntity(b: any): void;
		public hideEntity(b: any): void;
		public requestEntityHide(b: any): void;
		public removeEntity(b: any): void;
		public detachEntity(b: any): void;
		public onVarAccess(b: any, a: any): any;
		public reset(): void;
		public teleport(b: any, a: any, d: any, c: any): void;
		public isTeleporting(): any;
		public onTeleportStart(): any;
		public onTeleportEnd(): void;
		public createPlayer(): void;
		public getVersion(): any;
		public preloadLevel(b: any): void;
		public clearMap(b: any): void;
		public loadLevel(b: any, a: any): void;
		public loadingComplete(): void;
		public hasLightLayer(): any;
		public preDrawMaps(): void;
		public preDrawLevel(b: any, a: any): void;
		public run(): void;
		public update(): any;
		public deferredUpdate(): void;
		public deferredMapEntityUpdate(): void;
		public draw(): void;
		public finalDraw(): void;
		public varsChanged(): void;
		public varsChangedDeferred(): void;
		public isAreaBlocked(b: any, a: any, d: any, c: any, e: any, f: any, g: any): any;
		public isOverHole(b: any, a: any, d: any, c: any, e: any, f: any, g: any): any;
		public traceEntity(b: any, a: any, d: any, c: any, e: any, f: any, g: any, h: any, i: any, j: any, k: any): any;
		public trace(b: any, a: any, d: any, c: any, e: any, f: any, g: any, h: any, i: any, j: any, k: any, l: any, o: any): any;
	}
	export class GameAddon extends ig.Class {
		public levelLoadStartOrder: number;
		public levelLoadedOrder: number;
		public teleportOrder: number;
		public preUpdateOrder: number;
		public postUpdateOrder: number;
		public deferredUpdateOrder: number;
		public preDrawOrder: number;
		public midDrawOrder: number;
		public postDrawOrder: number;
		public resetOrder: number;
		public varsChangedOrder: number;
		public name: string;

		public constructor(b: any);

		public init(b: any): void;
		public onPreUpdate(): any;
		public onDeferredUpdate(): void;
		public onLevelLoadStart(a: any): void;
		public onLevelLoaded(): void;
		public onTeleport(a: any, b: any, c: any): void;
		public onReset(): void;
		public onPostUpdate(): void;
		public onPostDraw(): void;
		public onVarsChanged(): void;
		public onPreDraw(): void;
		public onMidDraw(): void;
	}
	export class TeleportPosition extends ig.Class {
		public pos: any;
		public face: any;
		public marker: any;
		public level: number;
		public baseZPos: number;
		public size: any;

		public constructor(b: any);

		public init(b: any): void;
		public setFromData(b: any, a: any, d: any, c: any, e: any, f: any): void;
		public setFromJson(b: any): void;
		public getJson(): any;
	}
	export class Database extends ig.SingleLoadable {
		public cacheType: string;
		public data: any;
		public entries: any;

		public constructor();

		public init(): any;
		public register(b: any, a: any, d: any, c: any): void;
		public get(b: any): any;
		public loadInternal(): void;
		public onerror(b: any): void;
		public onload(b: any): void;
	}
	export class GamepadManager extends ig.GameAddon {
		public gamepads: any;
		public activeGamepads: any;
		public handlers: any;
		public preUpdateOrder: number;
		public deferredUpdateOrder: number;

		public constructor();

		public init(): void;
		public onPreUpdate(): any;
		public onDeferredUpdate(): void;
		public isButtonPressed(a: any): any;
		public isButtonReleased(a: any): any;
		public isButtonDown(a: any): any;
		public getButtonValue(a: any): any;
		public getAxesValue(a: any, b: any): any;
		public isAxesDown(a: any): any;
		public isLeftStickDown(): any;
		public isRightStickDown(): any;
		public isSupported(): any;
	}
	export class Gamepad extends ig.Class {
		public buttonDeadzones: any;
		public axesDeadzones: any;
		public buttonStates: any;
		public axesStates: any;
		public pressedStates: any;
		public releasedStates: any;

		public constructor();

		public init(): void;
		public updateButton(a: any, b: any): void;
		public updateAxes(a: any, b: any): void;
	}
	export class Html5GamepadHandler extends ig.Class {
		public constructor();

		public init(): void;
		public update(d: any): void;
	}
	export class NWFGamepadHandler extends ig.Class {
		public mainGamepad: any;

		public constructor();

		public init(): void;
		public update(a: any): void;
	}
	export class Action extends ig.Class {
		public name: string;
		public rootStep: any;
		public labeledSteps: any;
		public eventAction: boolean;
		public parallelMove: boolean;
		public repeating: boolean;
		public hint: any;

		public constructor(b: any, a: any, d: any, c: any);

		public init(b: any, a: any, d: any, c: any): void;
		public clearCached(): void;
		public inlineStart(b: any, a: any): void;
		public run(b: any): any;
	}
	export class ActorConfig extends ig.Class {
		public empty: boolean;
		public data: any;
		public original: any;

		public constructor(a: any, b: any);

		public init(a: any, b: any): void;
		public get(a: any): any;
		public overwrite(a: any, b: any): void;
		public clearOverwrite(): void;
		public loadFromConfig(a: any): void;
		public loadFromData(a: any, b: any): void;
		public loadFromEntity(a: any): void;
		public apply(a: any): void;
	}
	export class ActorEntity extends ig.AnimatedEntity {
		public animSheet: ig.AnimationSheet;
		public face: any;
		public currentAnim: any;
		public followUpAnim: any;
		public faceDirFixed: boolean;
		public forceFaceDirFixed: boolean;
		public animationFixed: boolean;
		public floatHeightOnMove: number;
		public fly: any;
		public walkAnimsName: any;
		public walkAnims: any;
		public storedWalkAnims: any;
		public currentAction: any;
		public currentActionStep: any;
		public stepTimer: number;
		public stepSync: number;
		public stepData: any;
		public keepStateAfterAction: boolean;
		public inlineActionStack: any;
		public stashed: any;
		public defaultConfig: ig.ActorConfig;
		public jumpingEnabled: boolean;
		public jumping: boolean;
		public floatJump: number;
		public preJumpStats: any;
		public actionAttached: any;
		public attributes: any;
		public faceToTarget: any;

		public constructor(a: any, b: any, d: any, g: any);

		public init(a: any, b: any, d: any, g: any): void;
		public onKill(a: any): void;
		public initAnimations(a: any): void;
		public hasAction(): any;
		public setDefaultConfig(a: any): void;
		public setAttribute(a: any, b: any): void;
		public getAttribute(a: any): any;
		public getAttribVec2(a: any): any;
		public getAttribVec3(a: any): any;
		public getAttribString(a: any): any;
		public getAttribCondition(a: any): any;
		public setFace(a: any): void;
		public getTarget(_usedInChild0: any): any;
		public getFaceOffset(): any;
		public setAction(a: any, b: any, d: any): void;
		public forceExecuteAction(): void;
		public cancelAction(a: any): void;
		public pushInlineAction(a: any, b: any, d: any): void;
		public popInlineAction(): void;
		public stashAction(a: any): void;
		public hasStashedAction(): any;
		public clearStashedAction(): void;
		public resumeStashedAction(a: any): void;
		public cancelJump(): void;
		public addActionAttached(a: any): void;
		public removeActionAttached(a: any): any;
		public clearActionAttached(a: any, b: any): void;
		public setWalkAnims(a: any): void;
		public storeWalkAnims(a: any, b: any): void;
		public update(): void;
		public _checkForUpwardJump(): any;
		public onTouchGround(_usedInChild0: any): void;
		public _savePreJumpStats(): void;
		public _loadPreJumpStats(): void;
		public doJump(a: any, b: any, d: any, g: any, h: any): void;
		public doFloatJump(a: any, b: any, d: any): void;
		public onFallFromEdge(a: any): void;
		public onVarAccess(a: any, b: any): any;
		public onJump(_usedInChild0: any, _usedInChild1: any): void;
	}
	export class EntityHideManager extends ig.Class {
		public hideCondition: ig.VarCondition;
		public hideTimer: number;
		public hidden: boolean;
		public efficientMode: boolean;

		public constructor(a: any);

		public init(a: any): void;
		public update(a: any): void;
		public isBusy(): any;
		public varsChanged(a: any): void;
	}
	export class SaveSlot extends ig.Class {
		public src: any;
		public data: any;

		public constructor(a: any);

		public init(a: any): void;
		public getData(): any;
		public getSrc(): any;
		public mergeData(a: any): void;
	}
	export class StorageData extends ig.Class {
		public loaded: boolean;
		public data: any;
		public saveDataStack: any;
		public path: any;
		public cacheType: string;
		public ioState: any;
		public loadPathStack: any;

		public constructor(a: any);

		public init(a: any): void;
		public load(a: any): void;
		public _loadFromList(): void;
		public _loadResponse(a: any, b: any): void;
		public save(a: any): void;
		public _saveToFile(): void;
		public _doIoStep(a: any): void;
		public _saveResponse(b: any): void;
		public _resolveSave(): void;
		public _getSaveFilePathList(): any;
		public _loadStorageFromData(a: any): any;
		public getData(): any;
	}
	export class Storage extends ig.GameAddon {
		public mapSaveEnabled: boolean;
		public resetAfterTeleport: boolean;
		public slot: number;
		public slots: any;
		public autoSlot: ig.SaveSlot;
		public lastUsedSlot: any;
		public listeners: any;
		public saveObject: any;
		public globalData: any;
		public checkPointSave: any;
		public data: ig.StorageData;
		public currentLoadFile: any;
		public checkpointCondCallback: any;
		public autoSaveCondCallback: any;
		public loadHint: any;
		public levelLoadedOrder: any;

		public constructor();

		public init(): void;
		public setAutoSaveCondCallback(a: any): void;
		public setCheckpointCondCallback(a: any): void;
		public register(a: any): void;
		public saveCheckpoint(a: any, b: any, c: any): void;
		public getLastSlotData(a: any): any;
		public getAutoSlotData(a: any): any;
		public hasSaves(): any;
		public getSlotData(a: any, b: any): any;
		public pushSlotData(a: any): void;
		public saveAutoSlot(a: any): void;
		public save(a: any): void;
		public _saveToStorage(): any;
		public _saveState(a: any, b: any, c: any): void;
		public saveGlobals(): void;
		public loadSlot(a: any, b: any): void;
		public deleteSlot(a: any): void;
		public loadCheckpoint(): void;
		public _isEncrypted(a: any): any;
		public _encrypt(a: any, b: any): any;
		public _decrypt(a: any, b: any): any;
		public _createCopyTeleportPosition(a: any): any;
		public onLevelLoadStart(a: any): void;
		public onLevelLoaded(): void;
		public onTeleport(a: any, b: any, c: any): void;
		public getSlot(a: any): any;
		public hasSaveSlotData(a: any): any;
		public hasSlots(): any;
	}
	export class BgmTrack extends ig.Class {
		public name: any;
		public track: ig.Track;

		public constructor(a: any);

		public init(a: any): void;
		public get(): any;
		public clearCached(): void;
		public copy(): any;
	}
	export class BgmTrackSet extends ig.Class {
		public name: any;
		public entries: any;

		public constructor(a: any);

		public init(a: any): void;
		public get(a: any): any;
		public clearCached(): void;
		public copy(): any;
	}
	export class Bgm extends ig.GameAddon {
		public defaultTrackSet: any;
		public defaultTrackTypeStack: any;
		public trackStack: any;
		public overloadDefault: boolean;
		public defaultMode: string;
		public mapDefaultTrackSet: any;
		public delayedResume: number;
		public pauseAutoResumeBlock: boolean;
		public resumeOnChange: any;
		public levelLoadStartOrder: number;
		public levelLoadedOrder: number;

		public constructor();

		public init(): void;
		public loadTrack(a: any): any;
		public loadTrackSet(a: any): any;
		public setDefault(a: any, b: any, c: any): void;
		public isPlayingDefault(): any;
		public getDefaultTrackTypeCount(): any;
		public hasDefaultTrackType(a: any): any;
		public pushDefaultTrackType(a: any, b: any): void;
		public popDefaultTrackType(a: any): void;
		public setResumeOnChange(a: any): void;
		public clearResumeOnChange(): void;
		public resumeDefault(a: any): void;
		public play(a: any, b: any, c: any): void;
		public push(a: any, b: any, c: any): void;
		public pop(a: any): void;
		public clear(a: any): void;
		public inbetween(a: any, b: any, c: any): void;
		public pause(a: any): void;
		public resume(a: any): void;
		public onStorageSave(a: any): void;
		public onStoragePreLoad(a: any): void;
		public onStoragePostLoad(a: any): void;
		public onLevelLoadStart(a: any): void;
		public onLevelLoaded(): void;
		public onReset(): void;
		public onDeferredUpdate(): void;
		public _getModeData(a: any): any;
		public _getDefaultTrackEntry(): any;
	}
	export class EventSheet extends ig.JsonLoadable {
		public cacheType: string;
		public events: any;

		public onCacheCleared(): void;
		public getJsonPath(): any;
		public onload(b: any): void;
		public getEvent(b: any): any;
	}
	export class Camera extends ig.GameAddon {
		public targets: any;
		public namedTargets: any;
		public _currentPos: any;
		public _currentZ: number;
		public _currentZoom: number;
		public _currentZoomPos: any;
		public _zSlow: boolean;
		public _lastPos: any;
		public _lastZoom: number;
		public _lastZoomPos: any;
		public _duration: number;
		public _time: number;
		public _transitionFunction: any;
		public _cameraInBounds: boolean;
		public postUpdateOrder: number;
		public levelLoadStartOrder: number;

		public constructor();

		public init(): void;
		public onPostUpdate(): void;
		public onLevelLoadStart(a: any): void;
		public pushTarget(a: any, b: any, c: any, d: any): void;
		public removeNamedTarget(a: any, b: any, c: any): void;
		public removeTarget(a: any, b: any, c: any): void;
		public popTarget(a: any, b: any): void;
		public replaceTarget(a: any, b: any, c: any, d: any): any;
		public getTargetCount(): any;
		public isTargetReached(): any;
		public retarget(a: any, b: any): void;
		public isActiveTarget(a: any): any;
		public getTimeUntilTargetReached(): any;
		public _limitPos(a: any, b: any, c: any): void;
		public _applyFinalState(): void;
		public _saveLastPos(): void;
		public _getNewZoom(): any;
		public _getNewPos(a: any, b: any, c: any): any;
		public _getDuration(b: any): any;
	}
	export class Rumble extends ig.GameAddon {
		public rumbles: any;
		public namedRumbles: any;
		public offset: any;
		public postUpdateOrder: number;

		public constructor();

		public init(): void;
		public onPostUpdate(): void;
		public onReset(): void;
		public addRumble(b: any): void;
		public removeRumble(b: any): void;
		public getRumble(b: any): any;
	}
	export class ParticleHandle extends ig.Class {
		public entity: any;
		public syncFace: boolean;
		public timer: number;
		public maxTime: number;
		public postAnimTime: number;
		public pData: any;
		public particleState: any;
		public startAngle: number;
		public angleSync: any;
		public flipX: number;
		public moveWithTarget: number;
		public cancelable: boolean;

		public constructor(a: any, b: any);

		public init(a: any, b: any): void;
		public cancel(): void;
		public setData(a: any): void;
		public onUpdate(): void;
		public initSprite(a: any): void;
		public updateSprite(a: any): void;
		public initAnimState(a: any): void;
		public updateAnimState(a: any): void;
		public initAnimations(a: any): void;
	}
	export class EffectConfig extends ig.Config {
		public constructor(c: any);

		public init(c: any): void;
	}
	export class ParticleState extends ig.Class {
		public alpha: any;
		public scale: any;
		public rotate: any;

		public constructor(a: any);

		public init(a: any): void;
		public _convertEntry(a: any, b: any): any;
		public getMaxEndTime(a: any): any;
		public getAlpha(a: any, b: any, c: any): any;
		public getScale(a: any, b: any, c: any, d: any, i: any): void;
		public getRotate(a: any, b: any, c: any, d: any, i: any): any;
		public initAnimState(a: any, b: any, c: any): void;
		public updateAnimState(a: any, b: any, c: any, h: any, i: any, j: any, k: any): void;
		public initSprite(a: any, b: any, c: any): void;
		public updateSprite(a: any, b: any, c: any, d: any, i: any, j: any, k: any): void;
		public _getEntryWeight(a: any, b: any, c: any, d: any): any;
	}
	export class EffectSheet extends ig.JsonLoadable {
		public cacheType: string;
		public animSheet: ig.AnimationSheet;
		public faceAnimSheet: ig.AnimationSheet;
		public effects: any;

		public onCacheCleared(): void;
		public getJsonPath(): any;
		public onload(a: any): void;
		public hasEffect(a: any): any;
		public spawnOnTarget(a: any, b: any, c: any): any;
		public spawnFixed(a: any, b: any, c: any, d: any, i: any, j: any): any;
	}
	export class Effect extends ig.Class {
		public id: any;
		public steps: any;
		public loopStartIdx: number;
		public loopStartTime: number;
		public loopEndIdx: any;
		public loopEndTime: any;
		public maxTime: number;

		public constructor(a: any, b: any, d: any);

		public init(a: any, b: any, d: any): void;
		public clearCached(): void;
		public update(a: any): void;
		public isEnding(a: any): any;
		public isDone(a: any): any;
		public getRemainingTime(a: any): any;
	}
	export class EffectStepBase extends ig.Class {
		public time: number;

		public start(_usedInChild0: any): void;
		public getDuration(): any;
	}
	export class EffectHandle extends ig.Class {
		public effectSheet: ig.EffectSheet;
		public name: any;
		public externalSheet: boolean;

		public constructor(a: any);

		public init(a: any): void;
		public clearCached(): void;
		public spawnOnTarget(a: any, b: any): any;
		public spawnFixed(a: any, b: any, c: any, d: any, i: any): any;
	}
	export class EffectTimeRunner extends ig.Class {
		public step: any;
		public data: any;
		public duration: number;
		public _timer: number;

		public constructor(a: any, b: any);

		public init(a: any, b: any): void;
		public update(a: any): any;
		public cancel(a: any, b: any): any;
	}
	export class EffectParticleRunner extends ig.Class {
		public step: any;
		public data: any;
		public totalParticles: number;
		public currentParticle: number;
		public duration: number;
		public _timer: number;

		public constructor(a: any, b: any);

		public init(a: any, b: any): void;
		public update(a: any): any;
		public cancel(a: any): any;
	}
	export class SlowMotion extends ig.GameAddon {
		public slowMotions: any;
		public namedSlowMotions: any;
		public postUpdateOrder: number;

		public constructor();

		public init(): void;
		public forceUpdate(): void;
		public update(): void;
		public hasSlowMotion(b: any): any;
		public getNonInvertSlowDown(): any;
		public onPostUpdate(): void;
		public onLevelLoadStart(): void;
		public onReset(): void;
		public add(b: any, a: any, d: any): any;
		public clearNamed(b: any, a: any): void;
	}
	export class SlowMotionHandle extends ig.Class {
		public factor: number;
		public transitionTime: number;
		public name: any;
		public timer: number;
		public cleared: boolean;
		public inverers: any;

		public constructor(b: any, a: any, d: any);

		public init(b: any, a: any, d: any): void;
		public clear(b: any): void;
		public update(): any;
		public addInverseEntity(b: any): void;
		public getFactor(): any;
		public onActionEndDetach(): void;
	}
	export class Gui extends ig.GameAddon {
		public guiHooks: any;
		public namedGuiElements: any;
		public screenBlocked: boolean;
		public renderer: any;
		public mouseListenerHooks: any;
		public controlModule: any;
		public deferredUpdateOrder: number;
		public postDrawOrder: number;

		public constructor();

		public init(): void;
		public setControlModule(a: any): void;
		public onStorageSave(a: any): void;
		public onStoragePreLoad(a: any): void;
		public onDeferredUpdate(): void;
		public onPostDraw(): void;
		public onVarsChanged(): void;
		public onReset(): void;
		public logGUIArray(): void;
		public createEventGui(a: any, b: any, c: any, d: any): any;
		public spawnEventGui(a: any): void;
		public freeEventGui(a: any): void;
		public addGuiElement(a: any): void;
		public sortGui(): void;
		public removeGuiElement(a: any): void;
		public _updateGuiMouse(): void;
		public _updateRecursive(b: any, c: any, f: any, g: any, h: any, i: any, k: any, q: any, s: any, u: any, y: any): any;
		public _drawRecursive(a: any, b: any, c: any, d: any, e: any): void;
		public _addMouseListenerHook(a: any): void;
		public _removeMouseListenerHook(a: any): void;
	}
	export class GuiHook extends ig.Class {
		public pos: any;
		public size: any;
		public pivot: any;
		public scroll: any;
		public align: any;
		public parentHook: any;
		public children: any;
		public mouseRecord: boolean;
		public screenCoords: any;
		public mouseOver: boolean;
		public localAlpha: number;
		public zIndex: number;
		public pauseGui: boolean;
		public invisibleUpdate: boolean;
		public screenBlocking: boolean;
		public stateCallback: any;
		public clip: boolean;
		public temporary: boolean;
		public transitions: any;
		public gui: any;
		public currentState: any;
		public currentStateName: string;
		public anim: any;
		public removeAfterTransition: boolean;
		public posTransition: any;
		public scrollTransition: any;
		public _visible: boolean;
		public _subState: any;
		public mapGuiInfo: any;
		public drawSteps: any;

		public constructor(a: any);

		public init(a: any): void;
		public setMouseRecord(a: any): void;
		public onAttach(a: any): void;
		public onDetach(): void;
		public getChildGuiIndex(a: any): any;
		public getChildGuiByIndex(a: any): any;
		public addChildHook(a: any): void;
		public insertChildHook(a: any, b: any): void;
		public removeChildHook(a: any): void;
		public removeChildHookByIndex(a: any): any;
		public removeAllChildren(): void;
		public doStateTransition(a: any, b: any, c: any, d: any, e: any): void;
		public getStateTransitionProgress(): any;
		public doTempStateTransition(a: any, b: any, c: any, d: any, e: any, f: any, g: any): void;
		public setScale(a: any, b: any): void;
		public _setStateData(a: any, b: any, c: any, d: any, e: any, f: any, g: any): void;
		public doPosTranstition(a: any, b: any, c: any, d: any, e: any, f: any, g: any): void;
		public doScrollTransition(a: any, b: any, c: any, d: any, e: any): void;
		public hasTransition(): any;
		public getTransitionFactor(): any;
		public setStateValue(a: any, b: any, c: any): void;
		public updateState(): any;
	}
	export class GuiDrawable extends ig.Class {
		public pos: any;
		public size: any;
		public src: any;
		public gfxSource: any;
		public gfxType: number;
		public flip: any;
		public alpha: number;
		public compositionMode: string;

		public setPos(a: any, b: any): any;
		public setSize(a: any, b: any): any;
		public setSrc(a: any, b: any): any;
		public setAlpha(a: any): any;
		public setColor(a: any, b: any, c: any, d: any, e: any): any;
		public setCompositionMode(a: any): any;
		public setGfx(a: any, b: any, c: any, d: any, e: any, f: any, g: any, h: any, i: any): any;
		public setGfxTile(a: any, b: any, c: any, d: any, e: any, f: any, g: any, h: any): any;
		public setVideo(a: any, b: any, c: any, d: any, e: any): any;
		public setGameStateDraw(a: any, b: any, c: any): any;
		public setPattern(a: any, b: any, c: any, d: any, e: any, f: any, g: any): any;
		public setText(a: any, b: any, c: any): any;
		public draw(a: any, b: any): void;
		public kill(): void;
		public clear(): void;
	}
	export class GuiTransform extends ig.Class {
		public translate: any;
		public scale: any;
		public rotate: number;
		public pivot: any;
		public alpha: number;
		public clip: any;
		public prePos: any;
		public preAlpha: number;

		public setAlpha(a: any): any;
		public setClip(a: any, b: any): any;
		public setTranslate(a: any, b: any): any;
		public setScale(a: any, b: any): any;
		public setRotate(a: any): any;
		public setPivot(a: any, b: any): any;
		public isComplex(): any;
		public transform(a: any, b: any): void;
		public kill(): void;
		public clear(): void;
	}
	export class GuiStepPool extends ig.Class {
		public get(a: any): any;
		public free(a: any): void;
	}
	export class GuiElementBase extends ig.Class {
		public hook: ig.GuiHook;

		public constructor();

		public init(_usedInChild0: any, _usedInChild1: any, _usedInChild2: any, _usedInChild3: any, _usedInChild4: any, _usedInChild5: any, _usedInChild6: any, _usedInChild7: any, _usedInChild8: any, _usedInChild9: any, _usedInChild10: any, _usedInChild11: any, _usedInChild12: any): void;
		public setPos(a: any, b: any): void;
		public getDestPos(): any;
		public setScroll(a: any, b: any): void;
		public getDestScroll(): any;
		public setSize(a: any, b: any, _usedInChild2: any): void;
		public setPivot(a: any, b: any): void;
		public setAlign(a: any, b: any): void;
		public isVisible(): any;
		public getChildGuiIndex(a: any): any;
		public getChildGuiByIndex(a: any): any;
		public addChildGui(a: any): void;
		public insertChildGui(a: any, b: any): void;
		public removeChildGui(a: any): void;
		public removeChildGuiByIndex(a: any): any;
		public removeAllChildren(): void;
		public update(): void;
		public updateDrawables(_usedInChild0: any): void;
		public remove(a: any): void;
		public hide(_usedInChild0: any, _usedInChild1: any): void;
		public show(_usedInChild0: any, _usedInChild1: any, _usedInChild2: any, _usedInChild3: any, _usedInChild4: any): void;
		public doStateTransition(a: any, b: any, c: any, d: any, e: any): void;
		public doTempStateTransition(a: any, b: any, c: any, d: any, e: any, f: any, g: any): void;
		public doPosTranstition(a: any, b: any, c: any, d: any, e: any, f: any, g: any): void;
		public doScrollTransition(a: any, b: any, c: any, d: any, e: any): void;
		public hasTransition(): any;
		public getTransitionFactor(): any;
		public setStateValue(a: any, b: any, c: any): void;
		public onAttach(): void;
		public onDetach(): void;
		public isMouseOver(): any;
		public onVisibilityChange(b: any): void;
	}
	export class GuiImageContainer extends ig.GuiElementBase {
		public constructor(b: any);

		public init(b: any): void;
	}
	export class GuiImage extends ig.GameAddon {
		public guiImages: any;
		public containerBelowGui: ig.GuiImageContainer;
		public containerOverGui: ig.GuiImageContainer;

		public constructor();

		public init(): void;
		public showImage(b: any, a: any, d: any, c: any, e: any, f: any, g: any): void;
		public moveImage(b: any, a: any, d: any, c: any, e: any): void;
		public removeImage(b: any): void;
		public _createGuiState(b: any): any;
		public onStorageSave(): void;
		public onStoragePreLoad(): void;
		public onReset(): void;
	}
	export class NinePatch extends ig.Class {
		public tile: any;
		public skipTile: any;
		public pattern: any;
		public gfx: ig.Image;

		public constructor(b: any, a: any);

		public init(b: any, a: any): void;
		public initPattern(): void;
		public draw(b: any, a: any, d: any, c: any, e: any, f: any): void;
		public drawComposite(b: any, a: any, d: any, c: any, e: any, f: any, g: any): void;
	}
	export class BoxGui extends ig.GuiElementBase {
		public gfx: ig.Image;
		public ninepatch: ig.NinePatch;
		public currentTileOffset: string;
		public skipTile: any;
		public flipped: boolean;
		public flippedY: boolean;

		public constructor(b: any, a: any, d: any, c: any);

		public init(b: any, a: any, d: any, c: any, _usedInChild4: any): void;
		public setSize(b: any, a: any): void;
		public updateDrawables(b: any): void;
	}
	export class LightHandle extends ig.Class {
		public targetEntity: any;
		public lastPos: any;
		public size: any;
		public fadeIn: number;
		public fadeOut: number;
		public duration: number;
		public maxAlpha: number;
		public glow: boolean;
		public timer: number;
		public offset: any;

		public constructor(a: any, b: any, c: any, e: any, f: any, g: any, h: any);

		public init(a: any, b: any, c: any, e: any, f: any, g: any, h: any): void;
		public setOffset(a: any, b: any, c: any): void;
		public onActionEndDetach(): void;
		public onEntityKillDetach(): void;
		public stop(): void;
		public update(): any;
		public draw(a: any, d: any): void;
	}
	export class DarknessHandle extends ig.Class {
		public useActualTick: boolean;
		public timer: number;
		public temporary: boolean;
		public entity: any;
		public duration: number;
		public fadeIn: number;
		public fadeOut: number;
		public oldIntensity: number;
		public targetIntensity: number;

		public constructor(a: any);

		public init(a: any): void;
		public setIntensity(a: any, b: any): void;
		public setTemporary(a: any, b: any, c: any, e: any, f: any): void;
		public onActionEndDetach(): void;
		public onEntityKillDetach(): void;
		public stop(): void;
		public update(): any;
		public getIntensity(): any;
	}
	export class ScreenFlashHandle extends ig.Class {
		public targetEntity: any;
		public fadeIn: number;
		public fadeOut: number;
		public duration: number;
		public color: any;
		public timer: number;

		public constructor(a: any, b: any, c: any, e: any, f: any);

		public init(a: any, b: any, c: any, e: any, f: any): void;
		public onActionEndDetach(): void;
		public onEntityKillDetach(): void;
		public stop(): void;
		public update(): any;
		public draw(): void;
	}
	export class GlowColor extends ig.Cacheable {
		public cacheType: string;
		public canvas: any;
		public gfx: ig.ImageCanvasWrapper;

		public constructor(a: any);

		public init(a: any): void;
		public getCacheKey(a: any): any;
		public onCacheCleared(): void;
	}
	export class CondLights extends ig.Class {
		public condition: any;
		public lights: any;
		public hasLight: boolean;
		public hasGlow: boolean;
		public isOn: boolean;
		public timer: number;

		public constructor(a: any);

		public init(a: any): void;
		public addLight(a: any, b: any, c: any, e: any): void;
		public update(): void;
		public getAlpha(): any;
		public drawGlow(): void;
		public drawLight(): void;
		public _draw(a: any): void;
	}
	export class Light extends ig.GameAddon {
		public lightCanvas: any;
		public lightContext: any;
		public shadowProviders: any;
		public lightHandles: any;
		public darknessHandles: any;
		public screenFlashHandles: any;
		public hasShadow: boolean;
		public lightMapDarkness: number;
		public lightMapBrightness: number;
		public lightmapGfx: ig.Image;
		public mainGlowColor: ig.GlowColor;
		public condLights: any;
		public condLightList: any;
		public levelLoadStartOrder: number;
		public preDrawOrder: number;
		public midDrawOrder: number;

		public constructor();

		public init(): void;
		public setMainGlowColor(a: any): void;
		public getMainGlowGfx(): any;
		public addDarknessHandle(a: any): void;
		public removeDarknessHandle(a: any): void;
		public addScreenFlashHandle(a: any): void;
		public removeScreenFlashHandle(a: any): void;
		public addCondLight(a: any, b: any, c: any, e: any, f: any): void;
		public addLightHandle(a: any): void;
		public addShadowProvider(a: any): any;
		public removeShadowProvider(a: any): void;
		public onLevelLoadStart(): void;
		public onDeferredUpdate(): void;
		public onPreDraw(): void;
		public onMidDraw(): void;
	}
	export class Clouds extends ig.Class {
		public gfx: ig.Image;
		public currentClouds: any;
		public density: number;
		public vel: any;
		public cloudRange: any;
		public timer: number;
		public maxTime: number;
		public alpha: number;
		public shadowOrder: number;

		public constructor();

		public init(): void;
		public clearClouds(b: any): void;
		public setClouds(b: any, a: any, d: any, c: any): void;
		public spawnCloudLine(b: any): void;
		public addCloud(b: any, a: any, d: any): void;
		public moveClouds(b: any, a: any, d: any, c: any): void;
		public update(): void;
		public drawShadows(): void;
	}
	export class Fog extends ig.Class {
		public patterns: ig.ImagePatternSheet;
		public vel: any;
		public scroll: any;
		public alpha: number;
		public prevAlpha: number;
		public timer: number;
		public shadowOrder: number;
		public zoom: number;

		public constructor();

		public init(): void;
		public clearFog(a: any): void;
		public setFog(a: any, b: any, c: any, e: any): void;
		public update(): void;
		public drawShadows(): void;
	}
	export class RainDropEntity extends ig.AnimatedEntity {
		public animSheet: ig.AnimationSheet;

		public constructor(a: any, b: any, e: any, f: any);

		public init(a: any, b: any, e: any, f: any): void;
		public reset(a: any, b: any, e: any, f: any): void;
		public _initRainDrop(): void;
		public animationEnded(): void;
	}
	export class Rain extends ig.Class {
		public gfx: ig.ImagePatternSheet;
		public strength: any;
		public entries: any;
		public timer: number;
		public dropTimer: number;
		public updateSound: number;
		public currentSound: any;
		public soundHandle: any;

		public constructor();

		public init(): void;
		public setRain(a: any, b: any): void;
		public clearRain(a: any): void;
		public onReset(): void;
		public update(): void;
		public spawnRain(): void;
		public spawnRainDrop(): any;
		public moveRain(): void;
		public draw(): void;
	}
	export class WeatherInstance extends ig.Cacheable {
		public cacheType: string;
		public name: any;
		public config: any;
		public particleSpawners: any;

		public constructor(b: any);

		public init(b: any): void;
		public getCacheKey(b: any): any;
		public onCacheCleared(): void;
	}
	export class Weather extends ig.GameAddon {
		public levelWeather: any;
		public currentWeather: ig.WeatherInstance;
		public clouds: ig.Clouds;
		public fog: ig.Fog;
		public rain: ig.Rain;
		public darknessHandle: ig.DarknessHandle;
		public outside: boolean;
		public lightMapDarkness: any;
		public subOverlay: any;
		public lightMapBrightness: any;
		public extraParticles: any;
		public levelLoadStartOrder: number;
		public levelLoadedOrder: number;
		public deferredUpdateOrder: number;
		public midDrawOrder: number;

		public constructor();

		public init(): void;
		public setWeather(b: any, a: any): void;
		public addExtraParticles(b: any, a: any): void;
		public removeExtraParticles(b: any, a: any): void;
		public onLevelLoadStart(b: any): void;
		public onLevelLoaded(): void;
		public onDeferredUpdate(): void;
		public onMidDraw(): void;
		public onReset(): void;
		public updateWeather(b: any): void;
		public restoreParticles(b: any): void;
	}
	export class PathNode extends ig.Class {
		public id: number;
		public height: number;
		public min: any;
		public max: any;
		public center: any;
		public neighbours: any;
		public airNeighbours: any;
		public airNode: boolean;
		public airConnected: boolean;
		public edges: any;
		public tmpSearchId: number;
		public tmpCameFromNode: any;
		public tmpCameFromPos: any;
		public tmpCameFromNeighbour: any;
		public tmpClosed: boolean;
		public tmpGScore: number;
		public tmpFScore: number;

		public constructor(a: any, b: any, c: any, d: any, e: any, f: any);

		public init(a: any, b: any, c: any, d: any, e: any, f: any): void;
		public erase(a: any, b: any, d: any, f: any): void;
		public isClosed(a: any): any;
		public setClosed(a: any, b: any): void;
		public getCameFromNode(a: any): any;
		public getCameFromNeighbour(a: any): any;
		public getCameFromPos(a: any): any;
		public setCameFrom(a: any, b: any, c: any, e: any): void;
		public getGScore(a: any): any;
		public setGScore(a: any, b: any): void;
		public getFScore(a: any): any;
		public setFScore(a: any, b: any): void;
		public hasGScore(): any;
	}
	export class PathNodeConnect extends ig.Class {
		public edges: any;
		public waypointMin: any;
		public waypointMax: any;
		public maxEdgeLength: number;
		public type: number;
		public jumpInfo: any;
		public reverse: any;
		public externalData: any;
		public searchData: any;

		public constructor(a: any);

		public init(a: any): void;
		public getSearchData(a: any): any;
		public setExternalData(a: any, b: any): void;
	}
	export class Navigation extends ig.GameAddon {
		public tilesize: any;
		public dodgeEntities: any;
		public cachedFailure: any;
		public mapVersion: number;
		public empty: boolean;
		public influencers: any;

		public constructor();

		public init(): void;
		public isTargetReachable(a: any, b: any, d: any, e: any): any;
		public isPathAvailable(a: any, b: any): any;
		public isEntityReached(a: any, b: any): any;
		public isPointReached(b: any, d: any): any;
		public getClosePosition(b: any, d: any, e: any, f: any, h: any, i: any, j: any, k: any, w: any, m: any): any;
		public getDodgePosition(a: any, b: any, e: any, f: any, h: any): any;
		public clearCachedFailures(): void;
		public addCachedFailure(a: any, b: any, c: any): void;
		public isCachedFailure(a: any, b: any, c: any): any;
		public _getCacheKey(a: any, b: any, c: any): any;
		public getNavPath(a: any): any;
		public onLevelLoadStart(): void;
		public onLevelLoaded(): void;
		public connectAirNodes(): void;
		public getNavBlock(a: any): any;
		public registerInfluencer(a: any): void;
		public applyInfluencers(): void;
		public getNodeConnection(b: any, c: any, d: any): any;
	}
	export class NavBlocker extends ig.Class {
		public entity: any;
		public pos: any;
		public size: any;
		public blockType: number;

		public constructor(a: any, b: any);

		public init(a: any, b: any): void;
		public update(a: any): void;
		public embedInNavMap(): void;
		public removeFromNavMap(): void;
		public remove(): void;
	}
	export class NavPath extends ig.Class {
		public mapVersion: number;
		public searcher: any;
		public startRelativeVel: number;
		public targetEntity: any;
		public targetPos: any;
		public retargetPos: any;
		public retargetNode: any;
		public maxDistance: number;
		public precise: boolean;
		public options: any;
		public path: any;
		public pathIdx: any;
		public pathLength: number;
		public nextNodeData: any;
		public overNodePass: boolean;
		public pathComplete: boolean;
		public triedNodePassChange: boolean;
		public triedRandom: any;
		public doBackUp: boolean;
		public triedBackUp: any;
		public avoidTarget: any;
		public avoidTarget2: any;
		public firstMovement: boolean;
		public targetDir: any;
		public targetDist: number;
		public failCount: number;
		public wrongNodeTimer: number;
		public lastSideWayDir: any;

		public constructor(a: any);

		public init(a: any): void;
		public toEntity(a: any, b: any, c: any, d: any): void;
		public toPoint(a: any, b: any, c: any): void;
		public redoPathDeferred(): void;
		public sideways(a: any, b: any, d: any, e: any, f: any, g: any, h: any, i: any): void;
		public dodge(a: any, b: any, c: any): void;
		public runAway(a: any, b: any, d: any): void;
		public runToFace(a: any, b: any, e: any, f: any, h: any): any;
		public _moveCircle(a: any, b: any, c: any, e: any, f: any, h: any, i: any, j: any, k: any): any;
		public getDistance(): any;
		public getJumpCount(): any;
		public isDestReachable(): any;
		public redoPath(b: any, d: any): void;
		public interrupt(): void;
		public isCurrentNodeInvalid(): any;
		public moveEntity(): any;
		public avoidEntities(): any;
		public runPath(): void;
		public selectNextTargetPos(): void;
	}
	export class MapStyle extends ig.GameAddon {
		public currentStyle: any;
		public _wmLoad: boolean;
		public levelLoadStartOrder: number;

		public constructor();

		public init(): void;
		public get(b: any): any;
		public onLevelLoadStart(b: any): void;
	}
	export class DoorMat extends ig.AnimatedEntity {
		public dir: string;
		public isActive: boolean;

		public constructor(a: any, b: any, c: any, e: any);

		public init(a: any, b: any, c: any, e: any): void;
		public setActive(a: any): void;
	}
	export class PropSheet extends ig.JsonLoadable {
		public cacheType: string;
		public props: any;

		public onCacheCleared(): void;
		public getJsonPath(): any;
		public onload(b: any): void;
		public handlePropEntry(b: any): void;
		public getProp(b: any): any;
	}
	export class ScalePropSheet extends ig.JsonLoadable {
		public cacheType: string;
		public entries: any;

		public onCacheCleared(): void;
		public getJsonPath(): any;
		public onload(a: any): void;
		public getScalableProp(a: any): any;
	}
	export class MapImageManager extends ig.GameAddon {
		public images: any;

		public constructor();

		public init(): void;
		public showMapImage(b: any, a: any): void;
		public removeMapImage(b: any): void;
	}
	export class MapImageEntity extends ig.AnimatedEntity {
		public img: any;
		public _wm: ig.Config;

		public constructor(b: any, a: any, d: any, c: any);

		public init(b: any, a: any, d: any, c: any): void;
		public remove(): void;
		public initSprites(): void;
		public updateSprites(): void;
	}
	export class OverlayGui extends ig.GuiElementBase {
		public color: any;
		public lighter: boolean;

		public constructor();

		public init(): void;
		public updateDrawables(b: any): void;
	}
	export class AlphaTransitionHandler extends ig.Class {
		public timer: ig.WeightTimer;
		public startAlpha: number;
		public targetAlpha: number;
		public blinkAlpha: any;

		public constructor();

		public init(): void;
		public update(): any;
		public getAlpha(): any;
		public set(b: any, a: any, d: any): void;
	}
	export class OverlayCornerGui extends ig.GuiElementBase {
		public gfx: any;
		public alphaHandler: ig.AlphaTransitionHandler;

		public constructor(b: any);

		public init(b: any): void;
		public update(): void;
		public updateDrawables(b: any): void;
		public setAlpha(b: any, a: any, d: any): void;
	}
	export class Overlay extends ig.GameAddon {
		public colorOld: any;
		public colorNew: any;
		public lighter: boolean;
		public timer: number;
		public max: number;
		public gfx: any;
		public colorGui: ig.OverlayGui;
		public cornerGui: any;
		public deferredUpdateOrder: number;

		public constructor();

		public init(): void;
		public onDeferredUpdate(): void;
		public onReset(): void;
		public setColor(b: any, a: any, d: any, c: any, e: any, f: any, g: any): void;
		public setAlpha(b: any, a: any): void;
		public setCorner(b: any, a: any, d: any, c: any): void;
		public _getCurrentColor(): any;
	}
	export class DreamAssets extends ig.Class {
		public shadowGfx: ig.Image;
		public sideGfx: ig.Image;
		public edgeGfx: ig.Image;
		public dotGfx: ig.Image;

		public constructor();

		public init(): void;
		public clone(): any;
		public clearCached(): void;
	}
	export class DreamCircleShadowGui extends ig.GuiElementBase {
		public assets: any;
		public centerColor: any;
		public borderColor: any;
		public colorTimer: number;
		public colorDuration: number;
		public circleSize: any;
		public wobbleTimer: number;
		public transitions: any;

		public constructor();

		public init(): void;
		public setColors(a: any, b: any, c: any): void;
		public _getCurrentColor(a: any, b: any): any;
		public _getCurrentSize(): any;
		public setCircleSize(a: any, b: any): void;
		public update(): void;
		public updateDrawables(a: any): void;
	}
	export class DreamSideGui extends ig.GuiElementBase {
		public assets: any;
		public particles: any;
		public spawnTimer: number;
		public lastRight: boolean;
		public rng: any;
		public transitions: any;

		public constructor();

		public init(): void;
		public update(): void;
		public updateDrawables(a: any): void;
		public spawnParticle(): void;
	}
	export class DreamDotGui extends ig.GuiElementBase {
		public assets: any;
		public particles: any;
		public spawnTimer: number;
		public rng: ig.UniformRNG;
		public rotate: number;
		public transitions: any;

		public constructor();

		public init(): void;
		public update(): void;
		public updateDrawables(a: any): void;
		public spawnParticle(): void;
	}
	export class DreamFx extends ig.GameAddon {
		public assets: any;
		public circleShadowGui: ig.DreamCircleShadowGui;
		public sideGui: ig.DreamSideGui;
		public dotGui: ig.DreamDotGui;

		public constructor();

		public init(): void;
		public onReset(): void;
		public start(a: any, b: any): void;
		public clear(): void;
		public setColors(a: any, b: any, c: any): void;
		public setCircleSize(a: any, b: any): void;
		public isActive(): any;
	}
	export class ImageGui extends ig.GuiElementBase {
		public image: any;
		public offsetX: number;
		public offsetY: number;
		public renderMode: any;
		public flipX: boolean;
		public flipY: boolean;
		public pivotOverride: boolean;
		public frames: any;
		public xCount: number;
		public frameTime: number;
		public timer: number;
		public loop: boolean;
		public stopped: boolean;

		public constructor(b: any, a: any, d: any, c: any, e: any);

		public init(b: any, a: any, d: any, c: any, e: any): void;
		public setImage(b: any, a: any, d: any, c: any, e: any): void;
		public setAnimation(b: any, a: any, d: any, c: any): void;
		public restartAnimation(): void;
		public onLoadableComplete(): void;
		public update(): void;
		public updateDrawables(b: any): void;
	}
	export class ColorGui extends ig.GuiElementBase {
		public color: any;
		public renderMode: any;

		public constructor(b: any, a: any, d: any);

		public init(b: any, a: any, d: any): void;
		public updateDrawables(b: any): void;
	}
	export class SequenceGui extends ig.GuiElementBase {
		public timer: any;
		public timeLineIndex: number;
		public gfx: any;
		public gui: any;
		public timeLine: any;
		public reachedLabels: any;
		public currentSkipLabel: any;

		public constructor(b: any);

		public init(b: any, _usedInChild1: any): void;
		public initTimeLine(b: any, a: any, d: any): void;
		public update(): void;
		public _setLabelReached(b: any): void;
		public start(_usedInChild0: any): void;
		public end(): void;
		public notifyCallback(b: any, a: any): void;
		public skip(): void;
		public jumpTo(b: any): void;
		public hasEnded(): any;
		public isLabelReached(b: any): any;
	}
	export class SimpleGui extends ig.GuiElementBase {
		public hide(b: any, a: any): void;
		public show(b: any, a: any): void;
	}
	export class Parallax extends ig.JsonLoadable {
		public cacheType: string;
		public gfx: any;
		public gui: any;
		public timeLine: any;
		public cancelSkip: boolean;
		public skipBlock: boolean;

		public constructor(b: any);

		public init(b: any): void;
		public onCacheCleared(): void;
		public getJsonPath(): any;
		public onload(b: any): void;
		public _convertEntries(b: any, a: any): void;
		public _convertSequence(b: any): void;
		public _copyStateValues(b: any, a: any): void;
	}
	export class ParallaxGui extends ig.SequenceGui {
		public parallax: ig.Parallax;
		public keepOnEnd: boolean;
		public _wm: ig.Config;
		public transitions: any;

		public constructor(b: any, a: any);

		public init(b: any, a: any): void;
		public clearCached(): void;
		public onLoadableComplete(): void;
		public onAttach(): void;
		public start(b: any): void;
		public end(): void;
	}
	export class ScreenBlur extends ig.GameAddon {
		public buffer: any;
		public context: any;
		public backBuffer: any;
		public backContext: any;
		public systemBuffer: any;
		public systemContext: any;
		public minAlpha: number;
		public maxAlpha: number;
		public repeatTimer: number;
		public repeatCycle: number;
		public firstDraw: boolean;
		public timer: ig.WeightTimer;
		public zooms: any;
		public namedZooms: any;
		public preDrawOrder: number;
		public postDrawOrder: number;

		public constructor();

		public init(): void;
		public setAlpha(a: any): void;
		public clear(): void;
		public clearZooms(): void;
		public addZoom(a: any): void;
		public fadeOutZoom(a: any, b: any): void;
		public onPostUpdate(): void;
		public onPreDraw(): void;
		public onPostDraw(): void;
		public onReset(): void;
		public _getAlpha(): any;
	}
	export class ZoomBlurHandle extends ig.Class {
		public name: any;
		public config: any;
		public alphaStep: number;
		public fullTimer: ig.WeightTimer;
		public repeatTimer: ig.WeightTimer;
		public fadeInTime: number;
		public duration: number;
		public fadeOutTime: number;
		public target: any;
		public state: number;

		public constructor(a: any, b: any, c: any, e: any, f: any, g: any);

		public init(a: any, b: any, c: any, e: any, f: any, g: any): void;
		public update(): any;
		public onActionEndDetach(): void;
		public setFadeOut(a: any): void;
		public draw(a: any, d: any, c: any, e: any, f: any): void;
	}
	export class Terrain extends ig.SingleLoadable {
		public cacheType: string;
		public idToName: any;
		public nameToId: any;
		public tilesetIds: any;
		public dangerTerrains: any;
		public fallTerrain: any;

		public constructor();

		public init(): any;
		public registerDangerTerrain(a: any, b: any): void;
		public isDangerTerrain(a: any): any;
		public isFallTerrain(a: any): any;
		public getTerrain(a: any, d: any, c: any): any;
		public getPointTerrain(a: any, b: any, c: any, e: any, f: any): any;
		public getMapTerrain(a: any, b: any, c: any, e: any, f: any): any;
		public _checkMaps(a: any, b: any, c: any): any;
		public getTerrainOfMapTile(a: any, b: any): any;
		public loadInternal(): void;
		public onerror(): void;
		public onload(a: any): void;
	}
	export class InteractEntry extends ig.Class {
		public isActive(): any;
		public onConnect(): void;
		public onDisconnect(): void;
		public update(): void;
	}
	export class InteractManager extends ig.GameAddon {
		public blockTimer: number;
		public entries: any;
		public deferredUpdateOrder: number;

		public constructor();

		public init(): void;
		public addEntry(b: any): void;
		public removeEntry(b: any): void;
		public setBlockDelay(b: any): void;
		public isBlocked(): any;
		public onDeferredUpdate(): any;
	}
	export class ButtonGroup extends ig.Class {
		public buttonInteract: any;
		public elements: any;
		public selectionCallbacks: any;
		public pressCallbacks: any;
		public mouseFocusLostCallback: any;
		public backButton: any;
		public current: any;
		public regain: any;
		public largestIndex: any;
		public loopButtons: boolean;
		public soundsOnPressed: boolean;
		public enableMultiPressed: boolean;
		public ignoreActiveFocus: boolean;
		public selectionType: any;
		public _lastInvokedPress: any;
		public _isParallel: boolean;
		public sounds: any;

		public constructor(b: any, a: any, d: any);

		public init(b: any, a: any, d: any): void;
		public addFocusGui(b: any, a: any, d: any, c: any): void;
		public fillEmptySpace(): void;
		public insertFocusGui(b: any, a: any, d: any): void;
		public removeFocusGui(b: any, a: any): any;
		public addNull(b: any, a: any): void;
		public makeEmptyGrid(b: any, a: any): void;
		public invokeCurrentButton(): void;
		public invokeBackButton(): void;
		public setMouseFocusLostCallback(b: any): void;
		public addPressCallback(b: any): void;
		public removePressCallback(b: any): void;
		public addSelectionCallback(b: any): void;
		public removeSelectionCallback(b: any): void;
		public clearSelectionCallbacks(): void;
		public stepRight(): void;
		public stepLeft(): void;
		public stepDown(b: any): void;
		public stepUp(b: any): void;
		public _activate(): void;
		public _deactivate(): void;
		public clear(): void;
		public doButtonTraversal(_usedInChild0: any): void;
		public getCurrentElement(): any;
		public isNonMouseMenuInput(): any;
		public isEmpty(): any;
		public isPositionValid(b: any, a: any): any;
		public isActive(): any;
		public setLastInvokedButton(b: any): void;
		public setMouseOverGui(): void;
		public setCurrentFocus(b: any, a: any): void;
		public setRegainFocus(b: any, a: any): void;
		public focusCurrentButtonX(b: any): void;
		public focusCurrentButtonY(b: any): void;
		public focusCurrentButton(b: any, a: any, d: any, c: any, e: any, f: any): void;
		public regainFocusOnKeyboard(b: any): void;
		public unfocusCurrentButton(): void;
		public getCurrentX(): any;
		public getCurrentY(): any;
		public setPressedFocusGui(b: any): void;
		public _setBackButton(b: any): void;
		public _invokeSelectionCallbacks(b: any): void;
		public _invokePressCallbacks(b: any, a: any): void;
	}
	export class ButtonInteractEntry extends ig.InteractEntry {
		public buttonGroupStack: any;
		public parallelGroups: any;
		public globalButtons: any;
		public hotkeyCallbacks: any;
		public mouseOverGui: any;
		public mouseOverGuiClickPre: boolean;
		public mouseIsOver: boolean;

		public pushButtonGroup(b: any): void;
		public removeButtonGroup(b: any): void;
		public addGlobalButton(b: any, a: any, d: any): void;
		public removeGlobalButton(b: any): void;
		public addParallelGroup(b: any): void;
		public removeParallelGroup(b: any): void;
		public clearAllButtons(): void;
		public pause(b: any): void;
		public onConnect(): void;
		public onDisconnect(): void;
		public clearMouseOverFocus(): void;
		public update(): void;
		public setMouseOverGui(b: any): void;
		public getTopButtonGroup(): any;
		public _invokeMouseFocusLostCallbacks(): void;
	}
	export class PressRepeater extends ig.Class {
		public currentPressed: any;
		public lastPressed: any;
		public timer: number;
		public firstDelay: number;
		public repeatDelay: number;

		public constructor(b: any, a: any);

		public init(b: any, a: any): void;
		public setDown(b: any): void;
		public getPressed(): any;
	}
	export class FocusGui extends ig.GuiElementBase {
		public focus: boolean;
		public buttonGroup: any;
		public buttonInteract: any;
		public active: boolean;
		public keepPressed: boolean;
		public pressed: boolean;
		public keepMouseFocus: boolean;

		public constructor(b: any, a: any);

		public init(b: any, a: any, _usedInChild2: any, _usedInChild3: any, _usedInChild4: any, _usedInChild5: any, _usedInChild6: any, _usedInChild7: any, _usedInChild8: any, _usedInChild9: any, _usedInChild10: any, _usedInChild11: any, _usedInChild12: any): void;
		public onMouseInteract(b: any, _usedInChild1: any): void;
		public focusGained(_usedInChild0: any): void;
		public focusLost(): void;
		public invokeButtonPress(_usedInChild0: any): void;
		public onButtonPress(): void;
		public canPlayFocusSounds(): any;
		public canLeaveFocus(): any;
		public setPressed(b: any): void;
		public setActive(b: any): void;
		public isSameAs(b: any): any;
	}
	export class EnvParticleSpawner extends ig.Cacheable {
		public cacheType: string;
		public name: any;
		public animSheet: ig.AnimationSheet;
		public config: any;
		public levels: any;

		public constructor(a: any);

		public init(a: any): void;
		public getCacheKey(a: any): any;
		public onCacheCleared(): void;
		public _initLevels(): void;
		public setQuantity(a: any, b: any): void;
		public update(): any;
		public spawnParticle(a: any): void;
		public updateParticles(b: any, c: any): void;
		public draw(): void;
		public drawLevel(a: any): void;
	}
	export class EnvParticles extends ig.GameAddon {
		public activeSpawners: any;
		public width: number;
		public height: number;
		public deferredUpdateOrder: number;
		public midDrawOrder: number;

		public constructor();

		public init(): void;
		public addSpawner(a: any, b: any, e: any): void;
		public clear(a: any): void;
		public onDeferredUpdate(): void;
		public onMidDraw(): void;
	}
	export class MapSoundEntry extends ig.Class {
		public name: any;
		public loopSounds: any;
		public segments: any;
		public loopHandles: any;
		public currentSegment: any;
		public currentEntry: number;
		public timer: number;

		public constructor(b: any);

		public init(b: any): void;
		public clearCached(): void;
		public start(): void;
		public update(): void;
		public stop(): void;
		public _createSegment(b: any): any;
		public _selectSegment(): void;
	}
	export class MapSounds extends ig.GameAddon {
		public mapEntry: any;
		public currentEntry: any;
		public levelLoadStartOrder: number;
		public levelLoadedOrder: number;
		public deferredUpdateOrder: number;

		public constructor();

		public init(): void;
		public setEntry(b: any): void;
		public onReset(): void;
		public onLevelLoadStart(b: any): void;
		public onLevelLoaded(): void;
		public onDeferredUpdate(): void;
	}
	export class Video extends ig.Loadable {
		public cacheType: string;
		public video: any;
		public onEndCallback: any;
		public _fadeTimer: number;
		public _fadeMaxTime: number;
		public _lastTime: number;
		public _fadeHandle: any;

		public constructor(a: any);

		public init(a: any): void;
		public loadInternal(): void;
		public onload(): void;
		public onerror(a: any): void;
		public play(a: any): void;
		public pause(): void;
		public reset(): void;
		public fadeOutAudio(a: any): void;
		public _fadeAudioCallback(): void;
		public draw(a: any, b: any, c: any, e: any): void;
		public _onVideoEnded(): void;
	}
	export class VideoGui extends ig.GuiElementBase {
		public video: any;
		public playing: boolean;

		public constructor(b: any, a: any, d: any);

		public init(b: any, a: any, d: any): void;
		public play(b: any): void;
		public pause(): void;
		public reset(): void;
		public updateDrawables(b: any): void;
	}
	export class VideoPlayerGui extends ig.GuiElementBase {
		public videoGui: ig.VideoGui;
		public transitions: any;
		public onEndCallback: any;
		public screenInteract: sc.ScreenInteractEntry;

		public constructor(b: any, a: any, d: any);

		public init(b: any, a: any, d: any): void;
		public start(b: any): void;
		public _startVideo(): void;
		public _stopVideo(): void;
		public onInteraction(): void;
		public _onEnd(): void;
		public updateDrawables(b: any): void;
	}
	export class Influencer extends ig.Class {
		public entity: any;
		public entries: any;
		public callbacks: any;

		public constructor(a: any);

		public init(a: any): void;
		public hasPush(): any;
		public addInfluence(a: any): void;
		public removeInfluence(a: any): void;
		public removeActionInfluences(): void;
		public updateCallbacks(): void;
		public onUpdate(): void;
		public updateInfluencerState(a: any): void;
		public onPostSpriteUpdate(): void;
	}
	export class InfluenceEntry extends ig.Class {
		public fadeTimer: ig.WeightTimer;
		public timeScale: number;
		public slowmoScale: number;
		public logicTimeScale: number;
		public moveXYScale: number;
		public groundSinkZ: number;
		public updateInfluencer: any;
		public state: any;
		public push: any;

		public constructor();

		public init(): void;
		public setPushType(a: any, b: any, d: any, g: any): void;
		public setPushEntityCenter(a: any): void;
		public setPushCenter(a: any): void;
		public getPush(b: any, d: any): any;
		public setFadeOut(a: any): void;
		public getFactor(): any;
	}
	export class InfluenceConnection extends ig.Class {
		public constructor(a: any, b: any);

		public init(a: any, b: any): void;
		public updateImmediately(): void;
		public clear(): void;
		public onActionEndDetach(): void;
	}
	export class Greenworks extends ig.GameAddon {
		public greenworks: any;
		public steps: any;

		public constructor();

		public init(): void;
		public isActive(): any;
		public hasSteamStartArgument(): any;
		public activateAchievement(b: any, a: any): void;
		public clearAchievement(b: any): void;
	}
	export class BurstSpawnerEntity extends ig.Entity {
		public combatant: any;
		public target: any;
		public attack: any;
		public moveSpeed: number;
		public spawnCount: number;
		public spawnInterval: number;
		public effect: any;
		public damageDelay: number;
		public radius: number;
		public zHeight: number;
		public steerDegree: number;
		public adjustTime: number;
		public timer: number;
		public spawnList: any;
		public isThreat: boolean;

		public constructor(b: any, a: any, d: any, c: any);

		public init(b: any, a: any, d: any, c: any): void;
		public getCombatant(): any;
		public handleMovementTrace(b: any): void;
		public update(): void;
		public startSpawn(): void;
		public updateSpawn(b: any): any;
	}
	export class MessageOverlayGui extends ig.GuiElementBase {
		public transitions: any;
		public messageArea: ig.MessageAreaGui;
		public privateMsgBg: sc.PrivateMessageBGGui;
		public topBar: ig.MessageOverlayGui.BlackBar;
		public bottomBar: ig.MessageOverlayGui.BlackBar;
		public bottomShadow: any;

		public constructor();

		public init(): void;
		public modelChanged(a: any, b: any, c: any): void;
		public onPostMenuMode(): void;
	}
	export class MessageAreaGui extends ig.GuiElementBase {
		public transitions: any;
		public clickToContinue: boolean;
		public entries: any;
		public portraits: any;
		public boardMsg: sc.MsgBoardGui;
		public leftOffEntry: ig.MessageOverlayGui.Entry;
		public rightOffEntry: ig.MessageOverlayGui.Entry;
		public messages: any;
		public choiceGui: sc.ChoiceBoxGui;
		public bottomShadow: ig.MessageOverlayGui.BottomShadow;
		public PORTRAIT_GAP: number;
		public MESSAGE_GAP: number;

		public constructor();

		public init(): void;
		public update(): void;
		public modelChanged(a: any, d: any, c: any): void;
		public onTextFinished(): void;
		public clearMessages(): void;
		public skip(): void;
		public _reorderPortraits(a: any): any;
		public _pushVisibleDisplayName(a: any): void;
	}
	export class QuickSand extends ig.Class {
		public influence: ig.InfluenceEntry;
		public timer: number;
		public teleportDelay: number;
		public effects: any;

		public constructor();

		public init(): void;
		public onUpdate(b: any, a: any): void;
		public endQuicksand(b: any, a: any): void;
	}
	export class Spiderweb extends ig.Class {
		public influence: ig.InfluenceEntry;
		public timer: number;
		public effects: any;

		public constructor();

		public init(): void;
		public onUpdate(b: any, a: any): void;
		public endSpiderweb(b: any, a: any): void;
	}
	export class LangEdit extends ig.GameAddon {
		public mapEntries: any;
		public recentEntries: any;
		public maskVisible: boolean;
		public mask: any;
		public form: any;
		public panels: any;
		public userName: any;
		public userpassword: any;
		public mapEntryList: any;
		public saveLabel: any;
		public errorLabel: any;
		public levelLoadStartOrder: any;

		public constructor();

		public init(): void;
		public submitCustomFile(b: any, a: any, d: any, c: any): void;
		public submitMap(b: any, a: any): void;
		public submitRecent(b: any, a: any): void;
		public isWhatRecent(b: any): any;
		public toggleMask(): void;
		public showMask(): void;
		public closeMask(): void;
		public _createMask(): void;
		public _createEntryList(b: any): any;
		public _resetEntryList(b: any): void;
		public _onUserSubmit(): void;
		public _updateUserText(): void;
		public _submit(): void;
		public _saveResponse(b: any): void;
		public onLevelLoadStart(): void;
	}

	type InjectExtendBody<T> = {
		[K in keyof T]?: T[K] extends (...args: infer A) => infer R ? (this: T & {parent(...args: A): R}, ...args: A) => R : T[K];
	}
	export class Class {

		public static inject<T>(this: new (...args: any) => T, body: InjectExtendBody<T>): unknown;
		public static extend<T, P>(this: new (...args: any) => T, body: InjectExtendBody<T>): T extends { init(...args: infer P): any } ? {new (...args: P): T} : {new (): T};
	}
	export class ActionStepBase extends ig.StepBase {
	}
	export class EventStepBase extends ig.StepBase {
	}
	export class Sound extends ig.SoundWebAudio {
	}
	export class PROP_INTERACT_CLASS extends sc.PropInteract {
	}
	export class Track extends ig.TrackWebAudio {
	}
	export class RGBColor {
		public r: number;
		public g: number;
		public b: number;
		public ok: boolean;

		public constructor(color: any);

		public toRGB(): string;
		public toHex(): string;
		public assign(color: any): void;
		public addColor(color: any, strenght: any): void;
	}
}
declare namespace sc {
	export namespace Slider {
		export class Thumb extends ig.GuiElementBase {
			public updateDrawables(a: any): void;
		}
	}
	export namespace ScrollPane {
		export class Container extends ig.GuiElementBase {
			public scrollIndex: number;

			public constructor();

			public init(): void;
			public getContentWidth(): any;
			public getContentHeight(): any;
		}
	}
	export namespace BALL_BEHAVIOR {
		export class FOLLOW_TARGET extends sc.BallBehavior {
			public steerDegree: number;
			public adjustTime: number;
			public _wm: ig.Config;

			public constructor(a: any);

			public init(a: any): void;
			public onUpdate(a: any): void;
		}
		export class CLOSE_SELF_DESTRUCT extends sc.BallBehavior {
			public distance: number;
			public _wm: ig.Config;

			public constructor(a: any);

			public init(a: any): void;
			public onUpdate(a: any): void;
		}
		export class WIRL_SIDEWAYS extends sc.BallBehavior {
			public relWirl: number;
			public wirlTime: number;
			public delay: number;
			public _wm: ig.Config;

			public constructor(a: any);

			public init(a: any): void;
			public onUpdate(a: any): void;
		}
		export class SLOW_DOWN extends sc.BallBehavior {
			public speedFactor: number;
			public startWait: number;
			public fadeOut: number;
			public fadeOutVary: number;
			public pause: number;
			public fadeIn: number;
			public _wm: ig.Config;

			public constructor(a: any);

			public init(a: any): void;
			public onInit(a: any): void;
			public onUpdate(a: any): void;
		}
	}
	export namespace PROXY_TYPE {
		export class BALL extends sc.ProxySpawnerBase {
			public data: any;
			public _wm: ig.Config;

			public constructor(a: any);

			public init(a: any): void;
			public getSize(a: any): any;
			public clearCached(): void;
			public spawn(a: any, b: any, c: any, d: any, i: any): any;
		}
		export class STONE extends sc.ProxySpawnerBase {
			public data: any;
			public _wm: ig.Config;

			public constructor(a: any);

			public init(a: any): void;
			public getSize(a: any): any;
			public clearCached(): void;
			public spawn(a: any, b: any, c: any, e: any, f: any): any;
		}
		export class GENERIC extends sc.ProxySpawnerBase {
			public data: any;
			public _wm: ig.Config;

			public constructor(a: any);

			public init(a: any): void;
			public clearCached(): void;
			public getSize(a: any): any;
			public spawn(a: any, b: any, d: any, g: any, h: any): any;
		}
	}
	export namespace MainMenu {
		export class TopBar extends ig.GuiElementBase {
			public hotkeys: any;
			public transitions: any;
			public _lateHotKeys: boolean;
			public _hotkeyTimer: number;
			public _hotkeyTime: number;

			public constructor(a: any);

			public init(a: any): void;
			public update(): void;
			public enterMenu(): void;
			public exitMenu(): void;
			public cleanChildren(): void;
			public _addHotKeyButtons(): void;
			public _positionHotKeys(a: any, b: any): void;
			public hideHotkeys(): void;
			public addHotkeysToTopBar(a: any): void;
			public updateHotkeys(a: any): void;
		}
		export class CurrentMenuDisplay extends ig.GuiElementBase {
			public boxes: any;

			public constructor();

			public init(): void;
			public reset(): void;
			public hideDisplay(): void;
			public pushMenuDisplay(a: any): void;
			public popMenuDisplay(): void;
			public modelChanged(a: any, b: any): void;
		}
		export class SubMenuBox extends ig.BoxGui {
			public ninepatch: ig.NinePatch;
			public transitions: any;
			public text: sc.TextGui;

			public constructor(a: any);

			public init(a: any): void;
		}
		export class StatusLine extends ig.GuiElementBase {
			public slope: sc.SlopeLine;
			public line: ig.ColorGui;

			public constructor();

			public init(): void;
			public showLine(a: any): void;
			public hideLine(): void;
			public hideLineFade(): void;
		}
		export class LeaLarge extends ig.GuiElementBase {
			public gfx: ig.Image;
			public skinGfx: any;
			public transitions: any;

			public constructor();

			public init(): void;
			public updateDrawables(a: any): void;
		}
		export class LeaSmall extends ig.GuiElementBase {
			public gfx: ig.Image;
			public skinGfx: any;
			public transitions: any;

			public constructor();

			public init(): void;
			public updateDrawables(a: any): void;
		}
		export class Lea extends ig.GuiElementBase {
			public transitions: any;
			public large: sc.MainMenu.LeaLarge;
			public small: sc.MainMenu.LeaSmall;

			public constructor();

			public init(): void;
			public moveLea(a: any, b: any, e: any, f: any): void;
			public hideLea(): void;
			public reset(): void;
			public fadeToSmall(): void;
			public fadeToLarge(): void;
			public isSmall(): any;
			public modelChanged(a: any, b: any, e: any): void;
		}
		export class SmallRhombus extends ig.GuiElementBase {
			public gfx: ig.Image;
			public transitions: any;

			public constructor();

			public init(): void;
			public updateDrawables(a: any): void;
		}
	}
	export namespace StartMenu {
		export class LargeRhombus extends ig.GuiElementBase {
			public gfx: ig.Image;
			public transitions: any;

			public constructor();

			public init(): void;
			public updateDrawables(a: any): void;
		}
	}
	export namespace ParamHudGui {
		export class Pie extends ig.GuiElementBase {
			public gfx: ig.Image;
			public param: string;
			public offsetX: number;
			public offsetY: number;
			public _timer: number;
			public _targetValue: number;
			public _startValue: number;

			public constructor(b: any);

			public init(b: any): void;
			public update(): void;
			public updateDrawables(b: any): void;
			public _getCurrentValue(): any;
			public _calcOffset(b: any): void;
			public modelChanged(b: any, a: any): void;
		}
		export class Param extends ig.BoxGui {
			public ninepatch: ig.NinePatch;
			public transitions: any;
			public _pie: ig.ImageGui;
			public _text: sc.TextGui;
			public _number: sc.NumberGui;
			public _param: string;

			public constructor(b: any, a: any, d: any, c: any, e: any);

			public init(b: any, a: any, d: any, c: any, e: any): void;
			public _setNumber(b: any): void;
			public modelChanged(b: any, a: any): void;
		}
		export class Level extends ig.BoxGui {
			public ninepatch: ig.NinePatch;
			public transitions: any;
			public _text: sc.TextGui;
			public _level: sc.NumberGui;

			public constructor();

			public init(): void;
			public modelChanged(b: any, a: any): void;
		}
	}
	export namespace SubTaskEntry {
		export class COLLECT extends sc.SubTaskEntryBase {
			public gfx: ig.Image;
			public numberGui: sc.NumberGui;
			public maxNumberGui: sc.NumberGui;
			public _done: boolean;

			public constructor(b: any, a: any, d: any, c: any);

			public init(b: any, a: any, d: any, c: any): void;
			public updateDrawables(b: any): void;
			public onSubTaskChange(): void;
			public createUI(): void;
		}
		export class LANDMARK extends sc.SubTaskEntryBase {
			public gfx: ig.Image;
			public numberGui: sc.NumberGui;
			public maxNumberGui: sc.NumberGui;
			public _done: boolean;

			public constructor(b: any, a: any, d: any, c: any);

			public init(b: any, a: any, d: any, c: any): void;
			public updateDrawables(b: any): void;
			public onSubTaskChange(): void;
			public createUI(): void;
		}
		export class KILL extends sc.SubTaskEntryBase {
			public gfx: ig.Image;
			public numberGui: sc.NumberGui;
			public maxNumberGui: sc.NumberGui;

			public constructor(b: any, a: any, d: any, c: any);

			public init(b: any, a: any, d: any, c: any): void;
			public updateDrawables(b: any): void;
			public onSubTaskChange(): void;
			public createUI(): void;
		}
		export class CONDITION extends sc.SubTaskEntryBase {
			public constructor(b: any, a: any, d: any, c: any);

			public init(b: any, a: any, d: any, c: any): void;
			public onSubTaskChange(): void;
		}
		export class QUEST extends sc.SubTaskEntryBase {
			public constructor(b: any, a: any, d: any, c: any);

			public init(b: any, a: any, d: any, c: any): void;
			public onSubTaskChange(): void;
		}
	}
	export namespace TitlePresetMenu {
		export class SaLoButton extends ig.FocusGui {
			public transitions: any;
			public ninepatch: ig.NinePatch;
			public level: sc.NumberGui;
			public location: sc.TextGui;
			public mainText: sc.TextGui;
			public position: any;
			public slot: any;

			public constructor(b: any, a: any);

			public init(b: any, a: any): void;
			public focusGained(): void;
			public updateDrawables(b: any): void;
		}
	}
	export namespace DebugSaveLoadPanel {
		export class SaLoButton extends ig.FocusGui {
			public transitions: any;
			public ninepatch: ig.NinePatch;
			public level: sc.NumberGui;
			public location: sc.TextGui;
			public playtime: sc.TextGui;
			public position: any;
			public slot: any;
			public deleteMode: boolean;

			public constructor(a: any, d: any);

			public init(a: any, d: any): void;
			public focusGained(): void;
			public updateDrawables(a: any): void;
			public saved(): void;
			public updateInfo(): void;
			public _getVersionText(a: any): any;
		}
	}
	export namespace SUB_HP_EDITOR {
		export class BOSS extends sc.BigHpBar {
			public labelGui: sc.TextGui;
			public listed: boolean;
			public barOrder: number;

			public constructor(a: any);

			public init(a: any): void;
			public initWithParams(): void;
			public update(): void;
			public onDetach(): void;
			public updatePlacement(a: any, b: any): void;
		}
		export class PVP extends sc.BigHpBar {
			public heads: ig.Image;
			public spBGPatch: ig.NinePatch;

			public constructor(a: any);

			public init(a: any): void;
			public updateDrawables(a: any): void;
		}
	}
	export namespace EquipBodyPartContainer {
		export class Entry extends ig.GuiElementBase {
			public numberGfx: ig.Image;
			public text: sc.TextGui;
			public button: sc.BodyPartButton;
			public defaultPosition: any;
			public _isActiveTop: boolean;
			public _hidden: boolean;
			public topY: number;
			public bottomY: number;
			public level: any;

			public constructor(b: any, a: any, d: any, c: any, e: any, f: any);

			public init(b: any, a: any, d: any, c: any, e: any, f: any): void;
			public setData(b: any, a: any, d: any): void;
			public moveToNormal(): void;
			public moveToBottom(): void;
			public moveToTop(): void;
			public reset(): void;
			public hideButton(): void;
			public showButton(): void;
		}
	}
	export namespace HELP_ANNO_TYPE {
		export class INFO extends sc.HelpAnnoBase {
			public constructor(b: any);

			public init(b: any): void;
		}
	}
	export namespace SKILLS {
		export class EMPTY extends sc.BaseSkill {
			public constructor(a: any, b: any);

			public init(a: any, b: any): void;
			public apply(): void;
			public getDescription(): any;
		}
		export class MAXHP extends sc.StatSkill {
			public icon: number;
			public statType: string;

		}
		export class ATK extends sc.StatSkill {
			public icon: number;
			public statType: string;

		}
		export class DEF extends sc.StatSkill {
			public icon: number;
			public statType: string;

		}
		export class FOC extends sc.StatSkill {
			public icon: number;
			public statType: string;

		}
		export class OWN_ELEMENT_RES_HEAT extends sc.ElementSkill {
			public icon: number;
			public counter: boolean;

		}
		export class COUNTER_ELEMENT_RES_HEAT extends sc.ElementSkill {
			public icon: number;
			public counter: boolean;

		}
		export class OWN_ELEMENT_RES_COLD extends sc.ElementSkill {
			public icon: number;
			public counter: boolean;

		}
		export class COUNTER_ELEMENT_RES_COLD extends sc.ElementSkill {
			public icon: number;
			public counter: boolean;

		}
		export class OWN_ELEMENT_RES_SHOCK extends sc.ElementSkill {
			public icon: number;
			public counter: boolean;

		}
		export class COUNTER_ELEMENT_RES_SHOCK extends sc.ElementSkill {
			public icon: number;
			public counter: boolean;

		}
		export class OWN_ELEMENT_RES_WAVE extends sc.ElementSkill {
			public icon: number;
			public counter: boolean;

		}
		export class COUNTER_ELEMENT_RES_WAVE extends sc.ElementSkill {
			public icon: number;
			public counter: boolean;

		}
		export class ALL_ELEMENT_RES extends sc.BaseSkill {
			public icon: number;

			public constructor(a: any, b: any);

			public init(a: any, b: any): void;
			public applyOnConfigs(a: any): void;
			public getDescription(): any;
		}
		export class RANGED_DAMAGE extends sc.StatSkill {
			public icon: number;
			public statType: string;

		}
		export class CHARGED_KNOCKBACK extends sc.StatSkill {
			public icon: number;
			public statType: string;

		}
		export class MELEE_DAMAGE extends sc.StatSkill {
			public icon: number;
			public statType: string;

		}
		export class ASSAULT extends sc.StatSkill {
			public icon: number;
			public statType: string;

		}
		export class CRITICAL_DAMAGE extends sc.StatSkill {
			public icon: number;
			public statType: string;

		}
		export class AIMING_SPEED extends sc.StatSkill {
			public icon: number;
			public statType: string;

		}
		export class AIMING_STABILITY extends sc.StatSkill {
			public icon: number;
			public statType: string;

		}
		export class AIMING_MOVEMENT_SPEED extends sc.StatSkill {
			public icon: number;
			public statType: string;

		}
		export class DASH_DISTANCE extends sc.StatSkill {
			public icon: number;
			public statType: string;

		}
		export class ADDITIONAL_DASH_STEP extends sc.StatSkill {
			public icon: number;
			public statType: string;

		}
		export class GUARD_STRENGTH extends sc.StatSkill {
			public icon: number;
			public statType: string;

		}
		export class ADDITIONAL_GUARD_AREA extends sc.StatSkill {
			public icon: number;
			public statType: string;

		}
		export class STUN_THRESHOLD extends sc.StatSkill {
			public icon: number;
			public statType: string;

		}
		export class STATUS_CONDITION_EFFECT_HEAT extends sc.StatSkill {
			public icon: number;
			public statType: string;

		}
		export class STATUS_CONDITION_EFFECT_COLD extends sc.StatSkill {
			public icon: number;
			public statType: string;

		}
		export class STATUS_CONDITION_EFFECT_SHOCK extends sc.StatSkill {
			public icon: number;
			public statType: string;

		}
		export class STATUS_CONDITION_EFFECT_WAVE extends sc.StatSkill {
			public icon: number;
			public statType: string;

		}
		export class STATUS_CONDITION_GUARD_HEAT extends sc.StatSkill {
			public icon: number;
			public statType: string;

		}
		export class STATUS_CONDITION_GUARD_COLD extends sc.StatSkill {
			public icon: number;
			public statType: string;

		}
		export class STATUS_CONDITION_GUARD_SHOCK extends sc.StatSkill {
			public icon: number;
			public statType: string;

		}
		export class STATUS_CONDITION_GUARD_WAVE extends sc.StatSkill {
			public icon: number;
			public statType: string;

		}
		export class STATUS_CONDITION_HEALING extends sc.StatSkill {
			public icon: number;
			public statType: string;

		}
		export class HP_REGENERATION extends sc.StatSkill {
			public icon: number;
			public statType: string;

		}
		export class OVERHEAT_REDUCTION extends sc.StatSkill {
			public icon: number;
			public statType: string;

		}
		export class ITEM_BOOST extends sc.StatSkill {
			public icon: number;
			public statType: string;

		}
		export class APPETITE extends sc.StatSkill {
			public icon: number;
			public statType: string;

		}
		export class SPIKE_DAMAGE extends sc.StatSkill {
			public icon: number;
			public statType: string;

		}
		export class CROSS_COUNTER extends sc.StatSkill {
			public icon: number;
			public statType: string;

		}
		export class BERSERKER extends sc.StatSkill {
			public icon: number;
			public statType: string;

		}
		export class ONCE_MORE extends sc.StatSkill {
			public icon: number;
			public statType: string;

		}
		export class GUARD_SP extends sc.StatSkill {
			public icon: number;
			public statType: string;

		}
		export class ACTIVE_PLACEHOLDER extends sc.BaseSkill {
			public icon: number;

			public constructor(a: any, b: any);

			public init(a: any, b: any): void;
			public applyOnConfigs(): void;
		}
		export class THROW_SPECIAL_A extends sc.SpecialSkill {
			public constructor(a: any, b: any);

			public init(a: any, b: any): void;
		}
		export class THROW_SPECIAL_B extends sc.SpecialSkill {
			public constructor(a: any, b: any);

			public init(a: any, b: any): void;
		}
		export class ATTACK_SPECIAL_A extends sc.SpecialSkill {
			public constructor(a: any, b: any);

			public init(a: any, b: any): void;
		}
		export class ATTACK_SPECIAL_B extends sc.SpecialSkill {
			public constructor(a: any, b: any);

			public init(a: any, b: any): void;
		}
		export class DASH_SPECIAL_A extends sc.SpecialSkill {
			public constructor(a: any, b: any);

			public init(a: any, b: any): void;
		}
		export class DASH_SPECIAL_B extends sc.SpecialSkill {
			public constructor(a: any, b: any);

			public init(a: any, b: any): void;
		}
		export class GUARD_SPECIAL_A extends sc.SpecialSkill {
			public constructor(a: any, b: any);

			public init(a: any, b: any): void;
		}
		export class GUARD_SPECIAL_B extends sc.SpecialSkill {
			public constructor(a: any, b: any);

			public init(a: any, b: any): void;
		}
	}
	export namespace CrossPointsOverview {
		export class Entry extends ig.GuiElementBase {
			public elementGfx: ig.Image;
			public gfx: ig.Image;
			public transitions: any;
			public number: sc.NumberGui;
			public alphaTransition: any;
			public element: number;
			public preElement: number;
			public alpha: number;

			public constructor(b: any);

			public init(b: any): void;
			public update(): void;
			public updateDrawables(b: any): void;
			public updatePoints(): void;
			public hideIcon(b: any, a: any): void;
			public showIcon(b: any, a: any, d: any): void;
			public doIconTransition(b: any, a: any, d: any): void;
		}
	}
	export namespace DebugSkillLearner {
		export class ItemBoxButton extends sc.ListBoxButton {
			public has: sc.TextGui;

			public constructor(b: any, a: any, d: any, c: any, e: any);

			public init(b: any, a: any, d: any, c: any, e: any): void;
		}
	}
	export namespace CircuitOverviewMenu {
		export class Tree extends ig.GuiElementBase {
			public gfx: ig.Image;
			public buffer: any;
			public element: number;
			public needsUpdate: boolean;
			public overlay: any;
			public updater: any;
			public done: any;
			public _timer: number;
			public _alpha: number;
			public _firstTime: boolean;

			public constructor(a: any, b: any, c: any, d: any, e: any, f: any);

			public init(a: any, b: any, c: any, d: any, e: any, f: any): void;
			public updateDrawables(a: any): void;
			public show(): void;
		}
		export class FocusOverlay extends ig.FocusGui {
			public gfx: ig.Image;
			public rotation: number;
			public neutral: boolean;
			public piv: any;
			public points: any;
			public element: number;
			public submitSound: any;
			public focusable: boolean;

			public constructor(a: any, b: any, c: any, d: any);

			public init(a: any, b: any, c: any, d: any): void;
			public onButtonPress(): void;
			public updateDrawables(a: any): void;
			public canPlayFocusSounds(): any;
			public isMouseOver(): any;
		}
	}
	export namespace CircuitTreeDetail {
		export class Start extends ig.GuiElementBase {
			public gfx: ig.Image;
			public element: number;
			public children: any;
			public dirX: number;
			public dirY: number;
			public centerPos: number;

			public constructor(a: any, b: any, c: any, d: any, e: any, f: any);

			public init(a: any, b: any, c: any, d: any, e: any, f: any): void;
			public updateDrawables(b: any): void;
		}
		export class Node extends ig.FocusGui {
			public gfx: ig.Image;
			public icons: ig.Image;
			public parentGui: any;
			public element: number;
			public skill: any;
			public branchSkill: any;
			public coords: any;
			public dirX: number;
			public dirY: number;
			public centerPos: number;
			public orBranchIndex: any;
			public orLevels: any;
			public orLeft: boolean;
			public blocked: boolean;
			public blockID: number;
			public submitSound: any;
			public blockedSound: any;
			public _iconAlpha: number;
			public _player: any;
			public _buttonGroup: any;

			public constructor(a: any, c: any, d: any, e: any, f: any, g: any, h: any, i: any, j: any, k: any, o: any, m: any, n: any);

			public init(a: any, c: any, d: any, e: any, f: any, g: any, h: any, i: any, j: any, k: any, o: any, m: any, n: any): void;
			public updateIconAlpha(): void;
			public getOffsetX(): any;
			public getOffsetY(): any;
			public getDistanceToCursor(): any;
			public updateDrawables(b: any): void;
			public onButtonPress(): any;
			public onMouseInteract(a: any, b: any): void;
			public isMouseOver(): any;
			public getNodeFocus(a: any): any;
			public _hasParent(a: any): any;
			public _checkParentForBlock(a: any): any;
			public _calculateAlpha(a: any, b: any): any;
		}
		export class OrBranchLine extends ig.GuiElementBase {
			public gfx: ig.Image;
			public orSkill: any;
			public skill: any;
			public element: number;
			public dirX: number;
			public dirY: number;
			public drawDir: number;
			public flip: boolean;
			public levelOffset: number;
			public uidLeft: number;
			public uidRight: number;
			public uidNext: any;
			public uidLeftNext: any;
			public uidRightNext: any;
			public hasBranchChildren: boolean;

			public constructor(a: any, b: any, c: any, d: any, e: any, f: any, h: any, i: any);

			public init(a: any, b: any, c: any, d: any, e: any, f: any, h: any, i: any): void;
			public updateDrawables(a: any): void;
		}
		export class Line extends ig.GuiElementBase {
			public gfx: ig.Image;
			public endSkill: any;
			public element: number;
			public dirX: number;
			public dirY: number;
			public overrideDistance: boolean;

			public constructor(a: any, b: any, c: any, d: any, e: any, h: any);

			public init(a: any, b: any, c: any, d: any, e: any, h: any): void;
			public updateDrawables(a: any): void;
		}
	}
	export namespace CircuitSwapBranches {
		export class Button extends ig.FocusGui {
			public gfx: ig.Image;
			public submitSound: any;
			public blockedSound: any;
			public startUID: any;
			public element: any;

			public constructor(a: any, d: any, f: any, g: any);

			public init(a: any, d: any, f: any, g: any): void;
			public updateDrawables(): any;
			public onButtonPress(): any;
			public isMouseOver(): any;
			public getDistanceToCursor(): any;
		}
	}
	export namespace CircuitSwapBranchesInfoBox {
		export class Skill extends ig.GuiElementBase {
			public transitions: any;
			public icons: ig.Image;
			public text: sc.TextGui;
			public skill: any;

			public constructor();

			public init(): void;
			public setContent(a: any, b: any, d: any, g: any): void;
			public updateDrawables(a: any): void;
		}
	}
	export namespace ItemStatusTrade {
		export class BaseEntryType extends ig.GuiElementBase {
			public gfx: ig.Image;
			public tradeGfx: ig.Image;
			public transitions: any;
			public type: any;
			public itemID: any;
			public textEntry: sc.TextGui;
			public subEntry: sc.TextGui;
			public tradeIcon: ig.ImageGui;

			public constructor(b: any, c: any, e: any, f: any);

			public init(b: any, c: any, e: any, f: any): void;
			public addArrow(): void;
			public setIcon(b: any): void;
		}
	}
	export namespace ItemTabbedBox {
		export class TabButton extends ig.FocusGui {
			public ninepatch: ig.NinePatch;
			public text: string;
			public icon: string;
			public data: any;
			public noIcon: boolean;
			public textChild: sc.TextGui;
			public iconChild: any;
			public _smallWidth: number;
			public _largeWidth: number;

			public constructor(b: any, a: any, d: any, c: any, e: any);

			public init(b: any, a: any, d: any, c: any, e: any): void;
			public setData(b: any): void;
			public getButtonText(): any;
			public setText(b: any): void;
			public setWidthToTextSize(): void;
			public updateDrawables(b: any): void;
			public setPressed(b: any): void;
			public onPressedChange(): void;
		}
	}
	export namespace LOG_GUI_TYPE {
		export class LANDMARK extends sc.LogGuiTypeBase {
			public constructor(b: any);

			public init(b: any): void;
		}
		export class TRADER extends sc.LogGuiTypeBase {
			public constructor(b: any);

			public init(b: any): void;
		}
		export class LORE extends sc.LogGuiTypeBase {
			public constructor(b: any);

			public init(b: any): void;
		}
		export class TROPHY extends sc.LogGuiTypeBase {
			public constructor(b: any);

			public init(b: any): void;
		}
		export class DROP extends sc.LogGuiTypeBase {
			public constructor(b: any);

			public init(b: any): void;
		}
		export class QUEST extends sc.LogGuiTypeBase {
			public constructor(b: any);

			public init(b: any): void;
		}
	}
	export namespace StatusViewMainEquipment {
		export class Entry extends ig.GuiElementBase {
			public gfx: ig.Image;
			public textGui: sc.TextGui;
			public itemGui: sc.TextGui;
			public bodypart: any;

			public constructor(a: any);

			public init(a: any): void;
			public updateDrawables(a: any): void;
			public setItem(a: any): void;
		}
	}
	export namespace STATS_ENTRY_TYPE {
		export class Time extends sc.StatsBaseEntryGui {
			public stat: any;
			public map: any;
			public value: any;
			public updateTime: boolean;

			public constructor(a: any, b: any, c: any);

			public init(a: any, b: any, c: any): void;
			public update(): void;
			public setTime(a: any, b: any): void;
		}
		export class Percent extends sc.StatsBaseEntryGui {
			public constructor(a: any, b: any, c: any);

			public init(a: any, b: any, c: any): void;
		}
		export class KeyValue extends sc.StatsBaseEntryGui {
			public constructor(a: any, d: any, c: any);

			public init(a: any, d: any, c: any): void;
			public setValue(a: any, d: any, c: any): void;
			public setValueAsNumber(a: any, b: any): void;
		}
		export class KeyCurMax extends sc.StatsBaseEntryGui {
			public constructor(a: any, d: any, c: any);

			public init(a: any, d: any, c: any): void;
		}
		export class KeyValuePercent extends sc.StatsBaseEntryGui {
			public numberGui: sc.TextGui;
			public percentGui: sc.StatPercentNumber;

			public constructor(a: any, d: any, c: any);

			public init(a: any, d: any, c: any): void;
		}
		export class Separator extends ig.GuiElementBase {
			public separatorText: sc.TextGui;

			public constructor(a: any, b: any, c: any);

			public init(a: any, b: any, c: any): void;
		}
		export class Logs extends ig.GuiElementBase {
			public constructor(a: any, b: any, c: any);

			public init(a: any, b: any, c: any): void;
		}
	}
	export namespace TrophyTabOverview {
		export class Entry extends ig.GuiElementBase {
			public gfx: ig.Image;
			public text: sc.TextGui;
			public value: sc.TextGui;

			public constructor(a: any, b: any, e: any);

			public init(a: any, b: any, e: any): void;
			public setValue(a: any): void;
			public updateDrawables(a: any): void;
		}
	}
	export namespace ArenaRoundInfoPage {
		export class Medals extends ig.GuiElementBase {
			public gfx: ig.Image;
			public silver: sc.NumberGui;
			public gold: sc.NumberGui;
			public platin: sc.NumberGui;
			public platUnlocked: boolean;

			public constructor();

			public init(): void;
			public updateDrawables(b: any): void;
			public setValues(b: any, a: any, d: any, c: any): void;
		}
	}
	export namespace COMBAT_SHIELDS {
		export class DIRECTIONAL extends sc.CombatShield {
			public _wm: ig.Config;
			public range: number;
			public back: boolean;

			public constructor(a: any, b: any);

			public init(a: any, b: any): void;
			public isActive(d: any, c: any, _usedInChild2: any, _usedInChild3: any, _usedInChild4: any): any;
			public reduceSpikeDamage(): any;
		}
		export class PARTS extends sc.CombatShield {
			public _wm: ig.Config;
			public parts: any;
			public inverse: boolean;

			public constructor(a: any, b: any);

			public init(a: any, b: any): void;
			public isActive(a: any, b: any, e: any, f: any): any;
			public reduceSpikeDamage(): any;
		}
		export class PLAYER extends sc.COMBAT_SHIELDS.DIRECTIONAL {
			public _wm: ig.Config;

			public constructor(a: any, b: any);

			public init(a: any, b: any): void;
			public isActive(a: any, b: any, e: any, f: any, g: any): any;
			public onActivate(a: any): void;
			public onDeactivate(a: any): void;
			public getDamageFactor(a: any, b: any): any;
			public getDefenseRatio(a: any, b: any): any;
			public reduceSpikeDamage(): any;
		}
	}
	export namespace COMBAT_STUN {
		export class START_LOCK extends sc.CombatStun {
			public _wm: ig.Config;

			public preHit(a: any, b: any): void;
		}
		export class END_LOCK extends sc.CombatStun {
			public _wm: ig.Config;

			public preHit(a: any, b: any): void;
		}
		export class BLOCK_XY extends sc.CombatStun {
			public _wm: ig.Config;

			public constructor();

			public init(): void;
			public run(a: any): void;
		}
		export class BLOCK_FALL extends sc.CombatStun {
			public maxTime: number;
			public _wm: ig.Config;

			public constructor(a: any);

			public init(a: any): void;
			public run(a: any): any;
		}
		export class PULL extends sc.CombatStun {
			public speed: number;
			public distance: number;
			public maxTime: number;
			public _wm: ig.Config;

			public constructor(a: any);

			public init(a: any): void;
			public start(_usedInChild0: any): void;
			public run(a: any, d: any): any;
		}
		export class Z_PULL extends sc.CombatStun {
			public maxSpeed: number;
			public accel: number;
			public offZ: number;
			public _wm: ig.Config;

			public constructor(a: any);

			public init(a: any): void;
			public start(): void;
			public run(a: any, b: any): any;
		}
		export class Z_VEL extends sc.CombatStun {
			public value: number;
			public _wm: ig.Config;

			public constructor(a: any);

			public init(a: any): void;
			public start(a: any): void;
		}
		export class Z_BOUNCINESS extends sc.CombatStun {
			public value: number;
			public _wm: ig.Config;

			public constructor(a: any);

			public init(a: any): void;
			public start(a: any): void;
		}
	}
	export namespace COMBAT_CONDITION {
		export class RANDOM extends ig.Class {
			public max: number;
			public _wm: ig.Config;

			public constructor(a: any);

			public init(a: any): void;
			public check(a: any, b: any): any;
		}
		export class HP_BELOW extends ig.Class {
			public value: number;
			public _wm: ig.Config;

			public constructor(a: any);

			public init(a: any): void;
			public check(a: any): any;
		}
		export class HAS_SP extends ig.Class {
			public min: number;
			public _wm: ig.Config;

			public constructor(a: any);

			public init(a: any): void;
			public check(a: any): any;
		}
		export class SPAWN_POINT_DISTANCE extends ig.Class {
			public min: number;
			public max: number;
			public _wm: ig.Config;

			public constructor(a: any);

			public init(a: any): void;
			public check(b: any): any;
		}
		export class TARGET_REACHABLE extends ig.Class {
			public distance: number;
			public throwing: boolean;
			public _wm: ig.Config;

			public constructor(a: any);

			public init(a: any): void;
			public check(a: any): any;
		}
		export class TARGET_DISTANCE extends ig.Class {
			public min: number;
			public max: number;
			public _wm: ig.Config;

			public constructor(a: any);

			public init(a: any): void;
			public check(a: any): any;
		}
		export class TARGET_STANDING_ON_SELF extends ig.Class {
			public _wm: ig.Config;

			public constructor(a: any);

			public init(a: any): void;
			public check(a: any): any;
		}
		export class TARGET_OVERLAP extends ig.Class {
			public ignoreZ: boolean;
			public _wm: ig.Config;

			public constructor(a: any);

			public init(a: any): void;
			public check(a: any): any;
		}
		export class TARGET_FACE extends ig.Class {
			public maxAngle: number;
			public _wm: ig.Config;

			public constructor(a: any);

			public init(a: any): void;
			public check(b: any): any;
		}
		export class FACING_TARGET extends ig.Class {
			public maxAngle: number;
			public _wm: ig.Config;

			public constructor(a: any);

			public init(a: any): void;
			public check(b: any): any;
		}
		export class ENTITY_DISTANCE_OVER extends ig.Class {
			public entity: any;
			public distance: number;
			public _wm: ig.Config;

			public constructor(a: any);

			public init(a: any): void;
			public check(a: any): any;
		}
		export class ENTITY_COORD_DELTA_WITHIN extends ig.Class {
			public entity: any;
			public distance: number;
			public _wm: ig.Config;

			public constructor(a: any);

			public init(a: any): void;
			public check(a: any): any;
		}
		export class TARGET_X_DISTANCE extends ig.Class {
			public min: number;
			public max: number;
			public _wm: ig.Config;

			public constructor(a: any);

			public init(a: any): void;
			public check(b: any): any;
		}
		export class TARGET_Y_DISTANCE_BELOW extends ig.Class {
			public value: number;
			public _wm: ig.Config;

			public constructor(a: any);

			public init(a: any): void;
			public check(a: any): any;
		}
		export class TARGET_Z_DISTANCE extends ig.Class {
			public zMin: number;
			public zMax: number;
			public _wm: ig.Config;

			public constructor(a: any);

			public init(a: any): void;
			public check(a: any): any;
		}
		export class TARGET_ALIVE extends ig.Class {
			public _wm: ig.Config;

			public constructor();

			public init(): void;
			public check(a: any): any;
		}
		export class HAS_TARGET extends ig.Class {
			public _wm: ig.Config;

			public constructor();

			public init(): void;
			public check(a: any): any;
		}
		export class HP_BREAK extends ig.Class {
			public min: any;
			public max: any;
			public _wm: ig.Config;

			public constructor(a: any);

			public init(a: any): void;
			public check(a: any): any;
		}
		export class HP_BREAK_GLOBAL extends ig.Class {
			public min: any;
			public max: any;
			public _wm: ig.Config;

			public constructor(a: any);

			public init(a: any): void;
			public check(): any;
		}
		export class HAS_SHIELD extends ig.Class {
			public name: any;
			public _wm: ig.Config;

			public constructor(a: any);

			public init(a: any): void;
			public check(a: any): any;
		}
		export class ON_GROUND extends ig.Class {
			public name: any;
			public _wm: ig.Config;

			public constructor();

			public init(): void;
			public check(a: any): any;
		}
		export class HAS_PROXY extends ig.Class {
			public _wm: ig.Config;

			public constructor(a: any);

			public init(a: any): void;
			public check(a: any): any;
		}
		export class ENTERED_STATE extends ig.Class {
			public _wm: ig.Config;

			public constructor();

			public init(): void;
			public check(a: any): any;
		}
		export class CURRENT_STATE extends ig.Class {
			public _wm: ig.Config;

			public constructor(a: any);

			public init(a: any): void;
			public check(a: any): any;
		}
		export class ENEMY_COUNT extends ig.Class {
			public count: number;
			public sameType: number;
			public _wm: ig.Config;

			public constructor(a: any);

			public init(a: any): void;
			public check(a: any): any;
		}
		export class TRACKER_READY extends ig.Class {
			public name: number;
			public noResetOnPerformed: boolean;
			public _wm: ig.Config;

			public constructor(a: any);

			public init(a: any): void;
			public check(a: any, b: any, d: any, g: any): any;
			public onReactionActivate(a: any): void;
			public onPerformed(a: any): void;
		}
		export class ACTION_TOKEN extends ig.Class {
			public name: number;
			public time: number;
			public _wm: ig.Config;

			public constructor(a: any);

			public init(a: any): void;
			public check(): any;
		}
		export class MULTI_TOKEN extends ig.Class {
			public names: any;
			public times: any;
			public _wm: ig.Config;

			public constructor(a: any);

			public init(a: any): void;
			public check(): any;
		}
		export class VAR_CONDITION extends ig.Class {
			public condition: ig.VarCondition;
			public _wm: ig.Config;

			public constructor(a: any);

			public init(a: any): void;
			public check(a: any): any;
		}
		export class ATTRIB_IS_TRUE extends ig.Class {
			public name: number;
			public _wm: ig.Config;

			public constructor(a: any);

			public init(a: any): void;
			public check(a: any): any;
		}
		export class BLOCKING_FREE_LINE extends ig.Class {
			public _wm: ig.Config;

			public constructor();

			public init(): void;
			public check(a: any): any;
		}
		export class BALL_CHARGE extends ig.Class {
			public _wm: ig.Config;

			public constructor();

			public init(): void;
			public check(a: any, b: any, d: any): any;
		}
		export class BALL_SMALL extends ig.Class {
			public _wm: ig.Config;

			public constructor();

			public init(): void;
			public check(a: any, b: any, d: any): any;
		}
		export class ATTACK_FROM_ENTITY extends ig.Class {
			public _wm: ig.Config;

			public constructor(a: any);

			public init(a: any): void;
			public check(a: any, b: any, d: any): any;
		}
		export class DAMAGE_FACTOR extends ig.Class {
			public min: any;
			public _wm: ig.Config;

			public constructor(a: any);

			public init(a: any): void;
			public check(a: any, b: any, d: any): any;
		}
		export class HAS_BLOCKED_DAMAGE extends ig.Class {
			public _wm: ig.Config;

			public constructor();

			public init(): void;
			public check(a: any): any;
		}
		export class HAS_BLOCKED_HITS extends ig.Class {
			public _wm: ig.Config;

			public constructor();

			public init(): void;
			public check(a: any): any;
		}
		export class HAS_BLOCKED_ENTITY extends ig.Class {
			public _wm: ig.Config;

			public constructor();

			public init(): void;
			public check(a: any): any;
		}
		export class PART_HIT extends ig.Class {
			public partName: any;
			public _wm: ig.Config;

			public constructor(a: any);

			public init(a: any): void;
			public check(a: any, b: any, d: any): any;
		}
		export class HAS_HINT extends ig.Class {
			public _wm: ig.Config;

			public constructor(a: any);

			public init(a: any): void;
			public check(a: any, b: any, d: any): any;
		}
		export class IS_BALL extends ig.Class {
			public _wm: ig.Config;

			public constructor();

			public init(): void;
			public check(a: any, b: any, d: any): any;
		}
		export class IS_SHIELDED extends ig.Class {
			public _wm: ig.Config;

			public constructor();

			public init(): void;
			public check(a: any, b: any, d: any): any;
		}
		export class ELEMENT_HIT extends ig.Class {
			public element: any;
			public _wm: ig.Config;

			public constructor(a: any);

			public init(a: any): void;
			public check(a: any, b: any, d: any): any;
		}
		export class ELEMENT_HIT_ATTRIB extends ig.Class {
			public element: any;
			public _wm: ig.Config;

			public constructor(a: any);

			public init(a: any): void;
			public check(a: any, b: any, d: any): any;
		}
		export class ELEMENT_MODE extends ig.Class {
			public element: any;
			public _wm: ig.Config;

			public constructor(a: any);

			public init(a: any): void;
			public check(a: any): any;
		}
		export class COMBO_HITS extends ig.Class {
			public min: number;
			public _wm: ig.Config;

			public constructor(a: any);

			public init(a: any): void;
			public check(a: any): any;
		}
		export class COMBO_TIME extends ig.Class {
			public min: number;
			public _wm: ig.Config;

			public constructor(a: any);

			public init(a: any): void;
			public check(a: any): any;
			public onPrePerformed(a: any): void;
		}
		export class STUN_ESCAPE extends ig.Class {
			public _wm: ig.Config;

			public constructor(a: any);

			public init(a: any): void;
			public check(a: any): any;
			public onPrePerformed(a: any): void;
		}
		export class COMBO_DAMAGE extends ig.Class {
			public min: number;
			public _wm: ig.Config;

			public constructor(a: any);

			public init(a: any): void;
			public check(a: any): any;
		}
		export class POI_IS_CLOSE extends ig.Class {
			public poiFilter: number;
			public distance: number;
			public _wm: ig.Config;

			public constructor(a: any);

			public init(a: any): void;
			public check(a: any): any;
		}
		export class NAVIGATION_SUCCESS extends ig.Class {
			public _wm: ig.Config;

			public constructor();

			public init(): void;
			public check(a: any): any;
		}
		export class COMPRESSOR_DETOUR_CONDITION extends ig.Class {
			public _wm: ig.Config;

			public constructor();

			public init(): void;
			public check(a: any, b: any, d: any): any;
		}
	}
	export namespace ENEMY_REACTION {
		export class HIT_REACTION extends ig.Class {
			public preAction: any;
			public preSwitchState: any;
			public blockFurtherHits: boolean;
			public damageFactor: any;
			public attackType: number;
			public flyLevel: any;
			public forceStable: boolean;
			public conditions: sc.CombatConditions;
			public dramaticEffect: any;
			public alignFace: boolean;
			public _wm: ig.Config;

			public constructor(a: any, b: any);

			public init(a: any, b: any): void;
			public onActivate(a: any): void;
			public needInterrupt(): any;
			public hitApply(a: any, b: any, c: any, e: any, f: any): void;
			public checkHit(a: any, b: any, c: any, d: any, e: any): any;
		}
		export class TARGET_DISTANCE extends ig.Class {
			public minDistance: any;
			public maxDistance: any;
			public _wm: ig.Config;

			public constructor(a: any, b: any);

			public init(a: any, b: any): void;
			public preApply(a: any): void;
			public check(a: any): any;
			public _subCheck(a: any, d: any): any;
		}
		export class MOVEMENT_BLOCK extends ig.Class {
			public preSwitchState: any;
			public angle: any;
			public _wm: ig.Config;

			public constructor(a: any, b: any);

			public init(a: any, b: any): void;
			public preApply(a: any): void;
			public check(a: any): any;
		}
		export class COLLAB extends ig.Class {
			public collabKey: any;
			public conditions: sc.CombatConditions;
			public _wm: ig.Config;

			public constructor(a: any, b: any);

			public init(a: any, b: any): void;
			public isReady(a: any, b: any): any;
			public apply(a: any, b: any): void;
		}
		export class GUARD_COUNTER extends ig.Class {
			public _wm: ig.Config;
			public sound: ig.Sound;

			public constructor(a: any, b: any);

			public init(a: any, b: any): void;
			public onGuardCounterCheck(a: any): any;
			public onGuardCountered(a: any, b: any): void;
		}
		export class ENEMY_EVENT extends ig.Class {
			public _wm: ig.Config;

			public constructor(a: any, b: any);

			public init(a: any, b: any): void;
			public checkEnemyEvent(a: any, b: any, c: any, d: any): any;
			public onEnemyEvent(a: any, b: any): void;
		}
		export class STORE_RELEASE extends ig.Class {
			public _wm: ig.Config;

			public constructor(a: any, b: any);

			public init(a: any, b: any): void;
			public onStoredRelease(a: any): void;
		}
		export class DODGE extends ig.Class {
			public _wm: ig.Config;

			public constructor(a: any, b: any);

			public init(a: any, b: any): void;
			public check(a: any): any;
		}
		export class COUNTER_COUNTER extends ig.Class {
			public _wm: ig.Config;

			public constructor(a: any, b: any);

			public init(a: any, b: any): void;
			public preApply(a: any): void;
			public onActivate(a: any): void;
			public check(a: any): any;
		}
		export class FALL extends ig.Class {
			public _wm: ig.Config;

			public constructor(a: any, b: any);

			public init(a: any, b: any): void;
			public onFall(a: any): void;
			public checkFall(a: any): any;
		}
	}
	export namespace ENEMY_TRACKER {
		export class TIME extends sc.EnemyTracker {
			public target: number;
			public current: number;
			public initRandom: number;
			public resetRandom: number;
			public noStateReset: boolean;
			public hpBreakFactor: any;
			public _wm: ig.Config;

			public constructor(b: any, a: any);

			public init(b: any, a: any): void;
			public update(): void;
			public onStateChange(b: any): void;
			public onConditionEval(b: any): any;
			public onPerformed(b: any, a: any): void;
			public _initTimer(b: any): void;
			public reset(b: any, a: any): void;
			public _getTarget(b: any): any;
		}
		export class HIT extends sc.EnemyTracker {
			public target: number;
			public current: number;
			public notStateInit: boolean;
			public hpBreakTargets: any;
			public noStateReset: boolean;
			public _wm: ig.Config;

			public constructor(b: any, a: any);

			public init(b: any, a: any): void;
			public onStateChange(): void;
			public onReactionActivate(b: any): void;
			public onConditionEval(b: any, a: any, d: any, c: any): any;
			public onPerformed(b: any): void;
			public reset(b: any, a: any): void;
			public _getTarget(b: any): any;
		}
		export class HP extends sc.EnemyTracker {
			public target: number;
			public hpReduced: number;
			public notStateInit: boolean;
			public _wm: ig.Config;

			public constructor(b: any, a: any);

			public init(b: any, a: any): void;
			public onStateChange(): void;
			public onReactionActivate(b: any): void;
			public onConditionEval(b: any, a: any, d: any, c: any): any;
			public onPerformed(b: any): void;
			public reset(b: any, a: any): void;
		}
	}
	export namespace PLAYER_SKIN {
		export class Appearance extends sc.PlayerSkinBase {
			public animSheet: ig.AnimationSheet;
			public fx: ig.EffectSheet;
			public guiImage: ig.Image;

			public constructSkin(a: any): void;
			public clearCached(): void;
		}
		export class StepEffect extends sc.PlayerSkinBase {
			public fx: ig.EffectSheet;

			public constructSkin(a: any): void;
			public clearCached(): void;
		}
		export class Aura extends sc.PlayerSkinBase {
			public fx: ig.EffectSheet;

			public constructSkin(a: any): void;
			public clearCached(): void;
		}
		export class Pet extends sc.PlayerSkinBase {
			public animSheet: ig.AnimationSheet;
			public walkAnims: any;
			public petOffsets: any;
			public actorConfig: any;

			public constructSkin(a: any): void;
			public clearCached(): void;
		}
	}
	export namespace BALL_CHANGER_TYPE {
		export class CHANGE_DIR extends sc.BallChangerType {
			public _wm: ig.Config;
			public dir: any;
			public sound: ig.Sound;

			public constructor(a: any);

			public init(a: any): void;
			public onBallTouch(a: any): any;
		}
		export class CHANGE_SPEED extends sc.BallChangerType {
			public _wm: ig.Config;
			public factor: any;
			public waitForBallKill: boolean;
			public sound: any;

			public constructor(a: any);

			public init(a: any): void;
			public onBallTouch(a: any): any;
		}
		export class RESET_SPEED extends sc.BallChangerType {
			public _wm: ig.Config;
			public factor: any;
			public sound: any;

			public constructor();

			public init(): void;
			public onBallTouch(a: any): any;
		}
		export class CHANGE_ELEMENT extends sc.BallChangerType {
			public _wm: ig.Config;
			public element: any;
			public effects: ig.EffectSheet;
			public fxKey: any;

			public constructor(a: any);

			public init(a: any): void;
			public onBallTouch(a: any, b: any): any;
		}
	}
	export namespace QUICK_INFO_BOXES {
		export class Enemy extends ig.BoxGui {
			public ninepatch: ig.NinePatch;
			public transitions: any;
			public title: sc.TextGui;
			public arrow: sc.QuickItemArrow;
			public baseHp: any;
			public baseAttack: any;
			public baseDefense: any;
			public baseFocus: any;
			public resistance: sc.EnemyResistence;
			public anchor: any;
			public enemy: any;
			public active: boolean;

			public constructor();

			public init(): void;
			public updateDrawables(a: any): void;
			public show(a: any): void;
			public hide(a: any): void;
			public setData(b: any, e: any): void;
			public createStatusLine(a: any, b: any, d: any, g: any): any;
			public alignToBase(a: any): void;
		}
	}
	export namespace QUICK_MENU_TYPES {
		export class Analyzable extends sc.QuickMenuTypesBase {
			public nameGui: sc.QuickArrowBox;
			public displayNameAllTime: boolean;

			public constructor(a: any, b: any, c: any);

			public init(a: any, b: any, c: any): void;
			public onAnalysisEnter(): void;
			public onAnalysisExit(): void;
			public focusGained(): void;
			public focusLost(): void;
			public alignGuiPosition(): void;
		}
		export class NPC extends sc.QuickMenuTypesBase {
			public color: any;
			public nameGui: sc.QuickArrowBox;
			public displayNameAllTime: boolean;

			public constructor(a: any, b: any, c: any);

			public init(a: any, b: any, c: any): void;
			public onAnalysisEnter(): void;
			public onAnalysisExit(): void;
			public focusGained(): void;
			public focusLost(): void;
			public alignGuiPosition(): void;
		}
		export class Enemy extends sc.QuickMenuTypesBase {
			public color: any;
			public level: sc.QuickBorderArrowLevelBox;

			public constructor(a: any, b: any, c: any);

			public init(a: any, b: any, c: any): void;
			public alignGuiPosition(): void;
		}
	}
	export namespace QUEST_SUB_TASK {
		export class COLLECT extends sc.QuestSubTaskBase {
			public _wm: ig.Config;
			public item: number;
			public amount: number;
			public keepItems: boolean;
			public hideName: boolean;
			public hideMax: boolean;

			public constructor(b: any);

			public init(b: any): void;
			public initState(b: any): void;
			public updateState(b: any, a: any, d: any, c: any): void;
			public getCurrentValue(b: any, a: any): any;
			public finalize(): void;
			public isFulfilled(b: any): any;
			public reset(): void;
		}
		export class KILL extends sc.QuestSubTaskBase {
			public _wm: ig.Config;
			public enemy: number;
			public amount: number;

			public constructor(b: any);

			public init(b: any): void;
			public initState(b: any): void;
			public updateState(b: any, a: any): void;
			public getCurrentValue(b: any, a: any): any;
			public isFulfilled(b: any): any;
			public reset(b: any): void;
		}
		export class CONDITION extends sc.QuestSubTaskBase {
			public _wm: ig.Config;
			public text: any;
			public short: any;
			public label: any;

			public constructor(b: any);

			public init(b: any): void;
			public initState(b: any): void;
			public updateState(b: any, a: any, d: any): void;
			public getCurrentValue(b: any, a: any): any;
			public isFulfilled(b: any): any;
			public reset(b: any, a: any): void;
		}
		export class QUEST extends sc.QuestSubTaskBase {
			public _wm: ig.Config;
			public quest: any;
			public text: any;
			public short: any;

			public constructor(b: any);

			public init(b: any): void;
			public initState(b: any): void;
			public updateState(b: any, a: any, d: any, c: any): void;
			public getCurrentValue(b: any, a: any): any;
			public isFulfilled(b: any): any;
		}
		export class LANDMARK extends sc.QuestSubTaskBase {
			public _wm: ig.Config;
			public area: number;
			public amount: number;

			public constructor(b: any);

			public init(b: any): void;
			public initState(b: any): void;
			public updateState(b: any, a: any, d: any, c: any): void;
			public getCurrentValue(b: any, a: any): any;
			public isFulfilled(b: any): any;
		}
	}
	export namespace ArenaSummary {
		export class Entry extends ig.SimpleGui {
			public gfx: ig.Image;
			public transitions: any;
			public keyGui: sc.TextGui;
			public valueGui: sc.NumberGui;
			public extraKey: sc.TextGui;
			public extraValue: sc.NumberGui;

			public constructor(a: any, b: any, d: any, g: any, h: any, i: any, j: any, k: any);

			public init(a: any, b: any, d: any, g: any, h: any, i: any, j: any, k: any): void;
			public updateDrawables(a: any): void;
		}
	}
	export namespace ArenaCupOverview {
		export class MedalEntry extends ig.GuiElementBase {
			public transitions: any;
			public gfx: ig.Image;
			public medal: number;
			public medalGui: ig.ImageGui;
			public overlay: ig.ImageGui;
			public rush: ig.ColorGui;

			public constructor(b: any, a: any, d: any, c: any);

			public init(b: any, a: any, d: any, c: any): void;
		}
	}
	export namespace ArenaChainHud {
		export class Number extends ig.GuiElementBase {
			public transitions: any;
			public one: sc.ArenaChainHud.Digit;
			public ten: sc.ArenaChainHud.Digit;
			public hun: sc.ArenaChainHud.Digit;

			public constructor(a: any);

			public init(a: any): void;
			public setChainNumber(a: any): void;
			public setPulse(a: any): void;
			public rumble(): void;
		}
		export class Digit extends ig.GuiElementBase {
			public gfx: ig.Image;
			public transitions: any;
			public digit: any;
			public timer: number;
			public rumbleHandle: ig.Rumble.RumbleHandle;
			public pulsing: boolean;
			public pulseAfter: boolean;
			public rush: boolean;

			public constructor(a: any);

			public init(a: any): void;
			public setDigit(a: any, b: any): void;
			public setPulse(a: any): void;
			public rumble(): void;
			public update(): void;
			public updateDrawables(a: any): void;
		}
	}
	export namespace ArenaRoundStartHud {
		export class ChallengeEntry extends ig.GuiElementBase {
			public gfx: ig.Image;
			public transitions: any;
			public icon: number;
			public challenge: any;
			public global: boolean;

			public constructor(b: any, a: any);

			public init(b: any, a: any): void;
			public updateDrawables(b: any): void;
		}
	}
	export class StartLoader extends ig.Loader {
		public timer: ig.Timer;
		public endTimer: number;

		public draw(): void;
		public _drawBar(b: any, a: any, d: any, c: any, e: any, f: any): void;
		public onEnd(): void;
	}
	export class WPConnection extends ig.Class {
		public owner: any;
		public connections: any;
		public initialized: boolean;
		public connectedWPs: any;
		public middle: boolean;
		public searchData: any;

		public constructor(b: any, a: any);

		public init(b: any, a: any): void;
		public _initWaypoints(): void;
		public addWayPoint(b: any): void;
		public getDistance(b: any): any;
		public getWayPointConnections(): any;
		public getSearchData(b: any): any;
	}
	export class VerionChangeLog extends ig.SingleLoadable {
		public major: number;
		public minor: number;
		public patch: number;
		public hotfix: number;
		public special: string;
		public saveVersion: number;
		public oldMajor: number;
		public oldMinor: number;
		public oldPatch: number;
		public changelog: any;

		public constructor();

		public init(): void;
		public saveCurrentVersion(): void;
		public getLogsBetweenVersions(b: any): any;
		public toString(): any;
		public toOnlyNumberString(): any;
		public hasVersionChanged(): any;
		public loadInternal(): void;
		public onerror(b: any): void;
		public onload(b: any): void;
		public getLastSlotDataUpdated(): any;
		public updateSaveSlotVersion(b: any): void;
		public _getVersionString(b: any, a: any, d: any): any;
		public _toObject(): any;
	}
	export class VersionTracker extends ig.GameAddon {
		public loadedVersion: any;
		public loadedSaveVersion: any;

		public constructor();

		public init(): void;
		public onReset(): void;
		public onStorageSave(b: any): void;
		public onStoragePreLoad(b: any): void;
	}
	export class GlobalInput extends ig.GameAddon {
		public preUpdateOrder: number;
		public postUpdateOrder: number;

		public constructor();

		public init(): void;
		public onPreUpdate(): void;
		public onPostUpdate(): void;
	}
	export class Control extends ig.Class {
		public repeater: ig.PressRepeater;
		public repeaterPressed: boolean;
		public autoControl: any;

		public _getAttackButton(): any;
		public _getSpecialButton(): any;
		public _getDashButton(): any;
		public _getQuickMenuButton(): any;
		public _getMeleeButton(): any;
		public setAutoControl(a: any): void;
		public getMouseX(): any;
		public getMouseY(): any;
		public getGuiClickPre(): any;
		public getGuiClick(): any;
		public getGuiPressed(): any;
		public getGuiHold(): any;
		public getAxesValue(a: any): any;
		public isLeftStickDown(): any;
		public isRightStickDown(): any;
		public updateRepeater(): void;
		public aimStart(): any;
		public aiming(): any;
		public attacking(): any;
		public fullScreenAttacking(): any;
		public chargeThrowSwap(): any;
		public chargeAttackSwap(): any;
		public thrown(): any;
		public melee(): any;
		public charge(): any;
		public autoThrown(): any;
		public dashing(): any;
		public dashHold(): any;
		public guarding(): any;
		public moveDir(b: any, d: any, f: any): any;
		public pause(): any;
		public menu(): any;
		public quickmenu(): any;
		public quickmenuPress(): any;
		public skipCutscene(): any;
		public menuConfirm(): any;
		public menuBack(): any;
		public menuHotkeyHelp(): any;
		public menuHotkeyHelp2(): any;
		public menuHotkeyHelp3(): any;
		public menuHotkeyHelp4(): any;
		public menuSkillLeft(a: any): any;
		public menuSkillRight(a: any): any;
		public menuSkillUp(a: any): any;
		public menuSkillDown(a: any): any;
		public menuCircleLeft(): any;
		public menuCircleRight(): any;
		public menuListUp(): any;
		public menuListDown(): any;
		public questCircleLeft(): any;
		public questCircleRight(): any;
		public menuMapLeftDown(a: any): any;
		public menuMapRightDown(a: any): any;
		public menuMapUpDown(a: any): any;
		public menuMapDownDown(a: any): any;
		public menuScrollUp(): any;
		public menuScrollDown(): any;
		public arenaScrollUp(): any;
		public arenaScrollDown(): any;
		public scrollUp(): any;
		public scrollDown(): any;
		public interactPressed(a: any, b: any): any;
		public interactDown(): any;
		public leftPressed(): any;
		public rightPressed(): any;
		public upPressed(): any;
		public downPressed(): any;
		public leftPressedSticks(): any;
		public rightPressedSticks(): any;
		public upPressedSticks(): any;
		public downPressedSticks(): any;
		public leftDown(): any;
		public rightDown(): any;
		public upDown(): any;
		public downDown(): any;
		public loreDown(): any;
		public loreUp(): any;
		public elementModeScroll(): any;
		public elementModeSwitch(): any;
	}
	export class StatChange extends ig.Class {
		public params: any;
		public modifiers: any;
		public iconString: string;
		public hasTimer: boolean;

		public constructor(a: any);

		public init(a: any, _usedInChild1: any, _usedInChild2: any): void;
		public multiply(a: any, c: any): any;
		public add(a: any, b: any): any;
		public clear(): void;
		public getStatFactor(a: any): any;
		public getTimeFactor(): any;
		public intersectsWith(b: any): any;
	}
	export class ItemBuff extends sc.StatChange {
		public timer: number;
		public time: number;
		public itemID: any;
		public hasTimer: boolean;

		public constructor(a: any, b: any, e: any);

		public init(a: any, b: any, e: any): void;
		public update(): any;
		public clear(): void;
		public reset(a: any): void;
		public getTimeFactor(): any;
	}
	export class ActionBuff extends sc.StatChange {
		public active: boolean;
		public name: any;
		public hacked: boolean;
		public hasTimer: boolean;

		public constructor(a: any, b: any, e: any);

		public init(a: any, b: any, e: any): void;
		public update(): any;
		public onActionEndDetach(): void;
		public onEntityKillDetach(): void;
		public clear(): void;
		public reset(a: any): void;
		public getTimeFactor(): any;
	}
	export class FontSystem extends ig.GameAddon {
		public gamepadIcons: boolean;
		public icons: any;
		public colors: any;
		public font: ig.MultiFont;
		public smallFont: ig.MultiFont;
		public tinyFont: ig.MultiFont;
		public switchIndex: number;
		public gamepadIconStyle: any;

		public constructor();

		public init(): void;
		public changeKeyCodeIcon(a: any, b: any): void;
		public changeGamepadIcon(a: any, b: any): void;
		public setGamepadIconStyle(a: any): void;
		public updateGamepadSwapMap(): void;
		public hasIcon(a: any): any;
		public onVarsChanged(): void;
	}
	export class TextGui extends ig.GuiElementBase {
		public font: any;
		public text: string;
		public textBlock: ig.TextBlock;
		public beepSound: any;
		public bleepDelay: number;
		public playSound: boolean;
		public stopped: boolean;

		public constructor(b: any, a: any);

		public init(b: any, a: any): void;
		public onVisibilityChange(b: any): void;
		public setBeepSound(b: any): void;
		public setMaxWidth(b: any): void;
		public setTextAlign(b: any): void;
		public setTextSpeed(b: any): void;
		public setFont(b: any, a: any): void;
		public setDrawCallback(b: any): void;
		public setText(b: any): void;
		public clear(): void;
		public finish(): void;
		public update(): void;
		public stop(): void;
		public reset(): void;
		public resume(): void;
		public getTextState(): any;
		public setTextState(b: any): void;
		public updateDrawables(b: any): void;
		public onAttach(): void;
		public onDetach(): void;
	}
	export class MouseButtonGroup extends ig.ButtonGroup {
		public sounds: any;
		public _counter: number;
		public onButtonTraversal: any;

		public constructor();

		public init(): void;
		public addFocusGui(b: any): void;
		public clear(): void;
		public doButtonTraversal(b: any): void;
		public isNonMouseMenuInput(): any;
	}
	export class ButtonGroup extends ig.ButtonGroup {
		public sounds: any;
		public repeater: ig.PressRepeater;
		public onButtonTraversal: any;

		public constructor(b: any, a: any, d: any);

		public init(b: any, a: any, d: any): void;
		public setRegainFocus(): void;
		public regainCurrentFocus(b: any, a: any, d: any): void;
		public isNonMouseMenuInput(): any;
		public doButtonTraversal(b: any): void;
		public getRepeaterValue(): any;
		public activate(): void;
	}
	export class RowButtonGroup extends sc.ButtonGroup {
		public rowIndex: any;
		public currentRow: any;
		public usePrevRowIndex: boolean;
		public _lastRowIndex: number;
		public leftRightCallback: any;

		public constructor();

		public init(): void;
		public addFocusGui(b: any, a: any, d: any): void;
		public addEmptyRow(b: any): void;
		public setLeftRightCallback(b: any): void;
		public getCurrentCellIndex(): any;
		public regainCurrentFocus(b: any, a: any, d: any): void;
		public setCurrentRowIndexes(b: any, a: any, d: any, c: any, e: any, f: any): void;
		public isPositionValid(b: any, a: any): any;
		public clear(): void;
		public stepRight(): void;
		public stepLeft(): void;
		public stepDown(): void;
		public stepUp(): void;
		public getCurrentElement(): any;
		public getCurrentX(): any;
		public getCurrentY(): any;
	}
	export class ButtonBgGui extends ig.BoxGui {
		public constructor(a: any, b: any);

		public init(a: any, b: any): void;
	}
	export class ButtonHighlightGui extends ig.GuiElementBase {
		public focusWeight: any;
		public gfx: any;
		public pattern: any;
		public flipped: boolean;
		public highlight: any;

		public constructor(a: any, b: any);

		public init(a: any, b: any): void;
		public updateDrawables(a: any): void;
	}
	export class ButtonGui extends ig.FocusGui {
		public text: any;
		public bgGui: sc.ButtonBgGui;
		public highlightGui: sc.ButtonHighlightGui;
		public gfx: ig.Image;
		public focusTimer: number;
		public alphaTimer: number;
		public buttonType: any;
		public submitSound: any;
		public blockedSound: any;
		public data: any;
		public noFocusOnPressed: boolean;
		public animateOnPress: boolean;
		public transitions: any;
		public textChild: sc.TextGui;

		public constructor(a: any, b: any, c: any, e: any, f: any, g: any, h: any);

		public init(a: any, b: any, c: any, e: any, f: any, g: any, h: any): void;
		public invokeButtonPress(a: any): void;
		public setData(a: any): void;
		public setWidth(a: any): void;
		public setHeight(a: any): void;
		public setText(a: any, b: any): void;
		public resetText(): void;
		public unsetFocus(): void;
		public update(): void;
		public getButtonText(): any;
		public setActive(a: any): void;
	}
	export class CheckboxGui extends sc.ButtonGui {
		public hookGui: ig.ImageGui;

		public constructor(a: any, d: any, c: any);

		public init(a: any, d: any, c: any): void;
		public setPressed(a: any): void;
		public invokeButtonPress(): void;
	}
	export class RegularBoxGui extends ig.BoxGui {
		public ninepatch: ig.NinePatch;
		public PADDING_X: number;
		public PADDING_Y: number;

		public constructor(a: any);

		public init(a: any): void;
		public setContent(a: any): void;
	}
	export class WhiteLineBox extends ig.BoxGui {
		public transitions: any;
		public ninepatch: ig.NinePatch;

		public constructor(a: any, b: any);

		public init(a: any, b: any): void;
	}
	export class ArrowBoxGui extends ig.BoxGui {
		public transitions: any;
		public gfx: ig.Image;
		public ninepatch: ig.NinePatch;
		public PADDING_X: number;
		public PADDING_Y: number;
		public PADDING_POINTER: number;
		public pointerType: number;

		public constructor(a: any, d: any, f: any);

		public init(a: any, d: any, f: any): void;
		public resize(a: any, b: any): void;
		public setPointerDown(): void;
		public updateDrawables(a: any): void;
	}
	export class PointingBoxGui extends ig.BoxGui {
		public transitions: any;
		public gfx: ig.Image;
		public ninepatch: ig.NinePatch;
		public direction: number;

		public constructor();

		public init(): void;
		public setPointerDown(): void;
		public updateDrawables(a: any): void;
	}
	export class LineGui extends ig.BoxGui {
		public ninepatch: ig.NinePatch;

		public constructor(a: any);

		public init(a: any): void;
	}
	export class BlackGrayBox extends ig.BoxGui {
		public text: any;
		public ninepatch: ig.NinePatch;

		public constructor(a: any, b: any, d: any);

		public init(a: any, b: any, d: any): void;
	}
	export class BlackWhiteBox extends ig.BoxGui {
		public text: any;
		public ninepatch: ig.NinePatch;

		public constructor(a: any, b: any, d: any);

		public init(a: any, b: any, d: any): void;
	}
	export class SideBorderBox extends ig.BoxGui {
		public text: any;
		public transitions: any;
		public ninepatch: ig.NinePatch;

		public constructor(a: any, b: any);

		public init(a: any, b: any): void;
		public setHeight(a: any): void;
	}
	export class SideBoxGui extends ig.GuiElementBase {
		public transitions: any;
		public titleGui: sc.SlickTitleGui;
		public contentEntries: any;
		public right: boolean;

		public constructor(a: any, b: any);

		public init(a: any, b: any, _usedInChild2: any): void;
		public pushContent(a: any, b: any, d: any, g: any): void;
		public replaceContent(a: any, b: any): void;
		public removeContent(a: any): any;
		public clearContent(): void;
		public popContent(): void;
		public rearrangeContent(a: any): void;
		public hide(a: any, b: any): void;
		public show(a: any, b: any): void;
		public remove(): void;
	}
	export class CenterBoxGui extends ig.GuiElementBase {
		public transitions: any;
		public iconGfx: ig.Image;
		public msgContent: any;
		public centerBox: sc.BlackWhiteBox;
		public borderLeftGui: sc.SideBorderBox;
		public borderRightGui: sc.SideBorderBox;

		public constructor(a: any, b: any);

		public init(a: any, b: any): void;
		public remove(): void;
		public resize(): void;
	}
	export class SmallEntityBox extends ig.GuiElementBase {
		public ninepatch: ig.NinePatch;
		public transitions: any;
		public entity: any;
		public textGui: sc.TextGui;
		public timer: number;
		public rumbleTime: number;
		public finished: boolean;
		public entityOff: any;
		public offY: number;
		public fixedPos: any;
		public hideSmall: boolean;

		public constructor(a: any, b: any, d: any, g: any, h: any);

		public init(a: any, b: any, d: any, g: any, h: any): void;
		public setFixedPos(): void;
		public stopRumble(): void;
		public update(): void;
		public updateDrawables(a: any): void;
		public _updatePos(): void;
		public remove(): void;
		public isFinished(): any;
	}
	export class LineBoxGui extends ig.GuiElementBase {
		public ninepatch: ig.NinePatch;
		public transitions: any;
		public content: any;
		public paddingX: number;

		public constructor(a: any, b: any);

		public init(a: any, b: any): void;
		public updateDrawables(a: any): void;
	}
	export class SmallBlackBoxGui extends ig.BoxGui {
		public text: any;
		public transitions: any;
		public ninepatch: ig.NinePatch;

		public constructor(a: any);

		public init(a: any): void;
	}
	export class NumberGui extends ig.GuiElementBase {
		public gfx: ig.Image;
		public maxNumber: number;
		public digits: number;
		public realDigits: number;
		public signed: boolean;
		public showPlus: boolean;
		public metrics: any;
		public color: any;
		public targetNumber: number;
		public initNumber: number;
		public numTransitionTime: number;
		public numTransitionScale: number;
		public timer: ig.WeightTimer;
		public noZero: boolean;
		public leadingZeros: number;
		public showPlusOnZero: boolean;
		public scramble: boolean;
		public dots: boolean;
		public zeroAsGrey: boolean;

		public constructor(d: any, c: any);

		public init(d: any, c: any): void;
		public setSize(a: any): void;
		public setNumber(a: any, c: any): void;
		public getNumber(): any;
		public setMaxNumber(a: any): void;
		public setColor(a: any): void;
		public update(): void;
		public updateDrawables(b: any): any;
		public _getCurrentNumber(): any;
	}
	export class MaxNumberGui extends ig.GuiElementBase {
		public gfx: ig.Image;
		public currentNumberGui: sc.NumberGui;
		public maxNumberGui: sc.NumberGui;

		public constructor(a: any, b: any);

		public init(a: any, b: any): void;
		public getMaxNumber(): any;
		public setMaxNumber(a: any, b: any): void;
		public setNumber(a: any, b: any): void;
		public updateDrawables(a: any): void;
	}
	export class PercentNumber extends ig.GuiElementBase {
		public gfx: ig.Image;
		public transitions: any;
		public number: sc.NumberGui;

		public constructor(a: any, b: any);

		public init(a: any, b: any): void;
		public setNumber(a: any, b: any): void;
		public setColor(a: any): void;
		public hide(): void;
		public updateDrawables(a: any): void;
	}
	export class NewUnlockButton extends sc.ButtonGui {
		public gfx: ig.Image;
		public overlay: sc.NewUnlockOverlay;

		public constructor(a: any, b: any, c: any, d: any, i: any, j: any, k: any);

		public init(a: any, b: any, c: any, d: any, i: any, j: any, k: any): void;
		public activateNewOverlay(a: any): void;
		public deactivateNewOverlay(): void;
	}
	export class NewUnlockOverlay extends ig.ImageGui {
		public transitions: any;
		public gfx: ig.Image;
		public overlayActive: boolean;
		public small: boolean;
		public timer: number;
		public alpha: number;

		public constructor();

		public init(): void;
		public update(): void;
		public updateDrawables(a: any): void;
		public activate(): void;
		public deactivate(a: any, b: any): void;
	}
	export class BuffInfo extends ig.GuiElementBase {
		public transitions: any;
		public ninepatch: ig.NinePatch;
		public text: sc.TextGui;
		public _width: number;

		public constructor();

		public init(): any;
		public setText(a: any, b: any): void;
		public updateDrawables(a: any): void;
	}
	export class InfoBar extends ig.GuiElementBase {
		public text: sc.TextGui;
		public transitions: any;
		public sizeTransition: any;
		public skipRender: any;
		public alpha: number;

		public constructor(a: any, b: any, c: any);

		public init(a: any, b: any, c: any): void;
		public update(): void;
		public updateDrawables(a: any): void;
		public doSizeTransition(a: any, b: any, c: any, d: any, i: any): void;
		public setText(a: any, b: any): void;
	}
	export class DummyContainer extends ig.GuiElementBase {
		public constructor(a: any);

		public init(a: any): void;
	}
	export class ListBoxButton extends ig.FocusGui {
		public numberGfx: ig.Image;
		public gfx: ig.Image;
		public button: sc.ButtonGui;
		public data: any;
		public _actualLineWidth: number;
		public _width: number;
		public blockedSound: any;
		public level: number;

		public constructor(a: any, b: any, c: any, d: any, i: any, j: any, k: any, l: any);

		public init(a: any, b: any, c: any, d: any, i: any, j: any, k: any, l: any, _usedInChild8: any, _usedInChild9: any, _usedInChild10: any): void;
		public setButtonText(a: any): void;
		public setLevel(a: any): void;
		public setWidth(a: any, b: any): void;
		public setData(a: any): void;
		public setDrawCallback(a: any): void;
		public updateDrawables(a: any): void;
		public focusGained(): void;
		public setText(a: any): void;
		public focusLost(): void;
		public setActive(a: any): void;
		public invokeButtonPress(): void;
	}
	export class ItemBoxButton extends sc.ListBoxButton {
		public amount: sc.NumberGui;

		public constructor(a: any, b: any, c: any, d: any, i: any, j: any, k: any, l: any, o: any, m: any, n: any);

		public init(a: any, b: any, c: any, d: any, i: any, j: any, k: any, l: any, o: any, m: any, n: any): void;
	}
	export class ToggleSet extends ig.GuiElementBase {
		public header: sc.TextGui;
		public background: ig.ColorGui;
		public buttons: any;
		public set: any;

		public constructor(a: any, b: any, c: any);

		public init(a: any, b: any, c: any): void;
		public updateTogglesStates(a: any): void;
	}
	export class ItemMenuToggleAnimation extends ig.GuiElementBase {
		public gfx: ig.Image;
		public timer: number;
		public index: number;
		public callback: any;
		public radio: boolean;
		public frames: any;

		public constructor(a: any, b: any);

		public init(a: any, b: any): void;
		public update(): void;
		public updateDrawables(a: any): void;
	}
	export class SimpleStatusDisplay extends ig.GuiElementBase {
		public gfx: ig.Image;
		public name: string;
		public lineID: number;
		public iconID: number;
		public usePercent: boolean;
		public iconIndex: any;
		public currentValueGui: sc.NumberGui;
		public changeValueGui: sc.NumberGui;
		public nameGui: sc.TextGui;
		public arrowGui: ig.ImageGui;
		public percentCurrentGui: sc.PercentChar;
		public percentChangeGui: sc.PercentChar;
		public simpleMode: boolean;
		public noPercentMode: boolean;
		public stayWhite: boolean;
		public transitions: any;
		public width: number;

		public constructor(a: any, b: any, c: any, d: any, i: any, j: any, k: any, l: any);

		public init(a: any, b: any, c: any, d: any, i: any, j: any, k: any, l: any): void;
		public setCurrentValue(a: any, b: any): void;
		public setChangeValue(a: any, b: any, c: any): void;
		public fadeChangeValues(a: any): void;
		public updateDrawables(b: any): void;
	}
	export class PercentChar extends ig.GuiElementBase {
		public transitions: any;
		public gfx: ig.Image;
		public state: number;

		public constructor();

		public init(): void;
		public updateDrawables(a: any): void;
	}
	export class MenuPanel extends ig.BoxGui {
		public ninepatch: ig.NinePatch;
		public sizeTransition: any;

		public constructor(a: any);

		public init(a: any, _usedInChild1: any, _usedInChild2: any): void;
		public update(): void;
		public doSizeTransition(a: any, b: any, c: any, d: any, i: any): void;
	}
	export class HeaderMenuPanel extends sc.MenuPanel {
		public headerPatch: ig.NinePatch;
		public header: sc.TextGui;
		public title: string;

		public constructor(a: any, b: any);

		public init(a: any, b: any, _usedInChild2: any): void;
		public updateDrawables(a: any): void;
		public removeAllChildren(): void;
	}
	export class MenuScanLines extends ig.GuiElementBase {
		public gfx: ig.Image;

		public constructor();

		public init(): void;
		public updateDrawables(a: any): void;
	}
	export class ScrollPane extends ig.GuiElementBase {
		public box: sc.ScrollPane.Container;
		public scrollType: any;
		public scrollbarV: sc.Slider;
		public scrollbarH: sc.Slider;
		public showTopBar: boolean;
		public showBottomBar: boolean;

		public constructor(a: any);

		public init(a: any, _usedInChild1: any, _usedInChild2: any, _usedInChild3: any, _usedInChild4: any, _usedInChild5: any, _usedInChild6: any): void;
		public setContent(a: any): void;
		public scrollX(a: any, c: any): void;
		public scrollY(a: any, c: any, d: any, h: any): void;
		public setScrollY(a: any, c: any, d: any, h: any): void;
		public recalculateScrollBars(a: any): void;
		public recalculateBar(a: any, b: any, c: any, d: any): void;
		public updateDrawables(a: any): void;
		public setSize(a: any, b: any): void;
		public getScrollY(): any;
	}
	export class Slider extends ig.GuiElementBase {
		public offset: any;
		public inset: any;
		public minValue: number;
		public maxValue: number;
		public value: number;
		public vertical: boolean;
		public scaleThumb: boolean;
		public prefWidth: number;
		public prefHeight: number;
		public thumb: any;

		public constructor(a: any, b: any, c: any);

		public init(a: any, b: any, c: any, _usedInChild3: any): void;
		public updateDrawables(a: any): void;
		public range(a: any): any;
		public calcThumbArea(): any;
		public setThumbPos(a: any): void;
		public setPreferredThumbSize(a: any, b: any): void;
		public addValue(a: any, b: any): void;
		public setValue(a: any, b: any): void;
		public setMinMaxValue(a: any, b: any, c: any): void;
		public getRange(): any;
		public getWidth(): any;
		public getHeight(): any;
	}
	export class TimeAndMoneyGUI extends sc.MenuPanel {
		public gfx: ig.Image;
		public timeGfx: ig.Image;
		public transitions: any;
		public credit: sc.NumberGui;
		public timeSec: sc.NumberGui;
		public timeMin: sc.NumberGui;
		public timeHour: sc.NumberGui;
		public _lastSec: any;
		public _lastMin: any;
		public _lastHour: any;

		public constructor();

		public init(): void;
		public updateCredit(): void;
		public update(): void;
		public updateDrawables(a: any): void;
		public modelChanged(a: any, b: any): void;
	}
	export class ChangeLogScrollContainer extends ig.GuiElementBase {
		public scrollPane: sc.ScrollPane;
		public content: ig.GuiElementBase;

		public constructor();

		public init(): void;
		public setElement(a: any): void;
		public scroll(a: any, b: any): void;
		public getScrollY(): any;
		public clear(): void;
		public setSize(a: any, b: any): void;
		public _updateContentHeight(): void;
	}
	export class PrevNextText extends ig.GuiElementBase {
		public transitions: any;
		public icon: sc.TextGui;
		public text: sc.TextGui;
		public active: boolean;

		public constructor(a: any, b: any, c: any);

		public init(a: any, b: any, c: any): void;
	}
	export class ChangelogGui extends ig.GuiElementBase {
		public transitions: any;
		public msgBox: sc.CenterBoxGui;
		public content: ig.GuiElementBase;
		public back: sc.ButtonGui;
		public browseLeft: sc.PrevNextText;
		public browserRight: sc.PrevNextText;
		public scrollContainer: sc.ChangeLogScrollContainer;
		public header: sc.TextGui;
		public compiledButton: sc.ButtonGui;
		public buttonInteract: ig.ButtonInteractEntry;
		public buttonGroup: sc.ButtonGroup;
		public compiledMode: boolean;
		public compileList: any;
		public compileEntry: any;
		public logs: any;
		public currentIndex: any;

		public constructor();

		public init(): void;
		public showLog(): void;
		public hideLog(): void;
		public clearLogs(): void;
		public setHeaderText(a: any, b: any): void;
		public update(): void;
		public updateDrawables(a: any): void;
		public onBackButtonCheck(): any;
		public onCompileButtonCheck(): any;
		public onToggleCompileMode(): void;
		public onLeftPressed(): void;
		public onRightPressed(): void;
		public setCompiledList(): any;
		public setLogEntry(a: any): void;
		public createHeaderEntry(a: any, b: any, c: any, e: any, f: any): any;
		public createTextEntry(a: any, b: any, c: any, e: any): any;
		public createLogEntries(): void;
		public createContent(): any;
	}
	export class DLCScrollContainer extends ig.GuiElementBase {
		public scrollPane: sc.ScrollPane;
		public content: ig.GuiElementBase;

		public constructor();

		public init(): void;
		public setElement(b: any): void;
		public scroll(b: any, a: any): void;
		public getScrollY(): any;
		public clear(): void;
		public setSize(b: any, a: any): void;
		public _updateContentHeight(): void;
	}
	export class DLCGui extends ig.GuiElementBase {
		public transitions: any;
		public msgBox: sc.CenterBoxGui;
		public content: ig.GuiElementBase;
		public back: sc.ButtonGui;
		public browseLeft: any;
		public browserRight: any;
		public scrollContainer: sc.DLCScrollContainer;
		public header: sc.TextGui;
		public compiledButton: any;
		public buttonInteract: ig.ButtonInteractEntry;
		public buttonGroup: sc.ButtonGroup;
		public compiledMode: boolean;
		public compileList: any;
		public compileEntry: any;
		public logs: any;
		public currentIndex: any;

		public constructor();

		public init(): void;
		public show(): void;
		public hide(): void;
		public clearLogs(): void;
		public update(): void;
		public updateDrawables(b: any): void;
		public onBackButtonCheck(): any;
		public createDLCList(): void;
		public createHeaderEntry(b: any, a: any, d: any, c: any, e: any): any;
		public createTextEntry(b: any, a: any, d: any): any;
		public createContent(): void;
	}
	export class RightHudGui extends ig.GuiElementBase {
		public taskTitle: any;
		public maxCount: number;
		public currentCount: number;
		public variable: any;
		public transitions: any;
		public boxes: any;
		public doReorder: boolean;

		public constructor();

		public init(): void;
		public update(): void;
		public addHudBox(b: any, a: any): void;
		public addHudBoxBefore(b: any, a: any): void;
		public removeHudBox(b: any): void;
		public reorder(): void;
		public modelChanged(b: any, a: any): void;
		public updateSize(): void;
	}
	export class RightHudBoxGui extends sc.SideBoxGui {
		public hidden: boolean;
		public justAdded: boolean;
		public parentPanel: any;

		public constructor(b: any);

		public init(b: any, _usedInChild1: any, _usedInChild2: any): void;
		public show(b: any, a: any): void;
		public hide(b: any, a: any): void;
		public remove(): void;
	}
	export class TimersHudEntry extends ig.GuiElementBase {
		public gfx: ig.Image;
		public millis: sc.NumberGui;
		public seconds: sc.NumberGui;
		public minutes: sc.NumberGui;
		public hours: sc.NumberGui;
		public hourPoint: ig.ImageGui;
		public timer: any;

		public constructor(b: any);

		public init(b: any): void;
		public update(): void;
		public updateTime(): void;
	}
	export class TimersHud extends sc.RightHudBoxGui {
		public entry: sc.TimersHudEntry;
		public _cutscene: boolean;

		public constructor(b: any, a: any, d: any);

		public init(b: any, a: any, d: any): void;
		public update(): void;
		public delayedRemove(): void;
		public modelChanged(b: any, a: any, d: any): void;
	}
	export class TimersModel extends ig.GameAddon {
		public observers: any;
		public timers: any;

		public constructor();

		public init(): void;
		public onPostUpdate(): void;
		public onReset(): void;
		public onLevelLoadStart(): void;
		public addTimer(a: any, b: any, c: any, e: any, f: any, g: any, h: any, i: any, j: any, k: any): void;
		public stopTimer(a: any): void;
		public resumeTimer(a: any): void;
		public resetTimer(a: any, b: any, c: any): void;
		public removeTimer(a: any): any;
		public getRemainingTimerTime(a: any, b: any): any;
		public getPassedTime(a: any): any;
		public formatTime(a: any, d: any): any;
		public onVarAccess(a: any, b: any): any;
		public onStorageSave(a: any): void;
		public onStoragePreLoad(a: any): void;
	}
	export class TimerEntry extends ig.Class {
		public name: any;
		public mode: any;
		public timer: number;
		public duration: number;
		public temp: boolean;
		public millis: boolean;
		public area: any;
		public quest: any;
		public stopped: boolean;

		public constructor(a: any, b: any, c: any, e: any, f: any, g: any, h: any);

		public init(a: any, b: any, c: any, e: any, f: any, g: any, h: any): void;
		public tick(): void;
		public stop(): void;
		public resume(): void;
		public reset(a: any, b: any): void;
		public getRemainingTime(): any;
		public done(): any;
		public getSaveData(): any;
	}
	export class StatsModel extends ig.GameAddon {
		public observers: any;
		public values: any;
		public _deferredCallbacks: any;
		public _deferredTimer: number;
		public statsEnabled: boolean;
		public postUpdateOrder: any;

		public constructor();

		public init(): void;
		public onPostUpdate(): void;
		public onReset(): void;
		public onVarAccess(b: any, a: any): any;
		public set(b: any, a: any): void;
		public setMax(b: any, a: any): void;
		public setMin(b: any, a: any): void;
		public add(b: any, a: any): void;
		public subtract(b: any, a: any): void;
		public setMap(b: any, a: any, d: any): void;
		public addMap(b: any, a: any, d: any): void;
		public subMap(b: any, a: any, d: any): void;
		public setMapMin(b: any, a: any, d: any): void;
		public setMapMax(b: any, a: any, d: any): void;
		public get(b: any): any;
		public getMap(b: any, a: any): any;
		public printValues(): void;
		public setActive(b: any): void;
		public updateBoots(b: any): void;
		public onStorageSave(b: any): void;
		public onStoragePreLoad(b: any): void;
		public _notify(b: any, a: any): void;
		public _checkDuplicates(b: any, a: any): any;
	}
	export class TrophyManager extends ig.GameAddon {
		public observers: any;
		public trophies: any;
		public totalPoints: number;
		public version: number;
		public subLists: any;
		public latest: any;
		public varsChangedOrder: number;

		public constructor();

		public init(): void;
		public getTotalTrophiesUnlocked(a: any, b: any, c: any): any;
		public getTotalTrophies(a: any, b: any, c: any): any;
		public onVarsChanged(): void;
		public onVarAccess(a: any, b: any): any;
		public updateAll(): void;
		public triggerTrophy(a: any): void;
		public clearTrophies(): void;
		public validateFeatPoints(): void;
		public getTotalPoints(): any;
		public getTrophy(a: any): any;
		public getTrophyName(a: any): any;
		public isTrophyUnlocked(a: any): any;
		public _addToLatest(a: any): void;
		public _initSubLists(): void;
		public _updateSubList(a: any): void;
		public _notifyNewTrophy(a: any): void;
		public _compare(a: any, b: any, c: any): any;
		public onStorageGlobalSave(a: any): void;
		public onStorageGlobalLoad(a: any): void;
		public modelChanged(a: any, b: any, c: any): void;
	}
	export class AutoControl extends ig.GameAddon {
		public mouse: any;
		public axis: any;
		public actions: any;
		public preUpdateOrder: number;

		public constructor();

		public init(): void;
		public get(b: any): any;
		public isActive(): any;
		public setActive(b: any): void;
		public onPreUpdate(): void;
		public setMouse(b: any, a: any, d: any): void;
		public setStick(b: any, a: any, d: any, c: any): void;
		public setAction(b: any, a: any, d: any): void;
		public clearAction(b: any): void;
	}
	export class Inventory extends ig.SingleLoadable {
		public items: any;

		public constructor();

		public init(): any;
		public getItem(b: any): any;
		public getItemName(b: any): any;
		public getItemByName(b: any): any;
		public getItemLevel(b: any): any;
		public getItemID(b: any): any;
		public getBuffString(b: any, a: any, d: any): any;
		public areStatChangesRanksUniform(b: any): any;
		public isBuffID(b: any): any;
		public isEquipID(b: any): any;
		public getRaritySuffix(b: any): any;
		public getItemNameWithIcon(b: any): any;
		public getItemIcon(b: any): any;
		public getItemDescription(b: any): any;
		public getItemRarity(b: any): any;
		public getItemSubType(b: any): any;
		public isConsumable(b: any): any;
		public getTotalItemsUnlocked(b: any, a: any, d: any): any;
		public loadInternal(): void;
		public onerror(b: any): void;
		public onload(b: any): void;
		public _isBuff(b: any): any;
	}
	export class CombatParams extends ig.Class {
		public combatant: any;
		public observers: any;
		public baseParams: any;
		public modifiers: any;
		public buffs: any;
		public currentHp: number;
		public maxSp: number;
		public currentSp: number;
		public spHoldTimer: number;
		public currentItemBuffs: number;
		public tmpElemFactor: any;
		public tmpStatusInflict: any;
		public damageFactor: number;
		public ballFactor: number;
		public defeated: boolean;
		public statusStates: any;
		public hpRegTime: number;
		public hpHealTimer: number;
		public criticalDmgFactor: number;
		public lockedBy: any;
		public stats: any;

		public constructor(a: any);

		public init(a: any): void;
		public setCombatStat(a: any, b: any): void;
		public getCombatStat(a: any, b: any): any;
		public addCombatStat(a: any, b: any): void;
		public healStatus(): void;
		public revive(a: any): void;
		public setCombatant(a: any): void;
		public initStatusFx(): void;
		public setModifiers(a: any): void;
		public startLock(a: any): void;
		public endLock(a: any): void;
		public clearLock(): void;
		public isLocked(): any;
		public isLockedBy(a: any): any;
		public onActionEndDetach(a: any): void;
		public _decreaseLock(a: any): void;
		public reset(a: any): void;
		public resetStatusConditions(): void;
		public resetSp(): void;
		public setMaxSp(a: any): void;
		public setBaseParams(a: any, b: any): void;
		public getStat(a: any, b: any): any;
		public getStatBuffFactor(a: any): any;
		public getModifier(a: any): any;
		public getDamage(e: any, g: any, h: any, i: any, j: any): any;
		public applyDamage(a: any, b: any, c: any): void;
		public getHealAmount(a: any): any;
		public reduceHp(a: any): any;
		public setRelativeHp(a: any): void;
		public setCritical(): void;
		public increaseHp(a: any): void;
		public getHpFactor(): any;
		public addSp(a: any, b: any): void;
		public consumeSp(a: any): void;
		public setRelativeSp(a: any): void;
		public getSp(): any;
		public getRelativeSp(): any;
		public notifySpConsume(a: any): void;
		public setDefeated(): void;
		public isDefeated(): any;
		public addItemBuff(a: any, b: any, c: any): any;
		public removeIntersectingItemBuff(a: any): void;
		public addBuff(a: any): any;
		public modifyBuff(a: any, b: any, c: any): any;
		public removeBuff(a: any): void;
		public removeAllBuffs(): void;
		public getMaxBuffs(): any;
		public hasMaxBuffs(): any;
		public update(a: any): void;
	}
	export class AttackInfo extends ig.Class {
		public type: any;
		public visualType: any;
		public soundType: any;
		public attackerParams: any;
		public reverse: boolean;
		public ballDamage: boolean;
		public hints: any;
		public damageFactor: number;
		public defenseFactor: number;
		public statusInflict: number;
		public element: any;
		public critFactor: number;
		public spFactor: number;
		public spRepeatFactor: number;
		public fly: any;
		public stunSteps: any;
		public skillBonus: any;
		public guardable: any;
		public limiter: any;
		public hitInvincible: boolean;
		public noIronStance: boolean;
		public noHack: boolean;

		public constructor(a: any, b: any, c: any);

		public init(a: any, b: any, c: any): void;
		public hasHint(a: any): any;
		public hasNoEffect(): any;
	}
	export class HealInfo extends ig.Class {
		public healerParams: any;
		public value: number;
		public absolute: boolean;

		public constructor(a: any, b: any);

		public init(a: any, b: any): void;
		public clone(): any;
	}
	export class BallBehavior extends ig.Class {
		public onInit(_usedInChild0: any): void;
		public onUpdate(_usedInChild0: any): void;
	}
	export class ProxySpawnerBase extends ig.Class {
		public spawn(_usedInChild0: any, _usedInChild1: any, _usedInChild2: any, _usedInChild3: any, _usedInChild4: any): void;
	}
	export class HitProxyConnect extends ig.Class {
		public proxy: any;
		public pos: any;
		public align: number;
		public offset: any;

		public constructor(b: any, a: any, d: any, c: any);

		public init(b: any, a: any, d: any, c: any): void;
		public spawn(b: any, a: any, d: any, c: any, e: any): void;
	}
	export class BallInfo extends sc.ProxySpawnerBase {
		public data: any;
		public _wm: ig.Config;

		public constructor(a: any);

		public init(a: any): void;
		public getSize(a: any): any;
		public clearCached(): void;
		public spawn(a: any, b: any, c: any, d: any, i: any): any;
	}
	export class PlayerConfig extends ig.JsonLoadable {
		public cacheType: string;
		public name: any;
		public clazz: any;
		public character: sc.Character;
		public combatStyle: any;
		public animSheet: ig.AnimationSheet;
		public proxies: any;
		public headIdx: number;
		public stats: any;
		public autoequip: any;
		public baseConfig: sc.PlayerSubConfig;
		public elementConfigs: any;
		public skillRanking: any;

		public constructor(a: any);

		public init(a: any): void;
		public getJsonPath(): any;
		public onload(a: any): void;
		public getCacheKey(a: any): any;
		public onCacheCleared(): void;
	}
	export class PlayerAction extends ig.Class {
		public action: ig.Action;
		public key: any;
		public name: any;
		public description: any;
		public dmgType: any;
		public stunType: boolean;
		public status: boolean;

		public constructor(a: any, c: any, e: any);

		public init(a: any, c: any, e: any): void;
	}
	export class PlayerSubConfig extends ig.Class {
		public paramFactors: any;
		public skillFactors: any;
		public actions: any;
		public baseParams: any;
		public modifiers: any;
		public activeBalls: any;
		public activeActions: any;

		public constructor(b: any, c: any);

		public init(b: any, c: any): void;
		public clearCached(): void;
		public preSkillInit(): void;
		public update(a: any, b: any): void;
		public getParam(a: any): any;
		public getParamFactor(a: any): any;
		public getPlayerAction(a: any): any;
		public getActiveCombatArtName(a: any): any;
		public getAction(a: any): any;
		public getActionMaxLevel(a: any): any;
		public getBalls(): any;
	}
	export class PlayerModel extends ig.Class {
		public observers: any;
		public core: any;
		public config: any;
		public loadedConfig: sc.PlayerConfig;
		public equip: any;
		public items: any;
		public itemFavs: any;
		public itemNew: any;
		public itemToggles: any;
		public animSheet: any;
		public stats: any;
		public baseParams: any;
		public equipParams: any;
		public equipModifiers: any;
		public params: sc.CombatParams;
		public name: any;
		public character: any;
		public credit: number;
		public level: number;
		public exp: number;
		public skills: any;
		public skillPoints: any;
		public skillPointsExtra: any;
		public chapter: number;
		public spLevel: number;
		public baseConfig: any;
		public elementConfigs: any;
		public elementScrollDelay: number;
		public levelUpDelta: any;
		public currentElementMode: number;
		public elementLoad: number;
		public elementLoadTimer: number;
		public hasOverload: boolean;
		public itemBlockTimer: number;
		public chapters: any;
		public toggleSets: any;

		public constructor();

		public init(): void;
		public setConfig(a: any): void;
		public updateChapter(a: any): void;
		public reset(): void;
		public updateLoop(a: any): void;
		public addElementLoad(a: any): void;
		public setElementLoad(a: any): void;
		public enterElementalOverload(): void;
		public onTargetHit(a: any, b: any, c: any): void;
		public increaseActionHeat(a: any): void;
		public getCharacterName(): any;
		public switchBranch(a: any, b: any, c: any): void;
		public learnSkill(a: any, b: any): void;
		public unlearnSkill(a: any): void;
		public hasSkill(a: any): any;
		public hasSkillPoints(a: any): any;
		public hasSkillPointsByCp(a: any, b: any): any;
		public addSkillPoints(a: any, b: any, c: any, d: any): void;
		public resetSkillTree(a: any): void;
		public setSpLevel(a: any): void;
		public addItem(a: any, c: any, d: any, e: any): void;
		public startItemConsume(): void;
		public endItemConsume(a: any): void;
		public useItem(a: any): any;
		public getTotalItemsUsed(a: any): any;
		public removeItem(a: any, c: any, d: any, e: any): any;
		public getItemAmount(a: any): any;
		public hasItem(a: any): any;
		public getItemAmountWithEquip(a: any): any;
		public toggleItem(a: any, b: any): any;
		public forceToggleState(a: any, b: any): void;
		public getToggleItemState(a: any): any;
		public hasAnySetItem(a: any): any;
		public hasAnyToggleItems(): any;
		public getItemSubList(a: any, b: any, c: any): any;
		public getNewItemList(): any;
		public getEquipSubList(a: any, b: any, c: any): any;
		public sortItemList(a: any, b: any, c: any): void;
		public _addNewItem(a: any): void;
		public _removeIDFromNewList(a: any): void;
		public _sortOrderFavorite(b: any, c: any): any;
		public _sortOrder(a: any, b: any): any;
		public _sortName(b: any, c: any): any;
		public _sortAmount(a: any, b: any): any;
		public _sortRarity(b: any, c: any): any;
		public _sortLevel(b: any, c: any): any;
		public _sortStat(b: any, f: any): any;
		public canAddFavorite(): any;
		public isFavorite(a: any): any;
		public updateFavorite(a: any): any;
		public setEquipment(a: any, c: any): any;
		public isEquipped(a: any): any;
		public getAvgEquipLevel(): any;
		public setCore(a: any, b: any): void;
		public setCoreAll(a: any): void;
		public getCore(a: any): any;
		public getCombatCooldownTime(): any;
		public hasElement(a: any): any;
		public setLevel(a: any): void;
		public addExperience(a: any, b: any, c: any, d: any, e: any): any;
		public addCredit(a: any, b: any, c: any): void;
		public removeCredit(a: any, b: any): void;
		public getRawExpGain(a: any, b: any, c: any): any;
		public regenerate(): void;
		public setElementMode(a: any, b: any, c: any): any;
		public scrollElementMode(a: any, b: any, c: any): any;
		public getCurrentElementMode(): any;
		public getCombatArt(a: any, b: any): any;
		public getCombatArtName(a: any): any;
		public getActiveCombatArt(a: any, b: any): any;
		public getAction(a: any): any;
		public getActionByElement(a: any, b: any): any;
		public getBalls(): any;
		public getOptionFace(): any;
		public updateStats(): void;
		public getCombatArtLevel(a: any, b: any): any;
		public getTopCombatArtElement(a: any): any;
		public hasLevelUp(): any;
		public clearLevelUp(): void;
		public onVarAccess(a: any, b: any): any;
		public usedSkillPoints(): any;
		public getMaxSkillPoints(a: any): any;
		public getSaveData(): any;
		public preLoad(a: any): void;
		public checkBodyPart(a: any): any;
		public postLoad(): void;
	}
	export class MessageModel extends ig.GameAddon {
		public observers: any;
		public sideMessages: any;
		public sideMessageStack: any;
		public sideMessageDelayedStack: any;
		public sideMessageQueuing: boolean;
		public displayedSideMessages: number;
		public currentPeople: any;
		public stashedPeople: any;
		public blocking: boolean;
		public currentChoiceOptions: any;
		public lastSelectedChoice: any;
		public autoContinue: boolean;
		public loaded: boolean;
		public screenInteract: sc.ScreenInteractEntry;
		public privateMode: number;
		public boardVisible: boolean;
		public boardSide: any;
		public menuMode: boolean;
		public bottomGap: number;

		public constructor();

		public init(): void;
		public isBlocking(): any;
		public clearBlocking(): void;
		public onSkipClearBlocking(): void;
		public ringPrivateMessage(a: any): void;
		public isPrivateRing(): any;
		public isPrivateActive(): any;
		public startPrivateMessage(): void;
		public endPrivateMessage(a: any): void;
		public setMenuMode(a: any): void;
		public setBottomGap(a: any): void;
		public isMenuMode(): any;
		public showMessage(a: any, b: any, c: any): void;
		public showOffScreenMessage(a: any, b: any, c: any): void;
		public showBoardMessage(a: any, b: any, c: any, e: any): void;
		public hasBoardMessage(): any;
		public showChoice(a: any, b: any, c: any, e: any): void;
		public _isSideMessageDelayed(): any;
		public showSideMessage(a: any, b: any, c: any): void;
		public _showSideMessage(a: any): void;
		public selectChoice(a: any): void;
		public clearSideMessages(): void;
		public addPerson(a: any, b: any, c: any, e: any): void;
		public setExpression(a: any, b: any): void;
		public removePerson(a: any): void;
		public clearSide(a: any): void;
		public clearAll(): void;
		public clearBoardMsg(): void;
		public onSceneEnd(a: any): void;
		public stashPersons(): void;
		public showStashedPersons(): void;
		public hasPerson(): any;
		public clear(): void;
		public getCharExpression(a: any): any;
		public getCharacter(a: any): any;
		public getExpression(a: any): any;
		public getSide(a: any): any;
		public getOrder(a: any): any;
		public getDisplayName(a: any): any;
		public getNextSideMessage(): any;
		public hasStackedSideMessages(): any;
		public isSideMessageVisible(): any;
		public onInteraction(): void;
		public onLevelLoadStart(): void;
		public onLevelLoaded(): void;
		public onReset(): void;
		public onPreUpdate(): void;
		public onStorageSave(a: any): void;
		public _convertSideMessagesToJson(a: any): any;
		public onStoragePreLoad(a: any): void;
		public _convertJsonToSideMessage(a: any): any;
		public hasChoice(): any;
		public _checkActivePerson(a: any): void;
		public onVarAccess(a: any, b: any): any;
	}
	export class AreaRoomBounds extends ig.Class {
		public zMin: number;
		public zMax: number;
		public min: any;
		public max: any;
		public offset: any;
		public name: string;
		public text: string;
		public id: number;

		public constructor(a: any, c: any, e: any, f: any, g: any);

		public init(a: any, c: any, e: any, f: any, g: any): void;
	}
	export class AreaLoadable extends ig.Loadable {
		public cacheType: string;
		public data: any;
		public lowestFloor: number;

		public constructor(a: any);

		public init(a: any): void;
		public loadInternal(a: any): void;
		public onerror(): void;
		public onload(a: any): void;
		public _createRooms(): void;
	}
	export class BaseMenu extends ig.GuiElementBase {
		public visible: boolean;
		public transitions: any;

		public constructor();

		public init(_usedInChild0: any, _usedInChild1: any, _usedInChild2: any): void;
		public addObservers(): void;
		public removeObservers(): void;
		public showMenu(_usedInChild0: any, _usedInChild1: any): void;
		public hideMenu(_usedInChild0: any, _usedInChild1: any): void;
		public exitMenu(_usedInChild0: any): void;
	}
	export class ListInfoMenu extends sc.BaseMenu {
		public hotkeyHelp: sc.ButtonGui;
		public hotkeySort: sc.ButtonGui;
		public helpGui: sc.HelpScreen;
		public list: any;
		public info: any;
		public sortMenu: sc.SortMenu;

		public constructor(b: any, a: any, d: any);

		public init(b: any, a: any, d: any): void;
		public addObservers(): void;
		public removeObservers(): void;
		public showMenu(): void;
		public hideMenu(): void;
		public exitMenu(): void;
		public updateSortMenuButton(b: any): void;
		public onHotkeyHelpCheck(): any;
		public onHelpButtonPressed(): void;
		public onHotkeySortCheck(): any;
		public onSortButtonPress(): void;
		public onExecuteSort(b: any): void;
		public createHelpGui(): void;
		public onAddHotkeys(b: any): void;
		public commitHotKeysToTopBar(b: any): any;
		public onBackButtonPress(): void;
		public modelChanged(_usedInChild0: any, _usedInChild1: any, _usedInChild2: any): void;
	}
	export class ButtonListBox extends sc.ScrollPane {
		public buttonGroup: sc.ButtonGroup;
		public contentPane: ig.GuiElementBase;
		public paddingTop: number;
		public paddingBetween: number;
		public columnPadding: number;
		public buttonWidth: number;
		public useShoulderScroll: boolean;
		public forceLastScroll: boolean;
		public buttonInteract: any;
		public pageSize: number;
		public offsets: any;
		public columns: any;
		public _prevIndex: number;
		public _skipFirst: boolean;
		public _prevScrollBarHeight: number;
		public onGetHeightAtIndex: any;

		public constructor(b: any, a: any, d: any, c: any, e: any, f: any, g: any);

		public init(b: any, a: any, d: any, c: any, e: any, f: any, g: any): void;
		public setButtonGroup(b: any): void;
		public activate(b: any): void;
		public deactivate(b: any): void;
		public addSelectionCallback(b: any): void;
		public updateContentHeight(): void;
		public addButton(b: any, a: any, d: any, c: any): void;
		public addGui(b: any): void;
		public insertButton(b: any, a: any, d: any, c: any, e: any, f: any): void;
		public removeButton(b: any, a: any, d: any, c: any, e: any): void;
		public moveButton(b: any, a: any, d: any, c: any, e: any, f: any): void;
		public getIndex(b: any): any;
		public getChildren(): any;
		public getHeightAtIndex(b: any, a: any): any;
		public getScrollYAtIndex(b: any): any;
		public setScrollAtCurrentYIndex(): void;
		public clear(b: any): void;
		public scrollToY(b: any, a: any): void;
		public setScrollY(b: any, a: any, d: any): void;
		public update(): void;
		public onSelectionChange(): void;
		public _repositionButtons(b: any, a: any, d: any, c: any): void;
		public _getContentHeight(b: any): any;
		public _setContentHeight(b: any): void;
	}
	export class ItemListBox extends ig.GuiElementBase {
		public list: sc.ButtonListBox;
		public select: any;
		public quantity: sc.TextGui;
		public bg: sc.MenuScanLines;

		public constructor(b: any, a: any, d: any);

		public init(b: any, a: any, d: any): void;
		public setSize(b: any, a: any): void;
		public clear(b: any): void;
		public addButton(b: any): void;
		public getChildren(): any;
	}
	export class MultiColumnItemListBox extends ig.GuiElementBase {
		public list: sc.ButtonListBox;
		public selects: any;
		public quantities: any;
		public bg: sc.MenuScanLines;
		public columns: any;

		public constructor(b: any, a: any, d: any, c: any);

		public init(b: any, a: any, d: any, c: any): void;
		public addButton(b: any, a: any): void;
		public clear(b: any): void;
		public scrollToY(b: any, a: any): void;
		public setSelectState(b: any, a: any): void;
		public setQuantityState(b: any, a: any): void;
		public buttonGroup(): any;
		public activate(): void;
		public deactivate(): void;
		public setSize(b: any, a: any): void;
	}
	export class MainMenu extends ig.GuiElementBase {
		public screenBlocking: boolean;
		public gfx: ig.Image;
		public transitions: any;
		public submenus: any;
		public topBar: any;
		public hotkeyBar: any;
		public smallRhombus: any;
		public lea: sc.MainMenu.Lea;
		public sline: sc.MainMenu.StatusLine;
		public moneyTime: sc.TimeAndMoneyGUI;
		public menuDisplay: sc.MainMenu.CurrentMenuDisplay;
		public backButton: any;
		public info: sc.InfoBar;
		public buffInfo: sc.BuffInfo;
		public subMenuInsertPos: number;

		public constructor();

		public init(): void;
		public update(): void;
		public updateDrawables(a: any): void;
		public _checkBackButtonInput(): any;
		public _onBackButton(): void;
		public _enterMenu(): void;
		public _exitMenu(): void;
		public _preCleanUp(): void;
		public _postCleanUp(): void;
		public _switchMenus(a: any, b: any): void;
		public _createMenu(a: any): void;
		public _getMenuFromID(a: any): any;
		public _makeExtraTransitions(a: any, b: any, e: any): void;
		public modelChanged(a: any, b: any, e: any): void;
	}
	export class StartMenu extends sc.BaseMenu {
		public gfx: ig.Image;
		public buttons: any;
		public largeRhombus: any;
		public transitions: any;
		public buttonGroup: sc.ButtonGroup;

		public constructor();

		public init(): void;
		public showMenu(): void;
		public hideMenu(): void;
		public exitMenu(): void;
		public resetButtonFocus(): void;
		public _createButton(a: any, d: any, c: any, e: any, f: any): any;
	}
	export class SlickTitleGui extends ig.BoxGui {
		public text: any;
		public transitions: any;
		public ninepatch: ig.NinePatch;

		public constructor(b: any, a: any, d: any);

		public init(b: any, a: any, d: any): void;
	}
	export class SlickBoxRawGui extends ig.BoxGui {
		public ninepatch: ig.NinePatch;
		public transitions: any;

		public constructor(b: any, a: any, d: any);

		public init(b: any, a: any, d: any, _usedInChild3: any, _usedInChild4: any): void;
	}
	export class SlickBoxGui extends sc.SlickBoxRawGui {
		public paddingX: number;
		public paddingY: number;
		public minWidth: number;
		public subGui: any;

		public constructor(b: any, a: any, d: any, c: any, e: any);

		public init(b: any, a: any, d: any, c: any, e: any): void;
		public setContent(b: any): void;
	}
	export class SlickBigSideGui extends ig.BoxGui {
		public ninepatch: ig.NinePatch;

		public constructor(b: any, a: any);

		public init(b: any, a: any): void;
	}
	export class SlickSmallSideGui extends ig.BoxGui {
		public ninepatch: ig.NinePatch;

		public constructor(b: any, a: any);

		public init(b: any, a: any): void;
	}
	export class DebugFocusGui extends ig.FocusGui {
		public color: string;
		public overColor: string;
		public focusColor: string;

		public constructor(b: any, a: any);

		public init(b: any, a: any): void;
		public updateDrawables(b: any): void;
	}
	export class SlopeLine extends ig.GuiElementBase {
		public gfx: ig.Image;
		public pixel: number;
		public right: boolean;
		public down: boolean;
		public height: number;
		public timer: number;
		public time: number;
		public visible: boolean;
		public _tempPixel: number;
		public _animating: number;
		public transitions: any;

		public constructor(b: any, a: any, d: any, c: any);

		public init(b: any, a: any, d: any, c: any): void;
		public update(): void;
		public updateDrawables(b: any): void;
		public show(b: any, a: any): void;
		public hide(b: any, a: any): void;
	}
	export class LabeledNumberGuy extends ig.GuiElementBase {
		public numberGui: sc.NumberGui;

		public constructor(b: any, a: any, d: any, c: any);

		public init(b: any, a: any, d: any, c: any): void;
		public setNumber(b: any, a: any): void;
	}
	export class CompactChoiceBoxGui extends ig.BoxGui {
		public transitions: any;
		public ninepatch: ig.NinePatch;
		public options: any;
		public callback: any;

		public constructor(b: any, a: any, d: any);

		public init(b: any, a: any, d: any): void;
		public onDetach(): void;
		public onButtonPress(b: any): void;
	}
	export class CombatHudGui extends ig.GuiElementBase {
		public upperGui: sc.CombatUpperHud;
		public lowerGui: sc.CombatLowerHud;
		public skipGui: sc.CombatSkipGui;
		public lineTimer: number;
		public isCombat: boolean;
		public isRanked: boolean;

		public constructor();

		public init(): void;
		public update(): void;
		public getLineWidth(): any;
		public modelChanged(a: any, b: any): void;
	}
	export class CombatSkipGui extends ig.BoxGui {
		public transitions: any;
		public ninepatch: ig.NinePatch;

		public constructor();

		public init(): void;
		public show(): void;
		public hide(): void;
	}
	export class CombatUpperHud extends ig.GuiElementBase {
		public transitions: any;
		public gfx: ig.Image;
		public ninepatch: ig.NinePatch;
		public sub: any;
		public currentSub: any;

		public constructor();

		public init(): void;
		public updateDrawables(a: any): void;
		public updateSubGui(a: any, b: any): void;
		public combatChanged(a: any, b: any, c: any): void;
		public getUpperRightWidth(): any;
	}
	export class CombatLowerHud extends ig.GuiElementBase {
		public transitions: any;

		public constructor();

		public init(): void;
		public updateDrawables(a: any): void;
		public combatChanged(a: any): void;
	}
	export class KeyBinder extends ig.Class {
		public constructor();

		public init(): void;
		public initBindings(): void;
		public unbind(a: any, b: any): void;
		public updateGamepadIcons(): void;
		public changeBinding(a: any, b: any, d: any, e: any): void;
	}
	export class OptionModel extends ig.GameAddon {
		public observers: any;
		public hdMode: boolean;
		public hasChanged: boolean;
		public keyBinder: sc.KeyBinder;
		public values: any;
		public _loaded: boolean;

		public constructor();

		public init(): void;
		public onVarAccess(a: any, b: any): any;
		public persistOptions(): void;
		public resetDefaultValues(a: any): void;
		public dispatchKeySwappedEvent(): void;
		public set(a: any, b: any, c: any): void;
		public get(a: any, b: any): any;
		public hasLocal(a: any): any;
		public _checkSystemSettings(b: any): void;
		public _checkForKeyBindingFailure(): void;
		public _setDisplaySize(): void;
		public _setFullscreen(): void;
		public onStorageSave(a: any): void;
		public onStoragePreLoad(a: any): void;
		public onStorageGlobalSave(a: any): void;
		public onStorageGlobalLoad(a: any): void;
	}
	export class ItemContent extends ig.GuiElementBase {
		public timer: number;
		public id: any;
		public amount: number;
		public textGui: sc.TextGui;
		public amountGui: sc.NumberGui;

		public constructor(b: any, a: any);

		public init(b: any, a: any): void;
		public updateOption(b: any): any;
		public updateTimer(): void;
		public increaseNumber(b: any, a: any): void;
	}
	export class ItemHudBox extends sc.RightHudBoxGui {
		public delayedStack: any;
		public size: number;

		public constructor();

		public init(): void;
		public addEntry(b: any, a: any): void;
		public update(): void;
		public _isInEntries(b: any): any;
		public _popDelayed(): void;
		public _updateSizes(b: any): void;
		public modelChanged(b: any, a: any, d: any): void;
	}
	export class ElementHudGui extends ig.GuiElementBase {
		public transitions: any;
		public timer: number;
		public icons: any;

		public constructor();

		public init(): void;
		public modelChanged(a: any, b: any): void;
		public showElement(a: any): void;
		public hide(): void;
		public update(): void;
		public _updatePos(): void;
	}
	export class ElementHudIconGui extends ig.GuiElementBase {
		public transitions: any;
		public gfx: ig.Image;
		public iconDir: any;
		public currentElement: number;
		public bigSize: boolean;

		public constructor(a: any);

		public init(a: any): void;
		public show(a: any, b: any): void;
		public hide(): void;
		public updateDrawables(a: any): void;
	}
	export class MoneyTextGui extends ig.GuiElementBase {
		public gfx: ig.Image;
		public number: sc.NumberGui;
		public transitions: any;
		public noIcon: boolean;

		public constructor(b: any, a: any);

		public init(b: any, a: any): void;
		public updateDrawables(b: any): void;
	}
	export class MoneyContentGui extends ig.GuiElementBase {
		public plusGui: sc.MoneyTextGui;
		public sumGui: sc.MoneyTextGui;

		public constructor();

		public init(): void;
		public showPlus(b: any): void;
		public showSum(b: any): void;
		public clear(): void;
	}
	export class MoneyHudBox extends sc.RightHudBoxGui {
		public contentGui: sc.MoneyContentGui;
		public addedSum: number;
		public timer: number;

		public constructor();

		public init(): void;
		public update(): void;
		public modelChanged(b: any, a: any, d: any): void;
		public addMoney(b: any): void;
		public showSum(): void;
	}
	export class TaskHudBox extends sc.RightHudBoxGui {
		public contentGui: sc.TextGui;
		public addedSum: number;
		public timer: number;

		public constructor();

		public init(): void;
		public update(): void;
		public modelChanged(b: any, a: any): void;
	}
	export class HpHudGui extends ig.GuiElementBase {
		public transitions: any;
		public gfx: ig.Image;
		public criticalText: sc.TextGui;
		public hpNumber: sc.NumberGui;
		public hpBar: sc.HpHudBarGui;
		public critical: boolean;
		public criticalTimer: number;

		public constructor(b: any);

		public init(b: any): void;
		public update(): void;
		public updateDrawables(b: any): void;
		public modelChanged(b: any, a: any): void;
	}
	export class HpHudBarGui extends ig.GuiElementBase {
		public gfx: ig.Image;
		public maxHp: number;
		public currentHp: number;
		public targetHp: number;
		public timer: number;
		public expTimer: number;
		public params: any;
		public width: number;
		public height: number;
		public expRatio: number;

		public constructor(b: any, a: any, d: any);

		public init(b: any, a: any, d: any): void;
		public onAttach(): void;
		public onDetach(): void;
		public update(): void;
		public setExpRatio(b: any): void;
		public resetHp(): void;
		public updateDrawables(b: any): void;
		public modelChanged(b: any, a: any): void;
	}
	export class SpHudGui extends ig.GuiElementBase {
		public barHideTimer: number;
		public barShowTimer: number;
		public hideBack: boolean;
		public targetSp: number;
		public transitions: any;
		public gfx: ig.Image;

		public constructor();

		public init(): void;
		public update(): void;
		public updateDrawables(e: any): void;
		public modelChanged(a: any, b: any): void;
	}
	export class ParamHudGui extends ig.GuiElementBase {
		public transitions: any;
		public level: sc.ParamHudGui.Level;
		public hp: sc.ParamHudGui.Param;
		public atk: sc.ParamHudGui.Param;
		public def: sc.ParamHudGui.Param;
		public foc: sc.ParamHudGui.Param;
		public _isOut: boolean;

		public constructor();

		public init(): void;
		public showParams(b: any): void;
		public hideParams(b: any): void;
	}
	export class BuffHudEntry extends ig.BoxGui {
		public ninepatch: ig.NinePatch;
		public transitions: any;
		public buff: any;
		public id: number;

		public constructor(b: any, a: any, d: any);

		public init(b: any, a: any, d: any): void;
		public updateDrawables(b: any): void;
	}
	export class BuffHudGui extends ig.GuiElementBase {
		public gfx: ig.Image;
		public startPiece: ig.ImageGui;
		public endPiece: ig.ImageGui;
		public buffSlots: any;

		public constructor();

		public init(): void;
		public update(): void;
		public sortSlots(): any;
		public addBuff(b: any): void;
		public removeAll(): void;
		public modelChanged(b: any, a: any, d: any): void;
	}
	export class ItemTimerHudGui extends ig.GuiElementBase {
		public gfx: ig.Image;
		public transitions: any;
		public numberGui: sc.NumberGui;
		public player: any;
		public maxTime: any;

		public constructor();

		public init(): void;
		public update(): void;
		public updateDrawables(b: any): void;
		public modelChanged(b: any, a: any): void;
	}
	export class QuickMenuModel extends ig.GameAddon {
		public observers: any;
		public buttonInteract: ig.ButtonInteractEntry;
		public activeState: boolean;
		public currentState: any;
		public previousState: any;
		public visible: boolean;
		public cursorMoved: boolean;
		public cursor: any;
		public analFocus: any;
		public itemIndex: number;
		public infoText: any;
		public buffText: any;
		public buffID: any;
		public skipActiveState: boolean;
		public names: any;
		public gamepadActive: boolean;
		public lastDevice: number;
		public itemsBlocked: boolean;

		public constructor();

		public init(): void;
		public enterQuickMenu(): void;
		public exitQuickMenu(): void;
		public enterItems(): void;
		public enterParty(): void;
		public enterCheck(): void;
		public enterNone(): void;
		public setInfoText(b: any, a: any): void;
		public setBuffText(b: any, a: any, d: any): void;
		public setItemBlock(b: any): void;
		public toggleInputMode(): void;
		public resetCursor(): void;
		public focusEntity(b: any, a: any, d: any, c: any): void;
		public unfocusEntity(b: any): void;
		public isDeviceSynced(): any;
		public _switchStates(b: any): void;
		public isQuickNone(): any;
		public isQuickItems(): any;
		public isQuickParty(): any;
		public isQuickCheck(): any;
	}
	export class MapModel extends ig.GameAddon {
		public observers: any;
		public activeLandmarks: any;
		public areas: any;
		public areasVisited: any;
		public currentPlayerArea: sc.AreaLoadable;
		public currentArea: sc.AreaLoadable;
		public currentPlayerFloor: number;
		public currentFloor: number;
		public currentMap: any;
		public unknownArea: any;
		public teleportEvent: any;
		public _usedNames: any;
		public levelLoadStartOrder: number;
		public levelLoadedOrder: number;

		public constructor();

		public init(): void;
		public getTotalAreasFound(a: any): any;
		public getTotalLandmarksFound(a: any): any;
		public getTotalChestsFound(a: any): any;
		public getTotalChests(): any;
		public hasAllAreasFound(): any;
		public getTotalLandmarksFoundInArea(a: any): any;
		public onLevelLoadStart(a: any): void;
		public onLevelLoaded(): void;
		public canUseGenderName(a: any, b: any): any;
		public onReset(): void;
		public onVarAccess(a: any, b: any): any;
		public initAreas(): void;
		public loadArea(a: any, b: any): void;
		public unloadCurrentArea(): void;
		public updateVisitedArea(a: any): void;
		public undoVisitedArea(a: any, b: any): void;
		public validateCurrentPlayerFloor(): any;
		public validateCurrentFloor(): any;
		public restore(): void;
		public addLandmark(a: any, d: any, c: any): void;
		public startTeleport(a: any): void;
		public getAreaType(a: any): any;
		public isLandmarkValid(a: any, b: any): any;
		public getAreaItemId(a: any, b: any): any;
		public getAreaItemType(a: any, b: any): any;
		public getAreaItemAmount(a: any, b: any): any;
		public getAreaItemToggleState(a: any, b: any): any;
		public isLandmarkActive(a: any, b: any, c: any): any;
		public setLandmarkActiveState(a: any, b: any, c: any): void;
		public setAreaLandmarksActiveState(a: any, b: any): void;
		public isDungeon(a: any): any;
		public hasAnyAreaUnlocked(): any;
		public getUnlockedAreas(): any;
		public sortAreaList(a: any): any;
		public getLandmarkName(a: any, b: any): any;
		public getLandmark(a: any, b: any): any;
		public getCurrentAreaLandmark(a: any): any;
		public getCurrentPlayerAreaName(): any;
		public getCurrentAreaName(): any;
		public getAreaOrder(a: any): any;
		public getAreaName(a: any, b: any): any;
		public getCurrentMapName(a: any): any;
		public getMapName(a: any): any;
		public getMapDungeon(a: any): any;
		public getCurrentFloorIndex(): any;
		public getCurrentArea(): any;
		public getLandmarkEvent(a: any): any;
		public getTeleportEvent(a: any): any;
		public getVisitedArea(a: any): any;
		public getTeleport(): any;
		public getCurrentChestCount(): any;
		public getChestCount(a: any): any;
		public onStorageSave(a: any): void;
		public onStoragePreLoad(a: any): void;
		public onLoadableComplete(): void;
	}
	export class KeyHudGui extends ig.GuiElementBase {
		public gfx: ig.Image;
		public ninepatch: ig.NinePatch;
		public transitions: any;
		public areaItemType: any;
		public areaItemTypeMaster: any;
		public numberGui: sc.NumberGui;
		public hasMaster: boolean;

		public constructor();

		public init(): void;
		public updateDrawables(b: any): void;
		public modelChanged(b: any, a: any): void;
		public updateVisibility(): void;
		public updateItemCount(): void;
	}
	export class StatusHudGui extends ig.GuiElementBase {
		public transitions: any;
		public battleBgGui: any;
		public battleSymbolGui: any;
		public upperGui: sc.StatusUpperGui;
		public lowerGui: sc.StatusLowerGui;
		public elementBgGui: sc.StatusElementBgGui;
		public elementModeGui: sc.StatusElementModeGui;
		public paramGui: sc.ParamHudGui;
		public partyGui: sc.PartyHudGui;
		public keyHud: sc.KeyHudGui;
		public elementSwitchTimer: number;
		public menuMode: boolean;

		public constructor();

		public init(): void;
		public update(): void;
		public modelChanged(a: any, b: any, d: any): void;
		public varsChanged(): void;
		public _updateVisibility(): void;
		public _minimizeDisplay(): void;
		public _minimizeDisplayFast(): void;
		public _enterQuickMenuMode(): void;
		public _enterMenuMode(): void;
		public _changeMenuModeVisibility(a: any): void;
		public elementSwitchDisplay(): void;
	}
	export class StatusUpperGui extends ig.GuiElementBase {
		public constructor();

		public init(): void;
	}
	export class StatusLowerGui extends ig.GuiElementBase {
		public buffGui: sc.BuffHudGui;
		public itemTimerGui: sc.ItemTimerHudGui;

		public constructor();

		public init(): void;
		public modelChanged(a: any, b: any): void;
		public moveSubGui(a: any): void;
	}
	export class ElementalLoadOverlayGui extends ig.GuiElementBase {
		public gfx: ig.Image;
		public alphaHandler: ig.AlphaTransitionHandler;
		public currentWarnMode: any;

		public constructor();

		public init(): void;
		public update(): void;
		public updateDrawables(a: any): void;
	}
	export class StatusElementModeGui extends ig.GuiElementBase {
		public gfx: ig.Image;
		public timer: number;
		public selectBg: boolean;
		public transitions: any;

		public constructor();

		public init(): void;
		public update(): void;
		public updateDrawables(a: any): void;
	}
	export class StatusElementBgGui extends ig.GuiElementBase {
		public gfx: ig.Image;
		public transitions: any;

		public constructor();

		public init(): void;
		public updateDrawables(a: any): void;
	}
	export class BattleModeBgGui extends ig.ImageGui {
		public bgImage: ig.Image;
		public transitions: any;

		public constructor();

		public init(): void;
	}
	export class BattleModeSymbolGui extends ig.ImageGui {
		public bgImage: ig.Image;
		public transitions: any;

		public constructor();

		public init(): void;
	}
	export class ExpEntryGui extends ig.GuiElementBase {
		public gfx: ig.Image;
		public transitions: any;
		public number: sc.NumberGui;
		public exp: number;
		public withLabel: boolean;

		public constructor(b: any, a: any);

		public init(b: any, a: any): void;
		public setExp(b: any): void;
		public updateDrawables(b: any): void;
	}
	export class ExpMenuGui extends ig.GuiElementBase {
		public gfx: ig.Image;
		public transitions: any;
		public _expNumber: sc.NumberGui;

		public constructor();

		public init(): void;
		public updateDrawables(b: any): void;
		public modelChanged(b: any, a: any): void;
	}
	export class ExpHudGui extends ig.GuiElementBase {
		public baseEntry: sc.ExpEntryGui;
		public menuEntry: sc.ExpMenuGui;
		public timer: number;
		public expSum: number;
		public expAddEntries: any;

		public constructor();

		public init(): void;
		public update(): void;
		public addExp(b: any): void;
		public mergeExpEntry(): void;
		public mergeAllEntries(): void;
		public reorder(): void;
		public modelChanged(b: any, a: any, d: any): void;
	}
	export class SubTaskEntryBase extends ig.BoxGui {
		public transitions: any;
		public ninepatch: ig.NinePatch;
		public quest: any;
		public taskIndex: any;
		public subTaskIndex: any;
		public subTask: any;
		public textGui: sc.TextGui;
		public done: boolean;

		public constructor(b: any, a: any, d: any, c: any);

		public init(b: any, a: any, d: any, c: any): void;
		public setSubTask(b: any, a: any): void;
		public getState(): any;
	}
	export class TaskEntry extends ig.GuiElementBase {
		public transitions: any;
		public taskIndex: any;
		public quest: any;
		public taskText: sc.TextGui;
		public taskDoneIcon: sc.TextGui;
		public _subtasks: any;

		public constructor(b: any, a: any, d: any, c: any);

		public init(b: any, a: any, d: any, c: any): void;
		public setTask(b: any, a: any, d: any, c: any, e: any): void;
		public show(b: any, a: any): void;
		public _addSubTaskTask(): void;
	}
	export class QuestUpdateEntry extends ig.GuiElementBase {
		public timer: number;
		public id: any;
		public textGui: sc.TextGui;

		public constructor(a: any, d: any);

		public init(a: any, d: any): void;
		public updateTimer(): void;
	}
	export class QuestUpdateHud extends sc.RightHudBoxGui {
		public delayedStack: any;

		public constructor();

		public init(): void;
		public addEntry(a: any, b: any): void;
		public _isInEntries(a: any): any;
		public _popDelayed(): void;
		public update(): void;
		public modelChanged(a: any, b: any, c: any): void;
	}
	export class FavQuestHud extends sc.RightHudBoxGui {
		public task: sc.TaskEntry;

		public constructor();

		public init(): void;
		public setFavQuest(a: any): void;
		public _isVisible(): any;
		public modelChanged(a: any, b: any, c: any): void;
	}
	export class LandmarkEntry extends ig.GuiElementBase {
		public timer: number;
		public id: any;
		public textGui: sc.TextGui;

		public constructor(b: any, a: any);

		public init(b: any, a: any): void;
		public updateTimer(): void;
	}
	export class LandmarkHud extends sc.RightHudBoxGui {
		public delayedStack: any;

		public constructor();

		public init(): void;
		public addEntry(b: any, a: any): void;
		public _isInEntries(b: any): any;
		public _popDelayed(): void;
		public update(): void;
		public modelChanged(b: any, a: any, d: any): void;
	}
	export class LoreModel extends ig.GameAddon {
		public observers: any;
		public lories: any;
		public unlockedLories: any;
		public loaded: boolean;

		public constructor();

		public init(): void;
		public onReset(): void;
		public onVarAccess(a: any, b: any): any;
		public _createUnlockText(a: any, b: any): any;
		public unlockLoreAll(): void;
		public unlockLore(a: any, d: any, c: any, e: any): void;
		public unlockLoreEntry(a: any, d: any, c: any): void;
		public notifyFirstActivated(): void;
		public getLore(a: any): any;
		public getLoreTitle(a: any): any;
		public getLoreEntry(a: any, b: any): any;
		public isLoreUnlocked(a: any): any;
		public hasAtLeastOneUnlocked(a: any): any;
		public isLoreAvailable(a: any): any;
		public isLoreEntryUnlocked(a: any, b: any): any;
		public getCategoryList(a: any, b: any): any;
		public sortLoreList(a: any, b: any): any;
		public getCompletionPercent(a: any): any;
		public getTotalLoreFound(a: any, b: any): any;
		public getTotalLoreEntriesFound(a: any, b: any): any;
		public onStorageSave(a: any): void;
		public onStoragePreLoad(a: any): void;
	}
	export class LoreUpdateEntry extends ig.GuiElementBase {
		public timer: number;
		public textGui: sc.TextGui;

		public constructor(b: any);

		public init(b: any): void;
		public updateTimer(): void;
	}
	export class LoreUpdateHud extends sc.RightHudBoxGui {
		public delayedStack: any;

		public constructor();

		public init(): void;
		public addEntry(b: any): void;
		public _isInEntries(b: any): any;
		public _popDelayed(): void;
		public update(): void;
		public modelChanged(b: any, a: any, d: any): void;
	}
	export class DropUpdateEntry extends ig.GuiElementBase {
		public timer: number;
		public textGui: sc.TextGui;

		public constructor(b: any);

		public init(b: any): void;
		public updateTimer(): void;
	}
	export class DropUpdateHud extends sc.RightHudBoxGui {
		public delayedStack: any;

		public constructor();

		public init(): void;
		public addEntry(b: any): void;
		public _isInEntries(b: any): any;
		public _popDelayed(): void;
		public update(): void;
		public modelChanged(b: any, a: any, d: any): void;
	}
	export class PartyHudGui extends ig.GuiElementBase {
		public model: any;
		public memberGuis: any;
		public transitions: any;

		public constructor();

		public init(): void;
		public modelChanged(a: any, b: any): void;
		public updateVisibility(): void;
		public updatePartySubGui(): void;
	}
	export class MemberHudGui extends ig.GuiElementBase {
		public gfx: ig.Image;
		public heads: ig.TileSheet;
		public transitions: any;
		public model: any;
		public hpExpSpGui: sc.MemberHpExpSpGui;

		public constructor(a: any);

		public init(a: any): void;
		public update(): void;
		public updateDrawables(a: any): void;
		public modelChanged(): void;
		public remove(a: any): void;
	}
	export class MemberHpExpSpGui extends ig.GuiElementBase {
		public gfx: ig.Image;
		public model: any;
		public hpBar: sc.HpHudBarGui;
		public spBar: sc.SpMiniHudGui;

		public constructor(a: any);

		public init(a: any): void;
		public onDetach(): void;
		public updateDrawables(a: any): void;
		public modelChanged(a: any, b: any): void;
	}
	export class SpChangeHudGui extends ig.GuiElementBase {
		public transitions: any;
		public gfx: ig.Image;
		public currentSp: number;
		public consumedSp: number;
		public timer: number;

		public constructor();

		public init(): void;
		public modelChanged(a: any, b: any, d: any): void;
		public hide(): void;
		public update(): void;
		public updateDrawables(b: any): void;
		public _updatePos(): void;
	}
	export class SpMiniHudGui extends ig.GuiElementBase {
		public transitions: any;
		public gfx: ig.Image;
		public params: any;
		public targetSp: number;

		public constructor(b: any);

		public init(b: any): void;
		public onDetach(): void;
		public update(): void;
		public updateDrawables(b: any): void;
		public modelChanged(b: any, a: any): void;
	}
	export class TopMsgHudGui extends ig.GuiElementBase {
		public topGui: sc.TopMsgTopGui;
		public bottomGui: sc.TopMsgTitleGui;
		public iconGui: sc.TopMsgIconGui;
		public visible: boolean;
		public timer: number;
		public maxTime: number;
		public current: any;
		public messages: any;
		public bgm: any;

		public constructor();

		public init(): void;
		public setContent(a: any, b: any, c: any, d: any): void;
		public showMessage(a: any, b: any, c: any, d: any, e: any): void;
		public popMessage(): void;
		public update(): void;
		public clear(): void;
		public hide(): void;
		public animationEnd(): void;
		public checkDuplicates(a: any): any;
		public modelChanged(f: any, g: any, h: any): void;
	}
	export class TopMsgIconGui extends ig.GuiElementBase {
		public transitions: any;
		public gfx: ig.Image;
		public icon: number;

		public constructor();

		public init(): void;
		public setIcon(a: any): void;
		public updateDrawables(a: any): void;
	}
	export class TopMsgTopGui extends ig.ImageGui {
		public transitions: any;
		public gfx: ig.Image;

		public constructor();

		public init(): void;
	}
	export class TopMsgTitleGui extends ig.GuiElementBase {
		public transitions: any;
		public titleTextGui: sc.TextGui;
		public subTextGui: sc.TopMsgSubGui;
		public gfx: ig.Image;
		public ninePatches: any;

		public constructor();

		public init(): void;
		public setContent(a: any, b: any, c: any): void;
		public showSubText(): void;
		public hide(a: any): void;
		public updateDrawables(a: any): void;
	}
	export class TopMsgSubGui extends ig.BoxGui {
		public transitions: any;
		public ninepatch: ig.NinePatch;

		public constructor();

		public init(): void;
		public setContent(a: any, b: any): void;
	}
	export class FeatHudEntry extends ig.GuiElementBase {
		public timer: number;
		public feat: any;
		public textGui: sc.TextGui;

		public constructor(b: any);

		public init(b: any): void;
		public updateTimer(): void;
	}
	export class FeatHud extends sc.RightHudBoxGui {
		public delayedStack: any;

		public constructor();

		public init(): void;
		public addEntry(b: any): void;
		public update(): void;
		public _isInEntries(b: any): any;
		public _popDelayed(): void;
		public modelChanged(b: any, a: any, d: any): void;
	}
	export class LoadingScreenGui extends ig.GuiElementBase {
		public gfx: ig.Image;
		public timer: number;
		public transitions: any;
		public textBlock: ig.TextBlock;

		public constructor();

		public init(): void;
		public update(): void;
		public updateDrawables(b: any): void;
		public modelChanged(b: any, a: any): void;
	}
	export class TitlePresetMenu extends sc.HeaderMenuPanel {
		public transitions: any;
		public buttonInteract: ig.ButtonInteractEntry;
		public itemList: sc.ItemListBox;
		public backButton: sc.ButtonGui;
		public submitSound: any;
		public slots: any;
		public _loadCallback: any;
		public _removeCallback: any;
		public _doLoad: boolean;
		public _loadSlot: any;
		public _firstTime: boolean;

		public constructor(b: any, a: any);

		public init(b: any, a: any): any;
		public update(): void;
		public setPos(b: any, a: any): void;
		public activate(): void;
		public deactivate(): void;
		public createList(): void;
	}
	export class ModalScreenInteract extends ig.GuiElementBase {
		public gfx: ig.Image;
		public transitions: any;
		public msgBox: sc.CenterBoxGui;
		public textGui: sc.TextGui;
		public textDone: boolean;
		public icon: number;
		public screenInteract: sc.ScreenInteractEntry;
		public callback: any;

		public constructor(b: any, a: any, d: any, c: any);

		public init(b: any, a: any, d: any, c: any): void;
		public update(): void;
		public updateDrawables(b: any): void;
		public _onTextFinish(): void;
		public _close(): void;
		public onInteraction(): void;
	}
	export class ModalButtonInteract extends ig.GuiElementBase {
		public gfx: ig.Image;
		public transitions: any;
		public msgBox: sc.CenterBoxGui;
		public textGui: sc.TextGui;
		public content: ig.GuiElementBase;
		public buttons: any;
		public icon: number;
		public buttonInteract: ig.ButtonInteractEntry;
		public buttongroup: sc.ButtonGroup;
		public callback: any;
		public back: sc.ButtonGui;
		public keepOpen: boolean;

		public constructor(b: any, a: any, d: any, c: any, e: any);

		public init(b: any, a: any, d: any, c: any, e: any): void;
		public updateDrawables(b: any): void;
		public show(): void;
		public hide(): void;
		public onBackButtonCheck(): any;
		public onDetach(): void;
	}
	export class SaveSlotNewButton extends ig.FocusGui {
		public transitions: any;
		public ninepatch: ig.NinePatch;
		public slot: any;
		public slotOver: sc.SaveSlotButtonHighlight;
		public text: sc.TextGui;

		public constructor(a: any);

		public init(a: any): void;
		public focusGained(): void;
		public focusLost(): void;
		public updateDrawables(a: any): void;
	}
	export class SaveSlotButton extends ig.FocusGui {
		public transitions: any;
		public gfx: ig.Image;
		public ninepatch: ig.NinePatch;
		public slot: any;
		public slotOver: sc.SaveSlotButtonHighlight;
		public level: sc.NumberGui;
		public location: sc.SaveSlotLocation;
		public time: sc.SaveSlotPlayTime;
		public credit: sc.NumberGui;
		public chapter: sc.SaveSlotChapter;
		public party: sc.SaveSlotParty;
		public elements: sc.SaveSlotElements;
		public autoSlotMiss: sc.TextGui;
		public wrapper: ig.GuiElementBase;
		public content: ig.GuiElementBase;
		public effect: sc.SaveSlotUpdateEffect;

		public constructor(a: any, b: any);

		public init(a: any, b: any): void;
		public setSave(a: any, b: any, c: any): void;
		public doNewEffect(): void;
		public doUpdateEffect(a: any, b: any): void;
		public setSlot(a: any): void;
		public setSlotOver(a: any): void;
		public focusGained(): void;
		public focusLost(): void;
		public updateDrawables(a: any): void;
	}
	export class SaveSlotPlayTime extends ig.GuiElementBase {
		public gfx: ig.Image;
		public hour: sc.NumberGui;
		public minute: sc.NumberGui;
		public second: sc.NumberGui;
		public millis: sc.NumberGui;
		public color: number;
		public hideHours: boolean;
		public drawHourDots: boolean;

		public constructor(a: any, b: any, c: any, e: any, f: any, g: any);

		public init(a: any, b: any, c: any, e: any, f: any, g: any): void;
		public setColor(a: any): void;
		public setTime(a: any, b: any): void;
		public setTimeFromValue(a: any, b: any): void;
		public updateDrawables(a: any): void;
	}
	export class SaveSlotLocation extends ig.BoxGui {
		public ninepatch: ig.NinePatch;
		public location: sc.TextGui;
		public version: sc.TextGui;

		public constructor();

		public init(): void;
		public setLocation(a: any): void;
		public updateDrawables(a: any): void;
	}
	export class SaveSlotParty extends ig.BoxGui {
		public headsGfx: ig.Image;
		public ninepatch: ig.NinePatch;
		public party: any;

		public constructor();

		public init(): void;
		public setParty(a: any): void;
		public updateDrawables(a: any): void;
	}
	export class SaveSlotElements extends ig.GuiElementBase {
		public ninepatch: ig.NinePatch;
		public elements: any;

		public constructor();

		public init(): void;
		public setElements(a: any): void;
		public updateDrawables(a: any): void;
	}
	export class SaveSlotChapter extends ig.GuiElementBase {
		public gfx: ig.Image;
		public metaGfx: ig.Image;
		public chapter: any;
		public textGui: sc.TextGui;
		public chapterGui: sc.NumberGui;
		public metaMarker: ig.ImageGui;

		public constructor();

		public init(): void;
		public setChapter(a: any, b: any): void;
		public updateDrawables(a: any): void;
	}
	export class SaveSlotButtonHighlight extends ig.GuiElementBase {
		public ninepatch: ig.NinePatch;
		public slot: any;
		public focus: boolean;
		public slotGui: sc.NumberGui;

		public constructor();

		public init(): void;
		public setSlot(a: any): void;
		public updateDrawables(a: any): void;
		public setSize(a: any): void;
	}
	export class SaveSlotUpdateEffect extends ig.GuiElementBase {
		public ninepatch: ig.NinePatch;
		public transitions: any;

		public constructor();

		public init(): void;
		public playNew(a: any): void;
		public playUpdate(a: any, b: any): void;
		public updateDrawables(a: any): void;
	}
	export class SaveAutoSaveSlot extends ig.BoxGui {
		public transitions: any;
		public ninepatch: ig.NinePatch;
		public button: any;

		public constructor();

		public init(): void;
	}
	export class SaveList extends ig.GuiElementBase {
		public gfx: ig.Image;
		public list: sc.ButtonListBox;
		public buttongroup: any;
		public slots: any;
		public submitSound: any;
		public selectedSlot: any;
		public autoSlot: sc.SaveAutoSaveSlot;

		public constructor();

		public init(): void;
		public addObservers(): void;
		public removeObservers(): void;
		public showMenu(): void;
		public exitMenu(): void;
		public onNewSlotPressed(): void;
		public onSlotPressed(b: any): void;
		public onSlotLoadPressed(b: any): void;
		public onDeleteSlot(): void;
		public loadSlots(b: any, a: any): void;
		public insertNewSlot(): void;
		public deleteSlot(b: any, a: any): void;
		public modelChanged(b: any, a: any): void;
	}
	export class SaveMenu extends sc.BaseMenu {
		public hotkeyHelp: sc.ButtonGui;
		public hotkeyDelete: sc.ButtonGui;
		public hotkeyNew: sc.ButtonGui;
		public helpGui: any;
		public list: sc.SaveList;

		public constructor();

		public init(): void;
		public addObservers(): void;
		public removeObservers(): void;
		public showMenu(): void;
		public hideMenu(): void;
		public exitMenu(): void;
		public onHotkeyHelpCheck(): any;
		public onHelpButtonPressed(): void;
		public onHotkeyDeleteCheck(): any;
		public onDeleteButtonPressed(): void;
		public onHotkeyNewCheck(): any;
		public onNewButtonPressed(): void;
		public createHelpGui(): void;
		public onAddHotkeys(a: any): void;
		public commitHotKeysToTopBar(a: any): any;
		public onBackButtonPress(): void;
		public modelChanged(): void;
	}
	export class DebugSaveLoadPanel extends sc.HeaderMenuPanel {
		public transitions: any;
		public buttonInteract: ig.ButtonInteractEntry;
		public itemList: sc.ItemListBox;
		public newButton: sc.ButtonGui;
		public deleteButton: sc.ButtonGui;
		public backButton: sc.ButtonGui;
		public load: boolean;
		public submitSound: any;
		public slots: any;
		public _redBackground: ig.ColorGui;
		public _deleteMode: boolean;
		public _loadCallback: any;
		public _removeCallback: any;
		public _doLoad: boolean;
		public _loadSlot: any;
		public _firstTime: boolean;

		public constructor(a: any, b: any, c: any);

		public init(a: any, b: any, c: any): any;
		public update(): void;
		public setPos(a: any, b: any): void;
		public toggleDeleteMode(): void;
		public activate(): void;
		public deactivate(): void;
		public loadSlots(a: any, b: any, c: any): void;
	}
	export class NewGameModeSelectDialog extends ig.GuiElementBase {
		public gfx: ig.Image;
		public transitions: any;
		public msgBox: sc.CenterBoxGui;
		public normal: sc.NewGameModeDialogButton;
		public plus: sc.NewGameModeDialogButton;
		public header: sc.TextGui;
		public content: ig.GuiElementBase;
		public info: sc.TextGui;
		public buttons: any;
		public buttonInteract: ig.ButtonInteractEntry;
		public buttongroup: sc.ButtonGroup;
		public callback: any;

		public constructor(b: any);

		public init(b: any): void;
		public updateDrawables(b: any): void;
		public show(): void;
		public hide(): void;
		public onBackButtonCheck(): any;
	}
	export class NewGameModeDialogButton extends sc.ButtonGui {
		public framePatch: ig.NinePatch;
		public gfx: ig.Image;
		public frame: ig.BoxGui;
		public image: ig.ImageGui;

		public constructor(b: any, a: any);

		public init(b: any, a: any): void;
	}
	export class MasterOverlayGui extends ig.GuiElementBase {
		public transitions: any;

		public constructor();

		public init(): void;
		public updateDrawables(a: any): void;
		public modelChanged(a: any, b: any): void;
	}
	export class TitleScreenGui extends ig.GuiElementBase {
		public background: ig.Image;
		public transitions: any;
		public parallax: ig.Parallax;
		public bgGui: ig.ParallaxGui;
		public startGui: sc.TitleScreenStartGui;
		public buttons: sc.TitleScreenButtonGui;
		public introGui: ig.GUI.IntroScreen;
		public screenInteract: sc.ScreenInteractEntry;
		public versionGui: sc.TextGui;
		public isPostInit: boolean;

		public constructor();

		public init(): void;
		public postInit(): void;
		public modelChanged(c: any, d: any): void;
		public onInteraction(): void;
		public _startBg(): void;
		public _introDone(): void;
		public _bgCallback(a: any, b: any): void;
	}
	export class TitleScreenStartGui extends ig.GuiElementBase {
		public transitions: any;
		public gfx: ig.Image;
		public timer: ig.WeightTimer;

		public constructor();

		public init(): void;
		public show(): void;
		public hide(): void;
		public update(): void;
	}
	export class TitleScreenButtonGui extends ig.GuiElementBase {
		public transitions: any;
		public buttonInteract: ig.ButtonInteractEntry;
		public buttonGroup: sc.ButtonGroup;
		public gamepadGui: any;
		public setOptions: any;
		public namedButtons: any;
		public presetMenu: sc.TitlePresetMenu;
		public story: any;
		public gameplay: any;
		public puzzle: any;
		public closeButton: any;
		public changelogButton: sc.ButtonGui;
		public perfWarnButton: sc.ButtonGui;
		public changelogGui: sc.ChangelogGui;
		public gameCodeButton: sc.ButtonGui;
		public background: ig.ColorGui;
		public perfWarning: any;
		public buttons: any;
		public _rearrangeAnchor: number;
		public _newGamePlus: boolean;

		public constructor();

		public init(): any;
		public postInit(): any;
		public show(): void;
		public hide(a: any): void;
		public checkPerformanceWarning(): void;
		public showPerformanceWarning(a: any): void;
		public checkClearSaveFiles(): any;
		public _createButton(a: any, b: any, c: any, d: any, e: any): any;
		public _enterLoadMenu(): void;
		public _enterOptionsMenu(): void;
	}
	export class PauseScreenGui extends ig.GuiElementBase {
		public buttonInteract: ig.ButtonInteractEntry;
		public buttonGroup: sc.ButtonGroup;
		public resumeButton: sc.ButtonGui;
		public skipButton: sc.ButtonGui;
		public cancelButton: sc.ButtonGui;
		public toTitleButton: sc.ButtonGui;
		public saveGameButton: sc.ButtonGui;
		public optionsButton: sc.ButtonGui;
		public versionGui: sc.TextGui;
		public infoGui: sc.TextGui;
		public gfx: ig.Image;
		public transitions: any;
		public _waitForMenu: boolean;

		public constructor();

		public init(): void;
		public updateDrawables(b: any): void;
		public modelChanged(b: any, a: any): void;
		public updateButtons(b: any): void;
	}
	export class CenterMsgBoxGui extends ig.GuiElementBase {
		public transitions: any;
		public bgColor: any;
		public msgBox: sc.CenterBoxGui;
		public textGui: sc.TextGui;
		public textDone: boolean;
		public screenInteract: sc.ScreenInteractEntry;
		public callback: any;

		public constructor(b: any, a: any, d: any, c: any, e: any);

		public init(b: any, a: any, d: any, c: any, e: any): void;
		public setBoxOffset(b: any, a: any): void;
		public _onTextFinish(): void;
		public onInteraction(): void;
		public _close(): void;
		public update(): void;
		public updateDrawables(b: any): void;
	}
	export class BigGenericBar extends ig.GuiElementBase {
		public gfx: ig.Image;
		public ninepatchOuter: ig.NinePatch;
		public ninepatchInner: ig.NinePatch;
		public currentValue: number;
		public targetValue: number;
		public flowValue: number;
		public maxValue: number;
		public timer: number;
		public splits: any;
		public leftOffset: any;

		public constructor(a: any, b: any, c: any);

		public init(a: any, b: any, c: any): void;
		public setMaxValue(a: any): void;
		public setValue(a: any, b: any, c: any): void;
		public update(): void;
		public updateDrawables(a: any): void;
		public updateBarDraw(a: any, b: any, c: any, d: any, i: any, j: any): void;
	}
	export class BigHpBar extends sc.BigGenericBar {
		public transitions: any;
		public target: any;

		public constructor(a: any, b: any);

		public init(a: any, b: any): void;
		public initWithParams(): void;
		public _isHpBarVisible(): any;
		public modelChanged(a: any): void;
		public setHp(a: any): void;
		public updateSplits(): void;
		public update(): any;
		public remove(): void;
		public forceRemove(): void;
	}
	export class IndiegogoGui extends ig.GuiElementBase {
		public transitions: any;
		public button: sc.IndiegogoButton;
		public goalListGui: sc.IndiegogoGoalList;
		public goalsData: any;
		public active: boolean;

		public constructor();

		public init(): void;
		public setData(a: any): void;
		public onBarFilled(a: any): void;
		public update(): void;
		public show(): void;
		public _dataResponse(a: any): void;
		public hide(a: any): void;
	}
	export class IndiegogoButton extends ig.FocusGui {
		public gfx: ig.Image;
		public highlight: sc.IndiegogoButtonHighlight;
		public daysGui: sc.NumberGui;
		public fundBar: sc.IndiegogoFundBar;
		public actionText: sc.TextGui;

		public constructor(a: any);

		public init(a: any): void;
		public setData(a: any): void;
		public update(): void;
		public updateDrawables(a: any): void;
		public onButtonPress(): void;
	}
	export class IndiegogoButtonHighlight extends ig.BoxGui {
		public ninepatch: ig.NinePatch;
		public transitions: any;

		public constructor();

		public init(): void;
	}
	export class IndiegogoFundBar extends ig.GuiElementBase {
		public gfx: ig.Image;
		public filledCallback: any;
		public fundingGoals: any;
		public value: number;
		public maxValue: number;
		public fillCount: number;
		public fadeTimer: number;
		public beepSound: ig.Sound;
		public beepTimer: number;

		public constructor(a: any);

		public init(a: any): void;
		public setData(a: any, b: any): void;
		public update(): void;
		public updateDrawables(a: any): void;
	}
	export class IndiegogoGoal extends ig.BoxGui {
		public gfx: ig.Image;
		public ninepatch: ig.NinePatch;
		public transitions: any;
		public fade: number;
		public icon: ig.ImageGui;

		public constructor(a: any);

		public init(a: any): void;
		public setGoalState(a: any): void;
	}
	export class IndiegogoGoalList extends ig.GuiElementBase {
		public goalGuis: any;
		public viewAllMode: boolean;
		public reachedGoal: number;

		public constructor();

		public init(): void;
		public setData(a: any): void;
		public updateList(): void;
		public setViewAll(a: any): void;
		public setReachedGoal(a: any): void;
	}
	export class LevelUpContentGui extends ig.GuiElementBase {
		public gfx: ig.Image;
		public arrowTimer: number;

		public constructor();

		public init(): void;
		public update(): void;
		public updateDrawables(a: any): void;
	}
	export class LevelUpSideStatsGui extends sc.SideBoxGui {
		public deltaValues: any;

		public constructor(a: any);

		public init(a: any): void;
		public addDeltaEntry(a: any): any;
	}
	export class ItemGui extends ig.GuiElementBase {
		public transitions: any;
		public icon: ig.TextBlock;
		public timer: number;
		public target: any;
		public moveTimer: number;
		public moveTime: number;
		public diff: any;

		public constructor(a: any, b: any, c: any, d: any, i: any);

		public init(a: any, b: any, c: any, d: any, i: any): void;
		public start(a: any, b: any): void;
		public update(): void;
		public updateDrawables(a: any): void;
	}
	export class ItemGuiLayer extends ig.GuiElementBase {
		public constructor();

		public init(): void;
		public addItem(e: any, f: any, g: any): void;
	}
	export class DemoStatsStat extends ig.GuiElementBase {
		public nameGui: sc.TextGui;
		public valueGui: sc.TextGui;
		public totalGui: any;
		public name: any;
		public value: any;
		public updateCallback: any;

		public constructor(a: any, b: any, e: any, f: any);

		public init(a: any, b: any, e: any, f: any): void;
		public update(): void;
		public setValue(a: any): void;
		public addUpdater(a: any): void;
		public addTotalNumber(a: any): void;
	}
	export class DemoStats extends ig.GuiElementBase {
		public transitions: any;
		public bgColor: any;
		public msgBox: sc.CenterBoxGui;
		public content: ig.GuiElementBase;
		public callback: any;
		public screenInteract: sc.ScreenInteractEntry;

		public constructor(a: any);

		public init(a: any): void;
		public update(): void;
		public updateDrawables(a: any): void;
		public onInteraction(): void;
		public _createContent(): void;
		public _createStatLine(a: any, b: any, e: any, f: any, g: any): any;
		public _close(): void;
	}
	export class DemoHighscoreEntry extends ig.GuiElementBase {
		public nameGui: sc.TextGui;
		public valueGui: sc.TextGui;
		public name: any;
		public value: any;

		public constructor(d: any, c: any, e: any);

		public init(d: any, c: any, e: any): void;
	}
	export class DemoHighscore extends ig.GuiElementBase {
		public transitions: any;
		public msgBox: sc.CenterBoxGui;
		public content: ig.GuiElementBase;
		public callback: any;
		public screenInteract: sc.ScreenInteractEntry;
		public second: boolean;

		public constructor(a: any, b: any);

		public init(a: any, b: any): void;
		public update(): void;
		public updateDrawables(a: any): void;
		public onInteraction(): void;
		public _createContent(): void;
		public _createHighscoreEntryLine(a: any, b: any, e: any, f: any): any;
		public _close(): void;
	}
	export class DemoLastTime extends ig.GuiElementBase {
		public transitions: any;
		public msgBox: sc.CenterBoxGui;
		public content: ig.GuiElementBase;
		public callback: any;
		public screenInteract: sc.ScreenInteractEntry;
		public newRecordDone: boolean;
		public recordGui: sc.TextGui;
		public second: boolean;

		public constructor(a: any, b: any);

		public init(a: any, b: any): void;
		public update(): void;
		public onInteraction(): void;
		public _createContent(): void;
		public _close(): void;
	}
	export class TutorialPointingGui extends ig.GuiElementBase {
		public transitions: any;
		public gfx: ig.Image;

		public constructor(b: any, a: any);

		public init(b: any, a: any): void;
	}
	export class TutorialShadowGui extends ig.GuiElementBase {
		public x: number;
		public y: number;
		public width: number;
		public height: number;
		public transitions: any;

		public constructor(b: any, a: any, d: any, c: any);

		public init(b: any, a: any, d: any, c: any): void;
		public updateDrawables(b: any): void;
	}
	export class TutorialMarkerGui extends ig.GuiElementBase {
		public transitions: any;
		public shadowGui: any;
		public highlightGui: any;
		public pointerGui: any;
		public callback: any;
		public screenInteract: sc.ScreenInteractEntry;
		public sounds: any;

		public constructor(b: any, a: any, d: any, c: any, e: any, f: any, g: any, h: any, i: any);

		public init(b: any, a: any, d: any, c: any, e: any, f: any, g: any, h: any, i: any): void;
		public onInteraction(): void;
		public _close(): void;
	}
	export class TutorialStartHeaderGui extends ig.GuiElementBase {
		public constructor(b: any, a: any);

		public init(b: any, a: any): void;
	}
	export class TutorialStartContentGui extends ig.GuiElementBase {
		public constructor(b: any, a: any);

		public init(b: any, a: any): void;
	}
	export class TutorialStartGui extends ig.GuiElementBase {
		public transitions: any;
		public bgColor: any;
		public titleBox: sc.CenterBoxGui;
		public contentText: any;
		public contentImage: ig.Image;
		public centerBox: any;
		public decisionBox: sc.CompactChoiceBoxGui;
		public screenInteract: any;
		public pausePushed: boolean;
		public sounds: any;

		public constructor(b: any, a: any, d: any, c: any, e: any);

		public init(b: any, a: any, d: any, c: any, e: any): void;
		public onLoadableComplete(): void;
		public buildContent(): void;
		public onDetach(): void;
		public startPause(): void;
		public clearPause(): void;
		public _close(): void;
		public updateDrawables(b: any): void;
		public onChoice(b: any): void;
	}
	export class SkipSceneGui extends ig.GuiElementBase {
		public transitions: any;
		public textGui: sc.TextGui;
		public timer: number;

		public constructor();

		public init(): void;
		public modelChanged(b: any, a: any, d: any): void;
	}
	export class EquipStatusContainer extends ig.GuiElementBase {
		public compareMode: boolean;
		public compareOffHand: boolean;
		public baseParams: any;
		public allModifiers: any;
		public modifiers: any;
		public statusPanel: any;
		public modPanel: any;
		public modMore: sc.TextGui;
		public arrow: any;
		public arrow2: any;
		public gfx: ig.Image;
		public mode: boolean;

		public constructor();

		public init(): void;
		public showMenu(): void;
		public toggleViewMode(a: any): void;
		public updateStatusView(a: any): void;
		public updateModText(a: any): void;
		public _createStatusDisplay(a: any, b: any, c: any, e: any, f: any, g: any, h: any, i: any, j: any, k: any, l: any, o: any): any;
		public _setParameters(a: any, d: any): any;
		public _calculateDifferenceModifier(a: any, b: any, c: any, e: any): any;
		public _calculateDifference(a: any, b: any, c: any, e: any): any;
		public _resetChangeValue(a: any): void;
		public _setCurrentValues(): void;
		public _setCurrentModifiers(): void;
		public modelChanged(a: any, b: any, c: any): void;
	}
	export class EquipLevelOverview extends sc.MenuPanel {
		public transitions: any;
		public playerLevel: sc.NumberGui;
		public equipLevel: sc.NumberGui;

		public constructor();

		public init(): void;
		public show(): void;
		public hide(a: any): void;
		public updateNumbers(a: any): void;
		public setColors(a: any): void;
	}
	export class BodyPartButton extends sc.ButtonGui {
		public otherButton: any;
		public callback: any;

		public constructor(a: any, b: any, c: any, e: any, f: any);

		public init(a: any, b: any, c: any, e: any, f: any): void;
		public focusGained(): void;
		public focusLost(): void;
		public setPressed(a: any): void;
		public setPressedAndUnFocus(a: any): void;
		public isSameAs(a: any): any;
	}
	export class BodyPartMouseButton extends ig.GuiElementBase {
		public gfx: ig.Image;
		public button: sc.BodyPartButton;
		public slope: sc.SlopeLine;
		public line: ig.ColorGui;
		public connect: ig.ColorGui;
		public end: ig.ImageGui;
		public equip: sc.EquipMenuMiddleIcon;
		public sizeTransition: any;
		public topY: number;
		public bottomY: number;
		public _isActiveTop: boolean;
		public _hasLine: boolean;

		public constructor(a: any, b: any, c: any, e: any, f: any, g: any);

		public init(a: any, b: any, c: any, e: any, f: any, g: any): void;
		public _focusCallback(a: any, b: any): void;
		public update(): void;
		public _updateSize(): void;
		public setEquip(a: any, b: any, c: any, e: any): void;
		public setPressedAndUnFocus(a: any): void;
		public moveToBottom(): void;
		public moveToTop(): void;
		public showButton(): void;
		public hideButton(): void;
		public showLine(a: any): void;
		public hideLine(a: any): void;
		public resetLine(): void;
	}
	export class EquipMenuMiddleIcon extends ig.GuiElementBase {
		public gfx: ig.Image;
		public menuGfx: ig.Image;
		public transitions: any;
		public equipIcon: ig.ImageGui;
		public animTimer: number;
		public animFrame: any;

		public constructor();

		public init(): void;
		public setEquip(a: any, b: any, c: any, e: any): void;
		public getTypeIndex(a: any): any;
		public update(): void;
		public updateDrawables(a: any): void;
	}
	export class EquipRightContainer extends sc.MenuPanel {
		public partChooser: sc.EquipBodyPartContainer;
		public itemList: sc.ItemListBox;
		public sortTypes: any;
		public _itemListActive: boolean;
		public _lastEquipState: boolean;
		public _globalButtons: any;
		public _refocusFromCycle: boolean;

		public constructor(b: any);

		public init(b: any): void;
		public update(): void;
		public _equipItem(b: any, a: any): any;
		public setCurrentBodypartPressed(): void;
		public setCurrentBodypartUnpressed(): void;
		public _updateItemList(): void;
		public _activateItemList(): void;
		public _deactivateItemList(b: any): void;
		public _exitItemList(): void;
		public _makeList(b: any, a: any, d: any, c: any, e: any): void;
		public isIDEquipped(b: any): any;
		public getCurrentSortText(): any;
		public modelChanged(b: any, a: any, d: any): void;
		public showMenu(): void;
		public hideMenu(): void;
		public tempShowMenu(): void;
		public tempHideMenu(): void;
	}
	export class EquipBodyPartContainer extends ig.GuiElementBase {
		public buttonGroup: sc.ButtonGroup;
		public buttons: any;

		public constructor(b: any);

		public init(b: any): void;
		public showMenu(): void;
		public hideMenu(): void;
		public refocusOnBack(): void;
		public _createButton(b: any, a: any, d: any, c: any, e: any, f: any, g: any, h: any): any;
		public _moveButtons(b: any): void;
		public _pullInAllButtons(b: any): void;
		public _setText(b: any): void;
		public modelChanged(b: any, a: any, d: any): void;
	}
	export class HelpAnnoBase extends ig.FocusGui {
		public gfx: ig.Image;
		public icon: number;
		public flipX: boolean;
		public flipY: boolean;

		public constructor(b: any, a: any, d: any, c: any);

		public init(b: any, a: any, d: any, c: any): void;
		public updateDrawables(b: any): void;
	}
	export class HelpInfoBox extends sc.MenuPanel {
		public transitions: any;
		public title: sc.TextGui;
		public description: sc.TextGui;
		public line: ig.ColorGui;
		public content: ig.GuiElementBase;

		public constructor();

		public init(): void;
		public show(b: any, a: any, d: any, c: any, e: any): void;
		public hide(): void;
		public getText(b: any, a: any): any;
	}
	export class HelpLevelEntry extends ig.GuiElementBase {
		public color: sc.TextGui;
		public desc: sc.TextGui;

		public constructor(b: any, a: any);

		public init(b: any, a: any): void;
	}
	export class HelpBuffEntry extends ig.GuiElementBase {
		public icon: sc.TextGui;
		public statName: sc.TextGui;
		public description: sc.TextGui;

		public constructor(b: any, a: any);

		public init(b: any, a: any): void;
		public getStatName(b: any, a: any, d: any): any;
		public getStatValue(b: any, a: any, d: any): any;
	}
	export class HelpScreen extends ig.GuiElementBase {
		public hotkeyHelp: sc.ButtonGui;
		public hotkeyBack: sc.ButtonGui;
		public topBar: ig.ColorGui;
		public bottomBar: ig.ColorGui;
		public box: sc.HelpScreenBorder;
		public color: ig.ColorGui;
		public content: ig.GuiElementBase;
		public info: sc.HelpInfoBox;
		public buttonInteract: ig.ButtonInteractEntry;
		public buttonGroup: sc.ButtonGroup;
		public backCallback: any;
		public manualTitle: any;
		public manualContent: any;
		public manualGui: sc.MultiPageBoxGui;
		public base: any;
		public addons: any;
		public fillEmptySpaces: boolean;

		public constructor(a: any, b: any, c: any, e: any, f: any);

		public init(a: any, b: any, c: any, e: any, f: any): void;
		public addObservers(): void;
		public removeObservers(): void;
		public openMenu(a: any): void;
		public exitMenu(): void;
		public createAnnotationsRec(a: any, b: any, c: any, e: any): void;
		public createGUI(a: any, b: any, c: any, e: any): void;
		public addToButtonGroup(a: any, d: any, c: any): void;
		public onHotkeyHelpCheck(): any;
		public onHelpButtonPressed(): void;
		public onHotkeyBackCheck(): any;
		public onBackButtonPressed(): void;
		public createHelpGui(): void;
		public onAddHotkeys(): void;
		public modelChanged(): void;
	}
	export class HelpScreenBorder extends ig.GuiElementBase {
		public ninepatch: ig.NinePatch;
		public box: ig.BoxGui;

		public constructor();

		public init(): void;
		public update(): void;
		public show(): void;
		public hide(): void;
		public doSizeTransition(a: any, b: any, c: any, e: any, f: any): void;
	}
	export class EquipMenu extends sc.BaseMenu {
		public gfx: ig.Image;
		public transitions: any;
		public globalButtons: any;
		public statusContainer: sc.EquipStatusContainer;
		public rightContainer: sc.EquipRightContainer;
		public overview: sc.EquipLevelOverview;
		public quickSelectButtonGroup: sc.ButtonGroup;
		public hotkeys: any;
		public sortMenu: sc.ItemSortMenu;
		public helpGui: sc.HelpScreen;

		public constructor();

		public init(): void;
		public initEquipIcon(b: any, a: any): void;
		public addObservers(): void;
		public removeObservers(): void;
		public _onHelpButtonCheck(): any;
		public _onHelpButtonPressed(): void;
		public createHelpGui(): void;
		public onSortButtonCheck(): any;
		public onSortButtonPress(): void;
		public onStatusButtonCheck(): any;
		public onStatusButtonPress(): void;
		public onHotkeySwitchCheck(): any;
		public _addHotKeys(b: any): any;
		public _exitMenu(): void;
		public _moveBodyPartLines(b: any, a: any): void;
		public _pullInAllButtons(b: any, a: any): void;
		public _updateSortHotkey(b: any): void;
		public _updateMouseButtons(b: any, a: any): void;
		public modelChanged(b: any, a: any, d: any): void;
		public showMenu(b: any, a: any): void;
		public hideMenu(b: any, a: any): void;
		public exitMenu(b: any): void;
	}
	export class BaseSkill extends ig.Class {
		public id: any;
		public level: number;
		public element: any;
		public type: any;
		public skillKey: any;
		public icon: number;

		public constructor(a: any, b: any);

		public init(a: any, b: any, _usedInChild2: any, _usedInChild3: any): void;
		public applyOnConfigs(_usedInChild0: any): void;
		public getName(): any;
		public getDescription(): any;
		public getCPCost(): any;
		public _getElementConfig(a: any): any;
	}
	export class StatSkill extends sc.BaseSkill {
		public statType: string;

		public applyOnConfigs(a: any): void;
		public getDescription(): any;
	}
	export class ElementSkill extends sc.BaseSkill {
		public counter: boolean;

		public constructor(a: any, b: any);

		public init(a: any, b: any): void;
		public applyOnConfigs(a: any): void;
		public _getFactor(): any;
		public getDescription(): any;
	}
	export class SpecialSkill extends sc.BaseSkill {
		public skillType: any;
		public branchType: any;

		public constructor(b: any, c: any, d: any, e: any);

		public init(b: any, c: any, d: any, e: any): void;
		public getName(): any;
		public getDescription(): any;
		public applyOnConfigs(a: any): void;
		public getCombatArtLevel(a: any, b: any): any;
		public _getElementName(): any;
	}
	export class SkillTree extends ig.SingleLoadable {
		public version: number;
		public _trees: any;
		public skills: any;
		public UID: number;

		public constructor();

		public init(): void;
		public loadInternal(): void;
		public onerror(b: any): void;
		public onload(b: any): void;
		public _createSkills(): void;
		public _createElementTreeSkills(b: any, a: any, d: any): void;
		public _createSkill(b: any, a: any): any;
		public isEmpty(b: any): any;
		public autoSkill(b: any, a: any, d: any): void;
		public _autoSkillElement(b: any, a: any, d: any, c: any): void;
		public _addAutoSkillOptions(b: any, a: any): void;
		public _learnSkillOption(b: any, a: any, d: any): void;
		public getTree(b: any): any;
		public getSkill(b: any): any;
	}
	export class CircuitSwapCursor extends ig.GuiElementBase {
		public gfx: ig.Image;
		public focusOffset: any;
		public focus: boolean;
		public _focusTimer: number;
		public _focusTime: number;
		public _focusOffset: number;
		public _lastDevice: number;
		public _gamepadActive: boolean;
		public _worldmap: boolean;
		public _ignoreModel: boolean;

		public constructor();

		public init(): void;
		public focusOnNode(b: any, a: any): void;
		public unfocus(): void;
		public resetFocusTimer(): void;
		public moveTo(b: any, a: any, d: any, c: any): void;
		public update(): void;
		public updateDrawables(b: any): void;
		public modelChanged(b: any, a: any): void;
	}
	export class CrossPointsOverview extends ig.GuiElementBase {
		public gfx: ig.Image;
		public transitions: any;
		public sizeTransition: any;
		public points: any;
		public background: sc.MenuPanel;
		public leftButton: sc.ButtonGui;
		public rightButton: sc.ButtonGui;
		public currentElement: any;
		public minimized: boolean;
		public _elementCount: number;

		public constructor();

		public init(): any;
		public update(): void;
		public doSizeTransition(b: any, a: any, d: any, c: any): void;
		public _addHotkeys(): void;
		public _onHotkeyRight(): void;
		public _onHotkeyLeft(): void;
		public _checkHotkey(): any;
		public _circleTree(b: any): void;
		public _cycleElements(b: any): any;
		public _selectElement(b: any): void;
		public _minimizeOverview(b: any): void;
		public _maximizeOverview(b: any): void;
		public _resetOverview(): void;
		public _setPositions(b: any, a: any, d: any): any;
		public addObservers(): void;
		public removeObservers(): void;
		public showMenu(): void;
		public hideMenu(): void;
		public exitMenu(): void;
		public removeHotkeys(): void;
		public modelChanged(b: any, a: any): void;
	}
	export class DebugSkillLearner extends ig.GuiElementBase {
		public buttonInteract: ig.ButtonInteractEntry;
		public button: sc.ButtonGui;
		public itemList: sc.ItemListBox;
		public selfUpdate: boolean;

		public constructor();

		public init(): any;
		public update(): void;
		public modelChanged(b: any, a: any, d: any): void;
		public _loadSkills(): void;
		public _updateLearned(b: any): void;
	}
	export class CiruitCursor extends ig.GuiElementBase {
		public gfx: ig.Image;
		public focus: boolean;
		public _focusTimer: number;
		public _focusTime: number;
		public _focusOffset: number;
		public _lastDevice: number;
		public _gamepadActive: boolean;

		public constructor();

		public init(): void;
		public focusOnNode(a: any, b: any): void;
		public unfocus(): void;
		public moveTo(a: any, b: any, c: any, d: any): void;
		public addObservers(): void;
		public removeObservers(): void;
		public update(): void;
		public updateDrawables(a: any): void;
		public modelChanged(a: any, b: any): void;
	}
	export class CircuitNodeMenu extends sc.MenuPanel {
		public ninepatch: ig.NinePatch;
		public transitions: any;
		public activateSound: ig.Sound;
		public cost: sc.TextGui;
		public costNumber: sc.NumberGui;
		public costCP: sc.TextGui;
		public activate: sc.ButtonGui;
		public cancel: sc.ButtonGui;
		public buttonGroup: sc.ButtonGroup;
		public mode: any;
		public delta: any;
		public _scrollHook: any;
		public _currentFocusGui: any;
		public _maxOrSkillStep: number;
		public _chainMode: boolean;

		public constructor(a: any);

		public init(a: any): void;
		public addObservers(): void;
		public removeObservers(): void;
		public update(): void;
		public updateDrawables(a: any): void;
		public modelChanged(a: any, b: any, c: any): void;
		public _onActivatePress(): void;
		public _showEffectOnBranch(a: any): void;
		public _chainActive(a: any): void;
		public _collectSkills(a: any, b: any, c: any): any;
		public _setContent(a: any): any;
		public _getTotalSkillCost(a: any, b: any): any;
		public _onCancelPress(): void;
		public _enterNodeMenu(a: any): void;
		public _exitNodeMenu(): void;
		public _onBackButtonPress(): void;
		public _addLine(a: any, b: any, c: any, d: any): void;
		public _updatePos(): void;
		public _hasParent(a: any): any;
	}
	export class CircuitInfoBox extends sc.MenuPanel {
		public ninepatch: ig.NinePatch;
		public header: sc.TextGui;
		public line: ig.ColorGui;
		public text: sc.TextGui;
		public special: sc.TextGui;
		public cpCost: sc.TextGui;
		public prevMove: any;
		public delta: any;
		public jumpFromLastSkill: any;
		public lastPos: any;
		public lastPosTimer: number;
		public _scrollHook: any;
		public sizeTransition: any;
		public FONT_BOX_OPTIONS: any;

		public constructor(a: any);

		public init(a: any): void;
		public addObservers(): void;
		public removeObservers(): void;
		public doSizeTransition(a: any): void;
		public update(): void;
		public modelChanged(a: any, b: any): void;
		public _updatePos(b: any): void;
		public _updateSize(): void;
		public _setContent(): void;
		public _hideInfo(): void;
	}
	export class CircuitDetailButtonGroup extends ig.ButtonGroup {
		public sounds: any;

		public isNonMouseMenuInput(): any;
		public doButtonTraversal(): void;
		public cycleElements(a: any): any;
	}
	export class CircuitMenuButtonGroup extends ig.ButtonGroup {
		public sounds: any;
		public repeater: ig.PressRepeater;

		public constructor();

		public init(): void;
		public setButtons(a: any, b: any, c: any, d: any, e: any): void;
		public isNonMouseMenuInput(): any;
		public doButtonTraversal(a: any): any;
		public getRepeaterValue(): any;
		public activate(): void;
	}
	export class CircuitOverviewMenu extends ig.GuiElementBase {
		public gfx: ig.Image;
		public transitions: any;
		public buffers: any;
		public elements: any;
		public buttons: any;
		public buttonGroup: sc.CircuitMenuButtonGroup;

		public constructor();

		public init(): void;
		public onAttach(): void;
		public onFirstTimeAnimationDone(a: any): void;
		public onDetach(): void;
		public modelChanged(a: any, b: any): void;
		public addObservers(): void;
		public removeObservers(): void;
		public showMenu(): void;
		public exitMenu(a: any): void;
		public enterDetailView(): void;
		public leaveDetailView(): void;
		public updateAllBuffers(): void;
		public updateBuffer(a: any): void;
		public _createTrees(): void;
		public _updateBufferFromFirstTime(a: any): void;
		public _preDrawTree(a: any): void;
		public _preDrawTreeNodes(a: any, c: any, e: any, f: any, g: any): void;
		public _preDrawTreeRecursive(d: any, e: any, f: any, g: any, h: any, i: any): void;
		public _drawLine(a: any, d: any, f: any, g: any, h: any, i: any): void;
		public _drawLineStraightLine(a: any, b: any, d: any): void;
		public _drawOrBranchConnection(a: any, b: any, c: any, d: any, e: any, f: any, g: any): void;
		public _rotate(a: any, c: any, d: any): any;
		public _getDrawingDirection(a: any): any;
		public isEmpty(a: any): any;
	}
	export class CircuitEffectDisplay extends ig.GuiElementBase {
		public gfx: ig.Image;
		public transitions: any;
		public skillGui: any;
		public skill: any;
		public timer: number;
		public display: sc.NPCDisplayGui;
		public container: ig.GuiElementBase;
		public effectDone: boolean;
		public delay: number;
		public large: boolean;
		public iconSize: number;

		public constructor(b: any);

		public init(b: any): void;
		public show(b: any, a: any, d: any): void;
		public hide(): void;
		public update(): void;
		public updateDrawables(b: any): void;
		public onLoaded(b: any): void;
		public onEffectEvent(b: any): void;
	}
	export class CircuitTreeDetailContainer extends ig.GuiElementBase {
		public gfx: ig.Image;
		public transitions: any;
		public trees: any;
		public cursor: sc.CiruitCursor;
		public _lastMousePos: any;
		public _dragTimer: number;
		public _cameraLastPositions: any;
		public _lastDevice: number;
		public _gamepadActive: boolean;
		public _cursorPos: any;
		public _delayedDrag: boolean;

		public constructor();

		public init(): void;
		public scrollToTree(a: any, b: any, c: any, d: any): void;
		public limitCameraPos(a: any): void;
		public limitCursorPos(a: any): void;
		public switchElementTree(a: any, b: any): void;
		public exitMenu(): void;
		public addObservers(): void;
		public removeObservers(): void;
		public update(): void;
		public updateDrawables(a: any): void;
		public onMouseInteract(a: any, b: any): void;
		public modelChanged(a: any, b: any, c: any): void;
		public _initCursorPos(a: any, b: any): void;
		public _checkLastDevice(): void;
		public _addTreeLazy(a: any): void;
	}
	export class CircuitTreeDetail extends ig.GuiElementBase {
		public gfx: ig.Image;
		public transitions: any;
		public tree: any;
		public buttonGroup: sc.CircuitDetailButtonGroup;
		public skills: any;
		public skillStart: number;
		public effectGuis: any;

		public constructor(a: any);

		public init(a: any): void;
		public updateDrawables(a: any): void;
		public addObservers(): void;
		public removeObservers(): void;
		public activate(a: any, b: any): void;
		public deactivate(a: any): void;
		public exit(): void;
		public modelChanged(a: any, b: any, c: any): void;
		public _showEffect(a: any, b: any, c: any): void;
		public _onBackButtonPress(): void;
		public _createTree(): void;
		public _createTreeNodesRecursive(a: any, b: any, c: any, d: any, f: any, g: any, i: any): void;
		public _createLine(a: any, b: any, c: any, d: any, f: any, g: any): any;
	}
	export class CircuitSwapBranches extends ig.GuiElementBase {
		public transitions: any;
		public buttonGroup: sc.MouseButtonGroup;
		public cursor: sc.CircuitSwapCursor;
		public _gamepadActive: boolean;
		public _lastDevice: number;
		public _cursorPos: any;
		public _firstVisit: boolean;
		public effectGuis: any;

		public constructor();

		public init(): void;
		public update(): void;
		public addObservers(): void;
		public removeObservers(): void;
		public showMenu(): void;
		public exitMenu(): void;
		public _initCursor(a: any): void;
		public _limitCursorPos(): void;
		public _focusButton(): void;
		public _onBackButtonPress(): void;
		public _showEffect(a: any): void;
		public modelChanged(a: any, b: any, d: any): void;
	}
	export class CircuitSwapBranchesInfoBox extends ig.GuiElementBase {
		public transitions: any;
		public gfx: ig.Image;
		public buttonGroup: any;
		public currentFocus: any;
		public leftContent: sc.MenuPanel;
		public rightContent: sc.MenuPanel;
		public arrow: ig.ImageGui;
		public branches: any;
		public _scrollHook: any;
		public delta: any;

		public constructor(a: any);

		public init(a: any): void;
		public setContent(a: any): void;
		public showMenu(): void;
		public hideMenu(): void;
		public modelChanged(a: any, b: any): void;
		public addObservers(): void;
		public removeObservers(): void;
	}
	export class CircuitMenu extends sc.BaseMenu {
		public overview: sc.CircuitOverviewMenu;
		public points: sc.CrossPointsOverview;
		public detail: sc.CircuitTreeDetailContainer;
		public info: sc.CircuitInfoBox;
		public node: sc.CircuitNodeMenu;
		public swap: sc.CircuitSwapBranches;
		public bg: ig.ColorGui;
		public swapInfo: sc.CircuitSwapBranchesInfoBox;
		public hotkeySwap: sc.ButtonGui;
		public hotkeyHelp: sc.ButtonGui;
		public helpGui: sc.HelpScreen;

		public constructor();

		public init(): void;
		public _onBackButtonPress(): void;
		public _onHelpButtonCheck(): any;
		public _onHelpButtonPressed(): void;
		public createHelpGui(): void;
		public _onSwapButtonCheck(): any;
		public _onSwapButtonPressed(): void;
		public _addHotKeys(b: any): void;
		public commitHotKeysToTopBar(b: any): any;
		public addObservers(): void;
		public removeObservers(): void;
		public showMenu(): void;
		public hideMenu(): void;
		public exitMenu(): void;
		public modelChanged(b: any, a: any): void;
	}
	export class ItemStatusEquip extends sc.MenuPanel {
		public baseParams: any;
		public gfx: ig.Image;

		public constructor();

		public init(): void;
		public addObservers(): void;
		public removeObservers(): void;
		public showMenu(): void;
		public exitMenu(): void;
		public modelChanged(b: any, a: any, d: any): void;
		public _setParameters(b: any): void;
		public _resetParameters(): void;
		public _createStatusDisplay(b: any, a: any, d: any, c: any, e: any, f: any, g: any): any;
	}
	export class ItemEquipModifier extends sc.HeaderMenuPanel {
		public modifierText: any;
		public modifierPool: any;

		public constructor();

		public init(): void;
		public addObservers(): void;
		public removeObservers(): void;
		public showMenu(): void;
		public exitMenu(): void;
		public modelChanged(b: any, a: any, d: any): void;
		public _setParameters(b: any): void;
		public _resetParameters(): void;
		public _createStatusDisplay(b: any, a: any, d: any, c: any, e: any, f: any, g: any, h: any, i: any, j: any): any;
	}
	export class ItemStatusDefaultBar extends ig.GuiElementBase {
		public gfx: ig.Image;
		public backgroundPatch: ig.NinePatch;
		public barPatch: ig.NinePatch;
		public type: number;
		public name: string;
		public maxValue: number;
		public currentValue: any;
		public targetValue: number;
		public timer: number;
		public currentNumber: sc.NumberGui;
		public maxNumber: sc.NumberGui;
		public buff: any;
		public barHeight: number;
		public model: any;

		public constructor(a: any, b: any, c: any, d: any, e: any, f: any);

		public init(a: any, b: any, c: any, d: any, e: any, f: any): void;
		public updateValues(a: any, b: any, c: any, d: any): void;
		public resetValues(): void;
		public update(): void;
		public updateDrawables(a: any): void;
		public _drawSpBarMinified(a: any): void;
		public _drawSpBar(c: any): void;
	}
	export class ItemStatusDefault extends sc.MenuPanel {
		public menuGfx: ig.Image;
		public statusGfx: ig.Image;
		public level: sc.NumberGui;
		public hpBar: sc.ItemStatusDefaultBar;
		public spBar: sc.ItemStatusDefaultBar;
		public expBar: sc.ItemStatusDefaultBar;

		public constructor();

		public init(): void;
		public updateDrawables(a: any): void;
		public addObservers(): void;
		public removeObservers(): void;
		public showMenu(): void;
		public exitMenu(): void;
		public modelChanged(a: any, b: any): void;
		public _updateElements(a: any): void;
	}
	export class ItemStatusBuffs extends sc.HeaderMenuPanel {
		public gfx: ig.Image;
		public maxBuffs: sc.NumberGui;
		public currentBuffs: sc.NumberGui;
		public _removeStartIndex: number;

		public constructor();

		public init(): void;
		public addObservers(): void;
		public removeObservers(): void;
		public showMenu(): void;
		public exitMenu(): void;
		public modelChanged(b: any, a: any): void;
		public _createBuffs(): void;
	}
	export class ItemBuffHelp extends ig.GuiElementBase {
		public gfx: ig.Image;
		public transitions: any;

		public constructor();

		public init(): void;
		public addObservers(): void;
		public removeObservers(): void;
		public showMenu(): void;
		public exitMenu(b: any): void;
		public modelChanged(b: any, a: any, d: any): void;
	}
	export class FavoriteElementGui extends ig.GuiElementBase {
		public gfx: ig.Image;
		public text: sc.TextGui;
		public id: any;

		public constructor();

		public init(): void;
		public setItem(b: any): void;
		public updateDrawables(b: any): void;
	}
	export class ItemStatusFavorites extends sc.HeaderMenuPanel {
		public gfx: ig.Image;
		public line: ig.Image;
		public maxFavs: sc.NumberGui;
		public currentFavs: sc.NumberGui;
		public _favs: any;

		public constructor();

		public init(): any;
		public addObservers(): void;
		public removeObservers(): void;
		public showMenu(): void;
		public exitMenu(): void;
		public updateFavorites(): void;
		public modelChanged(b: any, a: any): void;
	}
	export class ItemStatusTrade extends sc.HeaderMenuPanel {
		public gfx: ig.Image;
		public content: ig.GuiElementBase;

		public constructor();

		public init(): void;
		public addObservers(): void;
		public removeObservers(): void;
		public showMenu(): void;
		public exitMenu(): void;
		public modelChanged(a: any, b: any, e: any): void;
		public _setTradeInfo(a: any): void;
	}
	export class SortMenu extends ig.BoxGui {
		public ninepatch: ig.NinePatch;
		public transitions: any;
		public buttongroup: sc.ButtonGroup;
		public buttons: any;
		public active: boolean;
		public yPosition: number;
		public callback: any;
		public backCallback: any;
		public currentSortingText: any;

		public constructor(b: any, a: any, d: any);

		public init(b: any, a: any, d: any): void;
		public addButton(b: any, a: any, d: any): void;
		public setButtonKey(b: any, a: any): void;
		public showSortMenu(b: any): void;
		public showSortMenuAt(b: any, a: any): void;
		public hideSortMenu(): void;
		public onBackButtonPress(): void;
		public _createButton(b: any, a: any, d: any, c: any): any;
	}
	export class ItemSortMenu extends sc.SortMenu {
		public constructor();

		public init(): void;
		public onButtonPress(b: any): void;
	}
	export class ItemTabbedBox extends ig.GuiElementBase {
		public gfx: ig.Image;
		public list: sc.MultiColumnItemListBox;
		public tabs: any;
		public sortTypes: any;
		public tabArray: any;
		public buttonGroup: any;
		public tabGroup: sc.ButtonGroup;
		public submitSound: any;
		public favSound: any;
		public errorSound: any;
		public toggleOnSound: any;
		public toggleOffSound: any;
		public _prevPressed: any;
		public _refocusFromCycle: any;
		public _lastCursorPos: any;
		public _bgRev: any;
		public _curElement: any;

		public constructor();

		public init(): void;
		public addObservers(): void;
		public removeObservers(): void;
		public showMenu(): void;
		public exitMenu(): void;
		public setFavorite(): void;
		public isNonMouseMenuInput(): any;
		public onButtonTraversal(): void;
		public onItemButtonPressed(b: any): void;
		public modelChanged(b: any, a: any, d: any): void;
		public getCurrentSortText(): any;
		public _createList(b: any, a: any, d: any, c: any, e: any, f: any): void;
		public addEmpty(): void;
		public _createTabButton(b: any, a: any, d: any, c: any, e: any): any;
		public _resetButtons(b: any, a: any): void;
		public _rearrangeTabs(): void;
		public _addEquipOverlay(b: any, a: any): void;
		public _addFavoriteOverlay(b: any): void;
		public _removeFavoriteOverlay(b: any): void;
	}
	export class ItemMenu extends sc.BaseMenu {
		public hotkeyHelp: sc.ButtonGui;
		public hotkeyFav: sc.ButtonGui;
		public hotkeySort: sc.ButtonGui;
		public statusEquipBox: sc.ItemStatusEquip;
		public statusModifierBox: sc.ItemEquipModifier;
		public statusDefaultBox: sc.ItemStatusDefault;
		public statusBuffBox: sc.ItemStatusBuffs;
		public statusFavs: sc.ItemStatusFavorites;
		public statusTrade: sc.ItemStatusTrade;
		public listBox: sc.ItemTabbedBox;
		public consHelp: sc.ItemBuffHelp;
		public sortMenu: sc.ItemSortMenu;
		public helpGui: sc.HelpScreen;

		public constructor();

		public init(): void;
		public addObservers(): void;
		public removeObservers(): void;
		public showMenu(): void;
		public hideMenu(): void;
		public exitMenu(): void;
		public onHotkeyHelpCheck(): any;
		public onHelpButtonPressed(): void;
		public createHelpGui(): void;
		public onHotkeyFavoriteCheck(): any;
		public onFavButtonPress(): void;
		public onHotkeySortCheck(): any;
		public onSortButtonPress(): void;
		public onAddHotkeys(b: any): void;
		public commitHotKeysToTopBar(b: any): any;
		public onBackButtonPress(): void;
		public _updateSortMenuButton(b: any): void;
		public modelChanged(b: any, a: any, d: any): void;
	}
	export class LandmarkGui extends ig.FocusGui {
		public gfx: ig.Image;
		public key: any;
		public activated: boolean;
		public floor: number;
		public landmark: any;
		public map: any;
		public description: any;
		public name: any;

		public constructor(a: any, b: any, c: any, d: any, i: any);

		public init(a: any, b: any, c: any, d: any, i: any): void;
		public updateDrawables(a: any): void;
		public isMouseOver(): any;
		public getDistanceToCursor(): any;
	}
	export class MapCurrentRoomWrapper extends ig.GuiElementBase {
		public gfx: ig.Image;
		public transitions: any;

		public constructor(a: any);

		public init(a: any): void;
	}
	export class MapNameGui extends ig.BoxGui {
		public transitions: any;
		public ninepatch: ig.NinePatch;
		public text: sc.TextGui;

		public constructor();

		public init(): void;
		public setText(a: any, b: any, c: any): void;
	}
	export class WorldmapAreaName extends ig.GuiElementBase {
		public gfx: ig.Image;
		public name: sc.MapNameGui;
		public hasText: boolean;
		public flip: boolean;

		public constructor();

		public init(): void;
		public updateDrawables(a: any): void;
		public setText(a: any, b: any, c: any): void;
		public setFlip(a: any): void;
	}
	export class MapCursor extends ig.GuiElementBase {
		public gfx: ig.Image;
		public focusOffset: any;
		public focus: boolean;
		public _focusTimer: number;
		public _focusTime: number;
		public _focusOffset: number;
		public _lastDevice: number;
		public _gamepadActive: boolean;
		public _worldmap: boolean;
		public _ignoreModel: boolean;

		public constructor(a: any);

		public init(a: any): void;
		public focusOnNode(a: any, b: any): void;
		public unfocus(): void;
		public moveTo(a: any, b: any, c: any, d: any): void;
		public looseFocus(): void;
		public addObservers(): void;
		public removeObservers(): void;
		public update(): void;
		public updateDrawables(a: any): void;
		public modelChanged(a: any, b: any, c: any): void;
	}
	export class MapChestDisplay extends ig.GuiElementBase {
		public gfx: ig.Image;
		public current: sc.NumberGui;
		public max: sc.NumberGui;
		public _oldCount: any;
		public _oldMax: any;
		public transitions: any;

		public constructor();

		public init(): void;
		public update(): void;
		public updateDrawables(a: any): void;
	}
	export class MapStampDisplay extends ig.GuiElementBase {
		public gfx: ig.Image;
		public current: sc.NumberGui;
		public max: sc.NumberGui;
		public _oldCount: any;
		public transitions: any;

		public constructor();

		public init(): void;
		public update(): void;
		public updateDrawables(a: any): void;
	}
	export class MapFloorButton extends ig.FocusGui {
		public gfx: ig.Image;
		public textGui: sc.TextGui;
		public name: string;
		public level: number;
		public alpha: number;
		public alphaTimer: number;

		public constructor(a: any, b: any);

		public init(a: any, b: any): void;
		public focusGained(a: any): void;
		public onMouseInteract(a: any, b: any): void;
		public update(): void;
		public updateDrawables(a: any): void;
	}
	export class MapFloorButtonContainer extends ig.GuiElementBase {
		public gfx: ig.Image;
		public buttongroup: sc.ButtonGroup;
		public leaIcon: ig.ImageGui;
		public hasVisitedRooms: any;
		public _floors: any;
		public _selfUpdate: boolean;
		public _submitSound: any;
		public _minFloor: number;
		public _maxFloor: number;

		public constructor();

		public init(): void;
		public showMenu(): void;
		public exitMenu(): void;
		public addObservers(): void;
		public removeObservers(): void;
		public centerMap(): void;
		public update(): void;
		public pressed(a: any, b: any, c: any): any;
		public onFloorPress(a: any): void;
		public modelChanged(a: any, b: any, c: any): void;
		public _createButtons(a: any): void;
		public _getFloorName(a: any, b: any): any;
	}
	export class CurrentAreaDisplay extends sc.MenuPanel {
		public transitions: any;
		public text: sc.TextGui;

		public constructor();

		public init(): void;
		public addObservers(): void;
		public removeObservers(): void;
		public showMenu(): void;
		public exitMenu(): void;
		public modelChanged(a: any, b: any, c: any): void;
	}
	export class DebugFloorView extends sc.MenuPanel {
		public transitions: any;
		public floor: any;

		public constructor();

		public init(): void;
		public updateDrawables(a: any): void;
	}
	export class StampGui extends ig.FocusGui {
		public gfx: ig.Image;
		public key: string;
		public icon: any;
		public floor: number;
		public floorGui: any;
		public name: string;
		public index: any;
		public activated: boolean;

		public constructor(a: any, b: any, c: any, d: any, i: any, j: any);

		public init(a: any, b: any, c: any, d: any, i: any, j: any): void;
		public setKey(a: any): void;
		public updateDrawables(a: any): void;
		public isMouseOver(): any;
		public getDistanceToCursor(): any;
	}
	export class StampEditMenu extends ig.BoxGui {
		public transitions: any;
		public ninepatch: ig.NinePatch;
		public delete: sc.ButtonGui;
		public anchor: any;
		public stamps: any;
		public buttongroup: sc.ButtonGroup;
		public _active: boolean;

		public constructor();

		public init(): void;
		public show(c: any): void;
		public hide(a: any): void;
		public createStamps(): void;
		public limitPosition(c: any, d: any): void;
		public unPressAllButtons(): void;
		public pressCurrentStamp(a: any): void;
		public updateDrawables(a: any): void;
		public onBackPressed(): void;
	}
	export class StampMenuButton extends sc.ButtonGui {
		public icons: ig.Image;
		public key: string;
		public icon: any;
		public iconGui: ig.ImageGui;

		public constructor(a: any);

		public init(a: any): void;
	}
	export class MapRoom extends ig.GuiElementBase {
		public gfx: ig.Image;
		public room: any;
		public buffer: any;
		public floor: any;
		public name: string;
		public id: number;
		public roomAlpha: number;
		public tileWidth: number;
		public tileHeight: number;
		public active: boolean;
		public unlocked: boolean;
		public prerendered: boolean;

		public constructor(a: any, b: any, c: any);

		public init(a: any, b: any, c: any): void;
		public onVisibilityChange(a: any): void;
		public onDetach(): void;
		public updateDrawables(a: any): void;
		public preRender(): void;
		public clearPrerendered(): void;
	}
	export class MapIcon extends ig.GuiElementBase {
		public gfx: ig.Image;
		public offsetX: number;
		public offsetY: number;
		public map: number;
		public icon: string;

		public constructor(a: any, b: any, c: any, d: any, e: any);

		public init(a: any, b: any, c: any, d: any, e: any): void;
		public updateDrawables(a: any): void;
		public createAreaName(a: any, b: any, c: any, d: any): void;
	}
	export class MapFloor extends ig.GuiElementBase {
		public transitions: any;
		public floor: any;
		public name: string;
		public nameGui: any;
		public leaGui: sc.MapCurrentRoomWrapper;
		public rooms: any;
		public activeRoom: any;
		public callback: any;
		public bounds: any;

		public constructor(a: any, b: any);

		public init(a: any, b: any): void;
		public onAttach(): void;
		public update(): void;
		public updateDrawables(): void;
		public showFloor(): void;
		public hideFloor(): void;
		public calculateOpacity(a: any, b: any): void;
		public calculatePosOffset(): void;
		public addObservers(): void;
		public removeObservers(): void;
		public modelChanged(a: any, b: any): void;
		public _updateAlphaOnRooms(): void;
		public _createIcons(a: any): void;
		public _createRooms(): any;
		public getBounds(a: any): any;
	}
	export class MapArea extends ig.GuiElementBase {
		public transitions: any;

		public constructor();

		public init(): void;
		public updateDrawables(): void;
	}
	export class MapAreaContainer extends ig.GuiElementBase {
		public gfx: ig.Image;
		public background: ig.Image;
		public transitions: any;
		public area: sc.MapArea;
		public buttongroup: sc.MouseButtonGroup;
		public _lastMousePos: any;
		public _cursorPos: any;
		public _dragTimer: number;
		public _delayedDrag: boolean;
		public _alphaTimer: number;
		public _alphaTime: number;
		public _alpha: number;
		public _firstVisit: boolean;
		public _prevFloor: any;
		public _vertOffset: number;
		public _vertOffsetTarget: number;
		public _vertOffsetStart: number;
		public _vertOffsetCurrent: number;
		public _vertOffsetTimer: number;
		public _vertOffsetTime: number;
		public _areaCache: any;
		public _gamepadActive: boolean;
		public _lastDevice: number;
		public mapNameGui: sc.MapNameGui;
		public hoverRoom: any;
		public cursor: sc.MapCursor;
		public landmarks: any;
		public stamps: any;

		public constructor();

		public init(): void;
		public update(): void;
		public updateDrawables(a: any): void;
		public onMouseInteract(a: any, b: any): void;
		public onLandmarkPressed(a: any): void;
		public findMap(a: any, b: any, c: any, d: any): any;
		public showLandmarkName(a: any): void;
		public loadNewArea(a: any): void;
		public onLoadableComplete(a: any, b: any): void;
		public setArea(): void;
		public createLandmarks(a: any, b: any): void;
		public addStamp(): any;
		public isSettable(a: any, b: any, c: any): any;
		public getCurrentFloorGui(): any;
		public centerCurrentPosition(a: any, b: any): void;
		public limitCameraPos(): void;
		public limitCursorPos(): void;
		public initCursor(a: any): void;
		public calculateScrollingOffset(a: any): void;
		public showMenu(): void;
		public exitMenu(): void;
		public addObservers(): void;
		public removeObservers(): void;
		public modelChanged(a: any, b: any, c: any): void;
	}
	export class AreaButton extends ig.FocusGui {
		public gfx: ig.Image;
		public key: any;
		public area: any;
		public icon: number;
		public activeArea: boolean;
		public focusCount: number;
		public description: ig.LangLabel;

		public constructor(a: any, b: any);

		public init(a: any, b: any): void;
		public onButtonPress(): any;
		public updateDrawables(a: any): void;
		public isMouseOver(): any;
		public getDistanceToCursor(): any;
	}
	export class MapWorldMap extends ig.GuiElementBase {
		public transitions: any;
		public gfx: ig.Image;
		public buttonGroup: sc.MouseButtonGroup;
		public areas: any;
		public cursor: sc.MapCursor;
		public areaName: sc.WorldmapAreaName;
		public _gamepadActive: boolean;
		public _lastDevice: number;
		public _cursorPos: any;

		public constructor();

		public init(): void;
		public update(): void;
		public updateDrawables(a: any): void;
		public addObservers(): void;
		public removeObservers(): void;
		public show(): void;
		public hide(): void;
		public _focusCurrentArea(): void;
		public _initCursor(a: any): void;
		public _limitCursorPos(): void;
		public _setAreaName(a: any): void;
		public _addAreas(): void;
		public _addAreaButton(a: any, b: any): any;
		public onBackButtonPress(): void;
		public modelChanged(a: any, b: any, c: any): void;
	}
	export class MapMenu extends sc.BaseMenu {
		public hotkeyHelp: sc.ButtonGui;
		public hotkeyWorldmap: sc.ButtonGui;
		public hotkeyCenter: sc.ButtonGui;
		public area: sc.MapAreaContainer;
		public floorButtons: sc.MapFloorButtonContainer;
		public emptyMap: sc.TextGui;
		public chestDisplay: sc.MapChestDisplay;
		public stampDisplay: sc.MapStampDisplay;
		public worldmap: sc.MapWorldMap;
		public curArea: sc.CurrentAreaDisplay;
		public stamps: sc.StampEditMenu;
		public helpGui: sc.HelpScreen;

		public constructor();

		public init(): void;
		public addObservers(): void;
		public removeObservers(): void;
		public showMenu(): void;
		public hideMenu(): void;
		public exitMenu(): void;
		public onHotkeyHelpCheck(): any;
		public onHelpButtonPressed(): void;
		public onHotkeyCenterCheck(): any;
		public onHotkeyWorldmapCheck(): any;
		public onCenterButtonPressed(b: any): void;
		public onWorldmapButtonPressed(): void;
		public createHelpGui(): void;
		public onAddHotkeys(b: any): void;
		public commitHotKeysToTopBar(b: any): any;
		public onBackButtonPress(): void;
		public modelChanged(b: any, a: any, d: any): void;
	}
	export class KeyBinderGui extends ig.ColorGui {
		public transitions: any;
		public box: sc.BlackWhiteBox;
		public button: sc.ButtonGui;
		public back: sc.ButtonGui;
		public buttonGroup: sc.ButtonGroup;
		public buttonInteract: ig.ButtonInteractEntry;
		public finishCallback: any;
		public bindedKeyCheck: any;
		public isAlternative: any;

		public constructor();

		public init(): void;
		public show(b: any, a: any, d: any): void;
		public hide(): void;
		public onUnbindPress(): void;
		public onReturnPress(): void;
		public onKeyCheck(b: any): void;
		public onGlobalButtonCheck(): any;
		public _isBlackedListed(b: any): any;
	}
	export class OptionSlider extends sc.Slider {
		public backgroundNinePatch: ig.NinePatch;
		public fill: boolean;
		public focus: boolean;

		public constructor(b: any, a: any, d: any, c: any);

		public init(b: any, a: any, d: any, c: any): void;
		public updateDrawables(b: any): void;
		public setSize(b: any, a: any): void;
	}
	export class OptionThumb extends ig.GuiElementBase {
		public thumbNinePatch: ig.NinePatch;
		public currentOffset: string;
		public slider: any;
		public drag: boolean;
		public wasDragged: boolean;
		public starValue: number;
		public _startPos: any;

		public constructor(b: any);

		public init(b: any): void;
		public onMouseInteract(b: any, a: any, d: any): void;
		public updateDrawables(b: any): void;
	}
	export class OptionFocusSlider extends ig.FocusGui {
		public slider: sc.OptionSlider;
		public thumb: sc.OptionThumb;
		public snap: boolean;
		public changeCallback: any;
		public clickSound: any;
		public _hasKeyboardFocus: boolean;
		public _buttongroup: any;

		public constructor(b: any, a: any, d: any, c: any);

		public init(b: any, a: any, d: any, c: any): void;
		public setPreferredThumbSize(b: any, a: any): void;
		public setSize(b: any, a: any, d: any): void;
		public setValue(b: any): void;
		public setMinMaxValue(b: any, a: any): void;
		public getValue(): any;
		public update(): void;
		public focusGained(): void;
		public focusLost(): void;
		public canPlayFocusSounds(): any;
		public canLeaveFocus(): any;
		public onMouseInteract(b: any, a: any): void;
		public onDrag(b: any, a: any, d: any): void;
	}
	export class OptionLangPopUp extends ig.BoxGui {
		public transitions: any;
		public ninepatch: ig.NinePatch;
		public buttongroup: sc.ButtonGroup;
		public anchor: any;
		public callback: any;
		public buttons: any;
		public active: boolean;
		public _prevPressed: any;

		public constructor();

		public init(): void;
		public createButtons(): void;
		public resetButtons(b: any): void;
		public show(b: any, a: any): void;
		public hide(): void;
		public onBackButtonPressed(): void;
	}
	export class OptionInfoBox extends ig.GuiElementBase {
		public text: sc.TextGui;
		public box: sc.CenterBoxGui;

		public constructor(a: any, b: any);

		public init(a: any, b: any): void;
	}
	export class OptionRow extends ig.GuiElementBase {
		public gfx: ig.Image;
		public row: any;
		public optionName: any;
		public option: any;
		public optionDes: any;
		public local: boolean;
		public divider: boolean;
		public nameGui: sc.TextGui;
		public typeGui: any;
		public _hasEntered: boolean;
		public _rowGroup: any;

		public constructor(a: any, b: any, d: any, g: any, h: any, i: any);

		public init(a: any, b: any, d: any, g: any, h: any, i: any): void;
		public updateDrawables(a: any): void;
		public onPressed(a: any): void;
		public onLeftRight(a: any): any;
		public onMouseInteract(): void;
	}
	export class OptionsTabBox extends ig.GuiElementBase {
		public gfx: ig.Image;
		public list: sc.ButtonListBox;
		public tabs: any;
		public bg: sc.MenuScanLines;
		public keyBinder: sc.KeyBinderGui;
		public tabArray: any;
		public tabGroup: sc.ButtonGroup;
		public rowButtonGroup: sc.RowButtonGroup;
		public tabContent: any;
		public rows: any;
		public prevIndex: any;
		public prevPressed: any;
		public isLocal: boolean;

		public constructor(b: any);

		public init(b: any): void;
		public addObservers(): void;
		public removeObservers(): void;
		public showMenu(): void;
		public exitMenu(): void;
		public _createCacheList(b: any, a: any, d: any, c: any): any;
		public _createOptionList(b: any): void;
		public _resetButtons(b: any, a: any): void;
		public _rearrangeTabs(): void;
		public _createTabButton(b: any, a: any, d: any): any;
		public isNonMouseMenuInput(): any;
		public onButtonTraversal(): void;
		public modelChanged(b: any, a: any): void;
	}
	export class OptionsMenu extends sc.BaseMenu {
		public hotkeyHelp: sc.ButtonGui;
		public hotkeyDefault: sc.ButtonGui;
		public listBox: sc.OptionsTabBox;
		public helpGui: sc.HelpScreen;
		public blackBox: ig.ColorGui;
		public langGui: sc.OptionLangPopUp;

		public constructor();

		public init(): void;
		public addObservers(): void;
		public removeObservers(): void;
		public showMenu(): void;
		public hideMenu(): void;
		public exitMenu(): void;
		public onHotkeyDefaultCheck(): any;
		public onDefaultButtonPressed(): void;
		public onHotkeyHelpCheck(): any;
		public onHelpButtonPressed(): void;
		public createHelpGui(): void;
		public onAddHotkeys(b: any): void;
		public commitHotKeysToTopBar(b: any): any;
		public onBackButtonPress(): void;
		public onLangPopUpClose(): void;
		public modelChanged(b: any, a: any, d: any): void;
	}
	export class ShopStartMenu extends ig.BoxGui {
		public ninepatch: ig.NinePatch;
		public transitions: any;
		public buy: sc.ButtonGui;
		public sell: sc.ButtonGui;
		public buttongroup: sc.ButtonGroup;

		public constructor();

		public init(): void;
		public show(): void;
		public hide(b: any, a: any): void;
		public onButtonPress(b: any): void;
	}
	export class ShopStartTitle extends ig.BoxGui {
		public ninepatch: ig.NinePatch;
		public transitions: any;
		public text: sc.TextGui;

		public constructor();

		public init(): void;
		public show(): void;
		public hide(b: any, a: any): void;
	}
	export class ShopListMenu extends sc.MenuPanel {
		public buttongroup: any;
		public pagesCache: any;
		public list: sc.ItemListBox;
		public repeater: ig.PressRepeater;
		public _prevSortType: any;
		public _amp: number;
		public _ampTimer: number;
		public _ampDir: any;

		public constructor();

		public init(): any;
		public update(): void;
		public show(): void;
		public hide(): void;
		public getRepeaterValue(): any;
		public getActiveElement(): any;
		public stepRight(): void;
		public stepLeft(): void;
		public changeCount(b: any): void;
		public playSound(b: any, a: any): void;
		public updateListEntries(b: any): void;
		public updateShopPage(b: any): void;
		public createBuyList(b: any, a: any, d: any, c: any): void;
		public scrapSellList(b: any): void;
		public scrapBuyList(b: any): void;
		public onPressCallback(b: any): void;
		public onBackButtonPress(): void;
		public leaveList(): void;
	}
	export class ShopPageCounter extends ig.GuiElementBase {
		public transitions: any;
		public pageText: sc.TextGui;
		public cycleLeft: sc.ButtonGui;
		public cycleRight: sc.ButtonGui;

		public constructor();

		public init(): void;
		public updateDrawables(b: any): void;
		public show(): void;
		public hide(): void;
		public cycleSellPages(b: any): void;
		public cycleOffers(b: any): void;
		public onLeftPressCheck(): any;
		public onRightPressCheck(): any;
	}
	export class ShopItemButton extends sc.ListBoxButton {
		public symbolGfx: ig.Image;
		public cost: sc.NumberGui;
		public owned: sc.NumberGui;
		public count: sc.NumberGui;
		public symbol: ig.ImageGui;
		public level: number;

		public constructor(b: any, a: any, d: any, c: any, e: any, f: any);

		public init(b: any, a: any, d: any, c: any, e: any, f: any): void;
		public setCountNumber(b: any, a: any): void;
		public keepButtonPressed(): void;
		public unPressButton(): void;
	}
	export class TradeModel extends ig.GameAddon {
		public observers: any;
		public buttonInteract: ig.ButtonInteractEntry;
		public options: any;
		public infoText: any;
		public buffText: any;
		public buffID: any;
		public equipID: any;
		public visible: boolean;
		public sessionTradeCount: number;
		public tradeIndex: number;
		public statsToggle: boolean;
		public statsToggleOffHand: boolean;
		public hasEquippedTrade: boolean;
		public equippedID1: any;
		public equippedID2: any;
		public compareMode: any;
		public traders: any;
		public tradersFound: any;

		public constructor();

		public init(): void;
		public onStorageSave(b: any): void;
		public onStoragePreLoad(b: any): void;
		public checkForParents(): void;
		public getTotalTradersFound(b: any, a: any): any;
		public getTotalTraders(b: any): any;
		public onReset(): void;
		public onVarAccess(b: any, a: any): any;
		public hasAreaTraders(b: any): any;
		public hasTraderInArea(b: any): any;
		public hasAnyTraderFound(): any;
		public hasTrader(b: any): any;
		public unlockTrader(b: any, a: any): void;
		public unlockParents(b: any, a: any, d: any): any;
		public resetTrader(b: any): void;
		public getTrader(b: any): any;
		public getTraderName(b: any): any;
		public getTraderAreaName(b: any, a: any): any;
		public getFoundTrader(b: any): any;
		public getFoundTraders(b: any, a: any): any;
		public sortList(b: any, a: any): any;
		public enterTrade(b: any): void;
		public exitTrade(): void;
		public doTrade(b: any): void;
		public setEquippedID(b: any, a: any): void;
		public clearEquippedState(): void;
		public unequipTradeItems(): void;
		public setActiveOffer(b: any): void;
		public getCurrentOffer(): any;
		public canTrade(): any;
		public setInfoText(b: any, a: any): void;
		public setBuffText(b: any, a: any, d: any): void;
		public setEquipID(b: any, a: any): void;
		public toggleCompareMode(): void;
		public _checkBodyPart(b: any, a: any, d: any, c: any): void;
	}
	export class TradeInfo extends ig.Class {
		public key: string;
		public settings: any;
		public iconGui: sc.TradeIconGui;
		public event: ig.Event;
		public entity: any;

		public constructor(b: any, a: any);

		public init(b: any, a: any): void;
		public startTradeMenu(): void;
		public clearCached(): void;
	}
	export class TradeToggleStats extends ig.BoxGui {
		public transitions: any;
		public ninepatch: ig.NinePatch;
		public baseParams: any;
		public modifierPool: any;
		public compareText: sc.TextGui;
		public compareItem: sc.TextGui;
		public compareHelpText: sc.TextGui;
		public titleOffset: number;
		public lineOffset: number;
		public level: number;

		public constructor(b: any, a: any);

		public init(b: any, a: any): void;
		public updateDrawables(b: any): void;
		public showMenu(): void;
		public hideMenu(): void;
		public _setEquipID(b: any): void;
		public _getBodyPartIcon(b: any): any;
		public _setParameters(b: any): void;
		public _setBaseStats(): void;
		public _resetParameters(): void;
		public _setCompareParameters(b: any): void;
		public _calculateDifference(b: any, a: any, d: any, c: any): any;
		public _calculateDifferenceModifier(b: any, a: any, d: any, c: any): any;
		public _createContent(): void;
		public _createStatusDisplay(b: any, a: any, d: any, c: any, e: any, f: any, g: any, h: any, i: any, j: any, k: any, l: any): any;
		public modelChanged(b: any, a: any, d: any): void;
	}
	export class ShopEquipStats extends sc.TradeToggleStats {
		public transitions: any;
		public ninepatch: ig.NinePatch;

		public constructor();

		public init(): void;
		public updateDrawables(b: any): void;
		public updateStatsView(): void;
		public reset(): void;
		public show(): void;
		public hide(): void;
	}
	export class ShopCart extends ig.BoxGui {
		public transitions: any;
		public ninepatch: ig.NinePatch;
		public credits: sc.ShopCartEntry;
		public value: sc.ShopCartEntry;
		public rest: sc.ShopCartEntry;
		public checkout: sc.ButtonGui;
		public enabled: boolean;

		public constructor();

		public init(): void;
		public resetNumbers(b: any): void;
		public updateValue(b: any): void;
		public updateDrawables(b: any): void;
		public show(): void;
		public hide(): void;
		public setCheckout(b: any): void;
		public onCheckoutPress(): void;
		public onCheckoutCheck(): any;
	}
	export class ShopCartEntry extends ig.GuiElementBase {
		public gfx: ig.Image;
		public text: sc.TextGui;
		public number: sc.NumberGui;
		public hideSymbol: boolean;

		public constructor(b: any);

		public init(b: any): void;
		public updateDrawables(b: any): void;
		public setNumber(b: any, a: any): void;
	}
	export class ShopQuantitySelect extends ig.BoxGui {
		public transitions: any;
		public ninepatch: ig.NinePatch;
		public buttongroup: sc.ButtonGroup;
		public quantityText: sc.TextGui;
		public costText: sc.TextGui;
		public buttonUp: any;
		public buttonDown: any;
		public buttonLeft: any;
		public buttonRight: any;
		public quantity: sc.NumberGui;
		public cost: sc.NumberGui;
		public submit: sc.ButtonGui;
		public quantityLine: sc.ShopSlopLine;
		public itemCostLine: sc.ShopSlopLine;
		public active: boolean;
		public submitCallback: any;
		public cancelCallback: any;
		public _number: number;
		public _max: number;
		public _button: any;
		public _amp: number;
		public _ampTimer: number;
		public _ampDir: any;
		public repeater: ig.PressRepeater;

		public constructor(e: any, g: any);

		public init(e: any, g: any): any;
		public update(): void;
		public getRepeaterValue(): any;
		public addDirectionButton(a: any, b: any, c: any): any;
		public updateCost(): void;
		public updateDirectionButtons(a: any): void;
		public playSound(a: any, c: any): void;
		public show(a: any, b: any, c: any): void;
		public hide(): void;
		public onBackButtonPress(): void;
		public onUpCheck(): any;
		public onDownCheck(): any;
		public onRightCheck(): any;
		public onLeftCheck(): any;
	}
	export class ShopQuanityButton extends ig.FocusGui {
		public gfx: ig.Image;
		public direction: any;
		public highlightTimer: number;
		public number: sc.NumberGui;

		public constructor(a: any);

		public init(a: any): void;
		public setColor(a: any): void;
		public highlight(): void;
		public show(): void;
		public hide(): void;
		public update(): void;
		public updateDrawables(a: any): void;
		public isMouseOver(): any;
	}
	export class ShopSlopLine extends ig.GuiElementBase {
		public slop: any;
		public line: ig.ColorGui;
		public hasLine: boolean;

		public constructor(a: any, b: any);

		public init(a: any, b: any): void;
		public show(a: any): void;
		public hide(a: any): void;
	}
	export class ShopConfirmDialog extends sc.ModalButtonInteract {
		public confirmCallback: any;
		public cancelCallback: any;
		public list: sc.ScrollPane;
		public listContent: ig.GuiElementBase;
		public notifyRaritySell: boolean;
		public keepOpen: boolean;

		public constructor(b: any, a: any);

		public init(b: any, a: any): void;
		public update(): void;
		public show(): void;
		public createList(): void;
		public onDialogCallback(b: any): void;
	}
	export class ShopConfirmEntry extends ig.GuiElementBase {
		public gfx: ig.Image;
		public item: sc.TextGui;
		public amount: sc.NumberGui;
		public price: sc.NumberGui;

		public constructor(b: any, a: any, d: any);

		public init(b: any, a: any, d: any): void;
		public updateDrawables(b: any): void;
	}
	export class ShopMenu extends sc.BaseMenu {
		public hotkeyHelp: sc.ButtonGui;
		public hotkeySort: sc.ButtonGui;
		public hotkeySwitch: sc.ButtonGui;
		public shopName: sc.ShopStartTitle;
		public start: sc.ShopStartMenu;
		public shopList: sc.ShopListMenu;
		public pageView: sc.ShopPageCounter;
		public stats: sc.ShopEquipStats;
		public cart: sc.ShopCart;
		public quantity: sc.ShopQuantitySelect;
		public confirmDialog: sc.ShopConfirmDialog;
		public sortMenu: sc.SortMenu;
		public helpGui: sc.HelpScreen;

		public constructor();

		public init(): void;
		public addObservers(): void;
		public removeObservers(): void;
		public showMenu(): void;
		public hideMenu(): void;
		public exitMenu(): void;
		public openQuantitySelect(b: any): void;
		public updateSortMenuButton(b: any): void;
		public resolveStateChange(b: any, a: any): void;
		public onConfirm(): void;
		public buyItems(): any;
		public sellItems(): any;
		public onQuantitySubmit(b: any, a: any): void;
		public onQuantityBack(b: any): void;
		public onHotkeyHelpCheck(): any;
		public onHelpButtonPressed(): void;
		public onHotkeySortCheck(): any;
		public onHotkeySwitchCheck(): any;
		public onSortButtonPress(): void;
		public onExecuteSort(b: any): void;
		public createHelpGui(): void;
		public onAddHotkeys(b: any): void;
		public commitHotKeysToTopBar(b: any): any;
		public onBackButtonPress(): void;
		public modelChanged(b: any, a: any, d: any): void;
	}
	export class HelpScrollContainer extends ig.GuiElementBase {
		public scrollPane: sc.ScrollPane;
		public content: ig.GuiElementBase;

		public constructor();

		public init(): void;
		public setElement(a: any): void;
		public scroll(a: any, b: any): void;
		public getScrollY(): any;
		public clear(): void;
		public setSize(a: any, b: any): void;
		public _updateContentHeight(): void;
	}
	export class MultiPagePageCounter extends ig.GuiElementBase {
		public gfx: ig.Image;
		public transitions: any;
		public count: sc.NumberGui;
		public max: sc.NumberGui;

		public constructor(a: any);

		public init(a: any): void;
		public setCount(a: any): void;
		public setMax(a: any): void;
	}
	export class MultiPageBoxGui extends ig.GuiElementBase {
		public transitions: any;
		public msgBox: sc.CenterBoxGui;
		public content: ig.GuiElementBase;
		public header: sc.TextGui;
		public buttonInteract: ig.ButtonInteractEntry;
		public buttonGroup: sc.ButtonGroup;
		public defaultHeaderText: string;
		public linePadding: number;
		public listPadding: number;
		public turnLeft: sc.ButtonGui;
		public turnRight: sc.ButtonGui;
		public pageCounter: sc.MultiPagePageCounter;
		public pages: any;
		public curPage: number;
		public backSound: any;
		public _width: number;

		public constructor(a: any, b: any);

		public init(a: any, b: any): void;
		public openMenu(): void;
		public closeMenu(): void;
		public addPage(a: any, b: any, c: any): void;
		public addPages(a: any): void;
		public setDefaultHeaderText(a: any): void;
		public _setPage(a: any): void;
		public addListEntry(a: any, d: any, c: any): any;
		public _createInitContent(a: any): void;
		public onTurnLeftCheck(): any;
		public onTurnRightCheck(): any;
		public update(): void;
		public updateDrawables(a: any): void;
	}
	export class LogGuiTypeBase extends ig.GuiElementBase {
		public iconGui: sc.TextGui;
		public textGui: sc.TextGui;
		public type: any;

		public constructor(b: any);

		public init(b: any): void;
	}
	export class SynopsisLogDisplay extends sc.HeaderMenuPanel {
		public transitions: any;
		public content: ig.GuiElementBase;

		public constructor();

		public init(): void;
		public show(): void;
		public hide(): void;
	}
	export class SynopsisTaskDisplay extends sc.HeaderMenuPanel {
		public transitions: any;
		public task: sc.TextGui;

		public constructor();

		public init(): void;
		public show(): void;
		public hide(): void;
	}
	export class SynopsisQuestDisplay extends sc.HeaderMenuPanel {
		public gfx: ig.Image;
		public transitions: any;
		public questNameGui: sc.TextGui;
		public taskGUI: sc.TaskEntry;
		public quest: any;

		public constructor();

		public init(): void;
		public setQuest(b: any): void;
		public updateDrawables(b: any): void;
		public show(): void;
		public hide(b: any): void;
	}
	export class SynopsisMenu extends sc.BaseMenu {
		public hotkeyHelp: sc.ButtonGui;
		public temp_button_group: any;
		public helpGui: sc.HelpScreen;
		public buttonGroup: sc.ButtonGroup;
		public buttons: any;
		public infoTask: sc.SynopsisTaskDisplay;
		public infoQuest: any;
		public infoLogs: sc.SynopsisLogDisplay;

		public constructor();

		public init(): void;
		public addObservers(): void;
		public removeObservers(): void;
		public showMenu(): void;
		public hideMenu(): void;
		public exitMenu(): void;
		public _createButton(a: any, d: any, c: any, e: any, f: any): any;
		public onHotkeyHelpCheck(): any;
		public onHelpButtonPressed(): void;
		public createHelpGui(): void;
		public onAddHotkeys(a: any): void;
		public commitHotKeysToTopBar(a: any): any;
		public onBackButtonPress(): void;
		public modelChanged(): void;
	}
	export class SolvedLine extends ig.SimpleGui {
		public transitions: any;
		public ninepatch: ig.NinePatch;
		public textGui: sc.TextGui;

		public constructor();

		public init(): void;
		public setSize(a: any, b: any): void;
		public updateDrawables(a: any): void;
	}
	export class QuestBaseBox extends ig.BoxGui {
		public ninepatch: ig.NinePatch;
		public levelGui: sc.NumberGui;
		public elite: number;

		public constructor(a: any, b: any, d: any);

		public init(a: any, b: any, d: any): void;
		public updateDrawables(a: any): void;
		public setLevel(a: any): void;
		public setElite(a: any, b: any): void;
	}
	export class QuestInfoBoxActive extends ig.SimpleGui {
		public gfx: ig.Image;
		public transitions: any;
		public lineGui: ig.ColorGui;
		public taskContainer: ig.GuiElementBase;

		public constructor();

		public init(): void;
		public setTasks(a: any, b: any): void;
		public _addTask(a: any, b: any, f: any): any;
	}
	export class QuestInfoBoxSolved extends ig.SimpleGui {
		public transitions: any;
		public solvedGui: sc.SolvedLine;
		public endDescription: sc.TextGui;

		public constructor();

		public init(): void;
	}
	export class QuestInfoBox extends sc.QuestBaseBox {
		public gfx: ig.Image;
		public titleGui: sc.TextGui;
		public descriptionGui: sc.TextGui;
		public locationGui: ig.ColorGui;
		public locationText: sc.TextGui;
		public lineGui: any;
		public activeView: sc.QuestInfoBoxActive;
		public solvedView: sc.QuestInfoBoxSolved;

		public constructor();

		public init(): void;
		public setQuest(a: any): void;
		public show(): void;
		public hide(a: any): void;
	}
	export class QuestDialog extends sc.QuestBaseBox {
		public gfx: ig.Image;
		public transitions: any;
		public titleGui: sc.TextGui;
		public descriptionGui: sc.TextGui;
		public endDescriptionGui: sc.TextGui;
		public firstTaskGui: sc.TaskEntry;
		public expGui: sc.TextGui;
		public creditGui: sc.TextGui;
		public cpGui: sc.TextGui;
		public itemsGui: ig.GuiElementBase;
		public solvedGui: sc.SolvedLine;
		public quest: any;

		public constructor(a: any, b: any);

		public init(a: any, b: any): void;
		public setQuest(a: any): void;
		public setQuestRewards(a: any, d: any, f: any): void;
	}
	export class QuestDialogWrapper extends ig.GuiElementBase {
		public transitions: any;
		public screenInteract: sc.ScreenInteractEntry;
		public buttonInteract: ig.ButtonInteractEntry;
		public buttonGroup: sc.ButtonGroup;
		public callback: any;
		public quest: any;
		public questBox: sc.QuestDialog;
		public buttons: sc.QuestStartDialogButtonBox;
		public acceptText: sc.TextGui;
		public overlay: ig.GuiElementBase;
		public finished: boolean;
		public firstQuest: any;
		public subQuests: any;
		public next: number;
		public _characterName: any;
		public _mapName: any;

		public constructor(b: any, d: any, f: any, g: any, h: any);

		public init(b: any, d: any, f: any, g: any, h: any): void;
		public onDetach(): void;
		public onButtonPress(a: any): void;
		public _close(a: any): void;
	}
	export class QuestStartDialogButtonBox extends ig.BoxGui {
		public transitions: any;
		public ninepatch: ig.NinePatch;
		public acceptButton: sc.ButtonGui;
		public declineButton: sc.ButtonGui;
		public acceptMode: boolean;

		public constructor(a: any, b: any, d: any, g: any);

		public init(a: any, b: any, d: any, g: any): void;
		public setAcceptMode(a: any): void;
	}
	export class QuestListBox extends ig.GuiElementBase {
		public gfx: ig.Image;
		public list: sc.ButtonListBox;
		public bg: sc.MenuScanLines;
		public tabs: any;
		public tabArray: any;
		public tabContent: any;
		public buttongroup: sc.ButtonGroup;
		public tabGroup: sc.ButtonGroup;
		public submitSound: any;
		public favSound: any;
		public errorSound: any;
		public _prevIndex: any;
		public _prevPressed: any;
		public _refocusFromCycle: any;
		public _lastCursorPos: any;
		public _curElement: any;

		public constructor();

		public init(): void;
		public setFavorite(): void;
		public addObservers(): void;
		public removeObservers(): void;
		public show(): void;
		public hide(): void;
		public getCurrentSortText(): any;
		public isNonMouseMenuInput(): any;
		public onButtonTraversal(): void;
		public modelChanged(a: any, b: any, c: any): void;
		public _sortCacheList(a: any): void;
		public _createCacheList(a: any, b: any, c: any, e: any): void;
		public _createListEntries(a: any, d: any): void;
		public _findParentIndex(a: any): any;
		public _createTabButton(a: any, b: any, c: any, e: any): any;
		public _rearrangeTabs(): void;
		public _resetButtons(a: any, b: any): void;
		public _makeName(a: any): any;
	}
	export class NPCDisplayGui extends ig.GuiElementBase {
		public transitions: any;
		public npc: sc.Character;
		public gameState: ig.GameState;
		public animSheet: ig.AnimationSheet;
		public size: any;
		public displayOffset: any;
		public hideBackground: boolean;
		public entity: any;
		public callback: any;
		public skipIfLoaded: boolean;
		public anim: string;
		public effect: ig.EffectHandle;
		public effectEntity: any;

		public constructor(b: any, a: any, d: any, c: any, e: any);

		public init(b: any, a: any, d: any, c: any, e: any): void;
		public initGameState(): void;
		public playEffect(b: any, a: any, d: any): void;
		public clearEffects(): any;
		public onDetach(): void;
		public onLoadableComplete(b: any, a: any): void;
		public update(): void;
		public updateDrawables(b: any): void;
	}
	export class QuestDetailTasks extends ig.BoxGui {
		public transitions: any;
		public ninepatch: ig.NinePatch;
		public container: sc.ScrollPane;
		public content: ig.GuiElementBase;

		public constructor();

		public init(): void;
		public scroll(a: any, b: any): void;
		public show(a: any, b: any, c: any): void;
		public hide(): void;
	}
	export class QuestDetailsSolved extends ig.GuiElementBase {
		public transitions: any;
		public endDescription: sc.TextGui;

		public constructor();

		public init(): void;
		public show(a: any): void;
		public hide(): void;
	}
	export class QuestCharacterView extends ig.BoxGui {
		public ninepatch: ig.NinePatch;
		public display: sc.NPCDisplayGui;
		public container: ig.GuiElementBase;
		public hideBackground: boolean;
		public transitions: any;

		public constructor();

		public init(): void;
		public setCharacter(a: any, b: any): void;
		public centerNPC(a: any): void;
		public updateDrawables(a: any): void;
	}
	export class QuestDetailsView extends sc.QuestBaseBox {
		public gfx: ig.Image;
		public transitions: any;
		public titleGui: sc.TextGui;
		public descriptionGui: sc.TextGui;
		public locationArea: sc.TextGui;
		public locationMap: sc.TextGui;
		public personTextGui: sc.TextGui;
		public personCharGui: sc.QuestCharacterView;
		public expGui: sc.TextGui;
		public moneyGui: sc.TextGui;
		public cpGui: sc.TextGui;
		public itemsGui: ig.GuiElementBase;
		public atCurLevelGui: sc.TextGui;
		public activeView: sc.QuestDetailTasks;
		public solvedView: sc.QuestDetailsSolved;
		public buttongroup: sc.ButtonGroup;
		public taskButton: any;
		public taskSwitch: any;
		public lines: any;
		public currentQuest: any;
		public submitSound: any;

		public constructor(a: any);

		public init(a: any): void;
		public update(): void;
		public checkTaskSwitch(): void;
		public addObservers(): void;
		public removeObservers(): void;
		public show(a: any): void;
		public hide(): void;
		public _setQuest(a: any): void;
		public doButtonTraversal(): void;
		public onBackButtonPress(): void;
		public modelChanged(a: any, b: any, c: any): void;
	}
	export class QuestMenu extends sc.BaseMenu {
		public hotkeyHelp: sc.ButtonGui;
		public hotkeySort: sc.ButtonGui;
		public hotkeyTask: sc.ButtonGui;
		public helpGui: sc.HelpScreen;
		public questInfoBox: sc.QuestInfoBox;
		public questListBox: sc.QuestListBox;
		public questDetailBox: sc.QuestDetailsView;
		public sortMenu: sc.SortMenu;

		public constructor();

		public init(): void;
		public addObservers(): void;
		public removeObservers(): void;
		public showMenu(): void;
		public hideMenu(): void;
		public exitMenu(): void;
		public onHotkeyHelpCheck(): any;
		public onHelpButtonPressed(): void;
		public onHotkeySortCheck(): any;
		public onHotkeyTaskCheck(): any;
		public onSortButtonPress(): void;
		public onExecuteSort(b: any): void;
		public createHelpGui(): void;
		public onAddHotkeys(b: any): void;
		public commitHotKeysToTopBar(b: any): any;
		public onBackButtonPress(): void;
		public _updateSortMenuButton(b: any): void;
		public modelChanged(b: any, a: any, d: any): void;
	}
	export class TabbedPane extends ig.GuiElementBase {
		public gfx: ig.Image;
		public transitions: any;
		public tabGroup: sc.ButtonGroup;
		public keys: any;
		public tabs: any;
		public tabArray: any;
		public tabContent: any;
		public currentTabIndex: any;
		public currentContent: any;
		public tabSelectionListener: any;
		public tabPressListener: any;
		public tabButtonCreationCallback: any;
		public cacheContent: boolean;
		public menuPanel: sc.MenuPanel;
		public menuHighlight: ig.ColorGui;
		public _prevIndex: any;
		public _prevPressed: any;
		public _refocusFromCycle: any;
		public _lastCursorPos: any;

		public constructor(b: any);

		public init(b: any, _usedInChild1: any): void;
		public setSize(b: any, a: any): void;
		public setPanelSize(b: any, a: any): void;
		public addTab(b: any, a: any, d: any): void;
		public setTab(b: any, a: any, d: any): void;
		public show(b: any): void;
		public hide(): void;
		public rearrangeTabs(): void;
		public resetButtons(b: any, a: any): void;
		public getCurrentTabButton(): any;
		public getCurrentTabKey(): any;
		public getButtonIndex(b: any): any;
		public onTabSelected(): void;
		public onTabPressed(_usedInChild0: any, _usedInChild1: any): void;
		public onTabButtonCreation(_usedInChild0: any, _usedInChild1: any, _usedInChild2: any): void;
		public onTabMouseFocusLost(): void;
		public onTabChanged(_usedInChild0: any, _usedInChild1: any): void;
		public onClearPrevContent(): void;
		public onContentCreation(): void;
		public onSetCacheContent(_usedInChild0: any, _usedInChild1: any, _usedInChild2: any): void;
	}
	export class ListTabbedPane extends sc.TabbedPane {
		public currentList: sc.ButtonListBox;
		public currentGroup: sc.ButtonGroup;
		public listPadding: number;
		public listPageSize: number;
		public defaultSortType: number;
		public containerHeightOffset: number;
		public listPosOffset: number;
		public listHeightOffset: number;
		public bg: sc.MenuScanLines;

		public constructor(b: any, a: any);

		public init(b: any, a: any): void;
		public update(): void;
		public setSize(b: any, a: any): void;
		public show(_usedInChild0: any): void;
		public hide(): void;
		public onClearPrevContent(): void;
		public onSetCacheContent(b: any, a: any, d: any): void;
		public onContentCreation(): any;
		public sort(b: any): void;
		public isNonMouseMenuInput(): any;
		public onButtonTraversal(): void;
		public switchTab(b: any): void;
		public onInitSortType(): any;
		public onListEntryPressed(_usedInChild0: any): void;
		public onListEntrySelected(_usedInChild0: any): void;
		public onListMouseFocusLost(): void;
		public onLeftRightPress(_usedInChild0: any, _usedInChild1: any, _usedInChild2: any): void;
		public onCreateListEntries(_usedInChild0: any, _usedInChild1: any, _usedInChild2: any, _usedInChild3: any): void;
	}
	export class MsgSkipGui extends ig.GuiElementBase {
		public transitions: any;
		public text: sc.TextGui;
		public box: sc.SmallBlackBoxGui;
		public personEntry: any;
		public timer: number;

		public constructor();

		public init(): void;
		public update(): void;
		public hide(): void;
		public show(): void;
	}
	export class SideMessageHudGui extends ig.GuiElementBase {
		public sideLabel: sc.SideMessageLabelGui;
		public pauseMaxY: number;
		public pauseBoxes: any;
		public visibleBoxes: any;
		public timer: number;
		public pauseMode: boolean;
		public messageIndex: number;
		public prePauseMsgState: any;
		public contentGui: sc.SideMessageContentGui;
		public skipGui: sc.MsgSkipGui;
		public quickPop: boolean;
		public skipInteractEntry: sc.SkipInteractEntry;
		public transitions: any;

		public constructor();

		public init(): void;
		public update(): void;
		public doMessageStep(b: any): void;
		public updateBottomGap(): void;
		public modelChanged(b: any, a: any): void;
		public clearMessages(): void;
		public fillMessagesOnPause(): void;
		public restoreAfterLoad(): void;
		public restoreAfterPause(): void;
		public scrollMessages(b: any): void;
		public showNextSideMessage(): void;
		public pushMessageBottom(b: any, a: any, d: any): any;
		public isLastBlockFinished(): any;
		public popMessage(): void;
		public updateSkipGui(): void;
		public onMessageFinish(): void;
		public onSkipInteract(b: any): void;
	}
	export class SideMessageContentGui extends ig.GuiElementBase {
		public constructor();

		public init(): void;
	}
	export class SideMessageBoxGui extends sc.SlickBoxRawGui {
		public text: sc.TextGui;
		public face: sc.SideMessageFaceGui;
		public beepSound: ig.Sound;
		public transitions: any;

		public constructor();

		public init(): void;
		public setContent(b: any, a: any, d: any): void;
		public setOnFinish(b: any): void;
		public isFinished(): any;
		public skip(): void;
		public show(b: any): void;
		public remove(b: any): void;
	}
	export class SideMessageFaceGui extends ig.GuiElementBase {
		public charExpression: any;
		public timer: number;
		public transitions: any;

		public constructor();

		public init(): void;
		public setFace(b: any, a: any): void;
		public update(): void;
		public updateDrawables(b: any): void;
	}
	export class SideMessageLabelGui extends ig.GuiElementBase {
		public gfx: ig.Image;
		public transitions: any;
		public iconText: sc.TextGui;
		public currentIconDevice: any;

		public constructor();

		public init(): void;
		public update(): void;
	}
	export class EnemyDisplayGui extends ig.GuiElementBase {
		public transitions: any;
		public enemy: sc.EnemyType;
		public gameState: ig.GameState;
		public entity: any;
		public callback: any;
		public skipIfLoaded: boolean;
		public displayOffset: any;
		public anim: string;
		public randomAnim: any;
		public boosted: boolean;
		public randomTimer: number;
		public randomReset: number;

		public constructor(b: any, a: any, d: any, c: any, e: any, f: any);

		public init(b: any, a: any, d: any, c: any, e: any, f: any): void;
		public onDetach(): void;
		public onLoadableComplete(b: any, a: any): void;
		public initGameState(): void;
		public update(): void;
		public updateDrawables(b: any): void;
	}
	export class EnemyPageGeneralInfo extends ig.GuiElementBase {
		public transitions: any;
		public location: sc.EnemyLocation;
		public kills: sc.EnemyKillCount;
		public display: sc.EnemyDisplayBox;
		public baseHp: any;
		public baseAttack: any;
		public baseDefense: any;
		public baseFocus: any;
		public resistance: sc.EnemyResistence;
		public expMoney: sc.EnemyExpMoney;
		public drops: sc.EnemyDrops;

		public constructor();

		public init(): void;
		public setData(a: any, d: any, f: any, g: any): void;
		public createStatusLine(a: any, b: any, d: any, g: any): any;
	}
	export class EnemyPageMetaInfo extends ig.GuiElementBase {
		public transitions: any;
		public killMore: sc.TextGui;
		public species: sc.TextGui;
		public trivia: sc.TextGui;
		public descriptions: ig.GuiElementBase;
		public content: ig.GuiElementBase;

		public constructor();

		public init(): void;
		public setData(a: any, b: any): void;
		public getPercent(a: any, b: any): any;
	}
	export class EnemyLocation extends ig.GuiElementBase {
		public gfx: ig.Image;
		public transitions: any;
		public location: sc.TextGui;
		public image: ig.ImageGui;

		public constructor();

		public init(): void;
		public setLocation(a: any, b: any): void;
		public hide(a: any): void;
	}
	export class EnemyBaseParamLine extends ig.GuiElementBase {
		public gfx: ig.Image;
		public transitions: any;
		public number: sc.NumberGui;
		public name: string;
		public icon: number;

		public constructor(a: any, b: any);

		public init(a: any, b: any): void;
		public setNumber(a: any, b: any): void;
		public setScrambleNumbers(a: any): void;
		public hide(): void;
		public updateDrawables(a: any): void;
	}
	export class EnemyDrops extends ig.GuiElementBase {
		public gfx: ig.Image;
		public transitions: any;
		public container: ig.GuiElementBase;
		public prevChances: any;

		public constructor();

		public init(): void;
		public setDrops(b: any, d: any, f: any): void;
		public hide(): void;
	}
	export class EnemyKillCount extends ig.GuiElementBase {
		public gfx: ig.Image;
		public transitions: any;
		public count: sc.NumberGui;
		public image: ig.ImageGui;
		public special: sc.TextGui;

		public constructor();

		public init(): void;
		public setKills(a: any, b: any): void;
		public hide(): void;
	}
	export class EnemyExpMoney extends ig.GuiElementBase {
		public gfx: ig.Image;
		public transitions: any;
		public exp: sc.NumberGui;
		public money: sc.NumberGui;

		public constructor();

		public init(): void;
		public setValues(a: any, b: any, d: any): void;
		public hide(): void;
		public updateDrawables(a: any): void;
	}
	export class EnemyResistence extends ig.GuiElementBase {
		public gfx: ig.Image;
		public transitions: any;
		public res: any;
		public lines: any;
		public images: any;

		public constructor();

		public init(): void;
		public setResistance(a: any, b: any): void;
		public hide(): void;
		public createNumber(a: any): void;
		public createLine(a: any): void;
		public createImage(a: any): void;
		public getValue(a: any): any;
		public updateDrawables(a: any): void;
	}
	export class EnemyElementSlopeLine extends ig.GuiElementBase {
		public slope: sc.SlopeLine;
		public line: ig.ColorGui;
		public hasLine: boolean;

		public constructor(a: any, b: any);

		public init(a: any, b: any): void;
		public show(a: any): void;
		public hide(a: any): void;
	}
	export class EnemyDisplayBox extends ig.BoxGui {
		public display: sc.EnemyDisplayGui;
		public container: ig.GuiElementBase;
		public transitions: any;
		public ninepatch: ig.NinePatch;

		public constructor();

		public init(): void;
		public setEnemy(a: any, b: any, d: any, g: any, h: any): void;
		public centerEnemy(a: any): void;
	}
	export class SocialInfoBox extends ig.BoxGui {
		public ninepatch: ig.NinePatch;
		public noEntry: sc.TextGui;
		public base: sc.SocialBaseInfoBox;
		public clazz: sc.TextGui;
		public name: sc.TextGui;
		public baseHp: any;
		public baseAttack: any;
		public baseDefense: any;
		public baseFocus: any;
		public equip: ig.GuiElementBase;
		public content: ig.GuiElementBase;

		public constructor();

		public init(): void;
		public show(): void;
		public hide(): void;
		public setCharacter(a: any): void;
		public createEquipEntry(a: any, b: any, e: any): any;
		public getBodyPartIcon(a: any): any;
		public createStatusLine(a: any, b: any, e: any, f: any): any;
	}
	export class SocialPartyBox extends ig.GuiElementBase {
		public lea: any;
		public members: any;

		public constructor();

		public init(): void;
		public updatePartyMembers(): void;
		public show(a: any): void;
		public hide(a: any): void;
	}
	export class SocialPartyMember extends sc.MenuPanel {
		public gfx: ig.Image;
		public headerPatch: ig.NinePatch;
		public info: sc.SocialBaseInfoBox;
		public name: any;
		public isLea: boolean;

		public constructor(a: any, b: any, e: any);

		public init(a: any, b: any, e: any): void;
		public show(a: any): void;
		public hide(a: any): void;
		public updateDrawables(a: any): void;
	}
	export class SocialBaseInfoBox extends ig.GuiElementBase {
		public transitions: any;
		public face: sc.SocialFace;
		public level: sc.NumberGui;
		public name: sc.TextGui;
		public exp: sc.ItemStatusDefaultBar;
		public hp: sc.ItemStatusDefaultBar;
		public sp: sc.ItemStatusDefaultBar;

		public constructor();

		public init(): void;
		public show(a: any, b: any): void;
		public hide(a: any): void;
	}
	export class SocialFace extends ig.GuiElementBase {
		public charExpression: any;
		public transitions: any;

		public constructor();

		public init(): void;
		public setCharacter(a: any): void;
		public updateDrawables(a: any): void;
	}
	export class SocialEntryButton extends sc.ListBoxButton {
		public gfx2: ig.Image;
		public head: sc.SocialHead;
		public status: ig.ImageGui;
		public key: any;

		public constructor(a: any, b: any);

		public init(a: any, b: any): void;
		public focusGained(): void;
		public focusLost(): void;
		public updateMemberStatus(): void;
		public keepButtonPressed(): void;
		public unPressButton(): void;
		public getMemberName(a: any, b: any): any;
	}
	export class SocialHead extends ig.GuiElementBase {
		public gfx: ig.Image;
		public headsGfx: ig.Image;
		public index: number;
		public active: boolean;
		public focus: boolean;
		public keepPressed: boolean;

		public constructor(a: any);

		public init(a: any): void;
		public updateDrawables(a: any): void;
	}
	export class QuestHubAvailable extends sc.MenuPanel {
		public gfx: ig.Image;
		public transitions: any;
		public text: sc.TextGui;
		public number: sc.NumberGui;

		public constructor();

		public init(): void;
		public show(): void;
		public hide(): void;
		public updateDrawables(a: any): void;
	}
	export class QuestHubCompletion extends sc.MenuPanel {
		public gfx: ig.Image;
		public transitions: any;
		public text: sc.TextGui;
		public percent: sc.StatPercentNumber;

		public constructor();

		public init(): void;
		public show(): void;
		public hide(): void;
		public updateDrawables(a: any): void;
	}
	export class QuestHubListEntry extends ig.FocusGui {
		public transitions: any;
		public gfx: ig.Image;
		public ninepatch: ig.NinePatch;
		public character: sc.QuestHubCharacterView;
		public questTitle: sc.TextGui;
		public questLocation: sc.TextGui;
		public levelContent: ig.ColorGui;
		public level: sc.NumberGui;
		public areaContent: ig.ColorGui;
		public area: sc.TextGui;
		public rewards: sc.QuestHubRewards;

		public constructor(a: any, b: any);

		public init(a: any, b: any): void;
		public addImageRewardGui(a: any, b: any, c: any, e: any, f: any, g: any, h: any): any;
		public addItemRewardGui(a: any, b: any, c: any): any;
		public updateDrawables(a: any): void;
	}
	export class QuestHubRewards extends ig.BoxGui {
		public ninepatch: ig.NinePatch;

		public constructor();

		public init(): void;
	}
	export class QuestHubCharacterView extends ig.BoxGui {
		public ninepatch: ig.NinePatch;
		public display: sc.NPCDisplayGui;
		public container: ig.GuiElementBase;
		public transitions: any;

		public constructor();

		public init(): void;
		public setCharacter(a: any, b: any): void;
		public centerNPC(a: any): void;
	}
	export class QuestHubList extends sc.ListTabbedPane {
		public submitSound: any;
		public containerHeightOffset: any;
		public listPosOffset: any;
		public listHeightOffset: number;
		public listPageSize: number;

		public constructor();

		public init(): void;
		public addObservers(): void;
		public removeObservers(): void;
		public show(): void;
		public hide(): void;
		public getCurrentSortText(): any;
		public onLeftRightPress(): any;
		public onTabChanged(b: any): void;
		public onTabButtonCreation(b: any, a: any, d: any): any;
		public onTabPressed(b: any, a: any): any;
		public onTabSelected(): void;
		public onTabMouseFocusLost(): void;
		public onInitSortType(): any;
		public onCreateListEntries(b: any, a: any, d: any, c: any): void;
		public onListEntrySelected(b: any): void;
		public onListMouseFocusLost(): void;
		public collectQuests(b: any, a: any): any;
		public sortList(b: any, a: any): any;
		public modelChanged(b: any, a: any, d: any): void;
	}
	export class QuestHubMenu extends sc.ListInfoMenu {
		public helpGui: sc.HelpScreen;
		public completion: sc.QuestHubCompletion;
		public available: sc.QuestHubAvailable;

		public constructor();

		public init(): void;
		public showMenu(): void;
		public exitMenu(): void;
		public createHelpGui(): void;
		public modelChanged(b: any, a: any, d: any): void;
	}
	export class EnemyListBox extends sc.ListTabbedPane {
		public submitSound: any;
		public favSound: any;
		public errorSound: any;
		public enemies: any;

		public constructor();

		public init(): void;
		public addObservers(): void;
		public removeObservers(): void;
		public show(): void;
		public hide(): void;
		public getCurrentSortText(): any;
		public onLeftRightPress(b: any, a: any, d: any): any;
		public onTabChanged(b: any): void;
		public onTabButtonCreation(b: any, a: any, d: any): any;
		public onTabPressed(b: any, a: any): any;
		public onTabSelected(): void;
		public onTabMouseFocusLost(): void;
		public onCreateListEntries(b: any, a: any, d: any, c: any): void;
		public onListEntrySelected(b: any): void;
		public onListMouseFocusLost(): void;
		public getEnemyList(b: any, a: any): any;
		public sortLoreList(b: any, a: any): any;
		public getEnemyCategoryKey(b: any): any;
		public modelChanged(b: any, a: any, d: any): void;
	}
	export class EnemyInfoBox extends ig.BoxGui {
		public gfx: ig.Image;
		public ninepatch: ig.NinePatch;
		public title: sc.TextGui;
		public level: sc.NumberGui;
		public category: sc.TextGui;
		public display: any;
		public rightButton: sc.ButtonGui;
		public leftButton: sc.ButtonGui;
		public pagesNumberContainer: ig.GuiElementBase;
		public currentPage: sc.NumberGui;
		public maxPages: sc.NumberGui;
		public pages: any;
		public enemy: any;
		public page: any;
		public key: string;

		public constructor();

		public init(): void;
		public show(): void;
		public hide(): void;
		public onRightButtonCheck(): any;
		public onLeftButtonCheck(): any;
		public onRightButtonPressed(): void;
		public onLeftButtonPressed(): void;
		public setPage(b: any): void;
		public switchPage(b: any): void;
		public setCategory(b: any): void;
		public setEnemy(b: any): void;
	}
	export class EnemyEntryButton extends sc.ListBoxButton {
		public key: any;

		public constructor(b: any, a: any, d: any);

		public init(b: any, a: any, d: any): void;
	}
	export class EnemyMenu extends sc.ListInfoMenu {
		public constructor();

		public init(): void;
		public showMenu(): void;
		public exitMenu(): void;
		public createHelpGui(): void;
		public modelChanged(b: any, a: any, d: any): void;
	}
	export class LoreInfoBox extends ig.BoxGui {
		public gfx: ig.Image;
		public ninepatch: ig.NinePatch;
		public title: sc.TextGui;
		public category: sc.TextGui;
		public alternativeArrow: ig.ImageGui;
		public alternative: sc.TextGui;
		public scrollContainer: sc.ScrollPane;
		public content: ig.GuiElementBase;
		public key: any;
		public lore: any;
		public buttongroup: sc.ButtonGroup;
		public currentButton: any;
		public focus: boolean;
		public scrollMemory: any;

		public constructor();

		public init(): void;
		public show(): void;
		public hide(): void;
		public setFocus(b: any): void;
		public clearFocus(): void;
		public onButtonTraversal(): void;
		public onBackButtonPress(): void;
		public update(): void;
		public setCategory(b: any): void;
		public setLore(b: any): void;
		public _createEntry(b: any): void;
		public _addContent(b: any, a: any, d: any, c: any, e: any, f: any, g: any, h: any): any;
	}
	export class LoreEntryButton extends sc.ListBoxButton {
		public key: any;
		public completion: sc.NumberGui;
		public overlay: sc.NewUnlockOverlay;

		public constructor(b: any, a: any, d: any, c: any, e: any);

		public init(b: any, a: any, d: any, c: any, e: any): void;
		public setPressState(b: any): void;
		public clearOverlay(): void;
		public isNoPercentType(b: any): any;
	}
	export class LoreListBoxNew extends sc.ListTabbedPane {
		public gfx: ig.Image;
		public submitSound: any;
		public favSound: any;
		public errorSound: any;
		public completion: sc.TextGui;
		public newList: any;

		public constructor();

		public init(): void;
		public addObservers(): void;
		public removeObservers(): void;
		public show(): void;
		public hide(): void;
		public getCurrentSortText(): any;
		public onListEntryPressed(a: any): void;
		public onLeftRightPress(a: any, b: any, c: any): any;
		public onTabChanged(a: any): void;
		public onTabButtonCreation(a: any, b: any, c: any): any;
		public onTabPressed(a: any, b: any): any;
		public onTabSelected(): void;
		public onTabMouseFocusLost(): void;
		public onCreateListEntries(a: any, d: any, c: any, e: any): void;
		public findParentIndex(a: any, b: any): any;
		public onListEntrySelected(a: any): void;
		public onListMouseFocusLost(): void;
		public showLockedEntries(a: any): any;
		public modelChanged(a: any, b: any, c: any): void;
		public canShowCompletion(a: any): any;
	}
	export class LoreMenu extends sc.BaseMenu {
		public hotkeyHelp: sc.ButtonGui;
		public hotkeySort: sc.ButtonGui;
		public helpGui: sc.HelpScreen;
		public list: sc.LoreListBoxNew;
		public info: sc.LoreInfoBox;
		public sortMenu: sc.SortMenu;

		public constructor();

		public init(): void;
		public addObservers(): void;
		public removeObservers(): void;
		public showMenu(): void;
		public hideMenu(): void;
		public exitMenu(): void;
		public onHotkeyHelpCheck(): any;
		public onHelpButtonPressed(): void;
		public onHotkeySortCheck(): any;
		public onSortButtonPress(): void;
		public onExecuteSort(b: any): void;
		public createHelpGui(): void;
		public onAddHotkeys(b: any): void;
		public commitHotKeysToTopBar(b: any): any;
		public onBackButtonPress(): void;
		public updateSortMenuButton(b: any): void;
		public modelChanged(b: any, a: any, d: any): void;
	}
	export class StatusPageSwitch extends ig.GuiElementBase {
		public transitions: any;
		public left: sc.ButtonGui;
		public right: sc.ButtonGui;
		public text: sc.TextGui;

		public constructor();

		public init(): void;
		public updateDrawables(a: any): void;
		public show(): void;
		public hide(): void;
		public updateCurrentPageName(): void;
		public updateStatusPage(a: any): void;
		public onLeftPressCheck(): any;
		public onRightPressCheck(): any;
	}
	export class StatusElementSwitch extends ig.GuiElementBase {
		public gfx: ig.Image;
		public transitions: any;
		public left: sc.ButtonGui;
		public right: sc.ButtonGui;
		public icon: ig.ImageGui;

		public constructor();

		public init(): void;
		public updateDrawables(a: any): void;
		public show(): void;
		public hide(): void;
		public updateCurrentElementIcon(): void;
		public updateElement(a: any): void;
		public onLeftPressCheck(): any;
		public onRightPressCheck(): any;
	}
	export class StatusParamBar extends ig.GuiElementBase {
		public gfx: ig.Image;
		public name: string;
		public lineID: number;
		public iconID: number;
		public usePercent: boolean;
		public iconIndex: any;
		public skipVertLine: boolean;
		public base: sc.NumberGui;
		public equip: sc.NumberGui;
		public skills: sc.NumberGui;
		public equipAdd: sc.NumberGui;
		public skillAdd: sc.NumberGui;
		public description: sc.TextGui;
		public guis: any;
		public _baseRed: boolean;
		public _equipRed: boolean;
		public _skillsRed: boolean;
		public _hideAll: boolean;
		public _skillHidden: boolean;
		public _noPercent: boolean;

		public constructor(a: any, b: any, c: any, e: any, f: any, g: any, h: any, i: any, j: any);

		public init(a: any, b: any, c: any, e: any, f: any, g: any, h: any, i: any, j: any): void;
		public updateValues(a: any, b: any, c: any, e: any, f: any, g: any, h: any): void;
		public hideValues(a: any): void;
		public updateDrawables(a: any): void;
		public addTransitions(a: any): void;
	}
	export class StatusViewMain extends ig.GuiElementBase {
		public transitions: any;
		public params: sc.StatusViewMainParameters;
		public equip: sc.StatusViewMainEquipment;

		public constructor();

		public init(): void;
		public show(): void;
		public hide(a: any): void;
		public updatePage(): void;
	}
	export class StatusViewMainEquipment extends sc.MenuPanel {
		public transitions: any;
		public bodyparts: any;

		public constructor();

		public init(): void;
		public show(): void;
		public hide(): void;
		public updateValues(): void;
		public createEntry(a: any, b: any, c: any): any;
		public getEquipID(a: any): any;
	}
	export class StatusViewMainParameters extends sc.MenuPanel {
		public menuGfx: ig.Image;
		public statusGfx: ig.Image;
		public transitions: any;
		public level: sc.NumberGui;
		public hpBar: sc.ItemStatusDefaultBar;
		public spBar: sc.ItemStatusDefaultBar;
		public expBar: sc.ItemStatusDefaultBar;
		public baseParams: any;

		public constructor();

		public init(): void;
		public updateDrawables(a: any): void;
		public show(): void;
		public hide(a: any): void;
		public createStatusDisplay(a: any, b: any, c: any, e: any, f: any, g: any, h: any): any;
		public updateValues(a: any): void;
	}
	export class StatsScrollPane extends sc.ScrollPane {
		public contentPane: ig.GuiElementBase;
		public paddingTop: number;

		public constructor(b: any);

		public init(b: any): void;
		public update(): void;
		public setSize(b: any, a: any): void;
		public scroll(b: any, a: any): void;
		public addEntry(b: any, a: any): void;
		public clear(b: any): void;
		public setScrollY(b: any, a: any, d: any): void;
		public getContentHeight(b: any): any;
		public setContentHeight(b: any): void;
	}
	export class StatPercentNumber extends ig.GuiElementBase {
		public gfx: ig.Image;
		public number: sc.NumberGui;
		public floating: sc.NumberGui;
		public color: number;
		public x: number;
		public smallPercent: boolean;

		public constructor(b: any, a: any);

		public init(b: any, a: any): void;
		public setNumber(b: any, a: any): void;
		public setColor(b: any): void;
		public updateDrawables(b: any): void;
	}
	export class StatusViewParameters extends ig.GuiElementBase {
		public transitions: any;
		public container: sc.StatusViewParametersContainer;

		public constructor();

		public init(): void;
		public show(): void;
		public hide(b: any): void;
		public updatePage(): void;
	}
	export class StatusViewParametersContainer extends sc.MenuPanel {
		public transitions: any;
		public bg: sc.MenuScanLines;
		public list: sc.StatsScrollPane;
		public entries: any;

		public constructor();

		public init(): any;
		public show(): void;
		public hide(b: any): void;
		public updateValues(b: any): void;
		public updateLine(b: any, a: any, d: any, c: any, e: any, f: any): void;
		public createParameterLines(): void;
		public createLine(b: any, a: any, d: any, c: any, e: any, f: any, g: any): void;
	}
	export class StatusViewModifiers extends ig.GuiElementBase {
		public transitions: any;
		public container: sc.StatusViewModifiersContainer;

		public constructor();

		public init(): void;
		public show(): void;
		public hide(b: any): void;
		public updatePage(b: any): void;
	}
	export class StatusViewModifiersContainer extends sc.MenuPanel {
		public transitions: any;
		public bg: sc.MenuScanLines;
		public list: sc.StatsScrollPane;
		public entries: any;

		public constructor();

		public init(): any;
		public show(): void;
		public hide(b: any): void;
		public updateValues(b: any, a: any): void;
		public updateLine(b: any, a: any, d: any, c: any): void;
		public createParameterLines(b: any): void;
		public createLine(b: any, a: any, d: any, c: any, e: any): any;
	}
	export class StatusViewCombatArts extends ig.GuiElementBase {
		public transitions: any;
		public container: sc.StatusViewCombatArtsContainer;

		public constructor();

		public init(): void;
		public show(): void;
		public hide(a: any): void;
		public updatePage(a: any): void;
	}
	export class StatusViewCombatArtsContainer extends sc.MenuPanel {
		public transitions: any;
		public bg: sc.MenuScanLines;
		public list: sc.StatsScrollPane;
		public entries: any;

		public constructor();

		public init(): any;
		public show(): void;
		public hide(a: any): void;
		public updateValues(a: any): void;
		public createArts(a: any): void;
		public addType(a: any): void;
		public addArts(a: any, b: any, c: any): void;
		public getMaxArts(a: any, b: any): any;
	}
	export class StatusViewCombatArtsEntry extends ig.GuiElementBase {
		public skillIcons: ig.Image;
		public icon: ig.ImageGui;
		public level: sc.NumberGui;
		public sp: sc.NumberGui;
		public dmgType: sc.TextGui;
		public stunType: sc.TextGui;
		public condition: sc.TextGui;
		public name: sc.TextGui;
		public description: sc.TextGui;
		public info: any;

		public constructor(a: any, b: any);

		public init(a: any, b: any): void;
		public addText(a: any, b: any, c: any): any;
		public getDamageType(a: any): any;
		public getStunType(a: any): any;
		public getConditionType(): any;
	}
	export class StatusViewCombatArtsLine extends ig.GuiElementBase {
		public gfx: ig.Image;
		public text: sc.TextGui;
		public icon: number;

		public constructor(a: any, b: any);

		public init(a: any, b: any): void;
		public updateDrawables(a: any): void;
	}
	export class StatusViewCombatArtsLineSingle extends ig.GuiElementBase {
		public gfx: ig.Image;

		public constructor();

		public init(): void;
		public updateDrawables(a: any): void;
	}
	export class StatusMenu extends sc.BaseMenu {
		public hotkeyHelp: sc.ButtonGui;
		public hotkeyEquip: sc.ButtonGui;
		public hotkeyDiff: sc.ButtonGui;
		public temp_button_group: sc.ButtonGroup;
		public helpGui: sc.HelpScreen;
		public pages: any;
		public elements: sc.StatusElementSwitch;
		public pager: sc.StatusPageSwitch;

		public constructor();

		public init(): void;
		public addObservers(): void;
		public removeObservers(): void;
		public showMenu(b: any, a: any): void;
		public hideMenu(b: any, a: any): void;
		public exitMenu(b: any): void;
		public createPages(): void;
		public setCurrentPage(b: any, a: any): void;
		public updateCurrentPage(b: any): void;
		public updateLea(b: any, a: any): void;
		public onHotkeyHelpCheck(): any;
		public onHelpButtonPressed(): void;
		public onHotkeyEquipCheck(): any;
		public onEquipButtonPressed(): void;
		public onHotkeyDiffCheck(): any;
		public onDiffButtonPressed(): void;
		public createHelpGui(): void;
		public onAddHotkeys(b: any): void;
		public commitHotKeysToTopBar(b: any): any;
		public updateHotkeys(): void;
		public onBackButtonPress(): void;
		public modelChanged(b: any, a: any, d: any): void;
	}
	export class MuseumMenu extends sc.BaseMenu {
		public hotkeyHelp: sc.ButtonGui;
		public temp_button_group: sc.ButtonGroup;
		public helpGui: sc.MultiPageBoxGui;

		public constructor();

		public init(): void;
		public addObservers(): void;
		public removeObservers(): void;
		public showMenu(): void;
		public hideMenu(): void;
		public exitMenu(): void;
		public onHotkeyHelpCheck(): any;
		public onHelpButtonPressed(): void;
		public createHelpGui(): void;
		public onAddHotkeys(): any;
		public onBackButtonPress(): void;
		public modelChanged(): void;
	}
	export class StatsBaseEntryGui extends ig.GuiElementBase {
		public gfx: ig.Image;
		public key: any;
		public keyGui: sc.TextGui;
		public valueGui: any;

		public constructor(a: any, b: any, c: any);

		public init(a: any, b: any, c: any): void;
		public updateDrawables(a: any): void;
	}
	export class StatsListBox extends sc.TabbedPane {
		public gfx: ig.Image;
		public submitSound: any;
		public bg: sc.MenuScanLines;
		public currentGui: sc.StatsScrollPane;
		public tabState: any;
		public _buttongroup: any;

		public constructor(a: any);

		public init(a: any): void;
		public show(): void;
		public hide(): void;
		public switchTab(a: any): void;
		public onTabPressed(a: any, b: any): any;
		public onTabButtonCreation(a: any, b: any, c: any): any;
		public onTabChanged(a: any): void;
		public onContentCreation(): any;
		public onClearPrevContent(): void;
		public onSetCacheContent(a: any): void;
		public modelChanged(): void;
	}
	export class StatsMenu extends sc.BaseMenu {
		public hotkeyHelp: sc.ButtonGui;
		public buttongroup: sc.ButtonGroup;
		public helpGui: sc.HelpScreen;
		public list: sc.StatsListBox;

		public constructor();

		public init(): void;
		public update(): void;
		public addObservers(): void;
		public removeObservers(): void;
		public showMenu(): void;
		public hideMenu(): void;
		public exitMenu(): void;
		public onButtonTraversal(): void;
		public onHotkeyHelpCheck(): any;
		public onHelpButtonPressed(): void;
		public createHelpGui(): void;
		public onAddHotkeys(b: any): void;
		public commitHotKeysToTopBar(b: any): any;
		public onBackButtonPress(): void;
		public modelChanged(): void;
	}
	export class TrophyTabOverview extends ig.GuiElementBase {
		public transitions: any;
		public total: sc.TrophyTabOverview.Entry;
		public category: sc.TrophyTabOverview.Entry;
		public section: sc.TrophyTabOverview.Entry;

		public constructor();

		public init(): void;
		public updateNumbers(a: any, b: any): void;
		public updateDrawables(a: any): void;
	}
	export class TrophyTotalPoints extends sc.MenuPanel {
		public gfx: ig.Image;
		public transitions: any;
		public text: sc.TextGui;
		public number: sc.TextGui;

		public constructor();

		public init(): void;
		public show(): void;
		public hide(): void;
		public updateDrawables(a: any): void;
	}
	export class TrophyCompletion extends sc.MenuPanel {
		public gfx: ig.Image;
		public transitions: any;
		public text: sc.TextGui;
		public percent: sc.StatPercentNumber;

		public constructor();

		public init(): void;
		public show(): void;
		public hide(): void;
		public updateDrawables(a: any): void;
	}
	export class TrophySectionList extends ig.GuiElementBase {
		public transitions: any;
		public buttongroup: sc.ButtonGroup;
		public index: any;
		public category: any;
		public callback: any;
		public active: boolean;
		public currentButton: any;
		public prevButton: any;
		public buttons: any;
		public sectionButtons: any;
		public switchLeft: sc.TextGui;
		public switchRight: sc.TextGui;

		public constructor(a: any, b: any, e: any);

		public init(a: any, b: any, e: any): void;
		public activate(): void;
		public deactivate(): void;
		public setActiveButton(a: any, b: any): void;
		public getCurrentSection(): any;
		public getPreviousSection(): any;
		public updateDrawables(a: any): void;
		public addButton(a: any, b: any, e: any, f: any, g: any): void;
	}
	export class TrophyListEntry extends ig.FocusGui {
		public transitions: any;
		public gfx: ig.Image;
		public ninepatch: ig.NinePatch;
		public character: any;
		public title: sc.TextGui;
		public description: sc.TextGui;
		public progress: sc.TrophyProgress;
		public icon: sc.TrophyIconGraphic;
		public overlay: sc.NewUnlockOverlay;
		public steamID: boolean;
		public key: any;
		public toggleState: boolean;
		public triggered: boolean;

		public constructor(a: any, b: any, e: any, f: any);

		public init(a: any, b: any, e: any, f: any): void;
		public updateDrawables(a: any): void;
		public toggleProgress(a: any, b: any): void;
		public clearOverlay(): void;
		public getTextWithColor(b: any, c: any): any;
	}
	export class TrophyProgress extends ig.GuiElementBase {
		public numberGfx: ig.Image;
		public bar: sc.TrophyProgressBar;
		public content: ig.GuiElementBase;

		public constructor(a: any);

		public init(a: any): void;
		public show(): void;
		public hide(): void;
		public setProgress(a: any): void;
		public setProgressFallback(a: any): void;
		public setProgressForTimeType(a: any, b: any, e: any): any;
		public setProgressForValueType(a: any, b: any, e: any): void;
	}
	export class TrophyProgressBar extends ig.GuiElementBase {
		public backgroundPatch: ig.NinePatch;
		public ratio: number;
		public ratioSmall: number;
		public triggered: boolean;
		public frame: number;

		public constructor(a: any);

		public init(a: any): void;
		public updateDrawables(a: any): void;
		public setRatio(a: any): void;
	}
	export class TrophyIconGraphic extends ig.GuiElementBase {
		public gfx: ig.Image;
		public icons: ig.Image;
		public ribbon: ig.ImageGui;
		public icon: ig.ImageGui;
		public points: sc.NumberGui;
		public transitions: any;

		public constructor(a: any, b: any, e: any, f: any);

		public init(a: any, b: any, e: any, f: any): void;
		public addStars(a: any, b: any): void;
		public createStar(a: any): any;
	}
	export class TrophyList extends sc.ListTabbedPane {
		public submitSound: any;
		public containerHeightOffset: any;
		public listPosOffset: any;
		public listHeightOffset: number;
		public listPageSize: number;
		public sections: any;
		public sectionCache: any;
		public showStats: boolean;
		public showProgress: boolean;
		public newList: any;

		public constructor();

		public init(): void;
		public addObservers(): void;
		public removeObservers(): void;
		public show(): void;
		public hide(): void;
		public toggleProgress(): void;
		public onButtonTraversal(): void;
		public getCurrentSortText(): any;
		public onLeftRightPress(): any;
		public onTabChanged(b: any, a: any): void;
		public onTabButtonCreation(b: any, a: any, d: any): any;
		public onTabPressed(b: any, a: any): any;
		public onTabSelected(): void;
		public onTabMouseFocusLost(): void;
		public onSectionPress(b: any, a: any, d: any): void;
		public switchSection(b: any): void;
		public onCreateListEntries(b: any, a: any, d: any, c: any): void;
		public onListEntrySelected(b: any): void;
		public onListMouseFocusLost(): void;
		public collectTrophies(b: any, a: any, d: any): any;
		public sortList(b: any, a: any): any;
		public modelChanged(b: any, a: any, d: any): void;
	}
	export class TrophyMenu extends sc.ListInfoMenu {
		public hotkeyStats: sc.ButtonGui;
		public helpGui: sc.HelpScreen;
		public sectionLeft: any;
		public sectionRight: any;
		public points: sc.TrophyTotalPoints;
		public completion: sc.TrophyCompletion;

		public constructor();

		public init(): void;
		public showMenu(): void;
		public exitMenu(): void;
		public onAddHotkeys(b: any): void;
		public commitHotKeysToTopBar(b: any): any;
		public onHotkeyStatsCheck(): any;
		public onStatsButtonPressed(): void;
		public createHelpGui(): void;
		public modelChanged(b: any, a: any, d: any): void;
	}
	export class SocialList extends sc.ListTabbedPane {
		public submitSound: any;
		public favSound: any;
		public errorSound: any;

		public constructor();

		public init(): void;
		public addObservers(): void;
		public removeObservers(): void;
		public show(): void;
		public hide(): void;
		public updatePartyMembers(): void;
		public getCurrentSortText(): any;
		public onLeftRightPress(): any;
		public onTabChanged(b: any): void;
		public onTabButtonCreation(b: any, a: any, d: any): any;
		public onTabPressed(b: any, a: any): any;
		public onTabSelected(): void;
		public onTabMouseFocusLost(): void;
		public getMemberList(b: any, a: any): any;
		public sortList(b: any, a: any): any;
		public onCreateListEntries(b: any, a: any, d: any, c: any): void;
		public onListEntrySelected(b: any): void;
		public onListEntryPressed(b: any): void;
		public onListMouseFocusLost(): void;
		public modelChanged(b: any, a: any, d: any): void;
	}
	export class SocialMenu extends sc.ListInfoMenu {
		public party: sc.SocialPartyBox;
		public options: sc.SortMenu;
		public optionsContacts: sc.SortMenu;
		public _keepButtonFocused: any;

		public constructor();

		public init(): void;
		public showMenu(): void;
		public exitMenu(): void;
		public openOptionsMenu(b: any, a: any): void;
		public contactMember(b: any): void;
		public inviteMember(b: any): void;
		public removeMember(b: any): void;
		public onEventEndDetach(): void;
		public onOptionsExecute(b: any): void;
		public onOptionsBack(): void;
		public createHelpGui(): void;
		public modelChanged(b: any, a: any, d: any): void;
	}
	export class TradeItem extends sc.ListBoxButton {
		public helperGfx: ig.Image;
		public requiredGui: sc.NumberGui;
		public amount: sc.NumberGui;
		public crossGui: ig.ImageGui;
		public isTrade: boolean;
		public required: number;

		public constructor(b: any, a: any, d: any, c: any, e: any, f: any, g: any);

		public init(b: any, a: any, d: any, c: any, e: any, f: any, g: any, _usedInChild7: any): void;
		public updateTradeItem(b: any): void;
	}
	export class TradeItemBox extends ig.GuiElementBase {
		public gfx: ig.Image;
		public dividerColor: any;

		public constructor(b: any, a: any, d: any, c: any, e: any);

		public init(b: any, a: any, d: any, c: any, e: any): void;
		public updateDrawables(b: any): void;
		public setContent(b: any, a: any, d: any, c: any): any;
		public updateTradeItemButtons(b: any): void;
		public _isEquipped(b: any, a: any, d: any): any;
	}
	export class TradeMoneyGui extends ig.GuiElementBase {
		public gfx: ig.Image;
		public transitions: any;
		public content: ig.GuiElementBase;
		public money: number;
		public credit: sc.NumberGui;
		public fee: sc.NumberGui;
		public current: sc.NumberGui;
		public dividerColor: any;

		public constructor(b: any, a: any, d: any, c: any);

		public init(b: any, a: any, d: any, c: any): any;
		public setContent(b: any, a: any, d: any, c: any): any;
		public updateValues(): void;
		public updateDrawables(b: any): void;
	}
	export class TradeDialogMenu extends ig.BoxGui {
		public transitions: any;
		public ninepatch: ig.NinePatch;
		public buttongroup: sc.ButtonGroup;
		public tradeButton: sc.ButtonGui;
		public getItems: sc.TradeItemBox;
		public requireItems: sc.TradeItemBox;
		public money: sc.TradeMoneyGui;
		public arrow: ig.ImageGui;
		public forText: sc.TextGui;
		public ownedText: sc.TextGui;

		public constructor();

		public init(): void;
		public updateDrawables(b: any): void;
		public onSelection(b: any): void;
		public showMenu(): void;
		public hideMenu(): void;
		public doTrade(): void;
		public modelChanged(b: any, a: any): void;
		public _onTradeButtonCheck(): any;
		public _setOffer(): void;
		public _createContent(): void;
	}
	export class TradeOfferDisplay extends ig.GuiElementBase {
		public transitions: any;
		public offerText: sc.TextGui;
		public cycleLeft: sc.ButtonGui;
		public cycleRight: sc.ButtonGui;
		public offerToken: any;

		public constructor();

		public init(): void;
		public updateDrawables(b: any): void;
		public showMenu(): void;
		public hideMenu(): void;
		public _cycleOffers(b: any): void;
		public onLeftPressCheck(): any;
		public onRightPressCheck(): any;
	}
	export class TradeButtonBox extends ig.GuiElementBase {
		public gfx: ig.Image;
		public transitions: any;
		public trader: any;
		public buttongroup: any;
		public buttonStartIndex: number;
		public buttons: any;
		public character: sc.TradeCharacterView;
		public traderName: sc.TextGui;
		public location: sc.TextGui;

		public constructor(b: any, a: any, d: any);

		public init(b: any, a: any, d: any): void;
	}
	export class TradeEntryButton extends sc.TradeItem {
		public offer: number;
		public trader: any;

		public constructor(b: any, a: any, d: any, c: any, e: any, f: any, g: any, h: any);

		public init(b: any, a: any, d: any, c: any, e: any, f: any, g: any, h: any): void;
	}
	export class TradeCharacterView extends ig.BoxGui {
		public ninepatch: ig.NinePatch;
		public display: sc.NPCDisplayGui;
		public container: ig.GuiElementBase;
		public transitions: any;

		public constructor();

		public init(): void;
		public setCharacter(b: any, a: any): void;
		public centerNPC(b: any): void;
	}
	export class TradeDetailsView extends ig.BoxGui {
		public transitions: any;
		public ninepatch: ig.NinePatch;
		public sizeTransition: any;
		public container: ig.GuiElementBase;
		public box: any;
		public character: sc.TradeCharacterView;
		public name: sc.TextGui;
		public location: sc.TextGui;
		public arrowRight: ig.ImageGui;
		public arrow: ig.ImageGui;
		public getGui: sc.TradeItemBox;
		public requireGui: sc.TradeItemBox;
		public moneyGui: sc.TradeMoneyGui;
		public _trader: any;

		public constructor();

		public init(): void;
		public setTraderData(b: any, a: any, d: any): void;
		public reset(): void;
		public show(b: any, a: any, d: any): void;
		public hide(b: any): void;
	}
	export class TradersListBox extends sc.ListTabbedPane {
		public submitSound: any;

		public constructor();

		public init(): void;
		public addObservers(): void;
		public removeObservers(): void;
		public show(): void;
		public hide(): void;
		public getCurrentSortText(): any;
		public onLeftRightPress(a: any, b: any): any;
		public onTabChanged(): void;
		public onTabButtonCreation(a: any, b: any, c: any): any;
		public onTabPressed(a: any, b: any): any;
		public onTabSelected(): void;
		public onTabMouseFocusLost(): void;
		public onCreateListEntries(a: any, b: any, c: any, e: any): void;
		public hasAnyUpgrades(a: any): any;
		public onListEntrySelected(a: any): void;
		public onListEntryPressed(a: any): void;
		public onListMouseFocusLost(): void;
		public modelChanged(a: any, b: any, c: any): void;
	}
	export class TraderMenu extends sc.ListInfoMenu {
		public detail: sc.TradeDetailsView;

		public constructor();

		public init(): void;
		public showMenu(): void;
		public exitMenu(): void;
		public enterDetails(): void;
		public setTradeInfo(): void;
		public exitDetails(): void;
		public onDetailsBackPressed(): void;
		public createHelpGui(): void;
		public modelChanged(b: any, a: any, d: any): void;
	}
	export class BotanicsEntryButton extends sc.ListBoxButton {
		public helperGfx: ig.Image;
		public percent: ig.ImageGui;
		public plant: any;

		public constructor(b: any, a: any, d: any, c: any, e: any);

		public init(b: any, a: any, d: any, c: any, e: any): void;
	}
	export class BotanicsPreUnlockButton extends ig.FocusGui {
		public gfx: ig.Image;
		public ninepatch: ig.NinePatch;
		public overlayNinepatch: ig.NinePatch;
		public plant: any;
		public text: sc.TextGui;
		public collect: sc.TextGui;
		public bar: sc.BotanicsProgressBar;

		public constructor(b: any, a: any, d: any);

		public init(b: any, a: any, d: any): void;
		public updateDrawables(b: any): void;
	}
	export class BotanicsProgressBar extends ig.GuiElementBase {
		public gfx: ig.Image;
		public backgroundPatch: ig.NinePatch;
		public ratio: number;

		public constructor(b: any);

		public init(b: any): void;
		public updateDrawables(b: any): void;
	}
	export class BotanicsButtonBox extends ig.GuiElementBase {
		public gfx: ig.Image;
		public transitions: any;
		public plant: any;
		public buttongroup: any;
		public buttonStartIndex: number;
		public buttons: any;
		public plantView: sc.BotanicsPlantView;
		public plantName: sc.TextGui;
		public location: sc.TextGui;

		public constructor(b: any, a: any, d: any, c: any, e: any);

		public init(b: any, a: any, d: any, c: any, e: any): void;
	}
	export class BotanicsPlantView extends ig.BoxGui {
		public ninepatch: ig.NinePatch;
		public display: sc.ItemDestructDisplayGui;
		public container: ig.GuiElementBase;
		public transitions: any;

		public constructor();

		public init(): void;
		public setPlant(b: any, a: any): void;
		public centerEntity(b: any): void;
	}
	export class ItemDestructDisplayGui extends ig.GuiElementBase {
		public transitions: any;
		public config: any;
		public destructType: any;
		public gameState: ig.GameState;
		public size: any;
		public entity: any;
		public callback: any;
		public animSheet: ig.AnimationSheet;

		public constructor(b: any, a: any, d: any, c: any);

		public init(b: any, a: any, d: any, c: any): void;
		public onDetach(): void;
		public onLoadableComplete(b: any, a: any): void;
		public initGameState(): void;
		public update(): void;
		public updateDrawables(b: any): void;
	}
	export class BotanicsListBox extends sc.ListTabbedPane {
		public submitSound: any;

		public constructor();

		public init(): void;
		public addObservers(): void;
		public removeObservers(): void;
		public show(): void;
		public hide(): void;
		public getCurrentSortText(): any;
		public onLeftRightPress(b: any, a: any): any;
		public onTabChanged(): void;
		public onTabButtonCreation(b: any, a: any, d: any): any;
		public onTabPressed(b: any, a: any): any;
		public onTabSelected(): void;
		public onTabMouseFocusLost(): void;
		public onCreateListEntries(b: any, a: any, d: any, c: any): void;
		public onListEntrySelected(b: any): void;
		public onListEntryPressed(): void;
		public onListMouseFocusLost(): void;
		public modelChanged(b: any, a: any, d: any): void;
	}
	export class BotanicsMenu extends sc.ListInfoMenu {
		public detail: any;

		public constructor();

		public init(): void;
		public showMenu(): void;
		public exitMenu(): void;
		public createHelpGui(): void;
		public modelChanged(b: any, a: any, d: any): void;
	}
	export class ArenaCupInfoPage extends ig.GuiElementBase {
		public gfx: ig.Image;
		public transitions: any;
		public banner: sc.ArenaBanner;
		public headerInfo: sc.ArenaInfoLine;
		public highscore: any;
		public time: any;
		public rushTime: any;
		public rounds: sc.ArenaKeyValue;
		public rush: sc.ArenaKeyValue;
		public difficulty: sc.ArenaKeyValue;
		public coins: sc.ArenaKeyValue;

		public constructor();

		public init(): any;
		public show(): void;
		public hide(b: any): void;
		public createStatGui(b: any, a: any, d: any, c: any, e: any): any;
		public setAnnotation(b: any, a: any, d: any, c: any, e: any, f: any, g: any): void;
		public setData(b: any, a: any): void;
		public getDifficulty(b: any): any;
	}
	export class ArenaBanner extends ig.GuiElementBase {
		public gfx: ig.Image;
		public image: ig.Image;
		public imageGui: ig.ImageGui;

		public constructor(b: any);

		public init(b: any): void;
		public setImage(b: any, a: any): void;
		public updateDrawables(b: any): void;
	}
	export class ArenaRoundInfoPage extends ig.GuiElementBase {
		public gfx: ig.Image;
		public numberGFX: ig.Image;
		public transitions: any;
		public highscore: any;
		public time: any;
		public coins: sc.ArenaKeyValue;
		public clearTimes: sc.ArenaKeyValue;
		public headerInfo: any;
		public headerFeat: sc.ArenaInfoLine;
		public headerChallenges: sc.ArenaInfoLine;
		public medals: sc.ArenaRoundInfoPage.Medals;
		public bonuses: ig.GuiElementBase;
		public challenges: ig.GuiElementBase;
		public noneText: sc.TextGui;
		public leftContent: ig.GuiElementBase;
		public rightContent: ig.GuiElementBase;
		public side: boolean;

		public constructor();

		public init(): any;
		public onRightButtonCheck(): any;
		public onLeftButtonCheck(): any;
		public onRightButtonPressed(): void;
		public onLeftButtonPressed(): void;
		public show(): void;
		public hide(b: any): void;
		public togglePage(b: any): void;
		public setData(b: any, a: any): void;
		public setChallenges(b: any): void;
		public setBonusPoints(b: any): any;
		public getBonusText(b: any): any;
		public getBonusPointsText(b: any): any;
		public createBonusEntry(b: any, a: any, d: any, c: any): void;
		public createStatGui(b: any, a: any, d: any, c: any, e: any): any;
		public setAnnotation(b: any, a: any, d: any, c: any, e: any, f: any, g: any): void;
	}
	export class ArenaChallengeEntry extends ig.GuiElementBase {
		public gfx: ig.Image;
		public icon: any;
		public text: sc.TextGui;
		public tiny: boolean;
		public global: boolean;

		public constructor(b: any, a: any, d: any, c: any);

		public init(b: any, a: any, d: any, c: any): void;
		public updateDrawables(b: any): void;
	}
	export class ArenaInfoBox extends ig.BoxGui {
		public gfx: ig.Image;
		public ninepatch: ig.NinePatch;
		public title: sc.TextGui;
		public category: sc.TextGui;
		public level: sc.NumberGui;
		public pages: any;
		public cup: any;
		public key: string;
		public round: any;
		public page: number;

		public constructor();

		public init(): void;
		public show(): void;
		public hide(): void;
		public switchPage(a: any): void;
		public setInfo(a: any, b: any): void;
		public setCupInfo(a: any): void;
		public setRoundInfo(a: any, b: any): void;
		public setCategory(a: any): void;
	}
	export class ArenaTopLine extends ig.GuiElementBase {
		public gfx: ig.Image;

		public constructor(a: any);

		public init(a: any): void;
		public updateDrawables(a: any): void;
	}
	export class ArenaKeyValue extends ig.SimpleGui {
		public gfx: ig.Image;
		public transitions: any;
		public keyGui: sc.TextGui;
		public valueGui: sc.TextGui;

		public constructor(a: any, b: any, c: any);

		public init(a: any, b: any, c: any): void;
		public setKey(a: any): void;
		public setValue(a: any): void;
		public updateDrawables(a: any): void;
	}
	export class ArenaTinyKeyValue extends ig.SimpleGui {
		public gfx: ig.Image;
		public transitions: any;
		public keyGui: sc.TextGui;
		public valueGui: sc.TextGui;

		public constructor(a: any, b: any, c: any);

		public init(a: any, b: any, c: any): void;
		public updateDrawables(a: any): void;
	}
	export class ArenaInfoLine extends ig.SimpleGui {
		public transitions: any;
		public ninepatch: ig.NinePatch;
		public textGui: sc.TextGui;

		public constructor(a: any);

		public init(a: any): void;
		public setSize(a: any, b: any): void;
		public updateDrawables(a: any): void;
	}
	export class ArenaTotalPoints extends sc.MenuPanel {
		public gfx: ig.Image;
		public transitions: any;
		public text: sc.TextGui;
		public number: sc.TextGui;

		public constructor();

		public init(): void;
		public show(): void;
		public hide(): void;
		public updateDrawables(a: any): void;
	}
	export class ArenaEntryButton extends sc.ListBoxButton {
		public trophyGfx: ig.Image;
		public key: any;
		public description: any;
		public decoration: ig.ImageGui;

		public constructor(a: any, b: any, c: any, e: any);

		public init(a: any, b: any, c: any, e: any, _usedInChild4: any, _usedInChild5: any): void;
		public setDecoration(a: any): void;
	}
	export class ArenaRoundEntryButton extends sc.ArenaEntryButton {
		public round: sc.NumberGui;
		public dots: ig.ImageGui;
		public index: any;

		public constructor(a: any, b: any, c: any, e: any, f: any, g: any);

		public init(a: any, b: any, c: any, e: any, f: any, g: any): void;
		public updateDrawables(a: any): void;
		public setActive(a: any): void;
	}
	export class ArenaRoundList extends sc.ListTabbedPane {
		public currentCup: any;
		public active: boolean;
		public submit: ig.Sound;

		public constructor();

		public init(): void;
		public addObservers(): void;
		public removeObservers(): void;
		public show(a: any): void;
		public hide(): void;
		public onTabButtonCreation(a: any, b: any, c: any): any;
		public onTabPressed(a: any, b: any): any;
		public onTabSelected(): void;
		public onTabMouseFocusLost(): void;
		public onClearCurrentContent(a: any): void;
		public onListEntryPressed(a: any): void;
		public onCreateListEntries(a: any, b: any): void;
		public onListEntrySelected(a: any): void;
		public onListMouseFocusLost(): void;
		public isRoundActive(a: any, b: any): any;
		public modelChanged(a: any, b: any, c: any): void;
	}
	export class ArenaCupList extends sc.ListTabbedPane {
		public submitSound: any;
		public favSound: any;
		public errorSound: any;

		public constructor();

		public init(): void;
		public addObservers(): void;
		public removeObservers(): void;
		public show(): void;
		public hide(): void;
		public getCurrentSortText(): any;
		public onLeftRightPress(a: any, b: any, c: any): any;
		public onTabChanged(a: any): void;
		public onTabButtonCreation(a: any, b: any, c: any): any;
		public onTabPressed(a: any, b: any): any;
		public onTabSelected(): void;
		public onTabMouseFocusLost(): void;
		public onListEntryPressed(a: any): void;
		public onCreateListEntries(a: any, b: any, c: any, e: any): void;
		public onListEntrySelected(a: any): void;
		public onListMouseFocusLost(): void;
		public modelChanged(a: any, b: any, c: any): void;
	}
	export class ArenaMenu extends sc.ListInfoMenu {
		public hotkeyOverview: sc.ButtonGui;
		public helpGui: sc.HelpScreen;
		public roundList: sc.ArenaRoundList;
		public points: sc.ArenaTotalPoints;
		public overview: sc.ArenaCupOverview;

		public constructor();

		public init(): void;
		public showMenu(): void;
		public exitMenu(): void;
		public onAddHotkeys(b: any): void;
		public commitHotKeysToTopBar(b: any): any;
		public enterRoundMenu(b: any): void;
		public exitRoundMenu(): void;
		public onHotkeyOverviewCheck(): any;
		public onOverviewButtonPressed(): void;
		public createHelpGui(): void;
		public modelChanged(b: any, a: any, d: any): void;
	}
	export class NewGameCart extends sc.MenuPanel {
		public transitions: any;
		public points: sc.NewGameCartEntry;
		public cost: sc.NewGameCartEntry;
		public rest: sc.NewGameCartEntry;
		public enabled: boolean;

		public constructor();

		public init(): void;
		public resetNumbers(b: any): void;
		public updateCost(b: any): void;
		public updateDrawables(b: any): void;
		public show(): void;
		public hide(): void;
	}
	export class NewGameCartEntry extends ig.GuiElementBase {
		public gfx: ig.Image;
		public text: sc.TextGui;
		public number: sc.NumberGui;
		public hideSymbol: boolean;

		public constructor(b: any);

		public init(b: any): void;
		public updateDrawables(b: any): void;
		public setNumber(b: any, a: any): void;
	}
	export class NewGameToggleSet extends ig.GuiElementBase {
		public header: sc.TextGui;
		public background: ig.ColorGui;
		public buttons: any;
		public set: any;
		public listIndex: number;

		public constructor(b: any, a: any, d: any, c: any, e: any);

		public init(b: any, a: any, d: any, c: any, e: any): void;
		public updateTogglesStates(b: any): void;
	}
	export class NewGameOptionButton extends sc.ListBoxButton {
		public amount: sc.NumberGui;
		public set: any;
		public setKey: any;
		public setGui: any;

		public constructor(b: any, a: any, d: any, c: any, e: any, f: any, g: any);

		public init(b: any, a: any, d: any, c: any, e: any, f: any, g: any): void;
		public updateToggleState(): void;
		public setActive(b: any): void;
	}
	export class NewGameList extends ig.GuiElementBase {
		public transitions: any;
		public gfx: ig.Image;
		public list: sc.MultiColumnItemListBox;
		public buttongroup: any;
		public toggleOnSound: any;
		public toggleOffSound: any;
		public _curElement: any;

		public constructor();

		public init(): void;
		public createListEntries(): void;
		public addObservers(): void;
		public removeObservers(): void;
		public show(): void;
		public hide(): void;
		public onGetHeightAtIndex(b: any, a: any): any;
		public onItemButtonPressed(b: any): void;
		public isNonMouseMenuInput(): any;
		public modelChanged(): void;
	}
	export class NewGamePlusMenu extends sc.ListInfoMenu {
		public points: sc.NewGameCart;
		public button: sc.ButtonGui;

		public constructor();

		public init(): void;
		public showMenu(): void;
		public exitMenu(): void;
		public onHotkeyBeginCheck(): any;
		public onBeginButtonPressed(): void;
		public createHelpGui(): void;
		public modelChanged(): void;
	}
	export class MenuModel extends ig.GameAddon {
		public guiReference: any;
		public observers: any;
		public infoText: any;
		public buffText: any;
		public buffID: any;
		public currentMenu: any;
		public previousMenu: any;
		public menuStack: any;
		public buttonInteract: ig.ButtonInteractEntry;
		public backCallbackStack: any;
		public hotkeysCallbacks: any;
		public currentBackCallback: any;
		public leaState: any;
		public menuEntered: boolean;
		public currentBodyPart: any;
		public previousBodyPart: any;
		public currentSkillTree: any;
		public previousSkillTree: any;
		public skillCursor: any;
		public lastSkillCursor: any;
		public skillRecoverPos: any;
		public skillCamera: any;
		public skillDrag: boolean;
		public skillWasDragged: boolean;
		public skillState: any;
		public skillStateOrigin: any;
		public skillCursorMoved: boolean;
		public currentSkillFocus: any;
		public skillSwapCursor: any;
		public skillSwapMoved: boolean;
		public skillSwapFocus: any;
		public mapDrag: boolean;
		public mapWasDragged: boolean;
		public mapCamera: any;
		public mapFirstVisit: boolean;
		public mapUnknownArea: boolean;
		public mapMouseOverFloorButtons: boolean;
		public mapCursor: any;
		public mapLastCursor: any;
		public mapCursorMoved: boolean;
		public mapWorldmapActive: boolean;
		public mapWorldCursor: any;
		public mapWorldLastCursor: any;
		public mapWmCursorMoved: boolean;
		public mapAreaFocus: any;
		public mapMapFocus: any;
		public mapWorldFirstVisit: boolean;
		public mapLoading: boolean;
		public mapAreaOffset: any;
		public mapStampMenu: boolean;
		public mapStamps: any;
		public shopID: any;
		public shopState: any;
		public shopCoinMode: boolean;
		public shopPage: number;
		public shopCart: any;
		public shopSellMode: boolean;
		public itemCurrentTab: any;
		public itemLastButtonData: any;
		public optionCurrentTab: number;
		public optionLastButtonData: any;
		public optionsLocalMode: boolean;
		public questCurrentTab: number;
		public questLastButtonData: any;
		public questInfo: any;
		public questDetailMode: boolean;
		public questsSeen: any;
		public tradeToggle: boolean;
		public directMode: boolean;
		public directMenu: number;
		public loadMode: boolean;
		public loadSlotID: any;
		public loadClearFilesOnly: boolean;
		public loreCurrentTab: number;
		public synopInfo: any;
		public newUnlocks: any;
		public logEntries: any;
		public gamepadIcons: boolean;
		public menuHost: number;
		public statusPage: number;
		public statusElement: number;
		public statusDiff: boolean;
		public drops: any;
		public dropCounts: any;
		public questHubID: any;
		public words: any;
		public helpMenuOpen: boolean;
		public varsChangedOrder: number;

		public constructor();

		public init(): void;
		public onVarAccess(d: any, c: any): any;
		public dev_UnlockDrop(a: any): void;
		public incrementDropCount(a: any, b: any): any;
		public getFoundDrops(a: any, b: any): any;
		public sortDropList(a: any, b: any): any;
		public getDropCount(a: any): any;
		public hasAnyDropFound(): any;
		public hasAnyDropInArea(a: any): any;
		public hasDropInArea(a: any): any;
		public hasAnyOtherDropFound(): any;
		public getTotalDropsFoundAndCompleted(a: any): any;
		public getFoundDrop(a: any): any;
		public getDropName(a: any): any;
		public getDropArea(a: any): any;
		public setStatusPage(a: any): void;
		public setStatusElement(a: any): void;
		public fireStatusPageEvent(): void;
		public addLog(a: any): void;
		public onReset(): void;
		public onVarsChanged(): void;
		public onPostUpdate(): void;
		public onLevelLoadStart(): void;
		public onLevelLoaded(): void;
		public enterStartUpMenu(): void;
		public addNewUnlock(a: any, b: any): void;
		public hasNewUnlock(a: any): any;
		public hasNewUnlockKey(a: any, b: any): any;
		public clearNewUnlock(a: any, b: any): void;
		public onStorageSave(a: any): void;
		public onStoragePreLoad(a: any): void;
		public addMapStamp(a: any, b: any, e: any, f: any, g: any): any;
		public editStamp(a: any, b: any, e: any): void;
		public removeStamp(a: any, b: any): void;
		public getStamps(a: any): any;
		public getStampCount(a: any): any;
		public fullyEntered(): void;
		public addHotkey(a: any, b: any): void;
		public commitHotkeys(a: any): void;
		public updateHotkeys(a: any): void;
		public removeHotkeys(): void;
		public pushBackCallback(a: any): void;
		public popBackCallback(): void;
		public invokeTopBackButton(): void;
		public pushMenu(a: any): void;
		public popMenu(): void;
		public enterMenu(): void;
		public setDirectMode(a: any, b: any): void;
		public setHost(a: any): void;
		public exitMenu(): void;
		public invokePostExit(): void;
		public setInfoText(a: any, b: any): void;
		public setBuffText(a: any, b: any, e: any): void;
		public moveLeaSprite(a: any, b: any, e: any, f: any): void;
		public enterTradeDetails(): void;
		public exitTradeDetails(): void;
		public setShopState(a: any): void;
		public setShopPage(a: any): void;
		public updateCart(a: any, b: any, e: any): void;
		public getTotalCost(a: any, b: any): any;
		public getItemQuantity(a: any, b: any): any;
		public openShopQuantitySelect(a: any): void;
		public openCheckout(): void;
		public updateTotalCost(a: any, b: any, e: any): void;
		public newSlot(): void;
		public saveSlot(a: any): void;
		public deleteSlot(a: any): void;
		public loadSlot(a: any): void;
		public setItemInfo(a: any): void;
		public resetItemInfo(): void;
		public setItemTab(a: any): void;
		public getCurrentTabType(): any;
		public getCurrentTabSubType(): any;
		public isItemEquipTab(): any;
		public sortList(a: any): void;
		public setOptionTab(a: any): void;
		public getCurrentOptionCategory(): any;
		public openLanguagePopUp(a: any): void;
		public setSynoTab(): void;
		public setSynopInfo(a: any, b: any): void;
		public setSynopFocus(a: any): void;
		public switchSynopsisPage(a: any): void;
		public setSynopPressed(a: any): void;
		public setQuestTab(a: any): void;
		public setQuestInfo(a: any, b: any): void;
		public enterQuestDetails(a: any): void;
		public leaveQuestDetails(): void;
		public selectBodyPart(a: any): void;
		public cycleBodyPartRight(): void;
		public cycleBodyPartLeft(): void;
		public changeEquipOnCurrentBodypart(a: any): void;
		public ensureCurrentValues(): void;
		public exitEquipMenu(): void;
		public showSkillEffect(a: any, b: any, e: any): void;
		public showSwapSkillEffect(a: any): void;
		public selectSkillTree(a: any): void;
		public focusCursorOnNode(a: any, b: any, e: any): void;
		public unfocusCursor(a: any): void;
		public unfocusSwapCursor(a: any): void;
		public focusSwapCursor(a: any, b: any, e: any): void;
		public resetSwapCursor(): void;
		public centerOnNode(a: any, b: any): void;
		public centerOnNodeCam(a: any, b: any, e: any, f: any): void;
		public exitNodeMenu(a: any): void;
		public enterSwapBranches(a: any): void;
		public leaveSwapBranches(): void;
		public toggledInputMode(): void;
		public selectFloor(a: any): void;
		public enterWorldMap(): void;
		public exitWorldMap(): void;
		public focusArea(a: any, b: any, e: any, f: any): void;
		public focusMap(a: any, b: any, e: any, f: any): void;
		public unfocusArea(a: any): void;
		public unfocusMap(a: any): void;
		public resetWorldmapCursor(): void;
		public loadArea(a: any): void;
		public setAreaLoadDone(a: any): void;
		public openStampMenu(a: any): void;
		public getCurrentMenuAsName(): any;
		public getMenuAsName(a: any): any;
		public isStart(): any;
		public isSkills(): any;
		public isEquipment(): any;
		public isStatus(): any;
		public isSynopsis(): any;
		public isMap(): any;
		public isSave(): any;
		public isOptions(): any;
		public isShop(): any;
		public isButtonInteractActive(): any;
	}
	export class GameModel extends ig.GameAddon {
		public observers: any;
		public currentState: number;
		public currentSubState: number;
		public prevSubState: number;
		public currentTask: any;
		public permaTask: any;
		public keepTaskDisplayed: boolean;
		public taskTimer: any;
		public leaConfig: sc.PlayerConfig;
		public player: sc.PlayerModel;
		public message: any;
		public menu: any;
		public options: any;
		public inputGuis: any;
		public startDifficulty: any;
		public skipTimer: number;
		public combatMode: boolean;
		public combatTimer: number;
		public combatRank: number;
		public inCombatTime: number;
		public pauseMusicStop: boolean;
		public mobilityBlock: string;
		public forceCombatMode: boolean;
		public starSpawner: ig.EnvParticleSpawner;
		public skipBlock: boolean;
		public runsTimer: boolean;
		public hsTimer: number;
		public highScore: any;
		public highScoreObs: any;
		public maxHighScore: number;
		public outOfCombatDialogTimer: number;

		public constructor();

		public startHighScoreTimer(): void;
		public stopHighScoreTimer(b: any): any;
		public init(): void;
		public setCombatMode(b: any, a: any): void;
		public cancelCombatCooldown(): void;
		public isCombatRankActive(): any;
		public isSRank(): any;
		public increaseCombatRank(b: any): any;
		public addChoiceGui(b: any): void;
		public removeChoiceGui(b: any): void;
		public notifyDreamFxChange(): void;
		public getCombatRank(): any;
		public getCombatRankLabel(): any;
		public getCombatRankByLabel(b: any): any;
		public getCombatRankDropRate(): any;
		public getCombatRankProgress(): any;
		public isMapLeaveBlocked(): any;
		public isCheckpointBlocked(): any;
		public isSaveBlocked(): any;
		public isTeleportBlocked(): any;
		public isAssistMode(): any;
		public setCancelButton(b: any): void;
		public setMobilityBlock(b: any): void;
		public startCombat(): void;
		public endCombat(): void;
		public updateCombatMusic(): void;
		public _isOutOfCombatDialogReadyIntern(): any;
		public isOutOfCombatDialogReady(): any;
		public onReset(): void;
		public onPreUpdate(): void;
		public onVarsChanged(): void;
		public clearTopMessage(): void;
		public skipCutscene(): void;
		public enterTitle(): void;
		public enterCutscene(b: any): void;
		public enterGame(): void;
		public enterRunning(b: any): void;
		public enterTeleport(): void;
		public enterLoading(): void;
		public enterNewGame(): void;
		public enterReset(): void;
		public enterLoadGame(): void;
		public enterLevelUp(): void;
		public enterQuestSolved(): void;
		public enterQuickMenu(): any;
		public enterOnMapMenu(): any;
		public enterPrevSubState(): void;
		public enterMenu(b: any): any;
		public enterPause(b: any): any;
		public isTitle(): any;
		public isGame(): any;
		public isCutscene(): any;
		public isRunning(): any;
		public isTeleport(): any;
		public isLoading(): any;
		public isNewGame(): any;
		public isReset(): any;
		public isLoadGame(): any;
		public isMenu(): any;
		public isPaused(): any;
		public isHUDBlocked(): any;
		public isLevelUp(): any;
		public isQuestSolved(): any;
		public isQuickMenu(): any;
		public isQuickMenuElementSwapEnabled(): any;
		public isOnMapMenu(): any;
		public isForceCombat(): any;
		public isCombatMode(): any;
		public isCombatActive(): any;
		public isCombatCooldown(): any;
		public getCombatCooldownFactor(): any;
		public isSaveAllowed(): any;
		public isPlayerControlBlocked(): any;
		public hasActiveChoice(): any;
		public startSkip(): void;
		public stopSkip(): void;
		public setTask(b: any, a: any, d: any): void;
		public setPermaTask(b: any): void;
		public resetMenuState(): void;
		public _setState(b: any): void;
		public _setSubState(b: any, a: any): void;
		public onStorageSave(b: any): void;
		public onStoragePreLoad(b: any): void;
		public onStoragePostLoad(b: any): void;
	}
	export class Detectors extends ig.GameAddon {
		public timer: number;
		public onStates: any;
		public detectMsg: any;
		public arGui: ig.GUI.ARBox;
		public fx: ig.EffectSheet;

		public constructor();

		public init(): void;
		public onLevelLoaded(): void;
		public modelChanged(a: any, b: any): void;
		public checkDetectors(a: any): void;
		public onDeferredUpdate(): void;
		public checkDetector(a: any, b: any): any;
		public clearCurrentMsg(): void;
		public startDetector(a: any): void;
	}
	export class ActorEntity extends ig.ActorEntity {
		public soundType: string;
		public stepFx: any;
		public nav: any;
		public tooHighToFall: boolean;
		public stepStats: any;
		public influencer: ig.Influencer;

		public constructor(a: any, b: any, c: any, e: any);

		public init(a: any, b: any, c: any, e: any): void;
		public update(): void;
		public onTerrainUpdate(): void;
		public onJump(a: any, d: any): void;
		public onTouchGround(a: any): void;
		public onNavigationFailed(_usedInChild0: any): void;
		public updateSprites(): void;
		public onMoveEffect(a: any): void;
	}
	export class Character extends ig.JsonLoadable {
		public cacheType: string;
		public data: any;
		public name: any;
		public faceImage: ig.Image;

		public constructor(b: any);

		public init(b: any): void;
		public getExpression(b: any): any;
		public onCacheCleared(): void;
		public getJsonPath(): any;
		public onload(b: any): void;
		public getExpressionImages(b: any): any;
	}
	export class CharacterExpression extends ig.Cacheable {
		public cacheType: string;
		public character: sc.Character;
		public expression: any;
		public expressionImages: any;

		public constructor(b: any, a: any);

		public init(b: any, a: any): void;
		public getCacheKey(b: any, a: any): any;
		public onCacheCleared(): void;
		public onLoadableComplete(b: any): void;
		public clone(): any;
	}
	export class Combat extends ig.GameAddon {
		public listeners: any;
		public actionToken: any;
		public freeLineCommands: any;
		public activeCombatants: any;
		public forces: any;
		public active: boolean;
		public time: number;
		public speed: number;
		public recentlyAttacked: any;
		public playerStartedCombat: boolean;
		public effects: any;
		public cooldownTick: any;
		public stats: any;
		public finalDramaticEffect: any;
		public respawnBlocker: any;
		public enemyDataList: any;
		public postUpdateOrder: number;

		public constructor();

		public init(): void;
		public unlockAllEnemies(): void;
		public setCombatSpeed(a: any): void;
		public getTotalEnemiesFound(a: any, b: any): any;
		public getTotalEnemyReportsFound(a: any, b: any, c: any): any;
		public getEnemyMenuOffset(a: any): any;
		public isEnemyAnalyzable(a: any): any;
		public addActiveCombatant(a: any): void;
		public removeActiveCombatant(a: any): void;
		public changeCombatantParty(a: any, b: any): void;
		public getActiveCombatantCount(a: any, b: any): any;
		public getActiveCombatants(a: any, b: any): any;
		public isDamageIgnore(): any;
		public getEnemyTarget(): any;
		public _addPartyMember(a: any, b: any, c: any): void;
		public getPlayerTarget(a: any): any;
		public getActiveEnemiesNames(): any;
		public getEnemyName(a: any): any;
		public getEnemyCategory(a: any): any;
		public canShowBoosted(a: any): any;
		public canShowBoostedEntry(a: any, b: any): any;
		public getEnemyLevel(a: any): any;
		public getEnemyArea(a: any): any;
		public getEnemyDrops(a: any): any;
		public setScreenEnemiesTarget(a: any): void;
		public removeEnemies(a: any, b: any, c: any, d: any): void;
		public setFinalDramaticEffect(a: any): void;
		public onCombatantDeathHit(a: any, b: any): void;
		public showCombatantLabel(a: any, b: any, c: any): void;
		public showCombatMessage(a: any, b: any): void;
		public doDramaticEffect(a: any, b: any, c: any, d: any): void;
		public sendEnemyMessage(a: any, b: any): void;
		public sendGlobalEnemyEvent(a: any, b: any, c: any): void;
		public onPostUpdate(): void;
		public onReset(): void;
		public onLevelLoadStart(): void;
		public onVarAccess(a: any, b: any): any;
		public modelChanged(a: any, b: any, c: any): void;
		public addCombatForce(a: any): void;
		public setActive(a: any): void;
		public forceEnd(): void;
		public addCombatListener(a: any): void;
		public removeCombatListener(a: any): void;
		public gatherCollaborators(a: any, b: any, c: any, d: any, e: any, f: any): any;
		public getNearbyThreat(a: any, b: any, c: any, d: any): any;
		public getPartyHpFactor(a: any): any;
		public getAssistDamageFactor(): any;
		public getAssistAttackFrequency(): any;
		public notifyCombatantDefeated(a: any, b: any): void;
		public updateCombatCompletionData(): void;
		public getMultiToken(a: any, b: any): any;
		public getActionToken(a: any, b: any): any;
		public getGlobalDmgFactor(a: any): any;
		public initFrequencyTimers(a: any): void;
		public checkFrequency(a: any, b: any): any;
		public submitFrequency(a: any, b: any, c: any): void;
		public _getTimerFrequencyFactor(b: any, c: any, d: any): any;
		public _getTokenFrequencyFactor(b: any, c: any, d: any): any;
		public addFreeLineCommand(a: any, b: any): void;
		public isBlockingFreeLine(a: any): any;
		public showHitEffect(a: any, b: any, c: any, d: any, i: any, k: any, j: any): void;
		public showPerfectDashEffect(a: any): void;
		public showHealEffect(a: any): void;
		public showCharge(a: any, c: any, d: any): any;
		public showThrowEffect(a: any, c: any, d: any): any;
		public showModeChange(a: any, c: any): any;
		public showModeAura(a: any, c: any): void;
		public clearModeAura(a: any): void;
		public showModeDash(a: any, c: any): void;
		public addRespawnBlocker(a: any): void;
		public isRespawnBlocked(a: any): any;
		public notifyNearbyEnemiesOfTarget(a: any, b: any): void;
		public isInCombat(a: any): any;
		public isPlayerPartyInCombat(): any;
		public getEnemyAiExp(a: any, b: any): any;
		public getKillCount(): void;
		public getElementMode(a: any): any;
	}
	export class PvpModel extends ig.GameAddon {
		public observers: any;
		public state: number;
		public round: number;
		public winPoints: number;
		public points: any;
		public enemies: any;
		public lastWinParty: any;
		public blocking: boolean;
		public roundGui: sc.PvpRoundGui;

		public constructor();

		public init(): void;
		public start(b: any, a: any): void;
		public getDmgFactor(): any;
		public isActive(): any;
		public isKillHit(): any;
		public isBrake(): any;
		public isOver(): any;
		public isCombatantInPvP(b: any): any;
		public onPvpCombatantDefeat(b: any): any;
		public releaseBlocking(): void;
		public showKO(b: any): any;
		public onPostKO(b: any): void;
		public startNextRound(b: any): void;
		public finalizeRoundStart(): void;
		public stop(): void;
		public onVarAccess(b: any, a: any): any;
		public onPostUpdate(): void;
		public onReset(): void;
	}
	export class CombatShield extends ig.Class {
		public name: any;
		public baseFactor: number;
		public elementFactors: any;
		public hitResist: any;
		public stableOverride: any;
		public duration: number;
		public effect: ig.EffectHandle;
		public neutralize: boolean;

		public constructor(a: any, b: any);

		public init(a: any, b: any): void;
		public clearCached(): void;
		public isActive(_usedInChild0: any, _usedInChild1: any, _usedInChild2: any, _usedInChild3: any, _usedInChild4: any): any;
		public getDamageFactor(a: any, _usedInChild1: any): any;
		public reduceSpikeDamage(): any;
		public onActivate(a: any): void;
		public onDeactivate(a: any): void;
	}
	export class CombatantShieldConnection extends ig.Class {
		public combatant: any;
		public shield: any;
		public timer: number;
		public perfectGuardTime: number;
		public perfectTimeReset: number;
		public effectHandle: any;

		public constructor(a: any, b: any, e: any);

		public init(a: any, b: any, e: any): void;
		public update(): any;
		public isPerfect(): any;
		public resetPerfectGuardTime(): void;
		public onDetach(a: any): void;
		public onActionEndDetach(): void;
		public onEntityKillDetach(): void;
	}
	export class CombatForce extends ig.Class {
		public combatant: any;
		public combatantRoot: any;

		public constructor(a: any);

		public init(a: any, _usedInChild1: any, _usedInChild2: any, _usedInChild3: any): void;
		public update(): any;
		public isRepeating(): any;
		public onActionEndDetach(): void;
		public getCombatant(): any;
		public getCombatantRoot(): any;
		public onEnd(): void;
	}
	export class CircleHitForce extends sc.CombatForce {
		public attackInfo: sc.AttackInfo;
		public align: any;
		public offset: any;
		public radius: number;
		public dir: any;
		public yScale: number;
		public zHeight: number;
		public centralAngle: number;
		public startAngle: number;
		public duration: number;
		public expandRadius: number;
		public alwaysFull: boolean;
		public clockwise: boolean;
		public flipLeftFace: number;
		public party: number;
		public rectangular: boolean;
		public pos: any;
		public prevAngle: number;
		public timer: number;
		public hitEntities: any;
		public hitEntitiesAngle: any;

		public constructor(a: any, b: any);

		public init(a: any, b: any): void;
		public update(): any;
		public getElement(): any;
		public getHitCenter(a: any, b: any): any;
		public getHitVel(a: any, b: any): any;
		public getHitDir(a: any, b: any): any;
		public getCollideSide(b: any): any;
		public _getPos(): any;
		public isRepeating(): any;
	}
	export class DirectHitForce extends sc.CombatForce {
		public attackInfo: sc.AttackInfo;
		public hitDir: any;
		public align: any;
		public hitCount: number;
		public hitDelay: number;
		public effect: any;
		public victim: any;
		public timer: number;

		public constructor(a: any, b: any, c: any, d: any);

		public init(a: any, b: any, c: any, d: any): void;
		public update(): any;
		public getElement(): any;
		public getHitCenter(a: any, b: any): any;
		public getHitVel(a: any, b: any): any;
		public getHitDir(a: any, b: any): any;
		public getCollideSide(b: any): any;
	}
	export class PushPullForce extends sc.CombatForce {
		public radius: number;
		public fadeRadius: number;
		public zHeight: number;
		public influencedEntities: any;
		public fxHandles: any;
		public timer: number;
		public pullAll: boolean;

		public constructor(a: any, b: any);

		public init(a: any, b: any): void;
		public update(): any;
		public _removeEntity(a: any): void;
		public onEnd(): void;
		public isRepeating(): any;
	}
	export class ProxyGridForce extends sc.CombatForce {
		public constructor(a: any, b: any);

		public init(a: any, b: any): void;
		public update(): any;
	}
	export class SpawnHelper extends ig.Class {
		public align: any;
		public offset: any;
		public centralAngle: number;
		public startAngle: number;
		public angleVary: number;
		public count: number;
		public duration: number;
		public clockwise: boolean;
		public random: boolean;
		public flipLeftFace: number;
		public dir: any;
		public offsetArea: any;
		public circularArea: boolean;
		public callback: any;
		public maxGroundDistance: any;
		public uniformDir: number;
		public delay: number;
		public yScale: number;
		public repeat: boolean;
		public posEntity: boolean;
		public limitRangeOnColl: number;

		public constructor(a: any, b: any, c: any);

		public init(a: any, b: any, c: any): void;
		public initData(a: any): any;
		public spawn(a: any, b: any, k: any, l: any, o: any, m: any): any;
		public _limitRange(a: any, b: any, d: any, e: any, f: any): void;
		public _getPos(a: any, c: any): any;
	}
	export class ProxySpawnerForce extends sc.CombatForce {
		public proxy: any;
		public spawnHelper: sc.SpawnHelper;
		public timer: number;
		public spawnData: any;

		public constructor(a: any, b: any, c: any);

		public init(a: any, b: any, c: any): void;
		public update(): any;
		public spawnProxy(a: any, b: any, c: any, d: any): void;
		public isRepeating(): any;
	}
	export class EnemySpawnerForce extends sc.CombatForce {
		public enemyInfo: any;
		public enemyType: any;
		public spawnHelper: sc.SpawnHelper;
		public timer: number;
		public spawnData: any;

		public constructor(a: any, b: any);

		public init(a: any, b: any): void;
		public update(): any;
		public spawnEnemy(a: any, b: any, c: any, d: any): void;
		public isRepeating(): any;
	}
	export class CombatStun extends ig.Class {
		public run(_usedInChild0: any, _usedInChild1: any): any;
		public preHit(a: any, b: any): void;
		public start(_usedInChild0: any): void;
	}
	export class CombatCharge extends ig.Class {
		public fx: any;
		public darkness: ig.DarknessHandle;
		public soundHandle: any;

		public constructor(a: any, b: any, e: any, f: any);

		public init(a: any, b: any, e: any, f: any): void;
		public charge(d: any, c: any, e: any): void;
		public stop(): void;
		public onActionEndDetach(): void;
		public onEntityKillDetach(): void;
	}
	export class HitNumberEntityBase extends ig.Entity {
		public offset: any;
		public oldNumber: number;
		public number: number;
		public digitCount: number;
		public numberSize: number;
		public numberColor: number;
		public numberAppendix: any;
		public shuffleTime: number;
		public alpha: number;
		public zIndex: number;

		public constructor(a: any, b: any, c: any, d: any);

		public init(a: any, b: any, c: any, d: any): void;
		public initSprites(): void;
		public setNumber(a: any, b: any, c: any, d: any, f: any, g: any): void;
		public updateSprites(): void;
		public _setupSprite(a: any, d: any, f: any): void;
	}
	export class BasicCombatant extends sc.ActorEntity {
		public tackle: any;
		public combo: any;
		public target: any;
		public tmpTarget: any;
		public replaceTargets: any;

		public getTarget(a: any): any;
		public hasBlockEntity(): any;
		public setTackle(a: any, b: any, c: any, d: any): void;
		public getElement(): any;
		public getAttackInfo(): any;
		public collideWith(a: any): void;
		public checkTackle(a: any, c: any, d: any): any;
		public getHitCenter(a: any, b: any): any;
		public getCombatant(): any;
		public getCombatantRoot(): any;
		public getHitVel(c: any, d: any): any;
		public setHitProxy(a: any, b: any, c: any, d: any): void;
		public spawnHitProxy(a: any, b: any, c: any): void;
		public onVarAccess(a: any, b: any): any;
	}
	export class ReplaceTargetHandle extends ig.Class {
		public combatant: any;

		public constructor(a: any, b: any);

		public init(a: any, b: any): void;
		public onActionEndDetach(a: any): void;
	}
	export class CombatantAnimPartEntity extends ig.AnimationPartEntity {
		public isCombatant: boolean;

		public constructor(a: any, b: any, c: any, d: any);

		public init(a: any, b: any, c: any, d: any): void;
		public damage(a: any, b: any): any;
		public collideWith(a: any): void;
		public getCombatant(): any;
		public getCombatantRoot(): any;
		public getHitCenter(a: any, b: any): any;
		public getHitVel(a: any, b: any): any;
	}
	export class FoodIconEntity extends ig.Entity {
		public icon: number;
		public combatant: any;
		public offset: any;
		public state: any;
		public foodSheet: ig.TileSheet;
		public bubbleGfx: ig.Image;
		public timer: number;

		public constructor(a: any, b: any, d: any, g: any);

		public init(a: any, b: any, d: any, g: any): void;
		public initSprites(): void;
		public deferredUpdate(): void;
		public setState(a: any, b: any): void;
		public onActionEndDetach(): void;
		public updateSprites(): void;
	}
	export class DropEntity extends ig.AnimatedEntity {
		public effects: ig.EffectSheet;
		public animSheet: ig.AnimationSheet;
		public timer: number;
		public target: any;
		public dropType: number;
		public effectValue: number;
		public varIncrease: any;
		public circleEffect: any;
		public pickupEffect: any;
		public isGeneric: boolean;

		public constructor(a: any, b: any, e: any, f: any);

		public init(a: any, b: any, e: any, f: any): void;
		public update(): void;
		public doGenericPickUp(a: any): void;
		public doHeal(a: any): void;
		public followTarget(a: any): void;
		public findTarget(): void;
		public onTouchGround(): void;
	}
	export class ItemDropEntity extends ig.AnimatedEntity {
		public gfx: ig.Image;
		public effects: ig.EffectSheet;
		public sounds: any;
		public flying: boolean;
		public target: any;
		public timer: number;
		public startPos: any;
		public startZPos: number;
		public maxTime: number;
		public maxHeight: number;
		public item: number;
		public amount: number;
		public collected: boolean;
		public dropType: any;
		public fromCombatant: boolean;

		public constructor(c: any, d: any, f: any, g: any);

		public init(c: any, d: any, f: any, g: any): void;
		public collectItem(a: any): void;
		public onKill(a: any): void;
		public onSave(): void;
		public update(): void;
		public onTouchGround(): void;
		public startRegularFly(): void;
		public startFlying(a: any, b: any): void;
	}
	export class EnemyType extends ig.JsonLoadable {
		public cacheType: string;
		public aiGroup: any;
		public aiLearnType: any;
		public enduranceScale: any;
		public name: string;
		public params: any;
		public credit: any;
		public exp: number;
		public level: number;
		public maxSp: number;
		public boss: boolean;
		public hpBreaks: any;
		public animSheet: ig.AnimationSheet;
		public attribs: any;
		public proxies: any;
		public actions: any;
		public states: any;
		public reactions: any;
		public trackerDef: any;
		public headIdx: number;
		public healDropRate: number;
		public itemDrops: any;
		public targetDetect: any;

		public getJsonPath(): any;
		public onload(a: any): void;
		public onCacheCleared(): void;
		public initEntity(a: any): void;
		public updateParams(a: any): void;
		public onEntityKill(a: any): void;
		public getAppearAction(a: any): any;
		public update(b: any): void;
		public checkReactions(a: any): void;
		public applyCurrentReaction(a: any): void;
		public updateAction(a: any): void;
		public startChoice(a: any, b: any): void;
		public updateTarget(a: any): void;
		public reselectTarget(a: any, b: any, c: any, d: any): void;
		public assignTarget(a: any, b: any, c: any, d: any, e: any): void;
		public damageUpdate(a: any, b: any): void;
		public onNavigationFailed(a: any, b: any): void;
		public onStunEnd(a: any): void;
		public postActionUpdate(b: any): void;
		public switchState(b: any, c: any): void;
		public isReadyToFight(a: any): any;
		public resolveHpBreak(a: any, b: any, c: any, e: any, f: any): any;
		public resolveDefeat(a: any): void;
		public resolveItemDrops(a: any): void;
	}
	export class CombatConditions extends ig.Class {
		public conditions: any;

		public constructor(a: any);

		public init(a: any): void;
		public _parseCondition(a: any): any;
		public check(a: any, b: any, c: any, d: any): any;
		public onReactionActivate(a: any): void;
		public onPerformed(a: any, b: any): void;
	}
	export class EnemyInfo extends ig.Class {
		public constructor(a: any);

		public init(a: any): void;
		public getSettings(): any;
		public clearCached(): void;
	}
	export class EnemyState extends ig.Class {
		public name: string;
		public entityConfig: ig.ActorConfig;
		public choices: any;
		public seamlessStates: any;
		public appearAction: any;

		public constructor(a: any, b: any, d: any);

		public init(a: any, b: any, d: any): void;
		public selectAction(a: any): any;
	}
	export class StoneInfo extends sc.ProxySpawnerBase {
		public data: any;
		public _wm: ig.Config;

		public constructor(a: any);

		public init(a: any): void;
		public getSize(a: any): any;
		public clearCached(): void;
		public spawn(a: any, b: any, c: any, e: any, f: any): any;
	}
	export class PvpRoundGui extends ig.GuiElementBase {
		public transitions: any;
		public gfx: ig.Image;
		public timer: number;

		public constructor(b: any, a: any);

		public init(b: any, a: any): void;
		public update(): void;
		public updateDrawables(b: any): void;
		public remove(): void;
	}
	export class PvpKoGui extends ig.GuiElementBase {
		public transitions: any;
		public gfx: ig.Image;
		public timer: number;

		public constructor();

		public init(): void;
		public update(): void;
		public remove(): void;
		public updateDrawables(b: any): void;
	}
	export class CombatStatusBase extends ig.Class {
		public id: number;
		public statusBarEntry: string;
		public offenseModifier: string;
		public defenseModifier: string;
		public effects: ig.EffectSheet;
		public duration: number;
		public charge: number;
		public active: boolean;
		public effectiveness: number;
		public fxHandle: any;

		public constructor();

		public init(): void;
		public getInflictValue(b: any, a: any, d: any, c: any): any;
		public inflict(b: any, a: any, d: any): void;
		public _getOffensiveFactor(b: any): any;
		public activate(b: any, a: any, d: any): void;
		public initEntity(b: any): void;
		public getEffectiveness(b: any): any;
		public clear(b: any): void;
		public update(b: any, a: any, d: any): void;
		public getLabel(): any;
		public onUpdate(b: any, a: any): void;
		public onInitEntity(b: any): void;
		public onClear(b: any): void;
		public onActivate(b: any): void;
	}
	export class BurnStatus extends sc.CombatStatusBase {
		public id: number;
		public label: string;
		public statusBarEntry: string;
		public offenseModifier: string;
		public defenseModifier: string;
		public duration: number;
		public burnTimer: number;

		public onUpdate(b: any, a: any): void;
	}
	export class ChillStatus extends sc.CombatStatusBase {
		public id: number;
		public label: string;
		public statusBarEntry: string;
		public offenseModifier: string;
		public defenseModifier: string;
		public duration: number;
		public influence: ig.InfluenceEntry;

		public constructor();

		public init(): void;
		public onInitEntity(b: any): void;
		public onUpdate(b: any, a: any): void;
		public onClear(b: any): void;
	}
	export class JoltStatus extends sc.CombatStatusBase {
		public id: number;
		public label: string;
		public statusBarEntry: string;
		public offenseModifier: string;
		public defenseModifier: string;
		public duration: number;
		public shockTimer: number;

		public onActivate(b: any): void;
		public onUpdate(b: any, a: any): void;
	}
	export class MarkStatus extends sc.CombatStatusBase {
		public id: number;
		public label: string;
		public statusBarEntry: string;
		public offenseModifier: string;
		public defenseModifier: string;
		public duration: number;

		public getValue(b: any): any;
	}
	export class EnemyCollab extends ig.Class {
		public initiator: any;
		public participants: any;
		public vars: any;
		public breakType: number;
		public success: boolean;
		public attached: any;

		public constructor(a: any, b: any);

		public init(a: any, b: any): void;
		public getVar(a: any): any;
		public setVar(a: any, b: any): void;
		public onVarAccess(a: any, b: any): any;
		public addCollabAttached(a: any): void;
		public removeCollabAttached(a: any): any;
		public setParticipantsEntity(a: any, b: any): void;
		public setParticipantsPoint(a: any, b: any): void;
		public getLabeledParticipant(a: any): any;
		public getLabeledParticipants(a: any): any;
		public start(): void;
		public doReaction(a: any, b: any): void;
		public getCenterPos(a: any, d: any, c: any): any;
		public addParticipant(a: any, b: any, c: any): any;
		public removeParticipant(a: any): void;
		public onActionEndDetach(a: any): void;
		public cancel(): void;
	}
	export class EnemyTracker extends ig.Class {
		public onConditionEval(_usedInChild0: any, _usedInChild1: any, _usedInChild2: any, _usedInChild3: any): any;
		public onPerformed(_usedInChild0: any, _usedInChild1: any): void;
		public reset(_usedInChild0: any, _usedInChild1: any): void;
		public update(): void;
		public onStateChange(b: any): void;
		public onReactionActivate(b: any): void;
	}
	export class EnemyBooster extends ig.GameAddon {
		public boosted: boolean;

		public constructor();

		public init(): void;
		public onLevelLoaded(): void;
		public modelChanged(b: any, a: any): void;
		public updateBoosterState(): void;
		public updateEnemyBoostState(b: any): void;
	}
	export class CombatProxyEntity extends sc.BasicCombatant {
		public hp: number;
		public maxHp: number;
		public breakType: any;
		public combatant: any;
		public sourceEntity: any;
		public externalEntity: any;
		public party: number;
		public collaboration: any;
		public target: any;
		public params: any;
		public group: any;
		public tackle: any;
		public effects: any;
		public stickToSource: number;
		public wasHit: boolean;
		public isThreat: boolean;
		public destroyType: number;

		public constructor(a: any, b: any, d: any, g: any);

		public init(a: any, b: any, d: any, g: any): void;
		public getCombatantRoot(): any;
		public getSourceEntity(): any;
		public connectExternal(a: any): void;
		public update(): void;
		public onActionEndDetach(): void;
		public onEntityKillDetach(): void;
		public onCollabEndDetach(): void;
		public postActionUpdate(): void;
		public detach(): void;
		public onEffectEvent(a: any): void;
		public destroy(b: any): void;
		public ballHit(a: any): any;
		public setMaxHp(a: any): void;
		public reduceHp(b: any): void;
		public onVarAccess(b: any, d: any): any;
	}
	export class GameCode extends ig.GameAddon {
		public enabled: any;
		public keys: any;
		public levelLoadedOrder: number;

		public constructor();

		public init(): void;
		public enterCode(b: any, a: any): any;
		public isEnabled(b: any): any;
		public onVarAccess(b: any, a: any): any;
		public onLevelLoaded(): void;
	}
	export class InteractOverlayIcon extends ig.GuiElementBase {
		public gfx: ig.Image;
		public interactGui: any;

		public constructor(a: any);

		public init(a: any): void;
		public updateDrawables(a: any): void;
	}
	export class MapInteract extends ig.GameAddon {
		public entries: any;
		public focusEntry: any;
		public interacting: boolean;
		public hidden: boolean;
		public preUpdateOrder: number;

		public constructor();

		public init(): void;
		public addEntry(a: any): void;
		public removeEntry(a: any): void;
		public onPreUpdate(): void;
		public updateHideStatus(): void;
		public forceHide(): void;
		public forceShow(): void;
	}
	export class MapInteractIcon extends ig.Class {
		public tiles: any;
		public noAwayIcon: boolean;
		public anims: any;
		public frameTime: number;

		public constructor(a: any, b: any, c: any);

		public init(a: any, b: any, c: any): void;
		public hasAnim(a: any): any;
		public getMaxTimer(a: any): any;
		public updateDrawables(a: any, b: any, c: any): void;
	}
	export class MapInteractEntry extends ig.Class {
		public entity: any;
		public handler: any;
		public offset: any;
		public state: any;
		public icon: any;
		public interrupting: boolean;
		public zCondition: any;
		public gui: ig.GUI.Interact;
		public blockedDuringCombat: boolean;

		public constructor(a: any, b: any, c: any, d: any, e: any);

		public init(a: any, b: any, c: any, d: any, e: any): void;
		public setOffset(a: any, b: any): void;
		public setIcon(a: any): void;
		public setSubGui(a: any): void;
		public setState(a: any): void;
	}
	export class ElevatorModel extends ig.GameAddon {
		public sound: any;
		public soundHandle: any;

		public constructor();

		public init(): void;
		public startMoveSound(a: any): void;
		public endMoveSound(a: any): void;
		public onStoragePreLoad(): void;
	}
	export class ElevatorSwitchEntity extends ig.AnimatedEntity {
		public groundEntity: any;
		public interactEntry: sc.MapInteractEntry;
		public moving: boolean;
		public active: boolean;
		public interactIcons: any;
		public showFx: ig.EffectHandle;

		public constructor(a: any, b: any, c: any, e: any);

		public init(a: any, b: any, c: any, e: any): void;
		public setActive(a: any, b: any): void;
		public setMoving(a: any): void;
		public _updateState(): void;
		public onInteraction(): void;
		public onKill(a: any): void;
	}
	export class IconHoverTextGui extends ig.BoxGui {
		public transitions: any;
		public ninepatch: ig.NinePatch;
		public showOnNear: boolean;

		public constructor(b: any, a: any, d: any, c: any);

		public init(b: any, a: any, d: any, c: any): void;
		public setIconState(b: any): void;
		public isActive(b: any): any;
		public remove(): void;
	}
	export class PropInteract extends ig.Class {
		public prop: any;
		public icon: any;
		public interactEntry: sc.MapInteractEntry;
		public permaEffect: ig.EffectHandle;
		public event: ig.Event;
		public combatOkay: boolean;
		public cutsceneType: any;

		public constructor(b: any, a: any);

		public init(b: any, a: any): void;
		public onShow(): any;
		public onPermaUpdate(): void;
		public onHide(): void;
		public onKill(): void;
		public onInteraction(): any;
	}
	export class RhombusMapMenu extends ig.GuiElementBase {
		public transitions: any;
		public callback: any;
		public buttonInteract: ig.ButtonInteractEntry;
		public buttonGroup: sc.MouseButtonGroup;
		public locations: any;
		public currentFocus: any;
		public _cursorMoved: boolean;
		public _gamepadActive: boolean;
		public _lastDevice: number;
		public _cursorPos: any;
		public _worldCursor: any;
		public info: sc.InfoBar;
		public help: sc.InfoBar;
		public container: ig.GuiElementBase;
		public infoBox: sc.RhombusMenuInfo;

		public constructor(a: any);

		public init(a: any): void;
		public update(): void;
		public createLocationUIs(): void;
		public createLocationUI(a: any): any;
		public onButtonPress(a: any): void;
		public focusLocation(a: any, b: any, c: any): void;
		public unfocus(a: any): void;
		public _initCursor(a: any): void;
		public _limitCursorPos(): void;
	}
	export class RhombusMenuInfo extends ig.BoxGui {
		public transitions: any;
		public ninepatch: ig.NinePatch;
		public gfx: ig.Image;
		public title: sc.TextGui;
		public arrow: sc.RhombusMenuArrow;
		public icon: ig.ImageGui;

		public constructor();

		public init(): void;
		public updateDrawables(a: any): void;
		public show(a: any): void;
		public hide(a: any): void;
		public setData(a: any): void;
		public alignToBase(a: any): void;
	}
	export class RhombusMenuArrow extends ig.GuiElementBase {
		public gfx: ig.Image;
		public transitions: any;
		public flipX: boolean;
		public flipY: boolean;
		public bottomAnchor: boolean;

		public constructor();

		public init(): void;
		public setPosition(a: any, b: any, c: any, d: any, i: any): void;
		public updateDrawables(a: any): void;
	}
	export class RhombusMenuLocation extends ig.FocusGui {
		public transitions: any;
		public gfx: ig.Image;
		public entity: any;
		public callback: any;
		public icon: number;
		public origin: boolean;
		public focusTimer: number;
		public focusFrame: number;

		public constructor(a: any, b: any);

		public init(a: any, b: any): void;
		public onButtonPress(): any;
		public update(): void;
		public updateDrawables(b: any): void;
		public isMouseOver(): any;
		public unfocus(): void;
		public getDistanceToCursor(): any;
	}
	export class MsgBoxGui extends ig.GuiElementBase {
		public transitions: any;
		public text: sc.TextGui;
		public box: sc.ArrowBoxGui;
		public personEntry: any;

		public constructor(b: any, a: any, d: any, c: any, e: any, f: any);

		public init(b: any, a: any, d: any, c: any, e: any, f: any): void;
		public setPointerDown(): void;
		public setOnFinish(b: any): void;
		public isFinished(): any;
		public skip(): void;
	}
	export class ChoiceBoxGui extends ig.GuiElementBase {
		public gfx: ig.Image;
		public transitions: any;
		public choices: any;
		public buttons: any;
		public buttonInteract: ig.ButtonInteractEntry;
		public buttonGroup: sc.ButtonGroup;
		public bgBox: sc.BlackGrayBox;
		public pointerOffsetX: number;
		public delayTimer: number;
		public columns: number;

		public constructor(b: any, a: any, d: any, c: any, e: any);

		public init(b: any, a: any, d: any, c: any, e: any): void;
		public update(): void;
		public updateDrawables(b: any): void;
		public remove(): void;
	}
	export class DreamMsgGui extends ig.GuiElementBase {
		public transitions: any;
		public time: number;

		public constructor(a: any, b: any, c: any, e: any, f: any, g: any, h: any, i: any);

		public init(a: any, b: any, c: any, e: any, f: any, g: any, h: any, i: any): void;
		public onActionEndDetach(): void;
		public setBoxOffset(a: any, b: any): void;
		public _onTextFinish(): void;
		public onInteraction(): void;
		public _close(): void;
		public update(): void;
		public updateDrawables(a: any): void;
		public _updatePos(): void;
	}
	export class PrivateMessageBGGui extends ig.GuiElementBase {
		public gfx: ig.Image;
		public boxNinePatch: ig.NinePatch;
		public sound: any;
		public bgPatterns: ig.ImagePatternSheet;
		public transitions: any;
		public bgState: number;
		public bgTimer: number;
		public bgSilent: boolean;
		public text: sc.TextGui;

		public constructor();

		public init(): void;
		public setBgState(a: any, b: any): void;
		public isReady(): any;
		public update(): void;
		public updateDrawables(a: any): void;
		public modelChanged(a: any, b: any, c: any): void;
	}
	export class MsgBoardContentGui extends ig.GuiElementBase {
		public transitions: any;
		public text: sc.TextGui;

		public constructor();

		public init(): void;
		public setContent(a: any, c: any, e: any, f: any): void;
		public isFinished(): any;
		public skip(): void;
	}
	export class MsgBoardGui extends ig.GuiElementBase {
		public transitions: any;
		public box: sc.ArrowBoxGui;
		public content: sc.MsgBoardContentGui;
		public side: any;
		public sizeTransition: any;

		public constructor();

		public init(): void;
		public setSide(a: any): void;
		public hasSide(): any;
		public setContent(a: any, c: any, e: any, f: any, g: any): void;
		public skip(): void;
		public setSize(a: any, b: any): void;
		public update(): void;
		public hide(a: any): void;
	}
	export class ScreenInteractEntry extends ig.InteractEntry {
		public callbackObject: any;
		public withEscape: boolean;
		public autoCtrlIgnore: boolean;

		public constructor(b: any, a: any);

		public init(b: any, a: any): void;
		public update(): void;
	}
	export class SkipInteract extends ig.GameAddon {
		public entries: any;

		public constructor();

		public init(): void;
		public addEntry(a: any): void;
		public removeEntry(a: any): void;
		public getActiveEntry(): any;
		public triggerSkip(): void;
	}
	export class SkipInteractEntry extends ig.Class {
		public handler: any;
		public order: number;

		public constructor(a: any, b: any);

		public init(a: any, b: any): void;
		public isActive(): any;
	}
	export class TradeMenu extends ig.GuiElementBase {
		public gfx: ig.Image;
		public transitions: any;
		public info: sc.InfoBar;
		public buffInfo: sc.BuffInfo;
		public topbar: ig.ColorGui;
		public back: any;
		public help: any;
		public toggleEquip: any;
		public helpGui: sc.HelpScreen;
		public tradeDialog: sc.TradeDialogMenu;
		public tradeOffer: sc.TradeOfferDisplay;
		public tradeStats: sc.TradeToggleStats;
		public tradeContent: any;
		public money: ig.GuiElementBase;
		public moneyValue: sc.NumberGui;

		public constructor(b: any);

		public init(b: any): any;
		public enterTrade(): void;
		public _onHelpButtonCheck(): any;
		public _onHelpButtonPressed(): void;
		public _onBackButtonCheck(): any;
		public _onToggleButtonCheck(): any;
		public _createHelpGui(): void;
		public _exitMenu(): void;
		public modelChanged(b: any, a: any, d: any): void;
	}
	export class NpcState extends ig.Class {
		public _wm: ig.Config;
		public condition: ig.VarCondition;
		public position: any;
		public config: any;
		public face: any;
		public hidden: boolean;
		public door: any;
		public startAction: ig.Action;
		public loopAction: ig.Action;
		public reactType: any;
		public npcEventObj: ig.Event;
		public npcEventType: any;
		public showFx: ig.EffectHandle;
		public permaFx: ig.EffectHandle;

		public constructor(a: any, b: any);

		public init(a: any, b: any): void;
		public clearCached(): void;
	}
	export class NPCRunnerEntity extends sc.ActorEntity {
		public npcEffects: ig.EffectSheet;
		public characterName: any;
		public character: any;
		public configs: any;
		public pushTimer: number;
		public effects: any;

		public constructor(a: any, c: any, d: any, h: any);

		public init(a: any, c: any, d: any, h: any): void;
		public initAction(a: any, b: any, c: any, d: any): void;
		public getDestinationEntryAndPos(b: any, c: any, d: any, h: any): any;
		public update(): void;
		public onKill(a: any): void;
	}
	export class NpcRunnerSpawner extends ig.GameAddon {
		public mapGroup: any;
		public currentGroup: any;
		public groupData: any;
		public lastChars: any;
		public active: boolean;
		public destinations: any;
		public timer: number;
		public spawnTeamCount: number;
		public currentPartySize: number;
		public spawnEntrance: any;
		public waypoints: any;
		public spawnExit: any;
		public spawnSpeed: number;
		public preUpdateOrder: number;
		public levelLoadStartOrder: number;
		public levelLoadedOrder: number;

		public constructor();

		public init(): void;
		public cancelSpawning(): void;
		public setGroup(a: any): void;
		public onLoadableComplete(a: any, b: any): void;
		public hasGroup(): any;
		public resetToMapGroup(): void;
		public clearGroup(): void;
		public initWayPoints(): void;
		public searchDestinations(): void;
		public spawnNpcGroup(): void;
		public spawnNpcRunner(): void;
		public getRandomDestination(a: any, b: any): any;
		public getWayPoints(a: any, b: any): any;
		public getRandomCharacter(): any;
		public onPreUpdate(): void;
		public onLevelLoadStart(a: any): void;
		public onLevelLoaded(): void;
		public onReset(): void;
	}
	export class PlayerCrossHairController extends ig.Class {
		public gamepadMode: boolean;

		public isAiming(): any;
		public getAimingDistance(a: any, b: any): any;
		public onActiveChange(a: any): void;
		public updatePos(a: any): void;
	}
	export class EventCrossHairController extends ig.Class {
		public targetPos: any;
		public gamepadMode: boolean;

		public isAiming(): any;
		public getAimingDistance(): any;
		public onActiveChange(): void;
		public updatePos(a: any): void;
	}
	export class PlayerLevelNotifier extends ig.Class {
		public levelUpSound: ig.Sound;

		public constructor();

		public init(): void;
		public runLevelUpScene(b: any, a: any, d: any): void;
		public onLevelUpEventStart(): void;
		public onLevelUpEventEnd(): void;
		public getLevelUpEvent(b: any, a: any): any;
	}
	export class ItemConsumption extends ig.Class {
		public sounds: any;

		public constructor();

		public init(): void;
		public runItemUseAction(b: any, a: any, d: any): void;
		public activateItemEffect(b: any, a: any, d: any): void;
		public runHealChange(b: any): void;
		public runStatChange(b: any, a: any, d: any): void;
		public getAction(b: any): any;
		public createAction(b: any): any;
	}
	export class PlayerBaseEntity extends ig.ENTITY.Combatant {
		public party: number;
		public material: any;
		public configs: any;
		public maxJumpHeight: any;
		public guard: any;
		public stunEscapeReady: boolean;
		public playerTrack: any;

		public constructor(b: any, a: any, d: any, c: any);

		public init(b: any, a: any, d: any, c: any): void;
		public doPlayerAction(b: any): void;
		public startGuardEffect(): void;
		public endGuardEffect(): void;
		public damageShield(b: any): any;
		public regenShield(b: any): void;
		public update(): void;
		public _addTargetedBy(b: any): void;
		public _removeTargetedBy(b: any): void;
		public updateCombatMode(): void;
	}
	export class PlayerPetEntity extends sc.ActorEntity {
		public npcEffects: ig.EffectSheet;
		public petSkin: any;
		public configs: any;
		public pushTimer: number;
		public posOffset: any;
		public state: number;
		public respawnPos: any;
		public idleTimer: number;
		public idleSpecials: number;
		public effects: any;

		public constructor(a: any, d: any, f: any, g: any);

		public init(a: any, d: any, f: any, g: any): void;
		public show(a: any): void;
		public resetIdleTimer(a: any): void;
		public update(): void;
		public resetStartPos(): void;
		public resetPos(a: any, b: any): void;
		public onNavigationFailed(a: any): void;
		public remove(): void;
	}
	export class PartyModel extends ig.GameAddon {
		public observers: any;
		public models: any;
		public currentParty: any;
		public partyEntities: any;
		public contacts: any;
		public dungeonBlocked: boolean;
		public lastAreaDungeon: boolean;
		public _deferredEntityUpdate: boolean;
		public keepDistance: boolean;
		public strategyKeys: any;
		public ai: any;
		public postUpdateOrder: number;

		public constructor();

		public init(): void;
		public getStrategy(a: any): any;
		public updatePartyStrategy(a: any, b: any): void;
		public getStrategyKey(a: any, b: any): any;
		public setContactType(a: any, b: any): void;
		public setOnlineStatus(a: any, b: any): void;
		public setLocked(a: any, b: any): void;
		public addPartyOption(a: any): void;
		public initParty(a: any): void;
		public addPartyMember(a: any, b: any, c: any, d: any, i: any): void;
		public removePartyMember(a: any, b: any, c: any): void;
		public reviveAllPartyMembers(): void;
		public reviveAllPartyMemberModels(): void;
		public revivePartyMemberEntity(a: any): void;
		public modelChanged(a: any, b: any): void;
		public onMemberDefeat(a: any): void;
		public keepMapDungeon(): void;
		public onMapEnter(): void;
		public respawnMembers(): void;
		public isDungeonBlocked(): any;
		public isPartyMember(a: any): any;
		public isFriend(a: any): any;
		public isPartyMemberLocked(a: any): any;
		public isPartyMemberOnline(a: any): any;
		public isDefeated(): any;
		public getCurrentPartyIndex(a: any): any;
		public getPartySize(): any;
		public getPartySizeAlive(a: any): any;
		public getDmgFactor(): any;
		public getPartyMemberModel(a: any): any;
		public getPartyMemberEntity(a: any): any;
		public getPartyMemberEntityByIndex(a: any): any;
		public getPartyMemberIndex(a: any): any;
		public getPartyMemberModelByIndex(a: any): any;
		public addExperience(b: any, c: any, d: any, h: any, i: any): any;
		public updateEquipment(): void;
		public resetMemberPos(a: any): void;
		public resetAi(): void;
		public _getMemberPos(a: any, c: any, d: any): any;
		public doDeferredEntityUpdate(): void;
		public _spawnPartyMemberEntity(a: any, c: any, d: any, h: any): void;
		public _updateEntitiesOffset(): void;
		public _removePartyMemberEntity(a: any, c: any, d: any): void;
		public onVarAccess(a: any, b: any): any;
		public onPostUpdate(): void;
		public onReset(): void;
		public onStorageSave(a: any): void;
		public onStoragePreLoad(a: any): void;
	}
	export class PlayerCameraFocusHandle extends ig.Class {
		public add: boolean;
		public speed: any;

		public constructor(a: any, b: any);

		public init(a: any, b: any): void;
		public onActionEndDetach(a: any): void;
	}
	export class PlayerSkinBase extends ig.Class {
		public skinType: any;
		public name: any;

		public constructor(a: any, b: any, c: any);

		public init(a: any, b: any, c: any): void;
		public onLoadableComplete(): void;
		public constructSkin(a: any): void;
	}
	export class PlayerSkinLibrary extends ig.GameAddon {
		public observers: any;
		public skins: any;
		public itemToSkin: any;
		public currentSkins: any;
		public levelLoadedOrder: number;

		public constructor();

		public init(): void;
		public onExtensionLoaded(a: any): void;
		public registerSkin(a: any, b: any): void;
		public updateSkins(): void;
		public updateSkinSet(a: any): void;
		public getCurrentSkin(a: any): any;
		public _createSkin(a: any): any;
		public _notifyLoaded(a: any): void;
		public checkItems(): void;
		public checkItemSet(a: any): void;
		public modelChanged(a: any, b: any): void;
		public onLevelLoaded(): void;
	}
	export class PushPullable extends ig.Class {
		public entity: any;
		public active: boolean;
		public gripDir: any;
		public deferredRelease: boolean;
		public interactEntry: sc.MapInteractEntry;
		public interactIcons: any;
		public coordDelta: any;
		public targetPos: any;
		public dragState: number;
		public dragSpeed: number;
		public speedTimer: number;
		public dustTimer: number;
		public rumbleHandle: ig.Rumble.RumbleHandle;
		public gripCancelTimer: number;
		public soundHandle: any;
		public navBlocker: any;

		public constructor(a: any);

		public init(a: any): void;
		public setActive(a: any): void;
		public isActive(): any;
		public onInteraction(): void;
		public onInteractionEnd(): void;
		public isInteractionBlocked(): any;
		public resetPos(a: any, b: any): void;
		public onUpdate(): any;
		public onKill(): void;
		public onDeferredUpdate(): void;
		public updateStateFromIdle(): void;
		public stopSound(): void;
		public cancelGrip(): void;
		public onInteractObjectDrop(): void;
		public getGripPosAndFace(a: any): any;
		public getMovePlayerToPushableInteractibleEntityBoxThingeeAndSetGripDir(): any;
		public moveBox(a: any, b: any): void;
	}
	export class BombEntity extends ig.AnimatedEntity {
		public panel: any;
		public timer: number;
		public combatant: any;
		public heatMode: boolean;
		public effects: any;
		public cameraHandle: ig.Camera.TargetHandle;
		public noHeatFocus: boolean;

		public constructor(a: any, b: any, c: any, e: any);

		public init(a: any, b: any, c: any, e: any): void;
		public destroy(): void;
		public onEffectEvent(a: any): void;
		public start(a: any, b: any, c: any, e: any): void;
		public setLastSecond(): void;
		public explode(): void;
		public enterHeatMode(a: any, b: any): void;
		public update(): void;
		public ballHit(a: any): any;
		public onTouchGround(a: any): void;
		public isBallAdjust(): any;
		public doBallAdjust(a: any, b: any, c: any): any;
		public isBallDestroyer(a: any, b: any, c: any): any;
	}
	export class WaterBubbleEntity extends ig.AnimatedEntity {
		public panel: any;
		public state: number;
		public timer: number;
		public startZ: number;
		public combatant: any;
		public heatMode: boolean;
		public effects: any;
		public cameraHandle: any;
		public noHeatFocus: boolean;
		public target: any;

		public constructor(a: any, b: any, c: any, e: any);

		public init(a: any, b: any, c: any, e: any): void;
		public isIdle(): any;
		public followTarget(a: any, b: any): void;
		public bounce(a: any, b: any): void;
		public setLastSecond(): void;
		public instantKill(): void;
		public burst(): void;
		public onEffectEvent(a: any): void;
		public steam(a: any, b: any): void;
		public circularSteam(a: any): void;
		public turnIce(): void;
		public update(): void;
		public ballHit(a: any): any;
		public isBallAdjust(): any;
		public doBallAdjust(a: any, b: any, c: any): any;
		public isBallDestroyer(): any;
	}
	export class CompressedBaseEntity extends ig.AnimatedEntity {
		public element: any;
		public startPos: any;
		public nudgeDir: any;
		public nudgeTimer: number;
		public killTimer: number;
		public collisionList: any;
		public collReleaseTimer: number;
		public collReleaseTimeList: any;
		public globalCount: number;
		public speedFactor: number;
		public effects: any;

		public constructor(a: any, b: any, c: any, d: any);

		public init(a: any, b: any, c: any, d: any): void;
		public _getAssistFactor(): any;
		public onKill(a: any): void;
		public nudge(a: any): void;
		public shoot(a: any, b: any, c: any): void;
		public destroy(): void;
		public update(): void;
		public collideWith(a: any, _usedInChild1: any): void;
		public onCollision(): any;
		public getHitCenter(a: any, b: any): any;
		public getHitVel(a: any, b: any): any;
		public getElement(): any;
		public getCombatant(): any;
		public getCombatantRoot(): any;
		public getAttackInfo(): any;
		public ballHit(a: any): any;
	}
	export class CompressedWaveEntity extends sc.CompressedBaseEntity {
		public _wm: ig.Config;
		public phaseMode: boolean;
		public phaseTraveled: number;
		public phaseModeSmaller: boolean;
		public wallKillTimer: number;
		public enterWall: any;

		public constructor(a: any, b: any, c: any, d: any);

		public init(a: any, b: any, c: any, d: any): void;
		public update(): void;
		public onBallHit(a: any): void;
		public collideWith(c: any, e: any): void;
		public isAlignCenter(a: any): any;
		public handleMovementTrace(a: any): void;
	}
	export class CompressedShockEntity extends sc.CompressedBaseEntity {
		public _wm: ig.Config;
		public slidingWall: any;
		public blockCheck: number;
		public turnSoundTimer: number;
		public wallBounces: number;

		public constructor(a: any, b: any, c: any, d: any);

		public init(a: any, b: any, c: any, d: any): void;
		public update(): void;
		public handleMovementTrace(a: any): void;
		public clearWallSliding(): void;
		public shootFromWall(a: any, c: any): void;
	}
	export class IceDiskEntity extends ig.AnimatedEntity {
		public timer: number;
		public combatant: any;
		public state: number;
		public effects: any;
		public cameraHandle: any;

		public constructor(a: any, b: any, e: any, f: any);

		public init(a: any, b: any, e: any, f: any): void;
		public slide(a: any, b: any): void;
		public consume(a: any): void;
		public onKill(a: any): void;
		public startMelt(): void;
		public onEffectEvent(a: any): void;
		public handleMovementTrace(a: any): any;
		public iceBreak(): void;
		public turnCooledCoals(): void;
		public update(): void;
		public ballHit(a: any): any;
		public onTouchGround(b: any): void;
		public collideWith(a: any): void;
		public isBallAdjust(): any;
		public doBallAdjust(a: any, b: any, e: any): any;
		public isBallDestroyer(a: any, b: any, e: any): any;
		public getHitCenter(a: any, b: any): any;
		public getHitVel(a: any, b: any): any;
		public getElement(): any;
		public getCombatant(): any;
		public getCombatantRoot(): any;
		public getAttackInfo(): any;
	}
	export class CooledCoals extends ig.AnimatedEntity {
		public timer: number;
		public effects: any;

		public constructor(a: any, b: any, e: any, f: any);

		public init(a: any, b: any, e: any, f: any): void;
		public onKill(a: any): void;
		public startMelt(): void;
		public onEffectEvent(a: any): void;
		public update(): void;
	}
	export class BallChangerType extends ig.Class {
		public icon: number;
		public sphereColor: number;
		public flipX: boolean;
		public flipY: boolean;
		public centerBall: boolean;
		public waitForBallKill: boolean;

		public onBallTouch(_usedInChild0: any, _usedInChild1: any): void;
	}
	export class ElementShieldBallEntity extends ig.AnimatedEntity {
		public _wm: ig.Config;
		public effects: any;
		public sounds: any;
		public panel: any;
		public state: number;
		public charge: any;
		public dischargeTimer: number;

		public constructor(a: any, b: any, c: any, d: any);

		public init(a: any, b: any, c: any, d: any): void;
		public show(b: any): void;
		public onEffectEvent(a: any): void;
		public onActionEndDetach(): void;
		public update(): void;
		public updateSprites(): void;
		public _getVisibleCharge(): any;
		public bounce(a: any, b: any, c: any): void;
		public ballHit(b: any): any;
		public isBallDestroyer(): any;
		public isIdle(): any;
		public isCharged(): any;
		public isDestroyed(): any;
		public clearHitHandle(): void;
		public destroy(): void;
	}
	export class ElementShieldEntity extends ig.AnimatedEntity {
		public effects: any;
		public target: any;
		public timer: number;
		public endWarning: boolean;

		public constructor(c: any, d: any, g: any, h: any);

		public init(c: any, d: any, g: any, h: any): void;
		public onEntityKillDetach(): void;
		public _updatePos(): void;
		public deferredUpdate(): void;
		public destroy(): void;
		public onEffectEvent(a: any): void;
		public updateSprites(): void;
	}
	export class BounceSwitchGroups extends ig.GameAddon {
		public groups: any;
		public effects: ig.EffectSheet;

		public constructor();

		public init(): void;
		public registerSwitch(b: any, a: any): void;
		public registerBlock(b: any): void;
		public evaluateGroup(b: any): void;
		public resetGroup(b: any): void;
		public resolveGroup(b: any): void;
		public setCameraBall(b: any, a: any): void;
		public setCameraPos(b: any, a: any): void;
		public resetCamera(b: any): void;
		public isGroupBallConflict(b: any, a: any): any;
		public isGroupResolved(b: any): any;
		public getEndSwitch(b: any): any;
		public getHitCount(b: any): any;
		public onBlockHit(b: any, a: any): any;
		public onSwitchHit(b: any, a: any): any;
		public onDeferredUpdate(): void;
		public onReset(): void;
		public onLevelLoadStart(): void;
		public getGroup(b: any): any;
	}
	export class SteamGlowEntity extends ig.Entity {
		public lightHandle: ig.LightHandle;

		public constructor(a: any, b: any, c: any, d: any);

		public init(a: any, b: any, c: any, d: any): void;
		public stop(a: any, b: any): void;
	}
	export class QuickItemArrow extends ig.GuiElementBase {
		public gfx: ig.Image;
		public transitions: any;
		public flipX: boolean;
		public flipY: boolean;
		public bottomAnchor: boolean;

		public constructor();

		public init(): void;
		public setPosition(a: any, b: any, c: any, e: any, f: any): void;
		public updateDrawables(a: any): void;
	}
	export class QuickItemMenu extends ig.BoxGui {
		public gfx: ig.Image;
		public ninepatch: ig.NinePatch;
		public transitions: any;
		public base: any;
		public anchor: any;
		public list: sc.ButtonListBox;
		public arrow: sc.QuickItemArrow;
		public buttongroup: sc.ButtonGroup;
		public _hidden: boolean;

		public constructor(a: any, b: any);

		public init(a: any, b: any): void;
		public update(): void;
		public updateDrawables(a: any): void;
		public updateList(a: any): void;
		public show(): void;
		public hide(): void;
		public addFavoriteOverlay(a: any): void;
		public onSelection(a: any): void;
		public onPress(a: any): void;
		public modelChanged(a: any, b: any): void;
	}
	export class QuickMenuBuffsGui extends ig.BoxGui {
		public ninepatch: ig.NinePatch;
		public transitions: any;

		public constructor();

		public init(): void;
		public show(a: any, b: any): void;
		public hide(a: any): void;
	}
	export class QuickBuffEntry extends ig.GuiElementBase {
		public icon: sc.TextGui;
		public description: any;

		public constructor(a: any);

		public init(a: any): void;
		public getStatName(a: any, b: any, d: any): any;
		public getStatValue(a: any, b: any, d: any): any;
	}
	export class QuickLocationBox extends ig.BoxGui {
		public ninepatch: ig.NinePatch;
		public transitions: any;
		public location: sc.TextGui;
		public hasTemp: boolean;

		public constructor();

		public init(): void;
		public updateDrawables(a: any): void;
		public show(a: any): void;
		public hide(a: any): void;
		public forceHide(): void;
		public onCutsceneStart(): void;
		public updateLocationName(): void;
	}
	export class QuickFocusScreen extends ig.GuiElementBase {
		public boxes: any;
		public subGuis: any;
		public prevType: any;

		public constructor();

		public init(): void;
		public registerType(a: any): void;
		public addSubGui(a: any): void;
		public show(a: any, b: any, d: any): void;
		public hide(a: any): void;
		public resetSubGuis(): void;
		public reset(): void;
	}
	export class QuickArrowBox extends ig.GuiElementBase {
		public ninepatch: ig.NinePatch;
		public name: sc.TextGui;
		public arrowOff: any;

		public constructor(a: any, b: any, d: any);

		public init(a: any, b: any, d: any): void;
		public updateDrawables(a: any): void;
		public setPosition(a: any, d: any): void;
		public getCenter(a: any): any;
	}
	export class QuickBorderArrowLevelBox extends ig.GuiElementBase {
		public ninepatch: ig.NinePatch;
		public levelNumber: sc.NumberGui;
		public displayColor: number;
		public sizeTransition: any;
		public nameVisible: boolean;

		public constructor(a: any, b: any);

		public init(a: any, b: any): void;
		public update(): void;
		public updateDrawables(a: any): void;
		public doSizeTransition(a: any, b: any, d: any, g: any, h: any): void;
		public getLevelColor(a: any): any;
	}
	export class QuickMenuTypesBase extends ig.FocusGui {
		public gfx: ig.Image;
		public transitions: any;
		public type: any;
		public entity: any;
		public screen: any;
		public focusable: boolean;
		public showType: any;
		public color: any;
		public typeIcon: ig.ImageGui;
		public _fadeTimer: number;

		public constructor(a: any, b: any, c: any);

		public init(a: any, b: any, c: any): void;
		public update(): void;
		public updateDrawables(a: any): void;
		public setSize(a: any, b: any): void;
		public isMouseOver(): any;
		public focusGained(): void;
		public focusLost(): void;
		public setIconColor(a: any): void;
		public show(a: any): void;
		public hide(a: any): void;
		public alignGuiPosition(a: any, d: any): void;
		public onAnalysisEnter(): void;
		public onAnalysisExit(): void;
	}
	export class QuickMenuAnalysisCursor extends ig.GuiElementBase {
		public gfx: ig.Image;
		public transitions: any;
		public focusOffset: any;
		public focus: boolean;
		public _focusTimer: number;
		public _focusTime: number;
		public _focusOffset: number;
		public _lastDevice: number;
		public _gamepadActive: boolean;

		public constructor();

		public init(): void;
		public addObservers(): void;
		public removeObservers(): void;
		public update(): void;
		public updateDrawables(b: any): void;
		public focusOnNode(b: any, a: any): void;
		public unfocus(): void;
		public moveTo(b: any, a: any, d: any, c: any): void;
		public modelChanged(b: any, a: any): void;
	}
	export class QuickMenuAnalysis extends ig.GuiElementBase {
		public gfx: ig.Image;
		public transitions: any;
		public buttonGroup: sc.MouseButtonGroup;
		public cursor: sc.QuickMenuAnalysisCursor;
		public entities: any;
		public iconContainer: ig.GuiElementBase;
		public focusContainer: sc.QuickFocusScreen;
		public corners: any;
		public background: ig.GuiElementBase;
		public _cursorPos: any;
		public entered: boolean;

		public constructor();

		public init(): void;
		public update(): void;
		public show(): void;
		public hide(): void;
		public enter(): void;
		public exit(): void;
		public focusCenter(): void;
		public initCursor(b: any): void;
		public limitCursorPos(): void;
		public createCorner(b: any, a: any): void;
		public modelChanged(b: any, a: any): void;
	}
	export class RingMenuButton extends ig.FocusGui {
		public gfx: ig.Image;
		public transitions: any;
		public state: number;
		public alpha: number;
		public alphaTimer: number;
		public endPos: any;
		public origin: any;
		public endPosActive: any;
		public data: any;
		public submitSound: any;
		public blockedSound: any;

		public constructor(a: any, b: any, c: any);

		public init(a: any, b: any, c: any): void;
		public invokeButtonPress(): void;
		public focusGained(): void;
		public update(): void;
		public updateDrawables(a: any): void;
		public show(a: any, b: any): void;
		public hide(): void;
		public activate(): void;
		public deactivate(): void;
	}
	export class ItemTimerOverlay extends ig.GuiElementBase {
		public transitions: any;
		public isActive: boolean;
		public numberGui: sc.NumberGui;
		public button: any;

		public constructor(a: any);

		public init(a: any): void;
		public update(): void;
	}
	export class QuickMenuButtonGroup extends ig.ButtonGroup {
		public sounds: any;

		public constructor();

		public init(): void;
		public setButtons(a: any, b: any, c: any, e: any): void;
		public isNonMouseMenuInput(): any;
		public doButtonTraversal(a: any): void;
		public focusCurrentButton(a: any, b: any, c: any, e: any, f: any): void;
		public hasCD(a: any): any;
	}
	export class QuickRingMenu extends ig.GuiElementBase {
		public gfx: ig.Image;
		public transitions: any;
		public buttongroup: sc.QuickMenuButtonGroup;
		public items: any;
		public map: any;
		public check: any;
		public party: any;
		public buttons: any;

		public constructor();

		public init(): void;
		public update(): void;
		public updateDrawables(a: any): void;
		public enter(): void;
		public exit(): void;
		public show(): void;
		public hide(): void;
		public createButtons(): void;
		public _unfocusAll(): void;
		public _createRingButton(a: any, b: any, c: any): any;
		public _updatePos(): void;
		public _setStateActive(a: any): void;
		public modelChanged(a: any, b: any): void;
	}
	export class QuickPartyStrategyMenu extends ig.BoxGui {
		public gfx: ig.Image;
		public ninepatch: ig.NinePatch;
		public transitions: any;
		public base: any;
		public anchor: any;
		public arrow: sc.QuickItemArrow;
		public rows: any;
		public currentText: any;
		public buttongroup: sc.RowButtonGroup;
		public _hidden: boolean;

		public constructor(a: any, b: any);

		public init(a: any, b: any): any;
		public update(): void;
		public updateDrawables(a: any): void;
		public addRow(a: any, b: any): void;
		public createButton(a: any, b: any, c: any, e: any): any;
		public show(): void;
		public hide(): void;
		public resetRow(a: any, b: any): void;
		public resetButtons(a: any, b: any): void;
		public getButtonIndex(a: any, b: any): any;
		public onSelection(a: any): void;
		public onPress(a: any): void;
		public modelChanged(a: any, b: any): void;
	}
	export class QuickMenu extends ig.GuiElementBase {
		public ringmenu: sc.QuickRingMenu;
		public items: sc.QuickItemMenu;
		public analysis: sc.QuickMenuAnalysis;
		public party: sc.QuickPartyStrategyMenu;
		public location: sc.QuickLocationBox;
		public info: sc.InfoBar;
		public buffInfo: sc.BuffInfo;
		public buffStats: sc.QuickMenuBuffsGui;
		public backButton: any;

		public constructor();

		public init(): void;
		public _checkBackButtonInput(): any;
		public _enterMenu(): void;
		public _exitMenu(): void;
		public _setInfoBarAndLocation(): void;
		public modelChanged(b: any, a: any, d: any): void;
	}
	export class InputForcerGui extends ig.GuiElementBase {
		public titleText: sc.TextGui;
		public hintText: sc.TextGui;
		public transitions: any;

		public constructor();

		public init(): void;
		public show(a: any, b: any): void;
		public remove(): void;
	}
	export class InputForcer extends ig.GameAddon {
		public activeEntry: any;
		public texts: any;
		public gui: sc.InputForcerGui;
		public blocked: boolean;
		public darknessHandle: ig.DarknessHandle;
		public lightHandle: ig.LightHandle;
		public inputSubmitted: boolean;
		public sounds: any;
		public preUpdateOrder: number;

		public constructor();

		public init(): void;
		public setEntry(a: any, b: any, e: any, f: any): void;
		public isBlocking(): any;
		public clearEntry(): void;
		public isSubmitted(): any;
		public onPreUpdate(): void;
		public onReset(): void;
		public update(): void;
		public _startBlock(a: any): void;
		public _endBlock(): void;
	}
	export class TradeIconGui extends ig.BoxGui {
		public transitions: any;
		public ninepatch: ig.NinePatch;
		public numberGfx: ig.Image;
		public tradeInfo: any;
		public tradeIcon: any;
		public lineGui: ig.ColorGui;
		public entries: any;

		public constructor(b: any);

		public init(b: any): void;
		public setIconState(b: any): void;
		public isActive(b: any): any;
		public _createContent(): void;
		public _createStatic(): void;
		public _updateTexts(): void;
		public _hasMissingItem(b: any): any;
		public remove(): void;
	}
	export class SavePresetData extends ig.JsonLoadable {
		public cacheType: string;
		public title: ig.LangLabel;
		public sub: ig.LangLabel;
		public saveSlot: ig.SaveSlot;

		public onCacheCleared(): void;
		public getJsonPath(): any;
		public onload(a: any): void;
	}
	export class SavePreset extends ig.GameAddon {
		public slots: any;

		public constructor();

		public init(): void;
		public load(a: any): void;
	}
	export class XenoDialogIcon extends ig.BoxGui {
		public transitions: any;
		public ninepatch: ig.NinePatch;
		public textGui: sc.TextGui;
		public skipGui: sc.MsgSkipGui;
		public xenoDialog: any;
		public skipEntry: sc.SkipInteractEntry;

		public constructor();

		public init(): void;
		public onTextFinish(): void;
		public isTextFinished(): any;
		public updateSkipIcon(): void;
		public setText(b: any, a: any): void;
		public show(): void;
		public hide(): void;
		public onSkipInteract(b: any): void;
		public setIconState(): void;
		public isActive(b: any): any;
		public remove(): void;
	}
	export class QuestSubTaskBase extends ig.Class {
		public type: any;

		public constructor(b: any);

		public init(b: any): void;
	}
	export class QuestTask extends ig.Class {
		public task: ig.LangLabel;
		public subTasks: any;
		public containsCollect: boolean;
		public subQuests: any;
		public skipNotify: boolean;

		public constructor(b: any, a: any);

		public init(b: any, a: any): void;
	}
	export class Quest extends ig.Class {
		public name: ig.LangLabel;
		public level: number;
		public order: number;
		public description: ig.LangLabel;
		public endDescription: ig.LangLabel;
		public tasks: any;
		public rewards: any;
		public id: any;
		public person: ig.LangLabel;
		public personAfter: ig.LangLabel;
		public labelList: any;
		public hideRewards: boolean;
		public area: any;
		public noTrack: boolean;
		public parentQuest: any;
		public elite: boolean;
		public mandatory: boolean;
		public hubSettings: any;
		public location: any;
		public timeStamp: number;
		public character: any;

		public constructor(b: any, a: any);

		public init(b: any, a: any): void;
	}
	export class QuestModel extends ig.GameAddon {
		public observers: any;
		public staticQuests: any;
		public activeQuests: any;
		public finishedQuests: any;
		public focusQuest: any;
		public markedQuests: any;
		public _activeQuestIndex: any;
		public _solvedQueue: any;
		public _solvedTimer: number;
		public _hasSolveDialogs: boolean;
		public _subQuest: any;
		public resetOrder: any;

		public constructor();

		public init(): void;
		public getTotalQuestsSolved(a: any, b: any, d: any, g: any): any;
		public getTotalHubQuestsSolved(a: any, b: any): void;
		public hasAreaQuests(a: any): any;
		public onPreUpdate(): void;
		public onReset(): void;
		public popInlineSolvedQuest(): any;
		public getInlineQuestResolve(a: any): void;
		public getQuestEvent(a: any): any;
		public markQuest(a: any): void;
		public isMarkedQuest(a: any): any;
		public hasQuestSolvedDialogs(): any;
		public hasSolvedQuestsStacked(): any;
		public setFavQuestOld(a: any): any;
		public cycleFavQuest(a: any, b: any): void;
		public sendNotification(a: any, d: any, f: any): void;
		public createQuest(a: any): void;
		public activateStaticQuest(a: any, d: any, f: any): any;
		public solveQuestCondition(b: any, d: any): any;
		public updateQuestLocation(a: any): void;
		public resetQuestTask(a: any, b: any): void;
		public updateActiveQuests(a: any, b: any): void;
		public resolveActiveQuestChanges(a: any, b: any): void;
		public setQuestFinished(b: any, d: any): any;
		public finishUpQuest(a: any): void;
		public isQuestActive(a: any): any;
		public isQuestSolved(a: any): any;
		public isQuestLabelSolved(a: any, b: any): any;
		public getQuestState(a: any): any;
		public getSubQuests(a: any): any;
		public getQuestTask(a: any, b: any): any;
		public getStaticQuest(a: any): any;
		public isTaskDone(a: any, b: any): any;
		public getCurrentTask(a: any, b: any): any;
		public getQuestName(a: any): any;
		public getQuestList(a: any, b: any): any;
		public sortIDList(a: any): any;
		public sortQuestList(a: any, b: any): any;
		public getActiveQuestID(a: any): any;
		public _sortOrder(a: any, b: any): any;
		public getMarkedQuest(): any;
		public getCurrentMarkedQuestTaskIndex(): any;
		public isMarkedQuestDone(): any;
		public isMarkedTaskDone(a: any): any;
		public getMarkedTaskIndex(a: any): any;
		public getSubTaskState(a: any, b: any, d: any): any;
		public isSubTaskDone(a: any, b: any, d: any): any;
		public onVarAccess(a: any, b: any): any;
		public onCombatEvent(b: any, d: any): void;
		public onLandmarkEvent(b: any): void;
		public modelChanged(b: any, d: any, f: any): void;
		public _collectRewards(a: any): void;
		public updateTimeStamp(a: any, b: any): void;
		public _setCurrentLocationAndTime(a: any, b: any, d: any): void;
		public _hasAlreadyFinished(a: any): any;
		public _loadStaticQuests(): void;
		public onStorageSave(a: any): void;
		public onStoragePreLoad(a: any): void;
		public checkIfSubQuests(b: any): void;
	}
	export class QuestState extends ig.Class {
		public quest: any;
		public done: any;
		public currentTask: number;
		public highestTask: number;
		public finished: boolean;
		public labels: any;

		public constructor(a: any, b: any);

		public init(a: any, b: any): void;
		public finalizeTask(a: any): void;
		public initState(a: any): void;
		public updateState(a: any, b: any, d: any): void;
		public increaseTaskIndex(): void;
		public resetTaskIndex(a: any): void;
		public hasCollectSubtask(a: any): any;
		public skipPreviousTask(): any;
		public checkSubTask(a: any, b: any, d: any, g: any): any;
		public isSubTaskSolved(a: any): any;
		public getCurrentSubTaskValue(a: any, b: any): any;
		public getCurrentTask(): any;
		public getSubTaskData(a: any, b: any): any;
		public isDone(): any;
		public getSaveData(): any;
		public setLoadData(a: any): void;
	}
	export class PartyMemberModel extends ig.Class {
		public observers: any;
		public core: any;
		public config: sc.PlayerConfig;
		public animSheet: any;
		public stats: any;
		public params: sc.CombatParams;
		public name: any;
		public clazz: any;
		public character: any;
		public equipLevel: number;
		public level: number;
		public exp: number;
		public combatStyle: any;
		public spLevel: number;
		public allElements: boolean;
		public equip: any;
		public baseParams: any;
		public equipParams: any;
		public equipModifiers: any;
		public baseConfig: any;
		public elementConfigs: any;
		public reviveTimer: number;
		public skills: any;
		public healing: any;
		public temporary: boolean;
		public noDie: boolean;
		public currentElementMode: number;

		public constructor(a: any);

		public init(a: any): void;
		public onLoadableComplete(): void;
		public getHeadIdx(): any;
		public setEquipment(a: any, b: any): void;
		public clearEquipment(): void;
		public updateAutoEquip(): any;
		public _updateAutoEquip(a: any): any;
		public setElementMode(a: any): void;
		public updateStats(): void;
		public isAlive(): any;
		public onDefeat(): void;
		public revive(): void;
		public setTemporary(a: any): void;
		public setNoDie(a: any): void;
		public update(): void;
		public getCharacterName(): any;
		public getCharacterRealName(): any;
		public getAction(a: any): any;
		public getActionMaxLevel(a: any): any;
		public getCombatArtName(a: any): any;
		public getBalls(): any;
		public getSaveData(): any;
		public setLoadData(a: any): void;
		public reset(): void;
		public setSpLevel(a: any): void;
		public setAllElements(a: any): void;
		public addExperience(a: any, b: any, e: any, f: any, g: any): void;
		public setLevel(a: any, b: any, e: any, f: any): void;
		public hasSandwich(): any;
		public canEatSandwich(): any;
		public restockSandwich(): void;
		public getBestSandwich(a: any): any;
		public consumeSandwich(a: any, c: any): void;
		public getSandwichAction(a: any): any;
	}
	export class PartyMemberEntity extends sc.PlayerBaseEntity {
		public party: any;
		public material: any;
		public configs: any;
		public guard: any;
		public model: any;
		public posOffset: any;
		public navTarget: any;
		public state: any;
		public inCombat: boolean;
		public targetStats: any;
		public stateData: any;
		public timer: any;
		public throwDirData: any;
		public currentCombatArt: any;
		public charging: any;

		public constructor(a: any, b: any, c: any, d: any);

		public init(a: any, b: any, c: any, d: any): void;
		public updateDefaultConfig(a: any): void;
		public show(a: any): void;
		public onPreDamageModification(a: any, b: any, c: any, d: any, e: any): any;
		public onInstantDamage(a: any): any;
		public onKill(a: any): void;
		public leaveParty(a: any): void;
		public resetAttackTimer(): void;
		public startCombat(): void;
		public endCombat(): void;
		public startCombatArtCharging(): void;
		public doCombatArtCharge(): void;
		public cancelCharge(): void;
		public doCombatArt(): void;
		public setAction(a: any, b: any, c: any): void;
		public setActionBlocked(a: any): void;
		public hasValidTarget(): any;
		public selectTarget(): void;
		public reselectTarget(): void;
		public getBestElement(): any;
		public consumeSandwich(a: any): void;
		public updateElement(): void;
		public updateModelStats(): void;
		public modelChanged(a: any, b: any): void;
		public selectCombatArt(): void;
		public changeState(a: any): void;
		public isControlBlocked(): any;
		public getDodgeProbability(a: any): any;
		public goToCombat(): any;
		public update(): void;
		public resetPos(a: any): void;
		public setNavTarget(a: any): void;
		public onNavigationFailed(a: any): void;
	}
	export class CommonEvents extends ig.GameAddon {
		public events: any;
		public eventsByType: any;
		public runData: any;
		public delayedTriggerStack: any;
		public delayedTriggerTimer: number;

		public constructor();

		public init(): void;
		public onReset(): void;
		public onStorageSave(a: any): void;
		public onStoragePreLoad(a: any): void;
		public onDeferredUpdate(): void;
		public _loadCommonEvents(): void;
		public triggerEvent(a: any, b: any): any;
		public cancelEvent(a: any): any;
		public startCallEvent(a: any): any;
		public _forcedTriggerEvent(a: any, b: any, c: any): any;
		public _checkEventExecution(a: any, b: any, c: any): any;
		public _startCommonEvent(a: any): any;
		public selectEvent(a: any, b: any, d: any, i: any): any;
		public getRunCount(a: any): any;
		public getTriggerCount(a: any): any;
		public increaseTriggerCount(a: any): void;
	}
	export class CommonEvent extends ig.Class {
		public name: any;
		public type: any;
		public typeDetails: any;
		public frequency: any;
		public repeat: any;
		public runOnTrigger: any;
		public loopCount: number;
		public condition: ig.VarCondition;
		public event: ig.Event;

		public constructor(a: any, c: any);

		public init(a: any, c: any): void;
		public check(a: any): any;
		public start(a: any): any;
	}
	export class VoiceActing extends ig.GameAddon {
		public active: boolean;
		public loaded: boolean;
		public voices: any;

		public constructor();

		public init(): void;
		public toggle(): void;
		public load(): void;
		public loadConfigSounds(b: any): any;
		public play(b: any, a: any): void;
	}
	export class CreditSectionLoadable extends ig.Loadable {
		public cacheType: string;
		public data: any;
		public lowestFloor: number;

		public constructor(b: any);

		public init(b: any): void;
		public loadInternal(b: any): void;
		public onerror(): void;
		public onload(b: any): void;
	}
	export class ArenaCache extends ig.Cacheable {
		public cacheType: string;

		public constructor();

		public init(): void;
		public onCacheCleared(): void;
		public getCacheKey(): any;
	}
	export class CupAsset extends ig.Loadable {
		public cacheType: string;
		public data: any;
		public key: any;

		public constructor(b: any, a: any);

		public init(b: any, a: any): void;
		public loadInternal(b: any): void;
		public onerror(): void;
		public onload(b: any): void;
	}
	export class ArenaChallengeBase extends ig.Class {
		public state: boolean;
		public icon: number;

		public constructor(b: any, a: any);

		public init(b: any, a: any): void;
		public toggle(b: any): void;
	}
	export class ArenaChallengePlayerBase extends sc.ArenaChallengeBase {
		public core: any;

		public constructor(b: any, a: any);

		public init(b: any, a: any): void;
		public onToggle(): void;
	}
	export class ArenaCrowdCheerController extends ig.Class {
		public soundPool: any;

		public update(): void;
		public play(a: any): void;
		public resetTimers(): void;
		public loadCache(): void;
		public clearCache(): void;
	}
	export class Arena extends ig.GameAddon {
		public active: boolean;
		public arenaCache: sc.ArenaCache;
		public runtime: any;
		public coins: number;
		public coinsSpend: number;
		public cups: any;
		public observers: any;
		public partyStash: any;
		public pauseOverlay: sc.ArenaChallengeOverlay;
		public sounds: sc.ArenaCrowdCheerController;
		public effects: ig.EffectSheet;
		public _pauseBlock: boolean;
		public _endRoundEnd: boolean;
		public _exitCup: boolean;
		public _pauseAction: number;
		public _isFinalHit: boolean;
		public _partySettingBehaviour: any;
		public postUpdateOrder: number;
		public levelLoadStartOrder: number;
		public levelLoadedOrder: number;

		public constructor();

		public init(): void;
		public onPostUpdate(): void;
		public onReset(): void;
		public onLevelLoadStart(): void;
		public onLevelLoaded(): void;
		public onVarsChanged(): void;
		public onPreDamageModification(a: any, b: any): void;
		public onTargetHit(a: any, b: any, c: any, d: any): void;
		public onPreDamageApply(a: any, b: any, c: any, d: any): void;
		public onPreInstantDamage(a: any, b: any): void;
		public onLockEnd(a: any, b: any, c: any, d: any): void;
		public onElementOverload(): void;
		public onPerfectDodge(): void;
		public onGuardCounter(a: any): void;
		public onEnemyBreak(a: any): void;
		public onHitKill(a: any): void;
		public onCombatantHeal(a: any, b: any): void;
		public onCombatantDeathHit(a: any, b: any): void;
		public onEnvironmentKill(a: any): void;
		public onFinalDeathHit(): void;
		public spawnCurrentWave(a: any, b: any, c: any): void;
		public startRound(): void;
		public endRound(): void;
		public endRoundDeath(): void;
		public startNextRound(a: any): void;
		public restartCup(): void;
		public prepareLobbyReturn(): void;
		public teleportToCurrentRound(): void;
		public resetRuntimeRoundStats(): void;
		public addChallengeMods(): void;
		public addBonusObjectives(): void;
		public addGui(): void;
		public addScore(a: any, b: any): void;
		public addScoreIgnore(a: any): void;
		public removeScoreIgnore(a: any): void;
		public clearScoreIgnore(): void;
		public increaseChain(a: any): void;
		public refreshChainTimer(a: any): void;
		public resetChain(): void;
		public getChainMultiplier(): any;
		public enterArenaMode(a: any, b: any): void;
		public exitArenaMode(): void;
		public stashPartyMembers(): void;
		public unstashPartyMembers(): void;
		public registerCup(a: any, b: any): void;
		public loadCache(): void;
		public clearCache(): void;
		public initMetaData(a: any): void;
		public setPauseAction(a: any): void;
		public saveScore(a: any, b: any): any;
		public saveRushScore(): any;
		public addEnemyIgnore(a: any): void;
		public removeArenaCoins(a: any): void;
		public clearProgress(a: any, b: any): any;
		public _getCoinWeightMultiplier(a: any, b: any): any;
		public _validateCoins(): void;
		public _clearProgress(a: any, b: any): void;
		public _cleaRuntimeCache(a: any): void;
		public _spawnEnemy(a: any, b: any, c: any, d: any): void;
		public _getLevelToSpawn(a: any, b: any, c: any, d: any): any;
		public modelChanged(a: any, b: any): void;
		public onLoadableComplete(a: any, b: any): void;
		public onVarAccess(a: any, b: any): any;
		public getTotalArenaCompletion(): any;
		public getTotalDefaultCups(a: any): any;
		public getTotalDefaultTrophies(a: any, c: any): any;
		public isEnemyBlocked(a: any): any;
		public getCupCompletion(a: any): any;
		public getCurrentObjective(): any;
		public getChallengeMods(a: any, b: any): any;
		public isStatusModifierBlocked(a: any): any;
		public hasAnyChallenge(): any;
		public hasChallenge(a: any): any;
		public isScoreNewRecord(a: any, b: any, c: any): any;
		public isPauseBlocked(): any;
		public getCurrentWave(): any;
		public getNextWave(): any;
		public getCurrentRound(): any;
		public isCurrentRoundCustom(): any;
		public isCurrentRoundLast(): any;
		public isCupSolo(a: any): any;
		public isCupCustom(a: any): any;
		public getRoundCompletionTotal(a: any, b: any): any;
		public getRoundMedalRequirement(a: any, b: any, c: any, d: any): any;
		public getMedalForCurrentRound(a: any, b: any): any;
		public getTotalArenaCoins(): any;
		public getArenaCoinsObtainedInCup(a: any): any;
		public getArenaCoinsObtainedInRound(a: any, b: any, c: any): any;
		public getAvailableArenaCoinsInCup(a: any, b: any): any;
		public getAvailableArenaCoinsInRound(a: any, b: any): any;
		public getTotalPoints(a: any, b: any): any;
		public getRoundPoints(a: any, b: any): any;
		public getTotalTime(a: any): any;
		public getRoundTime(a: any, b: any): any;
		public hasMedalsForTrophy(a: any): any;
		public getCupTrophy(a: any): any;
		public getCupMedal(a: any, b: any): any;
		public getCupLevel(a: any): any;
		public getRoundsCleared(a: any): any;
		public isCupUnlocked(a: any): any;
		public getCupName(a: any): any;
		public getCupDescription(a: any): any;
		public getCupDifficultyIcon(a: any): any;
		public getCupProgress(a: any): any;
		public getCupCore(a: any): any;
		public getCupCoreAttrib(a: any, b: any): any;
		public getCupRounds(a: any): any;
		public getCupData(a: any): any;
		public getSortedCupList(a: any, b: any): any;
		public onStorageSave(a: any): void;
		public onStoragePreLoad(a: any): void;
	}
	export class ArenaMedalEffect extends ig.GuiElementBase {
		public gfx: ig.Image;
		public transitions: any;
		public medal: number;
		public isTrophy: boolean;
		public display: sc.NPCDisplayGui;
		public container: ig.GuiElementBase;
		public effectDone: boolean;

		public constructor();

		public init(): void;
		public show(b: any, a: any): void;
		public hide(b: any): void;
		public getMedalEffectName(b: any, a: any): any;
		public onLoaded(b: any): void;
		public onEffectEvent(b: any): void;
	}
	export class ArenaRoundEndButtons extends ig.GuiElementBase {
		public gfx: ig.Image;
		public transitions: any;
		public callback: any;
		public buttonInteract: ig.ButtonInteractEntry;
		public buttonGroup: sc.ButtonGroup;
		public background: ig.ImageGui;
		public buttons: any;
		public info: any;
		public dialogBlock: boolean;
		public _playerDeath: boolean;
		public _isLastRound: boolean;
		public confirm: ig.Sound;

		public constructor(c: any, d: any, f: any);

		public init(c: any, d: any, f: any): void;
		public handleRushMode(a: any): void;
		public handleDefaultMode(a: any): void;
		public getDialogText(a: any, b: any): any;
		public onButtonPressed(a: any): void;
		public onButtonSelect(a: any): void;
		public onMouseFocusLost(): void;
		public show(): void;
		public hide(): void;
	}
	export class ArenaCoinsHud extends ig.GuiElementBase {
		public ninepatch: ig.NinePatch;
		public panel: ig.BoxGui;
		public number: sc.MoneyTextGui;
		public coins: ig.ImageGui;
		public add: number;

		public constructor();

		public init(): void;
		public addRushCoins(): void;
		public show(): void;
		public hide(): void;
	}
	export class ArenaMedalHud extends ig.GuiElementBase {
		public ninepatch: ig.NinePatch;
		public panel: ig.BoxGui;
		public text: sc.TextGui;
		public medal: ig.GuiElementBase;
		public effect: sc.ArenaMedalEffect;
		public callback: any;

		public constructor(a: any);

		public init(a: any): void;
		public show(a: any): void;
		public hide(): void;
	}
	export class ArenaRoundEndHeader extends ig.BoxGui {
		public transitions: any;
		public ninepatch: ig.NinePatch;
		public text: sc.TextGui;

		public constructor();

		public init(): void;
		public show(a: any, b: any): void;
		public hide(): void;
	}
	export class ArenaSummary extends sc.RightHudBoxGui {
		public summaryContent: ig.GuiElementBase;
		public scrollPanel: sc.ScrollPane;
		public container: ig.GuiElementBase;
		public total: sc.STATS_ENTRY_TYPE.KeyValue;
		public totalOverlay: sc.NumberGui;
		public entries: any;
		public currentIndex: number;
		public timer: number;
		public totalValue: number;
		public addEntries: boolean;
		public containerHeight: number;
		public done: boolean;
		public callback: any;
		public scoreCountSound: ig.Sound;
		public scoreDotSound: ig.Sound;
		public scoreDotPitch: number;

		public constructor(a: any);

		public init(a: any): void;
		public update(): void;
		public updateScroll(): void;
		public skip(): void;
		public show(): any;
		public _addSeparator(a: any, b: any): any;
		public _addBonusEntry(a: any, b: any, d: any, g: any): any;
		public _addEntry(a: any, b: any, d: any): any;
	}
	export class ArenaCupOverview extends ig.GuiElementBase {
		public gfx: ig.Image;
		public transitions: any;
		public interact: sc.ScreenInteractEntry;
		public content: ig.GuiElementBase;
		public msgBox: sc.CenterBoxGui;
		public header: sc.TextGui;
		public medals: ig.GuiElementBase;
		public list: sc.ScrollPane;
		public trophy: ig.GuiElementBase;
		public effect: sc.ArenaMedalEffect;
		public total: sc.STATS_ENTRY_TYPE.KeyValue;
		public time: sc.STATS_ENTRY_TYPE.Time;
		public rushTime: sc.STATS_ENTRY_TYPE.Time;
		public rushChain: sc.STATS_ENTRY_TYPE.KeyValue;
		public totalOverlay: sc.NumberGui;
		public score: any;
		public trophyHeader: sc.TextGui;
		public trophyFooter: sc.TextGui;
		public callback: any;
		public entries: any;
		public currentIndex: number;
		public timer: number;
		public totalValue: number;
		public totalTime: number;
		public addEntries: boolean;
		public cup: any;
		public trophyType: any;
		public state: number;
		public blockTimer: number;
		public initGui: boolean;
		public scoreCountSound: ig.Sound;
		public scoreDotSound: ig.Sound;
		public scoreDotPitch: number;

		public constructor(b: any, a: any);

		public init(b: any, a: any): any;
		public update(): void;
		public updateDrawables(b: any): void;
		public show(b: any): void;
		public hide(): void;
		public addMedals(): void;
		public skip(): void;
		public onInteraction(): void;
	}
	export class ArenaRushOverview extends ig.GuiElementBase {
		public gfx: ig.Image;
		public transitions: any;
		public interact: sc.ScreenInteractEntry;
		public content: ig.GuiElementBase;
		public msgBox: sc.CenterBoxGui;
		public header: sc.TextGui;
		public medals: ig.GuiElementBase;
		public list: sc.ScrollPane;
		public medal: ig.GuiElementBase;
		public effect: sc.ArenaMedalEffect;
		public total: sc.STATS_ENTRY_TYPE.KeyValue;
		public time: sc.STATS_ENTRY_TYPE.Time;
		public totalOverlay: sc.NumberGui;
		public medalHeader: sc.TextGui;
		public medalFooter: sc.TextGui;
		public callback: any;
		public entries: any;
		public currentIndex: number;
		public timer: number;
		public totalValue: number;
		public addEntries: boolean;
		public cup: any;
		public medalType: any;
		public state: number;
		public blockTimer: number;
		public initGui: boolean;
		public scoreCountSound: ig.Sound;
		public scoreDotSound: ig.Sound;
		public scoreDotPitch: number;

		public constructor(b: any);

		public init(b: any): any;
		public update(): void;
		public updateDrawables(b: any): void;
		public show(): void;
		public hide(): void;
		public addMedals(): void;
		public skip(): void;
		public onInteraction(): void;
	}
	export class ArenaPlayerDeathOverlay extends ig.GuiElementBase {
		public transitions: any;
		public done: boolean;

		public constructor();

		public init(): void;
		public show(): void;
		public hide(): void;
	}
	export class ArenaRoundEndOverlay extends ig.GuiElementBase {
		public transitions: any;
		public interact: sc.ScreenInteractEntry;
		public header: sc.ArenaRoundEndHeader;
		public summary: sc.ArenaSummary;
		public medal: sc.ArenaMedalHud;
		public coins: sc.ArenaCoinsHud;
		public buttons: sc.ArenaRoundEndButtons;
		public info: sc.InfoBar;
		public rushChain: sc.ArenaChainHud;
		public overview: sc.ArenaRushOverview;
		public done: boolean;
		public state: number;
		public waitTimer: number;
		public initTimer: number;

		public constructor();

		public init(): void;
		public update(): void;
		public checkNewRecord(): void;
		public saveScore(): void;
		public onInteraction(): void;
		public show(): void;
		public hide(): void;
	}
	export class ArenaChainHud extends ig.GuiElementBase {
		public transitions: any;
		public ninepatch: ig.NinePatch;
		public panel: ig.BoxGui;
		public text: sc.TextGui;
		public number: sc.ArenaChainHud.Number;
		public pulsing: boolean;
		public timer: ig.WeightTimer;
		public initNumber: any;
		public targetNumber: any;
		public done: any;
		public chainSound: ig.Sound;

		public constructor(a: any);

		public init(a: any): void;
		public update(): void;
		public show(): void;
		public hide(a: any): void;
		public animateChainNumber(a: any, b: any, c: any): void;
		public setChainNumber(a: any, b: any): void;
		public setPulse(a: any): void;
		public rumble(): void;
		public _getCurrentNumber(): any;
	}
	export class ArenaChallengeOverlay extends sc.SideBoxGui {
		public constructor();

		public init(): void;
		public setChallengeMods(a: any): void;
	}
	export class ArenaRoundStartHud extends ig.GuiElementBase {
		public transitions: any;
		public timer: number;
		public done: boolean;
		public round: sc.TextGui;
		public name: sc.TextGui;
		public container: ig.GuiElementBase;

		public constructor();

		public init(): void;
		public updateDrawables(b: any): void;
		public update(): void;
	}
	export class NewGamePlusModel extends ig.GameAddon {
		public active: boolean;
		public options: any;
		public observers: any;

		public constructor();

		public init(): void;
		public onReset(): void;
		public setActive(b: any): void;
		public apply(b: any): void;
		public toggle(b: any, a: any): any;
		public get(b: any): any;
		public onVarAccess(b: any, a: any): any;
		public onStorageSave(b: any): void;
		public onStoragePreLoad(b: any): void;
	}
	export class BetaControls extends ig.GameAddon {
		public postUpdateOrder: number;

		public constructor();

		public init(): void;
		public onPostUpdate(): void;
	}
	export class EmptyLoader extends ig.Loader {
		public draw(): void;
	}
	export class CrossCode extends ig.Game {
		public mapLoader: any;
		public gravity: number;
		public shadowImage: ig.Image;
		public transitionTimer: number;
		public currentTeleportColor: any;
		public teleportColor: any;
		public effects: any;
		public sounds: any;
		public _slotToLoad: number;
		public _startMode: any;
		public _teleportMessages: any;

		public constructor();

		public init(): any;
		public onGameLoopStart(): void;
		public update(): void;
		public draw(): void;
		public getVersion(): any;
		public addTeleportMessage(b: any): void;
		public start(b: any, a: any): void;
		public loadStart(b: any): void;
		public gotoTitle(): void;
		public transitionEnded(): void;
		public hardReset(): void;
		public reloadCheckpoint(): void;
		public respawn(): void;
		public isEventStartReady(): any;
		public setTeleportColor(b: any, a: any, d: any, c: any): void;
		public setTeleportTime(b: any, a: any): void;
		public onTeleportStart(): any;
		public onTeleportEnd(): void;
		public createPlayer(): void;
		public getErrorData(b: any): void;
		public loadLevel(b: any, a: any): void;
		public loadingComplete(): void;
		public handleLoadingComplete(): void;
	}
}
declare namespace b {
	export class EMPTY extends ig.GuiElementBase {
		public gfx: ig.Image;

		public constructor();

		public init(): void;
		public updateDrawables(a: any): void;
		public start(): void;
		public end(): void;
	}
	export class RANKED extends ig.GuiElementBase {
		public gfx: ig.Image;
		public rankLabel: sc.TextGui;
		public rankValue: sc.TextGui;
		public progress: number;
		public blinkTimer: number;

		public constructor();

		public init(): void;
		public update(): void;
		public updateDrawables(a: any): void;
		public start(): void;
		public end(): void;
		public modelChanged(a: any, b: any): void;
	}
	export class PVP extends ig.GuiElementBase {
		public gfx: ig.Image;
		public heads: ig.Image;

		public constructor();

		public init(): void;
		public updateDrawables(a: any): void;
		public _renderPoints(a: any, b: any, c: any, e: any, f: any, g: any): void;
		public _renderHeads(a: any, b: any, c: any, e: any): void;
		public start(): void;
		public end(): void;
	}
	export class ENEMY extends sc.ItemStatusTrade.BaseEntryType {
		public constructor(a: any, b: any);

		public init(a: any, b: any): void;
	}
	export class TRADER extends sc.ItemStatusTrade.BaseEntryType {
		public constructor(a: any, b: any);

		public init(a: any, b: any): void;
	}
	export class PLANT extends sc.ItemStatusTrade.BaseEntryType {
		public constructor(a: any, b: any);

		public init(a: any, b: any): void;
	}
	export class QUEST extends sc.ItemStatusTrade.BaseEntryType {
		public constructor(a: any, b: any);

		public init(a: any, b: any): void;
	}
	export class CHEST extends sc.ItemStatusTrade.BaseEntryType {
		public constructor(a: any, b: any);

		public init(a: any, b: any): void;
	}
	export class OTHER extends sc.ItemStatusTrade.BaseEntryType {
		public constructor(a: any, b: any);

		public init(a: any, b: any): void;
	}
}
