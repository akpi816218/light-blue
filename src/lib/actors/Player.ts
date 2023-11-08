import { BaseActor } from './BaseActor';
import { Point } from '../Point';
import { ActorType } from '../Util';
import { Vector } from '../Vector';

/**
 * @class Represents the player
 */
export class Player extends BaseActor {
	speed: Vector;
	/**
	 * Create a player
	 * @param {Point} pos The position of the player
	 * @param {Vector} speed The speed of the player
	 * @param {number} scale The scale of the player
	 */
	constructor(pos: Point, speed: Vector, scale: number) {
		super(pos, scale);
		/**
		 * The speed of the player
		 * @type {Vector}
		 */
		this.speed = speed;
		this._dom.style.backgroundColor = '#083344';
	}

	/**
	 * Update the player's DOM
	 * @returns {this} The player
	 */
	update(): this {
		this._dom.style.top = `${this.pos.y * this.scale}px`;
		this._dom.style.left = `${this.pos.x * this.scale}px`;
		return this;
	}

	get type(): ActorType {
		return ActorType.Player;
	}
}
