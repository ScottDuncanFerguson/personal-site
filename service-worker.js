try{self["workbox:core:6.0.0-rc.0"]&&_()}catch(t){}const t=(t,...e)=>{let s=t;return e.length>0&&(s+=` :: ${JSON.stringify(e)}`),s};class e extends Error{constructor(e,s){super(t(e,s)),this.name=e,this.details=s}}try{self["workbox:routing:6.0.0-rc.0"]&&_()}catch(t){}const s=t=>t&&"object"==typeof t?t:{handle:t};class c{constructor(t,e,c="GET"){this.handler=s(e),this.match=t,this.method=c}}class a extends c{constructor(t,e,s){super((({url:e})=>{const s=t.exec(e.href);if(s&&(e.origin===location.origin||0===s.index))return s.slice(1)}),e,s)}}class i{constructor(){this.t=new Map,this.i=new Map}get routes(){return this.t}addFetchListener(){self.addEventListener("fetch",(t=>{const{request:e}=t,s=this.handleRequest({request:e,event:t});s&&t.respondWith(s)}))}addCacheListener(){self.addEventListener("message",(t=>{if(t.data&&"CACHE_URLS"===t.data.type){const{payload:e}=t.data,s=Promise.all(e.urlsToCache.map((e=>{"string"==typeof e&&(e=[e]);const s=new Request(...e);return this.handleRequest({request:s,event:t})})));t.waitUntil(s),t.ports&&t.ports[0]&&s.then((()=>t.ports[0].postMessage(!0)))}}))}handleRequest({request:t,event:e}){const s=new URL(t.url,location.href);if(!s.protocol.startsWith("http"))return;const c=s.origin===location.origin,{params:a,route:i}=this.findMatchingRoute({event:e,request:t,sameOrigin:c,url:s});let n=i&&i.handler;const r=t.method;if(!n&&this.i.has(r)&&(n=this.i.get(r)),!n)return;let o;try{o=n.handle({url:s,request:t,event:e,params:a})}catch(t){o=Promise.reject(t)}return o instanceof Promise&&this.o&&(o=o.catch((c=>this.o.handle({url:s,request:t,event:e})))),o}findMatchingRoute({url:t,sameOrigin:e,request:s,event:c}){const a=this.t.get(s.method)||[];for(const i of a){let a;const n=i.match({url:t,sameOrigin:e,request:s,event:c});if(n)return a=n,(Array.isArray(n)&&0===n.length||n.constructor===Object&&0===Object.keys(n).length||"boolean"==typeof n)&&(a=void 0),{route:i,params:a}}return{}}setDefaultHandler(t,e="GET"){this.i.set(e,s(t))}setCatchHandler(t){this.o=s(t)}registerRoute(t){this.t.has(t.method)||this.t.set(t.method,[]),this.t.get(t.method).push(t)}unregisterRoute(t){if(!this.t.has(t.method))throw new e("unregister-route-but-not-found-with-method",{method:t.method});const s=this.t.get(t.method).indexOf(t);if(!(s>-1))throw new e("unregister-route-route-not-registered");this.t.get(t.method).splice(s,1)}}let n;const r=()=>(n||(n=new i,n.addFetchListener(),n.addCacheListener()),n);function o(t,s,i){let n;if("string"==typeof t){const e=new URL(t,location.href);n=new c((({url:t})=>t.href===e.href),s,i)}else if(t instanceof RegExp)n=new a(t,s,i);else if("function"==typeof t)n=new c(t,s,i);else{if(!(t instanceof c))throw new e("unsupported-route-type",{moduleName:"workbox-routing",funcName:"registerRoute",paramName:"capture"});n=t}return r().registerRoute(n),n}try{self["workbox:strategies:6.0.0-rc.0"]&&_()}catch(t){}const h={cacheWillUpdate:async({response:t})=>200===t.status||0===t.status?t:null},f={googleAnalytics:"googleAnalytics",precache:"precache-v2",prefix:"workbox",runtime:"runtime",suffix:"undefined"!=typeof registration?registration.scope:""},u=t=>[f.prefix,t,f.suffix].filter((t=>t&&t.length>0)).join("-"),l=t=>{(t=>{for(const e of Object.keys(f))t(e)})((e=>{"string"==typeof t[e]&&(f[e]=t[e])}))},d=t=>t||u(f.precache),w=t=>t||u(f.runtime);function p(){return(p=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var s=arguments[e];for(var c in s)Object.prototype.hasOwnProperty.call(s,c)&&(t[c]=s[c])}return t}).apply(this,arguments)}function b(t,e){const s=new URL(t);for(const t of e)s.searchParams.delete(t);return s.href}class y{constructor(){this.promise=new Promise(((t,e)=>{this.resolve=t,this.reject=e}))}}const v=new Set;function g(t){return"string"==typeof t?new Request(t):t}class m{constructor(t,e){this.h={},Object.assign(this,e),this.event=e.event,this.u=t,this.l=new y,this.p=[],this.v=[...t.plugins],this.g=new Map;for(const t of this.v)this.g.set(t,{});this.event.waitUntil(this.l.promise)}fetch(t){return this.waitUntil((async()=>{const{event:s}=this;let c=g(t);if("navigate"===c.mode&&s instanceof FetchEvent&&s.preloadResponse){const t=await s.preloadResponse;if(t)return t}const a=this.hasCallback("fetchDidFail")?c.clone():null;try{for(const t of this.iterateCallbacks("requestWillFetch"))c=await t({request:c.clone(),event:s})}catch(t){throw new e("plugin-error-request-will-fetch",{thrownError:t})}const i=c.clone();try{let t;t=await fetch(c,"navigate"===c.mode?void 0:this.u.fetchOptions);for(const e of this.iterateCallbacks("fetchDidSucceed"))t=await e({event:s,request:i,response:t});return t}catch(t){throw a&&await this.runCallbacks("fetchDidFail",{error:t,event:s,originalRequest:a.clone(),request:i.clone()}),t}})())}async fetchAndCachePut(t){const e=await this.fetch(t),s=e.clone();return this.waitUntil(this.cachePut(t,s)),e}cacheMatch(t){return this.waitUntil((async()=>{const e=g(t);let s;const{cacheName:c,matchOptions:a}=this.u,i=await this.getCacheKey(e,"read"),n=p({},a,{cacheName:c});s=await caches.match(i,n);for(const t of this.iterateCallbacks("cachedResponseWillBeUsed"))s=await t({cacheName:c,matchOptions:a,cachedResponse:s,request:i,event:this.event})||void 0;return s})())}async cachePut(t,s){const c=g(t);var a;await(a=0,new Promise((t=>setTimeout(t,a))));const i=await this.getCacheKey(c,"write");if(!s)throw new e("cache-put-with-no-response",{url:(n=i.url,new URL(String(n),location.href).href.replace(new RegExp(`^${location.origin}`),""))});var n;const r=await this.m(s);if(!r)return;const{cacheName:o,matchOptions:h}=this.u,f=await self.caches.open(o),u=this.hasCallback("cacheDidUpdate"),l=u?await async function(t,e,s,c){const a=b(e.url,s);if(e.url===a)return t.match(e,c);const i=p({},c,{ignoreSearch:!0}),n=await t.keys(e,i);for(const e of n)if(a===b(e.url,s))return t.match(e,c)}(f,i.clone(),["__WB_REVISION__"],h):null;try{await f.put(i,u?r.clone():r)}catch(t){throw"QuotaExceededError"===t.name&&await async function(){for(const t of v)await t()}(),t}for(const t of this.iterateCallbacks("cacheDidUpdate"))await t({cacheName:o,oldResponse:l,newResponse:r.clone(),request:i,event:this.event})}async getCacheKey(t,e){if(!this.h[e]){let s=t;for(const t of this.iterateCallbacks("cacheKeyWillBeUsed"))s=g(await t({mode:e,request:s,event:this.event,params:this.params}));this.h[e]=s}return this.h[e]}hasCallback(t){for(const e of this.u.plugins)if(t in e)return!0;return!1}async runCallbacks(t,e){for(const s of this.iterateCallbacks(t))await s(e)}*iterateCallbacks(t){for(const e of this.u.plugins)if("function"==typeof e[t]){const s=this.g.get(e),c=c=>{const a=p({},c,{state:s});return e[t](a)};yield c}}waitUntil(t){return this.p.push(t),t}async doneWaiting(){let t;for(;t=this.p.shift();)await t}destroy(){this.l.resolve()}async m(t){let e=t,s=!1;for(const t of this.iterateCallbacks("cacheWillUpdate"))if(e=await t({request:this.request,response:e,event:this.event})||void 0,s=!0,!e)break;return s||e&&200!==e.status&&(e=void 0),e}}class R{constructor(t={}){this.cacheName=w(t.cacheName),this.plugins=t.plugins||[],this.fetchOptions=t.fetchOptions,this.matchOptions=t.matchOptions}handle(t){const[e]=this.handleAll(t);return e}handleAll(t){t instanceof FetchEvent&&(t={event:t,request:t.request});const e=t.event,s="string"==typeof t.request?new Request(t.request):t.request,c="params"in t?t.params:void 0,a=new m(this,{event:e,request:s,params:c}),i=this.R(a,s,e);return[i,this.j(i,a,s,e)]}async R(t,s,c){let a;await t.runCallbacks("handlerWillStart",{event:c,request:s});try{if(a=await this.q(s,t),!a||"error"===a.type)throw new e("no-response",{url:s.url})}catch(e){for(const i of t.iterateCallbacks("handlerDidError"))if(a=await i({error:e,event:c,request:s}),a)break;if(!a)throw e}for(const e of t.iterateCallbacks("handlerWillRespond"))a=await e({event:c,request:s,response:a});return a}async j(t,e,s,c){let a,i;try{a=await t}catch(i){}try{await e.runCallbacks("handlerDidRespond",{event:c,request:s,response:a}),await e.doneWaiting()}catch(t){i=t}if(await e.runCallbacks("handlerDidComplete",{event:c,request:s,response:a,error:i}),e.destroy(),i)throw i}}function j(t,e){const s=e();return t.waitUntil(s),s}try{self["workbox:precaching:6.0.0-rc.0"]&&_()}catch(t){}function q(t){if(!t)throw new e("add-to-cache-list-unexpected-type",{entry:t});if("string"==typeof t){const e=new URL(t,location.href);return{cacheKey:e.href,url:e.href}}const{revision:s,url:c}=t;if(!c)throw new e("add-to-cache-list-unexpected-type",{entry:t});if(!s){const t=new URL(c,location.href);return{cacheKey:t.href,url:t.href}}const a=new URL(c,location.href),i=new URL(c,location.href);return a.searchParams.set("__WB_REVISION__",s),{cacheKey:a.href,url:i.href}}class U{constructor(){this.updatedURLs=[],this.notUpdatedURLs=[],this.handlerWillStart=async({request:t,state:e})=>{e&&(e.originalRequest=t)},this.cachedResponseWillBeUsed=async({event:t,state:e,cachedResponse:s})=>{if("install"===t.type){const t=e.originalRequest.url;s?this.notUpdatedURLs.push(t):this.updatedURLs.push(t)}return s}}}class L{constructor({precacheController:t}){this.cacheKeyWillBeUsed=async({request:t,params:e})=>{const s=e&&e.cacheKey||this.U.getCacheKeyForURL(t.url);return s?new Request(s):t},this.U=t}}let C;async function x(t,s){let c=null;if(t.url){c=new URL(t.url).origin}if(c!==self.location.origin)throw new e("cross-origin-copy-response",{origin:c});const a=t.clone(),i={headers:new Headers(a.headers),status:a.status,statusText:a.statusText},n=s?s(i):i,r=function(){if(void 0===C){const t=new Response("");if("body"in t)try{new Response(t.body),C=!0}catch(t){C=!1}C=!1}return C}()?a.body:await a.blob();return new Response(r,n)}const E={cacheWillUpdate:async({response:t})=>t.redirected?await x(t):t};class N extends R{constructor(t={}){t.cacheName=d(t.cacheName),super(t),this.L=!1!==t.fallbackToNetwork,this.plugins.push(E)}async q(t,e){const s=await e.cacheMatch(t);return s||(e.event&&"install"===e.event.type?await this._(t,e):await this.C(t,e))}async C(t,s){let c;if(!this.L)throw new e("missing-precache-entry",{cacheName:this.cacheName,url:t.url});return c=await s.fetch(t),c}async _(t,s){const c=await s.fetchAndCachePut(t);let a=Boolean(c);if(c&&c.status>=400&&!this.N()&&(a=!1),!a)throw new e("bad-precaching-response",{url:t.url,status:c.status});return c}N(){return this.plugins.some((t=>t.cacheWillUpdate&&t!==E))}}class k{constructor({cacheName:t,plugins:e=[],fallbackToNetwork:s=!0}={}){this.k=new Map,this.T=new Map,this.O=new Map,this.u=new N({cacheName:d(t),plugins:[...e,new L({precacheController:this})],fallbackToNetwork:s}),this.install=this.install.bind(this),this.activate=this.activate.bind(this)}get strategy(){return this.u}precache(t){this.addToCacheList(t),this.S||(self.addEventListener("install",this.install),self.addEventListener("activate",this.activate),this.S=!0)}addToCacheList(t){const s=[];for(const c of t){"string"==typeof c?s.push(c):c&&void 0===c.revision&&s.push(c.url);const{cacheKey:t,url:a}=q(c),i="string"!=typeof c&&c.revision?"reload":"default";if(this.k.has(a)&&this.k.get(a)!==t)throw new e("add-to-cache-list-conflicting-entries",{firstEntry:this.k.get(a),secondEntry:t});if("string"!=typeof c&&c.integrity){if(this.O.has(t)&&this.O.get(t)!==c.integrity)throw new e("add-to-cache-list-conflicting-integrities",{url:a});this.O.set(t,c.integrity)}if(this.k.set(a,t),this.T.set(a,i),s.length>0){const t=`Workbox is precaching URLs without revision info: ${s.join(", ")}\nThis is generally NOT safe. Learn more at https://bit.ly/wb-precache`;console.warn(t)}}}install(t){return j(t,(async()=>{const e=new U;this.strategy.plugins.push(e);for(const[e,s]of this.k){const c=this.O.get(s),a=this.T.get(e),i=new Request(e,{integrity:c,cache:a,credentials:"same-origin"});await Promise.all(this.strategy.handleAll({params:{cacheKey:s},request:i,event:t}))}const{updatedURLs:s,notUpdatedURLs:c}=e;return{updatedURLs:s,notUpdatedURLs:c}}))}activate(t){return j(t,(async()=>{const t=await self.caches.open(this.strategy.cacheName),e=await t.keys(),s=new Set(this.k.values()),c=[];for(const a of e)s.has(a.url)||(await t.delete(a),c.push(a.url));return{deletedURLs:c}}))}getURLsToCacheKeys(){return this.k}getCachedURLs(){return[...this.k.keys()]}getCacheKeyForURL(t){const e=new URL(t,location.href);return this.k.get(e.href)}async matchPrecache(t){const e=t instanceof Request?t.url:t,s=this.getCacheKeyForURL(e);if(s){return(await self.caches.open(this.strategy.cacheName)).match(s)}}createHandlerBoundToURL(t){const s=this.getCacheKeyForURL(t);if(!s)throw new e("non-precached-url",{url:t});return e=>(e.request=new Request(t),e.params=p({cacheKey:s},e.params),this.strategy.handle(e))}}let T;const O=()=>(T||(T=new k),T);class S extends c{constructor(t,e){super((({request:s})=>{const c=t.getURLsToCacheKeys();for(const t of function*(t,{ignoreURLParametersMatching:e=[/^utm_/,/^fbclid$/],directoryIndex:s="index.html",cleanURLs:c=!0,urlManipulation:a}={}){const i=new URL(t,location.href);i.hash="",yield i.href;const n=function(t,e=[]){for(const s of[...t.searchParams.keys()])e.some((t=>t.test(s)))&&t.searchParams.delete(s);return t}(i,e);if(yield n.href,s&&n.pathname.endsWith("/")){const t=new URL(n.href);t.pathname+=s,yield t.href}if(c){const t=new URL(n.href);t.pathname+=".html",yield t.href}if(a){const t=a({url:i});for(const e of t)yield e.href}}(s.url,e)){const e=c.get(t);if(e)return{cacheKey:e}}}),t.strategy)}}var P;l({prefix:"ts-react-webpack"}),self.skipWaiting(),self.addEventListener("activate",(()=>self.clients.claim())),P={},function(t){O().precache(t)}([{url:"./static/css/290.290.3d54e4db3cc7dbbb6731.css",revision:"bc793fb9344b3da1a54b0b2604a7a0fa"},{url:"./static/css/403.403.a3c1e769cab42bd61f88.css",revision:"4aa3e88560a067c5bf4e485b0502525f"},{url:"./static/css/645.645.0356525a27c9edc62aeb.css",revision:"ff58d67e1ca834829833f0aad288e1b3"},{url:"./static/css/788.788.8a4b1f38922a650188f8.css",revision:"9c6adccf7f502bde417d5ade45813118"},{url:"./static/css/855.855.082b2048f75d57e33bf9.css",revision:"fad150bc8e4943eb18d8d893ef71f228"},{url:"./static/css/app.d3be0c0593f3c2bc859c.css",revision:"37bbe4f86bc1b35e91e117ce74052a75"},{url:"./static/css/home.177.21e987e9cdfa9860fb99.css",revision:"3d610424e7212f8310377c014b39a039"},{url:"./static/css/login.535.8dd63f695c2846eea41a.css",revision:"d60dd39036481f915b181535089b7cda"},{url:"./static/css/socket-debugger.938.355cae3f62ae69af9b6c.css",revision:"393850de0563fbf29db39beaa7f306a5"},{url:"./static/css/toys.221.7b1fa1da6d6e008310be.css",revision:"6cdf986cfbd8fa4b3485f5d187671c29"},{url:"./static/css/users.681.edc6713e343c5d9bf64a.css",revision:"d8b392308a9d22d01df74ba01cac0891"},{url:"./static/img/Buzzy.571436c.jpg",revision:"77c852ab3ac549ae536c6e22f6dd5e2d"},{url:"./static/js/290.290.ff27fc1b7c1e2c6a212d.js",revision:"d72df3148f057953ec83fc1a6d2901b2"},{url:"./static/js/403.403.345186ccc4366a383a47.js",revision:"190b9dfa155f2df464a957dc11a61f25"},{url:"./static/js/553.553.0f3df674261ee275c3eb.js",revision:"237e737118c75e331040ba51204cb542"},{url:"./static/js/645.645.6753ecf583d6b0cecaeb.js",revision:"35479ccb6ff6c1086694b03c830c3a20"},{url:"./static/js/744.744.729cf803ecbc2d0a82f6.js",revision:"5ca5427fa1287d13965b46f87de1f332"},{url:"./static/js/744.744.729cf803ecbc2d0a82f6.js.LICENSE.txt",revision:"a328ac2b24437cd173a31f44260ab82a"},{url:"./static/js/788.788.2226ad1371d286ef5c00.js",revision:"58aaf1080eb67dca07d7d200856c344c"},{url:"./static/js/855.855.7adb04996ef1fc31d36c.js",revision:"bca9dd0f06e28a1812b4274ef863cdf1"},{url:"./static/js/antd-en-US.699.0dbd0c1d7edc7e6ee239.js",revision:"2f20d8baa387205431e99afd9d8873d3"},{url:"./static/js/antd-zh-CN.935.54ff256160ebaaba1d78.js",revision:"12aa747f06e577ee8c3106cca3b8f771"},{url:"./static/js/app.e2302e4b67334c5852d1.js",revision:"11e461b3e3b122b6616ec2f81d9ffcb3"},{url:"./static/js/app.e2302e4b67334c5852d1.js.LICENSE.txt",revision:"508f6b707ff577103d15a77db8b7a81d"},{url:"./static/js/en-US.745.f5964459e2f5d0f7266b.js",revision:"30aeffdc3ea9f7fb1ce0bfe5971c6398"},{url:"./static/js/home.177.63340e7c71722e9d16f5.js",revision:"ca7a71bbc261457da7d2d664475f4241"},{url:"./static/js/login.535.3aab416c4e63cf0e2165.js",revision:"c160c7da232a59f0cdbb4d7bc932750a"},{url:"./static/js/socket-debugger.938.9272ebc6296b5f6c44a1.js",revision:"4a50a5409b0acfa6f43d0d6e90021ccc"},{url:"./static/js/toys.221.281a6b556546b2d94e35.js",revision:"b848dfd5115501221a5f069168148ffc"},{url:"./static/js/users.681.b68c09e33681f6b8cb0f.js",revision:"2b977b2bda4eb60af98d8fa9ac8f7402"},{url:"./static/js/zh-CN.822.7983ffc35b2473ff1041.js",revision:"95f69dd31b3141e45aa2bfc734063ec3"}]),function(t){const e=O();o(new S(e,t))}(P),o(/https:\/\/starter.jackple.com/,new class extends R{constructor(t={}){super(t),this.plugins.some((t=>"cacheWillUpdate"in t))||this.plugins.unshift(h),this.P=t.networkTimeoutSeconds||0}async q(t,s){const c=[],a=[];let i;if(this.P){const{id:e,promise:n}=this.W({request:t,logs:c,handler:s});i=e,a.push(n)}const n=this.K({timeoutId:i,request:t,logs:c,handler:s});a.push(n);for(const t of a)s.waitUntil(t);let r=await Promise.race(a);if(r||(r=await n),!r)throw new e("no-response",{url:t.url});return r}W({request:t,logs:e,handler:s}){let c;return{promise:new Promise((e=>{c=setTimeout((async()=>{e(await s.cacheMatch(t))}),1e3*this.P)})),id:c}}async K({timeoutId:t,request:e,logs:s,handler:c}){let a,i;try{i=await c.fetchAndCachePut(e)}catch(t){a=t}return t&&clearTimeout(t),!a&&i||(i=await c.cacheMatch(e)),i}},"GET"),o(/https:\/\/starter.jackple.com\/static/,new class extends R{constructor(t){super(t),this.plugins.some((t=>"cacheWillUpdate"in t))||this.plugins.unshift(h)}async q(t,s){const c=s.fetchAndCachePut(t).catch((()=>{}));let a,i=await s.cacheMatch(t);if(i);else try{i=await c}catch(t){a=t}if(!i)throw new e("no-response",{url:t.url,error:a});return i}},"GET");
//# sourceMappingURL=service-worker.js.map
