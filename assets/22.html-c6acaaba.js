import{_ as n,p as s,q as a,a1 as t}from"./framework-96b046e1.js";const p={},e=t(`<h1 id="【-ajax-】" tabindex="-1"><a class="header-anchor" href="#【-ajax-】" aria-hidden="true">#</a> 【 Ajax 】</h1><h2 id="_1-實現方法" tabindex="-1"><a class="header-anchor" href="#_1-實現方法" aria-hidden="true">#</a> 1. 實現方法</h2><p>通過XMLHttpRequest物件來向伺服器發送非同步請求，從伺服器取得資料，然後用js來操作DOM更新頁面</p><p>實現過程：</p><ol><li>建立XMLHttpRequest物件</li></ol><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">new</span> <span class="token class-name">XMLHttpRequest</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ol start="2"><li>通過XMLHttpRequest物件的open()方法與伺服器端建立連接</li></ol><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// method：請求方法  // url：請求地址</span>
<span class="token keyword">new</span> <span class="token class-name">XMLHttpRequest<span class="token punctuation">.</span>open</span><span class="token punctuation">(</span>method<span class="token punctuation">,</span> url<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><ol start="3"><li>建構請求所需的資料內容，並通過XMLHttpRequest物件的send()方法發送給伺服器端</li></ol><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// body：發送的資料</span>
<span class="token keyword">new</span> <span class="token class-name">XMLHttpRequest</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">send</span><span class="token punctuation">(</span>body<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>如果使用get請求，send()方法中的參數設定為null</p><ol start="4"><li>通過 XMLHttpRequest物件提供的 onreadystatechange 事件監聽伺服器端的通訊狀態</li></ol><p>onreadystatechange()主要監聽的屬性是實例化物件中的readyState(五個狀態)</p><p>・ 0：open()未調用</p><p>・ 1：sned()未調用</p><p>・ 2：send()已經調用，響應頭和響應狀態已經返回</p><p>・ 3：響應體正在下載，responseText(接收伺服器端響應的結果)取得部分的資料</p><p>・ 4：完整請求過程已經完畢</p><p>只要readyState屬性值發生改變，onreadystatechange()就會被觸發</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">new</span> <span class="token class-name">XMLHttpRequest</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">onreadystatechange</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ol start="5"><li><p>接受並處理伺服器端向用戶端響應的資料結果</p></li><li><p>將處理結果渲染到HTML頁面中</p></li></ol><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">const</span> xhr <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">XMLHttpRequest</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
xhr<span class="token punctuation">.</span><span class="token function">open</span><span class="token punctuation">(</span><span class="token string">&#39;GET&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;https://pokeapi.co/api/v2/pokemon/ditto&#39;</span><span class="token punctuation">)</span>
xhr<span class="token punctuation">.</span><span class="token function">send</span><span class="token punctuation">(</span><span class="token keyword">null</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
xhr<span class="token punctuation">.</span><span class="token function-variable function">onreadystatechange</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span><span class="token punctuation">(</span>xhr<span class="token punctuation">.</span>readyState <span class="token operator">===</span> <span class="token number">4</span><span class="token punctuation">)</span> <span class="token punctuation">{</span> <span class="token comment">// 如果請求過程完畢</span>
        <span class="token keyword">if</span><span class="token punctuation">(</span>xhr<span class="token punctuation">.</span>status <span class="token operator">&gt;=</span> <span class="token number">200</span> <span class="token operator">&amp;&amp;</span> xhr<span class="token punctuation">.</span>status <span class="token operator">&lt;</span> <span class="token number">300</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token constant">JSON</span><span class="token punctuation">.</span><span class="token function">parse</span><span class="token punctuation">(</span>xhr<span class="token punctuation">.</span>responseText<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span><span class="token keyword">else</span> <span class="token keyword">if</span><span class="token punctuation">(</span>xhr<span class="token punctuation">.</span>status<span class="token operator">&gt;=</span><span class="token number">400</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
            console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;錯誤訊息&#39;</span> <span class="token operator">+</span> xhr<span class="token punctuation">.</span>status<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_2-js封裝ajax請求" tabindex="-1"><a class="header-anchor" href="#_2-js封裝ajax請求" aria-hidden="true">#</a> 2. JS封裝Ajax請求</h2><p>請求方式，請求地址，請求參數，請求參數的類型</p><p>請求返回的結果</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">ajax</span><span class="token punctuation">(</span><span class="token parameter">options</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// 建立new XMLHttpRequest物件</span>
    <span class="token keyword">const</span> xhr <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">XMLHttpRequest</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token comment">// 初始化參數的內容</span>
    options <span class="token operator">=</span> options <span class="token operator">||</span> <span class="token punctuation">{</span><span class="token punctuation">}</span> <span class="token comment">// 如果沒有傳參數就傳空的物件</span>
    options<span class="token punctuation">.</span>type <span class="token operator">=</span> <span class="token punctuation">(</span>options<span class="token punctuation">.</span>type <span class="token operator">||</span> <span class="token string">&#39;GET&#39;</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">toUpperCase</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    options<span class="token punctuation">.</span>dataType <span class="token operator">=</span> options<span class="token punctuation">.</span>dataType <span class="token operator">||</span> <span class="token string">&#39;json&#39;</span>
    <span class="token keyword">const</span> params <span class="token operator">=</span> options<span class="token punctuation">.</span>data

    <span class="token comment">// 發送請求</span>
    <span class="token keyword">if</span><span class="token punctuation">(</span>options<span class="token punctuation">.</span>type <span class="token operator">===</span> <span class="token string">&#39;GET&#39;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">// 第三個參數：async，布爾值，表示是否執行非同步操作</span>
        xhr<span class="token punctuation">.</span><span class="token function">open</span><span class="token punctuation">(</span><span class="token string">&#39;GET&#39;</span><span class="token punctuation">,</span> options<span class="token punctuation">.</span>url<span class="token operator">+</span><span class="token string">&quot;?&quot;</span> <span class="token operator">+</span> <span class="token function">getParams</span><span class="token punctuation">(</span>params<span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token boolean">true</span><span class="token punctuation">)</span>
        xhr<span class="token punctuation">.</span><span class="token function">send</span><span class="token punctuation">(</span><span class="token keyword">null</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span><span class="token keyword">else</span> <span class="token keyword">if</span><span class="token punctuation">(</span>options<span class="token punctuation">.</span>type<span class="token operator">===</span><span class="token string">&#39;POST&#39;</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        xhr<span class="token punctuation">.</span><span class="token function">open</span><span class="token punctuation">(</span><span class="token string">&#39;POST&#39;</span><span class="token punctuation">,</span> options<span class="token punctuation">.</span>url<span class="token punctuation">,</span> <span class="token boolean">true</span><span class="token punctuation">)</span>
        xhr<span class="token punctuation">.</span><span class="token function">send</span><span class="token punctuation">(</span>params<span class="token punctuation">)</span>
    <span class="token punctuation">}</span>

    <span class="token comment">// 接收請求</span>
    xhr<span class="token punctuation">.</span><span class="token function-variable function">onreadystatechange</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">if</span><span class="token punctuation">(</span>xhr<span class="token punctuation">.</span>readyState <span class="token operator">===</span> <span class="token number">4</span><span class="token punctuation">)</span> <span class="token punctuation">{</span> <span class="token comment">// 4代表請求過程結束</span>
            <span class="token keyword">if</span><span class="token punctuation">(</span>xhr<span class="token punctuation">.</span>status <span class="token operator">&gt;=</span> <span class="token number">200</span> <span class="token operator">&amp;&amp;</span> xhr<span class="token punctuation">.</span>status <span class="token operator">&lt;</span> <span class="token number">300</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                <span class="token comment">// responseText：字串的響應資料</span>
                <span class="token comment">// responseXML：XML格式的響應資料</span>
                options<span class="token punctuation">.</span><span class="token function">success</span><span class="token punctuation">(</span>xhr<span class="token punctuation">.</span>responseText<span class="token punctuation">,</span> xhr<span class="token punctuation">.</span>responseXML<span class="token punctuation">)</span>
            <span class="token punctuation">}</span><span class="token keyword">else</span><span class="token punctuation">{</span>
                options<span class="token punctuation">.</span><span class="token function">fail</span><span class="token punctuation">(</span><span class="token string">&quot;參數錯誤&quot;</span> <span class="token operator">+</span> status<span class="token punctuation">)</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token function">ajax</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    <span class="token literal-property property">type</span><span class="token operator">:</span> <span class="token string">&#39;get&#39;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">dataType</span><span class="token operator">:</span> <span class="token string">&#39;json&#39;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">data</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token literal-property property">limit</span><span class="token operator">:</span> <span class="token number">10</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token literal-property property">url</span><span class="token operator">:</span> <span class="token string">&#39;https://pokeapi.co/api/v2/pokemon/ditto&#39;</span><span class="token punctuation">,</span>
    <span class="token function-variable function">success</span><span class="token operator">:</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">text<span class="token punctuation">,</span> xml</span><span class="token punctuation">)</span> <span class="token punctuation">{</span> <span class="token comment">// 請求成功之後的回調函式</span>
        console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token constant">JSON</span><span class="token punctuation">.</span><span class="token function">parse</span><span class="token punctuation">(</span>text<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token function-variable function">fail</span><span class="token operator">:</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">status</span><span class="token punctuation">)</span> <span class="token punctuation">{</span> <span class="token comment">// 請求失敗之後的回調函式</span>
        console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>status<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>

<span class="token comment">// 對參數做處理</span>
<span class="token keyword">function</span> <span class="token function">getParams</span><span class="token punctuation">(</span><span class="token parameter">data</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">let</span> arr <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
    <span class="token keyword">for</span><span class="token punctuation">(</span><span class="token keyword">let</span> key <span class="token keyword">in</span> data<span class="token punctuation">)</span><span class="token punctuation">{</span>
        arr<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>key<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">=</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>data<span class="token punctuation">[</span>key<span class="token punctuation">]</span><span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">return</span> arr<span class="token punctuation">.</span><span class="token function">join</span><span class="token punctuation">(</span><span class="token string">&#39;&amp;&#39;</span><span class="token punctuation">)</span> <span class="token comment">// url=&#39;limit=10&amp;age=18&#39;</span>
<span class="token punctuation">}</span>
<span class="token comment">// getParams({limit:10, age:18})</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,26),o=[e];function c(l,i){return s(),a("div",null,o)}const k=n(p,[["render",c],["__file","22.html.vue"]]);export{k as default};
