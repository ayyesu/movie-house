import {defineConfig} from 'vite';
import react from '@vitejs/plugin-react-swc';
import Vue from '@vitejs/plugin-vue';

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [react(), Vue()],
    optimizeDeps: {
        exclude: ['prop-types'],
    },
});
