import { LevelManager } from './LevelManager';
import { ActorType, createActor, getActorTypeFromChar } from './Util';
import { GameState } from './GameState';
import { Point } from './Point';

/**
 * @class Represents a level
 */
export class Level {
	index: number;
	data: string;
	scale: number;
	right: number;
	down: number;
	/**
	 * Create a level
	 * @param {number} index The index of the level
	 * @param {string} data The level data
	 * @param {number} scale The scale of the level
	 */
	constructor(
		index: number,
		data: string,
		{ scale = 15, right = 0, down = 0 }
	) {
		if (data.replaceAll(/[@o#+=|<>^v.]/g, '').replaceAll('\n', '').length > 0)
			throw new Error('Invalid level data');
		/**
		 * The data of the level
		 * @type {string}
		 */
		this.data = data;
		/**
		 * The index of the level
		 * @type {number}
		 */
		this.index = index;
		/**
		 * The scale of the level
		 * @type {number}
		 */
		this.scale = scale;
		/**
		 * The right shift of the level
		 * @type {number}
		 */
		this.right = right;
		/**
		 * The down shift of the level
		 * @type {number}
		 */
		this.down = down;
	}

	/**
	 * Render the level into the DOM
	 * @param {HTMLElement} container The container to render the level into
	 */
	render(container: HTMLElement, state: GameState) {
		for (const [y, row] of this.data.split('\n').entries()) {
			console.log(row);
			for (const [x, char] of row.split('').entries()) {
				if (char === '.') continue;
				console.log(char);
				state.actors.push(
					createActor(
						getActorTypeFromChar(char),
						new Point(x + this.right, y + this.down),
						this.scale
					)
				);
			}
		}
		container.innerHTML = state.actors.map(e => e.dom.outerHTML).join('');
	}

	/**
	 * @returns The height of the level
	 */
	get height() {
		return this.data.split('\n').length;
	}

	/**
	 * @returns The width of the level
	 */
	get width() {
		return Math.max(...this.data.split('\n').map(e => e.length));
	}
}
