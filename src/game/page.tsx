import { GameState } from '@/lib/GameState';
import { Level } from '@/lib/Level';
import { LevelManager } from '@/lib/LevelManager';
import { createRoot } from 'react-dom/client';

createRoot(document.getElementById('root')!).render(
	<div id="game" className="w-screen h-screen p-8 font-semibold bg-sky-400" />
);

window.addEventListener('load', () => {
	const root = document.getElementById('game');
	if (!root) throw new Error('Root element not found');

	const State = new GameState(
		root,
		new LevelManager([
			new Level(
				0,
				`......................
..#................#..
..#................#..
..#.........o.o....#..
..#.@......#####...#..
..#####............#..
......#++++++++++++#..
......##############..
......................`,
				{
					right: 3,
					down: 4
				}
			)
		])
	);
});
