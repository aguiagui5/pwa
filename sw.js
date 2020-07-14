const CACHE_NAME = 'v1_cache_app_caja';

var urlsToCache = [
    './',
    './css/styles.css',
    './img/favicon.png',
    './videos/video2.mp4'
];

// Evento Install





















self.addEventListener('install', e => {
    e.waitUntil(
        caches.open(CACHE_NAME) 
                .then(cache => {
                    return cache.addAll(urlsToCache)
                                .then(() => {
                                    self.skipWaiting();
                                });
                })
                .catch(err => console.log('No se ha podido registrar el cache', err))
    );
});


// Evento Activate (que la app funcione sin conexion)

self.addEventListener('activate', e => {
    const cacheWhitelist = [CACHE_NAME];

    e.waitUntil(
        caches.keys()
              .then(cacheNames => {
                  return Promise.all(
                      cacheNames.map(cacheName => {

                        if(cacheWhitelist.indexOf(cacheName) === -1){
                            return caches.delete(cacheName);
                        }
                      })
                  );
              })
              .then(() => {
                  self.clients.claim();
              })
    );
});



// Evento Fetch


self.addEventListener('fetch', e => {

    e.respondWith(
        caches.match(e.request)
              .then(res => {
                  if(res){
                      return res;
                  }

                  return fetch(e.request);
              })

    );
});
