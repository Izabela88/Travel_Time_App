var Client=function(e){var t={};function n(o){if(t[o])return t[o].exports;var r=t[o]={i:o,l:!1,exports:{}};return e[o].call(r.exports,r,r.exports,n),r.l=!0,r.exports}return n.m=e,n.c=t,n.d=function(e,t,o){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)n.d(o,r,function(t){return e[t]}.bind(null,r));return o},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="/",n(n.s=3)}([function(t,n,o){"use strict";o.d(n,"a",(function(){return u})),o.d(n,"b",(function(){return r}));async function r(e){event.preventDefault();const t=document.getElementById("from-box").value;let n=document.getElementById("date-picker").value;try{const e=await a("http://api.geonames.org/searchJSON?q=",t,"&username=izz88"),o={destination:e.geonames[0].name,country:e.geonames[0].countryName},r=await c("https://api.weatherbit.io/v2.0/forecast/daily?city=",t,"&key=ca8ad9afa1224805a512cb293128295a"),l={temperature:r.data[0].temp,weatherInfo:r.data[0].weather.description},s={largeImg:(await i("https://pixabay.com/api/?key=17257813-2246e0d7e1d1d470c6dfee7fb&q=",t,"&image_type=photo")).hits[0].largeImageURL},u={destination:o.destination,country:o.country,temperature:l.temperature,weatherInfo:l.weatherInfo,largeImg:s.largeImg,date:n};console.log(u),function(e){let t;t=null===localStorage.getItem("trips")?[]:JSON.parse(localStorage.getItem("trips"));t.push(e),localStorage.setItem("trips",JSON.stringify(t))}(u),location.replace("http://localhost:8080/trips.html")}catch(e){console.log(e)}}const a=async(e,t,n)=>{const o=await fetch(e+t+n);try{const e=await o.json();return console.log(e),e}catch(e){console.log(e)}},c=async(e,t,n)=>{const o=await fetch(e+t+n);try{const e=await o.json();return console.log(e),e}catch(e){console.log(e)}},i=async(e,t,n)=>{const o=await fetch(e+t+n);try{const e=await o.json();return console.log(e),e}catch(e){console.log(e)}};var l=window.pageYOffset;window.onscroll=function(){var e=window.pageYOffset;document.querySelector("#navbar").style.top=l>e?"0":"-250px",l=e};function s(t){!function(t){t.preventDefault(e);const n=t.currentTarget.getAttribute("href");window.scrollTo({top:document.querySelector(n).offsetTop,behavior:"smooth"})}(t)}document.querySelectorAll("#navbar a").forEach(e=>e.addEventListener("click",s));document.querySelector("#back-to-top-btn").addEventListener("click",(function(){window.scroll(0,0)}));const u=()=>{const e=document.querySelector(".burger"),t=document.querySelector(".nav-links"),n=document.querySelectorAll(".nav-links li");e.addEventListener("click",()=>{t.classList.toggle("nav-active"),n.forEach((e,t)=>{e.style.animation?e.style.animation="":e.style.animation=`navLinkFade 0.5s ease forwards ${t/7+.6}s`}),e.classList.toggle("toggle")})};u()},,function(e,t,n){},function(e,t,n){"use strict";n.r(t);n(2);var o=n(0);n.d(t,"navSlide",(function(){return o.a})),n.d(t,"performAction",(function(){return o.b}))}]);
//# sourceMappingURL=index.js.map