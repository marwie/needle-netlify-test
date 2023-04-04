import * as path from 'path';
import { defineConfig } from 'vite';
import viteCompression from 'vite-plugin-compression';
import basicSsl from '@vitejs/plugin-basic-ssl'

export default defineConfig(async ({ command }) => {

    const { needlePlugins, useGzip, loadConfig } = await import("@needle-tools/engine/plugins/vite/index.js");
    const needleConfig = await loadConfig();

    return {
        base: "./",
        // publicDir: "./assets", // this would copy all assets in the outdir (but not inside assets)
        assetsInclude: ['*'],
        // logLevel: 'info',

        plugins: [
            basicSsl(),
            useGzip(needleConfig) ? viteCompression({ deleteOriginFile: true }) : null,
            needlePlugins(command, needleConfig),
            {
                name: 'post-build',
                apply: 'build',
                async closeBundle() {
                    const fs = require('fs-extra');
                    // copy assets dir
                    const assetsDir = path.resolve(__dirname, 'assets');
                    const outDir = path.resolve(__dirname, 'dist/assets');
                    await fs.copy(assetsDir, outDir, { overwrite: true });
                    // copy include dir
                    const includeDir = path.resolve(__dirname, 'include');
                    const outIncludeDir = path.resolve(__dirname, 'dist/include');
                    await fs.copy(includeDir, outIncludeDir, { overwrite: true });
                }
            }
        ],

        server: {
            // hmr: false,
            // watch: ["generated/**"]
            https: true,
            proxy: { // workaround: specifying a proxy skips HTTP2 which is currently problematic in Vite since it causes session memory timeouts.
                'https://localhost:3000': 'https://localhost:3000'
            },
            watch: {
                awaitWriteFinish: {
                    stabilityThreshold: 500,
                    pollInterval: 1000
                }
            },
            strictPort: true,
            port: 3000,
        },
        build: {
            outDir: "./dist",
            emptyOutDir: true,
            keepNames: true,
        },

        resolve: {
            alias: {
                'three': () => path.resolve(__dirname, 'node_modules/three'),
                '@needle-tools/engine': () => path.resolve(__dirname, 'node_modules/@needle-tools/engine'),
            }
        }
    }
});