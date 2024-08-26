self.addEventListener("install", (event) => {
  console.log("[Service Worker] Installing...");
  event.waitUntil(
    caches.open("my-cache-v1").then((cache) => {
      return cache.addAll([
        "/",
        "/styles/globals.css",
        "/script/main.js",
        "/icons/icon-192x192.png",
        "/icons/icon-512x512.png",
      ]);
    })
  );
});

self.addEventListener("fetch", (event) => {
  console.log("[Service Worker] Fetching:", event.request.url);
  event.respondWith(
    caches.match(event.request).then((response) => {
      return response || fetch(event.request);
    })
  );
});
