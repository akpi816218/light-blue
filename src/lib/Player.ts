import { BaseActor } from './BaseActor';
import { Point } from './Point';
import { ActorType } from './Util';
import { Vector } from './Vector';

/**
 * @class Represents the player
 */
export class Player extends BaseActor {
	speed: Vector;
	/**
	 * Create a player
	 * @param {Point} pos The position of the player
	 * @param {Vector} speed The speed of the player
	 */
	constructor(pos: Point, speed: Vector) {
		super(pos);
		this.speed = speed;
	}

	get type(): ActorType {
		return ActorType.Player;
	}

	/**
	 * Create a player
	 * @param {Point} pos The position of the player
	 * @param {Vector} vector The speed of the player
	 */
	static create(pos: Point, vector: Vector = new Vector(pos, 0, 0)): Player {
		return new Player(pos.plus(new Point(0, -0.5)), vector);
	}
}
