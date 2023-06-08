import { resolve } from 'path';
import { defineConfig } from '@umijs/max';
import { getProxy } from '../umi/getProxy';
import { HISTORY, PROXY_CONFIG } from './constants';

const publicPath = '/';

export default defineConfig({
  define: { 'process.env.UMI_ENV': process.env.UMI_ENV },
  base: '/',
  hash: true,
  history: HISTORY,
  publicPath,
  manifest: { fileName: 'build-manifest.json' },
  proxy: getProxy(PROXY_CONFIG),
  favicons: [`${publicPath}static/defaultLogo.png`],
  lessLoader: { math: 'always' },
  cssLoader: {
    modules: { localIdentName: '[local]' },
  },
  targets: { chrome: 60 },
  chainWebpack(config: any) {
    config.resolve.modules.add(resolve(__dirname, '../src'));
    config.module
      .rule('worker-loader')
      .test(/\.worker\.js$/i)
      .use('worker-loader')
      .loader('file-loader');
  },
  qiankun: {
    master: {},
    slave: { base: '/' },
  },
  npmClient: 'pnpm',
});
