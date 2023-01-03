import{_ as i,M as o,p as l,q as u,N as s,R as t,t as e,a1 as a}from"./framework-b8224ea1.js";const r={},c=t("h2",{id:"demo",tabindex:"-1"},[t("a",{class:"header-anchor",href:"#demo","aria-hidden":"true"},"#"),e(" Demo")],-1),p=t("h3",{id:"bar-chart",tabindex:"-1"},[t("a",{class:"header-anchor",href:"#bar-chart","aria-hidden":"true"},"#"),e(" Bar Chart")],-1),d=a(`<details class="hint-container details"><summary>Code</summary><div class="language-markdown line-numbers-mode" data-ext="md"><pre class="language-markdown"><code>::: chart A bar chart

<span class="token code"><span class="token punctuation">\`\`\`</span><span class="token code-language">json</span>
<span class="token code-block language-json">{
  &quot;type&quot;: &quot;bar&quot;,
  &quot;data&quot;: {
    &quot;labels&quot;: [&quot;Red&quot;, &quot;Blue&quot;, &quot;Yellow&quot;, &quot;Green&quot;, &quot;Purple&quot;, &quot;Orange&quot;],
    &quot;datasets&quot;: [
      {
        &quot;label&quot;: &quot;# of Votes&quot;,
        &quot;data&quot;: [12, 19, 3, 5, 2, 3],
        &quot;backgroundColor&quot;: [
          &quot;rgba(255, 99, 132, 0.2)&quot;,
          &quot;rgba(54, 162, 235, 0.2)&quot;,
          &quot;rgba(255, 206, 86, 0.2)&quot;,
          &quot;rgba(75, 192, 192, 0.2)&quot;,
          &quot;rgba(153, 102, 255, 0.2)&quot;,
          &quot;rgba(255, 159, 64, 0.2)&quot;
        ],
        &quot;borderColor&quot;: [
          &quot;rgba(255, 99, 132, 1)&quot;,
          &quot;rgba(54, 162, 235, 1)&quot;,
          &quot;rgba(255, 206, 86, 1)&quot;,
          &quot;rgba(75, 192, 192, 1)&quot;,
          &quot;rgba(153, 102, 255, 1)&quot;,
          &quot;rgba(255, 159, 64, 1)&quot;
        ],
        &quot;borderWidth&quot;: 1
      }
    ]
  },
  &quot;options&quot;: {
    &quot;scales&quot;: {
      &quot;y&quot;: {
        &quot;beginAtZero&quot;: true
      }
    }
  }
}</span>
<span class="token punctuation">\`\`\`</span></span>

:::
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></details>`,1),v=a(`<details class="hint-container details"><summary>Code</summary><div class="language-markdown line-numbers-mode" data-ext="md"><pre class="language-markdown"><code>::: chart A bar chart

<span class="token code"><span class="token punctuation">\`\`\`</span><span class="token code-language">js</span>
<span class="token code-block language-js">module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">type</span><span class="token operator">:</span> <span class="token string">&quot;bar&quot;</span><span class="token punctuation">,</span>
  <span class="token literal-property property">data</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">labels</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&quot;Red&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;Blue&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;Yellow&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;Green&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;Purple&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;Orange&quot;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token literal-property property">datasets</span><span class="token operator">:</span> <span class="token punctuation">[</span>
      <span class="token punctuation">{</span>
        <span class="token literal-property property">label</span><span class="token operator">:</span> <span class="token string">&quot;# of Votes&quot;</span><span class="token punctuation">,</span>
        <span class="token literal-property property">data</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token number">12</span><span class="token punctuation">,</span> <span class="token number">19</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">5</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
        <span class="token literal-property property">backgroundColor</span><span class="token operator">:</span> <span class="token punctuation">[</span>
          <span class="token string">&quot;rgba(255, 99, 132, 0.2)&quot;</span><span class="token punctuation">,</span>
          <span class="token string">&quot;rgba(54, 162, 235, 0.2)&quot;</span><span class="token punctuation">,</span>
          <span class="token string">&quot;rgba(255, 206, 86, 0.2)&quot;</span><span class="token punctuation">,</span>
          <span class="token string">&quot;rgba(75, 192, 192, 0.2)&quot;</span><span class="token punctuation">,</span>
          <span class="token string">&quot;rgba(153, 102, 255, 0.2)&quot;</span><span class="token punctuation">,</span>
          <span class="token string">&quot;rgba(255, 159, 64, 0.2)&quot;</span><span class="token punctuation">,</span>
        <span class="token punctuation">]</span><span class="token punctuation">,</span>
        <span class="token literal-property property">borderColor</span><span class="token operator">:</span> <span class="token punctuation">[</span>
          <span class="token string">&quot;rgba(255, 99, 132, 1)&quot;</span><span class="token punctuation">,</span>
          <span class="token string">&quot;rgba(54, 162, 235, 1)&quot;</span><span class="token punctuation">,</span>
          <span class="token string">&quot;rgba(255, 206, 86, 1)&quot;</span><span class="token punctuation">,</span>
          <span class="token string">&quot;rgba(75, 192, 192, 1)&quot;</span><span class="token punctuation">,</span>
          <span class="token string">&quot;rgba(153, 102, 255, 1)&quot;</span><span class="token punctuation">,</span>
          <span class="token string">&quot;rgba(255, 159, 64, 1)&quot;</span><span class="token punctuation">,</span>
        <span class="token punctuation">]</span><span class="token punctuation">,</span>
        <span class="token literal-property property">borderWidth</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token literal-property property">options</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">scales</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token literal-property property">y</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token literal-property property">beginAtZero</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span></span>
<span class="token punctuation">\`\`\`</span></span>

:::
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></details>`,1),b=a(`<details class="hint-container details"><summary>Code</summary><div class="language-markdown line-numbers-mode" data-ext="md"><pre class="language-markdown"><code>::: chart A bar chart

<span class="token code"><span class="token punctuation">\`\`\`</span><span class="token code-language">javascript</span>
<span class="token code-block language-javascript">module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">type</span><span class="token operator">:</span> <span class="token string">&quot;bar&quot;</span><span class="token punctuation">,</span>
  <span class="token literal-property property">data</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">labels</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&quot;Red&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;Blue&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;Yellow&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;Green&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;Purple&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;Orange&quot;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token literal-property property">datasets</span><span class="token operator">:</span> <span class="token punctuation">[</span>
      <span class="token punctuation">{</span>
        <span class="token literal-property property">label</span><span class="token operator">:</span> <span class="token string">&quot;# of Votes&quot;</span><span class="token punctuation">,</span>
        <span class="token literal-property property">data</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token number">12</span><span class="token punctuation">,</span> <span class="token number">19</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">5</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
        <span class="token literal-property property">backgroundColor</span><span class="token operator">:</span> <span class="token punctuation">[</span>
          <span class="token string">&quot;rgba(255, 99, 132, 0.2)&quot;</span><span class="token punctuation">,</span>
          <span class="token string">&quot;rgba(54, 162, 235, 0.2)&quot;</span><span class="token punctuation">,</span>
          <span class="token string">&quot;rgba(255, 206, 86, 0.2)&quot;</span><span class="token punctuation">,</span>
          <span class="token string">&quot;rgba(75, 192, 192, 0.2)&quot;</span><span class="token punctuation">,</span>
          <span class="token string">&quot;rgba(153, 102, 255, 0.2)&quot;</span><span class="token punctuation">,</span>
          <span class="token string">&quot;rgba(255, 159, 64, 0.2)&quot;</span><span class="token punctuation">,</span>
        <span class="token punctuation">]</span><span class="token punctuation">,</span>
        <span class="token literal-property property">borderColor</span><span class="token operator">:</span> <span class="token punctuation">[</span>
          <span class="token string">&quot;rgba(255, 99, 132, 1)&quot;</span><span class="token punctuation">,</span>
          <span class="token string">&quot;rgba(54, 162, 235, 1)&quot;</span><span class="token punctuation">,</span>
          <span class="token string">&quot;rgba(255, 206, 86, 1)&quot;</span><span class="token punctuation">,</span>
          <span class="token string">&quot;rgba(75, 192, 192, 1)&quot;</span><span class="token punctuation">,</span>
          <span class="token string">&quot;rgba(153, 102, 255, 1)&quot;</span><span class="token punctuation">,</span>
          <span class="token string">&quot;rgba(255, 159, 64, 1)&quot;</span><span class="token punctuation">,</span>
        <span class="token punctuation">]</span><span class="token punctuation">,</span>
        <span class="token literal-property property">borderWidth</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token literal-property property">options</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">scales</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token literal-property property">y</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token literal-property property">beginAtZero</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span></span>
<span class="token punctuation">\`\`\`</span></span>

:::
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></details><h3 id="bubble-chart" tabindex="-1"><a class="header-anchor" href="#bubble-chart" aria-hidden="true">#</a> Bubble Chart</h3>`,2),q=a(`<details class="hint-container details"><summary>Code</summary><div class="language-markdown line-numbers-mode" data-ext="md"><pre class="language-markdown"><code>::: chart A Bubble Chart

<span class="token code"><span class="token punctuation">\`\`\`</span><span class="token code-language">json</span>
<span class="token code-block language-json">{
  &quot;type&quot;: &quot;bubble&quot;,
  &quot;data&quot;: {
    &quot;datasets&quot;: [
      {
        &quot;label&quot;: &quot;First Dataset&quot;,
        &quot;data&quot;: [
          { &quot;x&quot;: 20, &quot;y&quot;: 30, &quot;r&quot;: 15 },
          { &quot;x&quot;: 40, &quot;y&quot;: 10, &quot;r&quot;: 10 }
        ],
        &quot;backgroundColor&quot;: &quot;rgb(255, 99, 132)&quot;
      }
    ]
  }
}</span>
<span class="token punctuation">\`\`\`</span></span>

:::
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></details><h3 id="line-chart" tabindex="-1"><a class="header-anchor" href="#line-chart" aria-hidden="true">#</a> Line Chart</h3>`,2),m=a(`<details class="hint-container details"><summary>Code</summary><div class="language-markdown line-numbers-mode" data-ext="md"><pre class="language-markdown"><code>::: chart A Line Chart

<span class="token code"><span class="token punctuation">\`\`\`</span><span class="token code-language">json</span>
<span class="token code-block language-json">{
  &quot;type&quot;: &quot;line&quot;,
  &quot;data&quot;: {
    &quot;labels&quot;: [&quot;January&quot;, &quot;February&quot;, &quot;March&quot;, &quot;April&quot;, &quot;May&quot;, &quot;June&quot;, &quot;July&quot;],
    &quot;datasets&quot;: [
      {
        &quot;label&quot;: &quot;My First Dataset&quot;,
        &quot;data&quot;: [65, 59, 80, 81, 56, 55, 40],
        &quot;fill&quot;: false,
        &quot;borderColor&quot;: &quot;rgb(75, 192, 192)&quot;,
        &quot;tension&quot;: 0.1
      }
    ]
  }
}</span>
<span class="token punctuation">\`\`\`</span></span>

:::
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></details><h3 id="polar-area-chart" tabindex="-1"><a class="header-anchor" href="#polar-area-chart" aria-hidden="true">#</a> Polar Area Chart</h3>`,2),k=a(`<details class="hint-container details"><summary>Code</summary><div class="language-markdown line-numbers-mode" data-ext="md"><pre class="language-markdown"><code>::: chart A Polar Area Chart

<span class="token code"><span class="token punctuation">\`\`\`</span><span class="token code-language">json</span>
<span class="token code-block language-json">{
  &quot;type&quot;: &quot;polarArea&quot;,
  &quot;data&quot;: {
    &quot;labels&quot;: [&quot;Red&quot;, &quot;Green&quot;, &quot;Yellow&quot;, &quot;Grey&quot;, &quot;Blue&quot;],
    &quot;datasets&quot;: [
      {
        &quot;label&quot;: &quot;My First Dataset&quot;,
        &quot;data&quot;: [11, 16, 7, 3, 14],
        &quot;backgroundColor&quot;: [
          &quot;rgb(255, 99, 132)&quot;,
          &quot;rgb(75, 192, 192)&quot;,
          &quot;rgb(255, 205, 86)&quot;,
          &quot;rgb(201, 203, 207)&quot;,
          &quot;rgb(54, 162, 235)&quot;
        ]
      }
    ]
  }
}</span>
<span class="token punctuation">\`\`\`</span></span>

:::
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></details><h3 id="radar-chart" tabindex="-1"><a class="header-anchor" href="#radar-chart" aria-hidden="true">#</a> Radar Chart</h3>`,2),g=a(`<details class="hint-container details"><summary>Code</summary><div class="language-markdown line-numbers-mode" data-ext="md"><pre class="language-markdown"><code>::: chart A Radar Chart

<span class="token code"><span class="token punctuation">\`\`\`</span><span class="token code-language">json</span>
<span class="token code-block language-json">{
  &quot;type&quot;: &quot;radar&quot;,
  &quot;data&quot;: {
    &quot;labels&quot;: [
      &quot;Eating&quot;,
      &quot;Drinking&quot;,
      &quot;Sleeping&quot;,
      &quot;Designing&quot;,
      &quot;Coding&quot;,
      &quot;Cycling&quot;,
      &quot;Running&quot;
    ],
    &quot;datasets&quot;: [
      {
        &quot;label&quot;: &quot;My First Dataset&quot;,
        &quot;data&quot;: [65, 59, 90, 81, 56, 55, 40],
        &quot;fill&quot;: true,
        &quot;backgroundColor&quot;: &quot;rgba(255, 99, 132, 0.2)&quot;,
        &quot;borderColor&quot;: &quot;rgb(255, 99, 132)&quot;,
        &quot;pointBackgroundColor&quot;: &quot;rgb(255, 99, 132)&quot;,
        &quot;pointBorderColor&quot;: &quot;#fff&quot;,
        &quot;pointHoverBackgroundColor&quot;: &quot;#fff&quot;,
        &quot;pointHoverBorderColor&quot;: &quot;rgb(255, 99, 132)&quot;
      },
      {
        &quot;label&quot;: &quot;My Second Dataset&quot;,
        &quot;data&quot;: [28, 48, 40, 19, 96, 27, 100],
        &quot;fill&quot;: true,
        &quot;backgroundColor&quot;: &quot;rgba(54, 162, 235, 0.2)&quot;,
        &quot;borderColor&quot;: &quot;rgb(54, 162, 235)&quot;,
        &quot;pointBackgroundColor&quot;: &quot;rgb(54, 162, 235)&quot;,
        &quot;pointBorderColor&quot;: &quot;#fff&quot;,
        &quot;pointHoverBackgroundColor&quot;: &quot;#fff&quot;,
        &quot;pointHoverBorderColor&quot;: &quot;rgb(54, 162, 235)&quot;
      }
    ]
  },
  &quot;options&quot;: {
    &quot;elements&quot;: {
      &quot;line&quot;: {
        &quot;borderWidth&quot;: 3
      }
    }
  }
}</span>
<span class="token punctuation">\`\`\`</span></span>

:::
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></details><h3 id="scatter-chart" tabindex="-1"><a class="header-anchor" href="#scatter-chart" aria-hidden="true">#</a> Scatter Chart</h3>`,2),h=a(`<details class="hint-container details"><summary>Code</summary><div class="language-markdown line-numbers-mode" data-ext="md"><pre class="language-markdown"><code>::: chart A Scatter Chart

<span class="token code"><span class="token punctuation">\`\`\`</span><span class="token code-language">json</span>
<span class="token code-block language-json">{
  &quot;type&quot;: &quot;scatter&quot;,
  &quot;data&quot;: {
    &quot;datasets&quot;: [
      {
        &quot;label&quot;: &quot;Scatter Dataset&quot;,
        &quot;data&quot;: [
          { &quot;x&quot;: -10, &quot;y&quot;: 0 },
          { &quot;x&quot;: 0, &quot;y&quot;: 10 },
          { &quot;x&quot;: 10, &quot;y&quot;: 5 },
          { &quot;x&quot;: 0.5, &quot;y&quot;: 5.5 }
        ],
        &quot;backgroundColor&quot;: &quot;rgb(255, 99, 132)&quot;
      }
    ]
  },
  &quot;options&quot;: {
    &quot;scales&quot;: {
      &quot;x&quot;: {
        &quot;type&quot;: &quot;linear&quot;,
        &quot;position&quot;: &quot;bottom&quot;
      }
    }
  }
}</span>
<span class="token punctuation">\`\`\`</span></span>

:::
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></details>`,1);function y(C,A){const n=o("ChartJS");return l(),u("div",null,[c,p,s(n,{id:"chart-6",config:"eJyNUj1PwzAQ3fsrLLOAZKE6IYGwAQMjiAEEVQenOUKEFUeOI1Sh/HfuLLckKCkd/HH3nt/ds+57wRh32wb4NeO5slxQolBOYYJAjLTKQbcYr/gTFFwwfqs7oPMVtDZfdLu3ADVdHjvbaA8+WFWXwNekGDRbcF7HZ1jQ/61BPZww886ejYPWtxLg0NBKRoLJTLBYsEQwDOIg71m52nyW1nR1cWe0sYNKHrZlrk6jBB9mKCFjfL48j84GdXak5ALxFPEoRvYMyStFy1SwK1wzpEvkyMx3PV9OJuhHLqkeaR6qJxNsPcX2PGnPGf2CsQXYY39A/u9/kjJ2P0kZe5+k/HE+X2nvGykHXL9UhftA1zIAvT/XuPd+sE3jKlPTDIbZbjdK46jtYsxsBwHpQlnVN+4NrEHA2Q5G0rT3i37xA75CsCY=",title:"A%20bar%20chart",type:"json"}),d,s(n,{id:"chart-12",config:"eJyNUsFOwzAMve8rrHABKZqWlg5WxAE4cARxAMHEIV1NmQhNlaaCCe3fcdKtW0sLWGpjxy/v+UV512mlcIyfhTa2hHP4GgHYVYExsEQaxqlMpZWxbwAomaAqY5izO0wZB3apKnTrIyqlP1x2bRBzl9xWplC+eWNkniF7dmw1X4nWsfgaNtwNP2kfgH6Be22x9CPUUQ8yFwEHMeMQcog4UBFuiF0kcvGWGV3l6ZVW2uw0XDCTJfIwiOjYjAhESIcn4+BoT2MLio6pP6V+EBJ6AOSZgsmUwyl9A6ATwoiZn3lYTkTkRkycnuP8TU9ENPqUxuuA9i9BmxTNPy9A/G2/F9I23wtpW++FdIwPKzW2W5Afph+WqX2NQWz313XicT7XhV3qnB5f/ejKhVTYVACrXUqUmC3zC/uERsdgTYUdVr/Qb302+gZxe7S/",title:"A%20bar%20chart",type:"js"}),v,s(n,{id:"chart-18",config:"eJyNUsFOwzAMve8rrHABKZqWlg5WxAE4cARxAMHEIV1NmQhNlaaCCe3fcdKtW0sLWGpjxy/v+UV512mlcIyfhTa2hHP4GgHYVYExsEQaxqlMpZWxbwAomaAqY5izO0wZB3apKnTrIyqlP1x2bRBzl9xWplC+eWNkniF7dmw1X4nWsfgaNtwNP2kfgH6Be22x9CPUUQ8yFwEHMeMQcog4UBFuiF0kcvGWGV3l6ZVW2uw0XDCTJfIwiOjYjAhESIcn4+BoT2MLio6pP6V+EBJ6AOSZgsmUwyl9A6ATwoiZn3lYTkTkRkycnuP8TU9ENPqUxuuA9i9BmxTNPy9A/G2/F9I23wtpW++FdIwPKzW2W5Afph+WqX2NQWz313XicT7XhV3qnB5f/ejKhVTYVACrXUqUmC3zC/uERsdgTYUdVr/Qb302+gZxe7S/",title:"A%20bar%20chart",type:"js"}),b,s(n,{id:"chart-27",config:"eJxNjUEOwiAURPc9xc9facKiUFnUrcZLmC7AksZIxABNbAx3FyhFN2SYeTP/0wCgX14Kj4ByllIrJMkbhRfRS3n5OeVddK7ZgZLkVAupdBq43K3zcF7hvFOIsrZ1cx/wHS3WEsAlii4JGwXlEH7VCh42kFawhVC54e+aFLfHZM38HE9Gm4SineSOcU6g7wnQju2x4OvCEN/QhOYLM1k72g==",title:"A%20Bubble%20Chart",type:"json"}),q,s(n,{id:"chart-36",config:"eJxNTssKgzAQvPsVS04tSNHS96209CD4BeIh1tgGgsomHqT4792NKfWwr9nZmf1EAMKNvRIXEEa3SsSM1NJJQnhLk5GVMpbmQmSyHSSOIgbxUBX++lzi883NtUdtZsQvsoEluZpRlKwd1K1yXtEjEJz+bvxOPsJDo3Vwn/n+tUAKDxaHfQz7cwynhCKl/kBB2C4JZp7daMOKjTRWLeCqw1rhrTMdsh++qtWRbtPz1qf10tCp1uquJV6ySQM8+VpSnqIp+gLndFA2",title:"A%20Line%20Chart",type:"json"}),m,s(n,{id:"chart-45",config:"eJxtTrsOwjAM3PsVlieQMrQppZSNh2BiYUOIIaUWQkQEpUWoQv13nBBBhy5+3J3P944AsGkfhHPAh9HKLiwpFA6uVKMYdhLetCpJ17wfcU8VCsCtJbq74UBam1eAWteX+kl4ci7Bp6bG33oEguff133ftbC52rqB9VfvQwRRiHJMEgHJVEAuIOVpEl54TanOt4s1z3u1MtrY3jdP20s5klkmoCj4MpXjnn+gc2aTQvoyQPtrGXOZTYfomMPJmHPJOB/gs4nLzu4yzcb4Y09h6nx3Wxd10QeFAVlO",title:"A%20Polar%20Area%20Chart",type:"json"}),k,s(n,{id:"chart-54",config:"eJy9VD1PwzAQ3fsrrLCAFKE0/aBlpAWxsNCBoWJw6kuwauzIcZAilP/O2UloLEpTCYkhlu/53t2zny6fI0ICU+UQ3JJAU0Z1EFqIUUMRsscYCZqAKDDeuhiRe2q4zFyui9eay72HbARA7udAwTPpQSvF/LjaCQ94LqVjuPi1gZ24AkxfUCP0INZe56kiD1wXhqyb/O+qh/tt57OQzJYhWUYhWYxxP8cPsWnUNnPZKRe2otEl9NCE7vaZVqVkKyWUdi+YJfQytgWWWHQ8iUMSXcdX/c6J0gx0n+ERvNxccWnujrYZIvldLtI0/ZHzqD5AH6l+InlIe0uqO/YvtmxgpyQ75Uu8QA/sh76MrT/oS3yD++gPxsymWGCOnsQTFH2GMX3C2cYMkP7LGF9GZ0wzR7g6iwKVG66kHaR20kHAO0g3Wp13AU6k/T30vGye6oUz84YHE6+4XetRPfoCDysUmg==",title:"A%20Radar%20Chart",type:"json"}),g,s(n,{id:"chart-63",config:"eJxtUEsKgzAQ3XuKIasWrKjFhd22N+iyuIgaRJoa0RQqxbt3Jh+14CYk7zeT9w0AmJ56wS7AxoprLQYWElhzzREkgXuNQo+IPAwCjjGs5KWQlHC3CXCzcpPkNC7Pu00CsA9CpyQOgU14i2FeHQvv2WSfXtzZvjvKPB+hYhEUm91KXj2bQb27+qqkGugnQ1Me0gyteR5Cck6PzMltQoGnmcZUr1vVUTGuKmxRivWNCK2xacvXLdtOcNu2Y3o1tpRGbKm0Vq//qXTOwRz8AH72Yfs=",title:"A%20Scatter%20Chart",type:"json"}),h])}const f=i(r,[["render",y],["__file","chart.html.vue"]]);export{f as default};
