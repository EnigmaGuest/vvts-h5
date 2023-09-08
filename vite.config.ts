
import {defineConfig, loadEnv} from 'vite'
import {createViteProxy, getRootPath, getSrcPath, setupVitePlugins, viteDefine} from "./build";
// @ts-ignore
import {getServiceEnvConfig} from "./.env-config";
import path from "path";

export default defineConfig((configEnv) => {
    // @ts-ignore
    const viteEnv = loadEnv(configEnv.mode, process.cwd()) as unknown as ImportMetaEnv;
    const rootPath = getRootPath();
    const srcPath = getSrcPath();
    const isOpenProxy = viteEnv.VITE_HTTP_PROXY === 'Y';
    const envConfig = getServiceEnvConfig(viteEnv);
    return {
        define: viteDefine,
        plugins: setupVitePlugins(viteEnv),
        resolve: {
            alias: {
                '~': rootPath,
                '@': srcPath,
                "components": path.resolve(__dirname, "components")
            }
        },
        server: {
            host: '0.0.0.0',
            port: 4000,
            open: true,
            proxy: createViteProxy(isOpenProxy, envConfig)
        },
        css: {
        }
    }
})
