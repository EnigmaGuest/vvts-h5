import {PageRoute} from "@/typings/route";
import {setupRouter} from "@/utils";
// 所有的页面路由
let pageRoutes: PageRoute[] = [
    {
        path: "/",
        redirect: "/home"
    },
    {
        name: "home",
        path: "/home",
        component: () => import("../views/home/index.vue"),
        meta: {title: "首页", navigationStyle: "default", backgroundColor: "#fff", textColor: "dark"}
    },
    {
        name: "mine",
        path: "/mine",
        component: () => import("../views/mine/index.vue"),
        meta: {title: "我的", navigationStyle: "default", backgroundColor: "#fff", textColor: "dark"}
    },
    {
        name: "components-echarts",
        path: "/components/echarts",
        component: () => import("../views/components/echarts.vue"),
        meta: {title: "echarts", navigationStyle: "default", backgroundColor: "#fff", textColor: "dark"}
    },
    {
        name: "components-icon",
        path: "/components/icon",
        component: () => import("../views/components/icon.vue"),
        meta: {title: "图标", navigationStyle: "default", backgroundColor: "#fff", textColor: "dark"}
    }
]

export default setupRouter(pageRoutes)
