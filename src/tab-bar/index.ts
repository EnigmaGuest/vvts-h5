import {TabBarRoute} from "@/typings/route";

// path必须再pageRoutes中注册
export const tabBarRoutes: TabBarRoute[] = [
    {
        path: "/home",
        text: "首页",
        icon: "fa-solid fa-spa",
    },
    {
        path: "/mine",
        text: "我的",
        icon: "fa-solid fa-face-smile",
    }
]
