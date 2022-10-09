import{_ as p,o,c,b as s,e,a,d as n,r as l}from"./app.39db3157.js";const r={},u=a(`<h1 id="\u8FC7\u5EA6\u5EF6\u8FDF" tabindex="-1"><a class="header-anchor" href="#\u8FC7\u5EA6\u5EF6\u8FDF" aria-hidden="true">#</a> \u8FC7\u5EA6\u5EF6\u8FDF</h1><h2 id="\u5143\u7D20\u72B6\u6001" tabindex="-1"><a class="header-anchor" href="#\u5143\u7D20\u72B6\u6001" aria-hidden="true">#</a> \u5143\u7D20\u72B6\u6001</h2><h3 id="\u521D\u59CB\u72B6\u6001" tabindex="-1"><a class="header-anchor" href="#\u521D\u59CB\u72B6\u6001" aria-hidden="true">#</a> \u521D\u59CB\u72B6\u6001</h3><p>\u6307\u5F53\u524D\u9875\u9762\u52A0\u8F7D\u540E\u7684\u6837\u5F0F\u72B6\u6001</p><h3 id="\u53D8\u5316\u5F62\u6001" tabindex="-1"><a class="header-anchor" href="#\u53D8\u5316\u5F62\u6001" aria-hidden="true">#</a> \u53D8\u5316\u5F62\u6001</h3><p>\u6307\u5143\u7D20\u7531\u521D\u59CB\u72B6\u6001\u53D8\u5316\u540E\u7684\u72B6\u6001\uFF0C\u6BD4\u5982\u9F20\u6807\u653E\u4E0A\u3001\u8868\u5355\u83B7\u5F97\u7126\u70B9\u540E\u7684\u5F62\u6001</p><h2 id="transition-property" tabindex="-1"><a class="header-anchor" href="#transition-property" aria-hidden="true">#</a> transition-property</h2><div class="custom-container tip"><p class="custom-container-title">TIP</p><p>\u7528\u4E8E\u8BBE\u7F6E\u54EA\u4E9B\u5C5E\u6027\u5E94\u7528\u8FC7\u6E21\u6548\u679C</p><ul><li>\u9ED8\u8BA4\u503C\u4E3A<code>all</code> \u5373\u6240\u6709\u5C5E\u6027\u90FD\u53D1\u751F\u8FC7\u6E21\u6548\u679C</li><li>\u591A\u4E2A\u5C5E\u6027\u4F7F\u7528\u9017\u53F7\u5206\u9694</li></ul></div><h3 id="\u7981\u7528\u5C5E\u6027" tabindex="-1"><a class="header-anchor" href="#\u7981\u7528\u5C5E\u6027" aria-hidden="true">#</a> \u7981\u7528\u5C5E\u6027</h3><div class="language-css ext-css line-numbers-mode"><pre class="language-css"><code><span class="token selector">div</span><span class="token punctuation">{</span>
    <span class="token property">transition-property</span><span class="token punctuation">:</span> none<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="transitionend" tabindex="-1"><a class="header-anchor" href="#transitionend" aria-hidden="true">#</a> transitionend</h2><p>\u7528\u4E8E\u63A7\u5236\u8FC7\u6E21\u7ED3\u675F\u540E\u6267\u884C\u7684 JS \u4E8B\u4EF6\uFF0C\u7B80\u5199\u5C5E\u6027\u4F1A\u89E6\u53D1\u591A\u6B21\u5982 <code>border-radius</code> \u4F1A\u89E6\u53D1\u56DB\u6B21\u4E8B\u4EF6\uFF0C\u4E0D\u96BE\u7406\u89E3\u56E0\u4E3A\u53EF\u4EE5\u4E3A<code>border-bottom-left-radius</code> \u7B49\u56DB\u4E2A\u5C5E\u6027\u72EC\u7ACB\u8BBE\u7F6E\u8FC7\u6E21\uFF0C\u6240\u4EE5\u5C31\u4F1A\u6709\u56DB\u6B21\u4E8B\u4EF6</p><table><thead><tr><th>\u5C5E\u6027</th><th>\u8BF4\u660E</th></tr></thead><tbody><tr><td>propertyName</td><td>\u7ED3\u675F\u8FC7\u6E21\u6837\u5F0F</td></tr><tr><td>elapsedTime</td><td>\u8FC7\u6E21\u9700\u8981\u7684\u65F6\u95F4</td></tr><tr><td>pseudoElement</td><td>\u8FC7\u6E21\u7684\u4F2A\u5143\u7D20</td></tr><tr><td>isTrusted</td><td>true:\u7528\u6237\u89E6\u53D1\uFF0Cfalse:\u811A\u672C\u89E6\u53D1</td></tr></tbody></table><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>document<span class="token punctuation">.</span><span class="token function">querySelector</span><span class="token punctuation">(</span><span class="token string">&#39;div&#39;</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">addEventListener</span><span class="token punctuation">(</span><span class="token string">&#39;transitionend&#39;</span><span class="token punctuation">,</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">e</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>e<span class="token punctuation">)</span><span class="token punctuation">;</span>
    document<span class="token punctuation">.</span><span class="token function">querySelector</span><span class="token punctuation">(</span><span class="token string">&#39;div&#39;</span><span class="token punctuation">)</span><span class="token punctuation">.</span>className <span class="token operator">=</span> <span class="token string">&#39;move&#39;</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="transition-duration" tabindex="-1"><a class="header-anchor" href="#transition-duration" aria-hidden="true">#</a> transition-duration</h2><p>\u7528\u4E8E\u8BBE\u7F6E\u8FC7\u6E21\u65F6\u95F4\uFF0C\u9700\u8981\u6CE8\u610F\u4EE5\u4E0B\u51E0\u70B9</p><ul><li>\u53EF\u4F7F\u7528\u5355\u4F4D\u4E3A ms \u6BEB\u79D2\u3001s \u79D2</li><li>\u9ED8\u8BA4\u503C\u4E3A 0s \u4E0D\u4EA7\u751F\u8FC7\u6E21\u6548\u679C</li><li>\u4E00\u4E2A\u503C\u65F6\uFF0C\u6240\u6709\u5C5E\u6027\u4F7F\u7528\u540C\u6837\u7684\u65F6\u95F4</li><li>\u4E8C\u4E2A\u503C\u65F6\uFF0C\u5947\u6570\u5C5E\u6027\u4F7F\u7528\u7B2C\u4E00\u4E2A\uFF0C\u5076\u6570\u5C5E\u6027\u4F7F\u7528\u7B2C\u4E8C\u4E2A</li><li>\u53D8\u5316\u5C5E\u6027\u6570\u91CF\u5927\u4E8E\u65F6\u95F4\u6570\u91CF\u65F6\uFF0C\u540E\u9762\u7684\u5C5E\u6027\u518D\u4ECE\u7B2C\u4E00\u4E2A\u65F6\u95F4\u5F00\u59CB\u91CD\u590D\u4F7F\u7528</li></ul><div class="language-css ext-css line-numbers-mode"><pre class="language-css"><code><span class="token comment">/*\u7EDF\u4E00\u65F6\u95F4*/</span>
<span class="token property">transition-duration</span><span class="token punctuation">:</span> 3s

<span class="token comment">/*\u4E24\u4E2A\u65F6\u95F4--\u56DB\u4E2A\u5C5E\u6027\u5E76\u8BBE\u7F6E\u4E86\u4E24\u4E2A\u65F6\u95F4\u503C\uFF0C1,3 \u5C5E\u6027\u4F7F\u7528\u7B2C\u4E00\u4E2A\u503C\uFF0C2,4 \u5C5E\u6027\u4F7F\u7528\u7B2C\u4E8C\u4E2A\u503C*/</span>
<span class="token property">transition-property</span><span class="token punctuation">:</span> background-color<span class="token punctuation">,</span> transform<span class="token punctuation">,</span> opacity<span class="token punctuation">,</span> border-radius<span class="token punctuation">;</span>
<span class="token property">transition-duration</span><span class="token punctuation">:</span> 200ms<span class="token punctuation">,</span> 5s<span class="token punctuation">;</span>

<span class="token comment">/*\u591A\u4E2A\u65F6\u95F4--\u56DB\u4E2A\u5C5E\u6027\u5E76\u8BBE\u7F6E\u4E86\u4E09\u4E2A\u65F6\u95F4\u503C\uFF0C1,2,3 \u5C5E\u6027\u4F7F\u7528 1,2,3 \u65F6\u95F4\u503C\uFF0C\u7B2C\u56DB\u4E2A\u5C5E\u6027\u518D\u4ECE\u65B0\u4F7F\u7528\u7B2C\u4E00\u4E2A\u65F6\u95F4\u503C*/</span>
<span class="token property">transition-property</span><span class="token punctuation">:</span> background-color<span class="token punctuation">,</span> transform<span class="token punctuation">,</span> opacity<span class="token punctuation">,</span> border-radius<span class="token punctuation">;</span>
<span class="token property">transition-duration</span><span class="token punctuation">:</span> 200ms<span class="token punctuation">,</span> 5s<span class="token punctuation">,</span> 2s<span class="token punctuation">;</span>

<span class="token comment">/*\u4E0D\u540C\u65F6\u95F4--\u5C06hover \u8BBE\u7F6E\u4E3A 3s\uFF0C\u5F53\u9F20\u6807\u653E\u4E0A\u65F6\u53D8\u5316\u65F6\u95F4\u4E3A 3s\u3002\u4E3A\u521D\u59CB\u8BBE\u7F6E\u4E3A 1s \u5373\u8868\u793A\u53D8\u5316\u5230\u521D\u59CB\u72B6\u6001\u9700\u8981 1s*/</span>
<span class="token selector">div</span> <span class="token punctuation">{</span>
    <span class="token property">width</span><span class="token punctuation">:</span> 150px<span class="token punctuation">;</span>
    <span class="token property">height</span><span class="token punctuation">:</span> 150px<span class="token punctuation">;</span>
    <span class="token property">background-color</span><span class="token punctuation">:</span> #e67e22<span class="token punctuation">;</span>
    <span class="token property">border-radius</span><span class="token punctuation">:</span> 50%<span class="token punctuation">;</span>
    <span class="token property">transition-property</span><span class="token punctuation">:</span> background-color<span class="token punctuation">,</span> transform<span class="token punctuation">,</span> opacity<span class="token punctuation">,</span> border-radius<span class="token punctuation">;</span>
    <span class="token property">transition-duration</span><span class="token punctuation">:</span> 1s<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token selector">div:hover</span> <span class="token punctuation">{</span>
    <span class="token property">border-radius</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
    <span class="token property">transform</span><span class="token punctuation">:</span> <span class="token function">scale</span><span class="token punctuation">(</span>2<span class="token punctuation">)</span> <span class="token function">rotate</span><span class="token punctuation">(</span>180deg<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token property">background-color</span><span class="token punctuation">:</span> #e67e22<span class="token punctuation">;</span>
    <span class="token property">transition-duration</span><span class="token punctuation">:</span> 3s<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="transition-timing-function" tabindex="-1"><a class="header-anchor" href="#transition-timing-function" aria-hidden="true">#</a> transition-timing-function</h2>`,19),d=n("\u7528\u4E8E\u8BBE\u7F6E\u8FC7\u6E21\u6548\u679C\u7684\u901F\u5EA6\uFF0C\u53EF\u5728 "),k={href:"https://cubic-bezier.com/",target:"_blank",rel:"noopener noreferrer"},h=n("https://cubic-bezier.com (opens new window)"),b=n("\u7F51\u7AD9\u5728\u7EBF\u4F53\u9A8C\u6548\u679C\u5DEE\u5F02"),v=a('<h3 id="\u9ED8\u8BA4\u53C2\u6570" tabindex="-1"><a class="header-anchor" href="#\u9ED8\u8BA4\u53C2\u6570" aria-hidden="true">#</a> \u9ED8\u8BA4\u53C2\u6570</h3><table><thead><tr><th style="text-align:left;">\u503C</th><th style="text-align:left;">\u63CF\u8FF0</th></tr></thead><tbody><tr><td style="text-align:left;">linear</td><td style="text-align:left;">\u89C4\u5B9A\u4EE5\u76F8\u540C\u901F\u5EA6\u5F00\u59CB\u81F3\u7ED3\u675F\u7684\u8FC7\u6E21\u6548\u679C\uFF08\u7B49\u4E8E cubic-bezier(0,0,1,1)\uFF09\u3002</td></tr><tr><td style="text-align:left;">ease</td><td style="text-align:left;">\u5F00\u59CB\u6162\uFF0C\u7136\u540E\u5FEB\uFF0C\u6162\u4E0B\u6765\uFF0C\u7ED3\u675F\u65F6\u975E\u5E38\u6162\uFF08cubic-bezier(0.25,0.1,0.25,1)\uFF09</td></tr><tr><td style="text-align:left;">ease-in</td><td style="text-align:left;">\u5F00\u59CB\u6162\uFF0C\u7ED3\u675F\u5FEB\uFF08\u7B49\u4E8E cubic-bezier(0.42,0,1,1)\uFF09</td></tr><tr><td style="text-align:left;">ease-out</td><td style="text-align:left;">\u5F00\u59CB\u5FEB\uFF0C\u7ED3\u675F\u6162\uFF08\u7B49\u4E8E cubic-bezier(0,0,0.58,1)\uFF09</td></tr><tr><td style="text-align:left;">ease-in-out</td><td style="text-align:left;">\u4E2D\u95F4\u5FEB\uFF0C\u4E24\u8FB9\u6162\uFF08\u7B49\u4E8E cubic-bezier(0.42,0,0.58,1)\uFF09</td></tr><tr><td style="text-align:left;">cubic-bezier(<em>n</em>,<em>n</em>,<em>n</em>,<em>n</em>)</td><td style="text-align:left;">\u5728 cubic-bezier \u51FD\u6570\u4E2D\u5B9A\u4E49\u81EA\u5DF1\u7684\u503C</td></tr></tbody></table><h3 id="\u8D1D\u585E\u5C14\u66F2\u7EBF" tabindex="-1"><a class="header-anchor" href="#\u8D1D\u585E\u5C14\u66F2\u7EBF" aria-hidden="true">#</a> \u8D1D\u585E\u5C14\u66F2\u7EBF</h3>',3),m=n("\u9700\u8981\u8BBE\u7F6E\u56DB\u4E2A\u503C "),f=s("code",null,"cubic-bezier(<x1>, <y1>, <x2>, <y2>)",-1),y=n("\uFF0C\u6765\u63A7\u5236\u66F2\u7EBF\u901F\u5EA6\uFF0C\u53EF\u5728 "),g={href:"https://cubic-bezier.com/",target:"_blank",rel:"noopener noreferrer"},x=n("https://cubic-bezier.com (opens new window)"),_=n("\u7F51\u7AD9\u5728\u7EBF\u4F53\u9A8C\u6548\u679C\u3002"),z=["src"],w=a(`<div class="language-css ext-css line-numbers-mode"><pre class="language-css"><code><span class="token comment">/*\u6D4B\u8BD5*/</span>
<span class="token property">-webkit-transition-timing-function</span><span class="token punctuation">:</span> <span class="token function">cubic-bezier</span><span class="token punctuation">(</span>0.45<span class="token punctuation">,</span> 1.64<span class="token punctuation">,</span> 0.47<span class="token punctuation">,</span> 0.66<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token property">-moz-transition-timing-function</span><span class="token punctuation">:</span> <span class="token function">cubic-bezier</span><span class="token punctuation">(</span>0.45<span class="token punctuation">,</span> 1.64<span class="token punctuation">,</span> 0.47<span class="token punctuation">,</span> 0.66<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token property">-o-transition-timing-function</span><span class="token punctuation">:</span> <span class="token function">cubic-bezier</span><span class="token punctuation">(</span>0.45<span class="token punctuation">,</span> 1.64<span class="token punctuation">,</span> 0.47<span class="token punctuation">,</span> 0.66<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token property">-ms-transition-timing-function</span><span class="token punctuation">:</span> <span class="token function">cubic-bezier</span><span class="token punctuation">(</span>0.45<span class="token punctuation">,</span> 1.64<span class="token punctuation">,</span> 0.47<span class="token punctuation">,</span> 0.66<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token property">transition-timing-function</span><span class="token punctuation">:</span> <span class="token function">cubic-bezier</span><span class="token punctuation">(</span>0.45<span class="token punctuation">,</span> 1.64<span class="token punctuation">,</span> 0.47<span class="token punctuation">,</span> 0.66<span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token property">transition-property</span><span class="token punctuation">:</span> background-color<span class="token punctuation">,</span> transform<span class="token punctuation">,</span> opacity<span class="token punctuation">,</span> border-radius<span class="token punctuation">;</span>
<span class="token property">transition-duration</span><span class="token punctuation">:</span> 3s<span class="token punctuation">;</span>
<span class="token property">transition-timing-function</span><span class="token punctuation">:</span> <span class="token function">cubic-bezier</span><span class="token punctuation">(</span>.17<span class="token punctuation">,</span> .67<span class="token punctuation">,</span> .86<span class="token punctuation">,</span> .49<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="\u6B65\u8FDB\u901F\u5EA6" tabindex="-1"><a class="header-anchor" href="#\u6B65\u8FDB\u901F\u5EA6" aria-hidden="true">#</a> \u6B65\u8FDB\u901F\u5EA6</h3><p>\u8FC7\u6E21\u4F7F\u7528\u9636\u68AF\u5316\u5448\u73B0\uFF0C\u6709\u70B9\u50CF\u73B0\u5B9E\u751F\u6D3B\u4E2D\u7684\u673A\u68B0\u821E\uFF0C\u4E0B\u9762\u662F\u628A\u8FC7\u6E21\u5206\u4E94\u6B65\u5B8C\u6210</p><table><thead><tr><th>\u9009\u9879</th><th>\u8BF4\u660E</th></tr></thead><tbody><tr><td>steps(n,start)</td><td>\u8BBE\u7F6E n \u4E2A\u65F6\u95F4\u70B9\uFF0C\u7B2C\u4E00\u65F6\u95F4\u70B9\u53D8\u5316\u72B6\u6001</td></tr><tr><td>steps(n,end)</td><td>\u8BBE\u7F6E n \u4E2A\u65F6\u95F4\u70B9\uFF0C\u7B2C\u4E00\u65F6\u95F4\u70B9\u521D\u59CB\u72B6\u6001</td></tr><tr><td>step-start</td><td>\u7B49\u4E8E steps(1,start)\uFF0C\u53EF\u4EE5\u7406\u89E3\u4E3A\u4ECE\u4E0B\u4E00\u6B65\u5F00\u59CB</td></tr><tr><td>step-end</td><td>\u7B49\u4E8E steps(1,end)\uFF0C\u53EF\u4EE5\u7406\u89E3\u4E3A\u4ECE\u5F53\u524D\u6B65\u5F00\u59CB</td></tr></tbody></table><h2 id="transition-delay" tabindex="-1"><a class="header-anchor" href="#transition-delay" aria-hidden="true">#</a> transition-delay</h2><p>\u7528\u4E8E\u8BBE\u7F6E\u5EF6\u8FDF\u8FC7\u6E21\u7684\u65F6\u95F4\u3002</p><ul><li>\u9ED8\u8BA4\u4E3A 0s \u5373\u7ACB\u523B\u5F00\u59CB\u8FC7\u6E21</li><li>\u503C\u53EF\u4EE5\u4E3A\u8D1F\u6570</li><li>\u53D8\u5316\u5C5E\u6027\u6570\u91CF\u5927\u4E8E\u65F6\u95F4\u6570\u91CF\u65F6\uFF0C\u540E\u9762\u7684\u5C5E\u6027\u518D\u4ECE\u7B2C\u4E00\u4E2A\u65F6\u95F4\u5F00\u59CB\u91CD\u590D\u4F7F\u7528</li></ul><h2 id="transition" tabindex="-1"><a class="header-anchor" href="#transition" aria-hidden="true">#</a> transition</h2><p>\u53EF\u4EE5\u4F7F\u7528<code>transition</code> \u6307\u4EE4\u5C06\u8FC7\u6E21\u89C4\u5219\u7EDF\u4E00\u8BBE\u7F6E\uFF0C\u9700\u8981\u6CE8\u610F\u4EE5\u4E0B\u51E0\u70B9\u3002</p><ol><li>\u5FC5\u987B\u8BBE\u7F6E\u8FC7\u6E21\u65F6\u95F4</li><li>\u5EF6\u8FDF\u65F6\u95F4\u653E\u5728\u9017\u53F7\u6216\u7ED3\u675F\u524D</li></ol><div class="language-css ext-css line-numbers-mode"><pre class="language-css"><code><span class="token property">transition</span><span class="token punctuation">:</span> border-radius linear 2s 0s<span class="token punctuation">,</span>background 2s 2s<span class="token punctuation">,</span>width linear 2s 4s<span class="token punctuation">,</span>height linear 2s 4s<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div>`,11);function N(i,E){const t=l("ExternalLinkIcon");return o(),c("div",null,[u,s("p",null,[d,s("a",k,[h,e(t)]),b]),v,s("p",null,[m,f,y,s("a",g,[x,e(t)]),_]),s("img",{src:i.$withBase("/images/flex/05.png"),alt:"foo"},null,8,z),w])}var S=p(r,[["render",N],["__file","transition.html.vue"]]);export{S as default};
