const CACHE = 'gym-tracker-pwa-9ed22057b3d9cff1';
const OCR_CACHE = 'gym-tracker-ocr-769f4a83a73dad7b';
// Paths are relative to the service worker scope, so the app works at / or under a subpath.
const BASE = new URL(self.registration.scope).pathname;
const ASSETS = ["assets/index-CS_lBBIb.js","assets/index-CSjW1jCO.css","icon-192.png","icon-512.png","","machines/cybex-eagle-11010.jpg","machines/cybex-eagle-11020.jpg","machines/cybex-eagle-11030.jpg","machines/cybex-eagle-11051.jpg","machines/cybex-eagle-11061.jpg","machines/cybex-eagle-11080.jpg","machines/cybex-eagle-11090.jpg","machines/cybex-eagle-11111.jpg","machines/cybex-eagle-11130.jpg","machines/cybex-eagle-11141.jpg","machines/cybex-eagle-11150.jpg","machines/cybex-eagle-11160.jpg","machines/cybex-eagle-11181.jpg","machines/cybex-eagle-11190.jpg","machines/emprise-bg2001.jpg","machines/emprise-bg2002.jpg","machines/emprise-bg2003.jpg","machines/emprise-bg2004.jpg","machines/emprise-bg2006.jpg","machines/emprise-bg2007.jpg","machines/emprise-bg2012.jpg","machines/emprise-bg2013.jpg","machines/emprise-bg2016.jpg","machines/emprise-bg2018.jpg","machines/emprise-bg2019.jpg","machines/emprise-bg2020.jpg","machines/emprise-bg2021.jpg","machines/emprise-bg2022.jpg","machines/emprise-bg2023.jpg","machines/emprise-bg2024.jpg","machines/emprise-bg2027.jpg","machines/emprise-bg2028.jpg","machines/emprise-bg2029.jpg","machines/emprise-bg2030.jpg","machines/emprise-bg2031.jpg","machines/emprise-bg2032.jpg","machines/emprise-bg2033.jpg","machines/emprise-bg2036.jpg","machines/emprise-bg2038.jpg","machines/emprise-bg2039.jpg","machines/emprise-bg2043.jpg","machines/emprise-bg2045.jpg","machines/emprise-bg2049.jpg","machines/emprise-bg2050.jpg","machines/emprise-bg2052.jpg","machines/emprise-bg2054.jpg","machines/emprise-bg2060.jpg","machines/emprise-bg2061.jpg","machines/emprise-bg2a02.jpg","machines/emprise-bg2a04.jpg","machines/emprise-bg2a07.jpg","machines/emprise-bg2a08.jpg","machines/emprise-bg2a13.jpg","machines/emprise-bg2a15.jpg","machines/emprise-bg2a28.jpg","machines/emprise-bg2a32.jpg","machines/emprise-bg2b07.jpg","machines/emprise-bg2b20.jpg","machines/emprise-bg2b32.jpg","machines/emprise-bg2c28.jpg","machines/emprise-bg2d32.jpg","machines/emprise-bg2e28.jpg","machines/emprise-bg2f32.jpg","machines/emprise-bg2m28.jpg","machines/emprise-cf2001.jpg","machines/emprise-cf2002.jpg","machines/emprise-cf2003.jpg","machines/emprise-cf3001.jpg","machines/emprise-cf3002.jpg","machines/emprise-cf3003.jpg","machines/emprise-cf3004.jpg","machines/emprise-cf3005.jpg","machines/emprise-cf3006.jpg","machines/emprise-cf3007.jpg","machines/emprise-cf3008.jpg","machines/emprise-cf3009.jpg","machines/emprise-cf3010.jpg","machines/emprise-cf3011.jpg","machines/emprise-cf3012.jpg","machines/emprise-cf5002.jpg","machines/emprise-cf5004.jpg","machines/emprise-cf5009.jpg","machines/emprise-cg1001.jpg","machines/emprise-cg1004.jpg","machines/emprise-cg1005.jpg","machines/emprise-cg1007.jpg","machines/emprise-cg1009.jpg","machines/emprise-cg1010.jpg","machines/emprise-cg1011.jpg","machines/emprise-cg1012.jpg","machines/emprise-cg1013.jpg","machines/emprise-cg1015.jpg","machines/emprise-cg1016.jpg","machines/emprise-cg1017.jpg","machines/emprise-cg1018.jpg","machines/emprise-cg1019.jpg","machines/emprise-cg1020.jpg","machines/emprise-cg1021.jpg","machines/emprise-cg1022.jpg","machines/emprise-cg1023.jpg","machines/emprise-cg1024.jpg","machines/emprise-cg1025.jpg","machines/emprise-cg1026.jpg","machines/emprise-cg1028.jpg","machines/emprise-cg1030.jpg","machines/emprise-cg1031.jpg","machines/emprise-cg1032.jpg","machines/emprise-cg1033.jpg","machines/emprise-cg1037.jpg","machines/emprise-cg1041.jpg","machines/emprise-cg1042.jpg","machines/emprise-cg1043.jpg","machines/emprise-cg1045.jpg","machines/emprise-cg1056.jpg","machines/emprise-cg1057.jpg","machines/emprise-cg1060.jpg","machines/emprise-cg1063.jpg","machines/emprise-cg1a15.jpg","machines/emprise-cg1a16.jpg","machines/emprise-cg1a18.jpg","machines/emprise-cg1a21.jpg","machines/emprise-cg1a32.jpg","machines/emprise-cg1a45.jpg","machines/emprise-cg1a57.jpg","machines/emprise-cg1c28.jpg","machines/emprise-cg2001.jpg","machines/emprise-cg2002.jpg","machines/emprise-cg2003.jpg","machines/emprise-cg2004.jpg","machines/emprise-cg2007.jpg","machines/emprise-cg2009.jpg","machines/emprise-cg2010.jpg","machines/emprise-cg2011.jpg","machines/emprise-cg2012.jpg","machines/emprise-cg2013.jpg","machines/emprise-cg2014.jpg","machines/emprise-cg2015.jpg","machines/emprise-cg2016.jpg","machines/emprise-cg2017.jpg","machines/emprise-cg2018.jpg","machines/emprise-cg2019.jpg","machines/emprise-cg2020.jpg","machines/emprise-cg2021.jpg","machines/emprise-cg2022.jpg","machines/emprise-cg2023.jpg","machines/emprise-cg2024.jpg","machines/emprise-cg2025.jpg","machines/emprise-cg2026.jpg","machines/emprise-cg2028.jpg","machines/emprise-cg2030.jpg","machines/emprise-cg2031.jpg","machines/emprise-cg2032.jpg","machines/emprise-cg2033.jpg","machines/emprise-cg2037.jpg","machines/emprise-cg2041.jpg","machines/emprise-cg2042.jpg","machines/emprise-cg2043.jpg","machines/emprise-cg2045.jpg","machines/emprise-cg2056.jpg","machines/emprise-cg2057.jpg","machines/emprise-cg2a01.jpg","machines/emprise-cg2a04.jpg","machines/emprise-cg2a15.jpg","machines/emprise-cg2a16.jpg","machines/emprise-cg2a18.jpg","machines/emprise-cg2a21.jpg","machines/emprise-cg2a25.jpg","machines/emprise-cg2a32.jpg","machines/emprise-cg2a45.jpg","machines/emprise-cg2c28.jpg","machines/emprise-gf1001.jpg","machines/emprise-gf1002.jpg","machines/emprise-gf1003.jpg","machines/emprise-gf5002.jpg","machines/emprise-gf5004.jpg","machines/emprise-gf5009.jpg","machines/hammer-hs-ab.jpg","machines/hammer-hs-adc.jpg","machines/hammer-hs-bc.jpg","machines/hammer-hs-be.jpg","machines/hammer-hs-cp.jpg","machines/hammer-hs-hab.jpg","machines/hammer-hs-had.jpg","machines/hammer-hs-hc.jpg","machines/hammer-hs-hg.jpg","machines/hammer-hs-lc.jpg","machines/hammer-hs-le.jpg","machines/hammer-hs-lr.jpg","machines/hammer-hs-pd.jpg","machines/hammer-hs-rw.jpg","machines/hammer-hs-sc.jpg","machines/hammer-hs-slp.jpg","machines/hammer-hs-sp.jpg","machines/hammer-hsllp.jpg","machines/hammer-il-bp.jpg","machines/hammer-il-drw.jpg","machines/hammer-il-hr.jpg","machines/hammer-il-ip.jpg","machines/hammer-il-lr.jpg","machines/hammer-il-pd.jpg","machines/hammer-il-sp.jpg","machines/hammer-il-wc.jpg","machines/hammer-il-wpd.jpg","machines/hammer-mtsab.jpg","machines/hammer-mtsbc.jpg","machines/hammer-mtscp.jpg","machines/hammer-mtsdp.jpg","machines/hammer-mtsfp.jpg","machines/hammer-mtshr.jpg","machines/hammer-mtsip.jpg","machines/hammer-mtskc.jpg","machines/hammer-mtsle.jpg","machines/hammer-mtsrw.jpg","machines/hammer-mtssp.jpg","machines/hammer-mtste.jpg","machines/hammer-pl-hsq2.jpg","machines/hoist-cf-3355.jpg","machines/hoist-cf-3356.jpg","machines/hoist-cf-3661.jpg","machines/hoist-cl-3301.jpg","machines/hoist-cl-3309.jpg","machines/hoist-cl-3601.jpg","machines/hoist-rpl-5301.jpg","machines/hoist-rpl-5305.jpg","machines/hoist-rpl-5356.jpg","machines/hoist-rpl-5403.jpg","machines/hoist-rpl-5601.jpg","machines/hoist-rs-2301.jpg","machines/hoist-rs-2601.jpg","machines/kikos-cas40.jpg","machines/kikos-cls40.jpg","machines/kikos-ke150i.jpg","machines/kikos-ke170i.jpg","machines/kikos-ke190.jpg","machines/kikos-pro-run.jpg","machines/kikos-t200.jpg","machines/life-cmdap.jpg","machines/life-lcm-cc.jpg","machines/life-mj4.jpg","machines/life-mj5.jpg","machines/life-mj8.jpg","machines/life-op-bc.jpg","machines/life-ss-bc.jpg","machines/zemko-par-studio.jpg","machines/zemko-set-5-50.jpg","manifest.webmanifest","oxy-icon-192.png","oxy-icon-512.png","recuperar.html"].map((path) => BASE + path);
// Cached the first time the photo reader is used, not at install.
const ON_DEMAND = ["ocr/CORE-LICENSE.txt","ocr/NOTICE.txt","ocr/TESSERACT-LICENSE.txt","ocr/eng.traineddata","ocr/tesseract-core-lstm.wasm.js","ocr/tesseract-core-relaxedsimd-lstm.wasm.js","ocr/tesseract-core-simd-lstm.wasm.js","ocr/tesseract.min.js","ocr/worker.min.js"].map((path) => BASE + path);
self.addEventListener('install', (event) => {
  event.waitUntil(
    (async () => {
      const cache = await caches.open(CACHE);
      // Activate only after downloading the complete, matching build.
      await cache.addAll(ASSETS.map((url) => new Request(url, { cache: 'reload' })));
      // Recover clients stranded on the earlier redirected HTML response.
      // Normal future releases still wait for the user's Update action.
      for (const key of await caches.keys()) {
        if (!key.startsWith('gym-tracker-pwa-') || key === CACHE) continue;
        const previous = await (await caches.open(key)).match(BASE + 'index.html');
        if (previous?.redirected) {
          await self.skipWaiting();
          break;
        }
      }
    })()
  );
});
self.addEventListener('activate', (event) => {
  event.waitUntil(
    (async () => {
      const keys = await caches.keys();
      await Promise.all(
        keys
          .filter((key) => key.startsWith('gym-tracker-') && key !== CACHE && key !== OCR_CACHE)
          .map((key) => caches.delete(key))
      );
      await self.clients.claim();
    })()
  );
});
self.addEventListener('message', (event) => {
  if (event.data?.type === 'ACTIVATE_UPDATE') self.skipWaiting();
  if (event.data?.type === 'OFFLINE_STATUS') {
    event.waitUntil(
      (async () => {
        const cache = await caches.open(CACHE);
        const ready = (await Promise.all(ASSETS.map((url) => cache.match(url)))).every(Boolean);
        event.ports[0]?.postMessage({ ready });
      })()
    );
  }
});
self.addEventListener('fetch', (event) => {
  const request = event.request;
  const url = new URL(request.url);
  if (request.method !== 'GET' || url.origin !== self.location.origin) return;
  if (request.mode === 'navigate' && ![BASE, BASE + 'index.html'].includes(url.pathname)) return;
  // Cache only the app: never authentication pages or API responses.
  const key = request.mode === 'navigate' ? BASE : url.pathname;
  if (ON_DEMAND.includes(key)) {
    event.respondWith(
      (async () => {
        const cache = await caches.open(OCR_CACHE);
        const cached = await cache.match(key);
        if (cached) return cached;
        const response = await fetch(request);
        if (response.ok) await cache.put(key, response.clone());
        return response;
      })()
    );
    return;
  }
  if (!ASSETS.includes(key)) return;
  event.respondWith(
    (async () => {
      const cache = await caches.open(CACHE);
      const response = (await cache.match(key)) || (await fetch(request));
      // A followed redirect cannot be used directly for a navigation whose
      // redirect mode is "manual". Preserve the body and headers, not that flag.
      if (request.mode === 'navigate' && response.redirected) {
        return new Response(response.body, {
          status: response.status,
          statusText: response.statusText,
          headers: response.headers
        });
      }
      return response;
    })()
  );
});
