import type {Plugin} from 'vite'
import {vue} from './vue'
import {vueJsx} from './vue-jsx'
import {configStyleImport} from './style-import'
import {configViteCompression} from "./compression";
import {configHtml} from "./html";
import {configViteComponents} from "./components";
import {configWindiCSS} from "./windicss";

export default function createVitePlugins({variables}: { variables: any }) {
    const opt = {variables: variables}
    const vitePlugins: (Plugin | Plugin[])[] = [
        vue(),
        vueJsx(),
        configStyleImport(),
        configViteCompression(),
        configViteComponents(),
        configWindiCSS()
    ];
    vitePlugins.push(configHtml(opt))
    return vitePlugins;
}
