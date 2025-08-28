
self.addEventListener('install', e=>{e.waitUntil(caches.open('stag-bingo-v16').then(c=>c.addAll(['/','./index.html','./styles.css','./app.js','./manifest.webmanifest','./icon-192.png','./icon-512.png','./firebase-messaging-sw.js'])))});
self.addEventListener('fetch', e=>{e.respondWith(caches.match(e.request).then(r=>r||fetch(e.request)))});
