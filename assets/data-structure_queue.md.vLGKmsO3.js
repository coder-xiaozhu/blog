import{_ as s,o as n,c as a,R as l}from"./chunks/framework.JOVJBgC9.js";const b=JSON.parse('{"title":"队列","description":"","frontmatter":{},"headers":[],"relativePath":"data-structure/queue.md","filePath":"data-structure/queue.md","lastUpdated":1700731771000}'),p={name:"data-structure/queue.md"},o=l(`<h1 id="队列" tabindex="-1">队列 <a class="header-anchor" href="#队列" aria-label="Permalink to &quot;队列&quot;">​</a></h1><h2 id="什么是队列" tabindex="-1">什么是队列 <a class="header-anchor" href="#什么是队列" aria-label="Permalink to &quot;什么是队列&quot;">​</a></h2><p>队列是一种特殊的线性表，是一种先进先出（First In First Out）的线性表，简称FIFO。它只允许在表的前端（front）进行删除操作，而在表的后端（rear）进行插入操作。</p><h2 id="队列的特点" tabindex="-1">队列的特点 <a class="header-anchor" href="#队列的特点" aria-label="Permalink to &quot;队列的特点&quot;">​</a></h2><ul><li>队列是一种先进先出的线性表</li><li>队列的操作受限，只允许在一端插入数据，在另一端删除数据</li><li>队列的插入操作叫做入队，删除操作叫做出队</li></ul><h2 id="队列的实现" tabindex="-1">队列的实现 <a class="header-anchor" href="#队列的实现" aria-label="Permalink to &quot;队列的实现&quot;">​</a></h2><div class="language-Go vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">Go</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#F97583;">package</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">main</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&quot;</span><span style="color:#B392F0;">fmt</span><span style="color:#9ECBFF;">&quot;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">type</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">QueueInterface</span><span style="color:#E1E4E8;">[T any] </span><span style="color:#F97583;">interface</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">	</span><span style="color:#79B8FF;">Push</span><span style="color:#E1E4E8;">(ele T) </span><span style="color:#F97583;">bool</span></span>
<span class="line"><span style="color:#E1E4E8;">	</span><span style="color:#79B8FF;">Poll</span><span style="color:#E1E4E8;">() (T, </span><span style="color:#F97583;">bool</span><span style="color:#E1E4E8;">)</span></span>
<span class="line"><span style="color:#E1E4E8;">	</span><span style="color:#79B8FF;">Clear</span><span style="color:#E1E4E8;">()</span></span>
<span class="line"><span style="color:#E1E4E8;">	</span><span style="color:#79B8FF;">IsEmpty</span><span style="color:#E1E4E8;">() </span><span style="color:#F97583;">bool</span></span>
<span class="line"><span style="color:#E1E4E8;">	</span><span style="color:#79B8FF;">Size</span><span style="color:#E1E4E8;">() </span><span style="color:#F97583;">int</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// Queue 队列</span></span>
<span class="line"><span style="color:#F97583;">type</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">Queue</span><span style="color:#E1E4E8;">[T any] </span><span style="color:#F97583;">struct</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">	data    []T </span><span style="color:#6A737D;">// 存放数据的切片</span></span>
<span class="line"><span style="color:#E1E4E8;">	rear    </span><span style="color:#F97583;">int</span><span style="color:#E1E4E8;"> </span><span style="color:#6A737D;">// 队尾指针</span></span>
<span class="line"><span style="color:#E1E4E8;">	front   </span><span style="color:#F97583;">int</span><span style="color:#E1E4E8;"> </span><span style="color:#6A737D;">// 队首指针</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// Push 入队</span></span>
<span class="line"><span style="color:#F97583;">func</span><span style="color:#E1E4E8;"> (q </span><span style="color:#F97583;">*</span><span style="color:#E1E4E8;">Queue[T]) </span><span style="color:#B392F0;">Push</span><span style="color:#E1E4E8;">(ele T) </span><span style="color:#F97583;">bool</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">	q.data </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">append</span><span style="color:#E1E4E8;">(q.data, ele)</span></span>
<span class="line"><span style="color:#E1E4E8;">	q.rear</span><span style="color:#F97583;">++</span></span>
<span class="line"><span style="color:#E1E4E8;">	</span><span style="color:#F97583;">return</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">true</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// Poll 出队</span></span>
<span class="line"><span style="color:#F97583;">func</span><span style="color:#E1E4E8;"> (q </span><span style="color:#F97583;">*</span><span style="color:#E1E4E8;">Queue[T]) </span><span style="color:#B392F0;">Poll</span><span style="color:#E1E4E8;">() (T, </span><span style="color:#F97583;">bool</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#E1E4E8;">	</span><span style="color:#6A737D;">// 如果队首和队尾相等，说明队列为空</span></span>
<span class="line"><span style="color:#E1E4E8;">	</span><span style="color:#F97583;">if</span><span style="color:#E1E4E8;"> q.rear </span><span style="color:#F97583;">==</span><span style="color:#E1E4E8;"> q.front {</span></span>
<span class="line"><span style="color:#E1E4E8;">		</span><span style="color:#F97583;">var</span><span style="color:#E1E4E8;"> zero T</span></span>
<span class="line"><span style="color:#E1E4E8;">		</span><span style="color:#F97583;">return</span><span style="color:#E1E4E8;"> zero, </span><span style="color:#79B8FF;">false</span></span>
<span class="line"><span style="color:#E1E4E8;">	}</span></span>
<span class="line"><span style="color:#E1E4E8;">	ele </span><span style="color:#F97583;">:=</span><span style="color:#E1E4E8;"> q.data[q.front]</span></span>
<span class="line"><span style="color:#E1E4E8;">	q.front</span><span style="color:#F97583;">++</span></span>
<span class="line"><span style="color:#E1E4E8;">	</span><span style="color:#F97583;">return</span><span style="color:#E1E4E8;"> ele, </span><span style="color:#79B8FF;">true</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// Clear 清空队列</span></span>
<span class="line"><span style="color:#F97583;">func</span><span style="color:#E1E4E8;"> (q </span><span style="color:#F97583;">*</span><span style="color:#E1E4E8;">Queue[T]) </span><span style="color:#B392F0;">Clear</span><span style="color:#E1E4E8;">() {</span></span>
<span class="line"><span style="color:#E1E4E8;">	q.data </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">make</span><span style="color:#E1E4E8;">([]T, </span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;">)</span></span>
<span class="line"><span style="color:#E1E4E8;">	q.front </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">0</span></span>
<span class="line"><span style="color:#E1E4E8;">	q.rear </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">0</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// IsEmpty 判断队列是否为空</span></span>
<span class="line"><span style="color:#F97583;">func</span><span style="color:#E1E4E8;"> (q </span><span style="color:#F97583;">*</span><span style="color:#E1E4E8;">Queue[T]) </span><span style="color:#B392F0;">IsEmpty</span><span style="color:#E1E4E8;">() </span><span style="color:#F97583;">bool</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">	</span><span style="color:#F97583;">return</span><span style="color:#E1E4E8;"> q.rear </span><span style="color:#F97583;">==</span><span style="color:#E1E4E8;"> q.front</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// Size 队列长度</span></span>
<span class="line"><span style="color:#F97583;">func</span><span style="color:#E1E4E8;"> (q </span><span style="color:#F97583;">*</span><span style="color:#E1E4E8;">Queue[T]) </span><span style="color:#B392F0;">Size</span><span style="color:#E1E4E8;">() </span><span style="color:#F97583;">int</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">	</span><span style="color:#F97583;">return</span><span style="color:#E1E4E8;"> q.rear </span><span style="color:#F97583;">-</span><span style="color:#E1E4E8;"> q.front</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">func</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">main</span><span style="color:#E1E4E8;">() {</span></span>
<span class="line"><span style="color:#E1E4E8;">	</span><span style="color:#F97583;">var</span><span style="color:#E1E4E8;"> queue QueueInterface[</span><span style="color:#F97583;">int</span><span style="color:#E1E4E8;">]</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">	queue </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">new</span><span style="color:#E1E4E8;">(Queue[</span><span style="color:#F97583;">int</span><span style="color:#E1E4E8;">])</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">	queue.</span><span style="color:#79B8FF;">Push</span><span style="color:#E1E4E8;">(</span><span style="color:#79B8FF;">111</span><span style="color:#E1E4E8;">)</span></span>
<span class="line"><span style="color:#E1E4E8;">	queue.</span><span style="color:#79B8FF;">Push</span><span style="color:#E1E4E8;">(</span><span style="color:#79B8FF;">222</span><span style="color:#E1E4E8;">)</span></span>
<span class="line"><span style="color:#E1E4E8;">	queue.</span><span style="color:#79B8FF;">Push</span><span style="color:#E1E4E8;">(</span><span style="color:#79B8FF;">333</span><span style="color:#E1E4E8;">)</span></span>
<span class="line"><span style="color:#E1E4E8;">	queue.</span><span style="color:#79B8FF;">Push</span><span style="color:#E1E4E8;">(</span><span style="color:#79B8FF;">444</span><span style="color:#E1E4E8;">)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">	poll, ok </span><span style="color:#F97583;">:=</span><span style="color:#E1E4E8;"> queue.</span><span style="color:#79B8FF;">Poll</span><span style="color:#E1E4E8;">()</span></span>
<span class="line"><span style="color:#E1E4E8;">	fmt.</span><span style="color:#79B8FF;">Printf</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&quot;</span><span style="color:#79B8FF;">%#v</span><span style="color:#9ECBFF;">,</span><span style="color:#79B8FF;">%#v\\n</span><span style="color:#9ECBFF;">&quot;</span><span style="color:#E1E4E8;">, poll, ok)</span></span>
<span class="line"><span style="color:#E1E4E8;">	poll, ok </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> queue.</span><span style="color:#79B8FF;">Poll</span><span style="color:#E1E4E8;">()</span></span>
<span class="line"><span style="color:#E1E4E8;">	fmt.</span><span style="color:#79B8FF;">Printf</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&quot;</span><span style="color:#79B8FF;">%#v</span><span style="color:#9ECBFF;">,</span><span style="color:#79B8FF;">%#v\\n</span><span style="color:#9ECBFF;">&quot;</span><span style="color:#E1E4E8;">, poll, ok)</span></span>
<span class="line"><span style="color:#E1E4E8;">	poll, ok </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> queue.</span><span style="color:#79B8FF;">Poll</span><span style="color:#E1E4E8;">()</span></span>
<span class="line"><span style="color:#E1E4E8;">	fmt.</span><span style="color:#79B8FF;">Printf</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&quot;</span><span style="color:#79B8FF;">%#v</span><span style="color:#9ECBFF;">,</span><span style="color:#79B8FF;">%#v\\n</span><span style="color:#9ECBFF;">&quot;</span><span style="color:#E1E4E8;">, poll, ok)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">	fmt.</span><span style="color:#79B8FF;">Printf</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&quot;</span><span style="color:#79B8FF;">%#v\\n</span><span style="color:#9ECBFF;">&quot;</span><span style="color:#E1E4E8;">, queue.</span><span style="color:#79B8FF;">Size</span><span style="color:#E1E4E8;">())</span></span>
<span class="line"><span style="color:#E1E4E8;">	</span><span style="color:#6A737D;">//fmt.Printf(&quot;%#v\\n&quot;, q.Poll())</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">	</span><span style="color:#6A737D;">//fmt.Printf(&quot;%#v\\n&quot;, q.IsEmpty())</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">package</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">main</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D73A49;">import</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&quot;</span><span style="color:#6F42C1;">fmt</span><span style="color:#032F62;">&quot;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D73A49;">type</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">QueueInterface</span><span style="color:#24292E;">[T any] </span><span style="color:#D73A49;">interface</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">	</span><span style="color:#005CC5;">Push</span><span style="color:#24292E;">(ele T) </span><span style="color:#D73A49;">bool</span></span>
<span class="line"><span style="color:#24292E;">	</span><span style="color:#005CC5;">Poll</span><span style="color:#24292E;">() (T, </span><span style="color:#D73A49;">bool</span><span style="color:#24292E;">)</span></span>
<span class="line"><span style="color:#24292E;">	</span><span style="color:#005CC5;">Clear</span><span style="color:#24292E;">()</span></span>
<span class="line"><span style="color:#24292E;">	</span><span style="color:#005CC5;">IsEmpty</span><span style="color:#24292E;">() </span><span style="color:#D73A49;">bool</span></span>
<span class="line"><span style="color:#24292E;">	</span><span style="color:#005CC5;">Size</span><span style="color:#24292E;">() </span><span style="color:#D73A49;">int</span></span>
<span class="line"><span style="color:#24292E;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// Queue 队列</span></span>
<span class="line"><span style="color:#D73A49;">type</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">Queue</span><span style="color:#24292E;">[T any] </span><span style="color:#D73A49;">struct</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">	data    []T </span><span style="color:#6A737D;">// 存放数据的切片</span></span>
<span class="line"><span style="color:#24292E;">	rear    </span><span style="color:#D73A49;">int</span><span style="color:#24292E;"> </span><span style="color:#6A737D;">// 队尾指针</span></span>
<span class="line"><span style="color:#24292E;">	front   </span><span style="color:#D73A49;">int</span><span style="color:#24292E;"> </span><span style="color:#6A737D;">// 队首指针</span></span>
<span class="line"><span style="color:#24292E;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// Push 入队</span></span>
<span class="line"><span style="color:#D73A49;">func</span><span style="color:#24292E;"> (q </span><span style="color:#D73A49;">*</span><span style="color:#24292E;">Queue[T]) </span><span style="color:#6F42C1;">Push</span><span style="color:#24292E;">(ele T) </span><span style="color:#D73A49;">bool</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">	q.data </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">append</span><span style="color:#24292E;">(q.data, ele)</span></span>
<span class="line"><span style="color:#24292E;">	q.rear</span><span style="color:#D73A49;">++</span></span>
<span class="line"><span style="color:#24292E;">	</span><span style="color:#D73A49;">return</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">true</span></span>
<span class="line"><span style="color:#24292E;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// Poll 出队</span></span>
<span class="line"><span style="color:#D73A49;">func</span><span style="color:#24292E;"> (q </span><span style="color:#D73A49;">*</span><span style="color:#24292E;">Queue[T]) </span><span style="color:#6F42C1;">Poll</span><span style="color:#24292E;">() (T, </span><span style="color:#D73A49;">bool</span><span style="color:#24292E;">) {</span></span>
<span class="line"><span style="color:#24292E;">	</span><span style="color:#6A737D;">// 如果队首和队尾相等，说明队列为空</span></span>
<span class="line"><span style="color:#24292E;">	</span><span style="color:#D73A49;">if</span><span style="color:#24292E;"> q.rear </span><span style="color:#D73A49;">==</span><span style="color:#24292E;"> q.front {</span></span>
<span class="line"><span style="color:#24292E;">		</span><span style="color:#D73A49;">var</span><span style="color:#24292E;"> zero T</span></span>
<span class="line"><span style="color:#24292E;">		</span><span style="color:#D73A49;">return</span><span style="color:#24292E;"> zero, </span><span style="color:#005CC5;">false</span></span>
<span class="line"><span style="color:#24292E;">	}</span></span>
<span class="line"><span style="color:#24292E;">	ele </span><span style="color:#D73A49;">:=</span><span style="color:#24292E;"> q.data[q.front]</span></span>
<span class="line"><span style="color:#24292E;">	q.front</span><span style="color:#D73A49;">++</span></span>
<span class="line"><span style="color:#24292E;">	</span><span style="color:#D73A49;">return</span><span style="color:#24292E;"> ele, </span><span style="color:#005CC5;">true</span></span>
<span class="line"><span style="color:#24292E;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// Clear 清空队列</span></span>
<span class="line"><span style="color:#D73A49;">func</span><span style="color:#24292E;"> (q </span><span style="color:#D73A49;">*</span><span style="color:#24292E;">Queue[T]) </span><span style="color:#6F42C1;">Clear</span><span style="color:#24292E;">() {</span></span>
<span class="line"><span style="color:#24292E;">	q.data </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">make</span><span style="color:#24292E;">([]T, </span><span style="color:#005CC5;">0</span><span style="color:#24292E;">)</span></span>
<span class="line"><span style="color:#24292E;">	q.front </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">0</span></span>
<span class="line"><span style="color:#24292E;">	q.rear </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">0</span></span>
<span class="line"><span style="color:#24292E;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// IsEmpty 判断队列是否为空</span></span>
<span class="line"><span style="color:#D73A49;">func</span><span style="color:#24292E;"> (q </span><span style="color:#D73A49;">*</span><span style="color:#24292E;">Queue[T]) </span><span style="color:#6F42C1;">IsEmpty</span><span style="color:#24292E;">() </span><span style="color:#D73A49;">bool</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">	</span><span style="color:#D73A49;">return</span><span style="color:#24292E;"> q.rear </span><span style="color:#D73A49;">==</span><span style="color:#24292E;"> q.front</span></span>
<span class="line"><span style="color:#24292E;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// Size 队列长度</span></span>
<span class="line"><span style="color:#D73A49;">func</span><span style="color:#24292E;"> (q </span><span style="color:#D73A49;">*</span><span style="color:#24292E;">Queue[T]) </span><span style="color:#6F42C1;">Size</span><span style="color:#24292E;">() </span><span style="color:#D73A49;">int</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">	</span><span style="color:#D73A49;">return</span><span style="color:#24292E;"> q.rear </span><span style="color:#D73A49;">-</span><span style="color:#24292E;"> q.front</span></span>
<span class="line"><span style="color:#24292E;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D73A49;">func</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">main</span><span style="color:#24292E;">() {</span></span>
<span class="line"><span style="color:#24292E;">	</span><span style="color:#D73A49;">var</span><span style="color:#24292E;"> queue QueueInterface[</span><span style="color:#D73A49;">int</span><span style="color:#24292E;">]</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">	queue </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">new</span><span style="color:#24292E;">(Queue[</span><span style="color:#D73A49;">int</span><span style="color:#24292E;">])</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">	queue.</span><span style="color:#005CC5;">Push</span><span style="color:#24292E;">(</span><span style="color:#005CC5;">111</span><span style="color:#24292E;">)</span></span>
<span class="line"><span style="color:#24292E;">	queue.</span><span style="color:#005CC5;">Push</span><span style="color:#24292E;">(</span><span style="color:#005CC5;">222</span><span style="color:#24292E;">)</span></span>
<span class="line"><span style="color:#24292E;">	queue.</span><span style="color:#005CC5;">Push</span><span style="color:#24292E;">(</span><span style="color:#005CC5;">333</span><span style="color:#24292E;">)</span></span>
<span class="line"><span style="color:#24292E;">	queue.</span><span style="color:#005CC5;">Push</span><span style="color:#24292E;">(</span><span style="color:#005CC5;">444</span><span style="color:#24292E;">)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">	poll, ok </span><span style="color:#D73A49;">:=</span><span style="color:#24292E;"> queue.</span><span style="color:#005CC5;">Poll</span><span style="color:#24292E;">()</span></span>
<span class="line"><span style="color:#24292E;">	fmt.</span><span style="color:#005CC5;">Printf</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&quot;</span><span style="color:#005CC5;">%#v</span><span style="color:#032F62;">,</span><span style="color:#005CC5;">%#v\\n</span><span style="color:#032F62;">&quot;</span><span style="color:#24292E;">, poll, ok)</span></span>
<span class="line"><span style="color:#24292E;">	poll, ok </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> queue.</span><span style="color:#005CC5;">Poll</span><span style="color:#24292E;">()</span></span>
<span class="line"><span style="color:#24292E;">	fmt.</span><span style="color:#005CC5;">Printf</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&quot;</span><span style="color:#005CC5;">%#v</span><span style="color:#032F62;">,</span><span style="color:#005CC5;">%#v\\n</span><span style="color:#032F62;">&quot;</span><span style="color:#24292E;">, poll, ok)</span></span>
<span class="line"><span style="color:#24292E;">	poll, ok </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> queue.</span><span style="color:#005CC5;">Poll</span><span style="color:#24292E;">()</span></span>
<span class="line"><span style="color:#24292E;">	fmt.</span><span style="color:#005CC5;">Printf</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&quot;</span><span style="color:#005CC5;">%#v</span><span style="color:#032F62;">,</span><span style="color:#005CC5;">%#v\\n</span><span style="color:#032F62;">&quot;</span><span style="color:#24292E;">, poll, ok)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">	fmt.</span><span style="color:#005CC5;">Printf</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&quot;</span><span style="color:#005CC5;">%#v\\n</span><span style="color:#032F62;">&quot;</span><span style="color:#24292E;">, queue.</span><span style="color:#005CC5;">Size</span><span style="color:#24292E;">())</span></span>
<span class="line"><span style="color:#24292E;">	</span><span style="color:#6A737D;">//fmt.Printf(&quot;%#v\\n&quot;, q.Poll())</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">	</span><span style="color:#6A737D;">//fmt.Printf(&quot;%#v\\n&quot;, q.IsEmpty())</span></span>
<span class="line"><span style="color:#24292E;">}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br><span class="line-number">49</span><br><span class="line-number">50</span><br><span class="line-number">51</span><br><span class="line-number">52</span><br><span class="line-number">53</span><br><span class="line-number">54</span><br><span class="line-number">55</span><br><span class="line-number">56</span><br><span class="line-number">57</span><br><span class="line-number">58</span><br><span class="line-number">59</span><br><span class="line-number">60</span><br><span class="line-number">61</span><br><span class="line-number">62</span><br><span class="line-number">63</span><br><span class="line-number">64</span><br><span class="line-number">65</span><br><span class="line-number">66</span><br><span class="line-number">67</span><br><span class="line-number">68</span><br><span class="line-number">69</span><br><span class="line-number">70</span><br><span class="line-number">71</span><br><span class="line-number">72</span><br><span class="line-number">73</span><br><span class="line-number">74</span><br><span class="line-number">75</span><br><span class="line-number">76</span><br><span class="line-number">77</span><br></div></div><p>  上面这种实现方式，已经出队的元素，还是会占用内存，如果队列长度很长，会造成内存浪费，我们可以使用切片的方式，来优化队列</p><h2 id="另一种实现" tabindex="-1">另一种实现 <a class="header-anchor" href="#另一种实现" aria-label="Permalink to &quot;另一种实现&quot;">​</a></h2><div class="language-Go vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">Go</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#F97583;">package</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">main</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&quot;</span><span style="color:#B392F0;">fmt</span><span style="color:#9ECBFF;">&quot;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">type</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">QueueInterface</span><span style="color:#E1E4E8;">[T any] </span><span style="color:#F97583;">interface</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">	</span><span style="color:#79B8FF;">Push</span><span style="color:#E1E4E8;">(ele T) </span><span style="color:#F97583;">bool</span></span>
<span class="line"><span style="color:#E1E4E8;">	</span><span style="color:#79B8FF;">Poll</span><span style="color:#E1E4E8;">() (T, </span><span style="color:#F97583;">bool</span><span style="color:#E1E4E8;">)</span></span>
<span class="line"><span style="color:#E1E4E8;">	</span><span style="color:#79B8FF;">Clear</span><span style="color:#E1E4E8;">()</span></span>
<span class="line"><span style="color:#E1E4E8;">	</span><span style="color:#79B8FF;">IsEmpty</span><span style="color:#E1E4E8;">() </span><span style="color:#F97583;">bool</span></span>
<span class="line"><span style="color:#E1E4E8;">	</span><span style="color:#79B8FF;">Size</span><span style="color:#E1E4E8;">() </span><span style="color:#F97583;">int</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// Queue 队列</span></span>
<span class="line"><span style="color:#F97583;">type</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">Queue</span><span style="color:#E1E4E8;">[T any] </span><span style="color:#F97583;">struct</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">	data []T </span><span style="color:#6A737D;">// 存放数据的切片</span></span>
<span class="line"><span style="color:#E1E4E8;">	size </span><span style="color:#F97583;">int</span><span style="color:#E1E4E8;"> </span><span style="color:#6A737D;">// 队列长度</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// Push 入队</span></span>
<span class="line"><span style="color:#F97583;">func</span><span style="color:#E1E4E8;"> (q </span><span style="color:#F97583;">*</span><span style="color:#E1E4E8;">Queue[T]) </span><span style="color:#B392F0;">Push</span><span style="color:#E1E4E8;">(ele T) </span><span style="color:#F97583;">bool</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">	q.data </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">append</span><span style="color:#E1E4E8;">(q.data, ele)</span></span>
<span class="line"><span style="color:#E1E4E8;">	q.size</span><span style="color:#F97583;">++</span></span>
<span class="line"><span style="color:#E1E4E8;">	</span><span style="color:#F97583;">return</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">true</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// Poll 出队</span></span>
<span class="line"><span style="color:#F97583;">func</span><span style="color:#E1E4E8;"> (q </span><span style="color:#F97583;">*</span><span style="color:#E1E4E8;">Queue[T]) </span><span style="color:#B392F0;">Poll</span><span style="color:#E1E4E8;">() (T, </span><span style="color:#F97583;">bool</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#E1E4E8;">	</span><span style="color:#F97583;">if</span><span style="color:#E1E4E8;"> q.size </span><span style="color:#F97583;">==</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">		</span><span style="color:#F97583;">var</span><span style="color:#E1E4E8;"> zero T</span></span>
<span class="line"><span style="color:#E1E4E8;">		</span><span style="color:#F97583;">return</span><span style="color:#E1E4E8;"> zero, </span><span style="color:#79B8FF;">false</span></span>
<span class="line"><span style="color:#E1E4E8;">	}</span></span>
<span class="line"><span style="color:#E1E4E8;">	ele </span><span style="color:#F97583;">:=</span><span style="color:#E1E4E8;"> q.data[</span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;">]</span></span>
<span class="line"><span style="color:#E1E4E8;">    q.data </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> q.data[</span><span style="color:#79B8FF;">1</span><span style="color:#E1E4E8;">:] </span><span style="color:#6A737D;">// 释放已经出队的元素的内存</span></span>
<span class="line"><span style="color:#E1E4E8;">	q.size</span><span style="color:#F97583;">--</span></span>
<span class="line"><span style="color:#E1E4E8;">	</span><span style="color:#F97583;">return</span><span style="color:#E1E4E8;"> ele, </span><span style="color:#79B8FF;">true</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// Clear 清空队列</span></span>
<span class="line"><span style="color:#F97583;">func</span><span style="color:#E1E4E8;"> (q </span><span style="color:#F97583;">*</span><span style="color:#E1E4E8;">Queue[T]) </span><span style="color:#B392F0;">Clear</span><span style="color:#E1E4E8;">() {</span></span>
<span class="line"><span style="color:#E1E4E8;">	q.data </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">make</span><span style="color:#E1E4E8;">([]T, </span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;">)</span></span>
<span class="line"><span style="color:#E1E4E8;">	q.size </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">0</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// IsEmpty 判断队列是否为空</span></span>
<span class="line"><span style="color:#F97583;">func</span><span style="color:#E1E4E8;"> (q </span><span style="color:#F97583;">*</span><span style="color:#E1E4E8;">Queue[T]) </span><span style="color:#B392F0;">IsEmpty</span><span style="color:#E1E4E8;">() </span><span style="color:#F97583;">bool</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">	</span><span style="color:#F97583;">return</span><span style="color:#E1E4E8;"> q.size </span><span style="color:#F97583;">==</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">0</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// Size 队列长度</span></span>
<span class="line"><span style="color:#F97583;">func</span><span style="color:#E1E4E8;"> (q </span><span style="color:#F97583;">*</span><span style="color:#E1E4E8;">Queue[T]) </span><span style="color:#B392F0;">Size</span><span style="color:#E1E4E8;">() </span><span style="color:#F97583;">int</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">	</span><span style="color:#F97583;">return</span><span style="color:#E1E4E8;"> q.size</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">func</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">main</span><span style="color:#E1E4E8;">() {</span></span>
<span class="line"><span style="color:#E1E4E8;">	</span><span style="color:#F97583;">var</span><span style="color:#E1E4E8;"> queue QueueInterface[</span><span style="color:#F97583;">int</span><span style="color:#E1E4E8;">]</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">	queue </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">new</span><span style="color:#E1E4E8;">(Queue[</span><span style="color:#F97583;">int</span><span style="color:#E1E4E8;">])</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">	queue.</span><span style="color:#79B8FF;">Push</span><span style="color:#E1E4E8;">(</span><span style="color:#79B8FF;">111</span><span style="color:#E1E4E8;">)</span></span>
<span class="line"><span style="color:#E1E4E8;">	queue.</span><span style="color:#79B8FF;">Push</span><span style="color:#E1E4E8;">(</span><span style="color:#79B8FF;">222</span><span style="color:#E1E4E8;">)</span></span>
<span class="line"><span style="color:#E1E4E8;">	queue.</span><span style="color:#79B8FF;">Push</span><span style="color:#E1E4E8;">(</span><span style="color:#79B8FF;">333</span><span style="color:#E1E4E8;">)</span></span>
<span class="line"><span style="color:#E1E4E8;">	queue.</span><span style="color:#79B8FF;">Push</span><span style="color:#E1E4E8;">(</span><span style="color:#79B8FF;">444</span><span style="color:#E1E4E8;">)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">	poll, ok </span><span style="color:#F97583;">:=</span><span style="color:#E1E4E8;"> queue.</span><span style="color:#79B8FF;">Poll</span><span style="color:#E1E4E8;">()</span></span>
<span class="line"><span style="color:#E1E4E8;">	fmt.</span><span style="color:#79B8FF;">Printf</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&quot;</span><span style="color:#79B8FF;">%#v</span><span style="color:#9ECBFF;">,</span><span style="color:#79B8FF;">%#v\\n</span><span style="color:#9ECBFF;">&quot;</span><span style="color:#E1E4E8;">, poll, ok)</span></span>
<span class="line"><span style="color:#E1E4E8;">	poll, ok </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> queue.</span><span style="color:#79B8FF;">Poll</span><span style="color:#E1E4E8;">()</span></span>
<span class="line"><span style="color:#E1E4E8;">	fmt.</span><span style="color:#79B8FF;">Printf</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&quot;</span><span style="color:#79B8FF;">%#v</span><span style="color:#9ECBFF;">,</span><span style="color:#79B8FF;">%#v\\n</span><span style="color:#9ECBFF;">&quot;</span><span style="color:#E1E4E8;">, poll, ok)</span></span>
<span class="line"><span style="color:#E1E4E8;">	poll, ok </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> queue.</span><span style="color:#79B8FF;">Poll</span><span style="color:#E1E4E8;">()</span></span>
<span class="line"><span style="color:#E1E4E8;">	fmt.</span><span style="color:#79B8FF;">Printf</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&quot;</span><span style="color:#79B8FF;">%#v</span><span style="color:#9ECBFF;">,</span><span style="color:#79B8FF;">%#v\\n</span><span style="color:#9ECBFF;">&quot;</span><span style="color:#E1E4E8;">, poll, ok)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">	fmt.</span><span style="color:#79B8FF;">Printf</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&quot;</span><span style="color:#79B8FF;">%#v\\n</span><span style="color:#9ECBFF;">&quot;</span><span style="color:#E1E4E8;">, queue.</span><span style="color:#79B8FF;">Size</span><span style="color:#E1E4E8;">())</span></span>
<span class="line"><span style="color:#E1E4E8;">	</span><span style="color:#6A737D;">//fmt.Printf(&quot;%#v\\n&quot;, q.Poll())</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">	</span><span style="color:#6A737D;">//fmt.Printf(&quot;%#v\\n&quot;, q.IsEmpty())</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">package</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">main</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D73A49;">import</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&quot;</span><span style="color:#6F42C1;">fmt</span><span style="color:#032F62;">&quot;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D73A49;">type</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">QueueInterface</span><span style="color:#24292E;">[T any] </span><span style="color:#D73A49;">interface</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">	</span><span style="color:#005CC5;">Push</span><span style="color:#24292E;">(ele T) </span><span style="color:#D73A49;">bool</span></span>
<span class="line"><span style="color:#24292E;">	</span><span style="color:#005CC5;">Poll</span><span style="color:#24292E;">() (T, </span><span style="color:#D73A49;">bool</span><span style="color:#24292E;">)</span></span>
<span class="line"><span style="color:#24292E;">	</span><span style="color:#005CC5;">Clear</span><span style="color:#24292E;">()</span></span>
<span class="line"><span style="color:#24292E;">	</span><span style="color:#005CC5;">IsEmpty</span><span style="color:#24292E;">() </span><span style="color:#D73A49;">bool</span></span>
<span class="line"><span style="color:#24292E;">	</span><span style="color:#005CC5;">Size</span><span style="color:#24292E;">() </span><span style="color:#D73A49;">int</span></span>
<span class="line"><span style="color:#24292E;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// Queue 队列</span></span>
<span class="line"><span style="color:#D73A49;">type</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">Queue</span><span style="color:#24292E;">[T any] </span><span style="color:#D73A49;">struct</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">	data []T </span><span style="color:#6A737D;">// 存放数据的切片</span></span>
<span class="line"><span style="color:#24292E;">	size </span><span style="color:#D73A49;">int</span><span style="color:#24292E;"> </span><span style="color:#6A737D;">// 队列长度</span></span>
<span class="line"><span style="color:#24292E;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// Push 入队</span></span>
<span class="line"><span style="color:#D73A49;">func</span><span style="color:#24292E;"> (q </span><span style="color:#D73A49;">*</span><span style="color:#24292E;">Queue[T]) </span><span style="color:#6F42C1;">Push</span><span style="color:#24292E;">(ele T) </span><span style="color:#D73A49;">bool</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">	q.data </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">append</span><span style="color:#24292E;">(q.data, ele)</span></span>
<span class="line"><span style="color:#24292E;">	q.size</span><span style="color:#D73A49;">++</span></span>
<span class="line"><span style="color:#24292E;">	</span><span style="color:#D73A49;">return</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">true</span></span>
<span class="line"><span style="color:#24292E;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// Poll 出队</span></span>
<span class="line"><span style="color:#D73A49;">func</span><span style="color:#24292E;"> (q </span><span style="color:#D73A49;">*</span><span style="color:#24292E;">Queue[T]) </span><span style="color:#6F42C1;">Poll</span><span style="color:#24292E;">() (T, </span><span style="color:#D73A49;">bool</span><span style="color:#24292E;">) {</span></span>
<span class="line"><span style="color:#24292E;">	</span><span style="color:#D73A49;">if</span><span style="color:#24292E;"> q.size </span><span style="color:#D73A49;">==</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">0</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">		</span><span style="color:#D73A49;">var</span><span style="color:#24292E;"> zero T</span></span>
<span class="line"><span style="color:#24292E;">		</span><span style="color:#D73A49;">return</span><span style="color:#24292E;"> zero, </span><span style="color:#005CC5;">false</span></span>
<span class="line"><span style="color:#24292E;">	}</span></span>
<span class="line"><span style="color:#24292E;">	ele </span><span style="color:#D73A49;">:=</span><span style="color:#24292E;"> q.data[</span><span style="color:#005CC5;">0</span><span style="color:#24292E;">]</span></span>
<span class="line"><span style="color:#24292E;">    q.data </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> q.data[</span><span style="color:#005CC5;">1</span><span style="color:#24292E;">:] </span><span style="color:#6A737D;">// 释放已经出队的元素的内存</span></span>
<span class="line"><span style="color:#24292E;">	q.size</span><span style="color:#D73A49;">--</span></span>
<span class="line"><span style="color:#24292E;">	</span><span style="color:#D73A49;">return</span><span style="color:#24292E;"> ele, </span><span style="color:#005CC5;">true</span></span>
<span class="line"><span style="color:#24292E;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// Clear 清空队列</span></span>
<span class="line"><span style="color:#D73A49;">func</span><span style="color:#24292E;"> (q </span><span style="color:#D73A49;">*</span><span style="color:#24292E;">Queue[T]) </span><span style="color:#6F42C1;">Clear</span><span style="color:#24292E;">() {</span></span>
<span class="line"><span style="color:#24292E;">	q.data </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">make</span><span style="color:#24292E;">([]T, </span><span style="color:#005CC5;">0</span><span style="color:#24292E;">)</span></span>
<span class="line"><span style="color:#24292E;">	q.size </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">0</span></span>
<span class="line"><span style="color:#24292E;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// IsEmpty 判断队列是否为空</span></span>
<span class="line"><span style="color:#D73A49;">func</span><span style="color:#24292E;"> (q </span><span style="color:#D73A49;">*</span><span style="color:#24292E;">Queue[T]) </span><span style="color:#6F42C1;">IsEmpty</span><span style="color:#24292E;">() </span><span style="color:#D73A49;">bool</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">	</span><span style="color:#D73A49;">return</span><span style="color:#24292E;"> q.size </span><span style="color:#D73A49;">==</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">0</span></span>
<span class="line"><span style="color:#24292E;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// Size 队列长度</span></span>
<span class="line"><span style="color:#D73A49;">func</span><span style="color:#24292E;"> (q </span><span style="color:#D73A49;">*</span><span style="color:#24292E;">Queue[T]) </span><span style="color:#6F42C1;">Size</span><span style="color:#24292E;">() </span><span style="color:#D73A49;">int</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">	</span><span style="color:#D73A49;">return</span><span style="color:#24292E;"> q.size</span></span>
<span class="line"><span style="color:#24292E;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D73A49;">func</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">main</span><span style="color:#24292E;">() {</span></span>
<span class="line"><span style="color:#24292E;">	</span><span style="color:#D73A49;">var</span><span style="color:#24292E;"> queue QueueInterface[</span><span style="color:#D73A49;">int</span><span style="color:#24292E;">]</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">	queue </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">new</span><span style="color:#24292E;">(Queue[</span><span style="color:#D73A49;">int</span><span style="color:#24292E;">])</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">	queue.</span><span style="color:#005CC5;">Push</span><span style="color:#24292E;">(</span><span style="color:#005CC5;">111</span><span style="color:#24292E;">)</span></span>
<span class="line"><span style="color:#24292E;">	queue.</span><span style="color:#005CC5;">Push</span><span style="color:#24292E;">(</span><span style="color:#005CC5;">222</span><span style="color:#24292E;">)</span></span>
<span class="line"><span style="color:#24292E;">	queue.</span><span style="color:#005CC5;">Push</span><span style="color:#24292E;">(</span><span style="color:#005CC5;">333</span><span style="color:#24292E;">)</span></span>
<span class="line"><span style="color:#24292E;">	queue.</span><span style="color:#005CC5;">Push</span><span style="color:#24292E;">(</span><span style="color:#005CC5;">444</span><span style="color:#24292E;">)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">	poll, ok </span><span style="color:#D73A49;">:=</span><span style="color:#24292E;"> queue.</span><span style="color:#005CC5;">Poll</span><span style="color:#24292E;">()</span></span>
<span class="line"><span style="color:#24292E;">	fmt.</span><span style="color:#005CC5;">Printf</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&quot;</span><span style="color:#005CC5;">%#v</span><span style="color:#032F62;">,</span><span style="color:#005CC5;">%#v\\n</span><span style="color:#032F62;">&quot;</span><span style="color:#24292E;">, poll, ok)</span></span>
<span class="line"><span style="color:#24292E;">	poll, ok </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> queue.</span><span style="color:#005CC5;">Poll</span><span style="color:#24292E;">()</span></span>
<span class="line"><span style="color:#24292E;">	fmt.</span><span style="color:#005CC5;">Printf</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&quot;</span><span style="color:#005CC5;">%#v</span><span style="color:#032F62;">,</span><span style="color:#005CC5;">%#v\\n</span><span style="color:#032F62;">&quot;</span><span style="color:#24292E;">, poll, ok)</span></span>
<span class="line"><span style="color:#24292E;">	poll, ok </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> queue.</span><span style="color:#005CC5;">Poll</span><span style="color:#24292E;">()</span></span>
<span class="line"><span style="color:#24292E;">	fmt.</span><span style="color:#005CC5;">Printf</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&quot;</span><span style="color:#005CC5;">%#v</span><span style="color:#032F62;">,</span><span style="color:#005CC5;">%#v\\n</span><span style="color:#032F62;">&quot;</span><span style="color:#24292E;">, poll, ok)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">	fmt.</span><span style="color:#005CC5;">Printf</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&quot;</span><span style="color:#005CC5;">%#v\\n</span><span style="color:#032F62;">&quot;</span><span style="color:#24292E;">, queue.</span><span style="color:#005CC5;">Size</span><span style="color:#24292E;">())</span></span>
<span class="line"><span style="color:#24292E;">	</span><span style="color:#6A737D;">//fmt.Printf(&quot;%#v\\n&quot;, q.Poll())</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">	</span><span style="color:#6A737D;">//fmt.Printf(&quot;%#v\\n&quot;, q.IsEmpty())</span></span>
<span class="line"><span style="color:#24292E;">}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br><span class="line-number">49</span><br><span class="line-number">50</span><br><span class="line-number">51</span><br><span class="line-number">52</span><br><span class="line-number">53</span><br><span class="line-number">54</span><br><span class="line-number">55</span><br><span class="line-number">56</span><br><span class="line-number">57</span><br><span class="line-number">58</span><br><span class="line-number">59</span><br><span class="line-number">60</span><br><span class="line-number">61</span><br><span class="line-number">62</span><br><span class="line-number">63</span><br><span class="line-number">64</span><br><span class="line-number">65</span><br><span class="line-number">66</span><br><span class="line-number">67</span><br><span class="line-number">68</span><br><span class="line-number">69</span><br><span class="line-number">70</span><br><span class="line-number">71</span><br><span class="line-number">72</span><br><span class="line-number">73</span><br><span class="line-number">74</span><br><span class="line-number">75</span><br></div></div>`,10),e=[o];function c(r,t,E,y,i,u){return n(),a("div",null,e)}const m=s(p,[["render",c]]);export{b as __pageData,m as default};
