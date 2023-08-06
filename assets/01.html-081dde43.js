import{_ as s,M as i,p as t,q as d,R as e,t as n,N as r,a1 as l}from"./framework-96b046e1.js";const o={},c=e("h1",{id:"_01-【-nginx-】",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#_01-【-nginx-】","aria-hidden":"true"},"#"),n(" 01 【 nginx 】")],-1),p=e("h2",{id:"_1-下載",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#_1-下載","aria-hidden":"true"},"#"),n(" 1. 下載")],-1),u={href:"https://nginx.org/en/download.html",target:"_blank",rel:"noopener noreferrer"},v=l(`<p>最新版本：Mainline version</p><p>穩定版本：Stable version</p><h2 id="_2-安裝與啟動" tabindex="-1"><a class="header-anchor" href="#_2-安裝與啟動" aria-hidden="true">#</a> 2. 安裝與啟動</h2><p>解壓縮後點擊nginx.exe 或是在 PowerShell 中輸入<code> C:\\nginx-1.24.0&gt; .\\nginx.exe</code>啟動</p><p>nginx預設的port為80</p><p>啟動後輸入http://localhost，若出現<code>Welcome to nginx!</code>頁面，表示啟動成功</p><p>如果80 port被占用，可以在<code>C:\\nginx-1.24.0\\conf\\nginx.conf</code>修改設定</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>server {
        listen       80; // 此處修改
        server_name  localhost;

        #charset koi8-r;

        #access_log  logs/host.access.log  main;

        location / {
            root   html;
            index  index.html index.htm;
        }
    }
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_3-指令" tabindex="-1"><a class="header-anchor" href="#_3-指令" aria-hidden="true">#</a> 3. 指令</h2><h4 id="_1-啟動" tabindex="-1"><a class="header-anchor" href="#_1-啟動" aria-hidden="true">#</a> 1. 啟動</h4><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>C:\\nginx-1.24.0&gt; .\\start nginx
C:\\nginx-1.24.0&gt; .\\nginx.exe
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_2-停止" tabindex="-1"><a class="header-anchor" href="#_2-停止" aria-hidden="true">#</a> 2. 停止</h4><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>C:\\nginx-1.24.0&gt; .\\nginx.exe -s stop
C:\\nginx-1.24.0&gt; .\\nginx.exe -s quit
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_3-重新啟動" tabindex="-1"><a class="header-anchor" href="#_3-重新啟動" aria-hidden="true">#</a> 3. 重新啟動</h4><p>當修改了nginx.conf內容後，需要執行此指令才會生效</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>C:\\nginx-1.24.0&gt; .\\nginx.exe -s reload
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="_4-使用" tabindex="-1"><a class="header-anchor" href="#_4-使用" aria-hidden="true">#</a> 4. 使用</h2><blockquote><p>以 Vue跨域 為例</p></blockquote><p>Vue在開發階段時可以使用devServer進行代理跨域</p><p>在 <code>vue.config.js</code> 配置proxy功能</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code> <span class="token literal-property property">devServer</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">proxy</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token string-property property">&#39;/api&#39;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token comment">// 此處的/api也可以使用axios的baseURL進行配置，讓請求的路徑後面都會加上/api</span>
        <span class="token literal-property property">target</span><span class="token operator">:</span> <span class="token string">&#39;https://localhost:8082/api/&#39;</span><span class="token punctuation">,</span> <span class="token comment">// 跨域請求路徑</span>
        <span class="token literal-property property">changeOrigin</span><span class="token operator">:</span> <span class="token boolean">true</span> <span class="token comment">// 開啟跨域</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token literal-property property">pathRewrite</span><span class="token operator">:</span> <span class="token punctuation">{</span>
                <span class="token string-property property">&#39;^/api&#39;</span><span class="token operator">:</span> <span class="token string">&#39;&#39;</span> <span class="token comment">// 重寫路徑</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>但是此方法只能使用在開發階段</p><p>專案在發怖上現階段可以使用nginx反向代理解決跨域問題</p><h4 id="_1-打包-vue-專案" tabindex="-1"><a class="header-anchor" href="#_1-打包-vue-專案" aria-hidden="true">#</a> 1. 打包 Vue 專案</h4><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>npm run build
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>將dist中的所有檔案放入<code>C:\\nginx-1.24.0\\html\\static</code></p><h4 id="_2-修改-nginx-conf" tabindex="-1"><a class="header-anchor" href="#_2-修改-nginx-conf" aria-hidden="true">#</a> 2. 修改 nginx.conf</h4><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>server {
    listen       8081; // 監聽的port
    server_name  localhost;

    // 根目錄
    location / {
        root   C:\\\\nginx-1.24.0\\\\html\\\\static;
        index  index.html index.htm;
       try_files $uri $uri/ /index.html; // 把匹配不到的路徑重定向到index.html，vue-router的mode是history模式時需要配置，否則會出現重新整理頁面出現404
   }

   // 後端api
   location /api {
            proxy_pass http://localhost:8082;
            rewrite &quot;^/api/(.*)$&quot; /$1 break; // 重寫/api路徑
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_1-前端頁面" tabindex="-1"><a class="header-anchor" href="#_1-前端頁面" aria-hidden="true">#</a> 1. 前端頁面</h4><p>請求<code>localhost:8081</code>會匹配<code>location /</code>，再去尋找<code>C:\\\\nginx-1.24.0\\\\html\\\\static</code>中的index.html</p><h4 id="_2-反向代理" tabindex="-1"><a class="header-anchor" href="#_2-反向代理" aria-hidden="true">#</a> 2. 反向代理</h4><p>後端的API為<code>http://localhost:8082</code></p><blockquote><p>假設：</p><p>登入的API為<code>http://localhost:8082/login</code></p><p>而前端的請求為<code>http://localhost:8081/api/login?userName=user123456&amp;password=123456</code></p></blockquote><p><code>location /</code> 對應了 <code>http://localhost:8081</code></p><p><code>location /api</code> 對應了 <code>http://localhost:8081/api</code>(在前端的設定中<code>baseUrl：/api</code>，請求的路徑前都會加上/api)</p><p>因為設定了<code>rewrite &quot;^/api/(.*)$&quot; /$1 break;</code>重寫路徑</p><p>前端請求的<code>http://localhost:8081/api/login?userName=user123456&amp;password=123456</code></p><p>會修改為<code>http://localhost:8082/login?userName=user123456&amp;password=123456</code>，反向代理到後端服務器的路徑</p>`,38);function h(m,x){const a=i("ExternalLinkIcon");return t(),d("div",null,[c,p,e("p",null,[e("a",u,[n("官網下載"),r(a)])]),v])}const g=s(o,[["render",h],["__file","01.html.vue"]]);export{g as default};
