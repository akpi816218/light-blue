import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { dirname, join, resolve } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [react()],
	root: 'src',
	server: {
		cors: true
	},
	appType: 'mpa',
	build: {
		rollupOptions: {
			input: {
				main: resolve(join(__dirname, 'src', 'index.html')),
				404: resolve(join(__dirname, 'src', '404.html')),
				game: resolve(join(__dirname, 'src', 'game', 'index.html'))
			}
		},
		outDir: '../dist'
	},
	resolve: {
		alias: {
			'@': resolve(join(__dirname, 'src'))
		}
	},
	publicDir: 'public'
});
