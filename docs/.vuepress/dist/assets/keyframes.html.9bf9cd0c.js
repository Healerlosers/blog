import{_ as d,o,c,b as n,e as s,a as t,d as a,r}from"./app.5cbf055b.js";const l={},p=t(`<h1 id="\u5E27\u52A8\u753B" tabindex="-1"><a class="header-anchor" href="#\u5E27\u52A8\u753B" aria-hidden="true">#</a> \u5E27\u52A8\u753B</h1><h2 id="keyframes" tabindex="-1"><a class="header-anchor" href="#keyframes" aria-hidden="true">#</a> @keyframes</h2><p>\u4F7F\u7528<code>@keyframes</code> \u89C4\u5219\u914D\u7F6E\u52A8\u753B\u4E2D\u7684\u5404\u4E2A\u5E27</p><ul><li>from \u8868\u793A\u8D77\u59CB\u70B9</li><li>to \u8868\u793A\u7EC8\u70B9</li><li>\u53EF\u4EE5\u4F7F\u7528\u767E\u5206\u6570\u5982 20%\u52A8\u753B\u8FD0\u884C\u5230 20%\u65F6\u95F4\u65F6</li></ul><h3 id="\u57FA\u672C\u4F7F\u7528" tabindex="-1"><a class="header-anchor" href="#\u57FA\u672C\u4F7F\u7528" aria-hidden="true">#</a> \u57FA\u672C\u4F7F\u7528</h3><p>\u4F7F\u7528 <code>@keyframes</code> \u5B9A\u4E49\u4E86\u52A8\u753B\u53EB <code>ke</code> \u5E76\u914D\u7F6E\u4E86\u4E24\u4E2A\u5E27\u52A8\u4F5C<code>from/to</code> \uFF0C\u7136\u540E\u5728 div \u5143\u7D20\u4E2D\u4F7F\u7528<code>animation-name</code> \u5F15\u7528\u4E86\u52A8\u753B\u5E76\u4F7F\u7528<code>animation-duration</code>\u58F0\u660E\u6267\u884C\u4E09\u79D2</p><div class="language-css ext-css line-numbers-mode"><pre class="language-css"><code><span class="token atrule"><span class="token rule">@keyframes</span> ke</span> <span class="token punctuation">{</span>
    <span class="token selector">from</span> <span class="token punctuation">{</span>
        <span class="token property">opacity</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
        <span class="token property">transform</span><span class="token punctuation">:</span> <span class="token function">scale</span><span class="token punctuation">(</span>.1<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token selector">to</span> <span class="token punctuation">{</span>
        <span class="token property">opacity</span><span class="token punctuation">:</span> 1<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="\u65F6\u95F4\u70B9" tabindex="-1"><a class="header-anchor" href="#\u65F6\u95F4\u70B9" aria-hidden="true">#</a> \u65F6\u95F4\u70B9</h3><p>\u5E27\u52A8\u753B\u9700\u8981\u5B9A\u4E49\u5728\u4E0D\u540C\u65F6\u95F4\u6267\u884C\u7684\u52A8\u4F5C\uFF0C\u5F00\u59CB\u4E0E\u7ED3\u675F\u53EF\u4EE5\u4F7F\u7528 <code>form/to</code> \u6216 <code>0%/100%</code> \u58F0\u660E\u3002</p><ul><li>\u5FC5\u987B\u6DFB\u52A0\u767E\u5206\u53F7\uFF0C25%\u662F\u6B63\u786E\u5199\u6CD5</li><li>\u65F6\u95F4\u70B9\u6CA1\u6709\u987A\u5E8F\u8981\u6C42\uFF0C\u5373 100%\u5199\u5728 25%\u524D\u4E5F\u53EF\u4EE5</li><li>\u672A\u8BBE\u7F6E<code>0%</code>\u4E0E<code>100%</code> \u65F6\u5C06\u4F7F\u7528\u5143\u7D20\u539F\u59CB\u72B6\u6001</li></ul><div class="language-css ext-css line-numbers-mode"><pre class="language-css"><code><span class="token atrule"><span class="token rule">@keyframes</span> key</span> <span class="token punctuation">{</span>
    <span class="token selector">0%</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
    <span class="token selector">25%</span> <span class="token punctuation">{</span>
        <span class="token property">transform</span><span class="token punctuation">:</span> <span class="token function">translateX</span><span class="token punctuation">(</span>300%<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token selector">50%</span> <span class="token punctuation">{</span>
        <span class="token property">transform</span><span class="token punctuation">:</span> <span class="token function">translate</span><span class="token punctuation">(</span>300%<span class="token punctuation">,</span> 300%<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token selector">75%</span> <span class="token punctuation">{</span>
        <span class="token property">transform</span><span class="token punctuation">:</span> <span class="token function">translate</span><span class="token punctuation">(</span>0<span class="token punctuation">,</span> 300%<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token selector">to</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="animation-name" tabindex="-1"><a class="header-anchor" href="#animation-name" aria-hidden="true">#</a> animation-name</h2><p>\u4F7F\u7528<code>animation-name</code> \u89C4\u5219\u53EF\u4EE5\u5728\u5143\u7D20\u8EAB\u4E0A\u540C\u65F6\u4F7F\u7528\u591A\u4E2A\u52A8\u753B\u3002</p><ul><li>\u4F7F\u7528\u591A\u4E2A\u52A8\u753B\u65F6\u7528\u9017\u53F7\u5206\u9694</li><li>\u591A\u4E2A\u52A8\u753B\u6709\u76F8\u540C\u5C5E\u6027\u65F6\uFF0C\u540E\u9762\u52A8\u753B\u7684\u5C5E\u6027\u4F18\u5148\u4F7F\u7528</li></ul><div class="language-css ext-css line-numbers-mode"><pre class="language-css"><code><span class="token property">animation-name</span><span class="token punctuation">:</span> key<span class="token punctuation">,</span> scale<span class="token punctuation">;</span>
<span class="token property">animation-duration</span><span class="token punctuation">:</span> 3s<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="animation-duration" tabindex="-1"><a class="header-anchor" href="#animation-duration" aria-hidden="true">#</a> animation-duration</h2><p>\u4F7F\u7528 <code>animation-duration</code> \u53EF\u4EE5\u58F0\u660E\u52A8\u753B\u64AD\u653E\u7684\u65F6\u95F4\uFF0C\u5373\u628A\u6240\u6709\u5E27\u6267\u884C\u4E00\u904D\u6240\u9700\u8981\u7684\u65F6\u95F4\u3002</p><ul><li>\u53EF\u4EE5\u4F7F\u7528 m \u79D2\uFF0Cms \u6BEB\u79D2\u65F6\u95F4\u5355\u4F4D</li><li>\u53EF\u4E3A\u4E0D\u540C\u52A8\u753B\u5355\u72EC\u8BBE\u7F6E\u6267\u884C\u65F6\u95F4</li><li>\u5982\u679C\u52A8\u753B\u6570\u91CF\u5927\u4E8E\u65F6\u95F4\u6570\u91CF\uFF0C\u5C06\u91CD\u65B0\u4ECE\u65F6\u95F4\u5217\u8868\u4E2D\u8BA1\u7B97</li></ul><h2 id="\u52A8\u753B\u5C5E\u6027" tabindex="-1"><a class="header-anchor" href="#\u52A8\u753B\u5C5E\u6027" aria-hidden="true">#</a> \u52A8\u753B\u5C5E\u6027</h2>`,19),u=a("\u4E0D\u662F\u6240\u6709 css \u5C5E\u6027\u90FD\u6709\u8FC7\u6E21\u6548\u679C\uFF0C"),h={href:"https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_animated_properties",target:"_blank",rel:"noopener noreferrer"},m=a("\u67E5\u770B\u652F\u6301\u52A8\u753B\u7684 CSS \u5C5E\u6027 (opens new window)"),b=a("\uFF0C\u4E00\u822C\u6765\u8BB2\u6709\u4E2D\u95F4\u503C\u7684\u5C5E\u6027\u90FD\u53EF\u4EE5\u8BBE\u7F6E\u52A8\u753B\u5982\u5BBD\u5EA6\u3001\u900F\u660E\u5EA6\u7B49"),k=t('<h2 id="animation-iteration-count" tabindex="-1"><a class="header-anchor" href="#animation-iteration-count" aria-hidden="true">#</a> animation-iteration-count</h2><p>\u4F7F\u7528<code>animation-iteration-count</code> \u89C4\u5219\u8BBE\u7F6E\u52A8\u753B\u91CD\u590D\u6267\u884C\u6B21\u6570\uFF0C\u8BBE\u7F6E\u503C\u4E3A <code>infinite</code> \u8868\u793A\u65E0\u9650\u5FAA\u73AF\u6267\u884C\u3002</p><ul><li>\u53EF\u540C\u65F6\u8BBE\u7F6E\u5143\u7D20\u7684\u591A\u4E2A\u52A8\u753B\u91CD\u590D\uFF0C\u4F7F\u7528\u9017\u53F7\u5206\u9694</li><li>\u5982\u679C\u52A8\u753B\u6570\u91CF\u5927\u4E8E\u91CD\u590D\u6570\u91CF\u5B9A\u4E49\uFF0C\u540E\u9762\u7684\u52A8\u753B\u5C06\u91CD\u65B0\u8BA1\u7B97\u91CD\u590D</li></ul><h2 id="animation-direction" tabindex="-1"><a class="header-anchor" href="#animation-direction" aria-hidden="true">#</a> animation-direction</h2><p>\u4F7F\u7528 <code>animation-direction</code> \u63A7\u5236\u52A8\u753B\u8FD0\u884C\u7684\u65B9\u5411</p><table><thead><tr><th>\u9009\u9879</th><th>\u8BF4\u660E</th></tr></thead><tbody><tr><td>normal</td><td>\u4ECE 0%\u5230 100%\u8FD0\u884C\u52A8\u753B</td></tr><tr><td>reverse</td><td>\u4ECE 100%\u5230 0%\u8FD0\u884C\u52A8\u753B</td></tr><tr><td>alternate</td><td>\u5148\u4ECE 0%\u5230 100%\uFF0C\u7136\u540E\u4ECE 100%\u5230 0%</td></tr><tr><td>alternate-reverse</td><td>\u5148\u4ECE 100%\u5230 0%\uFF0C\u7136\u540E\u4ECE 0%\u5230 100%</td></tr></tbody></table><h2 id="animation-delay" tabindex="-1"><a class="header-anchor" href="#animation-delay" aria-hidden="true">#</a> animation-delay</h2><p>\u4F7F\u7528 <code>animation-delay</code> \u89C4\u5219\u5B9A\u4E49\u52A8\u753B\u7B49\u5F85\u591A\u957F\u65F6\u95F4\u540E\u6267\u884C</p><h2 id="\u52A8\u753B\u901F\u7387" tabindex="-1"><a class="header-anchor" href="#\u52A8\u753B\u901F\u7387" aria-hidden="true">#</a> \u52A8\u753B\u901F\u7387</h2><h3 id="\u7CFB\u7EDF\u5C5E\u6027" tabindex="-1"><a class="header-anchor" href="#\u7CFB\u7EDF\u5C5E\u6027" aria-hidden="true">#</a> \u7CFB\u7EDF\u5C5E\u6027</h3><table><thead><tr><th style="text-align:left;">\u503C</th><th style="text-align:left;">\u63CF\u8FF0</th></tr></thead><tbody><tr><td style="text-align:left;">linear</td><td style="text-align:left;">\u89C4\u5B9A\u4EE5\u76F8\u540C\u901F\u5EA6\u5F00\u59CB\u81F3\u7ED3\u675F\u7684\u8FC7\u6E21\u6548\u679C\uFF08\u7B49\u4E8E cubic-bezier(0,0,1,1)\uFF09\u3002</td></tr><tr><td style="text-align:left;">ease</td><td style="text-align:left;">\u5F00\u59CB\u6162\uFF0C\u7136\u540E\u5FEB\uFF0C\u6162\u4E0B\u6765\uFF0C\u7ED3\u675F\u65F6\u975E\u5E38\u6162\uFF08cubic-bezier(0.25,0.1,0.25,1)\uFF09</td></tr><tr><td style="text-align:left;">ease-in</td><td style="text-align:left;">\u5F00\u59CB\u6162\uFF0C\u7ED3\u675F\u5FEB\uFF08\u7B49\u4E8E cubic-bezier(0.42,0,1,1)\uFF09</td></tr><tr><td style="text-align:left;">ease-out</td><td style="text-align:left;">\u5F00\u59CB\u5FEB\uFF0C\u7ED3\u675F\u6162\uFF08\u7B49\u4E8E cubic-bezier(0,0,0.58,1)\uFF09</td></tr><tr><td style="text-align:left;">ease-in-out</td><td style="text-align:left;">\u4E2D\u95F4\u5FEB\uFF0C\u4E24\u8FB9\u6162\uFF08\u7B49\u4E8E cubic-bezier(0.42,0,0.58,1)\uFF09</td></tr><tr><td style="text-align:left;">cubic-bezier(<em>n</em>,<em>n</em>,<em>n</em>,<em>n</em>)</td><td style="text-align:left;">\u5728 cubic-bezier \u51FD\u6570\u4E2D\u5B9A\u4E49\u81EA\u5DF1\u7684\u503C</td></tr></tbody></table><ul><li>\u53EF\u4EE5\u5728\u5E27\u4E2D\u5355\u72EC\u5B9A\u4E49\uFF0C\u5C06\u5F71\u54CD\u5F53\u524D\u5E27\u7684\u901F\u7387</li></ul><h3 id="\u8D1D\u585E\u5C14\u66F2\u7EBF" tabindex="-1"><a class="header-anchor" href="#\u8D1D\u585E\u5C14\u66F2\u7EBF" aria-hidden="true">#</a> \u8D1D\u585E\u5C14\u66F2\u7EBF</h3>',13),f=a("\u9700\u8981\u8BBE\u7F6E\u56DB\u4E2A\u503C "),v=n("code",null,"cubic-bezier(<x1>, <y1>, <x2>, <y2>)",-1),y=a("\uFF0C\u6765\u63A7\u5236\u66F2\u7EBF\u901F\u5EA6\uFF0C\u53EF\u5728 "),_={href:"https://cubic-bezier.com/",target:"_blank",rel:"noopener noreferrer"},x=a("https://cubic-bezier.com (opens new window)"),g=a("\u7F51\u7AD9\u5728\u7EBF\u4F53\u9A8C\u6548\u679C"),w=["src"],z=t('<h2 id="\u6B65\u8FDB\u901F\u5EA6" tabindex="-1"><a class="header-anchor" href="#\u6B65\u8FDB\u901F\u5EA6" aria-hidden="true">#</a> \u6B65\u8FDB\u901F\u5EA6</h2><p>\u8FC7\u6E21\u4F7F\u7528\u9636\u68AF\u5316\u5448\u73B0\uFF0C\u6709\u70B9\u50CF\u73B0\u5B9E\u751F\u6D3B\u4E2D\u7684\u673A\u68B0\u821E\uFF0C\u4E0B\u9762\u662F\u628A\u8FC7\u6E21\u5206\u4E94\u6B65\u5B8C\u6210\u3002</p><table><thead><tr><th>\u9009\u9879</th><th>\u8BF4\u660E</th></tr></thead><tbody><tr><td>steps(n,start)</td><td>\u8BBE\u7F6E n \u4E2A\u65F6\u95F4\u70B9\uFF0C\u7B2C\u4E00\u65F6\u95F4\u70B9\u53D8\u5316\u72B6\u6001</td></tr><tr><td>steps(n,end)</td><td>\u8BBE\u7F6E n \u4E2A\u65F6\u95F4\u70B9\uFF0C\u7B2C\u4E00\u65F6\u95F4\u70B9\u521D\u59CB\u72B6\u6001</td></tr><tr><td>step-start</td><td>\u7B49\u4E8E steps(1,start)\uFF0C\u53EF\u4EE5\u7406\u89E3\u4E3A\u4ECE\u4E0B\u4E00\u6B65\u5F00\u59CB</td></tr><tr><td>step-end</td><td>\u7B49\u4E8E steps(1,end)\uFF0C\u53EF\u4EE5\u7406\u89E3\u4E3A\u4ECE\u5F53\u524D\u6B65\u5F00\u59CB</td></tr></tbody></table><h3 id="steps" tabindex="-1"><a class="header-anchor" href="#steps" aria-hidden="true">#</a> steps</h3><p><code>steps(n,start)</code> \u53EF\u4EE5\u7B80\u5355\u7406\u89E3\u4E3A\u4ECE\u7B2C\u4E8C\u4E2A\u5F00\u59CB\uFF0C<code>steps(n,end)</code> \u4ECE\u7B2C\u4E00\u4E2A\u5F00\u59CB</p><h3 id="step-start" tabindex="-1"><a class="header-anchor" href="#step-start" aria-hidden="true">#</a> step-start</h3><p><code>step-start</code> \u6548\u679C\u7B49\u4E8E <code>steps(1,start)</code> ,<code>step-end</code> \u6548\u679C\u7B49\u540C\u4E8E <code>steps(1,end)</code></p><h2 id="animation-play-state" tabindex="-1"><a class="header-anchor" href="#animation-play-state" aria-hidden="true">#</a> animation-play-state</h2><p>\u4F7F\u7528 <code>animation-play-state</code> \u53EF\u4EE5\u63A7\u5236\u52A8\u753B\u7684\u6682\u505C\u4E0E\u8FD0\u884C</p><table><thead><tr><th>\u9009\u9879</th><th>\u8BF4\u660E</th></tr></thead><tbody><tr><td>paused</td><td>\u6682\u505C</td></tr><tr><td>running</td><td>\u8FD0\u884C</td></tr></tbody></table><h2 id="animation-fill-mode" tabindex="-1"><a class="header-anchor" href="#animation-fill-mode" aria-hidden="true">#</a> animation-fill-mode</h2><p><code>animation-fill-mode</code> \u7528\u4E8E\u5B9A\u4E49\u52A8\u753B\u64AD\u653E\u7ED3\u675F\u540E\u7684\u5904\u7406\u6A21\u5F0F\uFF0C\u662F\u56DE\u5230\u539F\u6765\u72B6\u6001\u8FD8\u662F\u505C\u6B62\u5728\u52A8\u753B\u7ED3\u675F\u72B6\u6001</p><table><thead><tr><th>\u9009\u9879</th><th>\u8BF4\u660E</th></tr></thead><tbody><tr><td>none</td><td>\u9700\u8981\u7B49\u5EF6\u8FDF\u7ED3\u675F\uFF0C\u8D77\u59CB\u5E27\u5C5E\u6027\u624D\u5E94\u7528</td></tr><tr><td>backwards</td><td>\u52A8\u753B\u6548\u679C\u5728\u8D77\u59CB\u5E27\uFF0C\u4E0D\u7B49\u5EF6\u8FDF\u7ED3\u675F</td></tr><tr><td>forwards</td><td>\u7ED3\u675F\u540E\u505C\u7559\u52A8\u753B\u7684\u6700\u540E\u4E00\u5E27</td></tr><tr><td>both</td><td>\u5305\u542B backwards \u4E0E forwards \u89C4\u5219\uFF0C\u5373\u52A8\u753B\u6548\u679C\u5728\u8D77\u59CB\u5E27\uFF0C\u4E0D\u7B49\u5EF6\u8FDF\u7ED3\u675F\uFF0C\u5E76\u4E14\u5728\u7ED3\u675F\u540E\u505C\u6B62\u5728\u6700\u540E\u4E00\u5E27</td></tr></tbody></table><h2 id="\u7EC4\u5408\u5B9A\u4E49" tabindex="-1"><a class="header-anchor" href="#\u7EC4\u5408\u5B9A\u4E49" aria-hidden="true">#</a> \u7EC4\u5408\u5B9A\u4E49</h2><p>\u548C CSS \u4E2D\u7684\u5176\u4ED6\u5C5E\u6027\u4E00\u6837\uFF0C\u53EF\u4EE5\u4F7F\u7528<code>animation</code>\u7EC4\u5408\u5B9A\u4E49\u5E27\u52A8\u753B\u3002animation \u5C5E\u6027\u662F\u4E00\u4E2A\u7B80\u5199\u5C5E\u6027\uFF0C\u7528\u4E8E\u8BBE\u7F6E\u516D\u4E2A\u52A8\u753B\u5C5E\u6027\uFF1A</p><ul><li>animation-name</li><li>animation-duration</li><li>animation-timing-function</li><li>animation-delay</li><li>animation-iteration-count</li><li>animation-direction</li></ul><p>\u5FC5\u987B\u5B58\u5728 <code>animation-duration</code>\u5C5E\u6027\uFF0C\u5426\u5219\u8FC7\u6E21\u65F6\u95F4\u4E3A 0 \u6CA1\u6709\u52A8\u753B\u6548\u679C</p>',17);function S(i,C){const e=r("ExternalLinkIcon");return o(),c("div",null,[p,n("p",null,[u,n("a",h,[m,s(e)]),b]),k,n("p",null,[f,v,y,n("a",_,[x,s(e)]),g]),n("img",{src:i.$withBase("/images/flex/05.png"),alt:"foo"},null,8,w),z])}var N=d(l,[["render",S],["__file","keyframes.html.vue"]]);export{N as default};
