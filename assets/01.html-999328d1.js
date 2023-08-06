import{_ as e,p as a,q as n,a1 as s}from"./framework-96b046e1.js";const i="/learning_note/images/interview/01/sql_1.png",d={},r=s(`<h1 id="_01-【-mysql-】" tabindex="-1"><a class="header-anchor" href="#_01-【-mysql-】" aria-hidden="true">#</a> 01 【 MySQL 】</h1><h2 id="_1-如何定位慢查詢" tabindex="-1"><a class="header-anchor" href="#_1-如何定位慢查詢" aria-hidden="true">#</a> 1. 如何定位慢查詢</h2><p>開啟慢日誌功能</p><p>/etc/my.cnf</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>// 開關
slow_query_log = 1

// 設定紀錄檔的位置
slow_query_log_file = /var/log/mysql-slow.log

// 設置SQL語法執行超過2秒，就會視為慢查詢，並記錄至日誌中
log_query_time=2
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="如何分析" tabindex="-1"><a class="header-anchor" href="#如何分析" aria-hidden="true">#</a> 如何分析</h4><p>使EPLAIN 或 DESC 指令</p><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code><span class="token keyword">EXPLAIN</span> <span class="token keyword">SELECT</span> <span class="token operator">*</span> <span class="token keyword">FROM</span> table_name <span class="token keyword">WHERE</span> ?<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><img src="`+i+'" alt="EXPLAIN"></p><p>・ possible_key：目前sql可能會使用到的索引</p><p>・ key：實際使用的索引</p><p>・ key_len：索引占用的大小</p><p>・ Extra：額外的優化建議</p><p>・ type：sql連接的類型，性能 優 到 劣。NULL、system、eq_ref、range、index、all</p><blockquote><p>system</p></blockquote><h2 id="_2-索引" tabindex="-1"><a class="header-anchor" href="#_2-索引" aria-hidden="true">#</a> 2. 索引</h2><h4 id="優點" tabindex="-1"><a class="header-anchor" href="#優點" aria-hidden="true">#</a> 優點</h4><p>・ 索引(index)是幫助MySQL提高獲取資料效率的資料結構(有序)</p><p>・ 提高資料搜尋的效率，降低資料庫的IO成本(不需要全表掃描)</p><p>・ 通過索引對資料進行排序，減少資料排序的成本，減少CPU消耗消耗</p><h4 id="底層" tabindex="-1"><a class="header-anchor" href="#底層" aria-hidden="true">#</a> 底層</h4><p>使用InnoDB採用的B+樹的資料結構儲存索引</p><p>・ 階數更多，路徑更短</p><p>・ 非葉子節點只儲存指針，葉子階段儲存資料。</p><h4 id="建立原則" tabindex="-1"><a class="header-anchor" href="#建立原則" aria-hidden="true">#</a> 建立原則</h4><p>・ 資料量較大，且查詢較頻繁的表</p><p>・ 常做為查詢條件、排序、分組的欄位</p>',27),l=[r];function t(p,c){return a(),n("div",null,l)}const h=e(d,[["render",t],["__file","01.html.vue"]]);export{h as default};