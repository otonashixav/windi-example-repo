import { defineConfig } from 'vite';
import solidPlugin from 'vite-plugin-solid';
import { resolve } from 'path';
import WindiCSS from 'vite-plugin-windicss';

export default defineConfig({
	plugins: [solidPlugin(), WindiCSS()],
	build: {
		target: 'es2020',
	},
	resolve: {
		alias: {
			src: resolve(__dirname, 'src'),
		},
	},
});
