export const HISTORY: { type: 'browser' | 'hash' | 'memory' } = {
  type: 'browser',
};

// Proxy Config
const TARGET = 'http://';
const TARGET1 = 'http://';

export const PROXY_CONFIG = {
  defaultTarget: TARGET,
  rules: [
    { from: '/managerapi', to: TARGET },
    { from: '/user', to: TARGET1 },
  ],
};
