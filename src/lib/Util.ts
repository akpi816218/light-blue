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
	LavaHorizontal = 'lava-horizontal',
	LavaVertical = 'lava-vertical',
	LavaDripDown = 'lava-drip',
	LavaDripUp = 'lava-drip-up',
	LavaDripLeft = 'lava-drip-left',
	LavaDripRight = 'lava-drip-right',
	Coin = 'coin',
	Wall = 'wall'
}

export function getClassFromChar(
	char: 'o' | '#' | '+' | '=' | '|' | '<' | '>' | '^' | 'v' | '.'
): ActorType {
	switch (char) {
		case 'o':
			return ActorType.Coin;
		case '#':
			return ActorType.Wall;
		case '+':
			return ActorType.Lava;
		case '=':
			return ActorType.LavaHorizontal;
		case '|':
			return ActorType.LavaVertical;
		case '<':
			return ActorType.LavaDripLeft;
		case '>':
			return ActorType.LavaDripRight;
		case '^':
			return ActorType.LavaDripUp;
		case 'v':
			return ActorType.LavaDripDown;
		case '.':
			return ActorType.Wall;
		default:
			throw new Error('Invalid character');
	}
}
