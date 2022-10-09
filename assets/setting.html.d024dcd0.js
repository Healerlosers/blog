import{_ as t,o as n,c as d,b as a,e as r,a as i,d as e,r as l}from"./app.39db3157.js";const c={},o=i('<h1 id="\u73AF\u5883\u914D\u7F6E" tabindex="-1"><a class="header-anchor" href="#\u73AF\u5883\u914D\u7F6E" aria-hidden="true">#</a> \u73AF\u5883\u914D\u7F6E</h1><h2 id="\u4ECB\u7ECD" tabindex="-1"><a class="header-anchor" href="#\u4ECB\u7ECD" aria-hidden="true">#</a> \u4ECB\u7ECD</h2><p>typescript \u662F javascript \u7684\u4E00\u4E2A\u8D85\u96C6\uFF0Ctypescript \u53EF\u4EE5\u8FD0\u884C\u4E8E\u4EFB\u4F55\u7CFB\u7EDF\uFF0C\u5E76\u4E14\u662F\u5F00\u6E90\u514D\u8D39\u7684</p><p><strong>typescript \u7684\u7279\u70B9</strong></p><ul><li>typescript \u4F1A\u5728\u7F16\u8BD1\u65F6\u5BF9\u4EE3\u7801\u8FDB\u884C\u4E25\u683C\u7684\u9759\u6001\u7C7B\u578B\u68C0\u67E5\uFF0C\u53EF\u4EE5\u5728\u7F16\u7801\u9636\u6BB5\u5C31\u53D1\u73B0\u95EE\u9898\uFF0C\u800C\u4E0D\u662F\u5728\u4E0A\u7EBF\u8FD0\u884C\u65F6\u624D\u53D1\u73B0</li><li>typeScript \u8BED\u6CD5\u9075\u5FAA ES \u89C4\u8303\uFF0C\u66F4\u7EC6\u901F\u5EA6\u5FEB\uFF0C\u4E0D\u65AD\u652F\u6301\u6700\u65B0\u7684 ECMAScript \u65B0\u7279\u6027\uFF0C\u5982\u88C5\u9970\u5668\u3001public/private \u4FEE\u9970\u7B26</li><li>typescript \u652F\u6301 OOP\uFF08\u9762\u5411\u5BF9\u8C61\uFF09\u7684\u63A5\u53E3\uFF0C\u62BD\u8C61\u7C7B\uFF0C\u591A\u6001\u7279\u6027</li><li>typescript \u53EF\u4EE5\u4E3A IDE \u63D0\u4F9B\u66F4\u597D\u7684\u4EE3\u7801\u8865\u5168\u3001\u63A5\u53E3\u63D0\u793A\u3001\u8DF3\u8F6C\u5230\u5B9A\u4E49</li><li>\u8FD8\u6709\u91CD\u8981\u4E00\u70B9\u662F\u4F17\u591A\u79D1\u6280\u516C\u53F8\u5DF2\u7ECF\u91C7\u7528 typeScript \u8FDB\u884C\u5F00\u53D1\uFF0C\u4E5F\u662F\u524D\u7AEF\u5DE5\u7A0B\u5E08\u9700\u8981\u638C\u63E1\u7684\u5C31\u4E1A\u6280\u80FD</li></ul><h2 id="\u5B89\u88C5\u73AF\u5883" tabindex="-1"><a class="header-anchor" href="#\u5B89\u88C5\u73AF\u5883" aria-hidden="true">#</a> \u5B89\u88C5\u73AF\u5883</h2><h3 id="node" tabindex="-1"><a class="header-anchor" href="#node" aria-hidden="true">#</a> node</h3>',7),p=e("\u9996\u5148\u9700\u8981\u5B89\u88C5 "),u={href:"https://nodejs.org/en/",target:"_blank",rel:"noopener noreferrer"},v=e("node.js (opens new window)"),h=e("\u6211\u76F8\u4FE1\u505A\u524D\u7AEF\u7684\u90FD\u5DF2\u7ECF\u5B89\u88C5\u4E86"),m=i(`<h3 id="\u5168\u5C40\u5B89\u88C5-ts" tabindex="-1"><a class="header-anchor" href="#\u5168\u5C40\u5B89\u88C5-ts" aria-hidden="true">#</a> \u5168\u5C40\u5B89\u88C5 TS</h3><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>npm install <span class="token operator">-</span>g typescript
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>\u5982\u679C\u4F60\u4F7F\u7528\u7684\u662F mac \u7CFB\u7EDF\u4E5F\u53EF\u4EE5\u6267\u884C</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>brew install typescript
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>\u5982\u679C\u662F linux \u7CFB\u7EDF\u53EF\u4EE5\u901A\u8FC7\u76F8\u5E94\u7684\u8F6F\u4EF6\u7BA1\u7406\u547D\u4EE4\u5B89\u88C5\uFF0C\u6BD4\u5982\u4EE5\u4E0B\u662F manjaro \u7684\u5B89\u88C5\u793A\u4F8B</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>sudo pacman -Sy typescript
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>\u5B89\u88C5\u540E\u6267\u884C\u4EE5\u4E0B\u547D\u4EE4\u68C0\u67E5\u662F\u5426\u5B89\u88C5\u6210\u529F</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>tsc -v
\u5982\u679C\u663E\u793A\u4EE5\u4E0B\u5185\u5BB9\u5373\u8868\u793A\u5B89\u88C5\u6210\u529F
Version 4.7.4
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="\u9879\u76EE\u5B89\u88C5-ts" tabindex="-1"><a class="header-anchor" href="#\u9879\u76EE\u5B89\u88C5-ts" aria-hidden="true">#</a> \u9879\u76EE\u5B89\u88C5 TS</h3><p>\u9664\u4E86\u5168\u5C40\u5B89\u88C5\u5916\uFF0C\u4E5F\u53EF\u4EE5\u5728\u9879\u76EE\u4E2D\u72EC\u7ACB\u5B89\u88C5 typescript\uFF0C\u8FD9\u53EF\u4EE5\u9650\u5B9A\u9879\u76EE\u4F7F\u7528\u7684 typescript \u7248\u672C</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>yarn init -y
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>\u5B89\u88C5 typescript</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>yarn add -D typescript
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>\u67E5\u770B\u7248\u672C</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>yarn tsc -v
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="\u7F16\u8BD1-ts" tabindex="-1"><a class="header-anchor" href="#\u7F16\u8BD1-ts" aria-hidden="true">#</a> \u7F16\u8BD1 TS</h2><p>\u4F7F\u7528 tsc \u547D\u4EE4\u53EF\u4EE5\u5C06 ts \u6587\u4EF6\u7F16\u8BD1\u4E3A js \u6587\u4EF6\uFF0C\u5982\u679C\u5728\u7F16\u8BD1\u8FC7\u7A0B\u4E2D\u6709 ts \u9519\u8BEF\u5C06\u5728\u547D\u4EE4\u884C\u62A5\u51FA</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>tsc ts.ts //\u4F1A\u7F16\u8BD1\u751F\u6210 ts.js \u6587\u4EF6
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>\u6BCF\u6B21\u4FEE\u6539 ts \u6587\u4EF6\u540E\u518D\u6267\u884C\u547D\u4EE4\u7F16\u8BD1\u4F1A\u8FC7\u4E8E\u7E41\u7410\uFF0C\u53EF\u4EE5\u6267\u884C\u4EE5\u4E0B\u547D\u4EE4\u81EA\u52A8\u76D1\u542C ts \u6587\u4EF6\u5185\u5BB9\u5E76\u81EA\u52A8\u751F\u6210 js \u6587\u4EF6</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>tsc ts.ts -w
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="\u5E38\u89C1\u95EE\u9898" tabindex="-1"><a class="header-anchor" href="#\u5E38\u89C1\u95EE\u9898" aria-hidden="true">#</a> \u5E38\u89C1\u95EE\u9898</h2><h3 id="windows" tabindex="-1"><a class="header-anchor" href="#windows" aria-hidden="true">#</a> windows</h3><p>\u5982\u679C\u5728 windows \u7CFB\u7EDF\u4E2D\u6267\u884C tsc \u547D\u4EE4\u62A5\u4EE5\u4E0B\u9519\u8BEF</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>... \u56E0\u4E3A\u5728\u6B64\u7CFB\u7EDF\u4E0A\u7981\u6B62\u8FD0\u884C\u811A\u672C ...
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>\u9700\u8981\u4EE5\u7BA1\u7406\u5458\u8EAB\u4EFD\u6267\u884C powerShell\uFF0C\u7136\u540E\u6267\u884C\u4EE5\u4E0B\u547D\u4EE4\uFF0C\u5728\u51FA\u73B0\u7684\u63D0\u793A\u9009\u62E9 <code>Y</code></p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>set-ExecutionPolicy RemoteSigned
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div>`,26);function x(g,b){const s=l("ExternalLinkIcon");return n(),d("div",null,[o,a("p",null,[p,a("a",u,[v,r(s)]),h]),m])}var y=t(c,[["render",x],["__file","setting.html.vue"]]);export{y as default};
