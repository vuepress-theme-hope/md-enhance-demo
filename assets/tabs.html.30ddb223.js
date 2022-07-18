import{_ as v,r,o as c,c as u,d,w as n,b as e,e as b,a as t}from"./app.1bdceaec.js";const o={},m=e("h2",{id:"demo",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#demo","aria-hidden":"true"},"#"),b(" Demo")],-1),p=e("p",null,"A tab of fruit:",-1),_=e("p",null,"Apple",-1),h=e("p",null,"Banana",-1),g=t(`<div class="language-markdown ext-md line-numbers-mode"><pre class="language-markdown"><code>::: tabs#fruit

@tab apple#apple

Apple

@tab banana#banana

Banana

:::
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Another tab of fruit:</p>`,2),f=e("p",null,"Apple",-1),A=e("p",null,"Banana",-1),w=e("p",null,"Orange",-1),x=t(`<div class="language-markdown ext-md line-numbers-mode"><pre class="language-markdown"><code>::: tabs#fruit

@tab apple

Apple

@tab banana

Banana

@tab orange

Orange

:::
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>A tab of fruit without id:</p>`,2),B=e("p",null,"Apple",-1),k=e("p",null,"Banana",-1),N=e("p",null,"Orange",-1),O=t(`<div class="language-markdown ext-md line-numbers-mode"><pre class="language-markdown"><code>::: tabs

@tab apple

Apple

@tab banana

Banana

@tab orange

Orange

:::
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,1);function V(T,C){const s=r("Tabs");return c(),u("div",null,[m,p,d(s,{data:[{title:"apple",value:"apple"},{title:"banana",value:"banana"}],"tab-id":"fruit"},{tab0:n(({title:i,value:a,isActive:l})=>[_]),tab1:n(({title:i,value:a,isActive:l})=>[h]),_:1}),g,d(s,{data:[{title:"apple"},{title:"banana"},{title:"orange"}],"tab-id":"fruit"},{tab0:n(({title:i,value:a,isActive:l})=>[f]),tab1:n(({title:i,value:a,isActive:l})=>[A]),tab2:n(({title:i,value:a,isActive:l})=>[w]),_:1}),x,d(s,{data:[{title:"apple"},{title:"banana"},{title:"orange"}]},{tab0:n(({title:i,value:a,isActive:l})=>[B]),tab1:n(({title:i,value:a,isActive:l})=>[k]),tab2:n(({title:i,value:a,isActive:l})=>[N]),_:1}),O])}var E=v(o,[["render",V],["__file","tabs.html.vue"]]);export{E as default};
