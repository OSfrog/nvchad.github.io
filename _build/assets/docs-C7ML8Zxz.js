import{i as $,k as s,j as l,a as C,n as S,p as w,t as m,x as y,u as A,b as v,q as N,f as B}from"./web-DScAkgcG.js";import{a as I,m as L,S as M}from"./Sidebar-jYSvShnh.js";import{u as j}from"./routing-zmxRfIsI.js";import{c as P}from"./clipboard-DzJ4oxno.js";import{g as h,a as T,b as q,c as H,C as R}from"./ContextTitles-D7KWmhEM.js";import"./components-B-ztm8Ux.js";var z=m("<div flex justify-between><!$><!/><!$><!/>"),F=m('<a><button border="1 solid slate-2"class="!bg-transparent text-blue-6 dark:text-blue-4 p-3 px-5 dark:border-dark-4"><div i-ph:arrow-left-bold></div><!$><!/>'),k=m("<div>"),G=m('<a><button border="1 solid slate-2"class="!bg-transparent text-blue-6 dark:text-blue-4 p-3 px-5 dark:border-dark-4"><!$><!/><div i-ph:arrow-right-bold>');let f=[];I.forEach(e=>{Array.isArray(e)?f.push(e):e.items.forEach(r=>{f.push(r)})});function _(e,r){let a="",c=j().pathname.replace(/^\/docs\//,"");return f.forEach((u,i)=>{c==u[1]&&f[i+e]&&(a=f[i+e][r?1:0])}),a}const J=()=>(()=>{var e=$(z),r=e.firstChild,[a,c]=s(r.nextSibling),u=a.nextSibling,[i,p]=s(u.nextSibling);return l(e,(()=>{var n=C(()=>!!_(-1));return()=>n()?(()=>{var t=$(F),o=t.firstChild,x=o.firstChild,d=x.nextSibling,[b,g]=s(d.nextSibling);return l(o,()=>_(-1),b,g),S(()=>w(t,"href","/docs/"+_(-1,!0))),t})():$(k)})(),a,c),l(e,(()=>{var n=C(()=>!!_(1));return()=>n()?(()=>{var t=$(G),o=t.firstChild,x=o.firstChild,[d,b]=s(x.nextSibling);return d.nextSibling,l(o,()=>_(1),d,b),S(()=>w(t,"href","/docs/"+_(1,!0))),t})():$(k)})(),i,p),e})();var K=m('<div grid="~ xl:cols-[auto_1fr]"class="max-w-[1700px] mx-auto mb-8 p-4 py6 relative"><!$><!/><main><div class="flex flex-col-reverse xl:grid xl:grid-cols-[1fr_auto]"><div xl:px-10><div id=DocContent w-full></div><!$><!/></div><!$><!/>');function Y(e){return y(()=>{window.addEventListener("scroll",()=>h("DocContent")),B(()=>window.removeEventListener("scroll",()=>h("DocContent")))}),A(()=>{e.location.pathname,P("DocContent"),T(),h("DocContent"),q()}),(()=>{var r=$(K),a=r.firstChild,[c,u]=s(a.nextSibling),i=c.nextSibling,p=i.firstChild,n=p.firstChild,t=n.firstChild,o=t.nextSibling,[x,d]=s(o.nextSibling),b=n.nextSibling,[g,E]=s(b.nextSibling);return l(r,v(M,{}),c,u),l(t,()=>e.children),l(n,v(J,{}),x,d),l(p,(()=>{var D=C(()=>H.length>1);return()=>D()&&v(R,{})})(),g,E),S(()=>N(i,`xl:blur-none ${L()?"blur-sm":""}`)),r})()}export{Y as default};