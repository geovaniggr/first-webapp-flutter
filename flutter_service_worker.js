'use strict';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "main.dart.js": "97d198b36c8b2ff5b92fd131ca29f818",
".git/HEAD": "4cf2d64e44205fe628ddd534e1151b58",
".git/hooks/pre-commit.sample": "e4db8c12ee125a8a085907b757359ef0",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/pre-push.sample": "3c5989301dd4b949dfa1f43738a22819",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/fsmonitor-watchman.sample": "ecbb0cb5ffb7d773cd5b2407b210cc3b",
".git/hooks/update.sample": "517f14b9239689dff8bda3022ebd9004",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/logs/HEAD": "80f2d45b7ef1be30b0867edeb4033bb6",
".git/logs/refs/remotes/origin/master": "36313b9475f5624d83b5beb6dd7e1616",
".git/logs/refs/heads/master": "80f2d45b7ef1be30b0867edeb4033bb6",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/config": "50b163d8c62efd774c81b49457308d59",
".git/index": "51b93becc96fb8a1f7df9fe9eb31b9db",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/COMMIT_EDITMSG": "d87758824bec4a2018bfc7bf434af098",
".git/objects/8b/d7c4d4b6c7b4c7a69191dd8d93cc05ca7901fe": "82d14771d75dcabb46b6ea9e0a88b5f5",
".git/objects/7a/62b9d5927af02ab29f9e53646ad147d278045e": "353b27ea7170aff952db85e87c42f329",
".git/objects/bc/d4c4b918b542589d5167424bbcddff804546df": "49886bf2f0ee750e0f088974263aea70",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/bd/eed6689f873a18f3ddcdbd1a46639edad20511": "4748a92c14f31c483c1dee2bf6d3231b",
".git/objects/ab/685529c34c39018d07da29667b554df069b806": "cf6f85cda595b2d2f8df8fe057b1a59c",
".git/objects/26/4778a7586feb134aee335546d20f813ac8c61e": "57421fd10e0574d773fefb3f01c60556",
".git/objects/6e/c73569feb1540377a613219a4c6f40866fb6ab": "6d40ba0f49f58b397a7e29941c8979cf",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/99/43d5d8d871a7d8104fbdc0f7464104e73c7f7d": "33cdee0d1546e8209d4ed960d9921cbd",
".git/objects/4c/1593e9754f2f224b59a3871aa8cbfaa3dee3e8": "e6fd3a10c161e06cd14cd7db3d17d516",
".git/objects/81/0337fcab9374ea7916511a5b9b59c1fe38c5fd": "cc99e87ef5a5ad26f76eb93e555d98fa",
".git/objects/39/8c3c4b09febad8f46e67d9156eeb742d0373ba": "f1a430d8f73ec0c9936d756683b2a947",
".git/objects/fc/565ec170b7fd55cbf422b8188a6f64eddda60e": "c1d5b622c8e63d1865785872c9d4a21d",
".git/objects/15/9b15011009e1e691b0761e5627dc3f3aa452ad": "822c0ced8e90203ed87ff7e0082d7945",
".git/objects/d8/d142ce5c0e2e3932de79face1ec316882f326a": "e3dd159fb3639aa9ec67f289563c4348",
".git/objects/95/19e1d75e8e60fc461d42dceff7162076484747": "87166efde232eca9c4f1ad4118b6d046",
".git/objects/f8/742b7f417e833775154b0b378212cfa9effd4b": "972138177b8720471ea69a1b43d4134a",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/0f/816fb5068fb5d0dc1623718a94d7a34c5edfe4": "48392ce692d6328aef69a753fa305233",
".git/objects/66/dcef1854fd566bb0c247b480550bfded5cde70": "71f4c57b83c986a7af85d52d410f8a90",
".git/objects/66/460800c7b3ceff3f7444cd6f894511e8a63cb4": "998c274bdb308dcec1daf312511964a9",
".git/objects/c9/89ee9ff4eb8a1d5861b4e29222f3b38f43138e": "239a291c0f2ee6e21ad6dc57edd14bdf",
".git/objects/dd/56eabbf298449db91bfa8644c6fbb20b8e6dda": "3fa6bb294070401dbba0b01792b84ce0",
".git/objects/f6/3f21c74ba5c9a260ce202b867758c26ce92111": "85d8c62ada6ac056102731f70658cc61",
".git/objects/13/cd698afa86edb334bec59991cd113491a5a4f1": "01d69635e49925db17e7c32e26fc974f",
".git/objects/f9/dec11869204e044cd638aa9a9ff06be28aa323": "59613b04129a6fb36bc735a64737c427",
".git/objects/6d/1c3da3c35e0b9c30339eba979de48b086dc177": "f6b90904b38adde53646932042fbb896",
".git/objects/4b/825dc642cb6eb9a060e54bf8d69288fbee4904": "75589287973d2772c2fc69d664e10822",
".git/objects/20/5bb5db271c6d8de8399864c7bb9b917f638893": "c993b22f115d7f3ae6d5b7b212806539",
".git/objects/59/dd4833ad23af204e6bd6d313c82f6564024849": "2bf0a50fa62a51faac7c3fb24d5e8d9d",
".git/objects/0d/76e97f4d15dcbbd469d030c7bf6c579f84cb05": "be2b8292f3af2df086e33644c1f13623",
".git/refs/remotes/origin/master": "0c4f773c8e7daab7fabc2bd87c6026d4",
".git/refs/heads/master": "0c4f773c8e7daab7fabc2bd87c6026d4",
"assets/AssetManifest.json": "3c0a6ab79cd81fa8e70b1a09b617efca",
"assets/assets/network/logo.png": "e92d75da68b0db510c0ce50855b2de47",
"assets/FontManifest.json": "01700ba55b08a6141f33e168c4a6c22f",
"assets/LICENSE": "96f5ef0fad34e54e365046b656b404c2",
"assets/fonts/MaterialIcons-Regular.ttf": "56d3ffdef7a25659eab6a68a3fbfaf16",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "115e937bb829a890521f72d2e664b632",
"manifest.json": "13a76f52f9b29d759e2f73043635c90e",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"index.html": "1be7099368ad7d8088f3cf7b13530074",
"/": "1be7099368ad7d8088f3cf7b13530074"
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
