// service-worker.js

const CACHE_NAME = 'liquor-list-cache-v1';
const urlsToCache = [
    '/',
    '/index.html',
    '/browse.html',
    '/search.html',
    '/liquor-looksee.html',
    '/log.html',
    '/profile.html',
    '/css/styles.css',
    '/js/index.js',
    '/js/browse.js',
    '/js/search.js',
    '/js/liquor-looksee.js',
    '/js/log.js',
    '/js/profile.js',
    '/icons/icon-192x192.png',
    '/icons/icon-512x512.png'
];

self.addEventListener('install', (event) => {
    event.waitUntil(
        caches.open(CACHE_NAME)
            .then((cache) => cache.addAll(urlsToCache))
    );
});

self.addEventListener('fetch', (event) => {
    event.respondWith(
        caches.match(event.request)
            .then((response) => response || fetch(event.request))
    );
});
