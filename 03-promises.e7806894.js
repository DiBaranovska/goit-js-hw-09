function e(e){return e&&e.__esModule?e.default:e}var o="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},n={},r=o.parcelRequired7c6;null==r&&((r=function(e){if(e in t)return t[e].exports;if(e in n){var o=n[e];delete n[e];var r={id:e,exports:{}};return t[e]=r,o.call(r.exports,r,r.exports),r.exports}var i=new Error("Cannot find module '"+e+"'");throw i.code="MODULE_NOT_FOUND",i}).register=function(e,o){n[e]=o},o.parcelRequired7c6=r);var i=r("7Y9D8");const l=document.querySelector("form");function u(e,o){return promise=new Promise(((t,n)=>{const r=Math.random()>.3;setTimeout((()=>{r?t({position:e,delay:o}):n({position:e,delay:o})}),o)}))}l.addEventListener("submit",(o=>{o.preventDefault();for(let o=0;o<Number(l.amount.value);o+=1)delay=Number(l.delay.value)+Number(l.step.value)*o,u(o,delay).then((({position:o,delay:t})=>{e(i).Notify.success(`✅ Fulfilled promise ${o+1} in ${t}ms`)})).catch((({position:o,delay:t})=>{e(i).Notify.failure(`❌ Rejected promise ${o+1} in ${t}ms`)}))}));
//# sourceMappingURL=03-promises.e7806894.js.map
