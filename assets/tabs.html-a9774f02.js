import{_ as v,M as r,p as c,q as u,N as d,V as n,R as e,t as b,a1 as t}from"./framework-b8224ea1.js";const o={},m=e("h2",{id:"demo",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#demo","aria-hidden":"true"},"#"),b(" Demo")],-1),p=e("p",null,"A tab of fruit:",-1),_=e("p",null,"Apple",-1),h=e("p",null,"Banana",-1),g=t(`<div class="language-markdown line-numbers-mode" data-ext="md"><pre class="language-markdown"><code>::: tabs#fruit

@tab apple#apple

Apple

@tab banana#banana

Banana

:::
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Another tab of fruit:</p>`,2),f=e("p",null,"Apple",-1),A=e("p",null,"Banana",-1),x=e("p",null,"Orange",-1),B=t(`<div class="language-markdown line-numbers-mode" data-ext="md"><pre class="language-markdown"><code>::: tabs#fruit

@tab apple

Apple

@tab banana

Banana

@tab orange

Orange

:::
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>A tab of fruit without id:</p>`,2),k=e("p",null,"Apple",-1),w=e("p",null,"Banana",-1),N=e("p",null,"Orange",-1),V=t(`<div class="language-markdown line-numbers-mode" data-ext="md"><pre class="language-markdown"><code>::: tabs

@tab apple

Apple

@tab banana

Banana

@tab orange

Orange

:::
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,1);function O(T,C){const s=r("Tabs");return c(),u("div",null,[m,p,d(s,{id:"6",data:[{title:"apple",id:"apple"},{title:"banana",id:"banana"}],"tab-id":"fruit"},{tab0:n(({title:i,value:a,isActive:l})=>[_]),tab1:n(({title:i,value:a,isActive:l})=>[h]),_:1}),g,d(s,{id:"22",data:[{title:"apple"},{title:"banana"},{title:"orange"}],"tab-id":"fruit"},{tab0:n(({title:i,value:a,isActive:l})=>[f]),tab1:n(({title:i,value:a,isActive:l})=>[A]),tab2:n(({title:i,value:a,isActive:l})=>[x]),_:1}),B,d(s,{id:"43",data:[{title:"apple"},{title:"banana"},{title:"orange"}]},{tab0:n(({title:i,value:a,isActive:l})=>[k]),tab1:n(({title:i,value:a,isActive:l})=>[w]),tab2:n(({title:i,value:a,isActive:l})=>[N]),_:1}),V])}const D=v(o,[["render",O],["__file","tabs.html.vue"]]);export{D as default};
