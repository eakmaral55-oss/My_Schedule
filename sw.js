const CACHE = "myschedule-perfect-v1";
const ASSETS = ["./", "./index.html", "./style.css", "./script.js", "./manifest.json", "./icons/icon-192.svg", "./icons/icon-512.svg"];
self.addEventListener("install", e => e.waitUntil(caches.open(CACHE).then(c => c.addAll(ASSETS)).then(() => self.skipWaiting())));
self.addEventListener("activate", e => e.waitUntil(self.clients.claim()));
self.addEventListener("fetch", e => e.respondWith(caches.match(e.request).then(r => r || fetch(e.request))));
self.addEventListener("notificationclick", e => { e.notification.close(); e.waitUntil(self.clients.matchAll({ type: "window", includeUncontrolled: true }).then(a => a.length ? a[0].focus() : self.clients.openWindow("./"))) });
