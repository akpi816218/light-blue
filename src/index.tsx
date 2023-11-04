import RootLayout from '@/components/Layout';
import { createRoot } from 'react-dom/client';

if (!window.location.pathname.endsWith('/')) window.location.pathname += '/';
createRoot(document.getElementById('root')!).render(
	<RootLayout>
		<h1>Home</h1>
		<p>Home page content</p>
	</RootLayout>
);
