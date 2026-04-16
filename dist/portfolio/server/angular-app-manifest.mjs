
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "route": "/"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 18376, hash: '5a37be5dec9602e92d491485893e935e6c24a13e77a4cc8ef00559395043b871', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 16955, hash: '03dcc8e4ad75785e103111ca34b012d10d057c5583f7145edf4825cfe32b2f79', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 60681, hash: '25c62dc02a555bc653ac09872f21083a06103891f759d36f23d1bcbb4ae16ef5', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'styles-UT6SGQOJ.css': {size: 29085, hash: 'hvVliQGGQpo', text: () => import('./assets-chunks/styles-UT6SGQOJ_css.mjs').then(m => m.default)}
  },
};
