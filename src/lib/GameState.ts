import { BaseActor } from './BaseActor';
import { Level } from './Level';
import { LevelManager } from './LevelManager';
import { Status } from './Util';

export class GameState {
	levels: LevelManager;
	current: Level;
	actors: BaseActor[];
	status: Status;
	constructor(
		levels: LevelManager,
		current: Level,
		actors: BaseActor[],
		status: Status
	) {
		this.levels = levels;
		this.current = current;
		this.actors = actors;
		this.status = status;
	}

	nextLevel() {
		const next = this.levels.get(this.current.index + 1);
		if (!next) throw new Error('No next level');
		this.current = next;
		this.current.render(document.getElementById('game')!);
		this.status = Status.Playing;
		return this;
	}

	get player() {
		return this.actors.find(a => a.type == 'player');
	}
}
