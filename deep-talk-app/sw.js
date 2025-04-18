
self.addEventListener('install', e => {
  e.waitUntil(
    caches.open('deep-talk-cache').then(cache => {
      return cache.addAll([
        './deep-talk-pwa.html',
        './manifest.json'
      ]);
    })
  );
});

self.addEventListener('fetch', e => {
  e.respondWith(
    caches.match(e.request).then(response => {
      return response || fetch(e.request);
    })
  );
});
