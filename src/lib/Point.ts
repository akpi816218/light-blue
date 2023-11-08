/**
 * @class Represents a point in 2D space.
 */
export class Point {
	x: number;
	y: number;
	/**
	 * Create a point
	 * @param {number} x The x coordinate
	 * @param {number} y The y coordinate
	 */
	constructor(x: number, y: number) {
		this.x = x;
		this.y = y;
	}

	/**
	 * @returns {number} The distance between this point and another point
	 */
	distanceTo(point: Point): number {
		return Math.sqrt(
			Math.abs(point.x - this.x) ** 2 + Math.abs(point.y - this.y) ** 2
		);
	}

	/**
	 * @returns {number} The angle between this point and another point
	 */
	angleTo(point: Point): number {
		return Math.atan((point.y - this.y) / (point.x - this.x));
	}

	/**
	 * Move the point up
	 * @param {number} amount The amount to move the point
	 * @returns {this} The updated point
	 */
	up(amount: number): this {
		this.y -= amount;
		return this;
	}

	/**
	 * Move the point down
	 * @param {number} amount The amount to move the point
	 * @returns {this} The updated point
	 */
	down(amount: number): this {
		this.y += amount;
		return this;
	}

	/**
	 * Move the point left
	 * @param {number} amount The amount to move the point
	 * @returns {this} The updated point
	 */
	left(amount: number): this {
		this.x -= amount;
		return this;
	}

	/**
	 * Move the point right
	 * @param {number} amount The amount to move the point
	 * @returns {this} The updated point
	 */
	right(amount: number): this {
		this.x += amount;
		return this;
	}

	/**
	 * Scale the point away from the origin
	 * @param {number} factor The factor to move the point by
	 * @returns {this} The updated point
	 */
	multiply(factor: number): this {
		this.x *= factor;
		this.y *= factor;
		return this;
	}
}
