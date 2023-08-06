import{_ as n,p as e,q as s,a1 as t}from"./framework-96b046e1.js";const a={},o=t(`<h1 id="_05-【控制器-controller-】" tabindex="-1"><a class="header-anchor" href="#_05-【控制器-controller-】" aria-hidden="true">#</a> 05 【控制器 Controller 】</h1><h2 id="_1-建立controller" tabindex="-1"><a class="header-anchor" href="#_1-建立controller" aria-hidden="true">#</a> 1. 建立Controller</h2><p>指令： <code>php artisan make:controller {controller name}Conroller</code></p><p>・名稱與<code>migration</code>名稱對應，必須以<code>大寫</code>開頭，去掉結尾<code>s</code>並接上<code>Controller</code></p><p>舉例：</p><table><thead><tr><th style="text-align:center;">migration</th><th style="text-align:center;">Model</th></tr></thead><tbody><tr><td style="text-align:center;">users</td><td style="text-align:center;">UserController</td></tr><tr><td style="text-align:center;">articles</td><td style="text-align:center;">ArticleController</td></tr><tr><td style="text-align:center;">products</td><td style="text-align:center;">ProductController</td></tr></tbody></table><p>・產生位置： <code>app</code></p><h2 id="_2-使用例" tabindex="-1"><a class="header-anchor" href="#_2-使用例" aria-hidden="true">#</a> 2. 使用例</h2><p>定義 <code>index</code> 方法，此方法返回 <code>views</code> 中的 <code>index.blade</code> 頁面</p><div class="language-php line-numbers-mode" data-ext="php"><pre class="language-php"><code><span class="token keyword">class</span> <span class="token class-name-definition class-name">ArticleContorller</span> <span class="token keyword">extends</span> <span class="token class-name">Controller</span>
<span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">function</span> <span class="token function-definition function">index</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token function">view</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;/index&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>設置 <code>route</code>，透過對應的 <code>Controller</code> 執行定義的方法</p><div class="language-php line-numbers-mode" data-ext="php"><pre class="language-php"><code><span class="token class-name static-context">Route</span><span class="token operator">::</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;/&#39;</span><span class="token punctuation">,</span> <span class="token string single-quoted-string">&#39;ArticleContorller@index&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div>`,12),c=[o];function l(r,i){return e(),s("div",null,c)}const p=n(a,[["render",l],["__file","05.html.vue"]]);export{p as default};
