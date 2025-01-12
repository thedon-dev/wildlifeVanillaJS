const CACHE_NAME = "my-pwa-cache-v1";
const urlsToCache = [
  "/",
  "/index.html",
  "/pages/about.html",
  "/pages/article.html",
  "/pages/articles.html",
  "/pages/discovermore.html",
  "/pages/hotline.html",
  "/pages/login.html",
  "/styles/about.css",
  "/styles/article.css",
  "/styles/articles.css",
  "/styles/discovermore.css",
  "/styles/login.css",
  "/styles/footer.css",
  "/styles/navbar.css",
  "/script.js",
  "/javascript/article.js",
  "/javascript/articles.js",
  "/javascript/homepage.js",
  "/javascript/login.js",
  "/javascript/navbar.js",

  "/icon-192x192.png",
  "/icon-512x512.png"
];

// Install the service worker and cache assets
self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(urlsToCache);
    })
  );
});

// Serve cached assets when offline
self.addEventListener("fetch", (event) => {
  event.respondWith(
    caches.match(event.request).then((response) => {
      return response || fetch(event.request);
    })
  );
});

// Update the service worker
self.addEventListener("activate", (event) => {
  const cacheWhitelist = [CACHE_NAME];
  event.waitUntil(
    caches.keys().then((cacheNames) =>
      Promise.all(
        cacheNames.map((cacheName) => {
          if (!cacheWhitelist.includes(cacheName)) {
            return caches.delete(cacheName);
          }
        })
      )
    )
  );
});
