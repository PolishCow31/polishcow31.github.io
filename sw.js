// Dawn's Kitchen — offline service worker
//
// Strategy:
//   - HTML and recipe data: network-first, fall back to cache. Means updates
//     land on the next page load when online, without bumping CACHE_VERSION.
//   - Everything else (fonts, images): cache-first, since they change only on
//     rename. If you do replace a font/image and want phones to re-fetch it,
//     bump CACHE_VERSION below.

const CACHE_VERSION = 'v25';
const CACHE_NAME = `recipes-${CACHE_VERSION}`;

// Assets that should always try network first so updates flow automatically.
const NETWORK_FIRST_PATHS = new Set(['/', '/index.html', '/recipes.js']);

// Every asset the site needs to render fully offline.
const PRECACHE_URLS = [
  '/',
  '/index.html',
  '/recipes.js',
  '/CoverImageV2.png',
  '/fonts/inter.woff2',
  '/fonts/cormorant-garamond.woff2',
  '/fonts/cormorant-garamond-italic.woff2',
  '/fonts/caveat.woff2'
];

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then((cache) => cache.addAll(PRECACHE_URLS))
      .then(() => self.skipWaiting())
  );
});

self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys()
      .then((names) =>
        Promise.all(
          names
            .filter((name) => name !== CACHE_NAME)
            .map((name) => caches.delete(name))
        )
      )
      .then(() => self.clients.claim())
  );
});

self.addEventListener('fetch', (event) => {
  const req = event.request;
  if (req.method !== 'GET') return;

  const url = new URL(req.url);
  if (url.origin !== self.location.origin) return;

  if (NETWORK_FIRST_PATHS.has(url.pathname)) {
    event.respondWith(networkFirst(req));
  } else {
    event.respondWith(cacheFirst(req));
  }
});

// Network-first: try the network, refresh the cache on success, and fall back
// to whatever's cached if the network is unavailable.
async function networkFirst(req) {
  const cache = await caches.open(CACHE_NAME);
  try {
    const fresh = await fetch(req);
    if (fresh && fresh.ok) cache.put(req, fresh.clone());
    return fresh;
  } catch (err) {
    const cached = await cache.match(req);
    if (cached) return cached;
    throw err;
  }
}

// Cache-first: serve from cache, otherwise hit the network.
async function cacheFirst(req) {
  const cached = await caches.match(req);
  if (cached) return cached;
  return fetch(req);
}
