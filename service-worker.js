if(!self.define){const e=e=>{"require"!==e&&(e+=".js");let r=Promise.resolve();return s[e]||(r=new Promise(async r=>{if("document"in self){const s=document.createElement("script");s.src=e,document.head.appendChild(s),s.onload=r}else importScripts(e),r()})),r.then(()=>{if(!s[e])throw new Error(`Module ${e} didn’t register its module`);return s[e]})},r=(r,s)=>{Promise.all(r.map(e)).then(e=>s(1===e.length?e[0]:e))},s={require:Promise.resolve(r)};self.define=(r,i,c)=>{s[r]||(s[r]=Promise.resolve().then(()=>{let s={};const o={uri:location.origin+r.slice(1)};return Promise.all(i.map(r=>{switch(r){case"exports":return s;case"module":return o;default:return e(r)}})).then(e=>{const r=c(...e);return s.default||(s.default=r),s})}))}}define("./service-worker.js",["./workbox-1bbb3e0e"],(function(e){"use strict";self.addEventListener("message",e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()}),e.precacheAndRoute([{url:"/./index.html",revision:"c26d1484b782b5d588b2005298522b39"},{url:"/./trips.html",revision:"2de9a2caac0fc735050a875664cce7e2"},{url:"/action-architecture-blurred-background-building-386007.jpg",revision:"6410e832a2e74a5da0e1b6f74b854cd1"},{url:"/cafe-camera-classic-close-up-413960.jpg",revision:"678922c79dbef4e84e1e870dcc4f8d92"},{url:"/cheerful-young-female-secretary-using-on-smartphone-at-4149075.jpg",revision:"98b2cf1051cf47ef1d33460350467f14"},{url:"/index.css",revision:"da408f5d98a89a62c406373ffd2824e3"},{url:"/index.js",revision:"1cef7a5ac100547dbfeeeecc7ebf0ab0"},{url:"/photo-of-woman-wearing-eyeglasses-3184405.jpg",revision:"5ab66e763900d4e4f4baa0a5c1e8b48d"},{url:"/trips.css",revision:"da408f5d98a89a62c406373ffd2824e3"},{url:"/trips.js",revision:"90a524d4fdf3fee5a8cc1193ff14b867"}],{})}));
//# sourceMappingURL=service-worker.js.map