import { Point } from '../Point';
import { ActorType } from '../Util';
import { BaseActor } from './BaseActor';

/**
 * Represents a lava square.
 */
export class Lava extends BaseActor {
	/**
	 * Create a new Lava.
	 * @param {Point} pos The position of the actor.
	 * @param {number} scale The scale of the actor.
	 */
	constructor(pos: Point, scale: number) {
		super(pos, scale);
		this._dom.style.background = '#b91c1c';
	}

	/**
	 * Update the actor's DOM.
	 * @returns {this} The actor.
	 */
	update(): this {
		return this;
	}

	/**
	 * Get the type of the actor.
	 * @returns {ActorType} The type of the actor.
	 */
	get type(): ActorType {
		return ActorType.Lava;
	}

	/**
	 * Get the DOM element of the actor.
	 * @returns {HTMLElement} The DOM element of the actor.
	 */
	get dom(): HTMLElement {
		return this._dom;
	}
}
