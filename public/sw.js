"use strict";

const version = 4;
var isOnline = true;
var isLoggedIn = false;
var cacheName = `e-learning-${version}`;

var urlsToCache = {
  loggedOut: [
    "/",
    "/index.html",
    "/404.html",
    "/js/app.js",
    "/js/auth.js",
    "/js/ui.js",
    "/js/quiz.js",
    "/js/chat.js",
    "/js/rules.js",
    "/js/materialize.min.js",
    "/css/styles.css",
    "/img/icon-192.png",
    "/img/icon-512.png",
    "/css/materialize.min.css",
    "https://fonts.googleapis.com/icon?family=Material+Icons",
    "https://fonts.gstatic.com/s/materialicons/v47/flUhRq6tzZclQEJ-Vdg-IuiaDsNcIhQ8tQ.woff2",
    "/pages/about.html",
    "/pages/chat.html",
    "/pages/login.html",
    "/pages/rules.html",
    "/pages/testIndividuel.html",
    "/pages/fallback.html",
    "/css/style.css",
  ]
};



self.addEventListener("install", onInstall);
self.addEventListener("activate", onActivate);
self.addEventListener("message", onMessage);

main().catch(console.error);

async function main() {
  // call sendMessage and request an update
  await sendMessage({ requestStatusUpdate: true });
  await cacheLoggedOutFiles();
  // if anythink not in the cache get it in the cache
}

async function onInstall(evt) {
  console.log(`Service Worker (${version}) installed.`);
  self.skipWaiting();
}

async function sendMessage(msg) {
  var allClients = await clients.matchAll({ includeUncontrolled: true });
  return Promise.all(
    allClients.map(function clientMsg(client) {
      var chan = new MessageChannel();
      chan.port1.onMessage = onMessage;
      // send on port 2 and listen on port 1
      return client.postMessage(msg, [chan.port2]);
    })
  );
}

function onMessage({ data }) {
  if (data.statusUpdate) {
    ({ isOnline, isLoggedIn } = data.statusUpdate);
    console.log(
      `Service Worker (v${version}) status update ... isOnline:${isOnline} , isLoggedIn:${isLoggedIn}`
    );
  }
}

function onActivate(evt) {
  evt.waitUntil(handleActivation());
}
// tell the browser to don't shut down

async function handleActivation() {
  // clear out the caches
  await clearCaches();
  await clients.claim();
  await cacheLoggedOutFiles(/*forceReload=*/ true);
  // first activation of the sw go check whatever there is in the cache
  console.log(`Service Worker (${version}) activated.`);
  //controll all the pages (connected and opened client)
}

async function clearCaches() {
  var cacheNames = await caches.keys();
  var oldCacheNames = cacheNames.filter(function matchOldCache(cacheName) {
    if (/^ramblings-\d+$/.test(cacheName)) {
      let [, cacheVersion] = cacheName.match(/^ramblings-(\d+)$/);
      cacheVersion = cacheVersion != null ? Number(cacheVersion) : cacheVersion;
      return cacheVersion > 0 && cacheVersion != version;
    }
  });
  return Promise.all(
    oldCacheNames.map(function deleteCache(cacheName) {
      return caches.delete(cacheName);
    })
  );
}

async function cacheLoggedOutFiles(forceReload = false) {
  // open that cache entry
  var cache = await caches.match(cacheName);

  return Promise.all(
    urlsToCache.loggedOut.map(async function requestFile(url) {
      try {
        let res;
        if (!forceReload) {
          res = await cache.match(url);
          if (res) {
            return res;
          }
        }

        // objects requested with GET
        let fetchOptions = {
          method: "GET",
          cache: "no-cache",
          credentials: "omit"
        };
        res = await fetch(url, fetchOptions);
        if (res.ok) {
          await cache.put(url, res);
        }
      } catch (err) { }
    })
  );
}












/*


const staticCacheName = "site-static-v4";
const dynamicCacheName = "site-dynamic-v4";

const assets = [
  "/",
  "/index.html",
  "/js/app.js",
  "/js/ui.js",
  "/js/materialize.min.js",
  "/css/styles.css",
  "/img/icon-192.png",
  "/css/materialize.min.css",
  "https://fonts.googleapis.com/icon?family=Material+Icons",
  "https://fonts.gstatic.com/s/materialicons/v47/flUhRq6tzZclQEJ-Vdg-IuiaDsNcIhQ8tQ.woff2",
  "/pages/fallback.html"
];
/*
// cache liimit
const limitCacheSize = (name,size) => {
  caches.open(name).then( cache =>  {
    cache.keys().then( keys => {
      if( keys.length > size){
        cache.delete(keys[keys.length - 1]).then( limitCacheSize(name,size));
      }
    })
  })
};
*/

// install event
/*
self.addEventListener("install", evt => {
  console.log("service worker installed");
  /*evt.waitUntil(
    caches.open(staticCacheName).then((cache) => {
      console.log('caching  assets');
      cache.addAll(assets);
    })
  );*//*
});
*/

// activate event
/*
self.addEventListener("activate", evt => {
  console.log("service worker activated");
  /*evt.waitUntil(
    caches.keys().then(keys => {
      //console.log(keys);
      return Promise.all(keys
        .filter(key => key !== staticCacheName && key !== dynamicCacheName)
        .map(key => caches.delete(key))
      );
    })
  );*//*
});
*/
// fetch event
/*
self.addEventListener("fetch", evt => {
  //console.log('fetch event', evt);
  /*evt.respondWith(
    caches.match(evt.request).then(cacheRes => {
      return cacheRes || fetch(evt.request).then(fetchRes => {
        return caches.open(dynamicCacheName).then(cache => {
          cache.put(evt.request.url, fetchRes.clone());
          limitCacheSize(dynamicCacheName,5);
          return fetchRes;
        })
      });
    }).catch(() => {
      if(evt.request.url.indexOf('.html') > -1){
        return caches.match('/pages/fallback.html');
      }
      
    })
  );*/

  /*
});
*/