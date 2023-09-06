import { getServiceEnvConfig } from '~/.env-config';
import {createHookRequest, createRequest} from './request';

const { url, proxyPattern } = getServiceEnvConfig(import.meta.env);

const isHttpProxy = import.meta.env.VITE_HTTP_PROXY === 'Y';

export const request = createRequest({ baseURL: isHttpProxy ? proxyPattern : url });
export const hookRequest = createHookRequest({ baseURL: isHttpProxy ? proxyPattern : url });

