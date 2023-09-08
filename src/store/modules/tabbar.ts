import {defineStore} from "pinia";
import {TabBarRoute} from "@/typings/route";
import {useRoute} from "vue-router";

interface TabBarRouteState {
    routes: TabBarRoute[]
    active: string
}

export const useTabBarStore = defineStore({
    id: 'tabBar-store',
    state: (): TabBarRouteState => ({
        routes: [] as TabBarRoute[],
        active: "" as string
    }),
    getters: {},
    actions: {
        /**
         * 初始化tabbar路由
         * @param routes
         */
        initTabBarRoutes(routes: TabBarRoute[]) {
            this.routes = routes
            this.active = routes[0].path
        },
        /**
         * 激活tabbar路由
         * @param path
         */
        activeTabBarRoute(path: string) {
            this.active = path
        },
        /**
         * 判断是否是tabbar路由
         * @param path
         */
        isTabBarRoute(path?: string) {
            if (!path) {
                const route = useRoute()
                path = route.path
            }
            return this.routes.some(route => route.path === path)
        }
    }
})