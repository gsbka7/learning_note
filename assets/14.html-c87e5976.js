import{_ as n,p as s,q as a,a1 as p}from"./framework-96b046e1.js";const t={},e=p(`<h1 id="_14-【-遞迴-】" tabindex="-1"><a class="header-anchor" href="#_14-【-遞迴-】" aria-hidden="true">#</a> 14 【 遞迴 】</h1><p>函式內部自己調用自己, 稱為遞迴函式</p><p>作用和循環效果一樣</p><p>必須加入退出條件 return</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">fn</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token function">fn</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token function">fn</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 調用後進入fn()內部再次調用fn()</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>遞迴容易發生棧溢出(stack overflow)，所以必須要加上退出條件return</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">var</span> num <span class="token operator">=</span> <span class="token number">1</span>
<span class="token keyword">function</span> <span class="token function">fn</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">if</span><span class="token punctuation">(</span>num <span class="token operator">==</span> <span class="token number">6</span><span class="token punctuation">)</span> <span class="token punctuation">{</span> <span class="token comment">// 當條件符合時退出遞迴</span>
        <span class="token keyword">return</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token punctuation">;</span>
    num<span class="token operator">++</span>
    <span class="token function">fn</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token function">fn</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="範例" tabindex="-1"><a class="header-anchor" href="#範例" aria-hidden="true">#</a> 範例</h3><h4 id="_1-求1-n的階乘" tabindex="-1"><a class="header-anchor" href="#_1-求1-n的階乘" aria-hidden="true">#</a> 1. 求1~n的階乘</h4><p>求1~n的階乘 1 * 2 * 3 * 4 * ..n</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>
<span class="token keyword">function</span> <span class="token function">fn</span><span class="token punctuation">(</span><span class="token parameter">n</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span><span class="token punctuation">(</span>n <span class="token operator">==</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">{</span> <span class="token comment">// 設定退出的判斷條件</span>
        <span class="token keyword">return</span> <span class="token number">1</span>
    <span class="token punctuation">}</span><span class="token punctuation">;</span>

    <span class="token keyword">return</span> n <span class="token operator">*</span> <span class="token function">fn</span><span class="token punctuation">(</span>n<span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 將fn(n-1)再次帶入fn()的參數，直到參數為1退出遞迴</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token function">fn</span><span class="token punctuation">(</span><span class="token number">9</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_2-遍歷陣列資料" tabindex="-1"><a class="header-anchor" href="#_2-遍歷陣列資料" aria-hidden="true">#</a> 2. 遍歷陣列資料</h4><p>需求：輸入id得到資料</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">var</span> data <span class="token operator">=</span> <span class="token punctuation">[</span>
    <span class="token punctuation">{</span>
        <span class="token literal-property property">id</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
        <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&#39;家電&#39;</span><span class="token punctuation">,</span>
        <span class="token literal-property property">goods</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">{</span>
            <span class="token literal-property property">id</span><span class="token operator">:</span> <span class="token number">11</span><span class="token punctuation">,</span>
            <span class="token literal-property property">gname</span><span class="token operator">:</span> <span class="token string">&#39;冰箱&#39;</span><span class="token punctuation">,</span>
            <span class="token literal-property property">goods</span><span class="token operator">:</span> <span class="token punctuation">[</span>
                <span class="token punctuation">{</span>
                    <span class="token literal-property property">id</span><span class="token operator">:</span> <span class="token number">111</span><span class="token punctuation">,</span>
                    <span class="token literal-property property">gname</span><span class="token operator">:</span> <span class="token string">&#39;brand1&#39;</span>
                <span class="token punctuation">}</span><span class="token punctuation">,</span>
                <span class="token punctuation">{</span>
                    <span class="token literal-property property">id</span><span class="token operator">:</span> <span class="token number">222</span><span class="token punctuation">,</span>
                    <span class="token literal-property property">gname</span><span class="token operator">:</span> <span class="token string">&#39;brand2&#39;</span>
                <span class="token punctuation">}</span>
            <span class="token punctuation">]</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span>
        <span class="token literal-property property">id</span><span class="token operator">:</span> <span class="token number">12</span><span class="token punctuation">,</span>
        <span class="token literal-property property">gname</span><span class="token operator">:</span> <span class="token string">&#39;洗衣機&#39;</span>
    <span class="token punctuation">}</span><span class="token punctuation">]</span><span class="token punctuation">}</span><span class="token punctuation">,</span> 
    <span class="token punctuation">{</span>
        <span class="token literal-property property">id</span><span class="token operator">:</span> <span class="token number">2</span><span class="token punctuation">,</span>
        <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&#39;服飾&#39;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">]</span><span class="token punctuation">;</span>

<span class="token comment">// 1.forEach遍歷每一個物件</span>
<span class="token keyword">function</span> <span class="token function">getID</span><span class="token punctuation">(</span><span class="token parameter">json<span class="token punctuation">,</span> id</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">var</span> o <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">;</span>

    json<span class="token punctuation">.</span><span class="token function">forEach</span><span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">item</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">// console.log(item);</span>
        <span class="token keyword">if</span><span class="token punctuation">(</span>item<span class="token punctuation">.</span>id <span class="token operator">==</span> id<span class="token punctuation">)</span> <span class="token punctuation">{</span> <span class="token comment">// 輸入的值是否與物件的id相符</span>
            o <span class="token operator">=</span> item<span class="token punctuation">;</span>

        <span class="token comment">// 2.想要得到內部的11 12資料(下一層的資料)</span>

        <span class="token comment">// 通過else if 形成退出判斷條件</span>
        <span class="token punctuation">}</span><span class="token keyword">else</span> <span class="token keyword">if</span><span class="token punctuation">(</span>item<span class="token punctuation">.</span>goods <span class="token operator">&amp;&amp;</span> item<span class="token punctuation">.</span>goods<span class="token punctuation">.</span>length <span class="token operator">&gt;</span> <span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">{</span> <span class="token comment">// goods存在並且陣列長度不為0</span>
            o <span class="token operator">=</span> <span class="token function">getID</span><span class="token punctuation">(</span>item<span class="token punctuation">.</span>goods<span class="token punctuation">,</span> id<span class="token punctuation">)</span> <span class="token comment">// 再往上回頭調用遞迴函式</span>
            
        <span class="token punctuation">}</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">return</span> o
    
<span class="token punctuation">}</span><span class="token punctuation">;</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token function">getID</span><span class="token punctuation">(</span>data<span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token function">getID</span><span class="token punctuation">(</span>data<span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token function">getID</span><span class="token punctuation">(</span>data<span class="token punctuation">,</span> <span class="token number">11</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token function">getID</span><span class="token punctuation">(</span>data<span class="token punctuation">,</span> <span class="token number">12</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token function">getID</span><span class="token punctuation">(</span>data<span class="token punctuation">,</span> <span class="token number">111</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token function">getID</span><span class="token punctuation">(</span>data<span class="token punctuation">,</span> <span class="token number">222</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,14),o=[e];function c(i,l){return s(),a("div",null,o)}const r=n(t,[["render",c],["__file","14.html.vue"]]);export{r as default};
