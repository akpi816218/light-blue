import { Point } from './Point';
import { ActorType } from './Util';

export class BaseActor {
	pos: Point;
	constructor(pos: Point) {
		this.pos = pos;
	}
	get type(): ActorType {
		return ActorType.Base;
	}
	static create(pos: Point): BaseActor {
		return new BaseActor(pos);
	}
}
