if(!self.define){let e,i={};const s=(s,n)=>(s=new URL(s+".js",n).href,i[s]||new Promise((i=>{if("document"in self){const e=document.createElement("script");e.src=s,e.onload=i,document.head.appendChild(e)}else e=s,importScripts(s),i()})).then((()=>{let e=i[s];if(!e)throw new Error(`Module ${s} didn’t register its module`);return e})));self.define=(n,r)=>{const t=e||("document"in self?document.currentScript.src:"")||location.href;if(i[t])return;let o={};const l=e=>s(e,t),d={module:{uri:t},exports:o,require:l};i[t]=Promise.all(n.map((e=>d[e]||l(e)))).then((e=>(r(...e),o)))}}define(["./workbox-e1498109"],(function(e){"use strict";self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"assets/index-hhPbAtEk.css",revision:null},{url:"assets/index-zJ-_EUdQ.js",revision:null},{url:"index.html",revision:"f64e471a8a59edfc2dfa4ffb7d967458"},{url:"registerSW.js",revision:"11ca290ee3659848271a1766632a2b83"},{url:"img/blog.png",revision:"a66a27f057c7a8332d18ee438bb34e4f"},{url:"manifest.webmanifest",revision:"440da49678373d494e45a00bb8a4fbdd"}],{}),e.cleanupOutdatedCaches(),e.registerRoute(new e.NavigationRoute(e.createHandlerBoundToURL("index.html")))}));
