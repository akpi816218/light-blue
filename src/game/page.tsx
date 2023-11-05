import RootLayout from '@/components/Layout';
import { GameState } from '@/lib/GameState';
import { Level } from '@/lib/Level';
import { LevelManager } from '@/lib/LevelManager';
import { createRoot } from 'react-dom/client';

createRoot(document.getElementById('root')!).render(
	<RootLayout>
		<div
			className="w-screen h-screen flex flex-col items-center justify-center font-semibold text-3xl"
			id="game"
		/>
	</RootLayout>
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
..#..............=.#..
..#.........o.o....#..
..#.@......#####...#..
..#####............#..
......#++++++++++++#..
......##############..
......................`
			)
		])
	);
});
