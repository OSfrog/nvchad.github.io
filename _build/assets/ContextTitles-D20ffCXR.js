import{$ as d,G as x,H as w,I as R,e as m,h as T,k as _,m as S,n as E,s as I,p as P,r as C,t as j}from"./web-CBU83r8B.js";import{h as B}from"./routing-CayKO4ES.js";const O=Symbol("store-raw"),u=Symbol("store-node"),a=Symbol("store-has"),v=Symbol("store-self");function D(e){let n=e[d];if(!n&&(Object.defineProperty(e,d,{value:n=new Proxy(e,W)}),!Array.isArray(e))){const t=Object.keys(e),r=Object.getOwnPropertyDescriptors(e);for(let o=0,l=t.length;o<l;o++){const i=t[o];r[i].get&&Object.defineProperty(e,i,{enumerable:r[i].enumerable,get:r[i].get.bind(n)})}}return n}function y(e){let n;return e!=null&&typeof e=="object"&&(e[d]||!(n=Object.getPrototypeOf(e))||n===Object.prototype||Array.isArray(e))}function b(e,n=new Set){let t,r,o,l;if(t=e!=null&&e[O])return t;if(!y(e)||n.has(e))return e;if(Array.isArray(e)){Object.isFrozen(e)?e=e.slice(0):n.add(e);for(let i=0,c=e.length;i<c;i++)o=e[i],(r=b(o,n))!==o&&(e[i]=r)}else{Object.isFrozen(e)?e=Object.assign({},e):n.add(e);const i=Object.keys(e),c=Object.getOwnPropertyDescriptors(e);for(let s=0,f=i.length;s<f;s++)l=i[s],!c[l].get&&(o=e[l],(r=b(o,n))!==o&&(e[l]=r))}return e}function A(e,n){let t=e[n];return t||Object.defineProperty(e,n,{value:t=Object.create(null)}),t}function h(e,n,t){if(e[n])return e[n];const[r,o]=m(t,{equals:!1,internal:!0});return r.$=o,e[n]=r}function K(e,n){const t=Reflect.getOwnPropertyDescriptor(e,n);return!t||t.get||!t.configurable||n===d||n===u||(delete t.value,delete t.writable,t.get=()=>e[d][n]),t}function H(e){w()&&h(A(e,u),v)()}function V(e){return H(e),Reflect.ownKeys(e)}const W={get(e,n,t){if(n===O)return e;if(n===d)return t;if(n===x)return H(e),t;const r=A(e,u),o=r[n];let l=o?o():e[n];if(n===u||n===a||n==="__proto__")return l;if(!o){const i=Object.getOwnPropertyDescriptor(e,n);w()&&(typeof l!="function"||e.hasOwnProperty(n))&&!(i&&i.get)&&(l=h(r,n,l)())}return y(l)?D(l):l},has(e,n){return n===O||n===d||n===x||n===u||n===a||n==="__proto__"?!0:(w()&&h(A(e,a),n)(),n in e)},set(){return!0},deleteProperty(){return!0},ownKeys:V,getOwnPropertyDescriptor:K};function $(e,n,t,r=!1){if(!r&&e[n]===t)return;const o=e[n],l=e.length;t===void 0?(delete e[n],e[a]&&e[a][n]&&o!==void 0&&e[a][n].$()):(e[n]=t,e[a]&&e[a][n]&&o===void 0&&e[a][n].$());let i=A(e,u),c;if((c=h(i,n,o))&&c.$(()=>t),Array.isArray(e)&&e.length!==l){for(let s=e.length;s<l;s++)(c=i[s])&&c.$();(c=h(i,"length",l))&&c.$(e.length)}(c=i[v])&&c.$()}function p(e,n){const t=Object.keys(n);for(let r=0;r<t.length;r+=1){const o=t[r];$(e,o,n[o])}}function q(e,n){if(typeof n=="function"&&(n=n(e)),n=b(n),Array.isArray(n)){if(e===n)return;let t=0,r=n.length;for(;t<r;t++){const o=n[t];e[t]!==o&&$(e,t,o)}$(e,"length",r)}else p(e,n)}function g(e,n,t=[]){let r,o=e;if(n.length>1){r=n.shift();const i=typeof r,c=Array.isArray(e);if(Array.isArray(r)){for(let s=0;s<r.length;s++)g(e,[r[s]].concat(n),t);return}else if(c&&i==="function"){for(let s=0;s<e.length;s++)r(e[s],s)&&g(e,[s].concat(n),t);return}else if(c&&i==="object"){const{from:s=0,to:f=e.length-1,by:N=1}=r;for(let k=s;k<=f;k+=N)g(e,[k].concat(n),t);return}else if(n.length>1){g(e[r],n,[r].concat(t));return}o=e[r],t=[r].concat(t)}let l=n[0];typeof l=="function"&&(l=l(o,t),l===o)||r===void 0&&l==null||(l=b(l),r===void 0||y(o)&&y(l)&&!Array.isArray(l)?p(o,l):$(e,r,l))}function F(...[e,n]){const t=b(e||{}),r=Array.isArray(t),o=D(t);function l(...i){R(()=>{r&&i.length===1?q(t,i[0]):g(t,i)})}return[o,l]}function z(e){const n=e.getBoundingClientRect();return!!(n.top>=0&&n.left>=0&&n.bottom<=(window.innerHeight||document.documentElement.clientHeight)&&n.right<=(window.innerWidth||document.documentElement.clientWidth))}const[G,L]=m(""),[X,Y]=F([]),ee=e=>{let t=document.getElementById(e)?.querySelectorAll("h2,h3");for(let r=0;r<t?.length;r++)if(z(t[r])){L(t[r].innerText);break}},ne=()=>{const n=document.getElementById("DocContent")?.querySelectorAll("h2, h3"),t=[];n?.forEach(r=>{r.id=r.innerText.replaceAll(/[ .&]/g,"_").toLowerCase(),t.push([r.localName.toLowerCase(),r.innerText])}),Y(t)},te=()=>{const e=location.hash;if(e[0]==="#"){const n=e.substring(1);document.getElementById(n)?.scrollIntoView()}};var J=j('<div h-fit mt-6 xl="sticky top-30"><button class="rounded-lg text-lg bg-blue-1 dark:bg-dark-3 mb-3 w-full"m=t-[-2rem] xl="rounded-none pb-2 border-l-solid mb-0 pt-0 bg-transparent dark:bg-transparent">Page Contents<div class="i-mdi-chevron-down-circle text-2xl xl:hidden text-slate-7 dark:bg-blue-3"></div></button><div text=slate-5 mb-5>'),M=j("<a>");function Q(e){let n=`rounded-r-lg py-2  px-5 text-darkgrey xl:border-solid border-0 border-l-2 border-slate-2 dark:border-dark-3 ${G()==e[1]?"!border-blue-5 bg-slate-2 xl:bg-sky-1 !text-blue-7 font-medium dark:bg-dark-3 dark:!text-blue-3 dark:border-blue-4":""}`;return e[0]=="h3"?`pl-10 ${n}`:`${n}`}function re(){const[e,n]=m(!1);return(()=>{var t=_(J),r=t.firstChild,o=r.nextSibling;return r.$$click=()=>n(!e()),S(o,()=>X.map(l=>(()=>{var i=_(M);return i.$$click=()=>L(l[1]),S(i,()=>l[1]),E(c=>{var s=`${B().pathname}#${l[1].replaceAll(/[ .&]/g,"_").toLowerCase()}`,f=Q(l);return s!==c.e&&I(i,"href",c.e=s),f!==c.t&&P(i,c.t=f),c},{e:void 0,t:void 0}),C(),i})())),E(()=>P(o,`grid xl:grid py-3 xl:py-0 bg-slate-1 dark:bg-dark-3 xl:bg-transparent xl:dark-bg-transparent ${e()?"":"hidden"}`)),C(),t})()}T(["click"]);export{re as C,ne as a,te as b,X as c,ee as g};