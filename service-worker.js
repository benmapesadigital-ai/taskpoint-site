const CACHE_NAME = "taskpointpro-v4";

const APP_SHELL = [
  "/",
  "/index.html",
  "/style.css",
  "/app.js",
  "/manifest.json",
  "/assets/taskpointpro-logo.png"
];


/* INSTALL */
self.addEventListener("install", event => {

  event.waitUntil(

    caches.open(CACHE_NAME).then(cache => {

      return cache.addAll(APP_SHELL);

    })

  );

});


/* ACTIVATE */
self.addEventListener("activate", event => {

  event.waitUntil(

    caches.keys().then(keys => {

      return Promise.all(

        keys
          .filter(key => key !== CACHE_NAME)
          .map(key => caches.delete(key))

      );

    })

  );

});


/* Tell old page that new worker can activate */
self.addEventListener("message", event => {

  if(event.data && event.data.type === "SKIP_WAITING"){

    self.skipWaiting();

  }

});


/* Take control */
self.addEventListener("activate", event => {

  event.waitUntil(
    self.clients.claim()
  );

});


/* FETCH */
self.addEventListener("fetch", event => {

  event.respondWith(

    caches.match(event.request).then(cached => {

      return cached || fetch(event.request);

    })

  );

});
