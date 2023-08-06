import{_ as n,p as s,q as a,a1 as p}from"./framework-96b046e1.js";const t={},e=p(`<h1 id="_15-【-淺拷貝深拷貝-】" tabindex="-1"><a class="header-anchor" href="#_15-【-淺拷貝深拷貝-】" aria-hidden="true">#</a> 15 【 淺拷貝深拷貝 】</h1><p>淺拷貝只是拷貝一層, 更深層次的只拷貝地址(淺拷貝只拷貝 基本資料類型 和 址)</p><p>深拷貝會拷貝多層, 每一級別的資料都會拷貝</p><h2 id="_1-淺拷貝" tabindex="-1"><a class="header-anchor" href="#_1-淺拷貝" aria-hidden="true">#</a> 1. 淺拷貝</h2><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">var</span> obj <span class="token operator">=</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">id</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token comment">// 只拷貝最外面一層</span>
    <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&#39;name&#39;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">msg</span><span class="token operator">:</span> <span class="token punctuation">{</span> <span class="token comment">// 如果遇到更深層及則是拷貝地址, 資料修改會被影響</span>
        <span class="token literal-property property">age</span><span class="token operator">:</span> <span class="token number">18</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token keyword">var</span> o <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token keyword">for</span><span class="token punctuation">(</span><span class="token keyword">var</span> k <span class="token keyword">in</span> obj<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// k屬姓名  obj[k] 屬性值</span>
    o<span class="token punctuation">[</span>k<span class="token punctuation">]</span> <span class="token operator">=</span> obj<span class="token punctuation">[</span>k<span class="token punctuation">]</span> <span class="token comment">// 將obj拷貝給o</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>o<span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// 因為是拷貝地址, 會指向同一個資料, 修改後原本的資料會受影響</span>
o<span class="token punctuation">.</span>msg<span class="token punctuation">.</span>age <span class="token operator">=</span> <span class="token number">20</span><span class="token punctuation">;</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>o<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// age從18變成20</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="object-assign" tabindex="-1"><a class="header-anchor" href="#object-assign" aria-hidden="true">#</a> Object.assign()</h3><p>ES6的新方法</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>Object<span class="token punctuation">.</span><span class="token function">assign</span><span class="token punctuation">(</span>o<span class="token punctuation">,</span> obj<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//把obj 拷貝給 o</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>o<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_2-深拷貝" tabindex="-1"><a class="header-anchor" href="#_2-深拷貝" aria-hidden="true">#</a> 2. 深拷貝</h2><p>// 深拷貝拷貝多層, 每一級別的資料都會拷貝</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">var</span> obj <span class="token operator">=</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">id</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
    <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&#39;name&#39;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">msg</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token literal-property property">age</span><span class="token operator">:</span> <span class="token number">18</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token literal-property property">color</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&#39;red&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;black&#39;</span><span class="token punctuation">]</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token keyword">var</span> o <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token comment">// 封裝函式</span>
<span class="token keyword">function</span> <span class="token function">deepCopy</span><span class="token punctuation">(</span><span class="token parameter">newobj<span class="token punctuation">,</span> oldobj</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// 使用遞迴</span>
    <span class="token keyword">for</span><span class="token punctuation">(</span><span class="token keyword">var</span> k <span class="token keyword">in</span> oldobj<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">// 判斷屬性值屬於 簡單資料類型 或 複雜資料類型</span>

        <span class="token comment">// 1. 取得屬性值</span>
        <span class="token keyword">var</span> item <span class="token operator">=</span> oldobj<span class="token punctuation">[</span>k<span class="token punctuation">]</span><span class="token punctuation">;</span>

        <span class="token comment">// 2. 判斷是否是陣列</span>
        <span class="token keyword">if</span><span class="token punctuation">(</span>item <span class="token keyword">instanceof</span> <span class="token class-name">Array</span><span class="token punctuation">)</span> <span class="token punctuation">{</span> <span class="token comment">// 因為 陣列 也是 物件 的一種, 所以要先判斷</span>
            newobj<span class="token punctuation">[</span>k<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
            <span class="token function">deepCopy</span><span class="token punctuation">(</span>newobj<span class="token punctuation">[</span>k<span class="token punctuation">]</span><span class="token punctuation">,</span> item<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span><span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span>item <span class="token keyword">instanceof</span> <span class="token class-name">Object</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
            <span class="token comment">// 3. 判斷是否是物件</span>
            newobj<span class="token punctuation">[</span>k<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">;</span>
            <span class="token function">deepCopy</span><span class="token punctuation">(</span>newobj<span class="token punctuation">[</span>k<span class="token punctuation">]</span><span class="token punctuation">,</span> item<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span><span class="token keyword">else</span> <span class="token punctuation">{</span>
            <span class="token comment">// 4. 判斷是否屬於簡單資料類型</span>
            newobj<span class="token punctuation">[</span>k<span class="token punctuation">]</span> <span class="token operator">=</span> k
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token function">deepCopy</span><span class="token punctuation">(</span>o<span class="token punctuation">,</span> obj<span class="token punctuation">)</span><span class="token punctuation">;</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>o<span class="token punctuation">)</span><span class="token punctuation">;</span>

o<span class="token punctuation">.</span>msg<span class="token punctuation">.</span>age <span class="token operator">=</span> <span class="token number">20</span><span class="token punctuation">;</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>obj<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 舊資料不會受到影響</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,11),o=[e];function c(l,i){return s(),a("div",null,o)}const r=n(t,[["render",c],["__file","15.html.vue"]]);export{r as default};
