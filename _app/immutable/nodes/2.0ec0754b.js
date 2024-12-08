import{s as Ee,f as g,a as L,g as v,h as M,c as I,d as x,K as ne,j as o,i as U,D as f,v as me,H as _e,L as Oe,M as ze,N as tt,p as st,O as P,k as Z,e as Re,P as pe,Q as lt,o as at,l as Se,m as De,R as rt,S as nt,G as it}from"../chunks/scheduler.32ad4dd4.js";import{S as Te,i as Ve,b as ye,d as Le,m as Ie,a as F,t as $,e as Me,c as $e,g as et}from"../chunks/index.3135de85.js";import{b as de}from"../chunks/paths.dd4da71d.js";function Q(s){return(s==null?void 0:s.length)!==void 0?s:Array.from(s)}function ke(s,e){var t=this,a=0;this.now,this.then=Date.now(),this.delta,this.currentTimeOffset=0,this.word=null,this.currentWord=null,this.currentCharacter=0,this.currentWordLength=0;var l={fps:20,timeOffset:5,textColor:"#000",fontSize:"50px",mixCapital:!1,mixSpecialCharacters:!1,needUpdate:!0,colors:["#243350","#005d77","#188987","#30a49c","#33bbba","#00b2e1","#936fc8","#c42e72","#cf43ac","#c165ec"]};if(typeof e<"u")for(let i in e)l[i]=e[i];this.needUpdate=!0,this.fps=l.fps,this.interval=1e3/this.fps,this.timeOffset=l.timeOffset,this.textColor=l.textColor,this.fontSize=l.fontSize,this.mixCapital=l.mixCapital,this.mixSpecialCharacters=l.mixSpecialCharacters,this.colors=l.colors,this.chars=["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"],this.specialCharacters=["!","§","$","%","&","/","(",")","=","?","_","<",">","^","°","*","#","-",":",";","~"],this.mixSpecialCharacters&&(this.chars=this.chars.concat(this.specialCharacters)),this.getRandomColor=function(){var i=Math.floor(Math.random()*this.colors.length);return this.colors[i]},this.position={x:0,y:50},this.holder=s,this.getRandCharacter=function(i){if(i==" ")return" ";var c=Math.floor(Math.random()*this.chars.length),r=-.5+Math.random(),n=this.chars[c],d=n.toLowerCase();return this.mixCapital&&(d=r<0?n.toLowerCase():n),d},this.writeWord=function(i){this.word=i,this.currentWord=i.split(""),this.currentWordLength=this.currentWord.length},this.generateSingleCharacter=function(i,c){var r=document.createElement("span");return r.style.color=i,r.innerHTML=c,r},this.updateCharacter=function(i){if(this.now=Date.now(),this.delta=this.now-this.then,this.delta>this.interval){this.currentTimeOffset++;var c=[];this.currentTimeOffset===this.timeOffset&&this.currentCharacter!==this.currentWordLength&&(this.currentCharacter++,this.currentTimeOffset=0);for(var r=0;r<this.currentCharacter;r++)c.push(this.currentWord[r]);for(var n=0;n<this.currentWordLength-this.currentCharacter;n++)c.push(this.getRandCharacter(this.currentWord[this.currentCharacter+n]));t.currentCharacter===t.currentWordLength&&(t.needUpdate=!1),this.holder.innerHTML="",c.forEach(function(d,p){var _=null;p>t.currentCharacter?_=t.getRandomColor():_=t.textColor,t.holder.appendChild(t.generateSingleCharacter(_,d))}),this.then=this.now-this.delta%this.interval}},this.restart=function(){this.currentCharacter=0,this.needUpdate=!0};function m(i){i++,t.needUpdate&&t.updateCharacter(i),requestAnimationFrame(m)}this.writeWord(this.holder.innerHTML),m(a)}function ot(s){for(let e=s.length-1;e>0;e--){const t=Math.floor(Math.random()*(e+1));[s[e],s[t]]=[s[t],s[e]]}return s}function Ue(s){let e,t,a;return{c(){e=g("img"),this.h()},l(l){e=v(l,"IMG",{alt:!0,src:!0,class:!0}),this.h()},h(){o(e,"alt",""),ne(e.src,t=s[2])||o(e,"src",t),o(e,"class",a=""+(s[8].class||"")+" absolute top-0 left-0 right-0 bottom-0 blur-lg")},m(l,m){U(l,e,m)},p(l,m){m&4&&!ne(e.src,t=l[2])&&o(e,"src",t),m&256&&a!==(a=""+(l[8].class||"")+" absolute top-0 left-0 right-0 bottom-0 blur-lg")&&o(e,"class",a)},d(l){l&&x(e)}}}function qe(s){let e,t,a;return{c(){e=g("img"),this.h()},l(l){e=v(l,"IMG",{alt:!0,src:!0,class:!0}),this.h()},h(){o(e,"alt",""),ne(e.src,t=s[3])||o(e,"src",t),o(e,"class",a=""+(s[8].class||"")+" absolute top-0 left-0 right-0 bottom-0 blur-sm opacity-0")},m(l,m){U(l,e,m)},p(l,m){m&8&&!ne(e.src,t=l[3])&&o(e,"src",t),m&256&&a!==(a=""+(l[8].class||"")+" absolute top-0 left-0 right-0 bottom-0 blur-sm opacity-0")&&o(e,"class",a)},d(l){l&&x(e)}}}function ct(s){let e,t,a,l,m,i,c,r,n=s[2]&&!s[5]&&Ue(s),d=s[3]&&qe(s);return{c(){e=g("div"),n&&n.c(),t=L(),a=g("img"),i=L(),d&&d.c(),this.h()},l(p){e=v(p,"DIV",{class:!0});var _=M(e);n&&n.l(_),t=I(_),a=v(_,"IMG",{src:!0,alt:!0,loading:!0,class:!0}),i=I(_),d&&d.l(_),_.forEach(x),this.h()},h(){var p;ne(a.src,l=s[0])||o(a,"src",l),o(a,"alt",""),o(a,"loading","lazy"),o(a,"class",m=""+(s[8].class||"")+" transition-opacity duration-1000 m-auto "+(s[1]?"delay-1000":"delay-100")+" "+(s[4]||(p=s[6])!=null&&p.complete?"opacity-100":"opacity-0")),o(e,"class","relative")},m(p,_){U(p,e,_),n&&n.m(e,null),f(e,t),f(e,a),s[9](a),f(e,i),d&&d.m(e,null),c||(r=me(a,"load",s[7]),c=!0)},p(p,[_]){var y;p[2]&&!p[5]?n?n.p(p,_):(n=Ue(p),n.c(),n.m(e,t)):n&&(n.d(1),n=null),_&1&&!ne(a.src,l=p[0])&&o(a,"src",l),_&338&&m!==(m=""+(p[8].class||"")+" transition-opacity duration-1000 m-auto "+(p[1]?"delay-1000":"delay-100")+" "+(p[4]||(y=p[6])!=null&&y.complete?"opacity-100":"opacity-0"))&&o(a,"class",m),p[3]?d?d.p(p,_):(d=qe(p),d.c(),d.m(e,null)):d&&(d.d(1),d=null)},i:_e,o:_e,d(p){p&&x(e),n&&n.d(),s[9](null),d&&d.d(),c=!1,r()}}}function ft(s,e,t){const a=["src","large","placeholder","wrecked"];let l=Oe(e,a),{src:m}=e,{large:i=!1}=e,{placeholder:c=""}=e,{wrecked:r=""}=e,n=!1,d=!1,p;const _=()=>{t(4,n=!0),setTimeout(()=>{t(5,d=!0)},i?2e3:1100)};function y(b){st[b?"unshift":"push"](()=>{p=b,t(6,p)})}return s.$$set=b=>{e=ze(ze({},e),tt(b)),t(8,l=Oe(e,a)),"src"in b&&t(0,m=b.src),"large"in b&&t(1,i=b.large),"placeholder"in b&&t(2,c=b.placeholder),"wrecked"in b&&t(3,r=b.wrecked)},[m,i,c,r,n,d,p,_,l,y]}class je extends Te{constructor(e){super(),Ve(this,e,ft,ct,Ee,{src:0,large:1,placeholder:2,wrecked:3})}}function ht(s){let e,t,a,l,m='<span class="text-xs sm:text-base text-white mr-2">Help me survive in this cruel world:</span>',i,c,r,n,d="💲",p,_,y="Purchase a metal print!",b,C,O="🗿 🤘🏽 👩🏽‍🎤",E,N,z='<span class="text-transparent text-sm sm:text-lg mr-1" style="text-shadow: 0 0 0 #e7d056, 1px 1px 0 black, 0px 1px 0 rgba(255,255,255,0.25);">@</span> <a target="_blank" rel="noreferrer noopener" href="mailto:myxomycete@protonmail.com" class="group text-xs sm:text-base text-[#0094c1] hover:text-[#00b0a8] flex flex-row items-center"><span class="group-hover:underline underline-offset-4">Contact me to license for digital use.</span></a> <span class="text-sm sm:text-lg ml-1">👩🏽‍⚖️ 🪪</span>',j;return t=new je({props:{large:!0,class:"w-full max-w-full sm:max-h-[75vh] object-contain",src:s[0],placeholder:s[1],wrecked:s[2]}}),{c(){e=g("div"),ye(t.$$.fragment),a=L(),l=g("div"),l.innerHTML=m,i=L(),c=g("div"),r=g("a"),n=g("span"),n.textContent=d,p=L(),_=g("span"),_.textContent=y,b=L(),C=g("span"),C.textContent=O,E=L(),N=g("div"),N.innerHTML=z,this.h()},l(w){e=v(w,"DIV",{class:!0});var k=M(e);Le(t.$$.fragment,k),a=I(k),l=v(k,"DIV",{class:!0,"data-svelte-h":!0}),P(l)!=="svelte-7g5bm6"&&(l.innerHTML=m),i=I(k),c=v(k,"DIV",{class:!0});var W=M(c);r=v(W,"A",{target:!0,rel:!0,href:!0,class:!0});var R=M(r);n=v(R,"SPAN",{class:!0,style:!0,"data-svelte-h":!0}),P(n)!=="svelte-njmmbp"&&(n.textContent=d),p=I(R),_=v(R,"SPAN",{class:!0,"data-svelte-h":!0}),P(_)!=="svelte-tzm01d"&&(_.textContent=y),b=I(R),C=v(R,"SPAN",{class:!0,"data-svelte-h":!0}),P(C)!=="svelte-1tk5jk"&&(C.textContent=O),R.forEach(x),W.forEach(x),E=I(k),N=v(k,"DIV",{class:!0,"data-svelte-h":!0}),P(N)!=="svelte-1t52nmg"&&(N.innerHTML=z),k.forEach(x),this.h()},h(){o(l,"class","w-full bg-black px-2 pt-2 pb-1 flex flex-row items-center justify-center"),o(n,"class","text-transparent text-sm sm:text-lg mr-1"),Z(n,"text-shadow","0 0 0 #e7d056, 1px 1px 0 black, 0px 1px 0 rgba(255,255,255,0.25)"),o(_,"class","group-hover:underline underline-offset-4"),o(C,"class","text-sm sm:text-lg ml-1"),o(r,"target","_blank"),o(r,"rel","noreferrer noopener"),o(r,"href",s[3]),o(r,"class","group text-xs sm:text-base text-[#0094c1] hover:text-[#00b0a8] flex flex-row items-center"),o(c,"class","w-full bg-black px-2 p-0.5 flex flex-row items-center justify-center"),o(N,"class","w-full bg-black px-2 pt-0.5 pb-2 flex flex-row items-center justify-center"),o(e,"class","w-full h-fit flex flex-col")},m(w,k){U(w,e,k),Ie(t,e,null),f(e,a),f(e,l),f(e,i),f(e,c),f(c,r),f(r,n),f(r,p),f(r,_),f(r,b),f(r,C),f(e,E),f(e,N),j=!0},p(w,[k]){const W={};k&1&&(W.src=w[0]),k&2&&(W.placeholder=w[1]),k&4&&(W.wrecked=w[2]),t.$set(W),(!j||k&8)&&o(r,"href",w[3])},i(w){j||(F(t.$$.fragment,w),j=!0)},o(w){$(t.$$.fragment,w),j=!1},d(w){w&&x(e),Me(t)}}}function ut(s,e,t){let{src:a}=e,{placeholder:l=""}=e,{wrecked:m=""}=e,{buyURL:i=""}=e;return s.$$set=c=>{"src"in c&&t(0,a=c.src),"placeholder"in c&&t(1,l=c.placeholder),"wrecked"in c&&t(2,m=c.wrecked),"buyURL"in c&&t(3,i=c.buyURL)},[a,l,m,i]}class dt extends Te{constructor(e){super(),Ve(this,e,ut,ht,Ee,{src:0,placeholder:1,wrecked:2,buyURL:3})}}function Be(s,e,t){const a=s.slice();return a[12]=e[t],a}function Ge(s,e,t){const a=s.slice();return a[15]=e[t],a}function Fe(s,e,t){const a=s.slice();return a[18]=e[t],a}function Ke(s,e,t){const a=s.slice();return a[18]=e[t],a}function Qe(s){let e,t;return{c(){e=g("span"),t=Se("🤺"),this.h()},l(a){e=v(a,"SPAN",{class:!0,style:!0});var l=M(e);t=De(l,"🤺"),l.forEach(x),this.h()},h(){o(e,"class","scale-x-[-1] origin-right text-transparent w-[0.33rem] opacity-75"),Z(e,"text-shadow","0 0 0 "+s[18])},m(a,l){U(a,e,l),f(e,t)},p:_e,d(a){a&&x(e)}}}function Je(s){let e,t;return{c(){e=g("span"),t=Se("🤺"),this.h()},l(a){e=v(a,"SPAN",{class:!0,style:!0});var l=M(e);t=De(l,"🤺"),l.forEach(x),this.h()},h(){o(e,"class","text-transparent w-[0.33rem] opacity-75"),Z(e,"text-shadow","0 0 0 "+s[18])},m(a,l){U(a,e,l),f(e,t)},p:_e,d(a){a&&x(e)}}}function Xe(s){let e,t,a,l,m,i=s[15]+"",c,r,n,d,p;return n=rt(s[8][0]),{c(){e=g("label"),t=g("input"),l=L(),m=g("span"),c=Se(i),r=L(),this.h()},l(_){e=v(_,"LABEL",{class:!0});var y=M(e);t=v(y,"INPUT",{name:!0,class:!0,type:!0}),l=I(y),m=v(y,"SPAN",{class:!0});var b=M(m);c=De(b,i),b.forEach(x),r=I(y),y.forEach(x),this.h()},h(){o(t,"name","styles"),o(t,"class","opacity-0 absolute svelte-1hn9o16"),o(t,"type","radio"),t.__value=s[15],nt(t,t.__value),t.checked=a=s[0]==s[15],o(m,"class","radio-label svelte-1hn9o16"),o(e,"class","ml-2 sm:ml-4 relative pl-[40px] inline-block text-xs sm:text-sm font-pixel cursor-pointer"),n.p(t)},m(_,y){U(_,e,y),f(e,t),t.checked=t.__value===s[0],f(e,l),f(e,m),f(m,c),f(e,r),d||(p=me(t,"change",s[7]),d=!0)},p(_,y){y&1&&a!==(a=_[0]==_[15])&&(t.checked=a),y&1&&(t.checked=t.__value===_[0])},d(_){_&&x(e),n.r(),d=!1,p()}}}function Ye(s){let e,t,a=Q(s[5]),l=[];for(let i=0;i<a.length;i+=1)l[i]=Ze(Be(s,a,i));const m=i=>$(l[i],1,1,()=>{l[i]=null});return{c(){e=g("div");for(let i=0;i<l.length;i+=1)l[i].c();this.h()},l(i){e=v(i,"DIV",{class:!0});var c=M(e);for(let r=0;r<l.length;r+=1)l[r].l(c);c.forEach(x),this.h()},h(){o(e,"class","overflow-hidden columns-1 sm:columns-2 lg:columns-3 gap-5 px-8 py-4")},m(i,c){U(i,e,c);for(let r=0;r<l.length;r+=1)l[r]&&l[r].m(e,null);t=!0},p(i,c){if(c&99){a=Q(i[5]);let r;for(r=0;r<a.length;r+=1){const n=Be(i,a,r);l[r]?(l[r].p(n,c),F(l[r],1)):(l[r]=Ze(n),l[r].c(),F(l[r],1),l[r].m(e,null))}for(et(),r=a.length;r<l.length;r+=1)m(r);$e()}},i(i){if(!t){for(let c=0;c<a.length;c+=1)F(l[c]);t=!0}},o(i){l=l.filter(Boolean);for(let c=0;c<l.length;c+=1)$(l[c]);t=!1},d(i){i&&x(e),pe(l,i)}}}function Ze(s){let e,t,a,l,m,i,c,r,n,d,p="💲",_,y,b,C,O,E;a=new je({props:{class:"w-full",src:`/photos/${s[0]}/${s[12]}.webp`,wrecked:`/photos/wrecked/${s[12]}.webp`}}),i=new je({props:{class:"w-full rounded-sm",src:`/photos/${s[0]}/${s[12]}.webp`,wrecked:`/photos/wrecked/${s[12]}.webp`}});function N(){return s[9](s[12])}function z(){return s[10](s[12])}return{c(){e=g("div"),t=g("div"),ye(a.$$.fragment),l=L(),m=g("div"),ye(i.$$.fragment),c=L(),r=g("div"),n=g("a"),d=g("span"),d.textContent=p,y=L(),this.h()},l(j){e=v(j,"DIV",{tabindex:!0,role:!0,class:!0});var w=M(e);t=v(w,"DIV",{class:!0});var k=M(t);Le(a.$$.fragment,k),k.forEach(x),l=I(w),m=v(w,"DIV",{class:!0});var W=M(m);Le(i.$$.fragment,W),W.forEach(x),c=I(w),r=v(w,"DIV",{class:!0});var R=M(r);n=v(R,"A",{target:!0,href:!0,rel:!0,class:!0});var B=M(n);d=v(B,"SPAN",{class:!0,style:!0,"data-svelte-h":!0}),P(d)!=="svelte-p1dgl7"&&(d.textContent=p),B.forEach(x),R.forEach(x),y=I(w),w.forEach(x),this.h()},h(){o(t,"class","w-full h-full absolute"),o(m,"class","w-full p-0.5 group-active:p-1 rounded overflow-hidden backdrop-blur-lg backdrop-grayscale"),o(d,"class","text-transparent text-lg hover:text-xl transition-all"),Z(d,"text-shadow","0 0 0 #e7d056, 1px 1px 0 black, 0px 1px 0 rgba(255,255,255,0.25)"),o(n,"target","_blank"),o(n,"href",_=s[1]+"photos/original/"+s[0]+"/"+s[12]+".jpg"),o(n,"rel","noreferrer noopener"),o(n,"class","w-7 h-7 rounded-lg transition-all bg-white/10 hover:bg-white/25 shadow shadow-black/50 flex items-center justify-center"),o(r,"class","absolute bottom-0 right-0 px-4 py-2 flex flex-row gap-2"),o(e,"tabindex","0"),o(e,"role","button"),o(e,"class",b="group w-full mb-5 max-w-md overflow-hidden relative rounded cursor-zoom-in "+s[0]+" svelte-1hn9o16")},m(j,w){U(j,e,w),f(e,t),Ie(a,t,null),f(e,l),f(e,m),Ie(i,m,null),f(e,c),f(e,r),f(r,n),f(n,d),f(e,y),C=!0,O||(E=[me(e,"click",N),me(e,"keypress",z)],O=!0)},p(j,w){s=j;const k={};w&1&&(k.src=`/photos/${s[0]}/${s[12]}.webp`),a.$set(k);const W={};w&1&&(W.src=`/photos/${s[0]}/${s[12]}.webp`),i.$set(W),(!C||w&3&&_!==(_=s[1]+"photos/original/"+s[0]+"/"+s[12]+".jpg"))&&o(n,"href",_),(!C||w&1&&b!==(b="group w-full mb-5 max-w-md overflow-hidden relative rounded cursor-zoom-in "+s[0]+" svelte-1hn9o16"))&&o(e,"class",b)},i(j){C||(F(a.$$.fragment,j),F(i.$$.fragment,j),C=!0)},o(j){$(a.$$.fragment,j),$(i.$$.fragment,j),C=!1},d(j){j&&x(e),Me(a),Me(i),O=!1,it(E)}}}function pt(s){let e,t,a,l,m='<div class="flex flex-row delay-left animate-[spin_5s_ease-in-out_alternate_2] svelte-1hn9o16"><span class="">🦠</span> <span class="mt-auto">🦠</span></div> <h1 class="text-2xl sm:text-4xl font-extrabold w-full text-center tracking-widest px-2"><span id="slime" class="text-[#18ea1c70] moldy svelte-1hn9o16">slime</span><span id="mold" class="text-[#27c97570] moldy svelte-1hn9o16">mold</span><span class="text-[#ffffffd0] moldy svelte-1hn9o16" style="--c: #dfcca71a">.</span><span id="me" class="text-[#f70bec80] moldy svelte-1hn9o16" style="--c: #f70bec1a;">me</span></h1> <div class="flex flex-row delay-right animate-[spin_5s_ease-in-out_1] svelte-1hn9o16"><span class="">🦠</span> <span class="mt-auto">🦠</span></div>',i,c,r,n,d,p,_="🤺",y,b,C="freelance",O,E,N,z,j="🤺",w,k,W='<span class="">📸</span> <h2 class="">photography &amp; computation</h2> <span class="">💾</span>',R,B,He='<span class="">☕️</span> <h2 class="">seattle, wa</h2> <span class="">🌲</span>',ge,J,Ae='<span class="">@:</span> <a class="text-[#0094c1] hover:text-[#00b0a8]" href="mailto:myxomycete@protonmail.com" target="_blank" rel="noopener noreferrer">myxomycete@protonmail.com</a>',ve,ie,xe,X,Ne='<div class=""><p class="border-b border-b-white w-fit mb-1">Available for:</p> <div class=""><span class="text-[#bc62d1]">➳</span> <span class="text-[#00c094] ml-[-1.25rem]">➳</span> <span class="ml-[-1.25rem]">➳</span> <span>unique photographic assignments</span></div> <div class=""><span class="text-[#700036]">➳</span> <span class="text-[#4d97fb] ml-[-1.25rem]">➳</span> <span class="ml-[-1.25rem]">➳</span> <span>divergent web development</span></div> <div class=""><span class="text-[#006573]">➳</span> <span class="text-[#f7310e] ml-[-1.25rem]">➳</span> <span class="ml-[-1.25rem]">➳</span> <span>multithreaded scientific computing</span></div></div>',be,G,K,We="style:",we,Ce,Y,Pe='<div class=""><p class="border-b border-b-white w-fit mb-1">Available for:</p> <div class=""><span class="text-[#bc62d1]">➳</span> <span class="text-[#00c094] ml-[-1.25rem]">➳</span> <span class="ml-[-1.25rem]">➳</span> <span>unique photographic assignments</span></div> <div class=""><span class="text-[#700036]">➳</span> <span class="text-[#4d97fb] ml-[-1.25rem]">➳</span> <span class="ml-[-1.25rem]">➳</span> <span>divergent web development</span></div> <div class=""><span class="text-[#006573]">➳</span> <span class="text-[#f7310e] ml-[-1.25rem]">➳</span> <span class="ml-[-1.25rem]">➳</span> <span>multithreaded scientific computing</span></div></div>',oe,ee,ce,te=Q(s[2]),T=[];for(let u=0;u<te.length;u+=1)T[u]=Qe(Ke(s,te,u));let se=Q(s[3]),V=[];for(let u=0;u<se.length;u+=1)V[u]=Je(Fe(s,se,u));let le=Q(s[4]),H=[];for(let u=0;u<le.length;u+=1)H[u]=Xe(Ge(s,le,u));let S=s[1]&&Ye(s);return{c(){e=g("div"),t=g("div"),a=g("div"),l=g("div"),l.innerHTML=m,i=L(),c=g("div"),r=g("div"),n=g("div");for(let u=0;u<T.length;u+=1)T[u].c();d=L(),p=g("span"),p.textContent=_,y=L(),b=g("h2"),b.textContent=C,O=L(),E=g("div");for(let u=0;u<V.length;u+=1)V[u].c();N=L(),z=g("span"),z.textContent=j,w=L(),k=g("div"),k.innerHTML=W,R=L(),B=g("div"),B.innerHTML=He,ge=L(),J=g("div"),J.innerHTML=Ae,ve=L(),ie=g("div"),xe=L(),X=g("div"),X.innerHTML=Ne,be=L(),G=g("div"),K=g("span"),K.textContent=We,we=L();for(let u=0;u<H.length;u+=1)H[u].c();Ce=L(),Y=g("div"),Y.innerHTML=Pe,oe=L(),S&&S.c(),ee=Re(),this.h()},l(u){e=v(u,"DIV",{class:!0});var D=M(e);t=v(D,"DIV",{class:!0});var h=M(t);a=v(h,"DIV",{class:!0});var A=M(a);l=v(A,"DIV",{class:!0,"data-svelte-h":!0}),P(l)!=="svelte-18j221d"&&(l.innerHTML=m),i=I(A),c=v(A,"DIV",{class:!0});var ae=M(c);r=v(ae,"DIV",{class:!0});var re=M(r);n=v(re,"DIV",{class:!0});var fe=M(n);for(let q=0;q<T.length;q+=1)T[q].l(fe);d=I(fe),p=v(fe,"SPAN",{class:!0,style:!0,"data-svelte-h":!0}),P(p)!=="svelte-pwqveg"&&(p.textContent=_),fe.forEach(x),y=I(re),b=v(re,"H2",{class:!0,"data-svelte-h":!0}),P(b)!=="svelte-ackse0"&&(b.textContent=C),O=I(re),E=v(re,"DIV",{class:!0});var he=M(E);for(let q=0;q<V.length;q+=1)V[q].l(he);N=I(he),z=v(he,"SPAN",{class:!0,style:!0,"data-svelte-h":!0}),P(z)!=="svelte-12j07rg"&&(z.textContent=j),he.forEach(x),re.forEach(x),w=I(ae),k=v(ae,"DIV",{class:!0,"data-svelte-h":!0}),P(k)!=="svelte-c730u4"&&(k.innerHTML=W),R=I(ae),B=v(ae,"DIV",{class:!0,"data-svelte-h":!0}),P(B)!=="svelte-gvh0ds"&&(B.innerHTML=He),ae.forEach(x),ge=I(A),J=v(A,"DIV",{class:!0,"data-svelte-h":!0}),P(J)!=="svelte-wb6yok"&&(J.innerHTML=Ae),ve=I(A),ie=v(A,"DIV",{class:!0}),M(ie).forEach(x),A.forEach(x),xe=I(h),X=v(h,"DIV",{class:!0,"data-svelte-h":!0}),P(X)!=="svelte-2dddx0"&&(X.innerHTML=Ne),be=I(h),G=v(h,"DIV",{class:!0});var ue=M(G);K=v(ue,"SPAN",{class:!0,style:!0,"data-svelte-h":!0}),P(K)!=="svelte-14kzssj"&&(K.textContent=We),we=I(ue);for(let q=0;q<H.length;q+=1)H[q].l(ue);ue.forEach(x),h.forEach(x),Ce=I(D),Y=v(D,"DIV",{class:!0,"data-svelte-h":!0}),P(Y)!=="svelte-1qlogbd"&&(Y.innerHTML=Pe),D.forEach(x),oe=I(u),S&&S.l(u),ee=Re(),this.h()},h(){o(l,"class","flex flex-row justify-between"),o(p,"class","scale-x-[-1] w-[0.33rem]"),Z(p,"text-shadow","0 0 0 black"),o(n,"class","flex flex-row"),o(b,"class",""),o(z,"class","w-[0.33rem] z-10"),Z(z,"text-shadow","0 0 0 black"),o(E,"class","flex flex-row-reverse"),o(r,"class","font-bold text-lg sm:text-xl flex flex-row justify-center gap-4"),o(k,"class","text-sm sm:text-lg flex flex-row justify-between gap-2 sm:gap-4"),o(B,"class","text-sm sm:text-base text-gray-200 flex flex-row justify-center gap-4"),o(c,"class","font-pixel flex flex-col w-fit gap-2"),o(J,"class","text-base sm:text-lg flex flex-row items-center justify-center mb-7"),o(ie,"class","holo self-center svelte-1hn9o16"),o(a,"class","flex flex-col w-fit gap-2 relative"),o(X,"class","text-xs sm:text-base mb-2 sm:mb-3 flex-1 flex-col items-center justify-center sm:px-2 flex lg:hidden"),o(K,"class","text-xs sm:text-sm font-light text-[#ffffffd0] moldy svelte-1hn9o16"),Z(K,"--c","#dfcca71a"),o(G,"class","radio-group flex flex-row items-center justify-center "),o(t,"class","flex flex-col shrink-0 w-fit gap-4 items-center"),o(Y,"class","flex-1 flex-col items-center justify-center text-base hidden lg:flex"),o(e,"class","px-8 pt-3 flex flex-col lg:flex-row w-full gap-4 items-center")},m(u,D){U(u,e,D),f(e,t),f(t,a),f(a,l),f(a,i),f(a,c),f(c,r),f(r,n);for(let h=0;h<T.length;h+=1)T[h]&&T[h].m(n,null);f(n,d),f(n,p),f(r,y),f(r,b),f(r,O),f(r,E);for(let h=0;h<V.length;h+=1)V[h]&&V[h].m(E,null);f(E,N),f(E,z),f(c,w),f(c,k),f(c,R),f(c,B),f(a,ge),f(a,J),f(a,ve),f(a,ie),f(t,xe),f(t,X),f(t,be),f(t,G),f(G,K),f(G,we);for(let h=0;h<H.length;h+=1)H[h]&&H[h].m(G,null);f(e,Ce),f(e,Y),U(u,oe,D),S&&S.m(u,D),U(u,ee,D),ce=!0},p(u,[D]){if(D&4){te=Q(u[2]);let h;for(h=0;h<te.length;h+=1){const A=Ke(u,te,h);T[h]?T[h].p(A,D):(T[h]=Qe(A),T[h].c(),T[h].m(n,d))}for(;h<T.length;h+=1)T[h].d(1);T.length=te.length}if(D&8){se=Q(u[3]);let h;for(h=0;h<se.length;h+=1){const A=Fe(u,se,h);V[h]?V[h].p(A,D):(V[h]=Je(A),V[h].c(),V[h].m(E,N))}for(;h<V.length;h+=1)V[h].d(1);V.length=se.length}if(D&17){le=Q(u[4]);let h;for(h=0;h<le.length;h+=1){const A=Ge(u,le,h);H[h]?H[h].p(A,D):(H[h]=Xe(A),H[h].c(),H[h].m(G,null))}for(;h<H.length;h+=1)H[h].d(1);H.length=le.length}u[1]?S?(S.p(u,D),D&2&&F(S,1)):(S=Ye(u),S.c(),F(S,1),S.m(ee.parentNode,ee)):S&&(et(),$(S,1,1,()=>{S=null}),$e())},i(u){ce||(F(S),ce=!0)},o(u){$(S),ce=!1},d(u){u&&(x(e),x(oe),x(ee)),pe(T,u),pe(V,u),pe(H,u),S&&S.d(u)}}}function mt(s,e,t){const{open:a}=lt("simple-modal"),l=["#e6680c","#dc5e0e","#d1530f","#c74910","#bc3f10","#b13510","#a62a10","#9b200f","#8f140e","#84050c"],m=["#62fa27","#00f065","#00e39a","#00d4cc","#00c2f9","#00b0ff","#009aff","#0080ff","#005eff","#472ae3"],i=["photo","ascii","ditherpunk","graffiti"],c=ot(["abstract_01","ant_suplex","arboretum_hummingbird","bradner_hoverfly","camel_sunset","channels","clouds_01","cougar_autumn_meadowhawk","cougar_damselfly_1_crop","cougar_damselfly_2_crop","cougar_european_mantis_nymph","cougar_frog","cougar_grasshopper","cougar_hoverfly_1","cougar_moth","cougar_mountain_bee","cougar_mountain_fly","cougar_mountain_snakefly","cougar_netwing_beetle","dandelion_01","darkshroom","dogs_01","dolichovespula_maculata","evans_creek_hoverfly","evans_creek_spiral","heron","jefferson_bee_1","jefferson_hoverfly_2","jefferson_hoverfly_love","jefferson_ladybug_light","kirkjufellfoss_01","kubota_spider","lord_hill_meadowhawk","mopop_01","mushroom_01","nisqually_golden-crowned_sparrow","nisqually_sandpiper","padilla_bay_kingfisher","rainier_beach_bee","seward_crow_eye","seward_hoverfly","shiva_01","south_seattle_arboretum_leucospid_wasp","sunrise_01","tiger_mountain_lacewing","waterfall_park_01","waterworks_dragonfly","waterworks_stink_bug"]),r=(C,O,E,N)=>a(dt,{src:C,placeholder:O,wrecked:E,buyURL:N});let n=i[0],d;at(()=>{const C=document.getElementById("slime"),O=document.getElementById("mold"),E=document.getElementById("me");new ke(C,{fps:18,fontSize:"36px",textColor:"#18ea1c70",timeOffset:12,mixCapital:!0,mixSpecialCharacters:!0}),new ke(O,{fps:15,fontSize:"36px",textColor:"#27c97570",timeOffset:15,mixCapital:!0,mixSpecialCharacters:!0}),new ke(E,{fps:12,fontSize:"36px",textColor:"#f70bec80",timeOffset:20,mixCapital:!0,mixSpecialCharacters:!0}),t(1,d=`https://www.pictorem.com/order.html?apiid=AI8NTM10LNO&import=${window.location.origin}${de.startsWith("/")||window.location.origin.endsWith("/")?"":"/"}${de}${!de||de.endsWith("/")?"":"/"}`)});const p=[[]];function _(){n=this.__value,t(0,n)}return[n,d,l,m,i,c,r,_,p,C=>{r(`/photos/original/${n}/${C}.jpg`,`/photos/${n}/${C}.webp`,`/photos/wrecked/${C}.webp`,`${d}photos/original/${n}/${C}.jpg`)},C=>{r(`/photos/original/${n}/${C}.jpg`,`/photos/${n}/${C}.webp`,`/photos/wrecked/${C}.webp`,`${d}photos/original/${n}/${C}.jpg`)}]}class xt extends Te{constructor(e){super(),Ve(this,e,mt,pt,Ee,{})}}export{xt as component};
