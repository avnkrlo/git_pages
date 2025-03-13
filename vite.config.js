import { defineConfig } from 'vite';
import tailwindcss from '@tailwindcss/vite';
import laravel from 'laravel-vite-plugin';
import vue from '@vitejs/plugin-vue';
import path from 'path';

export default defineConfig({
    plugins: [
        laravel({
            input: ['resources/css/app.css', 'resources/js/app.js'],
            ssr: 'resources/js/ssr.js',
            refresh: true,
        }),
        vue({
            template: {
                compilerOptions: {

                },
            },
        }),
        tailwindcss(),
    ],
    resolve: {
        alias: {
            '@': 'resources/js',
            'ziggy-js': path.resolve('./vendor/tightenco/ziggy/dist/index.esm.js'),
            '@flowbite': '../node_modules/flowbite'
        }
    }
});
