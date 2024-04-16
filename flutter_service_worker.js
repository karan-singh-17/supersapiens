'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "ce85297be1c01df2ad190b0d0cccc474",
"assets/AssetManifest.bin.json": "63b80bb77df6cb9cbd3437ace69e6956",
"assets/AssetManifest.json": "4e66d55627da4b9a1806b04686b7fc0f",
"assets/assets/cars_1": "dad291d18c4cee052e023604bb82da60",
"assets/assets/cars_1.jpg": "dad291d18c4cee052e023604bb82da60",
"assets/assets/cars_2.jpg": "0e1d4e0d968b26150c3ff2fb2e40f488",
"assets/assets/cars_3.jpg": "a8296e5efc4ba715bf7b4e5b1e3185d8",
"assets/assets/icon_1.jpg": "4b141d22eab668e340e49d9243afe41a",
"assets/assets/icon_2.png": "dccc93a613db62656f034ef37c5abe86",
"assets/assets/img_1.png": "6502b5e0afdf2a81ce54a53b6876b944",
"assets/assets/img_10.png": "57fecd52c42e6993b378af703e7a17fb",
"assets/assets/img_11.png": "235b80dbc42d45970935170998d5e24a",
"assets/assets/img_12.png": "84f7a4c37efb77465b7f678f3e28c6de",
"assets/assets/img_13.png": "dbd72d2b3691f814d3f0e7d134e50522",
"assets/assets/img_14.png": "412bbc806f178c640ca9daf2edde8758",
"assets/assets/img_15": "c4001f540f984dba9df21ccaef92f636",
"assets/assets/img_15.png": "c4001f540f984dba9df21ccaef92f636",
"assets/assets/img_16": "c937afb8e9b906815f3ebb22840fbd6f",
"assets/assets/img_16.png": "c937afb8e9b906815f3ebb22840fbd6f",
"assets/assets/img_17.png": "9e883e5136c610fe7c0a695e834cacf1",
"assets/assets/img_18.png": "24ecc51377395c51713012419523ed8e",
"assets/assets/img_19": "bb7560969bbeccebe0cbfea40c31b60f",
"assets/assets/img_19.png": "bb7560969bbeccebe0cbfea40c31b60f",
"assets/assets/img_2.jpg": "5d41bbd1a6cfcf813ae5d8c5f104b437",
"assets/assets/img_20.png": "52deb9c6e575a7fc26c40a5db70629ce",
"assets/assets/img_21.png": "6d1a83250ab4e0af15f637c5929186d0",
"assets/assets/img_22.png": "bd7ff8d04a8857384af6def9edf31236",
"assets/assets/img_23.png": "46791b087a5b1844a1c65763f3b687d5",
"assets/assets/img_24.png": "3956d63d8e75a0abac21bccfa1f0fe27",
"assets/assets/img_25.png": "9d5bbb52ec26eb6af7d554c96fb93a08",
"assets/assets/img_26.png": "62db3f3620d0f29e58def883f0c257fe",
"assets/assets/img_27.png": "630ec2e2423f52d036e6d87b3651964c",
"assets/assets/img_28.png": "dacb4c481fd0a14bb59ef12794cbe15e",
"assets/assets/img_3.png": "c18159ce396294c3be347af10fdaa947",
"assets/assets/img_4.png": "e278a90a5b6c6f746b30ec14bd58b479",
"assets/assets/img_5.png": "8cbf8d614251193bb8e0402cef793099",
"assets/assets/img_6.png": "6c14d018d0fa98491f9cace70bac5170",
"assets/assets/img_7.png": "9731d5b278ed1de08e3f07e8fecb84de",
"assets/assets/img_8.png": "7efdb6f9bdd8ccf1c362faf0735df2d8",
"assets/assets/img_9.png": "c8e6a5626e49bcbe5f3ca1cf97696fb1",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "63d729eccbbe36c276ec481f84691c9e",
"assets/NOTICES": "5a4cb1a17ce615260e6b97318b2f8293",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "89ed8f4e49bcdfc0b5bfc9b24591e347",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "c86fbd9e7b17accae76e5ad116583dc4",
"canvaskit/canvaskit.js.symbols": "38cba9233b92472a36ff011dc21c2c9f",
"canvaskit/canvaskit.wasm": "3d2a2d663e8c5111ac61a46367f751ac",
"canvaskit/chromium/canvaskit.js": "43787ac5098c648979c27c13c6f804c3",
"canvaskit/chromium/canvaskit.js.symbols": "4525682ef039faeb11f24f37436dca06",
"canvaskit/chromium/canvaskit.wasm": "f5934e694f12929ed56a671617acd254",
"canvaskit/skwasm.js": "445e9e400085faead4493be2224d95aa",
"canvaskit/skwasm.js.symbols": "741d50ffba71f89345996b0aa8426af8",
"canvaskit/skwasm.wasm": "e42815763c5d05bba43f9d0337fa7d84",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "c71a09214cb6f5f8996a531350400a9a",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "20cfc2ed399d1c8bcec0438cc5227fa6",
"/": "20cfc2ed399d1c8bcec0438cc5227fa6",
"main.dart.js": "30308709821ce4b5e7bac56a9f1c5c60",
"manifest.json": "8d530f6ec0048835cca8aebc68c44163",
"version.json": "b5b3bfc6af926f9c808204912c83f24a"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
