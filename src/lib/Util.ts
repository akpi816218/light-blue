import { BaseActor } from './actors/BaseActor';
import { Coin } from './actors/Coin';
import { Lava } from './actors/Lava';
import { Player } from './actors/Player';
import { Wall } from './actors/Wall';
import { Point } from './Point';
import { Vector } from './Vector';

/**
 * @see https://github.com/discordjs/discord.js/blob/a9e1f6026c8d978442d67cb79b0c4545a49df6d2/packages/builders/src/util/normalizeArray.ts
 * Normalizes data that is a rest parameter or an array into an array with a depth of 1.
 *
 * @typeParam T - The data that must satisfy {@link RestOrArray}.
 * @param arr - The (possibly variadic) data to normalize
 */
export function normalizeArray<T>(arr: RestOrArray<T>): T[] {
	if (Array.isArray(arr[0])) return arr[0];
	return arr as T[];
}

/**
 * @see https://github.com/discordjs/discord.js/blob/a9e1f6026c8d978442d67cb79b0c4545a49df6d2/packages/builders/src/util/normalizeArray.ts
 * Represents data that may be an array or came from a rest parameter.
 *
 * @remarks
 * This type is used throughout builders to ensure both an array and variadic arguments
 * may be used. It is normalized with {@link normalizeArray}.
 */
export type RestOrArray<T> = T[] | [T[]];

export enum Status {
	Playing = 'playing',
	Won = 'won',
	Lost = 'lost'
}

export enum ActorType {
	Base = 'base',
	Player = 'player',
	Lava = 'lava',
	// LavaHorizontal = 'lava-horizontal',
	// LavaVertical = 'lava-vertical',
	// LavaDripDown = 'lava-drip',
	// LavaDripUp = 'lava-drip-up',
	// LavaDripLeft = 'lava-drip-left',
	// LavaDripRight = 'lava-drip-right',
	Coin = 'coin',
	Wall = 'wall'
}

/**
 * Create an actor from an ActorType
 * @param {ActorType.Player} type The ActorType to create
 * @param {Point} pos The position of the actor
 * @param {number} scale The scale of the actor
 * @returns {Player} The actor
 */
export function createActor(
	type: ActorType.Player,
	pos: Point,
	scale: number
): Player;
/**
 * Create an actor from an ActorType
 * @param {ActorType.Wall} type The ActorType to create
 * @param {Point} pos The position of the actor
 * @param {number} scale The scale of the actor
 * @returns {Wall} The actor
 */
export function createActor(
	type: ActorType.Wall,
	pos: Point,
	scale: number,
	speed?: Vector
): Wall;
/**
 * Create an actor from an ActorType
 * @param {ActorType.Coin} type The ActorType to create
 * @param {Point} pos The position of the actor
 * @param {number} scale The scale of the actor
 * @returns {Coin} The actor
 */
export function createActor(
	type: ActorType.Coin,
	pos: Point,
	scale: number
): Coin;

/**
 * Create an actor from an ActorType
 * @param {ActorType.Lava} type The ActorType to create
 * @param {Point} pos The position of the actor
 * @param {number} scale The scale of the actor
 * @returns {Lava} The actor
 */
export function createActor(
	type: ActorType.Lava,
	pos: Point,
	scale: number
): Lava;

/**
 * Create an actor from an ActorType
 * @param {ActorType} type The ActorType to create
 * @param {Point} pos The position of the actor
 * @param {number} scale The scale of the actor
 * @returns {BaseActor} The actor
 */
export function createActor(
	type: ActorType,
	pos: Point,
	scale: number,
	speed?: Vector
): BaseActor;

export function createActor(
	type: ActorType,
	pos: Point,
	scale: number
): BaseActor {
	switch (type) {
		case ActorType.Player:
			return new Player(pos, new Vector(pos, 0, 0), scale);
		case ActorType.Wall:
			return new Wall(pos, scale);
		case ActorType.Coin:
			return new Coin(pos, scale);
		case ActorType.Lava:
			return new Lava(pos, scale);
		default:
			throw new Error('Invalid actor type');
	}
}

/**
 * Gets an ActorType from a character
 * @param {string} char The character to get the ActorType from
 * @returns {ActorType} The ActorType
 */
export function getActorTypeFromChar(char: string): ActorType {
	switch (char) {
		case '@':
			return ActorType.Player;
		case 'o':
			return ActorType.Coin;
		case '#':
			return ActorType.Wall;
		case '+':
			return ActorType.Lava;
		// case '=':
		// 	return ActorType.LavaHorizontal;
		// case '|':
		// 	return ActorType.LavaVertical;
		// case '<':
		// 	return ActorType.LavaDripLeft;
		// case '>':
		// 	return ActorType.LavaDripRight;
		// case '^':
		// 	return ActorType.LavaDripUp;
		// case 'v':
		// 	return ActorType.LavaDripDown;
		case '.':
			throw new Error(
				'Invalid character: Space (.) should not fall into this function'
			);
		default:
			throw new Error('Invalid character');
	}
}
