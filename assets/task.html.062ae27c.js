import{_ as a,o as t,c as p,b as o,a as n}from"./app.39db3157.js";const e={},c=n(`<h1 id="\u4EFB\u52A1\u7BA1\u7406" tabindex="-1"><a class="header-anchor" href="#\u4EFB\u52A1\u7BA1\u7406" aria-hidden="true">#</a> \u4EFB\u52A1\u7BA1\u7406</h1><p>JavaScript \u8BED\u8A00\u7684\u4E00\u5927\u7279\u70B9\u5C31\u662F\u5355\u7EBF\u7A0B\uFF0C\u4E5F\u5C31\u662F\u8BF4\u540C\u4E00\u4E2A\u65F6\u95F4\u53EA\u80FD\u5904\u7406\u4E00\u4E2A\u4EFB\u52A1\u3002\u4E3A\u4E86\u534F\u8C03\u4E8B\u4EF6\u3001\u7528\u6237\u4EA4\u4E92\u3001\u811A\u672C\u3001UI \u6E32\u67D3\u548C\u7F51\u7EDC\u5904\u7406\u7B49\u884C\u4E3A\uFF0C\u9632\u6B62\u4E3B\u7EBF\u7A0B\u7684\u4E0D\u963B\u585E\uFF0C\uFF08\u4E8B\u4EF6\u5FAA\u73AF\uFF09Event Loop \u7684\u65B9\u6848\u5E94\u7528\u800C\u751F</p><p><strong>JavaScript \u5904\u7406\u4EFB\u52A1\u662F\u5728\u7B49\u5F85\u4EFB\u52A1\u3001\u6267\u884C\u4EFB\u52A1 \u3001\u4F11\u7720\u7B49\u5F85\u65B0\u4EFB\u52A1\u4E2D\u4E0D\u65AD\u5FAA\u73AF\u4E2D\uFF0C\u4E5F\u79F0\u8FD9\u79CD\u673A\u5236\u4E3A\u4E8B\u4EF6\u5FAA\u73AF</strong></p><ul><li>\u4E3B\u7EBF\u7A0B\u4E2D\u7684\u4EFB\u52A1\u6267\u884C\u5B8C\u540E\uFF0C\u624D\u6267\u884C\u4EFB\u52A1\u4EFB\u52A1\u961F\u5217\u4E2D\u7684\u4EFB\u52A1</li><li>\u6709\u65B0\u4EFB\u52A1\u5230\u6765\u65F6\u4F1A\u5C06\u5176\u653E\u5165\u961F\u5217\uFF0C\u91C7\u53D6\u5148\u8FDB\u5148\u6267\u884C\u7684\u7B56\u7565\u6267\u884C\u961F\u5217\u4E2D\u7684\u4EFB\u52A1</li><li>\u6BD4\u5982\u591A\u4E2A<code>setTimeout</code>\u540C\u65F6\u5230\u65F6\u95F4\u4E86\u5C31\u4E00\u6B21\u6267\u884C</li></ul><p>\u4EFB\u52A1\u5305\u62EC script(\u6574\u4F53\u4EE3\u7801)\u3001 setTimeout\u3001setInterval\u3001DOM \u6E32\u67D3\u3001DOM \u4E8B\u4EF6\u3001Promise\u3001XMLHTTPREQUEST \u7B49</p><h3 id="\u539F\u7406\u5206\u6790" tabindex="-1"><a class="header-anchor" href="#\u539F\u7406\u5206\u6790" aria-hidden="true">#</a> \u539F\u7406\u5206\u6790</h3><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&quot;\u5F20\u4E09&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token function">setTimeout</span><span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&quot;\u5B9A\u65F6\u5668&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
Promise<span class="token punctuation">.</span><span class="token function">resolve</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&quot;promise1&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&quot;promise2&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&quot;\u674E\u56DB&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
#\u8F93\u51FA\u7ED3\u679C\u4E3A
\u5F20\u4E09
\u674E\u56DB
promise1
promise2
\u5B9A\u65F6\u5668
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol><li><p>\u5148\u6267\u884C\u6700\u524D\u9762\u7684<code>\u5B8F\u4EFB\u52A1script</code>\u7136\u540E\u8F93\u51FA</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>script start
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li><li><p>\u7136\u540E\u6267\u884C\u5230<code>setTimeout</code>\u5F02\u6B65\u5B8F\u4EFB\u52A1\uFF0C\u5E76\u5C06\u5176\u653E\u5165\u5B8F\u4EFB\u52A1\u961F\u5217\uFF0C\u7B49\u5F85\u6267\u884C</p></li><li><p>\u4E4B\u540E\u6267\u884C\u5230<code>Promise.then</code>\u5FAE\u4EFB\u52A1\uFF0C\u5E76\u5C06\u5176\u653E\u5165\u5230\u5FAE\u4EFB\u52A1\u961F\u5217\uFF0C\u7B49\u5F85\u6267\u884C</p></li><li><p>\u7136\u540E\u6267\u884C\u5230\u8457\u4EE3\u7801\u8F93\u51FA</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>script end
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li><li><p>\u4E3B\u7EBF\u7A0B\u6240\u6709\u4EFB\u52A1\u5904\u7406\u5B8C\u6210</p></li><li><p>\u901A\u8FC7\u4E8B\u4EF6\u5FAA\u73AF\u904D\u5386\u5FAE\u4EFB\u52A1\u961F\u5217\uFF0C\u5C06\u521A\u624D\u653E\u5165\u7684<code>Promise.then</code>\u5FAE\u4EFB\u52A1\u8BFB\u53D6\u5230\u4E3B\u7EBF\u7A0B\u6267\u884C\uFF0C\u7136\u540E\u8F93\u51FA</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>promise1
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li><li><p>\u4E4B\u540E\u6709\u6267\u884C<code>promise.then</code>\u4EA7\u751F\u65B0\u7684\u5FAE\u4EFB\u52A1\uFF0C\u5E76\u653E\u5165\u5FAE\u4EFB\u52A1\u961F\u5217</p></li><li><p>\u4E3B\u7EBF\u7A0B\u4EFB\u52A1\u6267\u884C\u5B8C\u6BD5</p></li><li><p>\u73B0\u6B21\u4E8B\u4EF6\u5FAA\u73AF\u904D\u5386\u5FAE\u4EFB\u52A1\u961F\u5217\uFF0C\u8BFB\u53D6\u5230<code>promise2 </code>\u5FAE\u4EFB\u52A1\u653E\u5230\u4E3B\u7EBF\u7A0B\u6267\u884C\uFF0C\u7136\u540E\u8F93\u51FA</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>promise2
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li><li><p>\u4E3B\u7EBF\u7A0B\u4EFB\u52A1\u6267\u884C\u5B8C\u6BD5</p></li><li><p>\u6B64\u65F6\u5FAE\u4EFB\u52A1\u961F\u5217\u5DF2\u7ECF\u65E0\u4EFB\u52A1\uFF0C\u7136\u540E\u4ECE\u5B8F\u4EFB\u52A1\u961F\u5217\u4E2D\u8BFB\u53D6\u5230<code>setTimeout </code>\u4EFB\u52A1\u997C\u52A0\u5165\u4E3B\u7EBF\u7A0B\uFF0C\u7136\u540E\u8F93\u51FA</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>setTimeout
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li></ol>`,8),u=["src"],i=n(`<p><strong>\u4E3B\u7EBF\u7A0B==&gt;\u5FAE\u4EFB\u52A1==&gt;\u5B8F\u4EFB\u52A1</strong></p><h3 id="\u811A\u672C\u52A0\u8F7D" tabindex="-1"><a class="header-anchor" href="#\u811A\u672C\u52A0\u8F7D" aria-hidden="true">#</a> \u811A\u672C\u52A0\u8F7D</h3><p>\u5F15\u64CE\u5728\u6267\u884C\u4EFB\u52A1\u65F6\u4E0D\u4F1A\u8FDB\u884C DOM \u6E32\u67D3\uFF0C\u6240\u4EE5\u5982\u679C\u628A<code>script</code> \u5B9A\u4E49\u5728\u524D\u9762\uFF0C\u8981\u5148\u6267\u884C\u5B8C\u4EFB\u52A1\u540E\u518D\u6E32\u67D3 DOM\uFF0C\u5EFA\u8BAE\u5C06<code>script</code> \u653E\u5728 BODY \u7ED3\u675F\u6807\u7B7E\u524D</p><h3 id="\u5B9A\u65F6\u5668" tabindex="-1"><a class="header-anchor" href="#\u5B9A\u65F6\u5668" aria-hidden="true">#</a> \u5B9A\u65F6\u5668</h3><p>\u5B9A\u65F6\u5668\u4F1A\u653E\u5165\u5F02\u6B65\u4EFB\u52A1\u961F\u5217\uFF0C\u4E5F\u9700\u8981\u7B49\u5F85\u540C\u6B65\u4EFB\u52A1\u6267\u884C\u5B8C\u6210\u540E\u6267\u884C</p><p>\u4E0B\u9762\u8BBE\u7F6E\u4E86 6 \u6BEB\u79D2\u6267\u884C\uFF0C\u5982\u679C\u4E3B\u7EBF\u7A0B\u4EE3\u7801\u6267\u884C 10 \u6BEB\u79D2\uFF0C\u5B9A\u65F6\u5668\u8981\u7B49\u4E3B\u7EBF\u7A0B\u6267\u884C\u5B8C\u624D\u6267\u884C</p><p>HTML \u6807\u51C6\u89C4\u5B9A\u6700\u5C0F\u65F6\u95F4\u4E0D\u80FD\u4F4E\u4E8E 4 \u6BEB\u79D2\uFF0C\u6709\u4E9B\u5F02\u6B65\u64CD\u4F5C\u5982 DOM \u64CD\u4F5C\u6700\u4F4E\u662F 16 \u6BEB\u79D2\uFF0C\u603B\u4E4B\u628A\u65F6\u95F4\u8BBE\u7F6E\u5927\u4E9B\u5BF9\u6027\u80FD\u66F4\u597D</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token function">setTimeout</span><span class="token punctuation">(</span>func<span class="token punctuation">,</span><span class="token number">6</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>\u4E0B\u9762\u7684\u4EE3\u7801\u4F1A\u5148\u8F93\u51FA \u674E\u56DB \u4E4B\u540E\u8F93\u51FA \u5F20\u4E09</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token function">setTimeout</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&quot;\u5F20\u4E09&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&quot;\u674E\u56DB&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="\u5FAE\u4EFB\u52A1" tabindex="-1"><a class="header-anchor" href="#\u5FAE\u4EFB\u52A1" aria-hidden="true">#</a> \u5FAE\u4EFB\u52A1</h3><p>\u5FAE\u4EFB\u52A1\u4E00\u822C\u7531\u7528\u6237\u4EE3\u7801\u4EA7\u751F\uFF0C\u5FAE\u4EFB\u52A1\u8F83\u5B8F\u4EFB\u52A1\u6267\u884C\u4F18\u5148\u7EA7\u66F4\u9AD8\uFF0C<code>Promise.then</code> \u662F\u5178\u578B\u7684\u5FAE\u4EFB\u52A1\uFF0C\u5B9E\u4F8B\u5316 Promise \u65F6\u6267\u884C\u7684\u4EE3\u7801\u662F\u540C\u6B65\u7684\uFF0C\u4FBF then \u6CE8\u518C\u7684\u56DE\u8C03\u51FD\u6570\u662F\u5F02\u6B65\u5FAE\u4EFB\u52A1\u7684</p><p><strong>\u4EFB\u52A1\u7684\u6267\u884C\u987A\u5E8F\u662F\u540C\u6B65\u4EFB\u52A1\u3001\u5FAE\u4EFB\u52A1\u3001\u5B8F\u4EFB\u52A1</strong></p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token comment">//\u6267\u884C\u7ED3\u679C\u662F 1\u30012\u30013\u30014</span>
<span class="token function">setTimeout</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token number">4</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">new</span> <span class="token class-name">Promise</span><span class="token punctuation">(</span><span class="token parameter">resolve</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    <span class="token function">resolve</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token parameter">_</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token number">3</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u4E0B\u9762\u4EE3\u7801\u6267\u884C\u987A\u5E8F\uFF1APromise =&gt;\u5F20\u4E09=&gt;then=&gt;\u5B9A\u65F6\u5668=&gt;settimeout Promise=&gt;settimeout then=&gt;timeout timeout</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token function">setTimeout</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&quot;\u5B9A\u65F6\u5668&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token function">setTimeout</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
        console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&quot;timeout timeout&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">new</span> <span class="token class-name">Promise</span><span class="token punctuation">(</span><span class="token parameter">resolve</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
        console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&quot;settimeout Promise&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token function">resolve</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
        console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&quot;settimeout then&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">new</span> <span class="token class-name">Promise</span><span class="token punctuation">(</span><span class="token parameter">resolve</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&quot;Promise&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token function">resolve</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&quot;then&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&quot;\u5F20\u4E09&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u4EFB\u52A1\u5206\u89E3" tabindex="-1"><a class="header-anchor" href="#\u4EFB\u52A1\u5206\u89E3" aria-hidden="true">#</a> \u4EFB\u52A1\u5206\u89E3</h2><p>\u4E00\u4E2A\u6BD4\u8F83\u8017\u65F6\u7684\u4EFB\u52A1\u53EF\u80FD\u9020\u6210\u6E38\u89C8\u5668\u5361\u6B7B\u73B0\u8C61\uFF0C\u6240\u4EE5\u53EF\u4EE5\u5C06\u4EFB\u52A1\u62C6\u5206\u4E3A\u591A\u5C0F\u5C0F\u5F02\u6B65\u5C0F\u4EFB\u52A1\u6267\u884C\u3002\u4E0B\u9762\u662F\u4E00\u4E2A\u6570\u5B57\u7EDF\u8BA1\u7684\u51FD\u6570\uFF0C\u6211\u4EEC\u4F1A\u53D1\u73B0\u8FD0\u884C\u65F6\u95F4\u7279\u522B\u957F</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>console<span class="token punctuation">.</span><span class="token function">time</span><span class="token punctuation">(</span><span class="token string">&quot;runtime&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">function</span> <span class="token function">func</span><span class="token punctuation">(</span><span class="token parameter">num</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">let</span> count <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
    <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;=</span> num<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        count <span class="token operator">+=</span> i<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>count<span class="token punctuation">)</span><span class="token punctuation">;</span>
    console<span class="token punctuation">.</span><span class="token function">timeEnd</span><span class="token punctuation">(</span><span class="token string">&quot;runtime&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token keyword">let</span> num<span class="token operator">=</span><span class="token number">987654321</span><span class="token punctuation">;</span>
<span class="token function">func</span><span class="token punctuation">(</span>num<span class="token punctuation">)</span><span class="token punctuation">;</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&quot;\u5F20\u4E09&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//\u9700\u8981\u7B49\u5F85\u4E0A\u9762\u6267\u884C\u5B8C\u624D\u4F1A\u6267\u884C</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u73B0\u5728\u628A\u4EFB\u52A1\u5206\u89E3\u6210\u5C0F\u5757\u653E\u5165\u4EFB\u52A1\u961F\u5217\uFF0C\u6E38\u89C8\u5668\u5C31\u4E0D\u4F1A\u51FA\u73B0\u5361\u6B7B\u7684\u73B0\u8C61\u4E86\uFF0C\u4E5F\u4E0D\u4F1A\u5F71\u54CD\u540E\u7EED\u4EE3\u7801\u7684\u6267\u884C</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>console<span class="token punctuation">.</span><span class="token function">time</span><span class="token punctuation">(</span><span class="token string">&quot;runtime&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">let</span> count <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
<span class="token keyword">let</span> num <span class="token operator">=</span> <span class="token number">987654321</span><span class="token punctuation">;</span>
<span class="token keyword">function</span> <span class="token function">func</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> <span class="token number">100000000</span><span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>num <span class="token operator">&lt;=</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token keyword">break</span><span class="token punctuation">;</span>
        count <span class="token operator">+=</span> num<span class="token operator">--</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>num <span class="token operator">&gt;</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>num<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token function">setTimeout</span><span class="token punctuation">(</span>func<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
        console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>num<span class="token punctuation">)</span><span class="token punctuation">;</span>
        console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>count<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
<span class="token function">func</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&quot;\u5F20\u4E09&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//\u7ACB\u523B\u663E\u793A\u51FA\u6765</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u4EA4\u7ED9\u5FAE\u4EFB\u52A1\u5904\u7406\u662F\u66F4\u597D\u7684\u9009\u62E9</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">async</span> <span class="token keyword">function</span> <span class="token function">func</span><span class="token punctuation">(</span><span class="token parameter">num</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">let</span> res <span class="token operator">=</span> <span class="token keyword">await</span> Promise<span class="token punctuation">.</span><span class="token function">resolve</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token parameter">_</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
        <span class="token keyword">let</span> count <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
        <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> num<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            count <span class="token operator">+=</span> num<span class="token operator">--</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token keyword">return</span> count<span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>res<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token function">func</span><span class="token punctuation">(</span><span class="token number">987654321</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&quot;\u5F20\u4E09&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,23);function l(s,k){return t(),p("div",null,[c,o("img",{src:s.$withBase("/images/proto/06.png"),alt:"foo"},null,8,u),i])}var d=a(e,[["render",l],["__file","task.html.vue"]]);export{d as default};
