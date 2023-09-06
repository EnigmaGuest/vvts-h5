/** 请求服务的环境配置 */
// @ts-ignore
type ServiceEnv = Record<ServiceEnvType, ServiceEnvConfig>;

/** 不同请求服务的环境配置 */
const serviceEnv: ServiceEnv = {
  dev: {
    url: 'http://192.168.110.6:8787/api/v1/manage'
  },
  test: {
    url: 'http://localhost:8080'
  },
  prod: {
    url: 'http://192.168.110.6:8787/api/v1/manage'
  }
};

/**
 * 获取当前环境模式下的请求服务的配置
 * @param env 环境
 */
// @ts-ignore
export function getServiceEnvConfig(env: ImportMetaEnv): ServiceEnvConfigWithProxyPattern {
  const { VITE_SERVICE_ENV = 'dev' } = env;

  const config = serviceEnv[VITE_SERVICE_ENV];

  return {
    ...config,
    proxyPattern: '/proxy'
  };
}
