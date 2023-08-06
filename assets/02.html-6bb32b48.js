import{_ as t,M as s,p as i,q as o,R as e,t as a,N as d,a1 as n}from"./framework-96b046e1.js";const l="/learning_note/images/laravel/02/xampp_port3306.png",c="/learning_note/images/laravel/02/database.png",p={},h=n('<h1 id="_02-【安裝】" tabindex="-1"><a class="header-anchor" href="#_02-【安裝】" aria-hidden="true">#</a> 02 【安裝】</h1><h2 id="_1-開發環境" tabindex="-1"><a class="header-anchor" href="#_1-開發環境" aria-hidden="true">#</a> 1.開發環境</h2><p>開發 Laravel 專案前，需先建置以下開發環境。</p><p>1.Xampp or MAMP</p><p>2.Visual Studio Code</p><p>3.Composer</p><p>4.Node.js</p><p>5.HeidiSQL</p><h3 id="_1-1-xampp-or-mamp" tabindex="-1"><a class="header-anchor" href="#_1-1-xampp-or-mamp" aria-hidden="true">#</a> 1.1 Xampp or MAMP</h3><p>使用 Xampp 與 MAMP 可在本機端建置網頁伺服器。</p>',10),_={href:"https://www.apachefriends.org/zh_tw/index.html",target:"_blank",rel:"noopener noreferrer"},u={href:"https://www.mamp.info/en/",target:"_blank",rel:"noopener noreferrer"},m=e("h3",{id:"_1-2-visual-studio-code",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#_1-2-visual-studio-code","aria-hidden":"true"},"#"),a(" 1.2 Visual Studio Code")],-1),v=e("p",null,"Visual Studio Code，跨平台的原始碼文字編輯器",-1),x={href:"https://code.visualstudio.com/",target:"_blank",rel:"noopener noreferrer"},g=e("h3",{id:"_1-3-composer",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#_1-3-composer","aria-hidden":"true"},"#"),a(" 1.3 Composer")],-1),b=e("p",null,"Composer，PHP套件管理工具。",-1),f={href:"https://getcomposer.org/",target:"_blank",rel:"noopener noreferrer"},N=e("h3",{id:"_1-4-node-js",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#_1-4-node-js","aria-hidden":"true"},"#"),a(" 1.4 Node.js")],-1),M=e("p",null,"NPM 是Node.js 的套件管理工具，Node.js 中內建 NPM，需透過安裝 Node.js 的方式去安裝 NPM。",-1),P={href:"https://nodejs.org/",target:"_blank",rel:"noopener noreferrer"},j=e("h3",{id:"_1-5-heidisql",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#_1-5-heidisql","aria-hidden":"true"},"#"),a(" 1.5 HeidiSQL")],-1),k=e("p",null,"HeidiSQL為資料庫可視化管理工具。",-1),w={href:"https://www.heidisql.com/",target:"_blank",rel:"noopener noreferrer"},C=n(`<h2 id="_2-建立-laravel-專案" tabindex="-1"><a class="header-anchor" href="#_2-建立-laravel-專案" aria-hidden="true">#</a> 2.建立 Laravel 專案</h2><h3 id="_2-1-安裝-laravel" tabindex="-1"><a class="header-anchor" href="#_2-1-安裝-laravel" aria-hidden="true">#</a> 2.1 安裝 Laravel</h3><p>開啟 VS Code ，啟動 TERMINAL（ctrl + ~），輸入指令。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>composer global require laravel/installer
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="_2-建立專案" tabindex="-1"><a class="header-anchor" href="#_2-建立專案" aria-hidden="true">#</a> 2. 建立專案</h3><p>於根目錄建立專案。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>composer create-project --prefer-dist laravel/laravel:^7.0 Project Name
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>Project Name：專案名稱，自行命名。</p><h3 id="_2-3-安裝-composer-與-npm" tabindex="-1"><a class="header-anchor" href="#_2-3-安裝-composer-與-npm" aria-hidden="true">#</a> 2.3 安裝 Composer 與 NPM</h3><p>1.從根目錄進入專案存放之資料夾。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>cd Project Name
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>2.安裝 Composer</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>composer install
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>3.安裝 NPM</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>NPM install
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="_2-4-修改配置" tabindex="-1"><a class="header-anchor" href="#_2-4-修改配置" aria-hidden="true">#</a> 2.4 修改配置</h3><p>1「.env檔」</p><p>設置與資料庫連接之配置。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>DB_PORT=3306
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>需與 Xampp 的連接埠相同</p><p><img src="`+l+`" alt="Xampp_port3306"></p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>DB_DATABASE=Database
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>需與 HeidiSQL 中建立的資料庫名稱相同。</p><p><img src="`+c+`" alt="database"></p><h3 id="_2-5-測試連接" tabindex="-1"><a class="header-anchor" href="#_2-5-測試連接" aria-hidden="true">#</a> 2.5 測試連接</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>php artisan serve
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>連接成功，會出現 <a>http://127.0.0.1:8000</a> ，於該網址進入專案頁面。</p>`,27);function L(S,A){const r=s("ExternalLinkIcon");return i(),o("div",null,[h,e("p",null,[a("Xampp："),e("a",_,[a("進入官網"),d(r)])]),e("p",null,[a("MAMP："),e("a",u,[a("進入官網"),d(r)])]),m,v,e("p",null,[e("a",x,[a("進入官網"),d(r)])]),g,b,e("p",null,[e("a",f,[a("進入官網"),d(r)])]),N,M,e("p",null,[e("a",P,[a("進入官網"),d(r)])]),j,k,e("p",null,[e("a",w,[a("進入官網"),d(r)])]),C])}const B=t(p,[["render",L],["__file","02.html.vue"]]);export{B as default};
