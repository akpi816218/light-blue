import { getClassFromChar } from './Util';
import { Root } from 'react-dom/client';

/**
 * @class Represents a level
 */
export class Level {
	index: number;
	data: string;
	scale: number;
	/**
	 * Create a level
	 * @param {number} index The index of the level
	 * @param {string} data The level data
	 * @param {number} scale The scale of the level
	 */
	constructor(index: number, data: string, scale: number = 2) {
		if (data.replaceAll(/[@o#+=|<>^v.]/g, '').replaceAll('\n', '').length > 0)
			throw new Error('Invalid level data');
		this.data = data;
		this.index = index;
		this.scale = scale;
	}

	/**
	 * Render the level into the DOM
	 */
	render(container: Root) {
		for (const [y, row] of this.data.split('\n').entries()) {
			for (const [x, char] of row.split('').entries()) {
				container.render(
					<div
						className={`tile bottom-[${y * this.scale}em] left-[${
							x * this.scale
						}em] ${getClassFromChar(char)}`}
					/>
				);
			}
		}
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
