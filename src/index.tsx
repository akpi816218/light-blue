import RootLayout from '@/components/Layout';
import { faRocket } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Button } from '@nextui-org/react';
import { createRoot } from 'react-dom/client';

createRoot(document.getElementById('root')!).render(
	<RootLayout>
		<main className="w-screen h-screen flex flex-col items-center justify-center font-semibold text-3xl">
			<h1>Light Blue</h1>
			<p>A light platformer game built with TypeScript, React, and Vite.</p>
			<Button
				color="primary"
				className="text-xl"
				variant="shadow"
				endContent={<FontAwesomeIcon icon={faRocket} />}
				onClick={() => {
					window.location.href = '/game/';
				}}
			>
				Play now!
			</Button>
		</main>
	</RootLayout>
);
