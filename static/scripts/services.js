const CACHE_NAME = 'cache';
const urlsToCache = [
  './styles.css',
  './scripts/services.js',
  './index.html',
  './icon-ruffle.svg',
  './icon-eye.png',
  './favicon.png',
  './about.html',
  './scripts/manifest.json',
  './scripts/vortex.js',
  './projects/cloakify/index.html',
  './projects/cloakify/index.js',
  './projects/cloakify/styles.css',
  './projects/index.html',
  './projects/flash-emulator/6a842d2e726efcf6d858.wasm',
  './projects/flash-emulator/339.index.js',
  './projects/flash-emulator/index.html',
  './projects/flash-emulator/index.js',
  './projects/flash-emulator/index.js.map',
  './projects/flash-emulator/logo-anim.swf',
  './projects/flash-emulator/logo.svg',
  './projects/flash-emulator/swfs.json'
];

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then((cache) => cache.addAll(urlsToCache))
      .then(() => self.skipWaiting())
      .catch((error) => {
        console.error('Error caching files:', error);
      })
  );
});

self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request)
      .then((response) => response || fetch(event.request))
  );
});
