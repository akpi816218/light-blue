import RootLayout from '@/components/Layout';
import { createRoot } from 'react-dom/client';

if (!window.location.pathname.endsWith('/')) window.location.pathname += '/';
createRoot(document.getElementById('root')!).render(
	<RootLayout>
		<main className="w-screen h-screen flex flex-col items-center justify-center font-semibold text-3xl"></main>
	</RootLayout>
);
