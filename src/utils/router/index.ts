import {PageRoute} from "@/typings/route";
import {createRouter, createWebHistory} from "vue-router";


export function setupRouter(pages: PageRoute[]) {
    return createRouter({
        history: createWebHistory(import.meta.env.VITE_BASE_URL),
        routes: page2Route(pages) as any
    })
}
function page2Route(pages: PageRoute[]) {
    if (!pages || !pages.length) return []
    return pages.map(page => {
        return {
            path: page.path,
            name: page?.name,
            component: page?.component,
            meta: page?.meta,
            redirect: page?.redirect
        }
    })
}