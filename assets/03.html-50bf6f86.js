import{_ as t,M as d,p as r,q as l,R as e,t as n,N as a,a1 as i}from"./framework-96b046e1.js";const c={},o=i('<h1 id="_02-【-vuepress-】" tabindex="-1"><a class="header-anchor" href="#_02-【-vuepress-】" aria-hidden="true">#</a> 02 【 VuePress 】</h1><p>將 VuePress 專案部署至 Github</p><h2 id="_1-準備" tabindex="-1"><a class="header-anchor" href="#_1-準備" aria-hidden="true">#</a> 1. 準備</h2><h3 id="_1-安裝git" tabindex="-1"><a class="header-anchor" href="#_1-安裝git" aria-hidden="true">#</a> 1. 安裝Git</h3>',4),p={href:"http://localhost:8080/learning-note/notes/git/01.html",target:"_blank",rel:"noopener noreferrer"},u=e("h3",{id:"_2-註冊github帳號",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#_2-註冊github帳號","aria-hidden":"true"},"#"),n(" 2. 註冊GitHub帳號")],-1),v={href:"https://github.com/",target:"_blank",rel:"noopener noreferrer"},h=i(`<h2 id="_2-部屬" tabindex="-1"><a class="header-anchor" href="#_2-部屬" aria-hidden="true">#</a> 2. 部屬</h2><p>・ 1. 在GitHub建立新的repository</p><p>舉例：learning_note</p><p>・ 2. 在<code>config.js</code>中增加路徑設定：</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>
  	<span class="token comment">// 路徑名為 &quot;/&lt;REPO&gt;/&quot;</span>
    <span class="token literal-property property">base</span><span class="token operator">:</span> <span class="token string">&#39;/learning_note/&#39;</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>・ 3. 在專案目錄下建立deploy.sh</p><p><code>deploy.sh</code>中保存以下內容</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>#!/usr/bin/env sh

# 遇到錯誤時顯示錯誤
set -e

# 產生靜態檔案
npm run docs:build

# 進入產生的資料夾
cd docs/.vuepress/dist

git init
git add -A
git commit -m &#39;deploy&#39;

git push -f git@github.com:&lt;USERNAME&gt;/&lt;REPO&gt;.git master:gh-pages

cd -
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>執行<code>.\\deploy.sh</code>提交</p>`,9);function m(b,_){const s=d("ExternalLinkIcon");return r(),l("div",null,[o,e("p",null,[e("a",p,[n("前往Git安裝教學"),a(s)])]),u,e("p",null,[e("a",v,[n("GitHub官方網站"),a(s)])]),h])}const f=t(c,[["render",m],["__file","03.html.vue"]]);export{f as default};
