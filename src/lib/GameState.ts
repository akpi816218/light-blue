import { BaseActor } from './actors/BaseActor';
import { Level } from './Level';
import { LevelManager } from './LevelManager';
import { ActorType, Status } from './Util';
import { Player } from './actors/Player';

export class GameState {
	root: HTMLElement;
	levels: LevelManager;
	current: Level;
	actors: BaseActor[];
	status: Status;
	constructor(root: HTMLElement, levels: LevelManager) {
		this.root = root;
		this.levels = levels;
		this.current = levels.first()!;
		this.actors = [];
		this.status = Status.Playing;
		this.current.render(this.root, this);
	}

	/**
	 * Go to the next level
	 * @returns {this} The game state.
	 */
	nextLevel(): this {
		const next = this.levels.get(this.current.index + 1);
		if (!next) throw new Error('No next level');
		this.current = next;
		this.current.render(this.root, this);
		this.status = Status.Playing;
		return this;
	}

	/**
	 * Get the player.
	 * @returns {Player} The player.
	 */
	get player(): Player {
		return this.actors.find(a => a.type === ActorType.Player) as Player;
	}
}
