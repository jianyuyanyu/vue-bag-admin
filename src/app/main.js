import {app, pina, router, framework, useApisPlugin ,http} from "@/packages/install.js"
import {useNaivePlugin} from "@/app/plugins/naive-plugin/index.js";
import {useRouterPlugin} from "@/app/plugins/router-plugin/index.js";
import {useLayoutPlugin} from "@/app/plugins/layout-plugin/index.js";
import {useIconPlugin} from "@/app/plugins/icon-plugin/index.js";
import {useLanguagePlugin} from "@/app/plugins/language-plugin/index.js";

const apis = ['/auth/local/register','/auth/local','/secretkey','/menus','/classify']

framework.use(useApisPlugin,apis)
framework.use(useNaivePlugin)
framework.use(useIconPlugin)
framework.use(useLayoutPlugin)
framework.use(useLanguagePlugin)
framework.use(useRouterPlugin)
app.mount("#app")

app.config.errorHandler = (err, instance, info) => {
    console.log(err)
    console.log(info)
}

// 当应用作为注入上下文执行回调函数，在这里可以获取全局需要运行的程序
app.runWithContext((res)=>{
    window.$apis.Secretkey.httpGet().then((data) => {
    }).catch((err)=>{
        console.log(err)
    })
})
