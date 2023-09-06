import {defineStore} from "pinia";


export const useAuthStore = defineStore({
    id: "authStore",
    state: ()=>{
        return {
            token: "",
            userInfo: {}
        }
    },
    getters: {
        /** 是否登录 */
        isLogin(state) {
            return Boolean(state.token);
        }
    },
    actions: {
        /** 重置auth状态 */
        resetAuthStore() {

        }
    },
    persist: {
        enabled: true,
    }
});