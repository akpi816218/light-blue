import { Point } from '../Point';
import { ActorType } from '../Util';
import { BaseActor } from './BaseActor';

/**
 * Represents a coi.
 */
export class Coin extends BaseActor {
	wobble: number;
	/**
	 * Create a new BaseActor.
	 * @param {Point} pos The position of the actor.
	 * @param {number} scale The scale of the actor.
	 */
	constructor(pos: Point, scale: number) {
		super(pos, scale);
		this._dom.style.top = `${this.pos.y * this.scale}px`;
		this._dom.style.left = `${this.pos.x * this.scale}px`;
		this.pos.down(scale / 4);
		this.pos.right(scale / 4);
		this._dom.style.background = '#facc15';
		this._dom.style.width = `${(this.scale * 2) / 3}px`;
		this._dom.style.height = `${(this.scale * 2) / 3}px`;
		this._dom.style.borderRadius = `${this.scale}px`;
		this._dom.classList.add('coin');
		this.wobble = Math.random() * Math.PI * 2;
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
		return ActorType.Coin;
	}

	/**
	 * Get the DOM element of the actor.
	 * @returns {HTMLElement} The DOM element of the actor.
	 */
	get dom(): HTMLElement {
		return this._dom;
	}
}
