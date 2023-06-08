import config from './config';

const publicPath = '/fe-prefix/';

export default {
  publicPath,
  favicons: [`${publicPath}static/defaultLogo.png`],
  headScripts: [
    ...(config.headScripts as any[]),
    'window.__INJECTED_PUBLIC_PATH_BY_QIANKUN__ = undefined;',
  ],
};
