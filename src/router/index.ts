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
        component: () => import("../views/HomeView.vue"),
        meta: {title: "首页", navigationStyle: "default", backgroundColor: "#fff", textColor: "dark"}
    },
    {
        name: "about",
        path: "/about",
        component: () => import("../views/AboutView.vue"),
        meta: {title: "关于", navigationStyle: "default", backgroundColor: "#fff", textColor: "dark"}
    }
]

export default setupRouter(pageRoutes)
