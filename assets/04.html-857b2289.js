import{_ as i,M as s,p as r,q as l,R as e,t as a,N as t,a1 as d}from"./framework-96b046e1.js";const c={},o=d(`<h1 id="【-部屬相關-】" tabindex="-1"><a class="header-anchor" href="#【-部屬相關-】" aria-hidden="true">#</a> 【 部屬相關 】</h1><h2 id="_1-heroku部署vue專案出現錯誤訊息" tabindex="-1"><a class="header-anchor" href="#_1-heroku部署vue專案出現錯誤訊息" aria-hidden="true">#</a> 1. Heroku部署vue專案出現錯誤訊息</h2><h3 id="_1-1-sh-1-vue-cli-service-not-found" tabindex="-1"><a class="header-anchor" href="#_1-1-sh-1-vue-cli-service-not-found" aria-hidden="true">#</a> 1.1 sh: 1: vue-cli-service: not found</h3><p>錯誤：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>sh: 1: vue-cli-service: not found
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>解決：在 <code>package.json</code> 修改環境變數</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>&quot;scripts&quot;: {
    &quot;postinstall&quot;: &quot;NODE_ENV=development &amp;&amp; npm run client-install &amp;&amp; npm run client-build &amp;&amp; NODE_ENV=production&quot;,
  },
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,7),u={href:"https://blog.csdn.net/mouday/article/details/104864106/?ops_request_misc=&request_id=&biz_id=102&utm_term=vue%20heroku&utm_medium=distribute.pc_search_result.none-task-blog-2~all~sobaiduweb~default-0-104864106.pc_v2_rank_dl_default",target:"_blank",rel:"noopener noreferrer"},p=d(`<h3 id="_1-2-npm-err-invalid-dependency-type-requested-alias" tabindex="-1"><a class="header-anchor" href="#_1-2-npm-err-invalid-dependency-type-requested-alias" aria-hidden="true">#</a> 1.2 npm ERR!Invalid dependency type requested: alias</h3><p>錯誤訊息：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>npm ERR!Invalid dependency type requested: alias
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>原因：npm 版本過低，不支援 alias</p><p>解決：</p><p>將 npm 版本升級至 6.9.0 以上</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>npm i
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div>`,7),v={href:"https://stackoverflow.com/questions/54085943/npm-err-invalid-dependency-type-requested-alias",target:"_blank",rel:"noopener noreferrer"};function m(h,_){const n=s("ExternalLinkIcon");return r(),l("div",null,[o,e("p",null,[a("參考："),e("a",u,[a("Heroku部署vue項目失敗：sh: 1: vue-cli-service: not found"),t(n)])]),p,e("p",null,[a("參考："),e("a",v,[a("npm ERR! Invalid dependency type requested: alias"),t(n)])])])}const x=i(c,[["render",m],["__file","04.html.vue"]]);export{x as default};
