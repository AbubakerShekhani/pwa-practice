const CACHE_NAME = "version-1";
const urlsToCache = [
  '/',
  'index.html',
                      '/static/css/main.5f361e03.chunk.css',
                      '/static/js/2.b4a7e716.chunk.js',
                    '/static/js/main.0493d116.chunk.js',
                    '/static/js/runtime-main.2941fff3.js',
                  '/logo192.png'];

const self = this;

// Install SW
self.addEventListener('install', (event) => {
    event.waitUntil(
        caches.open(CACHE_NAME)
            .then((cache) => {
                console.log('Opened cache');

                return cache.addAll(urlsToCache);
            })
    )
});
