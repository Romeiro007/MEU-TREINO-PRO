const cacheName = 'treino-v1';
const assets = ['./', './index.html'];

// Instala e faz o cache dos arquivos
self.addEventListener('install', e => {
  e.waitUntil(caches.open(cacheName).then(cache => cache.addAll(assets)));
});

// Responde mesmo se estiver offline
self.addEventListener('fetch', e => {
  e.respondWith(caches.match(e.request).then(res => res || fetch(e.request)));
});