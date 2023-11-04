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
	 * @returns {Point} The new point
	 */
	up(amount: number): Point {
		return new Point(this.x, this.y - amount);
	}

	/**
	 * Move the point down
	 * @param {number} amount The amount to move the point
	 * @returns {Point} The new point
	 */
	down(amount: number): Point {
		return new Point(this.x, this.y + amount);
	}

	/**
	 * Move the point left
	 * @param {number} amount The amount to move the point
	 * @returns {Point} The new point
	 */
	left(amount: number): Point {
		return new Point(this.x - amount, this.y);
	}

	/**
	 * Move the point right
	 * @param {number} amount The amount to move the point
	 * @returns {Point} The new point
	 */
	right(amount: number): Point {
		return new Point(this.x + amount, this.y);
	}

	plus(other: Point) {
		return new Point(this.x + other.x, this.y + other.y);
	}

	multiply(factor: number) {
		return new Point(this.x * factor, this.y * factor);
	}
}
