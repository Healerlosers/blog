import{_ as n,o as s,c as a,a as e}from"./app.39db3157.js";const t={},p=e(`<h1 id="\u8FD0\u7B97\u7B26\u4E0E\u6D41\u7A0B\u63A7\u5236" tabindex="-1"><a class="header-anchor" href="#\u8FD0\u7B97\u7B26\u4E0E\u6D41\u7A0B\u63A7\u5236" aria-hidden="true">#</a> \u8FD0\u7B97\u7B26\u4E0E\u6D41\u7A0B\u63A7\u5236</h1><h2 id="" tabindex="-1"><a class="header-anchor" href="#" aria-hidden="true">#</a></h2><h2 id="\u8D4B\u503C\u8FD0\u7B97\u7B26" tabindex="-1"><a class="header-anchor" href="#\u8D4B\u503C\u8FD0\u7B97\u7B26" aria-hidden="true">#</a> \u8D4B\u503C\u8FD0\u7B97\u7B26</h2><p>\u4F7F\u7528 <code>=</code> \u8FDB\u884C\u53D8\u91CF\u8D4B\u503C</p><h2 id="\u7B97\u672F\u8FD0\u7B97\u7B26" tabindex="-1"><a class="header-anchor" href="#\u7B97\u672F\u8FD0\u7B97\u7B26" aria-hidden="true">#</a> \u7B97\u672F\u8FD0\u7B97\u7B26</h2><table><thead><tr><th>\u8FD0\u7B97\u7B26</th><th>\u8BF4\u660E</th></tr></thead><tbody><tr><td>*</td><td>\u4E58\u6CD5</td></tr><tr><td>/</td><td>\u9664\u6CD5</td></tr><tr><td>+</td><td>\u52A0\u6CD5</td></tr><tr><td>-</td><td>\u51CF\u6CD5</td></tr><tr><td>%</td><td>\u53D6\u4F59\u6570</td></tr></tbody></table><h2 id="\u590D\u5408\u8FD0\u7B97\u7B26" tabindex="-1"><a class="header-anchor" href="#\u590D\u5408\u8FD0\u7B97\u7B26" aria-hidden="true">#</a> \u590D\u5408\u8FD0\u7B97\u7B26</h2><p>\u53EF\u4EE5\u4F7F\u7528 <code>*=\u3001/=\u3001+=\u3001-=\u3001%=</code> \u7B80\u5199\u7B97\u672F\u8FD0\u7B97\u3002\u5373 <code>n*=2</code> \u7B49\u540C\u4E8E <code>n=n*2</code></p><p><code>n+=3</code> \u662F <code>n=n+3</code> \u7684\u7B80\u5199\u5F62\u5F0F</p><h2 id="\u4E00\u5143\u8FD0\u7B97\u7B26" tabindex="-1"><a class="header-anchor" href="#\u4E00\u5143\u8FD0\u7B97\u7B26" aria-hidden="true">#</a> \u4E00\u5143\u8FD0\u7B97\u7B26</h2><h3 id="\u524D\u7F6E\u64CD\u4F5C" tabindex="-1"><a class="header-anchor" href="#\u524D\u7F6E\u64CD\u4F5C" aria-hidden="true">#</a> \u524D\u7F6E\u64CD\u4F5C</h3><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token comment">//\u524D\u7F6E\u64CD\u4F5C\u4F1A\u5728\u8868\u8FBE\u5F0F\u6700\u5148\u6267\u884C,++n \u5C31\u662F n=n+1 \u7684\u7B80\u5199\u5F62\u5F0F</span>
<span class="token keyword">let</span> n <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span>
<span class="token operator">++</span>n
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>n<span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token comment">//2</span>
<span class="token operator">--</span>n
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>n<span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token comment">//1</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>\u4F7F\u7528\u524D\u7F6E\u64CD\u4F5C\u7B26\uFF0C<code>++n</code> \u4F1A\u5728\u6700\u5148\u6267\u884C\uFF0C\u6240\u4EE5 f \u7684\u7ED3\u679C\u662F 4</strong></p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">let</span> n <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span>
<span class="token keyword">let</span> f <span class="token operator">=</span> <span class="token number">2</span> <span class="token operator">+</span> <span class="token operator">++</span>n<span class="token punctuation">;</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>f<span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token comment">//4</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="\u540E\u7F6E\u64CD\u4F5C" tabindex="-1"><a class="header-anchor" href="#\u540E\u7F6E\u64CD\u4F5C" aria-hidden="true">#</a> \u540E\u7F6E\u64CD\u4F5C</h3><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token comment">//\u540E\u7F6E\u64CD\u4F5C\u4F1A\u5728\u8868\u8FBE\u5F0F\u6700\u540E\u6267\u884C</span>
<span class="token keyword">let</span> n <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span>
n<span class="token operator">++</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>n<span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token comment">//2</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>\u4F7F\u7528\u540E\u7F6E\u64CD\u4F5C\u7B26\uFF0C<code>n++</code> \u4F1A\u5728\u6700\u540E\u6267\u884C\uFF0C\u6240\u4EE5 f \u7684\u7ED3\u679C\u662F 3</strong></p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">let</span> n <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span>
<span class="token keyword">let</span> f <span class="token operator">=</span> <span class="token number">2</span> <span class="token operator">+</span> n<span class="token operator">++</span><span class="token punctuation">;</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>f<span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token comment">//3</span>

<span class="token comment">//\u8BA1\u7B97</span>
<span class="token keyword">let</span> a <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span>
b <span class="token operator">=</span> a<span class="token operator">++</span> <span class="token operator">+</span> <span class="token number">2</span><span class="token punctuation">;</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>b<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//3</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u6BD4\u8F83\u8FD0\u7B97\u7B26" tabindex="-1"><a class="header-anchor" href="#\u6BD4\u8F83\u8FD0\u7B97\u7B26" aria-hidden="true">#</a> \u6BD4\u8F83\u8FD0\u7B97\u7B26</h2><table><thead><tr><th>\u8FD0\u7B97\u7B26</th><th>\u8BF4\u660E</th></tr></thead><tbody><tr><td>&gt;</td><td>\u5927\u4E8E</td></tr><tr><td>&lt;</td><td>\u5C0F\u4E8E</td></tr><tr><td>&gt;=</td><td>\u5927\u4E8E\u6216\u7B49\u4E8E</td></tr><tr><td>&lt;=</td><td>\u5C0F\u4E8E\u7B49\u4E8E</td></tr><tr><td>==</td><td>\u5F3A\u5236\u7C7B\u578B\u8F6C\u6362\u6BD4\u8F83</td></tr><tr><td>===</td><td>\u4E0D\u5F3A\u5236\u7C7B\u578B\u8F6C\u6362\u6BD4\u8F83</td></tr></tbody></table><h2 id="\u903B\u8F91\u8FD0\u7B97\u7B26" tabindex="-1"><a class="header-anchor" href="#\u903B\u8F91\u8FD0\u7B97\u7B26" aria-hidden="true">#</a> \u903B\u8F91\u8FD0\u7B97\u7B26</h2><h3 id="\u903B\u8F91\u4E0E" tabindex="-1"><a class="header-anchor" href="#\u903B\u8F91\u4E0E" aria-hidden="true">#</a> \u903B\u8F91\u4E0E</h3><p>\u4F7F\u7528 <code>&amp;&amp;</code> \u7B26\u53F7\u8868\u793A\u903B\u8F91\u4E0E\uFF0C\u6307\u7B26\u53F7\u4E24\u7AEF\u90FD\u4E3A true \u65F6\u8868\u8FBE\u5F0F\u7ED3\u679C\u4E3A true</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">let</span> a <span class="token operator">=</span> <span class="token boolean">true</span><span class="token punctuation">,</span>b <span class="token operator">=</span> <span class="token boolean">true</span><span class="token punctuation">;</span>
<span class="token keyword">if</span> <span class="token punctuation">(</span>a <span class="token operator">&amp;&amp;</span> b<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;\u8868\u8FBE\u5F0F\u6210\u7ACB&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="\u903B\u8F91\u6216" tabindex="-1"><a class="header-anchor" href="#\u903B\u8F91\u6216" aria-hidden="true">#</a> \u903B\u8F91\u6216</h3><p>\u4F7F\u7528 <code>||</code> \u7B26\u53F7\u8868\u793A\u903B\u8F91\u6216\uFF0C\u6307\u7B26\u53F7\u5DE6\u53F3\u4E24\u7AEF\u6709\u4E00\u65B9\u4E3A true\uFF0C\u8868\u8FBE\u5F0F\u5373\u6210\u7ACB</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">let</span> a <span class="token operator">=</span> <span class="token boolean">true</span><span class="token punctuation">,</span>b <span class="token operator">=</span> <span class="token boolean">false</span><span class="token punctuation">;</span>
<span class="token keyword">if</span> <span class="token punctuation">(</span>a <span class="token operator">||</span> b<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;\u8868\u8FBE\u5F0F\u6210\u7ACB&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="\u903B\u8F91\u975E" tabindex="-1"><a class="header-anchor" href="#\u903B\u8F91\u975E" aria-hidden="true">#</a> \u903B\u8F91\u975E</h3><p>\u4F7F\u7528 <code>!</code> \u7B26\u53F7\u8868\u793A\u903B\u8F91\u975E\uFF0C\u5373\u539F\u6765\u662F true \u8F6C\u53D8\u4E3A false\uFF0C\u53CD\u4E4B\u4EA6\u7136</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">let</span> a <span class="token operator">=</span> <span class="token boolean">true</span><span class="token punctuation">,</span>b <span class="token operator">=</span> <span class="token boolean">false</span><span class="token punctuation">;</span>
<span class="token keyword">if</span> <span class="token punctuation">(</span>a <span class="token operator">&amp;&amp;</span> <span class="token operator">!</span>b<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;\u8868\u8FBE\u5F0F\u6210\u7ACB&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="\u4F18\u5148\u7EA7" tabindex="-1"><a class="header-anchor" href="#\u4F18\u5148\u7EA7" aria-hidden="true">#</a> \u4F18\u5148\u7EA7</h3><p>\u4E0B\u5217\u4E2D\u56E0\u4E3A <code>&amp;&amp;</code> \u7684\u4F18\u5148\u7EA7\u9AD8\u6240\u4EE5\u7ED3\u679C\u662F <code>true</code>\uFF0C\u53EF\u4EE5\u4F7F\u7528 <code>()</code> \u6765\u63D0\u9AD8\u4F18\u5148\u7EA7</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token boolean">true</span> <span class="token operator">||</span> <span class="token boolean">false</span> <span class="token operator">&amp;&amp;</span> <span class="token boolean">false</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="\u77ED\u8DEF\u8FD0\u7B97" tabindex="-1"><a class="header-anchor" href="#\u77ED\u8DEF\u8FD0\u7B97" aria-hidden="true">#</a> \u77ED\u8DEF\u8FD0\u7B97</h3><p>\u4E0B\u4F8B\u4E2D <code>a</code> \u4E3A\u771F\u503C\uFF0C\u5C31\u5DF2\u7ECF\u77E5\u9053\u7ED3\u679C\u4E86\u5C31\u4E0D\u4F1A\u518D\u5224\u65AD <code>f</code> \u7684\u503C\u4E86</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">let</span> a <span class="token operator">=</span> <span class="token boolean">true</span><span class="token punctuation">,</span>f <span class="token operator">=</span> <span class="token boolean">false</span><span class="token punctuation">;</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>a <span class="token operator">||</span> f<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>\u540C\u7406\u5F53 <code>f</code> \u503C\u4E3A\u5047\u65F6\uFF0C\u5C31\u5DF2\u7ECF\u53EF\u4EE5\u5224\u65AD <code>&amp;&amp;</code> \u7684\u7ED3\u679C\u4E86\uFF0C\u5C31\u6CA1\u6709\u5224\u65AD <code>a</code>\u7684\u5FC5\u8981\u4E86</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">let</span> a <span class="token operator">=</span> <span class="token boolean">true</span><span class="token punctuation">,</span>f <span class="token operator">=</span> <span class="token boolean">false</span><span class="token punctuation">;</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>f <span class="token operator">&amp;&amp;</span> a<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>\u4F7F\u7528\u77ED\u8DEF\u7279\u6027\u8D4B\u503C</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">let</span> sex <span class="token operator">=</span> <span class="token function">prompt</span><span class="token punctuation">(</span><span class="token string">&quot;\u4F60\u7684\u6027\u522B\u662F\uFF1F&quot;</span><span class="token punctuation">)</span> <span class="token operator">||</span> <span class="token string">&quot;\u4FDD\u5BC6&quot;</span><span class="token punctuation">;</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>sex<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="if" tabindex="-1"><a class="header-anchor" href="#if" aria-hidden="true">#</a> if</h2><p>\u5F53\u6761\u4EF6\u4E3A\u771F\u65F6\u6267\u884C\u8868\u8FBE\u5F0F\u4EE3\u7801\u5757</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">let</span> state <span class="token operator">=</span> <span class="token boolean">true</span><span class="token punctuation">;</span>
<span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token boolean">true</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;\u8868\u8FBE\u5F0F\u6210\u7ACB&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="if-else" tabindex="-1"><a class="header-anchor" href="#if-else" aria-hidden="true">#</a> if/else</h2><h2 id="\u4E09\u5143\u8868\u8FBE\u5F0F" tabindex="-1"><a class="header-anchor" href="#\u4E09\u5143\u8868\u8FBE\u5F0F" aria-hidden="true">#</a> \u4E09\u5143\u8868\u8FBE\u5F0F</h2><p>\u662F\u9488\u5BF9 <code>if</code> \u5224\u65AD\u7684\u7B80\u5199\u5F62\u5F0F</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">let</span> f <span class="token operator">=</span> <span class="token boolean">true</span> <span class="token operator">?</span> <span class="token punctuation">(</span><span class="token number">1</span> <span class="token operator">==</span> <span class="token boolean">true</span> <span class="token operator">?</span> <span class="token string">&#39;yes&#39;</span> <span class="token operator">:</span> <span class="token string">&#39;no&#39;</span><span class="token punctuation">)</span> <span class="token operator">:</span> <span class="token number">3</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="switch" tabindex="-1"><a class="header-anchor" href="#switch" aria-hidden="true">#</a> switch</h2><p>\u53EF\u4EE5\u5C06 <code>switch</code> \u7406\u89E3\u4E3A <code>if</code> \u7684\u53E6\u4E00\u79CD\u7ED3\u6784\u6E05\u6670\u7684\u5199\u6CD5\u3002</p><ul><li>\u5982\u679C\u8868\u8FBE\u5F0F\u7B49\u4E8E <code>case</code> \u4E2D\u7684\u503C\uFF0C\u5C06\u6267\u884C\u6B64 <code>case</code> \u4EE3\u7801\u6BB5</li><li><code>break</code> \u5173\u952E\u5B57\u4F1A\u7EC8\u6B62 <code>switch</code> \u7684\u6267\u884C</li><li>\u6CA1\u6709\u4EFB\u4F55 <code>case</code>\u5339\u914D\u65F6\u5C06\u6267\u884C<code>default</code> \u4EE3\u7801\u5757</li><li>\u5982\u679C<code>case</code>\u6267\u884C\u540E\u7F3A\u5C11 break \u5219\u63A5\u7740\u6267\u884C\u540E\u9762\u7684\u8BED\u53E5</li></ul><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">message</span><span class="token punctuation">(</span><span class="token parameter">age</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">switch</span> <span class="token punctuation">(</span><span class="token boolean">true</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">case</span> age <span class="token operator">&lt;</span> <span class="token number">15</span><span class="token operator">:</span>
            console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&quot;\u513F\u7AE5&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token keyword">break</span><span class="token punctuation">;</span>
        <span class="token keyword">case</span> age <span class="token operator">&lt;</span> <span class="token number">25</span><span class="token operator">:</span>
            console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&quot;\u9752\u5C11\u5E74&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token keyword">break</span><span class="token punctuation">;</span>
        <span class="token keyword">case</span> age <span class="token operator">&lt;</span> <span class="token number">40</span><span class="token operator">:</span>
            console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&quot;\u9752\u5E74&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token keyword">break</span><span class="token punctuation">;</span>
        <span class="token keyword">case</span> age <span class="token operator">&lt;</span> <span class="token number">60</span><span class="token operator">:</span>
            console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&quot;\u4E2D\u5E74&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token keyword">break</span><span class="token punctuation">;</span>
        <span class="token keyword">case</span> age <span class="token operator">&lt;</span> <span class="token number">100</span><span class="token operator">:</span>
            console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&quot;\u8001\u5E74&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token keyword">break</span><span class="token punctuation">;</span>
        <span class="token keyword">default</span><span class="token operator">:</span>
            console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&quot;\u5E74\u9F84\u8F93\u51FA\u9519\u8BEF&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
<span class="token function">message</span><span class="token punctuation">(</span><span class="token number">10</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="custom-container warning"><p class="custom-container-title">WARNING</p><p>\u7F3A\u5C11 break \u540E\uFF0C\u4F1A\u63A5\u7740\u6267\u884C\u540E\u9762\u7684 switch \u4EE3\u7801</p></div><h2 id="while" tabindex="-1"><a class="header-anchor" href="#while" aria-hidden="true">#</a> while</h2><p>\u5FAA\u73AF\u6267\u884C\u8BED\u53E5\uFF0C\u9700\u8981<code>\u8BBE\u7F6E\u8DF3\u51FA\u5FAA\u73AF\u7684\u6761\u4EF6</code>\u5426\u5219\u4F1A\u9677\u5165\u6B7B\u5FAA\u73AF\u72B6\u6001</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">let</span> row <span class="token operator">=</span> <span class="token number">5</span><span class="token punctuation">;</span>
document<span class="token punctuation">.</span><span class="token function">write</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">&lt;table border=&quot;1&quot; width=&quot;100&quot;&gt;</span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">while</span> <span class="token punctuation">(</span>row<span class="token operator">--</span> <span class="token operator">!=</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    document<span class="token punctuation">.</span><span class="token function">write</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">&lt;tr&gt;&lt;td&gt;</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>row<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">&lt;/td&gt;&lt;/tr&gt;</span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
document<span class="token punctuation">.</span><span class="token function">write</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">&lt;/table&gt;</span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="do-while" tabindex="-1"><a class="header-anchor" href="#do-while" aria-hidden="true">#</a> do/while</h2><p>\u540E\u6761\u4EF6\u5224\u65AD\u8BED\u53E5\uFF0C\u65E0\u8BBA\u6761\u4EF6\u662F\u5426\u4E3A\u771F\u90FD\u4F1A\u5148\u8FDB\u884C\u5FAA\u73AF\u4F53</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">func</span><span class="token punctuation">(</span><span class="token parameter">row <span class="token operator">=</span> <span class="token number">5</span></span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">let</span> start <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
    <span class="token keyword">do</span> <span class="token punctuation">{</span>
        <span class="token keyword">let</span> n <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
        <span class="token keyword">do</span> <span class="token punctuation">{</span>
            document<span class="token punctuation">.</span><span class="token function">write</span><span class="token punctuation">(</span><span class="token string">&quot;*&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span> <span class="token keyword">while</span> <span class="token punctuation">(</span><span class="token operator">++</span>n <span class="token operator">&lt;=</span> start<span class="token punctuation">)</span><span class="token punctuation">;</span>
        document<span class="token punctuation">.</span><span class="token function">write</span><span class="token punctuation">(</span><span class="token string">&quot;&lt;br/&gt;&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span> <span class="token keyword">while</span> <span class="token punctuation">(</span><span class="token operator">++</span>start <span class="token operator">&lt;=</span> row<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token function">func</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="for" tabindex="-1"><a class="header-anchor" href="#for" aria-hidden="true">#</a> for</h2><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">10</span><span class="token punctuation">;</span> i <span class="token operator">&gt;</span> <span class="token number">0</span><span class="token punctuation">;</span> i<span class="token operator">--</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> n <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> n <span class="token operator">&lt;</span> i<span class="token punctuation">;</span> n<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        document<span class="token punctuation">.</span><span class="token function">write</span><span class="token punctuation">(</span><span class="token string">&#39;*&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    document<span class="token punctuation">.</span><span class="token function">write</span><span class="token punctuation">(</span><span class="token string">&quot;&lt;br/&gt;&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="break-continue" tabindex="-1"><a class="header-anchor" href="#break-continue" aria-hidden="true">#</a> break/continue</h2><p>break \u7528\u4E8E\u9000\u51FA\u5F53\u524D\u5FAA\u73AF\uFF0Ccontinue \u7528\u4E8E\u9000\u51FA\u5F53\u524D\u5FAA\u73AF\u8FD4\u56DE\u5FAA\u73AF\u8D77\u59CB\u7EE7\u7EED\u6267\u884C</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token comment">//\u83B7\u53D6\u6240\u6709\u5076\u6570\uFF0C\u6240\u6709\u5947\u6570\u4F7F\u7528 continue \u8DF3\u8FC7</span>
<span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span> i <span class="token operator">&lt;=</span> <span class="token number">10</span><span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>i <span class="token operator">%</span> <span class="token number">2</span><span class="token punctuation">)</span> <span class="token keyword">continue</span><span class="token punctuation">;</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>i<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">//\u83B7\u53D6\u4E09\u4E2A\u5947\u6570\uFF0C\u8D85\u8FC7\u65F6\u4F7F\u7528 break\u9000\u51FA\u5FAA\u73AF</span>
<span class="token keyword">let</span> count <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">,</span>num <span class="token operator">=</span> <span class="token number">3</span><span class="token punctuation">;</span>
<span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span> i <span class="token operator">&lt;=</span> <span class="token number">10</span><span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>i <span class="token operator">%</span> <span class="token number">2</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>i<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">++</span>count <span class="token operator">==</span> num<span class="token punctuation">)</span> <span class="token keyword">break</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="label" tabindex="-1"><a class="header-anchor" href="#label" aria-hidden="true">#</a> label</h2><div class="custom-container tip"><p class="custom-container-title">TIP</p><p>\u6807\u7B7E(label) \u4E3A\u7A0B\u5E8F\u5B9A\u4E49\u4F4D\u7F6E\uFF0C\u53EF\u4EE5\u4F7F\u7528<code>continue/break</code>\u8DF3\u5230\u8BE5\u4F4D\u7F6E</p></div><h2 id="for-in" tabindex="-1"><a class="header-anchor" href="#for-in" aria-hidden="true">#</a> for/in</h2><div class="custom-container tip"><p class="custom-container-title">TIP</p><p>\u7528\u4E8E\u904D\u5386\u5BF9\u8C61\u7684\u6240\u6709\u5C5E\u6027\uFF0C<code>for/in</code>\u4E3B\u8981\u7528\u4E8E\u904D\u5386\u5BF9\u8C61\uFF0C\u4E0D\u5EFA\u8BAE\u7528\u6765\u904D\u5386\u6570\u7EC4</p></div><h2 id="for-of" tabindex="-1"><a class="header-anchor" href="#for-of" aria-hidden="true">#</a> for/of</h2><div class="custom-container tip"><p class="custom-container-title">TIP</p><p>\u7528\u6765\u904D\u5386 Arrays\uFF08\u6570\u7EC4\uFF09, Strings\uFF08\u5B57\u7B26\u4E32\uFF09, Maps\uFF08\u6620\u5C04\uFF09, Sets\uFF08\u96C6\u5408\uFF09\u7B49\u53EF\u8FED\u4EE3\u7684\u6570\u636E\u7ED3\u6784</p><p>\u4E0E <code>for/in</code> \u4E0D\u540C\u7684\u662F <code>for/of</code> \u6BCF\u6B21\u5FAA\u73AF\u53D6\u5176\u4E2D\u7684\u503C\u800C\u4E0D\u662F\u7D22\u5F15</p></div>`,69),o=[p];function c(l,i){return s(),a("div",null,o)}var r=n(t,[["render",c],["__file","operator.html.vue"]]);export{r as default};
