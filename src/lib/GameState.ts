import { Root, createRoot } from 'react-dom/client';
import { BaseActor } from './BaseActor';
import { Level } from './Level';
import { LevelManager } from './LevelManager';
import { Status } from './Util';

export class GameState {
	root: Root;
	levels: LevelManager;
	current: Level;
	actors: BaseActor[];
	status: Status;
	constructor(root: HTMLElement, levels: LevelManager) {
		this.root = createRoot(root);
		this.levels = levels;
		this.current = levels.first()!;
		this.actors = [];
		this.status = Status.Playing;

		this.current.render(this.root);
	}

	nextLevel() {
		const next = this.levels.get(this.current.index + 1);
		if (!next) throw new Error('No next level');
		this.current = next;
		this.current.render(this.root);
		this.status = Status.Playing;
		return this;
	}

	get player() {
		return this.actors.find(a => a.type == 'player');
	}
}
