import{_ as e,p as a,q as i,a1 as d}from"./framework-96b046e1.js";const n={},s=d(`<h1 id="【-mysql-】" tabindex="-1"><a class="header-anchor" href="#【-mysql-】" aria-hidden="true">#</a> 【 MySQL 】</h1><h2 id="_1-mysql服務無法啟動" tabindex="-1"><a class="header-anchor" href="#_1-mysql服務無法啟動" aria-hidden="true">#</a> 1. MySQL服務無法啟動</h2><h4 id="錯誤訊息" tabindex="-1"><a class="header-anchor" href="#錯誤訊息" aria-hidden="true">#</a> 錯誤訊息：</h4><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>服務已啟動又停止。有些服務如果並未由其他服務或程式使用，會自動停止
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>cmd：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>The mysql service is starting.
The mysql service could not be started.

The service did not report an error.

More help is available by typing NET HELPMSG 3534.
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="解決方案" tabindex="-1"><a class="header-anchor" href="#解決方案" aria-hidden="true">#</a> 解決方案：</h4><p>・ 以系統管理員身分開啟<code>cmd</code></p><p>・ 執行 <code>mysqld --initialize</code></p>`,9),r=[s];function t(l,c){return a(),i("div",null,r)}const o=e(n,[["render",t],["__file","01.html.vue"]]);export{o as default};
