import{_ as s,o as n,c as a,Q as l}from"./chunks/framework.96fe74fa.js";const u=JSON.parse('{"title":"稀疏数组","description":"","frontmatter":{},"headers":[],"relativePath":"data-structure/sparse_array.md","filePath":"data-structure/sparse_array.md","lastUpdated":1694403565000}'),p={name:"data-structure/sparse_array.md"},o=l(`<h1 id="稀疏数组" tabindex="-1">稀疏数组 <a class="header-anchor" href="#稀疏数组" aria-label="Permalink to &quot;稀疏数组&quot;">​</a></h1><h2 id="什么是稀疏数组" tabindex="-1">什么是稀疏数组 <a class="header-anchor" href="#什么是稀疏数组" aria-label="Permalink to &quot;什么是稀疏数组&quot;">​</a></h2><p>稀疏数组是一种压缩存储的数组，当一个数组中大部分元素为0或者为同一个值的数组时，可以使用稀疏数组来保存该数组。</p><h2 id="稀疏数组的实现" tabindex="-1">稀疏数组的实现 <a class="header-anchor" href="#稀疏数组的实现" aria-label="Permalink to &quot;稀疏数组的实现&quot;">​</a></h2><p>稀疏数组的实现需要两个步骤：</p><ol><li>将二维数组转换为稀疏数组</li><li>将稀疏数组转换为二维数组</li></ol><h2 id="代码实现" tabindex="-1">代码实现 <a class="header-anchor" href="#代码实现" aria-label="Permalink to &quot;代码实现&quot;">​</a></h2><div class="language-go vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">go</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#F97583;">package</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">main</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&quot;</span><span style="color:#B392F0;">fmt</span><span style="color:#9ECBFF;">&quot;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">type</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">SparseArray</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">struct</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">	Row </span><span style="color:#F97583;">int</span></span>
<span class="line"><span style="color:#E1E4E8;">	Col </span><span style="color:#F97583;">int</span></span>
<span class="line"><span style="color:#E1E4E8;">	Val </span><span style="color:#F97583;">int</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">func</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">main</span><span style="color:#E1E4E8;">() {</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">	chess </span><span style="color:#F97583;">:=</span><span style="color:#E1E4E8;"> [][]</span><span style="color:#F97583;">int</span><span style="color:#E1E4E8;">{</span></span>
<span class="line"><span style="color:#E1E4E8;">		{</span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;">},</span></span>
<span class="line"><span style="color:#E1E4E8;">		{</span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">22</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">15</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;">},</span></span>
<span class="line"><span style="color:#E1E4E8;">		{</span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;">, </span><span style="color:#F97583;">-</span><span style="color:#79B8FF;">6</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;">},</span></span>
<span class="line"><span style="color:#E1E4E8;">		{</span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;">, </span><span style="color:#F97583;">-</span><span style="color:#79B8FF;">15</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;">},</span></span>
<span class="line"><span style="color:#E1E4E8;">	}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">	sparseArray </span><span style="color:#F97583;">:=</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">sliceToSparseArray</span><span style="color:#E1E4E8;">(chess)</span></span>
<span class="line"><span style="color:#E1E4E8;">	fmt.</span><span style="color:#79B8FF;">Printf</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&quot;</span><span style="color:#79B8FF;">%#v\\n</span><span style="color:#9ECBFF;">&quot;</span><span style="color:#E1E4E8;">, sparseArray)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">	slice </span><span style="color:#F97583;">:=</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">sparseToSlice</span><span style="color:#E1E4E8;">(sparseArray)</span></span>
<span class="line"><span style="color:#E1E4E8;">	</span><span style="color:#6A737D;">//打印slice</span></span>
<span class="line"><span style="color:#E1E4E8;">	</span><span style="color:#F97583;">for</span><span style="color:#E1E4E8;"> _, row </span><span style="color:#F97583;">:=</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">range</span><span style="color:#E1E4E8;"> slice {</span></span>
<span class="line"><span style="color:#E1E4E8;">		</span><span style="color:#F97583;">for</span><span style="color:#E1E4E8;"> _, col </span><span style="color:#F97583;">:=</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">range</span><span style="color:#E1E4E8;"> row {</span></span>
<span class="line"><span style="color:#E1E4E8;">			fmt.</span><span style="color:#79B8FF;">Printf</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&quot;</span><span style="color:#79B8FF;">%d\\t</span><span style="color:#9ECBFF;">&quot;</span><span style="color:#E1E4E8;">, col)</span></span>
<span class="line"><span style="color:#E1E4E8;">		}</span></span>
<span class="line"><span style="color:#E1E4E8;">		fmt.</span><span style="color:#79B8FF;">Println</span><span style="color:#E1E4E8;">()</span></span>
<span class="line"><span style="color:#E1E4E8;">	}</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 二维数组转稀疏数组</span></span>
<span class="line"><span style="color:#F97583;">func</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">sliceToSparseArray</span><span style="color:#E1E4E8;">(slice [][]</span><span style="color:#F97583;">int</span><span style="color:#E1E4E8;">) []SparseArray {</span></span>
<span class="line"><span style="color:#E1E4E8;">	sparseArray </span><span style="color:#F97583;">:=</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">make</span><span style="color:#E1E4E8;">([]SparseArray, </span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;">)</span></span>
<span class="line"><span style="color:#E1E4E8;">	row </span><span style="color:#F97583;">:=</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">len</span><span style="color:#E1E4E8;">(slice)</span></span>
<span class="line"><span style="color:#E1E4E8;">	col </span><span style="color:#F97583;">:=</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">len</span><span style="color:#E1E4E8;">(slice[</span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;">])</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">	effectiveDataCount </span><span style="color:#F97583;">:=</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">0</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">	</span><span style="color:#F97583;">for</span><span style="color:#E1E4E8;"> rowIndex, row </span><span style="color:#F97583;">:=</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">range</span><span style="color:#E1E4E8;"> slice {</span></span>
<span class="line"><span style="color:#E1E4E8;">		</span><span style="color:#F97583;">for</span><span style="color:#E1E4E8;"> colIndex, col </span><span style="color:#F97583;">:=</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">range</span><span style="color:#E1E4E8;"> row {</span></span>
<span class="line"><span style="color:#E1E4E8;">			</span><span style="color:#F97583;">if</span><span style="color:#E1E4E8;"> col </span><span style="color:#F97583;">==</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">				</span><span style="color:#F97583;">continue</span></span>
<span class="line"><span style="color:#E1E4E8;">			}</span></span>
<span class="line"><span style="color:#E1E4E8;">			effectiveDataCount</span><span style="color:#F97583;">++</span></span>
<span class="line"><span style="color:#E1E4E8;">			sparseArray </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">append</span><span style="color:#E1E4E8;">(sparseArray, SparseArray{Row: rowIndex, Col: colIndex, Val: col})</span></span>
<span class="line"><span style="color:#E1E4E8;">		}</span></span>
<span class="line"><span style="color:#E1E4E8;">	}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">	finalResult </span><span style="color:#F97583;">:=</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">make</span><span style="color:#E1E4E8;">([]SparseArray, </span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;">)</span></span>
<span class="line"><span style="color:#E1E4E8;">	finalResult </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">append</span><span style="color:#E1E4E8;">(finalResult, SparseArray{Row: row, Col: col, Val: effectiveDataCount})</span></span>
<span class="line"><span style="color:#E1E4E8;">	finalResult </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">append</span><span style="color:#E1E4E8;">(finalResult, sparseArray</span><span style="color:#F97583;">...</span><span style="color:#E1E4E8;">)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">	</span><span style="color:#F97583;">return</span><span style="color:#E1E4E8;"> finalResult</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 稀疏数组转二维数组</span></span>
<span class="line"><span style="color:#F97583;">func</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">sparseToSlice</span><span style="color:#E1E4E8;">(sparse []SparseArray) [][]</span><span style="color:#F97583;">int</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">	</span><span style="color:#6A737D;">// 由于稀疏数组的特性，第一行的数据可以确定二维数组的行列</span></span>
<span class="line"><span style="color:#E1E4E8;">	</span><span style="color:#F97583;">var</span><span style="color:#E1E4E8;"> (</span></span>
<span class="line"><span style="color:#E1E4E8;">		rows  </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> sparse[</span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;">].Row</span></span>
<span class="line"><span style="color:#E1E4E8;">		col   </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> sparse[</span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;">].Col</span></span>
<span class="line"><span style="color:#E1E4E8;">		slice [][]</span><span style="color:#F97583;">int</span></span>
<span class="line"><span style="color:#E1E4E8;">	)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">	</span><span style="color:#6A737D;">// 初始化二维数组</span></span>
<span class="line"><span style="color:#E1E4E8;">	</span><span style="color:#F97583;">for</span><span style="color:#E1E4E8;"> i </span><span style="color:#F97583;">:=</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;">; i </span><span style="color:#F97583;">&lt;</span><span style="color:#E1E4E8;"> rows; i</span><span style="color:#F97583;">++</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">		colData </span><span style="color:#F97583;">:=</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">make</span><span style="color:#E1E4E8;">([]</span><span style="color:#F97583;">int</span><span style="color:#E1E4E8;">, col)</span></span>
<span class="line"><span style="color:#E1E4E8;">		slice </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">append</span><span style="color:#E1E4E8;">(slice, colData)</span></span>
<span class="line"><span style="color:#E1E4E8;">	}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">	</span><span style="color:#6A737D;">// 为二维数组的有效数据赋值</span></span>
<span class="line"><span style="color:#E1E4E8;">	</span><span style="color:#F97583;">for</span><span style="color:#E1E4E8;"> i, data </span><span style="color:#F97583;">:=</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">range</span><span style="color:#E1E4E8;"> sparse {</span></span>
<span class="line"><span style="color:#E1E4E8;">		</span><span style="color:#F97583;">if</span><span style="color:#E1E4E8;"> i </span><span style="color:#F97583;">==</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">			</span><span style="color:#F97583;">continue</span></span>
<span class="line"><span style="color:#E1E4E8;">		}</span></span>
<span class="line"><span style="color:#E1E4E8;">		slice[data.Row][data.Col] </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> data.Val</span></span>
<span class="line"><span style="color:#E1E4E8;">	}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">	</span><span style="color:#F97583;">return</span><span style="color:#E1E4E8;"> slice</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">package</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">main</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D73A49;">import</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&quot;</span><span style="color:#6F42C1;">fmt</span><span style="color:#032F62;">&quot;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D73A49;">type</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">SparseArray</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">struct</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">	Row </span><span style="color:#D73A49;">int</span></span>
<span class="line"><span style="color:#24292E;">	Col </span><span style="color:#D73A49;">int</span></span>
<span class="line"><span style="color:#24292E;">	Val </span><span style="color:#D73A49;">int</span></span>
<span class="line"><span style="color:#24292E;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D73A49;">func</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">main</span><span style="color:#24292E;">() {</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">	chess </span><span style="color:#D73A49;">:=</span><span style="color:#24292E;"> [][]</span><span style="color:#D73A49;">int</span><span style="color:#24292E;">{</span></span>
<span class="line"><span style="color:#24292E;">		{</span><span style="color:#005CC5;">0</span><span style="color:#24292E;">, </span><span style="color:#005CC5;">0</span><span style="color:#24292E;">, </span><span style="color:#005CC5;">0</span><span style="color:#24292E;">, </span><span style="color:#005CC5;">0</span><span style="color:#24292E;">, </span><span style="color:#005CC5;">0</span><span style="color:#24292E;">, </span><span style="color:#005CC5;">0</span><span style="color:#24292E;">, </span><span style="color:#005CC5;">0</span><span style="color:#24292E;">, </span><span style="color:#005CC5;">0</span><span style="color:#24292E;">, </span><span style="color:#005CC5;">0</span><span style="color:#24292E;">},</span></span>
<span class="line"><span style="color:#24292E;">		{</span><span style="color:#005CC5;">0</span><span style="color:#24292E;">, </span><span style="color:#005CC5;">22</span><span style="color:#24292E;">, </span><span style="color:#005CC5;">0</span><span style="color:#24292E;">, </span><span style="color:#005CC5;">0</span><span style="color:#24292E;">, </span><span style="color:#005CC5;">0</span><span style="color:#24292E;">, </span><span style="color:#005CC5;">0</span><span style="color:#24292E;">, </span><span style="color:#005CC5;">15</span><span style="color:#24292E;">, </span><span style="color:#005CC5;">0</span><span style="color:#24292E;">, </span><span style="color:#005CC5;">0</span><span style="color:#24292E;">},</span></span>
<span class="line"><span style="color:#24292E;">		{</span><span style="color:#005CC5;">0</span><span style="color:#24292E;">, </span><span style="color:#005CC5;">0</span><span style="color:#24292E;">, </span><span style="color:#D73A49;">-</span><span style="color:#005CC5;">6</span><span style="color:#24292E;">, </span><span style="color:#005CC5;">0</span><span style="color:#24292E;">, </span><span style="color:#005CC5;">0</span><span style="color:#24292E;">, </span><span style="color:#005CC5;">0</span><span style="color:#24292E;">, </span><span style="color:#005CC5;">0</span><span style="color:#24292E;">, </span><span style="color:#005CC5;">0</span><span style="color:#24292E;">, </span><span style="color:#005CC5;">0</span><span style="color:#24292E;">},</span></span>
<span class="line"><span style="color:#24292E;">		{</span><span style="color:#005CC5;">0</span><span style="color:#24292E;">, </span><span style="color:#005CC5;">0</span><span style="color:#24292E;">, </span><span style="color:#005CC5;">0</span><span style="color:#24292E;">, </span><span style="color:#D73A49;">-</span><span style="color:#005CC5;">15</span><span style="color:#24292E;">, </span><span style="color:#005CC5;">0</span><span style="color:#24292E;">, </span><span style="color:#005CC5;">0</span><span style="color:#24292E;">, </span><span style="color:#005CC5;">0</span><span style="color:#24292E;">, </span><span style="color:#005CC5;">0</span><span style="color:#24292E;">, </span><span style="color:#005CC5;">0</span><span style="color:#24292E;">},</span></span>
<span class="line"><span style="color:#24292E;">	}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">	sparseArray </span><span style="color:#D73A49;">:=</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">sliceToSparseArray</span><span style="color:#24292E;">(chess)</span></span>
<span class="line"><span style="color:#24292E;">	fmt.</span><span style="color:#005CC5;">Printf</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&quot;</span><span style="color:#005CC5;">%#v\\n</span><span style="color:#032F62;">&quot;</span><span style="color:#24292E;">, sparseArray)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">	slice </span><span style="color:#D73A49;">:=</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">sparseToSlice</span><span style="color:#24292E;">(sparseArray)</span></span>
<span class="line"><span style="color:#24292E;">	</span><span style="color:#6A737D;">//打印slice</span></span>
<span class="line"><span style="color:#24292E;">	</span><span style="color:#D73A49;">for</span><span style="color:#24292E;"> _, row </span><span style="color:#D73A49;">:=</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">range</span><span style="color:#24292E;"> slice {</span></span>
<span class="line"><span style="color:#24292E;">		</span><span style="color:#D73A49;">for</span><span style="color:#24292E;"> _, col </span><span style="color:#D73A49;">:=</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">range</span><span style="color:#24292E;"> row {</span></span>
<span class="line"><span style="color:#24292E;">			fmt.</span><span style="color:#005CC5;">Printf</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&quot;</span><span style="color:#005CC5;">%d\\t</span><span style="color:#032F62;">&quot;</span><span style="color:#24292E;">, col)</span></span>
<span class="line"><span style="color:#24292E;">		}</span></span>
<span class="line"><span style="color:#24292E;">		fmt.</span><span style="color:#005CC5;">Println</span><span style="color:#24292E;">()</span></span>
<span class="line"><span style="color:#24292E;">	}</span></span>
<span class="line"><span style="color:#24292E;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 二维数组转稀疏数组</span></span>
<span class="line"><span style="color:#D73A49;">func</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">sliceToSparseArray</span><span style="color:#24292E;">(slice [][]</span><span style="color:#D73A49;">int</span><span style="color:#24292E;">) []SparseArray {</span></span>
<span class="line"><span style="color:#24292E;">	sparseArray </span><span style="color:#D73A49;">:=</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">make</span><span style="color:#24292E;">([]SparseArray, </span><span style="color:#005CC5;">0</span><span style="color:#24292E;">)</span></span>
<span class="line"><span style="color:#24292E;">	row </span><span style="color:#D73A49;">:=</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">len</span><span style="color:#24292E;">(slice)</span></span>
<span class="line"><span style="color:#24292E;">	col </span><span style="color:#D73A49;">:=</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">len</span><span style="color:#24292E;">(slice[</span><span style="color:#005CC5;">0</span><span style="color:#24292E;">])</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">	effectiveDataCount </span><span style="color:#D73A49;">:=</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">0</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">	</span><span style="color:#D73A49;">for</span><span style="color:#24292E;"> rowIndex, row </span><span style="color:#D73A49;">:=</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">range</span><span style="color:#24292E;"> slice {</span></span>
<span class="line"><span style="color:#24292E;">		</span><span style="color:#D73A49;">for</span><span style="color:#24292E;"> colIndex, col </span><span style="color:#D73A49;">:=</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">range</span><span style="color:#24292E;"> row {</span></span>
<span class="line"><span style="color:#24292E;">			</span><span style="color:#D73A49;">if</span><span style="color:#24292E;"> col </span><span style="color:#D73A49;">==</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">0</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">				</span><span style="color:#D73A49;">continue</span></span>
<span class="line"><span style="color:#24292E;">			}</span></span>
<span class="line"><span style="color:#24292E;">			effectiveDataCount</span><span style="color:#D73A49;">++</span></span>
<span class="line"><span style="color:#24292E;">			sparseArray </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">append</span><span style="color:#24292E;">(sparseArray, SparseArray{Row: rowIndex, Col: colIndex, Val: col})</span></span>
<span class="line"><span style="color:#24292E;">		}</span></span>
<span class="line"><span style="color:#24292E;">	}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">	finalResult </span><span style="color:#D73A49;">:=</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">make</span><span style="color:#24292E;">([]SparseArray, </span><span style="color:#005CC5;">0</span><span style="color:#24292E;">)</span></span>
<span class="line"><span style="color:#24292E;">	finalResult </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">append</span><span style="color:#24292E;">(finalResult, SparseArray{Row: row, Col: col, Val: effectiveDataCount})</span></span>
<span class="line"><span style="color:#24292E;">	finalResult </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">append</span><span style="color:#24292E;">(finalResult, sparseArray</span><span style="color:#D73A49;">...</span><span style="color:#24292E;">)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">	</span><span style="color:#D73A49;">return</span><span style="color:#24292E;"> finalResult</span></span>
<span class="line"><span style="color:#24292E;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 稀疏数组转二维数组</span></span>
<span class="line"><span style="color:#D73A49;">func</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">sparseToSlice</span><span style="color:#24292E;">(sparse []SparseArray) [][]</span><span style="color:#D73A49;">int</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">	</span><span style="color:#6A737D;">// 由于稀疏数组的特性，第一行的数据可以确定二维数组的行列</span></span>
<span class="line"><span style="color:#24292E;">	</span><span style="color:#D73A49;">var</span><span style="color:#24292E;"> (</span></span>
<span class="line"><span style="color:#24292E;">		rows  </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> sparse[</span><span style="color:#005CC5;">0</span><span style="color:#24292E;">].Row</span></span>
<span class="line"><span style="color:#24292E;">		col   </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> sparse[</span><span style="color:#005CC5;">0</span><span style="color:#24292E;">].Col</span></span>
<span class="line"><span style="color:#24292E;">		slice [][]</span><span style="color:#D73A49;">int</span></span>
<span class="line"><span style="color:#24292E;">	)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">	</span><span style="color:#6A737D;">// 初始化二维数组</span></span>
<span class="line"><span style="color:#24292E;">	</span><span style="color:#D73A49;">for</span><span style="color:#24292E;"> i </span><span style="color:#D73A49;">:=</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">0</span><span style="color:#24292E;">; i </span><span style="color:#D73A49;">&lt;</span><span style="color:#24292E;"> rows; i</span><span style="color:#D73A49;">++</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">		colData </span><span style="color:#D73A49;">:=</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">make</span><span style="color:#24292E;">([]</span><span style="color:#D73A49;">int</span><span style="color:#24292E;">, col)</span></span>
<span class="line"><span style="color:#24292E;">		slice </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">append</span><span style="color:#24292E;">(slice, colData)</span></span>
<span class="line"><span style="color:#24292E;">	}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">	</span><span style="color:#6A737D;">// 为二维数组的有效数据赋值</span></span>
<span class="line"><span style="color:#24292E;">	</span><span style="color:#D73A49;">for</span><span style="color:#24292E;"> i, data </span><span style="color:#D73A49;">:=</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">range</span><span style="color:#24292E;"> sparse {</span></span>
<span class="line"><span style="color:#24292E;">		</span><span style="color:#D73A49;">if</span><span style="color:#24292E;"> i </span><span style="color:#D73A49;">==</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">0</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">			</span><span style="color:#D73A49;">continue</span></span>
<span class="line"><span style="color:#24292E;">		}</span></span>
<span class="line"><span style="color:#24292E;">		slice[data.Row][data.Col] </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> data.Val</span></span>
<span class="line"><span style="color:#24292E;">	}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">	</span><span style="color:#D73A49;">return</span><span style="color:#24292E;"> slice</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br><span class="line-number">49</span><br><span class="line-number">50</span><br><span class="line-number">51</span><br><span class="line-number">52</span><br><span class="line-number">53</span><br><span class="line-number">54</span><br><span class="line-number">55</span><br><span class="line-number">56</span><br><span class="line-number">57</span><br><span class="line-number">58</span><br><span class="line-number">59</span><br><span class="line-number">60</span><br><span class="line-number">61</span><br><span class="line-number">62</span><br><span class="line-number">63</span><br><span class="line-number">64</span><br><span class="line-number">65</span><br><span class="line-number">66</span><br><span class="line-number">67</span><br><span class="line-number">68</span><br><span class="line-number">69</span><br><span class="line-number">70</span><br><span class="line-number">71</span><br><span class="line-number">72</span><br><span class="line-number">73</span><br><span class="line-number">74</span><br><span class="line-number">75</span><br><span class="line-number">76</span><br><span class="line-number">77</span><br><span class="line-number">78</span><br><span class="line-number">79</span><br><span class="line-number">80</span><br><span class="line-number">81</span><br><span class="line-number">82</span><br><span class="line-number">83</span><br></div></div>`,8),e=[o];function r(c,t,E,y,i,F){return n(),a("div",null,e)}const C=s(p,[["render",r]]);export{u as __pageData,C as default};
