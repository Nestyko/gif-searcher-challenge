
const cacheName = 'apv-cache'; 
const assets = [
    '/',
    '/index.html',
    '/error.html',
    '/src/index.js',
];


self.addEventListener('install', e => {
    e.waitUntil(

        caches.open(cacheName)
            .then( cache => { 
                cache.addAll(assets);
            })
    );
});

self.addEventListener('activate', e => {
    e.waitUntil(
        caches.keys()
            .then(keys => {
                console.log(keys); 

                return Promise.all(keys
                        .filter(key => key !== cacheName)
                        .map(key => caches.delete(key)) 
                    )
            })
    )
});

self.addEventListener('fetch', e => {
    e.respondWith(
        caches.match(e.request)
            .then(respuestaCache => {
                return respuestaCache || fetch(e.request);
            })
            .catch( () => caches.match('/error.html'))
    );
});
