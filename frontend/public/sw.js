if(!self.define){let e,a={};const i=(i,s)=>(i=new URL(i+".js",s).href,a[i]||new Promise((a=>{if("document"in self){const e=document.createElement("script");e.src=i,e.onload=a,document.head.appendChild(e)}else e=i,importScripts(i),a()})).then((()=>{let e=a[i];if(!e)throw new Error(`Module ${i} didn’t register its module`);return e})));self.define=(s,c)=>{const n=e||("document"in self?document.currentScript.src:"")||location.href;if(a[n])return;let r={};const d=e=>i(e,n),t={module:{uri:n},exports:r,require:d};a[n]=Promise.all(s.map((e=>t[e]||d(e)))).then((e=>(c(...e),r)))}}define(["./workbox-7028bf80"],(function(e){"use strict";importScripts(),self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"/_next/static/9URg2rRLEyIqemMwT3hcy/_buildManifest.js",revision:"9cba408612f9cb1301cdfb8c5b52a5a4"},{url:"/_next/static/9URg2rRLEyIqemMwT3hcy/_ssgManifest.js",revision:"b6652df95db52feb4daf4eca35380933"},{url:"/_next/static/chunks/201-24f35169a1821c81.js",revision:"24f35169a1821c81"},{url:"/_next/static/chunks/318-e83401b2e19d0c32.js",revision:"e83401b2e19d0c32"},{url:"/_next/static/chunks/40e88094-ec8218c87f50de2b.js",revision:"ec8218c87f50de2b"},{url:"/_next/static/chunks/769-e6ec4d7a3effaf5b.js",revision:"e6ec4d7a3effaf5b"},{url:"/_next/static/chunks/9a560ba9-5dfca2e8180456ec.js",revision:"5dfca2e8180456ec"},{url:"/_next/static/chunks/a560505e-dc970cd5eca34729.js",revision:"dc970cd5eca34729"},{url:"/_next/static/chunks/b26075a6-dfb6d6bd4a5bdbb0.js",revision:"dfb6d6bd4a5bdbb0"},{url:"/_next/static/chunks/framework-ac88a2a245aea9ab.js",revision:"ac88a2a245aea9ab"},{url:"/_next/static/chunks/main-1d37d85c275b68e0.js",revision:"1d37d85c275b68e0"},{url:"/_next/static/chunks/pages/EventsPage-70a1020f67eb509e.js",revision:"70a1020f67eb509e"},{url:"/_next/static/chunks/pages/ProjectPage-807fc2461cb786f6.js",revision:"807fc2461cb786f6"},{url:"/_next/static/chunks/pages/TeamPage-36237a9b00a8b1c9.js",revision:"36237a9b00a8b1c9"},{url:"/_next/static/chunks/pages/_app-9d76f50ba6eaee18.js",revision:"9d76f50ba6eaee18"},{url:"/_next/static/chunks/pages/_error-a12d0fec618c6e85.js",revision:"a12d0fec618c6e85"},{url:"/_next/static/chunks/pages/index-9fc05928c5b370a9.js",revision:"9fc05928c5b370a9"},{url:"/_next/static/chunks/pages/server-sitemap.xml-3884b6c5ccf39386.js",revision:"3884b6c5ccf39386"},{url:"/_next/static/chunks/polyfills-c67a75d1b6f99dc8.js",revision:"837c0df77fd5009c9e46d446188ecfd0"},{url:"/_next/static/chunks/webpack-b8f8d6679aaa5f42.js",revision:"b8f8d6679aaa5f42"},{url:"/_next/static/css/a3e12472b6cfffb1.css",revision:"a3e12472b6cfffb1"},{url:"/_next/static/css/a8c7d01d323e33e3.css",revision:"a8c7d01d323e33e3"},{url:"/_next/static/media/Frame21.89cad13d.jpg",revision:"89cad13d"},{url:"/_next/static/media/Frame210.95ebb0f1.jpg",revision:"95ebb0f1"},{url:"/_next/static/media/Frame211.165bfc77.jpg",revision:"165bfc77"},{url:"/_next/static/media/Frame22.95dac7d6.jpg",revision:"95dac7d6"},{url:"/_next/static/media/Frame23.f3bd2063.jpg",revision:"f3bd2063"},{url:"/_next/static/media/Frame24.17d801da.jpg",revision:"17d801da"},{url:"/_next/static/media/Frame25.3caf8a70.jpg",revision:"3caf8a70"},{url:"/_next/static/media/Frame26.ca94b17e.jpg",revision:"ca94b17e"},{url:"/_next/static/media/Frame27.ca4fc46d.jpg",revision:"ca4fc46d"},{url:"/_next/static/media/Frame28.87428db6.jpg",revision:"87428db6"},{url:"/_next/static/media/Frame29.f3620395.jpg",revision:"f3620395"},{url:"/_next/static/media/Logo.0526228d.png",revision:"76a439fdae4e68cc6386d37af34dfe94"},{url:"/favicon/android-chrome-192x192.png",revision:"69789f87c3f4f65032d8914820cce44a"},{url:"/favicon/android-chrome-512x512.png",revision:"59a9c6bd0ac8e84101bcfaadf8ba4bf4"},{url:"/favicon/apple-touch-icon.png",revision:"addce62d92b4005bee18d4ab40631d73"},{url:"/favicon/favicon-16x16.png",revision:"3445f0bab8bbd8290f53c95e5a3b7386"},{url:"/favicon/favicon-32x32.png",revision:"011006ebae112bd4f705aeaa2862a0a3"},{url:"/favicon/favicon.ico",revision:"b25e5fe03f1002161134c0c07bc8d9eb"},{url:"/favicon/site.webmanifest",revision:"053100cb84a50d2ae7f5492f7dd7f25e"},{url:"/icon-192x192.png",revision:"06f0caf67a530ab134cc02c81c40bce0"},{url:"/icon-256x256.png",revision:"ef2eb054a9f51edb93e39959cc113beb"},{url:"/icon-384x384.png",revision:"07f37a7a12806561c522c9b1aa7d3ffe"},{url:"/icon-512x512.png",revision:"e9d1f8234bd309b5f71c0d874fe2b808"},{url:"/images/Frame21.jpg",revision:"2552a96e7a1335626dcf762da9c5ec9a"},{url:"/images/Frame210.jpg",revision:"f0370729cf056e3a65053e5605763506"},{url:"/images/Frame211.jpg",revision:"ea3ae762ec35af43194cd8e37e4f4486"},{url:"/images/Frame212.jpg",revision:"d8367dd84459b913ef2d4e05e3083edd"},{url:"/images/Frame22.jpg",revision:"05949636e9b84feea418557233dcab0b"},{url:"/images/Frame23.jpg",revision:"3e96652824fd4f5e42ed6554b3273952"},{url:"/images/Frame24.jpg",revision:"27fa54e66804566c6612c6cf01b49dbd"},{url:"/images/Frame25.jpg",revision:"8bb50a826a1876fd4c66e294a9335813"},{url:"/images/Frame26.jpg",revision:"c4029d65d65088f4583d9e0aeb3d7598"},{url:"/images/Frame27.jpg",revision:"fedfc3b1e7657ac806923c9a1e9ced77"},{url:"/images/Frame28.jpg",revision:"6ed6d96c841b6cc13dfcfc1055dbf371"},{url:"/images/Frame29.jpg",revision:"7cf6db958e8420250893c02d652a00c4"},{url:"/images/Group 3anime11.jpg",revision:"15c015599d27beafeb6cc6963899a3d7"},{url:"/images/Home1.png",revision:"2d226603fe0e810b8b3159b8ca6c8378"},{url:"/images/Home2.png",revision:"f65ed36d9b60875dfdd696de3e97bf6a"},{url:"/images/Home3.png",revision:"b1d63c706cd0d12a39644c4a5796fc20"},{url:"/images/Home4.png",revision:"32949883c736df1c2cc5c8e64661258f"},{url:"/images/Hypercolor Gradient.jpg",revision:"277c88adb70a69499d2bccc8ff396d79"},{url:"/images/Logo.png",revision:"76a439fdae4e68cc6386d37af34dfe94"},{url:"/images/anime01.jpg",revision:"aa0afe28ae28dd2dfdcb1ca4175984c7"},{url:"/images/anime02.jpg",revision:"a9ff34f955851933225e18bad86245eb"},{url:"/images/anime03.jpg",revision:"7d8c64148b3df03fc75923345f6f417f"},{url:"/images/anime04.jpg",revision:"d29b4e09317645023a1670c404145b69"},{url:"/images/anime05.jpg",revision:"eeabf62f454306604c745b40ed48f581"},{url:"/images/anime06.jpg",revision:"9cd13a396dd80006b808c5b3fbf8bd9e"},{url:"/images/anime07.jpg",revision:"415552c32167531e0580d16edfbd746b"},{url:"/images/anime08.jpg",revision:"831586496bcab8af0cf4bf2768ba5287"},{url:"/images/anime09.jpg",revision:"d80c6e47ad64e93e82cbbbd12dd0964e"},{url:"/images/anime10.jpg",revision:"d149c3fd42278818b84776fb68fa3546"},{url:"/images/home6.avif",revision:"6e4fe09c570f7492c4214bb61d0f958d"},{url:"/images/milford-sound.jpg",revision:"391d7d62fb0f670f933e955ecbae5541"},{url:"/images/milky-blue-lagoon.jpg",revision:"44f98d89a562e9226f00e1d58a405fdd"},{url:"/images/paradise.jpg",revision:"b97d4c0b1b2fc76ae3878acc75d7e155"},{url:"/logo/Logo.png",revision:"76a439fdae4e68cc6386d37af34dfe94"},{url:"/manifest.webmanifest",revision:"6a66c00fcafc6a399d066564c284e437"},{url:"/pclub-transformed.glb",revision:"0920475c65219e2239576faf477cfe12"},{url:"/pclub.fbx",revision:"0e4d32b78f9d3b80c9ebf78ea0695f22"},{url:"/pclub.glb",revision:"60a41aa554946fd45fd8e9ccb0474096"},{url:"/pclub.gltf",revision:"1a7f1dc52cf2601ece0a78b1b5b21653"},{url:"/pclub.obj",revision:"f2cd6d8b218d363d7ee0465a83fbf97b"},{url:"/robots.txt",revision:"d6e704da32ee4b0904180d3a7f07e0b5"},{url:"/sitemap-0.xml",revision:"95fbd01f684dff27e1887859acd2b474"},{url:"/sitemap.xml",revision:"0850e0dcec248e3e6478d5bc3f7378f0"}],{ignoreURLParametersMatching:[]}),e.cleanupOutdatedCaches(),e.registerRoute("/",new e.NetworkFirst({cacheName:"start-url",plugins:[{cacheWillUpdate:async({request:e,response:a,event:i,state:s})=>a&&"opaqueredirect"===a.type?new Response(a.body,{status:200,statusText:"OK",headers:a.headers}):a}]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:gstatic)\.com\/.*/i,new e.CacheFirst({cacheName:"google-fonts-webfonts",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:31536e3})]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:googleapis)\.com\/.*/i,new e.StaleWhileRevalidate({cacheName:"google-fonts-stylesheets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,new e.StaleWhileRevalidate({cacheName:"static-font-assets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,new e.StaleWhileRevalidate({cacheName:"static-image-assets",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/image\?url=.+$/i,new e.StaleWhileRevalidate({cacheName:"next-image",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp3|wav|ogg)$/i,new e.CacheFirst({cacheName:"static-audio-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp4)$/i,new e.CacheFirst({cacheName:"static-video-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:js)$/i,new e.StaleWhileRevalidate({cacheName:"static-js-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:css|less)$/i,new e.StaleWhileRevalidate({cacheName:"static-style-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/data\/.+\/.+\.json$/i,new e.StaleWhileRevalidate({cacheName:"next-data",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:json|xml|csv)$/i,new e.NetworkFirst({cacheName:"static-data-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;const a=e.pathname;return!a.startsWith("/api/auth/")&&!!a.startsWith("/api/")}),new e.NetworkFirst({cacheName:"apis",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;return!e.pathname.startsWith("/api/")}),new e.NetworkFirst({cacheName:"others",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>!(self.origin===e.origin)),new e.NetworkFirst({cacheName:"cross-origin",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:3600})]}),"GET")}));
