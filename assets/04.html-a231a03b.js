import{_ as e,p as n,q as i,a1 as d}from"./framework-96b046e1.js";const s={},a=d(`<h1 id="_04-【-文件之間的關係-】" tabindex="-1"><a class="header-anchor" href="#_04-【-文件之間的關係-】" aria-hidden="true">#</a> 04 【 文件之間的關係 】</h1><p>・ 一對一(ont to one)</p><p>・ 一對多(one to many) / 多對一(many to one)</p><p>・ 多對多(many to many)</p><h2 id="_1-一對一" tabindex="-1"><a class="header-anchor" href="#_1-一對一" aria-hidden="true">#</a> 1. 一對一</h2><p>・ 夫妻(一個丈夫對應一個妻子)</p><blockquote><p>在MongoDB可以通過內嵌文件的形式來體現一對一的關係</p></blockquote><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>db.wifeAndHusband.inser([
    {
        name: &quot;wifeA&quot;,
        husband: {
            name: &quot;husbandA&quot;
        }
    },
    {
        name: &quot;wifeB&quot;,
        husband: {
            name: &quot;husbandB&quot;
        }
    }
])
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_2-一對多-多對一" tabindex="-1"><a class="header-anchor" href="#_2-一對多-多對一" aria-hidden="true">#</a> 2. 一對多 / 多對一</h2><p>・ 父母 — 孩子</p><p>・ 使用者 — 訂單</p><p>・ 文章 — 評論</p><blockquote><p>也可以通過內嵌文件來映射一對多的關係</p></blockquote><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>db.users.insert([
    {
        username: &quot;user1&quot;,
    },
    {
        username: &quot;user2&quot;,
    }
])

db.order.insert([
    {
        list:[&quot;goods1&quot;, &quot;goods2&quot;, &quot;goods3&quot;],
        user_id:ObjectId(&quot;63d140ed9e96c4b5930c7458&quot;) // 設定關聯
    }
])
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>查詢user1的訂單</p></blockquote><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>var user_id = db.users.findOne({username:&quot;user1&quot;})._id
db.order.find({user_id:user_id})
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_3-多對多" tabindex="-1"><a class="header-anchor" href="#_3-多對多" aria-hidden="true">#</a> 3. 多對多</h2><p>・ 分類 — 商品(一個商品有多個分類，一個分類有多個商品)</p><p>・ 老師 — 學生</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>db.teacher.insert([
    {
        name: &quot;teacherA&quot;
    },
    {
        name: &quot;teacherB&quot;
    },
    {
        name: &quot;teacherC&quot;
    }
])

db.stus.insert([
    {
        name: &quot;studentA&quot;,
        tech_ids:[
            ObjectId(63d1433c9e96c4b5930c745a),
            ObjectId(63d1433c9e96c4b5930c745b),
            ObjectId(63d1433c9e96c4b5930c745c),
        ]
    },
    {
        name: &quot;studentB&quot;,
        tech_ids:[
            ObjectId(63d1433c9e96c4b5930c745a),
            ObjectId(63d1433c9e96c4b5930c745c),
        ]
    }
])

db.stus.find()
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,20),l=[a];function u(r,c){return n(),i("div",null,l)}const t=e(s,[["render",u],["__file","04.html.vue"]]);export{t as default};
