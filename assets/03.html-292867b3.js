import{_ as e,p as i,q as n,a1 as d}from"./framework-96b046e1.js";const s={},a=d(`<h1 id="_03-【使用】" tabindex="-1"><a class="header-anchor" href="#_03-【使用】" aria-hidden="true">#</a> 03 【使用】</h1><p>基本資料型態</p><h2 id="_1-string" tabindex="-1"><a class="header-anchor" href="#_1-string" aria-hidden="true">#</a> 1. String</h2><p><code>APPEND key &quot;value&quot;</code>： 追加字串</p><p><code>STRLEN key</code>：取得字串長度</p><p><code>incr key</code>：自增1</p><p><code>decr key</code>：自減1</p><p><code>decr key 10</code>：指定增加10</p><p><code>decr key 10</code>：指定減少10</p><p><code>GETRANGE</code>：擷取字串</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>set key &quot;hello&quot;
GETRANGE key 0 3 

// 擷取0到3的字串
// hell
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>set key &quot;hello&quot;
GETRANGE key 0 -1

// 擷取全部字串
// hello
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><code>SETRANGEx</code>：替換</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>set key &quot;abcd&quot;
SETRANGE key 1 xx

// axxd
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><code>setex</code>：設置過期時間</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>// 設定30秒後過期，字串為hello
setex key 30 &quot;hello&quot;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p><code>setnx</code>：不存在則建立</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>set key redis
setnx key &quot;mongodb&quot;
// 0 (表示已存在，不會再設置)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><code>mset</code>：設置多個key</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>mset k1 v1 k2 v2 k3 v3
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><code>mget</code>：取得多個key</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>mget k1 k2 k3
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><code>msetnx</code>：不存在則建立，其中一個存在則不會建立</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>msetnx k1 v1 k4 v4

// 此時k1已經存在，k4不會設置
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><code>mset user:{id}:filed</code>：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>mset user:1:name tom user:1:age 18
mget user:1:name user:1:age
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p><code>getset</code>：如果值不存在，返回nil。存在，則設置值</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>getset db redis
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="_2-list" tabindex="-1"><a class="header-anchor" href="#_2-list" aria-hidden="true">#</a> 2. List</h2><h3 id="_1-lpush" tabindex="-1"><a class="header-anchor" href="#_1-lpush" aria-hidden="true">#</a> 1. LPUSH</h3><h4 id="將一個值或多個值-插入到列表頭部-左" tabindex="-1"><a class="header-anchor" href="#將一個值或多個值-插入到列表頭部-左" aria-hidden="true">#</a> 將一個值或多個值，插入到列表頭部(左)</h4><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>127.0.0.1:6379&gt; LPUSH list one
(integer) 1
127.0.0.1:6379&gt; LPUSH list two
(integer) 2
127.0.0.1:6379&gt; LPUSH list three
(integer) 3
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_2-lrange" tabindex="-1"><a class="header-anchor" href="#_2-lrange" aria-hidden="true">#</a> 2. LRANGE</h3><h4 id="取得list中的值" tabindex="-1"><a class="header-anchor" href="#取得list中的值" aria-hidden="true">#</a> 取得list中的值</h4><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>127.0.0.1:6379&gt; LRANGE list 0 -1
1) &quot;three&quot;
2) &quot;two&quot;
3) &quot;one&quot;
127.0.0.1:6379&gt; LRANGE list 0 1
1) &quot;three&quot;
2) &quot;two&quot;
127.0.0.1:6379&gt; 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_3-rpush" tabindex="-1"><a class="header-anchor" href="#_3-rpush" aria-hidden="true">#</a> 3. RPUSH</h3><h4 id="將一個值或多個值-插入到列表尾部-右" tabindex="-1"><a class="header-anchor" href="#將一個值或多個值-插入到列表尾部-右" aria-hidden="true">#</a> 將一個值或多個值，插入到列表尾部(右)</h4><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>127.0.0.1:6379&gt; RPUSH list right
(integer) 4
127.0.0.1:6379&gt; LRANGE list 0 -1
1) &quot;three&quot;
2) &quot;two&quot;
3) &quot;one&quot;
4) &quot;right&quot;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_4-lpop" tabindex="-1"><a class="header-anchor" href="#_4-lpop" aria-hidden="true">#</a> 4. Lpop</h3><h4 id="_1-移除list的第一個元素" tabindex="-1"><a class="header-anchor" href="#_1-移除list的第一個元素" aria-hidden="true">#</a> 1. 移除list的第一個元素</h4><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>127.0.0.1:6379&gt; Lpop list
&quot;three&quot;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_2-移除list的最後一個元素" tabindex="-1"><a class="header-anchor" href="#_2-移除list的最後一個元素" aria-hidden="true">#</a> 2. 移除list的最後一個元素</h4><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>127.0.0.1:6379&gt; Rpop list
&quot;right&quot;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>127.0.0.1:6379&gt; LRANGE list 0 -1
1) &quot;two&quot;
2) &quot;one&quot;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_5-lindex" tabindex="-1"><a class="header-anchor" href="#_5-lindex" aria-hidden="true">#</a> 5. lindex</h3><h4 id="取得list中的某一個值" tabindex="-1"><a class="header-anchor" href="#取得list中的某一個值" aria-hidden="true">#</a> 取得list中的某一個值</h4><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>127.0.0.1:6379&gt; lindex list 1
&quot;one&quot;
127.0.0.1:6379&gt; lindex list 0
&quot;two&quot;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_6-llen" tabindex="-1"><a class="header-anchor" href="#_6-llen" aria-hidden="true">#</a> 6. Llen</h3><h4 id="返回list的長度" tabindex="-1"><a class="header-anchor" href="#返回list的長度" aria-hidden="true">#</a> 返回list的長度</h4><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>127.0.0.1:6379&gt; LPUSH list one
(integer) 1
127.0.0.1:6379&gt; LPUSH list two
(integer) 2
127.0.0.1:6379&gt; LPUSH list three
(integer) 3

127.0.0.1:6379&gt; Llen list
(integer) 3
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_7-lrem" tabindex="-1"><a class="header-anchor" href="#_7-lrem" aria-hidden="true">#</a> 7. Lrem</h3><p>移除list集合中指定的value</p><h4 id="_1-移除1個one" tabindex="-1"><a class="header-anchor" href="#_1-移除1個one" aria-hidden="true">#</a> 1. 移除1個one</h4><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>127.0.0.1:6379&gt; LPUSH list one
(integer) 1
127.0.0.1:6379&gt; LPUSH list two
(integer) 2
127.0.0.1:6379&gt; LPUSH list three
(integer) 3
127.0.0.1:6379&gt; Llen list
(integer) 3
127.0.0.1:6379&gt; LPUSH list three
(integer) 4
127.0.0.1:6379&gt; LRANGE list 0 -1
1) &quot;three&quot;
2) &quot;three&quot;
3) &quot;two&quot;
4) &quot;one&quot;

127.0.0.1:6379&gt; Lrem list 1 one
(integer) 1
127.0.0.1:6379&gt; LRANGE list 0 -1
1) &quot;three&quot;
2) &quot;three&quot;
3) &quot;two&quot;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_2-移除1個three" tabindex="-1"><a class="header-anchor" href="#_2-移除1個three" aria-hidden="true">#</a> 2. 移除1個three</h4><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>127.0.0.1:6379&gt; Lrem list 1 three
(integer) 1
127.0.0.1:6379&gt; LPUSH list three
(integer) 3
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_3-移除2個three" tabindex="-1"><a class="header-anchor" href="#_3-移除2個three" aria-hidden="true">#</a> 3. 移除2個three</h4><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>127.0.0.1:6379&gt; Lrem list 2 three
(integer) 2
127.0.0.1:6379&gt; LRANGE list 0 -1
1) &quot;two&quot;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_8-ltrim" tabindex="-1"><a class="header-anchor" href="#_8-ltrim" aria-hidden="true">#</a> 8. ltrim</h3><h4 id="擷取指定的長度" tabindex="-1"><a class="header-anchor" href="#擷取指定的長度" aria-hidden="true">#</a> 擷取指定的長度</h4><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>127.0.0.1:6379&gt; Rpush list &quot;hello&quot;
(integer) 1
127.0.0.1:6379&gt; Rpush list &quot;hello1&quot;
(integer) 2
127.0.0.1:6379&gt; Rpush list &quot;hello2&quot;
(integer) 3
127.0.0.1:6379&gt; Rpush list &quot;hello3&quot;
(integer) 4

127.0.0.1:6379&gt; ltrim list 1 2
OK
127.0.0.1:6379&gt; LRANGE list 0 -1
1) &quot;hello1&quot;
2) &quot;hello2&quot;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_9-rpoplpush" tabindex="-1"><a class="header-anchor" href="#_9-rpoplpush" aria-hidden="true">#</a> 9. rpoplpush</h3><h4 id="移除列表的最後一個元素-移動到新的列表" tabindex="-1"><a class="header-anchor" href="#移除列表的最後一個元素-移動到新的列表" aria-hidden="true">#</a> 移除列表的最後一個元素，移動到新的列表</h4><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>127.0.0.1:6379&gt; Rpush list &quot;hello&quot;
(integer) 1
127.0.0.1:6379&gt; Rpush list &quot;hello1&quot;
(integer) 2
127.0.0.1:6379&gt; Rpush list &quot;hello2&quot;
(integer) 3


127.0.0.1:6379&gt; rpoplpush list otherlist
&quot;hello2&quot;
127.0.0.1:6379&gt; LRANGE list 0 -1
1) &quot;hello&quot;
2) &quot;hello1&quot;
127.0.0.1:6379&gt; LRANGE otherlist 0 -1
1) &quot;hello2&quot;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_10-lset" tabindex="-1"><a class="header-anchor" href="#_10-lset" aria-hidden="true">#</a> 10. lset</h3><p>將列表中指定下標的值替換為另外一個值</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>// 1. 判斷列表是否存在
127.0.0.1:6379&gt; EXISTS list
(integer) 0

// 2. 不存在的話更新就會報錯
127.0.0.1:6379&gt; lset list 0 item
(error) ERR no such key
127.0.0.1:6379&gt; lpush list value1
(integer) 1
127.0.0.1:6379&gt; LRANGE list 0 0
1) &quot;value1&quot;

// 3. 如果存在就會更新
127.0.0.1:6379&gt; lset list 0 item
OK
127.0.0.1:6379&gt; LRANGE list 0 0
1) &quot;item&quot;

// 4. 不存在的話更新就會報錯
127.0.0.1:6379&gt; lset list 1 other
(error) ERR index out of range
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_11-linsert" tabindex="-1"><a class="header-anchor" href="#_11-linsert" aria-hidden="true">#</a> 11. LINSERT</h3><p>將某個具體的value插入列表中的某個元素的前面或後面</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>127.0.0.1:6379&gt; Rpush list &quot;hello&quot;
(integer) 1
127.0.0.1:6379&gt; Rpush list &quot;world&quot;
(integer) 2

127.0.0.1:6379&gt; LINSERT list before &quot;world&quot; &quot;other&quot;
(integer) 3
127.0.0.1:6379&gt; LRANGE list 0 -1
1) &quot;hello&quot;
2) &quot;other&quot;
3) &quot;world&quot;
127.0.0.1:6379&gt; LINSERT list after world new
(integer) 4
127.0.0.1:6379&gt; LRANGE list 0 -1
1) &quot;hello&quot;
2) &quot;other&quot;
3) &quot;world&quot;
4) &quot;new&quot;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_12-總結" tabindex="-1"><a class="header-anchor" href="#_12-總結" aria-hidden="true">#</a> 12. 總結</h3><p>・ 實際上是一個鏈表，before Node after，left，right都可插入值</p><p>・ 如果key不存在，建立新的鏈表</p><p>・ 如果key存在，新增內容</p><p>・ 如果移除了所有值，空鏈表，也代表不存在</p><p>・ 在兩邊插入或改動值，效率最高。中間元素，相對效率較低</p><h2 id="_3-set-集合" tabindex="-1"><a class="header-anchor" href="#_3-set-集合" aria-hidden="true">#</a> 3. Set(集合)</h2><p>Set中的值不能重複</p><h3 id="_1-sadd" tabindex="-1"><a class="header-anchor" href="#_1-sadd" aria-hidden="true">#</a> 1. sadd</h3><p>set集合中增加元素</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>127.0.0.1:6379&gt; sadd set &quot;hello&quot;
(integer) 1
127.0.0.1:6379&gt; sadd set &quot;world&quot;
(integer) 1
127.0.0.1:6379&gt; sadd set &quot;!!!&quot;
(integer) 1
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_2-smembers" tabindex="-1"><a class="header-anchor" href="#_2-smembers" aria-hidden="true">#</a> 2. SMEMBERS</h3><p>查看set集合中的所有值</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>127.0.0.1:6379&gt; SMEMBERS set
1) &quot;!!!&quot;
2) &quot;world&quot;
3) &quot;hello&quot;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_3-sismember" tabindex="-1"><a class="header-anchor" href="#_3-sismember" aria-hidden="true">#</a> 3. SISMEMBER</h3><p>判斷set集合中是否有某一個值</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>127.0.0.1:6379&gt; SISMEMBER set hello
(integer) 1
127.0.0.1:6379&gt; SISMEMBER set world
(integer) 1
127.0.0.1:6379&gt; SISMEMBER set !!!
(integer) 1
127.0.0.1:6379&gt; SISMEMBER set !!!!
(integer) 0
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_4-scard" tabindex="-1"><a class="header-anchor" href="#_4-scard" aria-hidden="true">#</a> 4. scard</h3><p>取得set集合中元素的個數</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>127.0.0.1:6379&gt; scard set
(integer) 3
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_5-srem" tabindex="-1"><a class="header-anchor" href="#_5-srem" aria-hidden="true">#</a> 5. srem</h3><p>移除set集合中的指定元素</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>127.0.0.1:6379&gt; srem set hello
(integer) 1
127.0.0.1:6379&gt; scard set
(integer) 2
127.0.0.1:6379&gt; SMEMBERS set
1) &quot;!!!&quot;
2) &quot;world&quot;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>set集合：無序、值不重複</p></blockquote><h3 id="_6-srandmember" tabindex="-1"><a class="header-anchor" href="#_6-srandmember" aria-hidden="true">#</a> 6. SRANDMEMBER</h3><h4 id="_1-隨機抽出set集合中的-1-個元素" tabindex="-1"><a class="header-anchor" href="#_1-隨機抽出set集合中的-1-個元素" aria-hidden="true">#</a> 1. 隨機抽出set集合中的 1 個元素</h4><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>127.0.0.1:6379&gt; SMEMBERS list
1) &quot;!!!&quot;
2) &quot;world&quot;

127.0.0.1:6379&gt; SRANDMEMBER list
&quot;!!!&quot;
127.0.0.1:6379&gt; SRANDMEMBER list
&quot;world&quot;
127.0.0.1:6379&gt; SRANDMEMBER list
&quot;!!!&quot;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_2-隨機抽出set集合中的-2-個元素" tabindex="-1"><a class="header-anchor" href="#_2-隨機抽出set集合中的-2-個元素" aria-hidden="true">#</a> 2. 隨機抽出set集合中的 2 個元素</h4><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>127.0.0.1:6379&gt; SRANDMEMBER list 2
1) &quot;!!!&quot;
2) &quot;world&quot;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_7-spop" tabindex="-1"><a class="header-anchor" href="#_7-spop" aria-hidden="true">#</a> 7. spop</h3><p>隨機移除元素</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>127.0.0.1:6379&gt; SMEMBERS set
1) &quot;d&quot;
2) &quot;c&quot;
3) &quot;b&quot;
4) &quot;a&quot;
127.0.0.1:6379&gt; spop set
&quot;d&quot;
127.0.0.1:6379&gt; spop set
&quot;b&quot;
127.0.0.1:6379&gt; SMEMBERS set
1) &quot;c&quot;
2) &quot;a&quot; 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_8-smove" tabindex="-1"><a class="header-anchor" href="#_8-smove" aria-hidden="true">#</a> 8. smove</h3><p>將一個指定的值，移動到指定的set集合中</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>127.0.0.1:6379&gt; sadd set &quot;hello&quot;
(integer) 1
127.0.0.1:6379&gt; sadd set &quot;world&quot;
(integer) 1
127.0.0.1:6379&gt; sadd set &quot;!!!!&quot;
(integer) 1
127.0.0.1:6379&gt; sadd set2 &quot;set2&quot;
(integer) 1
127.0.0.1:6379&gt; smove set set2 hello
(integer) 1
127.0.0.1:6379&gt; SMEMBERS set
1) &quot;!!!!&quot;
2) &quot;world&quot;
127.0.0.1:6379&gt; SMEMBERS set2
1) &quot;set2&quot;
2) &quot;hello&quot;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_9-sdiff" tabindex="-1"><a class="header-anchor" href="#_9-sdiff" aria-hidden="true">#</a> 9. SDIFF</h3><p>查看集合中不同的值</p><div class="language-127.0.0.1 line-numbers-mode" data-ext="127.0.0.1"><pre class="language-127.0.0.1"><code>(integer) 1
127.0.0.1:6379&gt; sadd key1 b
(integer) 1
127.0.0.1:6379&gt; sadd key1 c
(integer) 1
127.0.0.1:6379&gt; sadd key2 c
(integer) 1
127.0.0.1:6379&gt; sadd key2 d
(integer) 1
127.0.0.1:6379&gt; sadd key2 e
(integer) 1

127.0.0.1:6379&gt; SDIFF key1 key2
1) &quot;a&quot;
2) &quot;b&quot;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_10-sinter" tabindex="-1"><a class="header-anchor" href="#_10-sinter" aria-hidden="true">#</a> 10. SINTER</h3><p>查看集合中相同的值</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>127.0.0.1:6379&gt; SINTER key1 key2
1) &quot;c&quot;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_11-sunion" tabindex="-1"><a class="header-anchor" href="#_11-sunion" aria-hidden="true">#</a> 11. SUNION</h3><p>查看所有集合中所有的值</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>127.0.0.1:6379&gt; SUNION key1 key2
1) &quot;c&quot;
2) &quot;a&quot;
3) &quot;b&quot;
4) &quot;d&quot;
5) &quot;e&quot;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>A用戶將所有關注的人放在一個set集合中，它的粉絲也放在一個集合中</p><p>共同關注、共同愛好</p></blockquote><h2 id="_4-hash" tabindex="-1"><a class="header-anchor" href="#_4-hash" aria-hidden="true">#</a> 4. HASH</h2><p>Map集合、key-Map集合</p><p>本質與String類型沒有太大區別，還是一個key-value</p><h3 id="_1-hset" tabindex="-1"><a class="header-anchor" href="#_1-hset" aria-hidden="true">#</a> 1. hset</h3><p>set一個具體key-value</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>127.0.0.1:6379&gt; hset myhash field1 hash1
(integer) 1
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_2-hget" tabindex="-1"><a class="header-anchor" href="#_2-hget" aria-hidden="true">#</a> 2. hget</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>127.0.0.1:6379&gt; hget myhash field1 # 取得一個值
&quot;hash1&quot;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_3-hmset" tabindex="-1"><a class="header-anchor" href="#_3-hmset" aria-hidden="true">#</a> 3. hmset</h3><p>set多個具體key-value</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>127.0.0.1:6379&gt;  myhash field hello field2 world #
OK
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_4-hmget" tabindex="-1"><a class="header-anchor" href="#_4-hmget" aria-hidden="true">#</a> 4. hmget</h3><p>取得多個值</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>127.0.0.1:6379&gt; hmget myhash field1 field2 # 
1) &quot;hash1&quot;
2) &quot;world&quot;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_5-hgetall" tabindex="-1"><a class="header-anchor" href="#_5-hgetall" aria-hidden="true">#</a> 5. hgetall</h3><p>取得所有值</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>127.0.0.1:6379&gt; hgetall myhash
1) &quot;field1&quot;
2) &quot;hash1&quot;
3) &quot;field&quot;
4) &quot;hello&quot;
5) &quot;field2&quot;
6) &quot;world&quot;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_6-hdel" tabindex="-1"><a class="header-anchor" href="#_6-hdel" aria-hidden="true">#</a> 6. hdel</h3><p>刪除指定的值</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>127.0.0.1:6379&gt; hdel myhash field1
(integer) 1
127.0.0.1:6379&gt; hgetall myhash
1) &quot;field&quot;
2) &quot;hello&quot;
3) &quot;field2&quot;
4) &quot;world&quot;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_7-hlen" tabindex="-1"><a class="header-anchor" href="#_7-hlen" aria-hidden="true">#</a> 7. hlen</h3><p>取得hash表的字段數量</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>127.0.0.1:6379&gt; hgetall myhash
1) &quot;field&quot;
2) &quot;hello&quot;
3) &quot;field2&quot;
4) &quot;world&quot;
127.0.0.1:6379&gt; hlen myhash
(integer) 2
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_8-hexists" tabindex="-1"><a class="header-anchor" href="#_8-hexists" aria-hidden="true">#</a> 8. HEXISTS</h3><p>判斷字段是否存在</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>127.0.0.1:6379&gt; HEXISTS myhash field1
(integer) 0
127.0.0.1:6379&gt; HEXISTS myhash field2
(integer) 1
127.0.0.1:6379&gt; HEXISTS myhash field3
(integer) 0
127.0.0.1:6379&gt; HEXISTS myhash field
(integer) 1
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_9-hkeys" tabindex="-1"><a class="header-anchor" href="#_9-hkeys" aria-hidden="true">#</a> 9. hkeys</h3><p>取得所有key</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>127.0.0.1:6379&gt; hkeys myhash
1) &quot;field&quot;
2) &quot;field2&quot;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_10-hvals" tabindex="-1"><a class="header-anchor" href="#_10-hvals" aria-hidden="true">#</a> 10. hvals</h3><p>取得所有value</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>127.0.0.1:6379&gt; hvals myhash
1) &quot;hello&quot;
2) &quot;world&quot;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_11-hincrby、decrby" tabindex="-1"><a class="header-anchor" href="#_11-hincrby、decrby" aria-hidden="true">#</a> 11. HINCRBY、DECRBY</h3><p>指定增減量</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>127.0.0.1:6379&gt; hset myhash field3 5
(integer) 1
127.0.0.1:6379&gt; HINCRBY myhash field3 1
(integer) 6
127.0.0.1:6379&gt; HINCRBY myhash field3 -1
(integer) 5
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_12-hsetnx" tabindex="-1"><a class="header-anchor" href="#_12-hsetnx" aria-hidden="true">#</a> 12. hsetnx</h3><p>判斷是否存在，不存在則新增設置</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>127.0.0.1:6379&gt; hsetnx myhash field4 hello
(integer) 1
127.0.0.1:6379&gt; hsetnx myhash field4 hello
(integer) 0
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_13-物件" tabindex="-1"><a class="header-anchor" href="#_13-物件" aria-hidden="true">#</a> 13. 物件</h3><p>Hash適合儲存經常變更的資料</p><p>Hash適合物件的儲存</p><p>String適合字串的儲存</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>127.0.0.1:6379&gt; hset user:1 name redis
(integer) 1
127.0.0.1:6379&gt; hget user:1 name
&quot;redis&quot;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_5-zset" tabindex="-1"><a class="header-anchor" href="#_5-zset" aria-hidden="true">#</a> 5. Zset</h2><p>在set的基礎上，增加了一個值</p><h2 id="_1-zadd" tabindex="-1"><a class="header-anchor" href="#_1-zadd" aria-hidden="true">#</a> 1. zadd</h2><p>增加值</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>// 增加一個值
127.0.0.1:6379&gt; zadd myset 1 one
(integer) 1

// 增加多個值
127.0.0.1:6379&gt; zadd myset 2 two 3 three
(integer) 2
127.0.0.1:6379&gt; ZRANGE myset 0 -1
1) &quot;one&quot;
2) &quot;two&quot;
3) &quot;three&quot;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_2-zrangebyscore" tabindex="-1"><a class="header-anchor" href="#_2-zrangebyscore" aria-hidden="true">#</a> 2. ZRANGEBYSCORE</h2><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>127.0.0.1:6379&gt; zadd salary 2500 A
(integer) 1
127.0.0.1:6379&gt; zadd salary 5000 B
(integer) 1
127.0.0.1:6379&gt; zadd salary 1000 C
(integer) 1

// 從小到大排序
127.0.0.1:6379&gt; ZRANGEBYSCORE salary -inf +inf
1) &quot;C&quot;
2) &quot;A&quot;
3) &quot;B&quot;

// 從大到小排序
127.0.0.1:6379&gt; zrevrange salary 0 -1
1) &quot;B&quot;
2) &quot;C&quot;
127.0.0.1:6379&gt; 

// 從小到大排序，附帶scores
127.0.0.1:6379&gt; ZRANGEBYSCORE salary -inf +inf withscores
1) &quot;C&quot;
2) &quot;1000&quot;
3) &quot;A&quot;
4) &quot;2500&quot;
5) &quot;B&quot;
6) &quot;5000&quot;

// 小於2500的降序排列
127.0.0.1:6379&gt; ZRANGEBYSCORE salary -inf 2500 withscores
1) &quot;C&quot;
2) &quot;1000&quot;
3) &quot;A&quot;
4) &quot;2500&quot;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_3-zrem" tabindex="-1"><a class="header-anchor" href="#_3-zrem" aria-hidden="true">#</a> 3. zrem</h3><p>移除元素</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>127.0.0.1:6379&gt; zrange salary 0 -1
1) &quot;C&quot;
2) &quot;A&quot;
3) &quot;B&quot;
127.0.0.1:6379&gt; zrem salary A
(integer) 1
127.0.0.1:6379&gt; zrange salary 0 -1
1) &quot;C&quot;
2) &quot;B&quot;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_4-zcard" tabindex="-1"><a class="header-anchor" href="#_4-zcard" aria-hidden="true">#</a> 4. zcard</h3><p>取得集合中的個數</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>127.0.0.1:6379&gt; zcard salary
(integer) 2
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_5-zcount" tabindex="-1"><a class="header-anchor" href="#_5-zcount" aria-hidden="true">#</a> 5. zcount</h3><p>取得指定區間的成員數量</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>127.0.0.1:6379&gt; zadd myset 1 hello
(integer) 1
127.0.0.1:6379&gt; zadd myset 2 world 3 !!!!!
(integer) 2
127.0.0.1:6379&gt; zcount myset 1 3
(integer) 3
127.0.0.1:6379&gt; zcount myset 1 2
(integer) 2
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,174),l=[a];function t(r,u){return i(),n("div",null,l)}const c=e(s,[["render",t],["__file","03.html.vue"]]);export{c as default};
