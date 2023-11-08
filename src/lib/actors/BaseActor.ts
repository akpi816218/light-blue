import { Root } from 'react-dom/client';
import { Point } from '../Point';
import { ActorType } from '../Util';

/**
 * Represents a basic Actor.
 */
export class BaseActor {
	pos: Point;
	scale: number;
	_dom: HTMLElement;
	/**
	 * Create a new BaseActor.
	 * @param {Point} pos The position of the actor.
	 * @param {number} scale The scale of the actor.
	 */
	constructor(pos: Point, scale: number) {
		/**
		 * The position of the actor.
		 * @type {Point}
		 */
		this.pos = pos;
		/**
		 * The scale of the actor.
		 * @type {number}
		 */
		this.scale = scale;
		/**
		 * The DOM element of the actor.
		 * @private
		 * @type {HTMLElement}
		 */
		this._dom = document.createElement('div');
		this._dom.style.position = 'absolute';
		this._dom.style.width = `${this.scale}px`;
		this._dom.style.height = `${this.scale}px`;
		this._dom.style.background = 'black';
		this._dom.style.top = `${this.pos.y * this.scale}px`;
		this._dom.style.left = `${this.pos.x * this.scale}px`;
	}

	/**
	 * Update the actor's DOM.
	 * @returns {this} The actor.
	 */
	update(): this {
		this._dom.style.top = `${this.pos.y * this.scale}px`;
		this._dom.style.left = `${this.pos.x * this.scale}px`;
		return this;
	}

	/**
	 * Get the type of the actor.
	 * @returns {ActorType} The type of the actor.
	 */
	get type(): ActorType {
		return ActorType.Base;
	}

	/**
	 * Get the DOM element of the actor.
	 * @returns {HTMLElement} The DOM element of the actor.
	 */
	get dom(): HTMLElement {
		return this._dom;
	}
}
