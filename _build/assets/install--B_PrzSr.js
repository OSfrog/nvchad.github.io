import{k as e,e as j,j as D,h as L,t,l as o,m as s,n as y,p as g,v as I,a as h}from"./web-DqPol8Cv.js";import{c as P}from"./clipboard-DzJ4oxno.js";var R=t("<pre><code class=hljs>git clone https://github.com/NvChad/starter ~/.config/nvim && nvim"),M=t("<pre><code class=hljs>git clone https://github.com/NvChad/starter ~/.var/app/io.neovim.nvim/config/nvim && flatpak run io.neovim.nvim"),O=t("<li>If you're using Command Prompt(CMD)"),U=t("<pre><code class=hljs>git clone https://github.com/NvChad/starter %USERPROFILE%\\AppData\\Local\\nvim && nvim"),F=t("<li>If you're using PowerShell(pwsh)"),V=t("<pre><code class=hljs>git clone https://github.com/NvChad/starter $ENV:USERPROFILE\\AppData\\Local\\nvim && nvim"),z=t("<b>If the above path doesnt work, try any of these paths :"),H=t("<li>For CMD : %LOCALAPPDATA%\\nvim "),T=t("<pre><code class=hljs>C:\\Users\\%USERNAME%\\AppData\\Local\\nvim "),q=t("<li>For PowerShell : $ENV:LocalAppData\\nvim "),B=t("<pre><code class=hljs>C:\\Users\\$ENV:USERNAME\\AppData\\Local\\nvim "),G=t('<div flex="~ wrap"gap-5><!$><!/><div w=full grid="~ gap4"><!$><!/><!$><!/>'),J=t("<button capitalize=~><div></div> <!$><!/>"),K=t("<pre class=hljs>");const _=[{name:"linux / macos",cmds:e(R),icon:"i-mingcute:hashtag-fill"},{name:"flatpak",icon:"i-simple-icons:flatpak",cmds:e(M)},{name:"windows",icon:"i-mdi:windows",cmds:[e(O),e(U),e(F),e(V),e(z),e(H),e(T),e(q),e(B)]},{name:"docker",icon:"i-nonicons:docker-16",cmd:`docker run -w /root -it --rm alpine:latest sh -uelic '
  apk add git nodejs neovim ripgrep build-base wget --update
  git clone https://github.com/NvChad/starter ~/.config/nvim
  nvim
  '`}],[l,Q]=j(_[0]);D(()=>{l(),P("DocContent")});const Y=()=>(()=>{var r=e(G),u=r.firstChild,[m,f]=o(u.nextSibling),c=m.nextSibling,b=c.firstChild,[p,S]=o(b.nextSibling),k=p.nextSibling,[E,C]=o(k.nextSibling);return s(r,()=>_.map(a=>(()=>{var i=e(J),d=i.firstChild,N=d.nextSibling,w=N.nextSibling,[x,A]=o(w.nextSibling);return i.$$click=()=>Q(a),s(i,()=>a.name,x,A),y(n=>{var v=l().name==a.name?"bg-emerald2 dark:bg-sky3 dark:text-black":"",$=a.icon;return v!==n.e&&g(i,n.e=v),$!==n.t&&g(d,n.t=$),n},{e:void 0,t:void 0}),I(),i})()),m,f),s(c,(()=>{var a=h(()=>!!l()?.cmd);return()=>a()&&(()=>{var i=e(K);return s(i,()=>l()?.cmd),i})()})(),p,S),s(c,(()=>{var a=h(()=>!!l()?.cmds);return()=>a()&&l().cmds})(),E,C),r})();L(["click"]);export{Y as O,_ as o,Q as s};