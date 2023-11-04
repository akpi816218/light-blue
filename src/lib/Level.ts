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
		if (data.replaceAll(/[o#+=|<>^v.]/g, ''))
			throw new Error('Invalid level data');
		this.data = data;
		this.index = index;
		this.scale = scale;
	}

	/**
	 * Render the level into the DOM
	 */
	render(container: HTMLElement) {
		for (const [y, row] of this.data.split('\n').entries()) {
			for (const [x, char] of row.split('').entries()) {
				const element = document.createElement('div');
				element.classList.add('tile');
				element.classList.add(char);
				element.style.left = `${x * this.scale}em`;
				element.style.top = `${y * this.scale}em`;
				container.appendChild(element);
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
