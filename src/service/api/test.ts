import {  request } from "../request";

/**
 * 获取验证码
 * @param phone - 手机号
 * @returns - 返回boolean值表示是否发送成功
 */
export function fetchSmsCode(phone: string) {
    return request.post<boolean>("/getSmsCode", { phone });
}