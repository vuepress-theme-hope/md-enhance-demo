import{_ as n,p as s,q as a,a1 as e}from"./framework-b8224ea1.js";const t={},i=e(`<h3 id="install" tabindex="-1"><a class="header-anchor" href="#install" aria-hidden="true">#</a> Install</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">pnpm</span> <span class="token function">add</span> <span class="token parameter variable">-D</span> vuepress-plugin-md-enhance@next
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="usage" tabindex="-1"><a class="header-anchor" href="#usage" aria-hidden="true">#</a> Usage</h3><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token comment">// .vuepress/config.ts</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> mdEnhancePlugin <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;vuepress-plugin-md-enhance&quot;</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
  plugins<span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token function">mdEnhancePlugin</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
      <span class="token comment">// your options</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
  <span class="token punctuation">]</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,4),c=[i];function p(l,o){return s(),a("div",null,c)}const d=n(t,[["render",p],["__file","index.html.vue"]]);export{d as default};
