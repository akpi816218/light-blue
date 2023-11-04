import { Collection } from '@discordjs/collection';
import { RestOrArray, normalizeArray } from './Util';
import { Level } from './Level';

export class LevelManager extends Collection<number, Level> {
	constructor(data: RestOrArray<Level>) {
		super(
			normalizeArray(data)
				.sort(e => e.index)
				.map(e => [e.index, e])
		);
	}
}
