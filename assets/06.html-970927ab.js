import{_ as n,p as a,q as s,a1 as e}from"./framework-96b046e1.js";const t={},p=e(`<h1 id="_06-【-webhook-範例-】" tabindex="-1"><a class="header-anchor" href="#_06-【-webhook-範例-】" aria-hidden="true">#</a> 06 【 Webhook 範例 】</h1><p>客戶端與伺服器端之間互相發出通知的範例</p><h2 id="_1-建立客戶端與伺服器端" tabindex="-1"><a class="header-anchor" href="#_1-建立客戶端與伺服器端" aria-hidden="true">#</a> 1. 建立客戶端與伺服器端</h2><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>laravel new Client
laravel new Server
cd Client
php artisan key:generate
composer update
cp .env.example .env
cd ../Server
composer update
cp .env.example .env
php artisan key:generate
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_2-建立客戶端的api-提供客戶端接收伺服器端的訊息" tabindex="-1"><a class="header-anchor" href="#_2-建立客戶端的api-提供客戶端接收伺服器端的訊息" aria-hidden="true">#</a> 2. 建立客戶端的API，提供客戶端接收伺服器端的訊息</h2><blockquote><p>./client/routes/api.php</p></blockquote><div class="language-php line-numbers-mode" data-ext="php"><pre class="language-php"><code><span class="token class-name static-context">Route</span><span class="token operator">::</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;/client/{message}&#39;</span><span class="token punctuation">,</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token variable">$message</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span><span class="token punctuation">(</span><span class="token string double-quoted-string">&quot;Client(客戶端)收到以下訊息：&quot;</span><span class="token operator">.</span><span class="token variable">$message</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_3-建立客戶端用來請求伺服器端api的連結路由" tabindex="-1"><a class="header-anchor" href="#_3-建立客戶端用來請求伺服器端api的連結路由" aria-hidden="true">#</a> 3. 建立客戶端用來請求伺服器端API的連結路由</h2><blockquote><p>./client/routes/web.php</p></blockquote><div class="language-php line-numbers-mode" data-ext="php"><pre class="language-php"><code><span class="token class-name static-context">Route</span><span class="token operator">::</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;/client_to_server&#39;</span><span class="token punctuation">,</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token variable">$client</span> <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Client</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token variable">$res</span> <span class="token operator">=</span> <span class="token variable">$client</span><span class="token operator">-&gt;</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;http://localhost:8002/api/server/Hello-Server&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">return</span> <span class="token punctuation">(</span><span class="token variable">$res</span><span class="token operator">-&gt;</span><span class="token function">getBody</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_4-設定伺服器端的路由" tabindex="-1"><a class="header-anchor" href="#_4-設定伺服器端的路由" aria-hidden="true">#</a> 4. 設定伺服器端的路由</h2><blockquote><p>./server/routes/api.php</p></blockquote><div class="language-php line-numbers-mode" data-ext="php"><pre class="language-php"><code><span class="token class-name static-context">Route</span><span class="token operator">::</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;/server/{message}&#39;</span><span class="token punctuation">,</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token variable">$message</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span><span class="token punctuation">(</span><span class="token string double-quoted-string">&quot;Server(伺服器端)收到以下訊息：&quot;</span><span class="token operator">.</span><span class="token variable">$message</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_5-建立伺服器端用來請求客戶端api的連結路由" tabindex="-1"><a class="header-anchor" href="#_5-建立伺服器端用來請求客戶端api的連結路由" aria-hidden="true">#</a> 5. 建立伺服器端用來請求客戶端API的連結路由</h2><blockquote><p>./server/routes/web.php</p></blockquote><div class="language-php line-numbers-mode" data-ext="php"><pre class="language-php"><code><span class="token class-name static-context">Route</span><span class="token operator">::</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;/server_to_client&#39;</span><span class="token punctuation">,</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token variable">$client</span> <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Client</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token variable">$res</span> <span class="token operator">=</span> <span class="token variable">$client</span><span class="token operator">-&gt;</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;http://localhost:8001/api/client/Hello-Server&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">return</span> <span class="token punctuation">(</span><span class="token variable">$res</span><span class="token operator">-&gt;</span><span class="token function">getBody</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_6-啟動客戶端與伺服器端" tabindex="-1"><a class="header-anchor" href="#_6-啟動客戶端與伺服器端" aria-hidden="true">#</a> 6. 啟動客戶端與伺服器端</h2><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>cd Client
php artisan serve --port=8001
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>cd Server
php artisan serve --port=8002
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_7-開啟瀏覽器進行測試" tabindex="-1"><a class="header-anchor" href="#_7-開啟瀏覽器進行測試" aria-hidden="true">#</a> 7. 開啟瀏覽器進行測試</h2><h3 id="_1-客戶端對伺服器端發出通知" tabindex="-1"><a class="header-anchor" href="#_1-客戶端對伺服器端發出通知" aria-hidden="true">#</a> 1. 客戶端對伺服器端發出通知</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>http://localhost:8001/client_to_server
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>成功則顯示以下內容：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>Server(伺服器端)收到以下訊息：Hello-Server
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="_2-伺服器端對客戶端發出通知" tabindex="-1"><a class="header-anchor" href="#_2-伺服器端對客戶端發出通知" aria-hidden="true">#</a> 2. 伺服器端對客戶端發出通知</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>http://localhost:8002/server_to_client
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>成功則顯示以下內容：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>Client(客戶端)收到以下訊息：Hello-Server
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div>`,28),i=[p];function c(o,l){return a(),s("div",null,i)}const u=n(t,[["render",c],["__file","06.html.vue"]]);export{u as default};