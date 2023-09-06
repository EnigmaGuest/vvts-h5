import type { AxiosRequestConfig } from "axios";
import { useAuthStore } from "@/store";

/**
 * 刷新token
 * @param axiosConfig - token失效时的请求配置
 */
export async function handleRefreshToken(axiosConfig: AxiosRequestConfig) {
	const { resetAuthStore } = useAuthStore();
	resetAuthStore();
	return null;
}
