'use strict';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "index.html": "f7969dce42d38c2e2c56cfc29e6233a7",
"/": "f7969dce42d38c2e2c56cfc29e6233a7",
"main.dart.js": "c379fdee8c946ea779e571fe18a1e5c4",
"favicon.png": "48228ab5d4d192e4eea45f6b643373bc",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "d49e3ac0447e1c359db70c5e8efc853a",
"assets/LICENSE": "34da31f697be5f2fcfacf877df9adb0a",
"assets/AssetManifest.json": "4234ab2609e7ac0810a6132d704e60f9",
"assets/FontManifest.json": "c13627fa727feccab1128c6300eb7310",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "115e937bb829a890521f72d2e664b632",
"assets/fonts/MaterialIcons-Regular.ttf": "56d3ffdef7a25659eab6a68a3fbfaf16",
"assets/assets/images/background.jpg": "afb5b3df243953b29f728a09518a8c4d",
"assets/assets/images/nike_logo.png": "48228ab5d4d192e4eea45f6b643373bc",
"assets/assets/images/shoe.png": "165f66e30e04c70f4d63ca13f38013c4",
"assets/assets/images/nike_logo_grey.png": "6488a3235986555314d922f9a9b987ea",
"assets/assets/fonts/Futura-CondensedLight.otf": "78b46aef67d27ef145b0a3948995968f"
};

self.addEventListener('activate', function (event) {
  event.waitUntil(
    caches.keys().then(function (cacheName) {
      return caches.delete(cacheName);
    }).then(function (_) {
      return caches.open(CACHE_NAME);
    }).then(function (cache) {
      return cache.addAll(Object.keys(RESOURCES));
    })
  );
});

self.addEventListener('fetch', function (event) {
  event.respondWith(
    caches.match(event.request)
      .then(function (response) {
        if (response) {
          return response;
        }
        return fetch(event.request);
      })
  );
});
