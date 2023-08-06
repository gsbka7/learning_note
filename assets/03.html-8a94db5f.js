import{_ as d,M as i,p as s,q as r,R as e,t as a,N as n,a1 as c}from"./framework-96b046e1.js";const o="/learning_note/images/git/03/create_repository.png",h={},p=e("h1",{id:"_03-【遠程倉庫操作】",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#_03-【遠程倉庫操作】","aria-hidden":"true"},"#"),a(" 03 【遠程倉庫操作】")],-1),l=e("h2",{id:"_1-建立遠程倉庫",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#_1-建立遠程倉庫","aria-hidden":"true"},"#"),a(" 1.建立遠程倉庫")],-1),u={href:"https://github.com/",target:"_blank",rel:"noopener noreferrer"},g=c('<p><img src="'+o+`" alt="create_repository"></p><h2 id="_2-設置ssh公鑰" tabindex="-1"><a class="header-anchor" href="#_2-設置ssh公鑰" aria-hidden="true">#</a> 2.設置SSH公鑰</h2><p>建立</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>ssh-keygen -t rsa
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>查看</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>cat ~/.ssh/id_rsa.pub
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="_3-在github新增ssh公鑰" tabindex="-1"><a class="header-anchor" href="#_3-在github新增ssh公鑰" aria-hidden="true">#</a> 3.在GitHub新增SSH公鑰</h2><p>頭像 -&gt; <code>Settings</code></p><p>點選<code>SSH and GPG keys</code> -&gt; <code>New SSH key</code></p><p>將建立的公鑰複製貼上</p><p>測試連接 <code>ssh -T git@github.com</code></p><p>連接成功會出現以下訊息</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>Hi user! You&#39;ve successfully authenticated, but GitHub does not provide shell access.
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="_3-推送至遠程商庫" tabindex="-1"><a class="header-anchor" href="#_3-推送至遠程商庫" aria-hidden="true">#</a> 3.推送至遠程商庫</h2><h3 id="_3-1-連接倉庫" tabindex="-1"><a class="header-anchor" href="#_3-1-連接倉庫" aria-hidden="true">#</a> 3.1 連接倉庫</h3><p>連接倉庫 <code>git remote add origin &lt;倉庫路徑&gt;</code></p><p><code>git remote add origin git@github.com:username/git-test.git</code></p><h3 id="_3-2-查看倉庫" tabindex="-1"><a class="header-anchor" href="#_3-2-查看倉庫" aria-hidden="true">#</a> 3.2 查看倉庫</h3><p>查看倉庫 <code>git remote</code></p><h3 id="_3-3-推送分支" tabindex="-1"><a class="header-anchor" href="#_3-3-推送分支" aria-hidden="true">#</a> 3.3 推送分支</h3><p>推送分支 <code>git push [-f] [--set-upstream] origin &lt;本地分支&gt;:&lt;遠程分支&gt;</code></p><p>・如果本地分支與遠程分支相同，可以只寫本地分支</p><p><code>git push origin master</code></p><p>・[-f] 強制覆蓋</p><p>・--set-upstream 推送到遠程的同時建立和遠程分支的關聯</p><p><code>git push --set-upstream origin master</code></p><p>・如果本地和遠程的分支已有關聯</p><p><code>git branch -vv</code> 查看分支關聯</p><p><code>git push</code> 直接推送</p>`,29);function _(m,b){const t=i("ExternalLinkIcon");return s(),r("div",null,[p,l,e("p",null,[a("進入"),e("a",u,[a("GitHub"),n(t)])]),g])}const v=d(h,[["render",_],["__file","03.html.vue"]]);export{v as default};
