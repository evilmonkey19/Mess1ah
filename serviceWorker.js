const staticMess1ah = "mess1ah-site"
const assets = [
  "/",
  "/index.html",
  "/styles.css",
  "/js/app.js",
  "/imatges/firma.svg",
  "/imatges/angelo_frontal.jpg",
  "/imatges/logo.png",
  "/imatges/sample.png",
  "/imatges/servicios/precios.jpg",
  "/icons/site.webmanisfest"
]

self.addEventListener("install", installEvent => {
  installEvent.waitUntil(
    caches.open(staticMess1ah).then(cache => {
      cache.addAll(assets)
    })
  )
})

self.addEventListener("fetch", fetchEvent => {
  fetchEvent.respondWith(
    caches.match(fetchEvent.request).then(res => {
      return res || fetch(fetchEvent.request)
    })
  )
})