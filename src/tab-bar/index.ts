// tabbar路由 必须再pageRoutes中注册
import {TabBarRoute} from "@/typings/route";

export const tabBarRoutes: TabBarRoute[] = [
    {
        path: "/home",
        text: "首页",
        icon: "solar:home",
    },
    {
        path: "/about",
        text: "关于",
        icon: "solar:account",
    }
]
