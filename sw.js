self.addEventListener('install', function (e) {
  self.skipWaiting();
});

self.addEventListener('activate', function (e) {
  self.clients.claim();
});

self.addEventListener('fetch', function (e) {
  // Không cần cache gì cho kiosk này — chỉ để thoả điều kiện "installable" của Chrome trên Android
});
