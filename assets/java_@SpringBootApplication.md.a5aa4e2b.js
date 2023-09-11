import{_ as s,o as n,c as a,Q as o}from"./chunks/framework.96fe74fa.js";const b=JSON.parse('{"title":"浅谈@SpringBootApplication","description":"","frontmatter":{},"headers":[],"relativePath":"java/@SpringBootApplication.md","filePath":"java/@SpringBootApplication.md","lastUpdated":1694404151000}'),l={name:"java/@SpringBootApplication.md"},p=o(`<h1 id="浅谈-springbootapplication" tabindex="-1">浅谈@SpringBootApplication <a class="header-anchor" href="#浅谈-springbootapplication" aria-label="Permalink to &quot;浅谈@SpringBootApplication&quot;">​</a></h1><h2 id="springbootapplication" tabindex="-1"><strong>@SpringBootApplication</strong> <a class="header-anchor" href="#springbootapplication" aria-label="Permalink to &quot;**@SpringBootApplication**&quot;">​</a></h2><blockquote><p><strong><code>@SpringBootApplication</code></strong> 作为SpringBoot的核心注解，他的作用就是扫描特定包下的Bean并注入到Ioc容器中，同时开启自动配置(AutoConfiguration)，它是由 <strong><code>@SpringBootConfiguration</code></strong>、<strong><code>@EnableAutoConfiguration</code></strong> 和 <strong><code>@ComponentScan</code></strong> 三大注解组合而成（java元注解除外）。</p></blockquote><div class="language-java vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">java</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;">@</span><span style="color:#F97583;">SpringBootConfiguration</span></span>
<span class="line"><span style="color:#E1E4E8;">@</span><span style="color:#F97583;">EnableAutoConfiguration</span></span>
<span class="line"><span style="color:#E1E4E8;">@</span><span style="color:#F97583;">ComponentScan</span><span style="color:#E1E4E8;">(</span><span style="color:#79B8FF;">excludeFilters</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> { @</span><span style="color:#F97583;">Filter</span><span style="color:#E1E4E8;">(</span><span style="color:#79B8FF;">type</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> FilterType.CUSTOM, </span><span style="color:#79B8FF;">classes</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> TypeExcludeFilter.class),</span></span>
<span class="line"><span style="color:#E1E4E8;">		@</span><span style="color:#F97583;">Filter</span><span style="color:#E1E4E8;">(</span><span style="color:#79B8FF;">type</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> FilterType.CUSTOM, </span><span style="color:#79B8FF;">classes</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> AutoConfigurationExcludeFilter.class) })</span></span>
<span class="line"><span style="color:#F97583;">public</span><span style="color:#E1E4E8;"> @</span><span style="color:#F97583;">interface</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">SpringBootApplication</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">/**</span></span>
<span class="line"><span style="color:#6A737D;">     * 排除特定的自动配置类，使其永远不会被应用</span></span>
<span class="line"><span style="color:#6A737D;">     */</span></span>
<span class="line"><span style="color:#E1E4E8;">	@</span><span style="color:#F97583;">AliasFor</span><span style="color:#E1E4E8;">(</span><span style="color:#79B8FF;">annotation</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> EnableAutoConfiguration.class)</span></span>
<span class="line"><span style="color:#E1E4E8;">	Class</span><span style="color:#F97583;">&lt;?&gt;</span><span style="color:#E1E4E8;">[] </span><span style="color:#B392F0;">exclude</span><span style="color:#E1E4E8;">() </span><span style="color:#F97583;">default</span><span style="color:#E1E4E8;"> {};</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">/**</span></span>
<span class="line"><span style="color:#6A737D;">     * 排除特定的自动配置类名称，使其永远不会被应用</span></span>
<span class="line"><span style="color:#6A737D;">     */</span></span>
<span class="line"><span style="color:#E1E4E8;">	@</span><span style="color:#F97583;">AliasFor</span><span style="color:#E1E4E8;">(</span><span style="color:#79B8FF;">annotation</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> EnableAutoConfiguration.class)</span></span>
<span class="line"><span style="color:#E1E4E8;">	</span><span style="color:#F97583;">String</span><span style="color:#E1E4E8;">[] </span><span style="color:#B392F0;">excludeName</span><span style="color:#E1E4E8;">() </span><span style="color:#F97583;">default</span><span style="color:#E1E4E8;"> {};</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">/**</span></span>
<span class="line"><span style="color:#6A737D;">     * 用于扫描带注释组件的基础包。</span></span>
<span class="line"><span style="color:#6A737D;">     * 使用 scanBasePackageClasses 作为基于字符串的包名称的类型安全替代方案。</span></span>
<span class="line"><span style="color:#6A737D;">     */</span></span>
<span class="line"><span style="color:#E1E4E8;">	@</span><span style="color:#F97583;">AliasFor</span><span style="color:#E1E4E8;">(</span><span style="color:#79B8FF;">annotation</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> ComponentScan.class, </span><span style="color:#79B8FF;">attribute</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&quot;basePackages&quot;</span><span style="color:#E1E4E8;">)</span></span>
<span class="line"><span style="color:#E1E4E8;">	</span><span style="color:#F97583;">String</span><span style="color:#E1E4E8;">[] </span><span style="color:#B392F0;">scanBasePackages</span><span style="color:#E1E4E8;">() </span><span style="color:#F97583;">default</span><span style="color:#E1E4E8;"> {};</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">/**</span></span>
<span class="line"><span style="color:#6A737D;">     * scanBasePackages 的类型安全替代方案，用于指定要扫描带注释组件的包。将扫描指定的每个类的包。</span></span>
<span class="line"><span style="color:#6A737D;">     */</span><span style="color:#E1E4E8;"> </span></span>
<span class="line"><span style="color:#E1E4E8;">	@</span><span style="color:#F97583;">AliasFor</span><span style="color:#E1E4E8;">(</span><span style="color:#79B8FF;">annotation</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> ComponentScan.class, </span><span style="color:#79B8FF;">attribute</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&quot;basePackageClasses&quot;</span><span style="color:#E1E4E8;">)</span></span>
<span class="line"><span style="color:#E1E4E8;">	Class</span><span style="color:#F97583;">&lt;?&gt;</span><span style="color:#E1E4E8;">[] </span><span style="color:#B392F0;">scanBasePackageClasses</span><span style="color:#E1E4E8;">() </span><span style="color:#F97583;">default</span><span style="color:#E1E4E8;"> {};</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">/**</span></span>
<span class="line"><span style="color:#6A737D;">     * 用于命名 Spring 容器中检测到的组件的BeanNameGenerator类</span></span>
<span class="line"><span style="color:#6A737D;">     */</span></span>
<span class="line"><span style="color:#E1E4E8;">	@</span><span style="color:#F97583;">AliasFor</span><span style="color:#E1E4E8;">(</span><span style="color:#79B8FF;">annotation</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> ComponentScan.class, </span><span style="color:#79B8FF;">attribute</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&quot;nameGenerator&quot;</span><span style="color:#E1E4E8;">)</span></span>
<span class="line"><span style="color:#E1E4E8;">	Class</span><span style="color:#F97583;">&lt;?</span><span style="color:#E1E4E8;"> extends BeanNameGenerator</span><span style="color:#F97583;">&gt;</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">nameGenerator</span><span style="color:#E1E4E8;">() </span><span style="color:#F97583;">default</span><span style="color:#E1E4E8;"> BeanNameGenerator.class;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">/**</span></span>
<span class="line"><span style="color:#6A737D;">     * 指定是否应该代理@Bean方法以强制执行 bean 生命周期行为，</span></span>
<span class="line"><span style="color:#6A737D;">     * 例如即使在用户代码中直接调用@Bean方法的情况下也返回共享的单例 bean 实例。 </span></span>
<span class="line"><span style="color:#6A737D;">     * 此功能需要方法拦截，通过运行时生成的 CGLIB 子类实现，该子类具有配置类及其方法不允许声明final等限制。</span></span>
<span class="line"><span style="color:#6A737D;">     * 默认值为true ，允许配置类中的“bean 间引用”以及对此配置的@Bean方法的外部调用，例如从另一个配置类。 </span></span>
<span class="line"><span style="color:#6A737D;">     * 如果不需要这样做，因为每个特定配置的@Bean方法都是自包含的，并且设计为容器使用的普通工厂方法，请将此标志切换为false以避免 CGLIB 子类处理。</span></span>
<span class="line"><span style="color:#6A737D;">     * 关闭 bean 方法拦截有效地单独处理@Bean方法，就像在非@Configuration类上声明时一样，又名@Bean Lite模式（参见@Bean javadoc ）。 </span></span>
<span class="line"><span style="color:#6A737D;">     * 因此，它在行为上等同于删除@Configuration型。</span></span>
<span class="line"><span style="color:#6A737D;">     */</span></span>
<span class="line"><span style="color:#E1E4E8;">	@</span><span style="color:#F97583;">AliasFor</span><span style="color:#E1E4E8;">(</span><span style="color:#79B8FF;">annotation</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> Configuration.class)</span></span>
<span class="line"><span style="color:#E1E4E8;">	</span><span style="color:#F97583;">boolean</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">proxyBeanMethods</span><span style="color:#E1E4E8;">() </span><span style="color:#F97583;">default</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">true</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">@</span><span style="color:#D73A49;">SpringBootConfiguration</span></span>
<span class="line"><span style="color:#24292E;">@</span><span style="color:#D73A49;">EnableAutoConfiguration</span></span>
<span class="line"><span style="color:#24292E;">@</span><span style="color:#D73A49;">ComponentScan</span><span style="color:#24292E;">(</span><span style="color:#005CC5;">excludeFilters</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> { @</span><span style="color:#D73A49;">Filter</span><span style="color:#24292E;">(</span><span style="color:#005CC5;">type</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> FilterType.CUSTOM, </span><span style="color:#005CC5;">classes</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> TypeExcludeFilter.class),</span></span>
<span class="line"><span style="color:#24292E;">		@</span><span style="color:#D73A49;">Filter</span><span style="color:#24292E;">(</span><span style="color:#005CC5;">type</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> FilterType.CUSTOM, </span><span style="color:#005CC5;">classes</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> AutoConfigurationExcludeFilter.class) })</span></span>
<span class="line"><span style="color:#D73A49;">public</span><span style="color:#24292E;"> @</span><span style="color:#D73A49;">interface</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">SpringBootApplication</span><span style="color:#24292E;"> {</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">/**</span></span>
<span class="line"><span style="color:#6A737D;">     * 排除特定的自动配置类，使其永远不会被应用</span></span>
<span class="line"><span style="color:#6A737D;">     */</span></span>
<span class="line"><span style="color:#24292E;">	@</span><span style="color:#D73A49;">AliasFor</span><span style="color:#24292E;">(</span><span style="color:#005CC5;">annotation</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> EnableAutoConfiguration.class)</span></span>
<span class="line"><span style="color:#24292E;">	Class</span><span style="color:#D73A49;">&lt;?&gt;</span><span style="color:#24292E;">[] </span><span style="color:#6F42C1;">exclude</span><span style="color:#24292E;">() </span><span style="color:#D73A49;">default</span><span style="color:#24292E;"> {};</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">/**</span></span>
<span class="line"><span style="color:#6A737D;">     * 排除特定的自动配置类名称，使其永远不会被应用</span></span>
<span class="line"><span style="color:#6A737D;">     */</span></span>
<span class="line"><span style="color:#24292E;">	@</span><span style="color:#D73A49;">AliasFor</span><span style="color:#24292E;">(</span><span style="color:#005CC5;">annotation</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> EnableAutoConfiguration.class)</span></span>
<span class="line"><span style="color:#24292E;">	</span><span style="color:#D73A49;">String</span><span style="color:#24292E;">[] </span><span style="color:#6F42C1;">excludeName</span><span style="color:#24292E;">() </span><span style="color:#D73A49;">default</span><span style="color:#24292E;"> {};</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">/**</span></span>
<span class="line"><span style="color:#6A737D;">     * 用于扫描带注释组件的基础包。</span></span>
<span class="line"><span style="color:#6A737D;">     * 使用 scanBasePackageClasses 作为基于字符串的包名称的类型安全替代方案。</span></span>
<span class="line"><span style="color:#6A737D;">     */</span></span>
<span class="line"><span style="color:#24292E;">	@</span><span style="color:#D73A49;">AliasFor</span><span style="color:#24292E;">(</span><span style="color:#005CC5;">annotation</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> ComponentScan.class, </span><span style="color:#005CC5;">attribute</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&quot;basePackages&quot;</span><span style="color:#24292E;">)</span></span>
<span class="line"><span style="color:#24292E;">	</span><span style="color:#D73A49;">String</span><span style="color:#24292E;">[] </span><span style="color:#6F42C1;">scanBasePackages</span><span style="color:#24292E;">() </span><span style="color:#D73A49;">default</span><span style="color:#24292E;"> {};</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">/**</span></span>
<span class="line"><span style="color:#6A737D;">     * scanBasePackages 的类型安全替代方案，用于指定要扫描带注释组件的包。将扫描指定的每个类的包。</span></span>
<span class="line"><span style="color:#6A737D;">     */</span><span style="color:#24292E;"> </span></span>
<span class="line"><span style="color:#24292E;">	@</span><span style="color:#D73A49;">AliasFor</span><span style="color:#24292E;">(</span><span style="color:#005CC5;">annotation</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> ComponentScan.class, </span><span style="color:#005CC5;">attribute</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&quot;basePackageClasses&quot;</span><span style="color:#24292E;">)</span></span>
<span class="line"><span style="color:#24292E;">	Class</span><span style="color:#D73A49;">&lt;?&gt;</span><span style="color:#24292E;">[] </span><span style="color:#6F42C1;">scanBasePackageClasses</span><span style="color:#24292E;">() </span><span style="color:#D73A49;">default</span><span style="color:#24292E;"> {};</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">/**</span></span>
<span class="line"><span style="color:#6A737D;">     * 用于命名 Spring 容器中检测到的组件的BeanNameGenerator类</span></span>
<span class="line"><span style="color:#6A737D;">     */</span></span>
<span class="line"><span style="color:#24292E;">	@</span><span style="color:#D73A49;">AliasFor</span><span style="color:#24292E;">(</span><span style="color:#005CC5;">annotation</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> ComponentScan.class, </span><span style="color:#005CC5;">attribute</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&quot;nameGenerator&quot;</span><span style="color:#24292E;">)</span></span>
<span class="line"><span style="color:#24292E;">	Class</span><span style="color:#D73A49;">&lt;?</span><span style="color:#24292E;"> extends BeanNameGenerator</span><span style="color:#D73A49;">&gt;</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">nameGenerator</span><span style="color:#24292E;">() </span><span style="color:#D73A49;">default</span><span style="color:#24292E;"> BeanNameGenerator.class;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">/**</span></span>
<span class="line"><span style="color:#6A737D;">     * 指定是否应该代理@Bean方法以强制执行 bean 生命周期行为，</span></span>
<span class="line"><span style="color:#6A737D;">     * 例如即使在用户代码中直接调用@Bean方法的情况下也返回共享的单例 bean 实例。 </span></span>
<span class="line"><span style="color:#6A737D;">     * 此功能需要方法拦截，通过运行时生成的 CGLIB 子类实现，该子类具有配置类及其方法不允许声明final等限制。</span></span>
<span class="line"><span style="color:#6A737D;">     * 默认值为true ，允许配置类中的“bean 间引用”以及对此配置的@Bean方法的外部调用，例如从另一个配置类。 </span></span>
<span class="line"><span style="color:#6A737D;">     * 如果不需要这样做，因为每个特定配置的@Bean方法都是自包含的，并且设计为容器使用的普通工厂方法，请将此标志切换为false以避免 CGLIB 子类处理。</span></span>
<span class="line"><span style="color:#6A737D;">     * 关闭 bean 方法拦截有效地单独处理@Bean方法，就像在非@Configuration类上声明时一样，又名@Bean Lite模式（参见@Bean javadoc ）。 </span></span>
<span class="line"><span style="color:#6A737D;">     * 因此，它在行为上等同于删除@Configuration型。</span></span>
<span class="line"><span style="color:#6A737D;">     */</span></span>
<span class="line"><span style="color:#24292E;">	@</span><span style="color:#D73A49;">AliasFor</span><span style="color:#24292E;">(</span><span style="color:#005CC5;">annotation</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> Configuration.class)</span></span>
<span class="line"><span style="color:#24292E;">	</span><span style="color:#D73A49;">boolean</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">proxyBeanMethods</span><span style="color:#24292E;">() </span><span style="color:#D73A49;">default</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">true</span><span style="color:#24292E;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br><span class="line-number">49</span><br><span class="line-number">50</span><br></div></div><h2 id="componentscan" tabindex="-1"><strong>@ComponentScan</strong> <a class="header-anchor" href="#componentscan" aria-label="Permalink to &quot;**@ComponentScan**&quot;">​</a></h2><div class="language-java vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">java</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#6A737D;">/**</span></span>
<span class="line"><span style="color:#6A737D;"> * 组件扫描指令以与\`@Configuration\`类一起使用。 提供与 Spring XML 并行的支持  元素。</span></span>
<span class="line"><span style="color:#6A737D;"> * 可以\`basePackageClasses\`或\`basePackages\` （或其别名value ）来定义要扫描的特定包。 </span></span>
<span class="line"><span style="color:#6A737D;"> * 如果未定义特定的包，则会从声明此注解的类的包中进行扫描。</span></span>
<span class="line"><span style="color:#6A737D;"> */</span></span>
<span class="line"><span style="color:#F97583;">public</span><span style="color:#E1E4E8;"> @</span><span style="color:#F97583;">interface</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">ComponentScan</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">	</span><span style="color:#6A737D;">/**</span></span>
<span class="line"><span style="color:#6A737D;">     * basePackages 的别名。</span></span>
<span class="line"><span style="color:#6A737D;">     * 如果不需要其他属性，则允许更简洁的注释声明 - 例如，@ComponentScan(&quot;org.sp.pkg&quot;) 而不是 @ComponentScan(basePackages = &quot;org.my.pkg&quot;)。</span></span>
<span class="line"><span style="color:#6A737D;">     */</span></span>
<span class="line"><span style="color:#E1E4E8;">	@</span><span style="color:#F97583;">AliasFor</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&quot;basePackages&quot;</span><span style="color:#E1E4E8;">)</span></span>
<span class="line"><span style="color:#E1E4E8;">	</span><span style="color:#F97583;">String</span><span style="color:#E1E4E8;">[] </span><span style="color:#B392F0;">value</span><span style="color:#E1E4E8;">() </span><span style="color:#F97583;">default</span><span style="color:#E1E4E8;"> {};</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">/**</span></span>
<span class="line"><span style="color:#6A737D;">     * 用于扫描带注释组件的基础包。</span></span>
<span class="line"><span style="color:#6A737D;">     * value是此属性的别名（并且与此属性互斥）。</span></span>
<span class="line"><span style="color:#6A737D;">     * 使用 basePackageClasses 作为基于字符串的包名称的类型安全替代方案。</span></span>
<span class="line"><span style="color:#6A737D;">     */</span></span>
<span class="line"><span style="color:#E1E4E8;">	@</span><span style="color:#F97583;">AliasFor</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&quot;value&quot;</span><span style="color:#E1E4E8;">)</span></span>
<span class="line"><span style="color:#E1E4E8;">	</span><span style="color:#F97583;">String</span><span style="color:#E1E4E8;">[] </span><span style="color:#B392F0;">basePackages</span><span style="color:#E1E4E8;">() </span><span style="color:#F97583;">default</span><span style="color:#E1E4E8;"> {};</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">/**</span></span>
<span class="line"><span style="color:#6A737D;">     * basePackages 的类型安全替代方案，用于指定要扫描带注释组件的包。</span></span>
<span class="line"><span style="color:#6A737D;">     * 将扫描指定的每个类的包。考虑在每个包中创建一个特殊的无操作标记类或接口，除了被此属性引用之外没有其他用途。</span></span>
<span class="line"><span style="color:#6A737D;">     */</span></span>
<span class="line"><span style="color:#E1E4E8;">	Class</span><span style="color:#F97583;">&lt;?&gt;</span><span style="color:#E1E4E8;">[] </span><span style="color:#B392F0;">basePackageClasses</span><span style="color:#E1E4E8;">() </span><span style="color:#F97583;">default</span><span style="color:#E1E4E8;"> {};</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">	</span><span style="color:#6A737D;">/**</span></span>
<span class="line"><span style="color:#6A737D;">     * 用于命名 Spring 容器中检测到的组件的 BeanNameGenerator 类。 </span></span>
<span class="line"><span style="color:#6A737D;">     * BeanNameGenerator 接口本身的默认值表示用于处理此 @ComponentScan 注解的扫描器应使用其继承的 bean 名称生成器，例如默认 AnnotationBeanNameGenerator 或在引导时提供给应用程序上下文的任何自定义实例。</span></span>
<span class="line"><span style="color:#6A737D;">     */</span></span>
<span class="line"><span style="color:#E1E4E8;">	Class</span><span style="color:#F97583;">&lt;?</span><span style="color:#E1E4E8;"> extends BeanNameGenerator</span><span style="color:#F97583;">&gt;</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">nameGenerator</span><span style="color:#E1E4E8;">() </span><span style="color:#F97583;">default</span><span style="color:#E1E4E8;"> BeanNameGenerator.class;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">	</span><span style="color:#6A737D;">/**</span></span>
<span class="line"><span style="color:#6A737D;">     * 用于解析检测到的组件的范围。</span></span>
<span class="line"><span style="color:#6A737D;">     */</span></span>
<span class="line"><span style="color:#E1E4E8;">	Class</span><span style="color:#F97583;">&lt;?</span><span style="color:#E1E4E8;"> extends ScopeMetadataResolver</span><span style="color:#F97583;">&gt;</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">scopeResolver</span><span style="color:#E1E4E8;">() </span><span style="color:#F97583;">default</span><span style="color:#E1E4E8;"> AnnotationScopeMetadataResolver.class;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">	</span><span style="color:#6A737D;">/**</span></span>
<span class="line"><span style="color:#6A737D;">     * 指示是否应为检测到的组件生成代理，这在以代理样式方式使用范围时可能是必需的。</span></span>
<span class="line"><span style="color:#6A737D;">     * 默认值遵循用于执行实际扫描的组件扫描器的默认行为。</span></span>
<span class="line"><span style="color:#6A737D;">     */</span></span>
<span class="line"><span style="color:#E1E4E8;">	ScopedProxyMode </span><span style="color:#B392F0;">scopedProxy</span><span style="color:#E1E4E8;">() </span><span style="color:#F97583;">default</span><span style="color:#E1E4E8;"> ScopedProxyMode.DEFAULT;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">	</span><span style="color:#6A737D;">/**</span></span>
<span class="line"><span style="color:#6A737D;">     * 控制符合组件检测条件的类文件。</span></span>
<span class="line"><span style="color:#6A737D;">     */</span></span>
<span class="line"><span style="color:#E1E4E8;">	String </span><span style="color:#B392F0;">resourcePattern</span><span style="color:#E1E4E8;">() </span><span style="color:#F97583;">default</span><span style="color:#E1E4E8;"> ClassPathScanningCandidateComponentProvider.DEFAULT_RESOURCE_PATTERN;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">	</span><span style="color:#6A737D;">/**</span></span>
<span class="line"><span style="color:#6A737D;">     * 指示是否应启用对使用 @Component、@Repository、@Service 或 @Controller 注释的类的自动检测。</span></span>
<span class="line"><span style="color:#6A737D;">     */</span></span>
<span class="line"><span style="color:#E1E4E8;">	</span><span style="color:#F97583;">boolean</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">useDefaultFilters</span><span style="color:#E1E4E8;">() </span><span style="color:#F97583;">default</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">true</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">	</span><span style="color:#6A737D;">/**</span></span>
<span class="line"><span style="color:#6A737D;">     * 指定哪些类型适合组件扫描。</span></span>
<span class="line"><span style="color:#6A737D;">     * 进一步将候选组件集从 \`basePackages\` 中的所有内容缩小到与给定过滤器或过滤器匹配的基本包中的所有内容。</span></span>
<span class="line"><span style="color:#6A737D;">     */</span></span>
<span class="line"><span style="color:#E1E4E8;">	</span><span style="color:#F97583;">Filter</span><span style="color:#E1E4E8;">[] </span><span style="color:#B392F0;">includeFilters</span><span style="color:#E1E4E8;">() </span><span style="color:#F97583;">default</span><span style="color:#E1E4E8;"> {};</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">	</span><span style="color:#6A737D;">/**</span></span>
<span class="line"><span style="color:#6A737D;">     * 指定哪些类型不进行组件扫描。</span></span>
<span class="line"><span style="color:#6A737D;">     */</span></span>
<span class="line"><span style="color:#E1E4E8;">	</span><span style="color:#F97583;">Filter</span><span style="color:#E1E4E8;">[] </span><span style="color:#B392F0;">excludeFilters</span><span style="color:#E1E4E8;">() </span><span style="color:#F97583;">default</span><span style="color:#E1E4E8;"> {};</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">	</span><span style="color:#6A737D;">/**</span></span>
<span class="line"><span style="color:#6A737D;">     * 指定是否应为延迟初始化注册扫描的 bean。</span></span>
<span class="line"><span style="color:#6A737D;">     */</span></span>
<span class="line"><span style="color:#E1E4E8;">	</span><span style="color:#F97583;">boolean</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">lazyInit</span><span style="color:#E1E4E8;">() </span><span style="color:#F97583;">default</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">false</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6A737D;">/**</span></span>
<span class="line"><span style="color:#6A737D;"> * 组件扫描指令以与\`@Configuration\`类一起使用。 提供与 Spring XML 并行的支持  元素。</span></span>
<span class="line"><span style="color:#6A737D;"> * 可以\`basePackageClasses\`或\`basePackages\` （或其别名value ）来定义要扫描的特定包。 </span></span>
<span class="line"><span style="color:#6A737D;"> * 如果未定义特定的包，则会从声明此注解的类的包中进行扫描。</span></span>
<span class="line"><span style="color:#6A737D;"> */</span></span>
<span class="line"><span style="color:#D73A49;">public</span><span style="color:#24292E;"> @</span><span style="color:#D73A49;">interface</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">ComponentScan</span><span style="color:#24292E;"> {</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">	</span><span style="color:#6A737D;">/**</span></span>
<span class="line"><span style="color:#6A737D;">     * basePackages 的别名。</span></span>
<span class="line"><span style="color:#6A737D;">     * 如果不需要其他属性，则允许更简洁的注释声明 - 例如，@ComponentScan(&quot;org.sp.pkg&quot;) 而不是 @ComponentScan(basePackages = &quot;org.my.pkg&quot;)。</span></span>
<span class="line"><span style="color:#6A737D;">     */</span></span>
<span class="line"><span style="color:#24292E;">	@</span><span style="color:#D73A49;">AliasFor</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&quot;basePackages&quot;</span><span style="color:#24292E;">)</span></span>
<span class="line"><span style="color:#24292E;">	</span><span style="color:#D73A49;">String</span><span style="color:#24292E;">[] </span><span style="color:#6F42C1;">value</span><span style="color:#24292E;">() </span><span style="color:#D73A49;">default</span><span style="color:#24292E;"> {};</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">/**</span></span>
<span class="line"><span style="color:#6A737D;">     * 用于扫描带注释组件的基础包。</span></span>
<span class="line"><span style="color:#6A737D;">     * value是此属性的别名（并且与此属性互斥）。</span></span>
<span class="line"><span style="color:#6A737D;">     * 使用 basePackageClasses 作为基于字符串的包名称的类型安全替代方案。</span></span>
<span class="line"><span style="color:#6A737D;">     */</span></span>
<span class="line"><span style="color:#24292E;">	@</span><span style="color:#D73A49;">AliasFor</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&quot;value&quot;</span><span style="color:#24292E;">)</span></span>
<span class="line"><span style="color:#24292E;">	</span><span style="color:#D73A49;">String</span><span style="color:#24292E;">[] </span><span style="color:#6F42C1;">basePackages</span><span style="color:#24292E;">() </span><span style="color:#D73A49;">default</span><span style="color:#24292E;"> {};</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">/**</span></span>
<span class="line"><span style="color:#6A737D;">     * basePackages 的类型安全替代方案，用于指定要扫描带注释组件的包。</span></span>
<span class="line"><span style="color:#6A737D;">     * 将扫描指定的每个类的包。考虑在每个包中创建一个特殊的无操作标记类或接口，除了被此属性引用之外没有其他用途。</span></span>
<span class="line"><span style="color:#6A737D;">     */</span></span>
<span class="line"><span style="color:#24292E;">	Class</span><span style="color:#D73A49;">&lt;?&gt;</span><span style="color:#24292E;">[] </span><span style="color:#6F42C1;">basePackageClasses</span><span style="color:#24292E;">() </span><span style="color:#D73A49;">default</span><span style="color:#24292E;"> {};</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">	</span><span style="color:#6A737D;">/**</span></span>
<span class="line"><span style="color:#6A737D;">     * 用于命名 Spring 容器中检测到的组件的 BeanNameGenerator 类。 </span></span>
<span class="line"><span style="color:#6A737D;">     * BeanNameGenerator 接口本身的默认值表示用于处理此 @ComponentScan 注解的扫描器应使用其继承的 bean 名称生成器，例如默认 AnnotationBeanNameGenerator 或在引导时提供给应用程序上下文的任何自定义实例。</span></span>
<span class="line"><span style="color:#6A737D;">     */</span></span>
<span class="line"><span style="color:#24292E;">	Class</span><span style="color:#D73A49;">&lt;?</span><span style="color:#24292E;"> extends BeanNameGenerator</span><span style="color:#D73A49;">&gt;</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">nameGenerator</span><span style="color:#24292E;">() </span><span style="color:#D73A49;">default</span><span style="color:#24292E;"> BeanNameGenerator.class;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">	</span><span style="color:#6A737D;">/**</span></span>
<span class="line"><span style="color:#6A737D;">     * 用于解析检测到的组件的范围。</span></span>
<span class="line"><span style="color:#6A737D;">     */</span></span>
<span class="line"><span style="color:#24292E;">	Class</span><span style="color:#D73A49;">&lt;?</span><span style="color:#24292E;"> extends ScopeMetadataResolver</span><span style="color:#D73A49;">&gt;</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">scopeResolver</span><span style="color:#24292E;">() </span><span style="color:#D73A49;">default</span><span style="color:#24292E;"> AnnotationScopeMetadataResolver.class;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">	</span><span style="color:#6A737D;">/**</span></span>
<span class="line"><span style="color:#6A737D;">     * 指示是否应为检测到的组件生成代理，这在以代理样式方式使用范围时可能是必需的。</span></span>
<span class="line"><span style="color:#6A737D;">     * 默认值遵循用于执行实际扫描的组件扫描器的默认行为。</span></span>
<span class="line"><span style="color:#6A737D;">     */</span></span>
<span class="line"><span style="color:#24292E;">	ScopedProxyMode </span><span style="color:#6F42C1;">scopedProxy</span><span style="color:#24292E;">() </span><span style="color:#D73A49;">default</span><span style="color:#24292E;"> ScopedProxyMode.DEFAULT;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">	</span><span style="color:#6A737D;">/**</span></span>
<span class="line"><span style="color:#6A737D;">     * 控制符合组件检测条件的类文件。</span></span>
<span class="line"><span style="color:#6A737D;">     */</span></span>
<span class="line"><span style="color:#24292E;">	String </span><span style="color:#6F42C1;">resourcePattern</span><span style="color:#24292E;">() </span><span style="color:#D73A49;">default</span><span style="color:#24292E;"> ClassPathScanningCandidateComponentProvider.DEFAULT_RESOURCE_PATTERN;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">	</span><span style="color:#6A737D;">/**</span></span>
<span class="line"><span style="color:#6A737D;">     * 指示是否应启用对使用 @Component、@Repository、@Service 或 @Controller 注释的类的自动检测。</span></span>
<span class="line"><span style="color:#6A737D;">     */</span></span>
<span class="line"><span style="color:#24292E;">	</span><span style="color:#D73A49;">boolean</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">useDefaultFilters</span><span style="color:#24292E;">() </span><span style="color:#D73A49;">default</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">true</span><span style="color:#24292E;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">	</span><span style="color:#6A737D;">/**</span></span>
<span class="line"><span style="color:#6A737D;">     * 指定哪些类型适合组件扫描。</span></span>
<span class="line"><span style="color:#6A737D;">     * 进一步将候选组件集从 \`basePackages\` 中的所有内容缩小到与给定过滤器或过滤器匹配的基本包中的所有内容。</span></span>
<span class="line"><span style="color:#6A737D;">     */</span></span>
<span class="line"><span style="color:#24292E;">	</span><span style="color:#D73A49;">Filter</span><span style="color:#24292E;">[] </span><span style="color:#6F42C1;">includeFilters</span><span style="color:#24292E;">() </span><span style="color:#D73A49;">default</span><span style="color:#24292E;"> {};</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">	</span><span style="color:#6A737D;">/**</span></span>
<span class="line"><span style="color:#6A737D;">     * 指定哪些类型不进行组件扫描。</span></span>
<span class="line"><span style="color:#6A737D;">     */</span></span>
<span class="line"><span style="color:#24292E;">	</span><span style="color:#D73A49;">Filter</span><span style="color:#24292E;">[] </span><span style="color:#6F42C1;">excludeFilters</span><span style="color:#24292E;">() </span><span style="color:#D73A49;">default</span><span style="color:#24292E;"> {};</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">	</span><span style="color:#6A737D;">/**</span></span>
<span class="line"><span style="color:#6A737D;">     * 指定是否应为延迟初始化注册扫描的 bean。</span></span>
<span class="line"><span style="color:#6A737D;">     */</span></span>
<span class="line"><span style="color:#24292E;">	</span><span style="color:#D73A49;">boolean</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">lazyInit</span><span style="color:#24292E;">() </span><span style="color:#D73A49;">default</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">false</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br><span class="line-number">49</span><br><span class="line-number">50</span><br><span class="line-number">51</span><br><span class="line-number">52</span><br><span class="line-number">53</span><br><span class="line-number">54</span><br><span class="line-number">55</span><br><span class="line-number">56</span><br><span class="line-number">57</span><br><span class="line-number">58</span><br><span class="line-number">59</span><br><span class="line-number">60</span><br><span class="line-number">61</span><br><span class="line-number">62</span><br><span class="line-number">63</span><br><span class="line-number">64</span><br><span class="line-number">65</span><br><span class="line-number">66</span><br><span class="line-number">67</span><br><span class="line-number">68</span><br><span class="line-number">69</span><br><span class="line-number">70</span><br><span class="line-number">71</span><br></div></div><h2 id="enableautoconfiguration" tabindex="-1"><strong>@EnableAutoConfiguration</strong> <a class="header-anchor" href="#enableautoconfiguration" aria-label="Permalink to &quot;**@EnableAutoConfiguration**&quot;">​</a></h2><div class="language-java vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">java</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#6A737D;">/**</span></span>
<span class="line"><span style="color:#6A737D;"> * 启用 Spring Application Context 的自动配置，尝试猜测和配置您可能需要的 bean。</span></span>
<span class="line"><span style="color:#6A737D;"> * 自动配置类通常根据您的类路径和您定义的 bean 应用。</span></span>
<span class="line"><span style="color:#6A737D;"> * 例如，如果您的类路径中有 tomcat-embedded.jar，您可能需要一个 TomcatServletWebServerFactory（除非您已经定义了自己的  ServletWebServerFactory bean）。</span></span>
<span class="line"><span style="color:#6A737D;"> * 使用\`@SpringBootApplication\` 时，上下文的自动配置会自动启用，因此添加此注解不会产生额外影响。</span></span>
<span class="line"><span style="color:#6A737D;"> * 自动配置尝试尽可能智能，并且会随着您定义更多自己的配置而后退。</span></span>
<span class="line"><span style="color:#6A737D;"> * 您始终可以手动 exclude()。 任何您不想应用的配置（如果您无权访问它们，请使用 excludeName()）。</span></span>
<span class="line"><span style="color:#6A737D;"> * 您还可以通过 spring.autoconfigure.exclude 属性排除它们。</span></span>
<span class="line"><span style="color:#6A737D;"> * 自动配置总是在用户定义的 bean 注册后应用。使用\`@EnableAutoConfiguration\` 注解的类的包，通常通过\`@SpringBootApplication\`，具有特定的意义，通常用作&#39;默认&#39;。</span></span>
<span class="line"><span style="color:#6A737D;"> * 例如，它将在扫描\`@Entity\` 类时使用。一般建议您将\`@EnableAutoConfiguration\`（如果您不使用\`@SpringBootApplication\`）放在根包中，以便可以搜索所有子包和类。</span></span>
<span class="line"><span style="color:#6A737D;"> * 自动配置类是常规的 Spring \`@Configuration\` bean。</span></span>
<span class="line"><span style="color:#6A737D;"> * 它们使用 SpringFactoriesLoader 机制定位（针对此类）。</span></span>
<span class="line"><span style="color:#6A737D;"> * 通常自动配置 bean 是\`@Conditional\` bean（最常使用 \`@ConditionalOnClass\` 和 \`@ConditionalOnMissingBean\`。</span></span>
<span class="line"><span style="color:#6A737D;"> */</span></span>
<span class="line"><span style="color:#E1E4E8;">@</span><span style="color:#F97583;">AutoConfigurationPackage</span></span>
<span class="line"><span style="color:#E1E4E8;">@</span><span style="color:#F97583;">Import</span><span style="color:#E1E4E8;">(AutoConfigurationImportSelector.class)</span></span>
<span class="line"><span style="color:#F97583;">public</span><span style="color:#E1E4E8;"> @</span><span style="color:#F97583;">interface</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">EnableAutoConfiguration</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">	</span><span style="color:#6A737D;">/**</span></span>
<span class="line"><span style="color:#6A737D;">	 * 启用自动配置时可用于重写的环境属性</span></span>
<span class="line"><span style="color:#6A737D;">	 */</span></span>
<span class="line"><span style="color:#E1E4E8;">	String ENABLED_OVERRIDE_PROPERTY </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&quot;spring.boot.enableautoconfiguration&quot;</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">	</span><span style="color:#6A737D;">/**</span></span>
<span class="line"><span style="color:#6A737D;">	 * 排除特定的自动配置类，使它们永远不会被应用。</span></span>
<span class="line"><span style="color:#6A737D;">	 */</span></span>
<span class="line"><span style="color:#E1E4E8;">	Class</span><span style="color:#F97583;">&lt;?&gt;</span><span style="color:#E1E4E8;">[] </span><span style="color:#B392F0;">exclude</span><span style="color:#E1E4E8;">() </span><span style="color:#F97583;">default</span><span style="color:#E1E4E8;"> {};</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">	</span><span style="color:#6A737D;">/**</span></span>
<span class="line"><span style="color:#6A737D;">	 * 排除特定的自动配置类名称，使它们永远不会被应用。</span></span>
<span class="line"><span style="color:#6A737D;">	 */</span></span>
<span class="line"><span style="color:#E1E4E8;">	</span><span style="color:#F97583;">String</span><span style="color:#E1E4E8;">[] </span><span style="color:#B392F0;">excludeName</span><span style="color:#E1E4E8;">() </span><span style="color:#F97583;">default</span><span style="color:#E1E4E8;"> {};</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6A737D;">/**</span></span>
<span class="line"><span style="color:#6A737D;"> * 启用 Spring Application Context 的自动配置，尝试猜测和配置您可能需要的 bean。</span></span>
<span class="line"><span style="color:#6A737D;"> * 自动配置类通常根据您的类路径和您定义的 bean 应用。</span></span>
<span class="line"><span style="color:#6A737D;"> * 例如，如果您的类路径中有 tomcat-embedded.jar，您可能需要一个 TomcatServletWebServerFactory（除非您已经定义了自己的  ServletWebServerFactory bean）。</span></span>
<span class="line"><span style="color:#6A737D;"> * 使用\`@SpringBootApplication\` 时，上下文的自动配置会自动启用，因此添加此注解不会产生额外影响。</span></span>
<span class="line"><span style="color:#6A737D;"> * 自动配置尝试尽可能智能，并且会随着您定义更多自己的配置而后退。</span></span>
<span class="line"><span style="color:#6A737D;"> * 您始终可以手动 exclude()。 任何您不想应用的配置（如果您无权访问它们，请使用 excludeName()）。</span></span>
<span class="line"><span style="color:#6A737D;"> * 您还可以通过 spring.autoconfigure.exclude 属性排除它们。</span></span>
<span class="line"><span style="color:#6A737D;"> * 自动配置总是在用户定义的 bean 注册后应用。使用\`@EnableAutoConfiguration\` 注解的类的包，通常通过\`@SpringBootApplication\`，具有特定的意义，通常用作&#39;默认&#39;。</span></span>
<span class="line"><span style="color:#6A737D;"> * 例如，它将在扫描\`@Entity\` 类时使用。一般建议您将\`@EnableAutoConfiguration\`（如果您不使用\`@SpringBootApplication\`）放在根包中，以便可以搜索所有子包和类。</span></span>
<span class="line"><span style="color:#6A737D;"> * 自动配置类是常规的 Spring \`@Configuration\` bean。</span></span>
<span class="line"><span style="color:#6A737D;"> * 它们使用 SpringFactoriesLoader 机制定位（针对此类）。</span></span>
<span class="line"><span style="color:#6A737D;"> * 通常自动配置 bean 是\`@Conditional\` bean（最常使用 \`@ConditionalOnClass\` 和 \`@ConditionalOnMissingBean\`。</span></span>
<span class="line"><span style="color:#6A737D;"> */</span></span>
<span class="line"><span style="color:#24292E;">@</span><span style="color:#D73A49;">AutoConfigurationPackage</span></span>
<span class="line"><span style="color:#24292E;">@</span><span style="color:#D73A49;">Import</span><span style="color:#24292E;">(AutoConfigurationImportSelector.class)</span></span>
<span class="line"><span style="color:#D73A49;">public</span><span style="color:#24292E;"> @</span><span style="color:#D73A49;">interface</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">EnableAutoConfiguration</span><span style="color:#24292E;"> {</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">	</span><span style="color:#6A737D;">/**</span></span>
<span class="line"><span style="color:#6A737D;">	 * 启用自动配置时可用于重写的环境属性</span></span>
<span class="line"><span style="color:#6A737D;">	 */</span></span>
<span class="line"><span style="color:#24292E;">	String ENABLED_OVERRIDE_PROPERTY </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&quot;spring.boot.enableautoconfiguration&quot;</span><span style="color:#24292E;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">	</span><span style="color:#6A737D;">/**</span></span>
<span class="line"><span style="color:#6A737D;">	 * 排除特定的自动配置类，使它们永远不会被应用。</span></span>
<span class="line"><span style="color:#6A737D;">	 */</span></span>
<span class="line"><span style="color:#24292E;">	Class</span><span style="color:#D73A49;">&lt;?&gt;</span><span style="color:#24292E;">[] </span><span style="color:#6F42C1;">exclude</span><span style="color:#24292E;">() </span><span style="color:#D73A49;">default</span><span style="color:#24292E;"> {};</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">	</span><span style="color:#6A737D;">/**</span></span>
<span class="line"><span style="color:#6A737D;">	 * 排除特定的自动配置类名称，使它们永远不会被应用。</span></span>
<span class="line"><span style="color:#6A737D;">	 */</span></span>
<span class="line"><span style="color:#24292E;">	</span><span style="color:#D73A49;">String</span><span style="color:#24292E;">[] </span><span style="color:#6F42C1;">excludeName</span><span style="color:#24292E;">() </span><span style="color:#D73A49;">default</span><span style="color:#24292E;"> {};</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br></div></div><blockquote><p>同时，除了元注解之外，它还被 <strong><code>@AutoConfigurationPackage</code></strong> 和 <strong><code>@Import</code></strong> 注解修饰，其中 <strong><code>@Import</code></strong> 注解引入了 <strong><code>AutoConfigurationImportSelector</code></strong> 类。</p></blockquote><h2 id="autoconfigurationpackage" tabindex="-1"><strong>@AutoConfigurationPackage</strong> <a class="header-anchor" href="#autoconfigurationpackage" aria-label="Permalink to &quot;**@AutoConfigurationPackage**&quot;">​</a></h2><div class="language-java vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">java</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#6A737D;">/**</span></span>
<span class="line"><span style="color:#6A737D;"> * 使用 AutoConfigurationPackages 注册包。当没有指定基包或基包类时，注解类的包被注册。</span></span>
<span class="line"><span style="color:#6A737D;"> */</span></span>
<span class="line"><span style="color:#E1E4E8;">@</span><span style="color:#F97583;">Import</span><span style="color:#E1E4E8;">(AutoConfigurationPackages.Registrar.class)</span></span>
<span class="line"><span style="color:#F97583;">public</span><span style="color:#E1E4E8;"> @</span><span style="color:#F97583;">interface</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">AutoConfigurationPackage</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">	</span><span style="color:#6A737D;">/**</span></span>
<span class="line"><span style="color:#6A737D;">	 * 注册的基础包名称。</span></span>
<span class="line"><span style="color:#6A737D;">	 */</span></span>
<span class="line"><span style="color:#E1E4E8;">	</span><span style="color:#F97583;">String</span><span style="color:#E1E4E8;">[] </span><span style="color:#B392F0;">basePackages</span><span style="color:#E1E4E8;">() </span><span style="color:#F97583;">default</span><span style="color:#E1E4E8;"> {};</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">	</span><span style="color:#6A737D;">/**</span></span>
<span class="line"><span style="color:#6A737D;">	 * 注册的基础类名称。</span></span>
<span class="line"><span style="color:#6A737D;">	 */</span></span>
<span class="line"><span style="color:#E1E4E8;">	Class</span><span style="color:#F97583;">&lt;?&gt;</span><span style="color:#E1E4E8;">[] </span><span style="color:#B392F0;">basePackageClasses</span><span style="color:#E1E4E8;">() </span><span style="color:#F97583;">default</span><span style="color:#E1E4E8;"> {};</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6A737D;">/**</span></span>
<span class="line"><span style="color:#6A737D;"> * 使用 AutoConfigurationPackages 注册包。当没有指定基包或基包类时，注解类的包被注册。</span></span>
<span class="line"><span style="color:#6A737D;"> */</span></span>
<span class="line"><span style="color:#24292E;">@</span><span style="color:#D73A49;">Import</span><span style="color:#24292E;">(AutoConfigurationPackages.Registrar.class)</span></span>
<span class="line"><span style="color:#D73A49;">public</span><span style="color:#24292E;"> @</span><span style="color:#D73A49;">interface</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">AutoConfigurationPackage</span><span style="color:#24292E;"> {</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">	</span><span style="color:#6A737D;">/**</span></span>
<span class="line"><span style="color:#6A737D;">	 * 注册的基础包名称。</span></span>
<span class="line"><span style="color:#6A737D;">	 */</span></span>
<span class="line"><span style="color:#24292E;">	</span><span style="color:#D73A49;">String</span><span style="color:#24292E;">[] </span><span style="color:#6F42C1;">basePackages</span><span style="color:#24292E;">() </span><span style="color:#D73A49;">default</span><span style="color:#24292E;"> {};</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">	</span><span style="color:#6A737D;">/**</span></span>
<span class="line"><span style="color:#6A737D;">	 * 注册的基础类名称。</span></span>
<span class="line"><span style="color:#6A737D;">	 */</span></span>
<span class="line"><span style="color:#24292E;">	Class</span><span style="color:#D73A49;">&lt;?&gt;</span><span style="color:#24292E;">[] </span><span style="color:#6F42C1;">basePackageClasses</span><span style="color:#24292E;">() </span><span style="color:#D73A49;">default</span><span style="color:#24292E;"> {};</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br></div></div><blockquote><p>引入了 <strong><code>AutoConfigurationPackages.Registrar.class</code></strong>，是 <strong><code>AutoConfigurationPackages</code></strong> 的静态内部类，实现了两个接口的方法( <strong><code>ImportBeanDefinitionRegistrar</code></strong> 和 <strong><code>DeterminableImports</code></strong>,其中 <strong><code>ImportBeanDefinitionRegistrar</code></strong> 用作存储来自导入配置的基本包)。</p></blockquote><div class="language-java vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">java</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#6A737D;">/**</span></span>
<span class="line"><span style="color:#6A737D;"> * ImportBeanDefinitionRegistrar 用于存储来自导入配置的基本包。</span></span>
<span class="line"><span style="color:#6A737D;"> */</span></span>
<span class="line"><span style="color:#F97583;">static</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">class</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">Registrar</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">implements</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">ImportBeanDefinitionRegistrar</span><span style="color:#E1E4E8;">, </span><span style="color:#B392F0;">DeterminableImports</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">	@</span><span style="color:#F97583;">Override</span></span>
<span class="line"><span style="color:#E1E4E8;">	</span><span style="color:#F97583;">public</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">void</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">registerBeanDefinitions</span><span style="color:#E1E4E8;">(AnnotationMetadata </span><span style="color:#FFAB70;">metadata</span><span style="color:#E1E4E8;">, BeanDefinitionRegistry </span><span style="color:#FFAB70;">registry</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#E1E4E8;">		</span><span style="color:#B392F0;">register</span><span style="color:#E1E4E8;">(registry, </span><span style="color:#F97583;">new</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">PackageImports</span><span style="color:#E1E4E8;">(metadata).</span><span style="color:#B392F0;">getPackageNames</span><span style="color:#E1E4E8;">().</span><span style="color:#B392F0;">toArray</span><span style="color:#E1E4E8;">(</span><span style="color:#F97583;">new</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">String</span><span style="color:#E1E4E8;">[</span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;">]));</span></span>
<span class="line"><span style="color:#E1E4E8;">	}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">	@</span><span style="color:#F97583;">Override</span></span>
<span class="line"><span style="color:#E1E4E8;">	</span><span style="color:#F97583;">public</span><span style="color:#E1E4E8;"> Set&lt;</span><span style="color:#F97583;">Object</span><span style="color:#E1E4E8;">&gt; </span><span style="color:#B392F0;">determineImports</span><span style="color:#E1E4E8;">(AnnotationMetadata </span><span style="color:#FFAB70;">metadata</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#E1E4E8;">		</span><span style="color:#F97583;">return</span><span style="color:#E1E4E8;"> Collections.</span><span style="color:#B392F0;">singleton</span><span style="color:#E1E4E8;">(</span><span style="color:#F97583;">new</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">PackageImports</span><span style="color:#E1E4E8;">(metadata));</span></span>
<span class="line"><span style="color:#E1E4E8;">	}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6A737D;">/**</span></span>
<span class="line"><span style="color:#6A737D;"> * ImportBeanDefinitionRegistrar 用于存储来自导入配置的基本包。</span></span>
<span class="line"><span style="color:#6A737D;"> */</span></span>
<span class="line"><span style="color:#D73A49;">static</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">class</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">Registrar</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">implements</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">ImportBeanDefinitionRegistrar</span><span style="color:#24292E;">, </span><span style="color:#6F42C1;">DeterminableImports</span><span style="color:#24292E;"> {</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">	@</span><span style="color:#D73A49;">Override</span></span>
<span class="line"><span style="color:#24292E;">	</span><span style="color:#D73A49;">public</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">void</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">registerBeanDefinitions</span><span style="color:#24292E;">(AnnotationMetadata </span><span style="color:#E36209;">metadata</span><span style="color:#24292E;">, BeanDefinitionRegistry </span><span style="color:#E36209;">registry</span><span style="color:#24292E;">) {</span></span>
<span class="line"><span style="color:#24292E;">		</span><span style="color:#6F42C1;">register</span><span style="color:#24292E;">(registry, </span><span style="color:#D73A49;">new</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">PackageImports</span><span style="color:#24292E;">(metadata).</span><span style="color:#6F42C1;">getPackageNames</span><span style="color:#24292E;">().</span><span style="color:#6F42C1;">toArray</span><span style="color:#24292E;">(</span><span style="color:#D73A49;">new</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">String</span><span style="color:#24292E;">[</span><span style="color:#005CC5;">0</span><span style="color:#24292E;">]));</span></span>
<span class="line"><span style="color:#24292E;">	}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">	@</span><span style="color:#D73A49;">Override</span></span>
<span class="line"><span style="color:#24292E;">	</span><span style="color:#D73A49;">public</span><span style="color:#24292E;"> Set&lt;</span><span style="color:#D73A49;">Object</span><span style="color:#24292E;">&gt; </span><span style="color:#6F42C1;">determineImports</span><span style="color:#24292E;">(AnnotationMetadata </span><span style="color:#E36209;">metadata</span><span style="color:#24292E;">) {</span></span>
<span class="line"><span style="color:#24292E;">		</span><span style="color:#D73A49;">return</span><span style="color:#24292E;"> Collections.</span><span style="color:#6F42C1;">singleton</span><span style="color:#24292E;">(</span><span style="color:#D73A49;">new</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">PackageImports</span><span style="color:#24292E;">(metadata));</span></span>
<span class="line"><span style="color:#24292E;">	}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br></div></div><blockquote><p>在 <strong><code>registerBeanDefinitions</code></strong> 方法中，它在获取到元数据之后，使用 <strong><code>getPackageNames</code></strong> 方法获取到包名，并用 <strong><code>toArray</code></strong> 方法转化为数组来进行注册，这就是SpringBoot回默认扫描 <strong><code>main</code></strong> 方法所在的包以及其子目录的原因。</p></blockquote><h2 id="autoconfigurationimportselector-class" tabindex="-1"><strong>AutoConfigurationImportSelector.class</strong> <a class="header-anchor" href="#autoconfigurationimportselector-class" aria-label="Permalink to &quot;**AutoConfigurationImportSelector.class**&quot;">​</a></h2><blockquote><p>通过文档可以看到它的注释为: <strong><code>DeferredImportSelector</code></strong> 处理自动配置。 如果需要 <strong><code>@EnableAutoConfiguration</code></strong> 的自定义变体，也可以对此类进行子类化。</p></blockquote><div class="language-java vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">java</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#6A737D;">/**</span></span>
<span class="line"><span style="color:#6A737D;"> * 根据导入 \`@Configuration\` 类的 \`AnnotationMetadata\` 返回 \`AutoConfigurationImportSelector.AutoConfigurationEntry\`。</span></span>
<span class="line"><span style="color:#6A737D;"> */</span></span>
<span class="line"><span style="color:#F97583;">protected</span><span style="color:#E1E4E8;"> AutoConfigurationEntry </span><span style="color:#B392F0;">getAutoConfigurationEntry</span><span style="color:#E1E4E8;">(AnnotationMetadata annotationMetadata) {</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">if</span><span style="color:#E1E4E8;"> (</span><span style="color:#F97583;">!</span><span style="color:#B392F0;">isEnabled</span><span style="color:#E1E4E8;">(annotationMetadata)) {</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#F97583;">return</span><span style="color:#E1E4E8;"> EMPTY_ENTRY; </span><span style="color:#6A737D;">// private static final AutoConfigurationEntry EMPTY_ENTRY = new AutoConfigurationEntry();</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">    AnnotationAttributes attributes </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">getAttributes</span><span style="color:#E1E4E8;">(annotationMetadata);</span></span>
<span class="line"><span style="color:#E1E4E8;">    List&lt;</span><span style="color:#F97583;">String</span><span style="color:#E1E4E8;">&gt; configurations </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">getCandidateConfigurations</span><span style="color:#E1E4E8;">(annotationMetadata, attributes);</span></span>
<span class="line"><span style="color:#E1E4E8;">    configurations </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">removeDuplicates</span><span style="color:#E1E4E8;">(configurations);</span></span>
<span class="line"><span style="color:#E1E4E8;">    Set&lt;</span><span style="color:#F97583;">String</span><span style="color:#E1E4E8;">&gt; exclusions </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">getExclusions</span><span style="color:#E1E4E8;">(annotationMetadata, attributes);</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#B392F0;">checkExcludedClasses</span><span style="color:#E1E4E8;">(configurations, exclusions);</span></span>
<span class="line"><span style="color:#E1E4E8;">    configurations.</span><span style="color:#B392F0;">removeAll</span><span style="color:#E1E4E8;">(exclusions);</span></span>
<span class="line"><span style="color:#E1E4E8;">    configurations </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">getConfigurationClassFilter</span><span style="color:#E1E4E8;">().</span><span style="color:#B392F0;">filter</span><span style="color:#E1E4E8;">(configurations);</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#B392F0;">fireAutoConfigurationImportEvents</span><span style="color:#E1E4E8;">(configurations, exclusions);</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">return</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">new</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">AutoConfigurationEntry</span><span style="color:#E1E4E8;">(configurations, exclusions);</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6A737D;">/**</span></span>
<span class="line"><span style="color:#6A737D;"> * 根据导入 \`@Configuration\` 类的 \`AnnotationMetadata\` 返回 \`AutoConfigurationImportSelector.AutoConfigurationEntry\`。</span></span>
<span class="line"><span style="color:#6A737D;"> */</span></span>
<span class="line"><span style="color:#D73A49;">protected</span><span style="color:#24292E;"> AutoConfigurationEntry </span><span style="color:#6F42C1;">getAutoConfigurationEntry</span><span style="color:#24292E;">(AnnotationMetadata annotationMetadata) {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">if</span><span style="color:#24292E;"> (</span><span style="color:#D73A49;">!</span><span style="color:#6F42C1;">isEnabled</span><span style="color:#24292E;">(annotationMetadata)) {</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#D73A49;">return</span><span style="color:#24292E;"> EMPTY_ENTRY; </span><span style="color:#6A737D;">// private static final AutoConfigurationEntry EMPTY_ENTRY = new AutoConfigurationEntry();</span></span>
<span class="line"><span style="color:#24292E;">    }</span></span>
<span class="line"><span style="color:#24292E;">    AnnotationAttributes attributes </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">getAttributes</span><span style="color:#24292E;">(annotationMetadata);</span></span>
<span class="line"><span style="color:#24292E;">    List&lt;</span><span style="color:#D73A49;">String</span><span style="color:#24292E;">&gt; configurations </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">getCandidateConfigurations</span><span style="color:#24292E;">(annotationMetadata, attributes);</span></span>
<span class="line"><span style="color:#24292E;">    configurations </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">removeDuplicates</span><span style="color:#24292E;">(configurations);</span></span>
<span class="line"><span style="color:#24292E;">    Set&lt;</span><span style="color:#D73A49;">String</span><span style="color:#24292E;">&gt; exclusions </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">getExclusions</span><span style="color:#24292E;">(annotationMetadata, attributes);</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6F42C1;">checkExcludedClasses</span><span style="color:#24292E;">(configurations, exclusions);</span></span>
<span class="line"><span style="color:#24292E;">    configurations.</span><span style="color:#6F42C1;">removeAll</span><span style="color:#24292E;">(exclusions);</span></span>
<span class="line"><span style="color:#24292E;">    configurations </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">getConfigurationClassFilter</span><span style="color:#24292E;">().</span><span style="color:#6F42C1;">filter</span><span style="color:#24292E;">(configurations);</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6F42C1;">fireAutoConfigurationImportEvents</span><span style="color:#24292E;">(configurations, exclusions);</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">return</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">new</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">AutoConfigurationEntry</span><span style="color:#24292E;">(configurations, exclusions);</span></span>
<span class="line"><span style="color:#24292E;">}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br></div></div><blockquote><p>先判断，如果未开启自动配置( <strong><code>EnableAutoConfiguration.ENABLED_OVERRIDE_PROPERTY</code></strong> 配置，且默认未true)，则直接返回。 首先获得了注解属性，接着获得了一个List型的configurations，紧接着对这个configurations做各种操作：</p></blockquote><div class="language-java vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">java</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;">List&lt;</span><span style="color:#F97583;">String</span><span style="color:#E1E4E8;">&gt; configurations </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">getCandidateConfigurations</span><span style="color:#E1E4E8;">(annotationMetadata, attributes);</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">List&lt;</span><span style="color:#D73A49;">String</span><span style="color:#24292E;">&gt; configurations </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">getCandidateConfigurations</span><span style="color:#24292E;">(annotationMetadata, attributes);</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><blockquote><p>进入方法内部查看,发现它又调用了另一个方法来获取configurations</p></blockquote><div class="language-java vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">java</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#6A737D;">/**</span></span>
<span class="line"><span style="color:#6A737D;"> * 获取自动配置类名称。</span></span>
<span class="line"><span style="color:#6A737D;"> * 默认情况下，此方法将使用带有 getSpringFactoriesLoaderFactoryClass() 的 SpringFactoriesLoader 加载候选者</span></span>
<span class="line"><span style="color:#6A737D;"> */</span></span>
<span class="line"><span style="color:#F97583;">protected</span><span style="color:#E1E4E8;"> List</span><span style="color:#F97583;">&lt;</span><span style="color:#E1E4E8;">String</span><span style="color:#F97583;">&gt;</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">getCandidateConfigurations</span><span style="color:#E1E4E8;">(AnnotationMetadata metadata, AnnotationAttributes attributes) {</span></span>
<span class="line"><span style="color:#E1E4E8;">    List&lt;</span><span style="color:#F97583;">String</span><span style="color:#E1E4E8;">&gt; configurations </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> SpringFactoriesLoader.</span><span style="color:#B392F0;">loadFactoryNames</span><span style="color:#E1E4E8;">(</span><span style="color:#B392F0;">getSpringFactoriesLoaderFactoryClass</span><span style="color:#E1E4E8;">(),</span></span>
<span class="line"><span style="color:#E1E4E8;">            </span><span style="color:#B392F0;">getBeanClassLoader</span><span style="color:#E1E4E8;">());</span></span>
<span class="line"><span style="color:#E1E4E8;">    Assert.</span><span style="color:#B392F0;">notEmpty</span><span style="color:#E1E4E8;">(configurations, </span><span style="color:#9ECBFF;">&quot;No auto configuration classes found in META-INF/spring.factories. If you &quot;</span></span>
<span class="line"><span style="color:#E1E4E8;">            </span><span style="color:#F97583;">+</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&quot;are using a custom packaging, make sure that file is correct.&quot;</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">return</span><span style="color:#E1E4E8;"> configurations;</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6A737D;">/**</span></span>
<span class="line"><span style="color:#6A737D;"> * 获取自动配置类名称。</span></span>
<span class="line"><span style="color:#6A737D;"> * 默认情况下，此方法将使用带有 getSpringFactoriesLoaderFactoryClass() 的 SpringFactoriesLoader 加载候选者</span></span>
<span class="line"><span style="color:#6A737D;"> */</span></span>
<span class="line"><span style="color:#D73A49;">protected</span><span style="color:#24292E;"> List</span><span style="color:#D73A49;">&lt;</span><span style="color:#24292E;">String</span><span style="color:#D73A49;">&gt;</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">getCandidateConfigurations</span><span style="color:#24292E;">(AnnotationMetadata metadata, AnnotationAttributes attributes) {</span></span>
<span class="line"><span style="color:#24292E;">    List&lt;</span><span style="color:#D73A49;">String</span><span style="color:#24292E;">&gt; configurations </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> SpringFactoriesLoader.</span><span style="color:#6F42C1;">loadFactoryNames</span><span style="color:#24292E;">(</span><span style="color:#6F42C1;">getSpringFactoriesLoaderFactoryClass</span><span style="color:#24292E;">(),</span></span>
<span class="line"><span style="color:#24292E;">            </span><span style="color:#6F42C1;">getBeanClassLoader</span><span style="color:#24292E;">());</span></span>
<span class="line"><span style="color:#24292E;">    Assert.</span><span style="color:#6F42C1;">notEmpty</span><span style="color:#24292E;">(configurations, </span><span style="color:#032F62;">&quot;No auto configuration classes found in META-INF/spring.factories. If you &quot;</span></span>
<span class="line"><span style="color:#24292E;">            </span><span style="color:#D73A49;">+</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&quot;are using a custom packaging, make sure that file is correct.&quot;</span><span style="color:#24292E;">);</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">return</span><span style="color:#24292E;"> configurations;</span></span>
<span class="line"><span style="color:#24292E;">}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br></div></div><blockquote><p>查看 <strong><code>SpringFactoriesLoader.loadFactoryNames()</code></strong> 方法:</p></blockquote><div class="language-java vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">java</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#F97583;">public</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">static</span><span style="color:#E1E4E8;"> List</span><span style="color:#F97583;">&lt;</span><span style="color:#E1E4E8;">String</span><span style="color:#F97583;">&gt;</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">loadFactoryNames</span><span style="color:#E1E4E8;">(Class</span><span style="color:#F97583;">&lt;?&gt;</span><span style="color:#E1E4E8;"> factoryType, @</span><span style="color:#F97583;">Nullable</span><span style="color:#E1E4E8;"> ClassLoader classLoader) {</span></span>
<span class="line"><span style="color:#E1E4E8;">    ClassLoader classLoaderToUse </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> classLoader;</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">if</span><span style="color:#E1E4E8;"> (classLoaderToUse </span><span style="color:#F97583;">==</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">null</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#E1E4E8;">        classLoaderToUse </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> SpringFactoriesLoader.class.</span><span style="color:#B392F0;">getClassLoader</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">    String factoryTypeName </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> factoryType.</span><span style="color:#B392F0;">getName</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">return</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">loadSpringFactories</span><span style="color:#E1E4E8;">(classLoaderToUse).</span><span style="color:#B392F0;">getOrDefault</span><span style="color:#E1E4E8;">(factoryTypeName, Collections.</span><span style="color:#B392F0;">emptyList</span><span style="color:#E1E4E8;">());</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">public</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">static</span><span style="color:#24292E;"> List</span><span style="color:#D73A49;">&lt;</span><span style="color:#24292E;">String</span><span style="color:#D73A49;">&gt;</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">loadFactoryNames</span><span style="color:#24292E;">(Class</span><span style="color:#D73A49;">&lt;?&gt;</span><span style="color:#24292E;"> factoryType, @</span><span style="color:#D73A49;">Nullable</span><span style="color:#24292E;"> ClassLoader classLoader) {</span></span>
<span class="line"><span style="color:#24292E;">    ClassLoader classLoaderToUse </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> classLoader;</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">if</span><span style="color:#24292E;"> (classLoaderToUse </span><span style="color:#D73A49;">==</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">null</span><span style="color:#24292E;">) {</span></span>
<span class="line"><span style="color:#24292E;">        classLoaderToUse </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> SpringFactoriesLoader.class.</span><span style="color:#6F42C1;">getClassLoader</span><span style="color:#24292E;">();</span></span>
<span class="line"><span style="color:#24292E;">    }</span></span>
<span class="line"><span style="color:#24292E;">    String factoryTypeName </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> factoryType.</span><span style="color:#6F42C1;">getName</span><span style="color:#24292E;">();</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">return</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">loadSpringFactories</span><span style="color:#24292E;">(classLoaderToUse).</span><span style="color:#6F42C1;">getOrDefault</span><span style="color:#24292E;">(factoryTypeName, Collections.</span><span style="color:#6F42C1;">emptyList</span><span style="color:#24292E;">());</span></span>
<span class="line"><span style="color:#24292E;">}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div><blockquote><p>首先获得类加载器，若为空，则获取 <strong><code>SpringFactoriesLoader</code></strong> 的类加载器。 最后通过 <strong><code>loadSpringFactories(classLoaderToUse).getOrDefault(factoryTypeName, Collections.emptyList())</code></strong>;获取返回的 <strong><code>configurations</code></strong>。 查看 <strong><code>loadFactoryNames</code></strong> 方法源码</p></blockquote><div class="language-java vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">java</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#F97583;">private</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">static</span><span style="color:#E1E4E8;"> Map</span><span style="color:#F97583;">&lt;</span><span style="color:#E1E4E8;">String, List</span><span style="color:#F97583;">&lt;</span><span style="color:#E1E4E8;">String</span><span style="color:#F97583;">&gt;&gt;</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">loadSpringFactories</span><span style="color:#E1E4E8;">(ClassLoader classLoader) {</span></span>
<span class="line"><span style="color:#E1E4E8;">    Map&lt;</span><span style="color:#F97583;">String</span><span style="color:#E1E4E8;">, List&lt;</span><span style="color:#F97583;">String</span><span style="color:#E1E4E8;">&gt;&gt; result </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> cache.</span><span style="color:#B392F0;">get</span><span style="color:#E1E4E8;">(classLoader);</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">if</span><span style="color:#E1E4E8;"> (result </span><span style="color:#F97583;">!=</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">null</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#F97583;">return</span><span style="color:#E1E4E8;"> result;</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">    result </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">new</span><span style="color:#E1E4E8;"> HashMap&lt;&gt;();</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">try</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#6A737D;">// public static final String FACTORIES_RESOURCE_LOCATION = &quot;META-INF/spring.factories&quot;;</span></span>
<span class="line"><span style="color:#E1E4E8;">        Enumeration&lt;</span><span style="color:#F97583;">URL</span><span style="color:#E1E4E8;">&gt; urls </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> classLoader.</span><span style="color:#B392F0;">getResources</span><span style="color:#E1E4E8;">(FACTORIES_RESOURCE_LOCATION);</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#F97583;">while</span><span style="color:#E1E4E8;"> (urls.</span><span style="color:#B392F0;">hasMoreElements</span><span style="color:#E1E4E8;">()) {</span></span>
<span class="line"><span style="color:#E1E4E8;">            URL url </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> urls.</span><span style="color:#B392F0;">nextElement</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"><span style="color:#E1E4E8;">            UrlResource resource </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">new</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">UrlResource</span><span style="color:#E1E4E8;">(url);</span></span>
<span class="line"><span style="color:#E1E4E8;">            Properties properties </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> PropertiesLoaderUtils.</span><span style="color:#B392F0;">loadProperties</span><span style="color:#E1E4E8;">(resource);</span></span>
<span class="line"><span style="color:#E1E4E8;">            </span><span style="color:#F97583;">for</span><span style="color:#E1E4E8;"> (Map.Entry&lt;</span><span style="color:#F97583;">?</span><span style="color:#E1E4E8;">, </span><span style="color:#F97583;">?</span><span style="color:#E1E4E8;">&gt; entry </span><span style="color:#F97583;">:</span><span style="color:#E1E4E8;"> properties.</span><span style="color:#B392F0;">entrySet</span><span style="color:#E1E4E8;">()) {</span></span>
<span class="line"><span style="color:#E1E4E8;">                String factoryTypeName </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> ((String) entry.</span><span style="color:#B392F0;">getKey</span><span style="color:#E1E4E8;">()).</span><span style="color:#B392F0;">trim</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"><span style="color:#E1E4E8;">                </span><span style="color:#F97583;">String</span><span style="color:#E1E4E8;">[] factoryImplementationNames </span><span style="color:#F97583;">=</span></span>
<span class="line"><span style="color:#E1E4E8;">                        StringUtils.</span><span style="color:#B392F0;">commaDelimitedListToStringArray</span><span style="color:#E1E4E8;">((String) entry.</span><span style="color:#B392F0;">getValue</span><span style="color:#E1E4E8;">());</span></span>
<span class="line"><span style="color:#E1E4E8;">                </span><span style="color:#F97583;">for</span><span style="color:#E1E4E8;"> (String factoryImplementationName </span><span style="color:#F97583;">:</span><span style="color:#E1E4E8;"> factoryImplementationNames) {</span></span>
<span class="line"><span style="color:#E1E4E8;">                    result.</span><span style="color:#B392F0;">computeIfAbsent</span><span style="color:#E1E4E8;">(factoryTypeName, key </span><span style="color:#F97583;">-&gt;</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">new</span><span style="color:#E1E4E8;"> ArrayList&lt;&gt;())</span></span>
<span class="line"><span style="color:#E1E4E8;">                            .</span><span style="color:#B392F0;">add</span><span style="color:#E1E4E8;">(factoryImplementationName.</span><span style="color:#B392F0;">trim</span><span style="color:#E1E4E8;">());</span></span>
<span class="line"><span style="color:#E1E4E8;">                }</span></span>
<span class="line"><span style="color:#E1E4E8;">            }</span></span>
<span class="line"><span style="color:#E1E4E8;">        }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#6A737D;">// Replace all lists with unmodifiable lists containing unique elements</span></span>
<span class="line"><span style="color:#E1E4E8;">        result.</span><span style="color:#B392F0;">replaceAll</span><span style="color:#E1E4E8;">((factoryType, implementations) </span><span style="color:#F97583;">-&gt;</span><span style="color:#E1E4E8;"> implementations.</span><span style="color:#B392F0;">stream</span><span style="color:#E1E4E8;">().</span><span style="color:#B392F0;">distinct</span><span style="color:#E1E4E8;">()</span></span>
<span class="line"><span style="color:#E1E4E8;">                .</span><span style="color:#B392F0;">collect</span><span style="color:#E1E4E8;">(Collectors.</span><span style="color:#B392F0;">collectingAndThen</span><span style="color:#E1E4E8;">(Collectors.</span><span style="color:#B392F0;">toList</span><span style="color:#E1E4E8;">(), Collections</span><span style="color:#F97583;">::</span><span style="color:#E1E4E8;">unmodifiableList)));</span></span>
<span class="line"><span style="color:#E1E4E8;">        cache.</span><span style="color:#B392F0;">put</span><span style="color:#E1E4E8;">(classLoader, result);</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">catch</span><span style="color:#E1E4E8;"> (IOException </span><span style="color:#FFAB70;">ex</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#F97583;">throw</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">new</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">IllegalArgumentException</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&quot;Unable to load factories from location [&quot;</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">+</span></span>
<span class="line"><span style="color:#E1E4E8;">                FACTORIES_RESOURCE_LOCATION </span><span style="color:#F97583;">+</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&quot;]&quot;</span><span style="color:#E1E4E8;">, ex);</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">return</span><span style="color:#E1E4E8;"> result;</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">private</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">static</span><span style="color:#24292E;"> Map</span><span style="color:#D73A49;">&lt;</span><span style="color:#24292E;">String, List</span><span style="color:#D73A49;">&lt;</span><span style="color:#24292E;">String</span><span style="color:#D73A49;">&gt;&gt;</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">loadSpringFactories</span><span style="color:#24292E;">(ClassLoader classLoader) {</span></span>
<span class="line"><span style="color:#24292E;">    Map&lt;</span><span style="color:#D73A49;">String</span><span style="color:#24292E;">, List&lt;</span><span style="color:#D73A49;">String</span><span style="color:#24292E;">&gt;&gt; result </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> cache.</span><span style="color:#6F42C1;">get</span><span style="color:#24292E;">(classLoader);</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">if</span><span style="color:#24292E;"> (result </span><span style="color:#D73A49;">!=</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">null</span><span style="color:#24292E;">) {</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#D73A49;">return</span><span style="color:#24292E;"> result;</span></span>
<span class="line"><span style="color:#24292E;">    }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">    result </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">new</span><span style="color:#24292E;"> HashMap&lt;&gt;();</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">try</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#6A737D;">// public static final String FACTORIES_RESOURCE_LOCATION = &quot;META-INF/spring.factories&quot;;</span></span>
<span class="line"><span style="color:#24292E;">        Enumeration&lt;</span><span style="color:#D73A49;">URL</span><span style="color:#24292E;">&gt; urls </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> classLoader.</span><span style="color:#6F42C1;">getResources</span><span style="color:#24292E;">(FACTORIES_RESOURCE_LOCATION);</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#D73A49;">while</span><span style="color:#24292E;"> (urls.</span><span style="color:#6F42C1;">hasMoreElements</span><span style="color:#24292E;">()) {</span></span>
<span class="line"><span style="color:#24292E;">            URL url </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> urls.</span><span style="color:#6F42C1;">nextElement</span><span style="color:#24292E;">();</span></span>
<span class="line"><span style="color:#24292E;">            UrlResource resource </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">new</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">UrlResource</span><span style="color:#24292E;">(url);</span></span>
<span class="line"><span style="color:#24292E;">            Properties properties </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> PropertiesLoaderUtils.</span><span style="color:#6F42C1;">loadProperties</span><span style="color:#24292E;">(resource);</span></span>
<span class="line"><span style="color:#24292E;">            </span><span style="color:#D73A49;">for</span><span style="color:#24292E;"> (Map.Entry&lt;</span><span style="color:#D73A49;">?</span><span style="color:#24292E;">, </span><span style="color:#D73A49;">?</span><span style="color:#24292E;">&gt; entry </span><span style="color:#D73A49;">:</span><span style="color:#24292E;"> properties.</span><span style="color:#6F42C1;">entrySet</span><span style="color:#24292E;">()) {</span></span>
<span class="line"><span style="color:#24292E;">                String factoryTypeName </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> ((String) entry.</span><span style="color:#6F42C1;">getKey</span><span style="color:#24292E;">()).</span><span style="color:#6F42C1;">trim</span><span style="color:#24292E;">();</span></span>
<span class="line"><span style="color:#24292E;">                </span><span style="color:#D73A49;">String</span><span style="color:#24292E;">[] factoryImplementationNames </span><span style="color:#D73A49;">=</span></span>
<span class="line"><span style="color:#24292E;">                        StringUtils.</span><span style="color:#6F42C1;">commaDelimitedListToStringArray</span><span style="color:#24292E;">((String) entry.</span><span style="color:#6F42C1;">getValue</span><span style="color:#24292E;">());</span></span>
<span class="line"><span style="color:#24292E;">                </span><span style="color:#D73A49;">for</span><span style="color:#24292E;"> (String factoryImplementationName </span><span style="color:#D73A49;">:</span><span style="color:#24292E;"> factoryImplementationNames) {</span></span>
<span class="line"><span style="color:#24292E;">                    result.</span><span style="color:#6F42C1;">computeIfAbsent</span><span style="color:#24292E;">(factoryTypeName, key </span><span style="color:#D73A49;">-&gt;</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">new</span><span style="color:#24292E;"> ArrayList&lt;&gt;())</span></span>
<span class="line"><span style="color:#24292E;">                            .</span><span style="color:#6F42C1;">add</span><span style="color:#24292E;">(factoryImplementationName.</span><span style="color:#6F42C1;">trim</span><span style="color:#24292E;">());</span></span>
<span class="line"><span style="color:#24292E;">                }</span></span>
<span class="line"><span style="color:#24292E;">            }</span></span>
<span class="line"><span style="color:#24292E;">        }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#6A737D;">// Replace all lists with unmodifiable lists containing unique elements</span></span>
<span class="line"><span style="color:#24292E;">        result.</span><span style="color:#6F42C1;">replaceAll</span><span style="color:#24292E;">((factoryType, implementations) </span><span style="color:#D73A49;">-&gt;</span><span style="color:#24292E;"> implementations.</span><span style="color:#6F42C1;">stream</span><span style="color:#24292E;">().</span><span style="color:#6F42C1;">distinct</span><span style="color:#24292E;">()</span></span>
<span class="line"><span style="color:#24292E;">                .</span><span style="color:#6F42C1;">collect</span><span style="color:#24292E;">(Collectors.</span><span style="color:#6F42C1;">collectingAndThen</span><span style="color:#24292E;">(Collectors.</span><span style="color:#6F42C1;">toList</span><span style="color:#24292E;">(), Collections</span><span style="color:#D73A49;">::</span><span style="color:#24292E;">unmodifiableList)));</span></span>
<span class="line"><span style="color:#24292E;">        cache.</span><span style="color:#6F42C1;">put</span><span style="color:#24292E;">(classLoader, result);</span></span>
<span class="line"><span style="color:#24292E;">    }</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">catch</span><span style="color:#24292E;"> (IOException </span><span style="color:#E36209;">ex</span><span style="color:#24292E;">) {</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#D73A49;">throw</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">new</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">IllegalArgumentException</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&quot;Unable to load factories from location [&quot;</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">+</span></span>
<span class="line"><span style="color:#24292E;">                FACTORIES_RESOURCE_LOCATION </span><span style="color:#D73A49;">+</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&quot;]&quot;</span><span style="color:#24292E;">, ex);</span></span>
<span class="line"><span style="color:#24292E;">    }</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">return</span><span style="color:#24292E;"> result;</span></span>
<span class="line"><span style="color:#24292E;">}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br></div></div><div class="language-properties vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">properties</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#6A737D;"># 此处借用spring-boot-autoconfigure.jar包的spring.factories文件</span></span>
<span class="line"><span style="color:#6A737D;"># Initializers</span></span>
<span class="line"><span style="color:#F97583;">org.springframework.context.ApplicationContextInitializer</span><span style="color:#E1E4E8;">=\\</span></span>
<span class="line"><span style="color:#E1E4E8;">org.springframework.boot.autoconfigure.SharedMetadataReaderFactoryContextInitializer,\\</span></span>
<span class="line"><span style="color:#E1E4E8;">org.springframework.boot.autoconfigure.logging.ConditionEvaluationReportLoggingListener</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># Application Listeners</span></span>
<span class="line"><span style="color:#F97583;">org.springframework.context.ApplicationListener</span><span style="color:#E1E4E8;">=\\</span></span>
<span class="line"><span style="color:#E1E4E8;">org.springframework.boot.autoconfigure.BackgroundPreinitializer</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># Environment Post Processors</span></span>
<span class="line"><span style="color:#F97583;">org.springframework.boot.env.EnvironmentPostProcessor</span><span style="color:#E1E4E8;">=\\</span></span>
<span class="line"><span style="color:#E1E4E8;">org.springframework.boot.autoconfigure.integration.IntegrationPropertiesEnvironmentPostProcessor</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># Auto Configuration Import Listeners</span></span>
<span class="line"><span style="color:#F97583;">org.springframework.boot.autoconfigure.AutoConfigurationImportListener</span><span style="color:#E1E4E8;">=\\</span></span>
<span class="line"><span style="color:#E1E4E8;">org.springframework.boot.autoconfigure.condition.ConditionEvaluationReportAutoConfigurationImportListener</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># Auto Configuration Import Filters</span></span>
<span class="line"><span style="color:#F97583;">org.springframework.boot.autoconfigure.AutoConfigurationImportFilter</span><span style="color:#E1E4E8;">=\\</span></span>
<span class="line"><span style="color:#E1E4E8;">org.springframework.boot.autoconfigure.condition.OnBeanCondition,\\</span></span>
<span class="line"><span style="color:#E1E4E8;">org.springframework.boot.autoconfigure.condition.OnClassCondition,\\</span></span>
<span class="line"><span style="color:#E1E4E8;">org.springframework.boot.autoconfigure.condition.OnWebApplicationCondition</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># Auto Configure</span></span>
<span class="line"><span style="color:#F97583;">org.springframework.boot.autoconfigure.EnableAutoConfiguration</span><span style="color:#E1E4E8;">=\\</span></span>
<span class="line"><span style="color:#E1E4E8;">org.springframework.boot.autoconfigure.admin.SpringApplicationAdminJmxAutoConfiguration,\\</span></span>
<span class="line"><span style="color:#E1E4E8;">org.springframework.boot.autoconfigure.aop.AopAutoConfiguration,\\</span></span>
<span class="line"><span style="color:#E1E4E8;">org.springframework.boot.autoconfigure.amqp.RabbitAutoConfiguration,\\</span></span>
<span class="line"><span style="color:#E1E4E8;">org.springframework.boot.autoconfigure.batch.BatchAutoConfiguration,\\</span></span>
<span class="line"><span style="color:#E1E4E8;">org.springframework.boot.autoconfigure.cache.CacheAutoConfiguration,\\</span></span>
<span class="line"><span style="color:#E1E4E8;">org.springframework.boot.autoconfigure.cassandra.CassandraAutoConfiguration,\\</span></span>
<span class="line"><span style="color:#E1E4E8;">org.springframework.boot.autoconfigure.context.ConfigurationPropertiesAutoConfiguration,\\</span></span>
<span class="line"><span style="color:#E1E4E8;">org.springframework.boot.autoconfigure.context.LifecycleAutoConfiguration,\\</span></span>
<span class="line"><span style="color:#E1E4E8;">org.springframework.boot.autoconfigure.context.MessageSourceAutoConfiguration,\\</span></span>
<span class="line"><span style="color:#E1E4E8;">org.springframework.boot.autoconfigure.context.PropertyPlaceholderAutoConfiguration,\\</span></span>
<span class="line"><span style="color:#E1E4E8;">org.springframework.boot.autoconfigure.couchbase.CouchbaseAutoConfiguration,\\</span></span>
<span class="line"><span style="color:#E1E4E8;">org.springframework.boot.autoconfigure.dao.PersistenceExceptionTranslationAutoConfiguration,\\</span></span>
<span class="line"><span style="color:#E1E4E8;">org.springframework.boot.autoconfigure.data.cassandra.CassandraDataAutoConfiguration,\\</span></span>
<span class="line"><span style="color:#E1E4E8;">org.springframework.boot.autoconfigure.data.cassandra.CassandraReactiveDataAutoConfiguration,\\</span></span>
<span class="line"><span style="color:#E1E4E8;">org.springframework.boot.autoconfigure.data.cassandra.CassandraReactiveRepositoriesAutoConfiguration,\\</span></span>
<span class="line"><span style="color:#E1E4E8;">org.springframework.boot.autoconfigure.data.cassandra.CassandraRepositoriesAutoConfiguration,\\</span></span>
<span class="line"><span style="color:#E1E4E8;">org.springframework.boot.autoconfigure.data.couchbase.CouchbaseDataAutoConfiguration,\\</span></span>
<span class="line"><span style="color:#E1E4E8;">org.springframework.boot.autoconfigure.data.couchbase.CouchbaseReactiveDataAutoConfiguration,\\</span></span>
<span class="line"><span style="color:#E1E4E8;">org.springframework.boot.autoconfigure.data.couchbase.CouchbaseReactiveRepositoriesAutoConfiguration,\\</span></span>
<span class="line"><span style="color:#E1E4E8;">org.springframework.boot.autoconfigure.data.couchbase.CouchbaseRepositoriesAutoConfiguration,\\</span></span>
<span class="line"><span style="color:#E1E4E8;">org.springframework.boot.autoconfigure.data.elasticsearch.ElasticsearchDataAutoConfiguration,\\</span></span>
<span class="line"><span style="color:#E1E4E8;">org.springframework.boot.autoconfigure.data.elasticsearch.ElasticsearchRepositoriesAutoConfiguration,\\</span></span>
<span class="line"><span style="color:#E1E4E8;">org.springframework.boot.autoconfigure.data.elasticsearch.ReactiveElasticsearchRepositoriesAutoConfiguration,\\</span></span>
<span class="line"><span style="color:#E1E4E8;">org.springframework.boot.autoconfigure.data.elasticsearch.ReactiveElasticsearchRestClientAutoConfiguration,\\</span></span>
<span class="line"><span style="color:#E1E4E8;">org.springframework.boot.autoconfigure.data.jdbc.JdbcRepositoriesAutoConfiguration,\\</span></span>
<span class="line"><span style="color:#E1E4E8;">org.springframework.boot.autoconfigure.data.jpa.JpaRepositoriesAutoConfiguration,\\</span></span>
<span class="line"><span style="color:#E1E4E8;">org.springframework.boot.autoconfigure.data.ldap.LdapRepositoriesAutoConfiguration,\\</span></span>
<span class="line"><span style="color:#E1E4E8;">org.springframework.boot.autoconfigure.data.mongo.MongoDataAutoConfiguration,\\</span></span>
<span class="line"><span style="color:#E1E4E8;">org.springframework.boot.autoconfigure.data.mongo.MongoReactiveDataAutoConfiguration,\\</span></span>
<span class="line"><span style="color:#E1E4E8;">org.springframework.boot.autoconfigure.data.mongo.MongoReactiveRepositoriesAutoConfiguration,\\</span></span>
<span class="line"><span style="color:#E1E4E8;">org.springframework.boot.autoconfigure.data.mongo.MongoRepositoriesAutoConfiguration,\\</span></span>
<span class="line"><span style="color:#E1E4E8;">org.springframework.boot.autoconfigure.data.neo4j.Neo4jDataAutoConfiguration,\\</span></span>
<span class="line"><span style="color:#E1E4E8;">org.springframework.boot.autoconfigure.data.neo4j.Neo4jReactiveDataAutoConfiguration,\\</span></span>
<span class="line"><span style="color:#E1E4E8;">org.springframework.boot.autoconfigure.data.neo4j.Neo4jReactiveRepositoriesAutoConfiguration,\\</span></span>
<span class="line"><span style="color:#E1E4E8;">org.springframework.boot.autoconfigure.data.neo4j.Neo4jRepositoriesAutoConfiguration,\\</span></span>
<span class="line"><span style="color:#E1E4E8;">org.springframework.boot.autoconfigure.data.r2dbc.R2dbcDataAutoConfiguration,\\</span></span>
<span class="line"><span style="color:#E1E4E8;">org.springframework.boot.autoconfigure.data.r2dbc.R2dbcRepositoriesAutoConfiguration,\\</span></span>
<span class="line"><span style="color:#E1E4E8;">org.springframework.boot.autoconfigure.data.redis.RedisAutoConfiguration,\\</span></span>
<span class="line"><span style="color:#E1E4E8;">org.springframework.boot.autoconfigure.data.redis.RedisReactiveAutoConfiguration,\\</span></span>
<span class="line"><span style="color:#E1E4E8;">org.springframework.boot.autoconfigure.data.redis.RedisRepositoriesAutoConfiguration,\\</span></span>
<span class="line"><span style="color:#E1E4E8;">org.springframework.boot.autoconfigure.data.rest.RepositoryRestMvcAutoConfiguration,\\</span></span>
<span class="line"><span style="color:#E1E4E8;">org.springframework.boot.autoconfigure.data.web.SpringDataWebAutoConfiguration,\\</span></span>
<span class="line"><span style="color:#E1E4E8;">org.springframework.boot.autoconfigure.elasticsearch.ElasticsearchRestClientAutoConfiguration,\\</span></span>
<span class="line"><span style="color:#E1E4E8;">org.springframework.boot.autoconfigure.flyway.FlywayAutoConfiguration,\\</span></span>
<span class="line"><span style="color:#E1E4E8;">org.springframework.boot.autoconfigure.freemarker.FreeMarkerAutoConfiguration,\\</span></span>
<span class="line"><span style="color:#E1E4E8;">org.springframework.boot.autoconfigure.groovy.template.GroovyTemplateAutoConfiguration,\\</span></span>
<span class="line"><span style="color:#E1E4E8;">org.springframework.boot.autoconfigure.gson.GsonAutoConfiguration,\\</span></span>
<span class="line"><span style="color:#E1E4E8;">org.springframework.boot.autoconfigure.h2.H2ConsoleAutoConfiguration,\\</span></span>
<span class="line"><span style="color:#E1E4E8;">org.springframework.boot.autoconfigure.hateoas.HypermediaAutoConfiguration,\\</span></span>
<span class="line"><span style="color:#E1E4E8;">org.springframework.boot.autoconfigure.hazelcast.HazelcastAutoConfiguration,\\</span></span>
<span class="line"><span style="color:#E1E4E8;">org.springframework.boot.autoconfigure.hazelcast.HazelcastJpaDependencyAutoConfiguration,\\</span></span>
<span class="line"><span style="color:#E1E4E8;">org.springframework.boot.autoconfigure.http.HttpMessageConvertersAutoConfiguration,\\</span></span>
<span class="line"><span style="color:#E1E4E8;">org.springframework.boot.autoconfigure.http.codec.CodecsAutoConfiguration,\\</span></span>
<span class="line"><span style="color:#E1E4E8;">org.springframework.boot.autoconfigure.influx.InfluxDbAutoConfiguration,\\</span></span>
<span class="line"><span style="color:#E1E4E8;">org.springframework.boot.autoconfigure.info.ProjectInfoAutoConfiguration,\\</span></span>
<span class="line"><span style="color:#E1E4E8;">org.springframework.boot.autoconfigure.integration.IntegrationAutoConfiguration,\\</span></span>
<span class="line"><span style="color:#E1E4E8;">org.springframework.boot.autoconfigure.jackson.JacksonAutoConfiguration,\\</span></span>
<span class="line"><span style="color:#E1E4E8;">org.springframework.boot.autoconfigure.jdbc.DataSourceAutoConfiguration,\\</span></span>
<span class="line"><span style="color:#E1E4E8;">org.springframework.boot.autoconfigure.jdbc.JdbcTemplateAutoConfiguration,\\</span></span>
<span class="line"><span style="color:#E1E4E8;">org.springframework.boot.autoconfigure.jdbc.JndiDataSourceAutoConfiguration,\\</span></span>
<span class="line"><span style="color:#E1E4E8;">org.springframework.boot.autoconfigure.jdbc.XADataSourceAutoConfiguration,\\</span></span>
<span class="line"><span style="color:#E1E4E8;">org.springframework.boot.autoconfigure.jdbc.DataSourceTransactionManagerAutoConfiguration,\\</span></span>
<span class="line"><span style="color:#E1E4E8;">org.springframework.boot.autoconfigure.jms.JmsAutoConfiguration,\\</span></span>
<span class="line"><span style="color:#E1E4E8;">org.springframework.boot.autoconfigure.jmx.JmxAutoConfiguration,\\</span></span>
<span class="line"><span style="color:#E1E4E8;">org.springframework.boot.autoconfigure.jms.JndiConnectionFactoryAutoConfiguration,\\</span></span>
<span class="line"><span style="color:#E1E4E8;">org.springframework.boot.autoconfigure.jms.activemq.ActiveMQAutoConfiguration,\\</span></span>
<span class="line"><span style="color:#E1E4E8;">org.springframework.boot.autoconfigure.jms.artemis.ArtemisAutoConfiguration,\\</span></span>
<span class="line"><span style="color:#E1E4E8;">org.springframework.boot.autoconfigure.jersey.JerseyAutoConfiguration,\\</span></span>
<span class="line"><span style="color:#E1E4E8;">org.springframework.boot.autoconfigure.jooq.JooqAutoConfiguration,\\</span></span>
<span class="line"><span style="color:#E1E4E8;">org.springframework.boot.autoconfigure.jsonb.JsonbAutoConfiguration,\\</span></span>
<span class="line"><span style="color:#E1E4E8;">org.springframework.boot.autoconfigure.kafka.KafkaAutoConfiguration,\\</span></span>
<span class="line"><span style="color:#E1E4E8;">org.springframework.boot.autoconfigure.availability.ApplicationAvailabilityAutoConfiguration,\\</span></span>
<span class="line"><span style="color:#E1E4E8;">org.springframework.boot.autoconfigure.ldap.embedded.EmbeddedLdapAutoConfiguration,\\</span></span>
<span class="line"><span style="color:#E1E4E8;">org.springframework.boot.autoconfigure.ldap.LdapAutoConfiguration,\\</span></span>
<span class="line"><span style="color:#E1E4E8;">org.springframework.boot.autoconfigure.liquibase.LiquibaseAutoConfiguration,\\</span></span>
<span class="line"><span style="color:#E1E4E8;">org.springframework.boot.autoconfigure.mail.MailSenderAutoConfiguration,\\</span></span>
<span class="line"><span style="color:#E1E4E8;">org.springframework.boot.autoconfigure.mail.MailSenderValidatorAutoConfiguration,\\</span></span>
<span class="line"><span style="color:#E1E4E8;">org.springframework.boot.autoconfigure.mongo.embedded.EmbeddedMongoAutoConfiguration,\\</span></span>
<span class="line"><span style="color:#E1E4E8;">org.springframework.boot.autoconfigure.mongo.MongoAutoConfiguration,\\</span></span>
<span class="line"><span style="color:#E1E4E8;">org.springframework.boot.autoconfigure.mongo.MongoReactiveAutoConfiguration,\\</span></span>
<span class="line"><span style="color:#E1E4E8;">org.springframework.boot.autoconfigure.mustache.MustacheAutoConfiguration,\\</span></span>
<span class="line"><span style="color:#E1E4E8;">org.springframework.boot.autoconfigure.neo4j.Neo4jAutoConfiguration,\\</span></span>
<span class="line"><span style="color:#E1E4E8;">org.springframework.boot.autoconfigure.netty.NettyAutoConfiguration,\\</span></span>
<span class="line"><span style="color:#E1E4E8;">org.springframework.boot.autoconfigure.orm.jpa.HibernateJpaAutoConfiguration,\\</span></span>
<span class="line"><span style="color:#E1E4E8;">org.springframework.boot.autoconfigure.quartz.QuartzAutoConfiguration,\\</span></span>
<span class="line"><span style="color:#E1E4E8;">org.springframework.boot.autoconfigure.r2dbc.R2dbcAutoConfiguration,\\</span></span>
<span class="line"><span style="color:#E1E4E8;">org.springframework.boot.autoconfigure.r2dbc.R2dbcTransactionManagerAutoConfiguration,\\</span></span>
<span class="line"><span style="color:#E1E4E8;">org.springframework.boot.autoconfigure.rsocket.RSocketMessagingAutoConfiguration,\\</span></span>
<span class="line"><span style="color:#E1E4E8;">org.springframework.boot.autoconfigure.rsocket.RSocketRequesterAutoConfiguration,\\</span></span>
<span class="line"><span style="color:#E1E4E8;">org.springframework.boot.autoconfigure.rsocket.RSocketServerAutoConfiguration,\\</span></span>
<span class="line"><span style="color:#E1E4E8;">org.springframework.boot.autoconfigure.rsocket.RSocketStrategiesAutoConfiguration,\\</span></span>
<span class="line"><span style="color:#E1E4E8;">org.springframework.boot.autoconfigure.security.servlet.SecurityAutoConfiguration,\\</span></span>
<span class="line"><span style="color:#E1E4E8;">org.springframework.boot.autoconfigure.security.servlet.UserDetailsServiceAutoConfiguration,\\</span></span>
<span class="line"><span style="color:#E1E4E8;">org.springframework.boot.autoconfigure.security.servlet.SecurityFilterAutoConfiguration,\\</span></span>
<span class="line"><span style="color:#E1E4E8;">org.springframework.boot.autoconfigure.security.reactive.ReactiveSecurityAutoConfiguration,\\</span></span>
<span class="line"><span style="color:#E1E4E8;">org.springframework.boot.autoconfigure.security.reactive.ReactiveUserDetailsServiceAutoConfiguration,\\</span></span>
<span class="line"><span style="color:#E1E4E8;">org.springframework.boot.autoconfigure.security.rsocket.RSocketSecurityAutoConfiguration,\\</span></span>
<span class="line"><span style="color:#E1E4E8;">org.springframework.boot.autoconfigure.security.saml2.Saml2RelyingPartyAutoConfiguration,\\</span></span>
<span class="line"><span style="color:#E1E4E8;">org.springframework.boot.autoconfigure.sendgrid.SendGridAutoConfiguration,\\</span></span>
<span class="line"><span style="color:#E1E4E8;">org.springframework.boot.autoconfigure.session.SessionAutoConfiguration,\\</span></span>
<span class="line"><span style="color:#E1E4E8;">org.springframework.boot.autoconfigure.security.oauth2.client.servlet.OAuth2ClientAutoConfiguration,\\</span></span>
<span class="line"><span style="color:#E1E4E8;">org.springframework.boot.autoconfigure.security.oauth2.client.reactive.ReactiveOAuth2ClientAutoConfiguration,\\</span></span>
<span class="line"><span style="color:#E1E4E8;">org.springframework.boot.autoconfigure.security.oauth2.resource.servlet.OAuth2ResourceServerAutoConfiguration,\\</span></span>
<span class="line"><span style="color:#E1E4E8;">org.springframework.boot.autoconfigure.security.oauth2.resource.reactive.ReactiveOAuth2ResourceServerAutoConfiguration,\\</span></span>
<span class="line"><span style="color:#E1E4E8;">org.springframework.boot.autoconfigure.solr.SolrAutoConfiguration,\\</span></span>
<span class="line"><span style="color:#E1E4E8;">org.springframework.boot.autoconfigure.sql.init.SqlInitializationAutoConfiguration,\\</span></span>
<span class="line"><span style="color:#E1E4E8;">org.springframework.boot.autoconfigure.task.TaskExecutionAutoConfiguration,\\</span></span>
<span class="line"><span style="color:#E1E4E8;">org.springframework.boot.autoconfigure.task.TaskSchedulingAutoConfiguration,\\</span></span>
<span class="line"><span style="color:#E1E4E8;">org.springframework.boot.autoconfigure.thymeleaf.ThymeleafAutoConfiguration,\\</span></span>
<span class="line"><span style="color:#E1E4E8;">org.springframework.boot.autoconfigure.transaction.TransactionAutoConfiguration,\\</span></span>
<span class="line"><span style="color:#E1E4E8;">org.springframework.boot.autoconfigure.transaction.jta.JtaAutoConfiguration,\\</span></span>
<span class="line"><span style="color:#E1E4E8;">org.springframework.boot.autoconfigure.validation.ValidationAutoConfiguration,\\</span></span>
<span class="line"><span style="color:#E1E4E8;">org.springframework.boot.autoconfigure.web.client.RestTemplateAutoConfiguration,\\</span></span>
<span class="line"><span style="color:#E1E4E8;">org.springframework.boot.autoconfigure.web.embedded.EmbeddedWebServerFactoryCustomizerAutoConfiguration,\\</span></span>
<span class="line"><span style="color:#E1E4E8;">org.springframework.boot.autoconfigure.web.reactive.HttpHandlerAutoConfiguration,\\</span></span>
<span class="line"><span style="color:#E1E4E8;">org.springframework.boot.autoconfigure.web.reactive.ReactiveWebServerFactoryAutoConfiguration,\\</span></span>
<span class="line"><span style="color:#E1E4E8;">org.springframework.boot.autoconfigure.web.reactive.WebFluxAutoConfiguration,\\</span></span>
<span class="line"><span style="color:#E1E4E8;">org.springframework.boot.autoconfigure.web.reactive.error.ErrorWebFluxAutoConfiguration,\\</span></span>
<span class="line"><span style="color:#E1E4E8;">org.springframework.boot.autoconfigure.web.reactive.function.client.ClientHttpConnectorAutoConfiguration,\\</span></span>
<span class="line"><span style="color:#E1E4E8;">org.springframework.boot.autoconfigure.web.reactive.function.client.WebClientAutoConfiguration,\\</span></span>
<span class="line"><span style="color:#E1E4E8;">org.springframework.boot.autoconfigure.web.servlet.DispatcherServletAutoConfiguration,\\</span></span>
<span class="line"><span style="color:#E1E4E8;">org.springframework.boot.autoconfigure.web.servlet.ServletWebServerFactoryAutoConfiguration,\\</span></span>
<span class="line"><span style="color:#E1E4E8;">org.springframework.boot.autoconfigure.web.servlet.error.ErrorMvcAutoConfiguration,\\</span></span>
<span class="line"><span style="color:#E1E4E8;">org.springframework.boot.autoconfigure.web.servlet.HttpEncodingAutoConfiguration,\\</span></span>
<span class="line"><span style="color:#E1E4E8;">org.springframework.boot.autoconfigure.web.servlet.MultipartAutoConfiguration,\\</span></span>
<span class="line"><span style="color:#E1E4E8;">org.springframework.boot.autoconfigure.web.servlet.WebMvcAutoConfiguration,\\</span></span>
<span class="line"><span style="color:#E1E4E8;">org.springframework.boot.autoconfigure.websocket.reactive.WebSocketReactiveAutoConfiguration,\\</span></span>
<span class="line"><span style="color:#E1E4E8;">org.springframework.boot.autoconfigure.websocket.servlet.WebSocketServletAutoConfiguration,\\</span></span>
<span class="line"><span style="color:#E1E4E8;">org.springframework.boot.autoconfigure.websocket.servlet.WebSocketMessagingAutoConfiguration,\\</span></span>
<span class="line"><span style="color:#E1E4E8;">org.springframework.boot.autoconfigure.webservices.WebServicesAutoConfiguration,\\</span></span>
<span class="line"><span style="color:#E1E4E8;">org.springframework.boot.autoconfigure.webservices.client.WebServiceTemplateAutoConfiguration</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># Failure analyzers</span></span>
<span class="line"><span style="color:#F97583;">org.springframework.boot.diagnostics.FailureAnalyzer</span><span style="color:#E1E4E8;">=\\</span></span>
<span class="line"><span style="color:#E1E4E8;">org.springframework.boot.autoconfigure.data.redis.RedisUrlSyntaxFailureAnalyzer,\\</span></span>
<span class="line"><span style="color:#E1E4E8;">org.springframework.boot.autoconfigure.diagnostics.analyzer.NoSuchBeanDefinitionFailureAnalyzer,\\</span></span>
<span class="line"><span style="color:#E1E4E8;">org.springframework.boot.autoconfigure.flyway.FlywayMigrationScriptMissingFailureAnalyzer,\\</span></span>
<span class="line"><span style="color:#E1E4E8;">org.springframework.boot.autoconfigure.jdbc.DataSourceBeanCreationFailureAnalyzer,\\</span></span>
<span class="line"><span style="color:#E1E4E8;">org.springframework.boot.autoconfigure.jdbc.HikariDriverConfigurationFailureAnalyzer,\\</span></span>
<span class="line"><span style="color:#E1E4E8;">org.springframework.boot.autoconfigure.r2dbc.ConnectionFactoryBeanCreationFailureAnalyzer,\\</span></span>
<span class="line"><span style="color:#E1E4E8;">org.springframework.boot.autoconfigure.session.NonUniqueSessionRepositoryFailureAnalyzer</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># Template availability providers</span></span>
<span class="line"><span style="color:#F97583;">org.springframework.boot.autoconfigure.template.TemplateAvailabilityProvider</span><span style="color:#E1E4E8;">=\\</span></span>
<span class="line"><span style="color:#E1E4E8;">org.springframework.boot.autoconfigure.freemarker.FreeMarkerTemplateAvailabilityProvider,\\</span></span>
<span class="line"><span style="color:#E1E4E8;">org.springframework.boot.autoconfigure.mustache.MustacheTemplateAvailabilityProvider,\\</span></span>
<span class="line"><span style="color:#E1E4E8;">org.springframework.boot.autoconfigure.groovy.template.GroovyTemplateAvailabilityProvider,\\</span></span>
<span class="line"><span style="color:#E1E4E8;">org.springframework.boot.autoconfigure.thymeleaf.ThymeleafTemplateAvailabilityProvider,\\</span></span>
<span class="line"><span style="color:#E1E4E8;">org.springframework.boot.autoconfigure.web.servlet.JspTemplateAvailabilityProvider</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># DataSource initializer detectors</span></span>
<span class="line"><span style="color:#F97583;">org.springframework.boot.sql.init.dependency.DatabaseInitializerDetector</span><span style="color:#E1E4E8;">=\\</span></span>
<span class="line"><span style="color:#E1E4E8;">org.springframework.boot.autoconfigure.flyway.FlywayMigrationInitializerDatabaseInitializerDetector</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># Depends on database initialization detectors</span></span>
<span class="line"><span style="color:#F97583;">org.springframework.boot.sql.init.dependency.DependsOnDatabaseInitializationDetector</span><span style="color:#E1E4E8;">=\\</span></span>
<span class="line"><span style="color:#E1E4E8;">org.springframework.boot.autoconfigure.batch.JobRepositoryDependsOnDatabaseInitializationDetector,\\</span></span>
<span class="line"><span style="color:#E1E4E8;">org.springframework.boot.autoconfigure.quartz.SchedulerDependsOnDatabaseInitializationDetector,\\</span></span>
<span class="line"><span style="color:#E1E4E8;">org.springframework.boot.autoconfigure.session.JdbcIndexedSessionRepositoryDependsOnDatabaseInitializationDetector</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6A737D;"># 此处借用spring-boot-autoconfigure.jar包的spring.factories文件</span></span>
<span class="line"><span style="color:#6A737D;"># Initializers</span></span>
<span class="line"><span style="color:#D73A49;">org.springframework.context.ApplicationContextInitializer</span><span style="color:#24292E;">=\\</span></span>
<span class="line"><span style="color:#24292E;">org.springframework.boot.autoconfigure.SharedMetadataReaderFactoryContextInitializer,\\</span></span>
<span class="line"><span style="color:#24292E;">org.springframework.boot.autoconfigure.logging.ConditionEvaluationReportLoggingListener</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># Application Listeners</span></span>
<span class="line"><span style="color:#D73A49;">org.springframework.context.ApplicationListener</span><span style="color:#24292E;">=\\</span></span>
<span class="line"><span style="color:#24292E;">org.springframework.boot.autoconfigure.BackgroundPreinitializer</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># Environment Post Processors</span></span>
<span class="line"><span style="color:#D73A49;">org.springframework.boot.env.EnvironmentPostProcessor</span><span style="color:#24292E;">=\\</span></span>
<span class="line"><span style="color:#24292E;">org.springframework.boot.autoconfigure.integration.IntegrationPropertiesEnvironmentPostProcessor</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># Auto Configuration Import Listeners</span></span>
<span class="line"><span style="color:#D73A49;">org.springframework.boot.autoconfigure.AutoConfigurationImportListener</span><span style="color:#24292E;">=\\</span></span>
<span class="line"><span style="color:#24292E;">org.springframework.boot.autoconfigure.condition.ConditionEvaluationReportAutoConfigurationImportListener</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># Auto Configuration Import Filters</span></span>
<span class="line"><span style="color:#D73A49;">org.springframework.boot.autoconfigure.AutoConfigurationImportFilter</span><span style="color:#24292E;">=\\</span></span>
<span class="line"><span style="color:#24292E;">org.springframework.boot.autoconfigure.condition.OnBeanCondition,\\</span></span>
<span class="line"><span style="color:#24292E;">org.springframework.boot.autoconfigure.condition.OnClassCondition,\\</span></span>
<span class="line"><span style="color:#24292E;">org.springframework.boot.autoconfigure.condition.OnWebApplicationCondition</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># Auto Configure</span></span>
<span class="line"><span style="color:#D73A49;">org.springframework.boot.autoconfigure.EnableAutoConfiguration</span><span style="color:#24292E;">=\\</span></span>
<span class="line"><span style="color:#24292E;">org.springframework.boot.autoconfigure.admin.SpringApplicationAdminJmxAutoConfiguration,\\</span></span>
<span class="line"><span style="color:#24292E;">org.springframework.boot.autoconfigure.aop.AopAutoConfiguration,\\</span></span>
<span class="line"><span style="color:#24292E;">org.springframework.boot.autoconfigure.amqp.RabbitAutoConfiguration,\\</span></span>
<span class="line"><span style="color:#24292E;">org.springframework.boot.autoconfigure.batch.BatchAutoConfiguration,\\</span></span>
<span class="line"><span style="color:#24292E;">org.springframework.boot.autoconfigure.cache.CacheAutoConfiguration,\\</span></span>
<span class="line"><span style="color:#24292E;">org.springframework.boot.autoconfigure.cassandra.CassandraAutoConfiguration,\\</span></span>
<span class="line"><span style="color:#24292E;">org.springframework.boot.autoconfigure.context.ConfigurationPropertiesAutoConfiguration,\\</span></span>
<span class="line"><span style="color:#24292E;">org.springframework.boot.autoconfigure.context.LifecycleAutoConfiguration,\\</span></span>
<span class="line"><span style="color:#24292E;">org.springframework.boot.autoconfigure.context.MessageSourceAutoConfiguration,\\</span></span>
<span class="line"><span style="color:#24292E;">org.springframework.boot.autoconfigure.context.PropertyPlaceholderAutoConfiguration,\\</span></span>
<span class="line"><span style="color:#24292E;">org.springframework.boot.autoconfigure.couchbase.CouchbaseAutoConfiguration,\\</span></span>
<span class="line"><span style="color:#24292E;">org.springframework.boot.autoconfigure.dao.PersistenceExceptionTranslationAutoConfiguration,\\</span></span>
<span class="line"><span style="color:#24292E;">org.springframework.boot.autoconfigure.data.cassandra.CassandraDataAutoConfiguration,\\</span></span>
<span class="line"><span style="color:#24292E;">org.springframework.boot.autoconfigure.data.cassandra.CassandraReactiveDataAutoConfiguration,\\</span></span>
<span class="line"><span style="color:#24292E;">org.springframework.boot.autoconfigure.data.cassandra.CassandraReactiveRepositoriesAutoConfiguration,\\</span></span>
<span class="line"><span style="color:#24292E;">org.springframework.boot.autoconfigure.data.cassandra.CassandraRepositoriesAutoConfiguration,\\</span></span>
<span class="line"><span style="color:#24292E;">org.springframework.boot.autoconfigure.data.couchbase.CouchbaseDataAutoConfiguration,\\</span></span>
<span class="line"><span style="color:#24292E;">org.springframework.boot.autoconfigure.data.couchbase.CouchbaseReactiveDataAutoConfiguration,\\</span></span>
<span class="line"><span style="color:#24292E;">org.springframework.boot.autoconfigure.data.couchbase.CouchbaseReactiveRepositoriesAutoConfiguration,\\</span></span>
<span class="line"><span style="color:#24292E;">org.springframework.boot.autoconfigure.data.couchbase.CouchbaseRepositoriesAutoConfiguration,\\</span></span>
<span class="line"><span style="color:#24292E;">org.springframework.boot.autoconfigure.data.elasticsearch.ElasticsearchDataAutoConfiguration,\\</span></span>
<span class="line"><span style="color:#24292E;">org.springframework.boot.autoconfigure.data.elasticsearch.ElasticsearchRepositoriesAutoConfiguration,\\</span></span>
<span class="line"><span style="color:#24292E;">org.springframework.boot.autoconfigure.data.elasticsearch.ReactiveElasticsearchRepositoriesAutoConfiguration,\\</span></span>
<span class="line"><span style="color:#24292E;">org.springframework.boot.autoconfigure.data.elasticsearch.ReactiveElasticsearchRestClientAutoConfiguration,\\</span></span>
<span class="line"><span style="color:#24292E;">org.springframework.boot.autoconfigure.data.jdbc.JdbcRepositoriesAutoConfiguration,\\</span></span>
<span class="line"><span style="color:#24292E;">org.springframework.boot.autoconfigure.data.jpa.JpaRepositoriesAutoConfiguration,\\</span></span>
<span class="line"><span style="color:#24292E;">org.springframework.boot.autoconfigure.data.ldap.LdapRepositoriesAutoConfiguration,\\</span></span>
<span class="line"><span style="color:#24292E;">org.springframework.boot.autoconfigure.data.mongo.MongoDataAutoConfiguration,\\</span></span>
<span class="line"><span style="color:#24292E;">org.springframework.boot.autoconfigure.data.mongo.MongoReactiveDataAutoConfiguration,\\</span></span>
<span class="line"><span style="color:#24292E;">org.springframework.boot.autoconfigure.data.mongo.MongoReactiveRepositoriesAutoConfiguration,\\</span></span>
<span class="line"><span style="color:#24292E;">org.springframework.boot.autoconfigure.data.mongo.MongoRepositoriesAutoConfiguration,\\</span></span>
<span class="line"><span style="color:#24292E;">org.springframework.boot.autoconfigure.data.neo4j.Neo4jDataAutoConfiguration,\\</span></span>
<span class="line"><span style="color:#24292E;">org.springframework.boot.autoconfigure.data.neo4j.Neo4jReactiveDataAutoConfiguration,\\</span></span>
<span class="line"><span style="color:#24292E;">org.springframework.boot.autoconfigure.data.neo4j.Neo4jReactiveRepositoriesAutoConfiguration,\\</span></span>
<span class="line"><span style="color:#24292E;">org.springframework.boot.autoconfigure.data.neo4j.Neo4jRepositoriesAutoConfiguration,\\</span></span>
<span class="line"><span style="color:#24292E;">org.springframework.boot.autoconfigure.data.r2dbc.R2dbcDataAutoConfiguration,\\</span></span>
<span class="line"><span style="color:#24292E;">org.springframework.boot.autoconfigure.data.r2dbc.R2dbcRepositoriesAutoConfiguration,\\</span></span>
<span class="line"><span style="color:#24292E;">org.springframework.boot.autoconfigure.data.redis.RedisAutoConfiguration,\\</span></span>
<span class="line"><span style="color:#24292E;">org.springframework.boot.autoconfigure.data.redis.RedisReactiveAutoConfiguration,\\</span></span>
<span class="line"><span style="color:#24292E;">org.springframework.boot.autoconfigure.data.redis.RedisRepositoriesAutoConfiguration,\\</span></span>
<span class="line"><span style="color:#24292E;">org.springframework.boot.autoconfigure.data.rest.RepositoryRestMvcAutoConfiguration,\\</span></span>
<span class="line"><span style="color:#24292E;">org.springframework.boot.autoconfigure.data.web.SpringDataWebAutoConfiguration,\\</span></span>
<span class="line"><span style="color:#24292E;">org.springframework.boot.autoconfigure.elasticsearch.ElasticsearchRestClientAutoConfiguration,\\</span></span>
<span class="line"><span style="color:#24292E;">org.springframework.boot.autoconfigure.flyway.FlywayAutoConfiguration,\\</span></span>
<span class="line"><span style="color:#24292E;">org.springframework.boot.autoconfigure.freemarker.FreeMarkerAutoConfiguration,\\</span></span>
<span class="line"><span style="color:#24292E;">org.springframework.boot.autoconfigure.groovy.template.GroovyTemplateAutoConfiguration,\\</span></span>
<span class="line"><span style="color:#24292E;">org.springframework.boot.autoconfigure.gson.GsonAutoConfiguration,\\</span></span>
<span class="line"><span style="color:#24292E;">org.springframework.boot.autoconfigure.h2.H2ConsoleAutoConfiguration,\\</span></span>
<span class="line"><span style="color:#24292E;">org.springframework.boot.autoconfigure.hateoas.HypermediaAutoConfiguration,\\</span></span>
<span class="line"><span style="color:#24292E;">org.springframework.boot.autoconfigure.hazelcast.HazelcastAutoConfiguration,\\</span></span>
<span class="line"><span style="color:#24292E;">org.springframework.boot.autoconfigure.hazelcast.HazelcastJpaDependencyAutoConfiguration,\\</span></span>
<span class="line"><span style="color:#24292E;">org.springframework.boot.autoconfigure.http.HttpMessageConvertersAutoConfiguration,\\</span></span>
<span class="line"><span style="color:#24292E;">org.springframework.boot.autoconfigure.http.codec.CodecsAutoConfiguration,\\</span></span>
<span class="line"><span style="color:#24292E;">org.springframework.boot.autoconfigure.influx.InfluxDbAutoConfiguration,\\</span></span>
<span class="line"><span style="color:#24292E;">org.springframework.boot.autoconfigure.info.ProjectInfoAutoConfiguration,\\</span></span>
<span class="line"><span style="color:#24292E;">org.springframework.boot.autoconfigure.integration.IntegrationAutoConfiguration,\\</span></span>
<span class="line"><span style="color:#24292E;">org.springframework.boot.autoconfigure.jackson.JacksonAutoConfiguration,\\</span></span>
<span class="line"><span style="color:#24292E;">org.springframework.boot.autoconfigure.jdbc.DataSourceAutoConfiguration,\\</span></span>
<span class="line"><span style="color:#24292E;">org.springframework.boot.autoconfigure.jdbc.JdbcTemplateAutoConfiguration,\\</span></span>
<span class="line"><span style="color:#24292E;">org.springframework.boot.autoconfigure.jdbc.JndiDataSourceAutoConfiguration,\\</span></span>
<span class="line"><span style="color:#24292E;">org.springframework.boot.autoconfigure.jdbc.XADataSourceAutoConfiguration,\\</span></span>
<span class="line"><span style="color:#24292E;">org.springframework.boot.autoconfigure.jdbc.DataSourceTransactionManagerAutoConfiguration,\\</span></span>
<span class="line"><span style="color:#24292E;">org.springframework.boot.autoconfigure.jms.JmsAutoConfiguration,\\</span></span>
<span class="line"><span style="color:#24292E;">org.springframework.boot.autoconfigure.jmx.JmxAutoConfiguration,\\</span></span>
<span class="line"><span style="color:#24292E;">org.springframework.boot.autoconfigure.jms.JndiConnectionFactoryAutoConfiguration,\\</span></span>
<span class="line"><span style="color:#24292E;">org.springframework.boot.autoconfigure.jms.activemq.ActiveMQAutoConfiguration,\\</span></span>
<span class="line"><span style="color:#24292E;">org.springframework.boot.autoconfigure.jms.artemis.ArtemisAutoConfiguration,\\</span></span>
<span class="line"><span style="color:#24292E;">org.springframework.boot.autoconfigure.jersey.JerseyAutoConfiguration,\\</span></span>
<span class="line"><span style="color:#24292E;">org.springframework.boot.autoconfigure.jooq.JooqAutoConfiguration,\\</span></span>
<span class="line"><span style="color:#24292E;">org.springframework.boot.autoconfigure.jsonb.JsonbAutoConfiguration,\\</span></span>
<span class="line"><span style="color:#24292E;">org.springframework.boot.autoconfigure.kafka.KafkaAutoConfiguration,\\</span></span>
<span class="line"><span style="color:#24292E;">org.springframework.boot.autoconfigure.availability.ApplicationAvailabilityAutoConfiguration,\\</span></span>
<span class="line"><span style="color:#24292E;">org.springframework.boot.autoconfigure.ldap.embedded.EmbeddedLdapAutoConfiguration,\\</span></span>
<span class="line"><span style="color:#24292E;">org.springframework.boot.autoconfigure.ldap.LdapAutoConfiguration,\\</span></span>
<span class="line"><span style="color:#24292E;">org.springframework.boot.autoconfigure.liquibase.LiquibaseAutoConfiguration,\\</span></span>
<span class="line"><span style="color:#24292E;">org.springframework.boot.autoconfigure.mail.MailSenderAutoConfiguration,\\</span></span>
<span class="line"><span style="color:#24292E;">org.springframework.boot.autoconfigure.mail.MailSenderValidatorAutoConfiguration,\\</span></span>
<span class="line"><span style="color:#24292E;">org.springframework.boot.autoconfigure.mongo.embedded.EmbeddedMongoAutoConfiguration,\\</span></span>
<span class="line"><span style="color:#24292E;">org.springframework.boot.autoconfigure.mongo.MongoAutoConfiguration,\\</span></span>
<span class="line"><span style="color:#24292E;">org.springframework.boot.autoconfigure.mongo.MongoReactiveAutoConfiguration,\\</span></span>
<span class="line"><span style="color:#24292E;">org.springframework.boot.autoconfigure.mustache.MustacheAutoConfiguration,\\</span></span>
<span class="line"><span style="color:#24292E;">org.springframework.boot.autoconfigure.neo4j.Neo4jAutoConfiguration,\\</span></span>
<span class="line"><span style="color:#24292E;">org.springframework.boot.autoconfigure.netty.NettyAutoConfiguration,\\</span></span>
<span class="line"><span style="color:#24292E;">org.springframework.boot.autoconfigure.orm.jpa.HibernateJpaAutoConfiguration,\\</span></span>
<span class="line"><span style="color:#24292E;">org.springframework.boot.autoconfigure.quartz.QuartzAutoConfiguration,\\</span></span>
<span class="line"><span style="color:#24292E;">org.springframework.boot.autoconfigure.r2dbc.R2dbcAutoConfiguration,\\</span></span>
<span class="line"><span style="color:#24292E;">org.springframework.boot.autoconfigure.r2dbc.R2dbcTransactionManagerAutoConfiguration,\\</span></span>
<span class="line"><span style="color:#24292E;">org.springframework.boot.autoconfigure.rsocket.RSocketMessagingAutoConfiguration,\\</span></span>
<span class="line"><span style="color:#24292E;">org.springframework.boot.autoconfigure.rsocket.RSocketRequesterAutoConfiguration,\\</span></span>
<span class="line"><span style="color:#24292E;">org.springframework.boot.autoconfigure.rsocket.RSocketServerAutoConfiguration,\\</span></span>
<span class="line"><span style="color:#24292E;">org.springframework.boot.autoconfigure.rsocket.RSocketStrategiesAutoConfiguration,\\</span></span>
<span class="line"><span style="color:#24292E;">org.springframework.boot.autoconfigure.security.servlet.SecurityAutoConfiguration,\\</span></span>
<span class="line"><span style="color:#24292E;">org.springframework.boot.autoconfigure.security.servlet.UserDetailsServiceAutoConfiguration,\\</span></span>
<span class="line"><span style="color:#24292E;">org.springframework.boot.autoconfigure.security.servlet.SecurityFilterAutoConfiguration,\\</span></span>
<span class="line"><span style="color:#24292E;">org.springframework.boot.autoconfigure.security.reactive.ReactiveSecurityAutoConfiguration,\\</span></span>
<span class="line"><span style="color:#24292E;">org.springframework.boot.autoconfigure.security.reactive.ReactiveUserDetailsServiceAutoConfiguration,\\</span></span>
<span class="line"><span style="color:#24292E;">org.springframework.boot.autoconfigure.security.rsocket.RSocketSecurityAutoConfiguration,\\</span></span>
<span class="line"><span style="color:#24292E;">org.springframework.boot.autoconfigure.security.saml2.Saml2RelyingPartyAutoConfiguration,\\</span></span>
<span class="line"><span style="color:#24292E;">org.springframework.boot.autoconfigure.sendgrid.SendGridAutoConfiguration,\\</span></span>
<span class="line"><span style="color:#24292E;">org.springframework.boot.autoconfigure.session.SessionAutoConfiguration,\\</span></span>
<span class="line"><span style="color:#24292E;">org.springframework.boot.autoconfigure.security.oauth2.client.servlet.OAuth2ClientAutoConfiguration,\\</span></span>
<span class="line"><span style="color:#24292E;">org.springframework.boot.autoconfigure.security.oauth2.client.reactive.ReactiveOAuth2ClientAutoConfiguration,\\</span></span>
<span class="line"><span style="color:#24292E;">org.springframework.boot.autoconfigure.security.oauth2.resource.servlet.OAuth2ResourceServerAutoConfiguration,\\</span></span>
<span class="line"><span style="color:#24292E;">org.springframework.boot.autoconfigure.security.oauth2.resource.reactive.ReactiveOAuth2ResourceServerAutoConfiguration,\\</span></span>
<span class="line"><span style="color:#24292E;">org.springframework.boot.autoconfigure.solr.SolrAutoConfiguration,\\</span></span>
<span class="line"><span style="color:#24292E;">org.springframework.boot.autoconfigure.sql.init.SqlInitializationAutoConfiguration,\\</span></span>
<span class="line"><span style="color:#24292E;">org.springframework.boot.autoconfigure.task.TaskExecutionAutoConfiguration,\\</span></span>
<span class="line"><span style="color:#24292E;">org.springframework.boot.autoconfigure.task.TaskSchedulingAutoConfiguration,\\</span></span>
<span class="line"><span style="color:#24292E;">org.springframework.boot.autoconfigure.thymeleaf.ThymeleafAutoConfiguration,\\</span></span>
<span class="line"><span style="color:#24292E;">org.springframework.boot.autoconfigure.transaction.TransactionAutoConfiguration,\\</span></span>
<span class="line"><span style="color:#24292E;">org.springframework.boot.autoconfigure.transaction.jta.JtaAutoConfiguration,\\</span></span>
<span class="line"><span style="color:#24292E;">org.springframework.boot.autoconfigure.validation.ValidationAutoConfiguration,\\</span></span>
<span class="line"><span style="color:#24292E;">org.springframework.boot.autoconfigure.web.client.RestTemplateAutoConfiguration,\\</span></span>
<span class="line"><span style="color:#24292E;">org.springframework.boot.autoconfigure.web.embedded.EmbeddedWebServerFactoryCustomizerAutoConfiguration,\\</span></span>
<span class="line"><span style="color:#24292E;">org.springframework.boot.autoconfigure.web.reactive.HttpHandlerAutoConfiguration,\\</span></span>
<span class="line"><span style="color:#24292E;">org.springframework.boot.autoconfigure.web.reactive.ReactiveWebServerFactoryAutoConfiguration,\\</span></span>
<span class="line"><span style="color:#24292E;">org.springframework.boot.autoconfigure.web.reactive.WebFluxAutoConfiguration,\\</span></span>
<span class="line"><span style="color:#24292E;">org.springframework.boot.autoconfigure.web.reactive.error.ErrorWebFluxAutoConfiguration,\\</span></span>
<span class="line"><span style="color:#24292E;">org.springframework.boot.autoconfigure.web.reactive.function.client.ClientHttpConnectorAutoConfiguration,\\</span></span>
<span class="line"><span style="color:#24292E;">org.springframework.boot.autoconfigure.web.reactive.function.client.WebClientAutoConfiguration,\\</span></span>
<span class="line"><span style="color:#24292E;">org.springframework.boot.autoconfigure.web.servlet.DispatcherServletAutoConfiguration,\\</span></span>
<span class="line"><span style="color:#24292E;">org.springframework.boot.autoconfigure.web.servlet.ServletWebServerFactoryAutoConfiguration,\\</span></span>
<span class="line"><span style="color:#24292E;">org.springframework.boot.autoconfigure.web.servlet.error.ErrorMvcAutoConfiguration,\\</span></span>
<span class="line"><span style="color:#24292E;">org.springframework.boot.autoconfigure.web.servlet.HttpEncodingAutoConfiguration,\\</span></span>
<span class="line"><span style="color:#24292E;">org.springframework.boot.autoconfigure.web.servlet.MultipartAutoConfiguration,\\</span></span>
<span class="line"><span style="color:#24292E;">org.springframework.boot.autoconfigure.web.servlet.WebMvcAutoConfiguration,\\</span></span>
<span class="line"><span style="color:#24292E;">org.springframework.boot.autoconfigure.websocket.reactive.WebSocketReactiveAutoConfiguration,\\</span></span>
<span class="line"><span style="color:#24292E;">org.springframework.boot.autoconfigure.websocket.servlet.WebSocketServletAutoConfiguration,\\</span></span>
<span class="line"><span style="color:#24292E;">org.springframework.boot.autoconfigure.websocket.servlet.WebSocketMessagingAutoConfiguration,\\</span></span>
<span class="line"><span style="color:#24292E;">org.springframework.boot.autoconfigure.webservices.WebServicesAutoConfiguration,\\</span></span>
<span class="line"><span style="color:#24292E;">org.springframework.boot.autoconfigure.webservices.client.WebServiceTemplateAutoConfiguration</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># Failure analyzers</span></span>
<span class="line"><span style="color:#D73A49;">org.springframework.boot.diagnostics.FailureAnalyzer</span><span style="color:#24292E;">=\\</span></span>
<span class="line"><span style="color:#24292E;">org.springframework.boot.autoconfigure.data.redis.RedisUrlSyntaxFailureAnalyzer,\\</span></span>
<span class="line"><span style="color:#24292E;">org.springframework.boot.autoconfigure.diagnostics.analyzer.NoSuchBeanDefinitionFailureAnalyzer,\\</span></span>
<span class="line"><span style="color:#24292E;">org.springframework.boot.autoconfigure.flyway.FlywayMigrationScriptMissingFailureAnalyzer,\\</span></span>
<span class="line"><span style="color:#24292E;">org.springframework.boot.autoconfigure.jdbc.DataSourceBeanCreationFailureAnalyzer,\\</span></span>
<span class="line"><span style="color:#24292E;">org.springframework.boot.autoconfigure.jdbc.HikariDriverConfigurationFailureAnalyzer,\\</span></span>
<span class="line"><span style="color:#24292E;">org.springframework.boot.autoconfigure.r2dbc.ConnectionFactoryBeanCreationFailureAnalyzer,\\</span></span>
<span class="line"><span style="color:#24292E;">org.springframework.boot.autoconfigure.session.NonUniqueSessionRepositoryFailureAnalyzer</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># Template availability providers</span></span>
<span class="line"><span style="color:#D73A49;">org.springframework.boot.autoconfigure.template.TemplateAvailabilityProvider</span><span style="color:#24292E;">=\\</span></span>
<span class="line"><span style="color:#24292E;">org.springframework.boot.autoconfigure.freemarker.FreeMarkerTemplateAvailabilityProvider,\\</span></span>
<span class="line"><span style="color:#24292E;">org.springframework.boot.autoconfigure.mustache.MustacheTemplateAvailabilityProvider,\\</span></span>
<span class="line"><span style="color:#24292E;">org.springframework.boot.autoconfigure.groovy.template.GroovyTemplateAvailabilityProvider,\\</span></span>
<span class="line"><span style="color:#24292E;">org.springframework.boot.autoconfigure.thymeleaf.ThymeleafTemplateAvailabilityProvider,\\</span></span>
<span class="line"><span style="color:#24292E;">org.springframework.boot.autoconfigure.web.servlet.JspTemplateAvailabilityProvider</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># DataSource initializer detectors</span></span>
<span class="line"><span style="color:#D73A49;">org.springframework.boot.sql.init.dependency.DatabaseInitializerDetector</span><span style="color:#24292E;">=\\</span></span>
<span class="line"><span style="color:#24292E;">org.springframework.boot.autoconfigure.flyway.FlywayMigrationInitializerDatabaseInitializerDetector</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># Depends on database initialization detectors</span></span>
<span class="line"><span style="color:#D73A49;">org.springframework.boot.sql.init.dependency.DependsOnDatabaseInitializationDetector</span><span style="color:#24292E;">=\\</span></span>
<span class="line"><span style="color:#24292E;">org.springframework.boot.autoconfigure.batch.JobRepositoryDependsOnDatabaseInitializationDetector,\\</span></span>
<span class="line"><span style="color:#24292E;">org.springframework.boot.autoconfigure.quartz.SchedulerDependsOnDatabaseInitializationDetector,\\</span></span>
<span class="line"><span style="color:#24292E;">org.springframework.boot.autoconfigure.session.JdbcIndexedSessionRepositoryDependsOnDatabaseInitializationDetector</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br><span class="line-number">49</span><br><span class="line-number">50</span><br><span class="line-number">51</span><br><span class="line-number">52</span><br><span class="line-number">53</span><br><span class="line-number">54</span><br><span class="line-number">55</span><br><span class="line-number">56</span><br><span class="line-number">57</span><br><span class="line-number">58</span><br><span class="line-number">59</span><br><span class="line-number">60</span><br><span class="line-number">61</span><br><span class="line-number">62</span><br><span class="line-number">63</span><br><span class="line-number">64</span><br><span class="line-number">65</span><br><span class="line-number">66</span><br><span class="line-number">67</span><br><span class="line-number">68</span><br><span class="line-number">69</span><br><span class="line-number">70</span><br><span class="line-number">71</span><br><span class="line-number">72</span><br><span class="line-number">73</span><br><span class="line-number">74</span><br><span class="line-number">75</span><br><span class="line-number">76</span><br><span class="line-number">77</span><br><span class="line-number">78</span><br><span class="line-number">79</span><br><span class="line-number">80</span><br><span class="line-number">81</span><br><span class="line-number">82</span><br><span class="line-number">83</span><br><span class="line-number">84</span><br><span class="line-number">85</span><br><span class="line-number">86</span><br><span class="line-number">87</span><br><span class="line-number">88</span><br><span class="line-number">89</span><br><span class="line-number">90</span><br><span class="line-number">91</span><br><span class="line-number">92</span><br><span class="line-number">93</span><br><span class="line-number">94</span><br><span class="line-number">95</span><br><span class="line-number">96</span><br><span class="line-number">97</span><br><span class="line-number">98</span><br><span class="line-number">99</span><br><span class="line-number">100</span><br><span class="line-number">101</span><br><span class="line-number">102</span><br><span class="line-number">103</span><br><span class="line-number">104</span><br><span class="line-number">105</span><br><span class="line-number">106</span><br><span class="line-number">107</span><br><span class="line-number">108</span><br><span class="line-number">109</span><br><span class="line-number">110</span><br><span class="line-number">111</span><br><span class="line-number">112</span><br><span class="line-number">113</span><br><span class="line-number">114</span><br><span class="line-number">115</span><br><span class="line-number">116</span><br><span class="line-number">117</span><br><span class="line-number">118</span><br><span class="line-number">119</span><br><span class="line-number">120</span><br><span class="line-number">121</span><br><span class="line-number">122</span><br><span class="line-number">123</span><br><span class="line-number">124</span><br><span class="line-number">125</span><br><span class="line-number">126</span><br><span class="line-number">127</span><br><span class="line-number">128</span><br><span class="line-number">129</span><br><span class="line-number">130</span><br><span class="line-number">131</span><br><span class="line-number">132</span><br><span class="line-number">133</span><br><span class="line-number">134</span><br><span class="line-number">135</span><br><span class="line-number">136</span><br><span class="line-number">137</span><br><span class="line-number">138</span><br><span class="line-number">139</span><br><span class="line-number">140</span><br><span class="line-number">141</span><br><span class="line-number">142</span><br><span class="line-number">143</span><br><span class="line-number">144</span><br><span class="line-number">145</span><br><span class="line-number">146</span><br><span class="line-number">147</span><br><span class="line-number">148</span><br><span class="line-number">149</span><br><span class="line-number">150</span><br><span class="line-number">151</span><br><span class="line-number">152</span><br><span class="line-number">153</span><br><span class="line-number">154</span><br><span class="line-number">155</span><br><span class="line-number">156</span><br><span class="line-number">157</span><br><span class="line-number">158</span><br><span class="line-number">159</span><br><span class="line-number">160</span><br><span class="line-number">161</span><br><span class="line-number">162</span><br><span class="line-number">163</span><br><span class="line-number">164</span><br><span class="line-number">165</span><br><span class="line-number">166</span><br><span class="line-number">167</span><br><span class="line-number">168</span><br><span class="line-number">169</span><br><span class="line-number">170</span><br><span class="line-number">171</span><br><span class="line-number">172</span><br><span class="line-number">173</span><br><span class="line-number">174</span><br><span class="line-number">175</span><br><span class="line-number">176</span><br><span class="line-number">177</span><br><span class="line-number">178</span><br><span class="line-number">179</span><br><span class="line-number">180</span><br><span class="line-number">181</span><br><span class="line-number">182</span><br><span class="line-number">183</span><br><span class="line-number">184</span><br><span class="line-number">185</span><br></div></div><blockquote><p>以 <strong><code>RedisAutoConfiguration</code></strong> 文件为例:</p></blockquote><div class="language-java vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">java</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;">@</span><span style="color:#F97583;">Configuration</span><span style="color:#E1E4E8;">(</span><span style="color:#79B8FF;">proxyBeanMethods</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">false</span><span style="color:#E1E4E8;">)</span></span>
<span class="line"><span style="color:#E1E4E8;">@</span><span style="color:#F97583;">ConditionalOnClass</span><span style="color:#E1E4E8;">(RedisOperations.class)</span></span>
<span class="line"><span style="color:#E1E4E8;">@</span><span style="color:#F97583;">EnableConfigurationProperties</span><span style="color:#E1E4E8;">(RedisProperties.class)</span></span>
<span class="line"><span style="color:#E1E4E8;">@</span><span style="color:#F97583;">Import</span><span style="color:#E1E4E8;">({ LettuceConnectionConfiguration.class, JedisConnectionConfiguration.class })</span></span>
<span class="line"><span style="color:#F97583;">public</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">class</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">RedisAutoConfiguration</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">	@</span><span style="color:#F97583;">Bean</span></span>
<span class="line"><span style="color:#E1E4E8;">	@</span><span style="color:#F97583;">ConditionalOnMissingBean</span><span style="color:#E1E4E8;">(</span><span style="color:#79B8FF;">name</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&quot;redisTemplate&quot;</span><span style="color:#E1E4E8;">)</span></span>
<span class="line"><span style="color:#E1E4E8;">	@</span><span style="color:#F97583;">ConditionalOnSingleCandidate</span><span style="color:#E1E4E8;">(RedisConnectionFactory.class)</span></span>
<span class="line"><span style="color:#E1E4E8;">	</span><span style="color:#F97583;">public</span><span style="color:#E1E4E8;"> RedisTemplate&lt;</span><span style="color:#F97583;">Object</span><span style="color:#E1E4E8;">, </span><span style="color:#F97583;">Object</span><span style="color:#E1E4E8;">&gt; </span><span style="color:#B392F0;">redisTemplate</span><span style="color:#E1E4E8;">(RedisConnectionFactory </span><span style="color:#FFAB70;">redisConnectionFactory</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#E1E4E8;">		RedisTemplate&lt;</span><span style="color:#F97583;">Object</span><span style="color:#E1E4E8;">, </span><span style="color:#F97583;">Object</span><span style="color:#E1E4E8;">&gt; template </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">new</span><span style="color:#E1E4E8;"> RedisTemplate&lt;&gt;();</span></span>
<span class="line"><span style="color:#E1E4E8;">		template.</span><span style="color:#B392F0;">setConnectionFactory</span><span style="color:#E1E4E8;">(redisConnectionFactory);</span></span>
<span class="line"><span style="color:#E1E4E8;">		</span><span style="color:#F97583;">return</span><span style="color:#E1E4E8;"> template;</span></span>
<span class="line"><span style="color:#E1E4E8;">	}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">	@</span><span style="color:#F97583;">Bean</span></span>
<span class="line"><span style="color:#E1E4E8;">	@</span><span style="color:#F97583;">ConditionalOnMissingBean</span></span>
<span class="line"><span style="color:#E1E4E8;">	@</span><span style="color:#F97583;">ConditionalOnSingleCandidate</span><span style="color:#E1E4E8;">(RedisConnectionFactory.class)</span></span>
<span class="line"><span style="color:#E1E4E8;">	</span><span style="color:#F97583;">public</span><span style="color:#E1E4E8;"> StringRedisTemplate </span><span style="color:#B392F0;">stringRedisTemplate</span><span style="color:#E1E4E8;">(RedisConnectionFactory </span><span style="color:#FFAB70;">redisConnectionFactory</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#E1E4E8;">		StringRedisTemplate template </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">new</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">StringRedisTemplate</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"><span style="color:#E1E4E8;">		template.</span><span style="color:#B392F0;">setConnectionFactory</span><span style="color:#E1E4E8;">(redisConnectionFactory);</span></span>
<span class="line"><span style="color:#E1E4E8;">		</span><span style="color:#F97583;">return</span><span style="color:#E1E4E8;"> template;</span></span>
<span class="line"><span style="color:#E1E4E8;">	}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">@</span><span style="color:#D73A49;">Configuration</span><span style="color:#24292E;">(</span><span style="color:#005CC5;">proxyBeanMethods</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">false</span><span style="color:#24292E;">)</span></span>
<span class="line"><span style="color:#24292E;">@</span><span style="color:#D73A49;">ConditionalOnClass</span><span style="color:#24292E;">(RedisOperations.class)</span></span>
<span class="line"><span style="color:#24292E;">@</span><span style="color:#D73A49;">EnableConfigurationProperties</span><span style="color:#24292E;">(RedisProperties.class)</span></span>
<span class="line"><span style="color:#24292E;">@</span><span style="color:#D73A49;">Import</span><span style="color:#24292E;">({ LettuceConnectionConfiguration.class, JedisConnectionConfiguration.class })</span></span>
<span class="line"><span style="color:#D73A49;">public</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">class</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">RedisAutoConfiguration</span><span style="color:#24292E;"> {</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">	@</span><span style="color:#D73A49;">Bean</span></span>
<span class="line"><span style="color:#24292E;">	@</span><span style="color:#D73A49;">ConditionalOnMissingBean</span><span style="color:#24292E;">(</span><span style="color:#005CC5;">name</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&quot;redisTemplate&quot;</span><span style="color:#24292E;">)</span></span>
<span class="line"><span style="color:#24292E;">	@</span><span style="color:#D73A49;">ConditionalOnSingleCandidate</span><span style="color:#24292E;">(RedisConnectionFactory.class)</span></span>
<span class="line"><span style="color:#24292E;">	</span><span style="color:#D73A49;">public</span><span style="color:#24292E;"> RedisTemplate&lt;</span><span style="color:#D73A49;">Object</span><span style="color:#24292E;">, </span><span style="color:#D73A49;">Object</span><span style="color:#24292E;">&gt; </span><span style="color:#6F42C1;">redisTemplate</span><span style="color:#24292E;">(RedisConnectionFactory </span><span style="color:#E36209;">redisConnectionFactory</span><span style="color:#24292E;">) {</span></span>
<span class="line"><span style="color:#24292E;">		RedisTemplate&lt;</span><span style="color:#D73A49;">Object</span><span style="color:#24292E;">, </span><span style="color:#D73A49;">Object</span><span style="color:#24292E;">&gt; template </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">new</span><span style="color:#24292E;"> RedisTemplate&lt;&gt;();</span></span>
<span class="line"><span style="color:#24292E;">		template.</span><span style="color:#6F42C1;">setConnectionFactory</span><span style="color:#24292E;">(redisConnectionFactory);</span></span>
<span class="line"><span style="color:#24292E;">		</span><span style="color:#D73A49;">return</span><span style="color:#24292E;"> template;</span></span>
<span class="line"><span style="color:#24292E;">	}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">	@</span><span style="color:#D73A49;">Bean</span></span>
<span class="line"><span style="color:#24292E;">	@</span><span style="color:#D73A49;">ConditionalOnMissingBean</span></span>
<span class="line"><span style="color:#24292E;">	@</span><span style="color:#D73A49;">ConditionalOnSingleCandidate</span><span style="color:#24292E;">(RedisConnectionFactory.class)</span></span>
<span class="line"><span style="color:#24292E;">	</span><span style="color:#D73A49;">public</span><span style="color:#24292E;"> StringRedisTemplate </span><span style="color:#6F42C1;">stringRedisTemplate</span><span style="color:#24292E;">(RedisConnectionFactory </span><span style="color:#E36209;">redisConnectionFactory</span><span style="color:#24292E;">) {</span></span>
<span class="line"><span style="color:#24292E;">		StringRedisTemplate template </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">new</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">StringRedisTemplate</span><span style="color:#24292E;">();</span></span>
<span class="line"><span style="color:#24292E;">		template.</span><span style="color:#6F42C1;">setConnectionFactory</span><span style="color:#24292E;">(redisConnectionFactory);</span></span>
<span class="line"><span style="color:#24292E;">		</span><span style="color:#D73A49;">return</span><span style="color:#24292E;"> template;</span></span>
<span class="line"><span style="color:#24292E;">	}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br></div></div><blockquote><p>它引入了 <strong><code>RedisProperties.class</code></strong> ,这个类中就是 <strong><code>SpringBoot</code></strong> 集成 <strong><code>Redis</code></strong> 的配置信息类，其中携带者一些默认值，如 <strong><code>host</code></strong>、<strong><code>localhost</code></strong> 等。同时，这个自动配置类只有在引入了 <strong><code>RedisOperations.class</code></strong> 才会被装载到Ioc容器中。而 <strong><code>RedisOperations.class</code></strong> 是在 <strong><code>Spring-Data-Redis</code></strong> 包中，当引入 <strong><code>spring-boot-starter-data-redis</code></strong> 时会同时依赖这个jar包。 所以， <strong><code>SpringBoot</code></strong> 就是如此实现了自动配置。</p></blockquote>`,29),e=[p];function r(t,c,i,E,y,u){return n(),a("div",null,e)}const f=s(l,[["render",r]]);export{b as __pageData,f as default};
