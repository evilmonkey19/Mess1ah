const staticMess1ah = "mess1ah-site";
const mainAssets = [
  "/",
  "/index.html",
  "/styles.css",
  "/manifest.json",
  "/js/app.js",
  "/js/header.js",
  "/js/pageLoad.js",
];

self.addEventListener("install", (installEvent) => {
  installEvent.waitUntil(
    fetch("/assets.json")
      .then((response) => response.json())
      .then((assetsData) => {
        const assetsToCache = [...mainAssets, ...assetsData.assets];
        return caches.open(staticMess1ah).then((cache) => {
          return cache.addAll(assetsToCache);
        });
      })
  );
});

self.addEventListener("fetch", (fetchEvent) => {
  fetchEvent.respondWith(
    caches.match(fetchEvent.request).then((res) => {
      return res || fetch(fetchEvent.request);
    })
  );
});
