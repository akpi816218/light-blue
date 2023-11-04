import { Point } from './Point';

/**
 * @class Represents a point in 2D space.
 */
export class Vector {
	origin: Point;
	angle: number;
	magnitude: number;
	/**
	 * Create a point
	 * @param {Point} origin The x coordinate
	 * @param {number} angle The y coordinate
	 * @param {number} magnitude The angle of the vector
	 */
	constructor(origin: Point, angle: number, magnitude: number) {
		this.origin = origin;
		this.angle = angle;
		this.magnitude = magnitude;
	}

	plus(other: Point) {
		return new Point(this.origin.x + other.x, this.origin.y + other.y);
	}

	multiply(factor: number) {
		return new Point(this.origin.x * factor, this.origin.y * factor);
	}
}
