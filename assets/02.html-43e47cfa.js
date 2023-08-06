import{_ as e}from"./mongodb-edac819e.js";import{_ as a,p as d,q as i,a1 as n}from"./framework-96b046e1.js";const s={},t=n('<h1 id="_02-【-基本指令-】" tabindex="-1"><a class="header-anchor" href="#_02-【-基本指令-】" aria-hidden="true">#</a> 02 【 基本指令 】</h1><h2 id="_1-概念" tabindex="-1"><a class="header-anchor" href="#_1-概念" aria-hidden="true">#</a> 1. 概念</h2><h3 id="資料庫-databese" tabindex="-1"><a class="header-anchor" href="#資料庫-databese" aria-hidden="true">#</a> 資料庫(databese)</h3><p>資料庫是一個倉庫，在倉庫中可以存放集合</p><h3 id="集合-collection" tabindex="-1"><a class="header-anchor" href="#集合-collection" aria-hidden="true">#</a> 集合(collection)</h3><p>集合類似陣列，在集合中可以存放文件</p><h3 id="文件-document" tabindex="-1"><a class="header-anchor" href="#文件-document" aria-hidden="true">#</a> 文件(document)</h3><p>資料庫的最小單位，儲存和操作的內容都是文件</p><p><img src="'+e+`" alt="mongodb"></p><h2 id="_2-基本指令" tabindex="-1"><a class="header-anchor" href="#_2-基本指令" aria-hidden="true">#</a> 2. 基本指令</h2><h3 id="顯示目前所有資料庫" tabindex="-1"><a class="header-anchor" href="#顯示目前所有資料庫" aria-hidden="true">#</a> 顯示目前所有資料庫</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>show dbs
show databases
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="進入指定的資料庫" tabindex="-1"><a class="header-anchor" href="#進入指定的資料庫" aria-hidden="true">#</a> 進入指定的資料庫</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>use 資料庫名
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="顯示目前所在的資料庫" tabindex="-1"><a class="header-anchor" href="#顯示目前所在的資料庫" aria-hidden="true">#</a> 顯示目前所在的資料庫</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>db
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="顯示資料庫中所有的集合" tabindex="-1"><a class="header-anchor" href="#顯示資料庫中所有的集合" aria-hidden="true">#</a> 顯示資料庫中所有的集合</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>show collections
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="_3-資料庫crud操作" tabindex="-1"><a class="header-anchor" href="#_3-資料庫crud操作" aria-hidden="true">#</a> 3. 資料庫CRUD操作</h2><h3 id="_1-insert" tabindex="-1"><a class="header-anchor" href="#_1-insert" aria-hidden="true">#</a> 1. insert()</h3><blockquote><p>向資料庫插入文件</p></blockquote><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>db.collections.insert(doc)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>舉例：向 test 資料庫中的 stus 集合插入一個學生物件</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>db.stus.insert({name: &quot;name&quot;,age: 18, gender:&quot;男&quot;})
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="_2-find" tabindex="-1"><a class="header-anchor" href="#_2-find" aria-hidden="true">#</a> 2. find()</h3><h4 id="_1-find" tabindex="-1"><a class="header-anchor" href="#_1-find" aria-hidden="true">#</a> 1. find()</h4><blockquote><p>查詢集合中所有符合條件的文件，可以接收一個物件作為參數，返回陣列</p></blockquote><p>查詢目前集合中的所有文件</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>db.collections.find()
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>查詢屬性是指定值的文件</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>db.collections.find({屬性: &quot;值&quot;})
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>舉例：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>db.stu.find({name: &quot;name&quot;})
db.stu.find({age: 28})
db.stu.find({age: 28, name: &quot;name&quot;})
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_2-findone" tabindex="-1"><a class="header-anchor" href="#_2-findone" aria-hidden="true">#</a> 2. findOne()</h4><blockquote><p>查詢符合條件的第一個文件，返回物件</p></blockquote><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>db.collections.findOne({屬性: &quot;值&quot;})
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h4 id="_3-find-count-、find-length" tabindex="-1"><a class="header-anchor" href="#_3-find-count-、find-length" aria-hidden="true">#</a> 3. find().count()、find().length()</h4><blockquote><p>查詢文件的數量</p></blockquote><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>db.collections.find().count()
db.collections.find().length()
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_3-update" tabindex="-1"><a class="header-anchor" href="#_3-update" aria-hidden="true">#</a> 3. update()</h3><blockquote><p>替換，默認會使用新物件替換舊物件；如果需要修改指定的屬性而不是替換，必須使用修改操作符</p></blockquote><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>db.collections.update(查詢條件, 新物件)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>舉例：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>db.stus.update({name:&quot;name&quot;},{age:10});
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h4 id="_1-修改操作符" tabindex="-1"><a class="header-anchor" href="#_1-修改操作符" aria-hidden="true">#</a> 1. 修改操作符</h4><blockquote><p>默認只會修改第一個</p></blockquote><p>・ $set：修改文件中指定的屬性</p><p>・ $unset：刪除文件中指定的屬性</p><p>舉例：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>db.stus.update(
    {&quot;_id&quot;: ObjectId(&quot;63ce81e94f201e4ca3769b91&quot;)},
    {
        $set:{ // 會新增該屬性
            name: &quot;name2&quot;,
            address: &quot;address2&quot;
        }
    });
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>db.stus.update(
    {&quot;_id&quot;: ObjectId(&quot;63ce81e94f201e4ca3769b91&quot;)},
    {
        $unset:{ // 會刪除該屬性
            address: &quot;address2&quot;
            }
    });
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_2-db-collection-updatemany" tabindex="-1"><a class="header-anchor" href="#_2-db-collection-updatemany" aria-hidden="true">#</a> 2. db.collection.updateMany()</h4><blockquote><p>修改多個符合條件的文件</p></blockquote><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>db.stus.updateMany(
    {&quot;name&quot;: &quot;name&quot;},
    {
        $unset:{
            address: &quot;address&quot;
        }
    });
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_3-db-collection-updateone" tabindex="-1"><a class="header-anchor" href="#_3-db-collection-updateone" aria-hidden="true">#</a> 3. db.collection.updateOne()</h4><blockquote><p>只修改一個</p></blockquote><h4 id="_4-update-參數" tabindex="-1"><a class="header-anchor" href="#_4-update-參數" aria-hidden="true">#</a> 4. update()參數</h4><p>舉例：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>db.stus.updateMany(
    {&quot;name&quot;: &quot;name&quot;},
    {
        $unset:{
            address: &quot;address&quot;
    },
    {
        mulit: true // 修改多個
    }
    });
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_4-remove" tabindex="-1"><a class="header-anchor" href="#_4-remove" aria-hidden="true">#</a> 4. remove()</h3><blockquote><p>默認刪除符合條件的所有文件，參數傳遞方式與find()相同，必須傳入參數</p></blockquote><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>db.collection.remove(參數)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>舉例：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>db.stu.remove({_id:&quot;hello&quot;})
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h4 id="_1-參數" tabindex="-1"><a class="header-anchor" href="#_1-參數" aria-hidden="true">#</a> 1. 參數</h4><p>舉例：設置只刪除一個</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>db.stu.remove({_id:&quot;hello&quot;},  true)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h4 id="_2-刪除" tabindex="-1"><a class="header-anchor" href="#_2-刪除" aria-hidden="true">#</a> 2. 刪除</h4><h5 id="刪除所有" tabindex="-1"><a class="header-anchor" href="#刪除所有" aria-hidden="true">#</a> 刪除所有</h5><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>// 會先尋找符合條件再進行刪除，效率低
db.collection.remove({})
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h5 id="刪除集合" tabindex="-1"><a class="header-anchor" href="#刪除集合" aria-hidden="true">#</a> 刪除集合</h5><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>// 直接刪除
db.collection.drop()
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h5 id="刪除資料庫" tabindex="-1"><a class="header-anchor" href="#刪除資料庫" aria-hidden="true">#</a> 刪除資料庫</h5><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>db.dropdatebase()
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="_3-其他" tabindex="-1"><a class="header-anchor" href="#_3-其他" aria-hidden="true">#</a> 3. 其他</h3><p>db.collection.deleteOne()</p><p>db.collection.deleteMany()</p><div class="custom-container tip"><p class="custom-container-title">提示</p><p>一般而言不會將資料庫的資料刪除，而是會在資料中新增一個字段來表示資料是否被刪除</p></div><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>db.stu.insert([
    {
        name: &quot;name1&quot;,
        isDel: 0 // 表示刪除狀態
    },
    {
        name: &quot;name2&quot;,
        isDel: 1 // 表示未刪除狀態
    }
])
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>https://www.bilibili.com/video/BV18s411E78K?p=10</p>`,80),l=[t];function r(c,u){return d(),i("div",null,l)}const h=a(s,[["render",r],["__file","02.html.vue"]]);export{h as default};
