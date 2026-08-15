/* DCS-PWA-ADDALL-SAFE — one missing precache URL must not fail SW install */
try{if(self.Cache&&self.Cache.prototype&&self.Cache.prototype.addAll){var _dcsAddAll=self.Cache.prototype.addAll;self.Cache.prototype.addAll=function(u){var self2=this;return Promise.allSettled((u||[]).map(function(x){return self2.add(x).catch(function(){})})).then(function(){})}}}catch(_e){}
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open('arizon-static-v1').then((cache) => {
      return cache.addAll([
        '/',
        '/index.html',
        '/products.html',
        '/product.html',
        '/cart.html',
        '/checkout.html',
        '/about.html',
        '/contact.html',
        '/styles/main.css',
        '/styles/mobile.css',
        '/icon.svg',
        '/icon.svg',
        '/src/sw-register.js'
      ]);
    })
  );
  self.skipWaiting();
});

self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((keyList) => {
      return Promise.all(
        keyList.map((key) => {
          if (key !== 'arizon-static-v1') {
            return caches.delete(key);
          }
        })
      );
    })
  );
  self.clients.claim();
});

self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request).then((cached) => {
      return cached || fetch(event.request);
    })
  );
});