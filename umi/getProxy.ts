import { API_PREFIX } from '../config/constants';

type ProxyOptions = object;

const getProxyConfig = (target = '', config = {}): ProxyOptions => ({
  target,
  changeOrigin: true,
  ws: false,
  onProxyReqWs: (proxyReq: any) => {
    proxyReq.setHeader('origin', target);
  },
  secure: false,
  logLevel: 'info',
  bypass: (req: any) => {
    const {
      headers,
      originalUrl,
      _parsedUrl: { pathname },
    } = req;
    const pathnameLC = pathname.toLowerCase();
    // download file
    if (
      !pathnameLC.endsWith('.js') &&
      !pathnameLC.endsWith('.css') &&
      (pathnameLC.includes('download') || pathnameLC.includes('export'))
    ) {
      // console.log(
      //   `Resources or download proxy to ${target}${originalUrl} for ${originalUrl}`,
      // );
      return undefined;
    }
    // only proxy for xhr and image request
    if (headers['x-requested-with'] !== 'XMLHttpRequest') {
      // console.log(`No proxy for ${originalUrl}`);
      return originalUrl;
    }
    // console.log(`Default proxy to ${target}${originalUrl} for ${originalUrl}`);
    return undefined;
  },
  ...config,
});

interface Param {
  defaultTarget: string;
  rules?: Array<{ from: string; to: string }>;
}

export const getProxy = ({ defaultTarget = '', rules = [] }: Param) => {
  const proxy: {
    [key: string]: ProxyOptions;
  } = {};
  rules.forEach(({ from, to, ...config }) => {
    proxy[from] = getProxyConfig(to, config);
  });
  if (defaultTarget) {
    proxy[API_PREFIX] = getProxyConfig(defaultTarget, {
      pathRewrite: { [`^${API_PREFIX}`]: '' },
    });
  }
  return proxy;
};
