# 浅谈@SpringBootApplication

## **@SpringBootApplication**

> **`@SpringBootApplication`** 作为SpringBoot的核心注解，他的作用就是扫描特定包下的Bean并注入到Ioc容器中，同时开启自动配置(AutoConfiguration)，它是由**`@SpringBootConfiguration`**、**`@EnableAutoConfiguration`**和** `@ComponentScan`**三大注解组合而成（java元注解除外）。

```java
@SpringBootConfiguration
@EnableAutoConfiguration
@ComponentScan(excludeFilters = { @Filter(type = FilterType.CUSTOM, classes = TypeExcludeFilter.class),
		@Filter(type = FilterType.CUSTOM, classes = AutoConfigurationExcludeFilter.class) })
public @interface SpringBootApplication {

    /**
     * 排除特定的自动配置类，使其永远不会被应用
     */
	@AliasFor(annotation = EnableAutoConfiguration.class)
	Class<?>[] exclude() default {};

    /**
     * 排除特定的自动配置类名称，使其永远不会被应用
     */
	@AliasFor(annotation = EnableAutoConfiguration.class)
	String[] excludeName() default {};

    /**
     * 用于扫描带注释组件的基础包。
     * 使用 scanBasePackageClasses 作为基于字符串的包名称的类型安全替代方案。
     */
	@AliasFor(annotation = ComponentScan.class, attribute = "basePackages")
	String[] scanBasePackages() default {};

    /**
     * scanBasePackages 的类型安全替代方案，用于指定要扫描带注释组件的包。将扫描指定的每个类的包。
     */ 
	@AliasFor(annotation = ComponentScan.class, attribute = "basePackageClasses")
	Class<?>[] scanBasePackageClasses() default {};

    /**
     * 用于命名 Spring 容器中检测到的组件的BeanNameGenerator类
     */
	@AliasFor(annotation = ComponentScan.class, attribute = "nameGenerator")
	Class<? extends BeanNameGenerator> nameGenerator() default BeanNameGenerator.class;

    /**
     * 指定是否应该代理@Bean方法以强制执行 bean 生命周期行为，
     * 例如即使在用户代码中直接调用@Bean方法的情况下也返回共享的单例 bean 实例。 
     * 此功能需要方法拦截，通过运行时生成的 CGLIB 子类实现，该子类具有配置类及其方法不允许声明final等限制。
     * 默认值为true ，允许配置类中的“bean 间引用”以及对此配置的@Bean方法的外部调用，例如从另一个配置类。 
     * 如果不需要这样做，因为每个特定配置的@Bean方法都是自包含的，并且设计为容器使用的普通工厂方法，请将此标志切换为false以避免 CGLIB 子类处理。
     * 关闭 bean 方法拦截有效地单独处理@Bean方法，就像在非@Configuration类上声明时一样，又名@Bean Lite模式（参见@Bean javadoc ）。 
     * 因此，它在行为上等同于删除@Configuration型。
     */
	@AliasFor(annotation = Configuration.class)
	boolean proxyBeanMethods() default true;

}
```

## **@ComponentScan**

```java
/**
 * 组件扫描指令以与`@Configuration`类一起使用。 提供与 Spring XML 并行的支持  元素。
 * 可以`basePackageClasses`或`basePackages` （或其别名value ）来定义要扫描的特定包。 
 * 如果未定义特定的包，则会从声明此注解的类的包中进行扫描。
 */
public @interface ComponentScan {

	/**
     * basePackages 的别名。
     * 如果不需要其他属性，则允许更简洁的注释声明 - 例如，@ComponentScan("org.sp.pkg") 而不是 @ComponentScan(basePackages = "org.my.pkg")。
     */
	@AliasFor("basePackages")
	String[] value() default {};

    /**
     * 用于扫描带注释组件的基础包。
     * value是此属性的别名（并且与此属性互斥）。
     * 使用 basePackageClasses 作为基于字符串的包名称的类型安全替代方案。
     */
	@AliasFor("value")
	String[] basePackages() default {};

    /**
     * basePackages 的类型安全替代方案，用于指定要扫描带注释组件的包。
     * 将扫描指定的每个类的包。考虑在每个包中创建一个特殊的无操作标记类或接口，除了被此属性引用之外没有其他用途。
     */
	Class<?>[] basePackageClasses() default {};

	/**
     * 用于命名 Spring 容器中检测到的组件的 BeanNameGenerator 类。 
     * BeanNameGenerator 接口本身的默认值表示用于处理此 @ComponentScan 注解的扫描器应使用其继承的 bean 名称生成器，例如默认 AnnotationBeanNameGenerator 或在引导时提供给应用程序上下文的任何自定义实例。
     */
	Class<? extends BeanNameGenerator> nameGenerator() default BeanNameGenerator.class;

	/**
     * 用于解析检测到的组件的范围。
     */
	Class<? extends ScopeMetadataResolver> scopeResolver() default AnnotationScopeMetadataResolver.class;

	/**
     * 指示是否应为检测到的组件生成代理，这在以代理样式方式使用范围时可能是必需的。
     * 默认值遵循用于执行实际扫描的组件扫描器的默认行为。
     */
	ScopedProxyMode scopedProxy() default ScopedProxyMode.DEFAULT;

	/**
     * 控制符合组件检测条件的类文件。
     */
	String resourcePattern() default ClassPathScanningCandidateComponentProvider.DEFAULT_RESOURCE_PATTERN;

	/**
     * 指示是否应启用对使用 @Component、@Repository、@Service 或 @Controller 注释的类的自动检测。
     */
	boolean useDefaultFilters() default true;

	/**
     * 指定哪些类型适合组件扫描。
     * 进一步将候选组件集从 `basePackages` 中的所有内容缩小到与给定过滤器或过滤器匹配的基本包中的所有内容。
     */
	Filter[] includeFilters() default {};

	/**
     * 指定哪些类型不进行组件扫描。
     */
	Filter[] excludeFilters() default {};

	/**
     * 指定是否应为延迟初始化注册扫描的 bean。
     */
	boolean lazyInit() default false;
}
```

## **@EnableAutoConfiguration**

```java
/**
 * 启用 Spring Application Context 的自动配置，尝试猜测和配置您可能需要的 bean。
 * 自动配置类通常根据您的类路径和您定义的 bean 应用。
 * 例如，如果您的类路径中有 tomcat-embedded.jar，您可能需要一个 TomcatServletWebServerFactory（除非您已经定义了自己的  ServletWebServerFactory bean）。
 * 使用`@SpringBootApplication` 时，上下文的自动配置会自动启用，因此添加此注解不会产生额外影响。
 * 自动配置尝试尽可能智能，并且会随着您定义更多自己的配置而后退。
 * 您始终可以手动 exclude()。 任何您不想应用的配置（如果您无权访问它们，请使用 excludeName()）。
 * 您还可以通过 spring.autoconfigure.exclude 属性排除它们。
 * 自动配置总是在用户定义的 bean 注册后应用。使用`@EnableAutoConfiguration` 注解的类的包，通常通过`@SpringBootApplication`，具有特定的意义，通常用作'默认'。
 * 例如，它将在扫描`@Entity` 类时使用。一般建议您将`@EnableAutoConfiguration`（如果您不使用`@SpringBootApplication`）放在根包中，以便可以搜索所有子包和类。
 * 自动配置类是常规的 Spring `@Configuration` bean。
 * 它们使用 SpringFactoriesLoader 机制定位（针对此类）。
 * 通常自动配置 bean 是`@Conditional` bean（最常使用 `@ConditionalOnClass` 和 `@ConditionalOnMissingBean`。
 */
@AutoConfigurationPackage
@Import(AutoConfigurationImportSelector.class)
public @interface EnableAutoConfiguration {

	/**
	 * 启用自动配置时可用于重写的环境属性
	 */
	String ENABLED_OVERRIDE_PROPERTY = "spring.boot.enableautoconfiguration";

	/**
	 * 排除特定的自动配置类，使它们永远不会被应用。
	 */
	Class<?>[] exclude() default {};

	/**
	 * 排除特定的自动配置类名称，使它们永远不会被应用。
	 */
	String[] excludeName() default {};

}
```

> 同时，除了元注解之外，它还被**`@AutoConfigurationPackage`** 和 **`@Import`** 注解修饰，其中 **`@Import`** 注解引入了 **`AutoConfigurationImportSelector`**类。

## **@AutoConfigurationPackage**

```java
/**
 * 使用 AutoConfigurationPackages 注册包。当没有指定基包或基包类时，注解类的包被注册。
 */
@Import(AutoConfigurationPackages.Registrar.class)
public @interface AutoConfigurationPackage {

	/**
	 * 注册的基础包名称。
	 */
	String[] basePackages() default {};

	/**
	 * 注册的基础类名称。
	 */
	Class<?>[] basePackageClasses() default {};

}
```

> 引入了**`AutoConfigurationPackages.Registrar.class`**，是** `AutoConfigurationPackages`**的静态内部类，实现了两个接口的方法(**`ImportBeanDefinitionRegistrar`**和** `DeterminableImports`**,其中** `ImportBeanDefinitionRegistrar`**用作存储来自导入配置的基本包)。

```java
/**
 * ImportBeanDefinitionRegistrar 用于存储来自导入配置的基本包。
 */
static class Registrar implements ImportBeanDefinitionRegistrar, DeterminableImports {

	@Override
	public void registerBeanDefinitions(AnnotationMetadata metadata, BeanDefinitionRegistry registry) {
		register(registry, new PackageImports(metadata).getPackageNames().toArray(new String[0]));
	}

	@Override
	public Set<Object> determineImports(AnnotationMetadata metadata) {
		return Collections.singleton(new PackageImports(metadata));
	}

}
```

> 在**`registerBeanDefinitions`**方法中，它在获取到元数据之后，使用** `getPackageNames`**方法获取到包名，并用** `toArray`**方法转化为数组来进行注册，这就是SpringBoot回默认扫描** `main`**方法所在的包以及其子目录的原因。

## **AutoConfigurationImportSelector.class**

> 通过文档可以看到它的注释为: **`DeferredImportSelector`** 处理自动配置。
> 如果需要 **`@EnableAutoConfiguration`** 的自定义变体，也可以对此类进行子类化。

```java
/**
 * 根据导入 `@Configuration` 类的 `AnnotationMetadata` 返回 `AutoConfigurationImportSelector.AutoConfigurationEntry`。
 */
protected AutoConfigurationEntry getAutoConfigurationEntry(AnnotationMetadata annotationMetadata) {
    if (!isEnabled(annotationMetadata)) {
        return EMPTY_ENTRY; // private static final AutoConfigurationEntry EMPTY_ENTRY = new AutoConfigurationEntry();
    }
    AnnotationAttributes attributes = getAttributes(annotationMetadata);
    List<String> configurations = getCandidateConfigurations(annotationMetadata, attributes);
    configurations = removeDuplicates(configurations);
    Set<String> exclusions = getExclusions(annotationMetadata, attributes);
    checkExcludedClasses(configurations, exclusions);
    configurations.removeAll(exclusions);
    configurations = getConfigurationClassFilter().filter(configurations);
    fireAutoConfigurationImportEvents(configurations, exclusions);
    return new AutoConfigurationEntry(configurations, exclusions);
}
```

> 先判断，如果未开启自动配置(EnableAutoConfiguration.ENABLED_OVERRIDE_PROPERTY配置，且默认未true)，则直接返回。
> 首先获得了注解属性，接着获得了一个List型的configurations，紧接着对这个configurations做各种操作：

```java
List<String> configurations = getCandidateConfigurations(annotationMetadata, attributes);
```

> 进入方法内部查看,发现它又调用了另一个方法来获取configurations

```java
/**
 * 获取自动配置类名称。
 * 默认情况下，此方法将使用带有 getSpringFactoriesLoaderFactoryClass() 的 SpringFactoriesLoader 加载候选者
 */
protected List<String> getCandidateConfigurations(AnnotationMetadata metadata, AnnotationAttributes attributes) {
    List<String> configurations = SpringFactoriesLoader.loadFactoryNames(getSpringFactoriesLoaderFactoryClass(),
            getBeanClassLoader());
    Assert.notEmpty(configurations, "No auto configuration classes found in META-INF/spring.factories. If you "
            + "are using a custom packaging, make sure that file is correct.");
    return configurations;
}
```

> 查看**`SpringFactoriesLoader.loadFactoryNames()`**方法:

```java
public static List<String> loadFactoryNames(Class<?> factoryType, @Nullable ClassLoader classLoader) {
    ClassLoader classLoaderToUse = classLoader;
    if (classLoaderToUse == null) {
        classLoaderToUse = SpringFactoriesLoader.class.getClassLoader();
    }
    String factoryTypeName = factoryType.getName();
    return loadSpringFactories(classLoaderToUse).getOrDefault(factoryTypeName, Collections.emptyList());
}
```

> 首先获得类加载器，若为空，则获取**`SpringFactoriesLoader`**的类加载器。
> 最后通过** `loadSpringFactories(classLoaderToUse).getOrDefault(factoryTypeName, Collections.emptyList())`**;获取返回的** `configurations`**。
> 查看** `loadFactoryNames`**方法源码

```java
private static Map<String, List<String>> loadSpringFactories(ClassLoader classLoader) {
    Map<String, List<String>> result = cache.get(classLoader);
    if (result != null) {
        return result;
    }

    result = new HashMap<>();
    try {
        // public static final String FACTORIES_RESOURCE_LOCATION = "META-INF/spring.factories";
        Enumeration<URL> urls = classLoader.getResources(FACTORIES_RESOURCE_LOCATION);
        while (urls.hasMoreElements()) {
            URL url = urls.nextElement();
            UrlResource resource = new UrlResource(url);
            Properties properties = PropertiesLoaderUtils.loadProperties(resource);
            for (Map.Entry<?, ?> entry : properties.entrySet()) {
                String factoryTypeName = ((String) entry.getKey()).trim();
                String[] factoryImplementationNames =
                        StringUtils.commaDelimitedListToStringArray((String) entry.getValue());
                for (String factoryImplementationName : factoryImplementationNames) {
                    result.computeIfAbsent(factoryTypeName, key -> new ArrayList<>())
                            .add(factoryImplementationName.trim());
                }
            }
        }

        // Replace all lists with unmodifiable lists containing unique elements
        result.replaceAll((factoryType, implementations) -> implementations.stream().distinct()
                .collect(Collectors.collectingAndThen(Collectors.toList(), Collections::unmodifiableList)));
        cache.put(classLoader, result);
    }
    catch (IOException ex) {
        throw new IllegalArgumentException("Unable to load factories from location [" +
                FACTORIES_RESOURCE_LOCATION + "]", ex);
    }
    return result;
}
```

```properties
# 此处借用spring-boot-autoconfigure.jar包的spring.factories文件
# Initializers
org.springframework.context.ApplicationContextInitializer=\
org.springframework.boot.autoconfigure.SharedMetadataReaderFactoryContextInitializer,\
org.springframework.boot.autoconfigure.logging.ConditionEvaluationReportLoggingListener

# Application Listeners
org.springframework.context.ApplicationListener=\
org.springframework.boot.autoconfigure.BackgroundPreinitializer

# Environment Post Processors
org.springframework.boot.env.EnvironmentPostProcessor=\
org.springframework.boot.autoconfigure.integration.IntegrationPropertiesEnvironmentPostProcessor

# Auto Configuration Import Listeners
org.springframework.boot.autoconfigure.AutoConfigurationImportListener=\
org.springframework.boot.autoconfigure.condition.ConditionEvaluationReportAutoConfigurationImportListener

# Auto Configuration Import Filters
org.springframework.boot.autoconfigure.AutoConfigurationImportFilter=\
org.springframework.boot.autoconfigure.condition.OnBeanCondition,\
org.springframework.boot.autoconfigure.condition.OnClassCondition,\
org.springframework.boot.autoconfigure.condition.OnWebApplicationCondition

# Auto Configure
org.springframework.boot.autoconfigure.EnableAutoConfiguration=\
org.springframework.boot.autoconfigure.admin.SpringApplicationAdminJmxAutoConfiguration,\
org.springframework.boot.autoconfigure.aop.AopAutoConfiguration,\
org.springframework.boot.autoconfigure.amqp.RabbitAutoConfiguration,\
org.springframework.boot.autoconfigure.batch.BatchAutoConfiguration,\
org.springframework.boot.autoconfigure.cache.CacheAutoConfiguration,\
org.springframework.boot.autoconfigure.cassandra.CassandraAutoConfiguration,\
org.springframework.boot.autoconfigure.context.ConfigurationPropertiesAutoConfiguration,\
org.springframework.boot.autoconfigure.context.LifecycleAutoConfiguration,\
org.springframework.boot.autoconfigure.context.MessageSourceAutoConfiguration,\
org.springframework.boot.autoconfigure.context.PropertyPlaceholderAutoConfiguration,\
org.springframework.boot.autoconfigure.couchbase.CouchbaseAutoConfiguration,\
org.springframework.boot.autoconfigure.dao.PersistenceExceptionTranslationAutoConfiguration,\
org.springframework.boot.autoconfigure.data.cassandra.CassandraDataAutoConfiguration,\
org.springframework.boot.autoconfigure.data.cassandra.CassandraReactiveDataAutoConfiguration,\
org.springframework.boot.autoconfigure.data.cassandra.CassandraReactiveRepositoriesAutoConfiguration,\
org.springframework.boot.autoconfigure.data.cassandra.CassandraRepositoriesAutoConfiguration,\
org.springframework.boot.autoconfigure.data.couchbase.CouchbaseDataAutoConfiguration,\
org.springframework.boot.autoconfigure.data.couchbase.CouchbaseReactiveDataAutoConfiguration,\
org.springframework.boot.autoconfigure.data.couchbase.CouchbaseReactiveRepositoriesAutoConfiguration,\
org.springframework.boot.autoconfigure.data.couchbase.CouchbaseRepositoriesAutoConfiguration,\
org.springframework.boot.autoconfigure.data.elasticsearch.ElasticsearchDataAutoConfiguration,\
org.springframework.boot.autoconfigure.data.elasticsearch.ElasticsearchRepositoriesAutoConfiguration,\
org.springframework.boot.autoconfigure.data.elasticsearch.ReactiveElasticsearchRepositoriesAutoConfiguration,\
org.springframework.boot.autoconfigure.data.elasticsearch.ReactiveElasticsearchRestClientAutoConfiguration,\
org.springframework.boot.autoconfigure.data.jdbc.JdbcRepositoriesAutoConfiguration,\
org.springframework.boot.autoconfigure.data.jpa.JpaRepositoriesAutoConfiguration,\
org.springframework.boot.autoconfigure.data.ldap.LdapRepositoriesAutoConfiguration,\
org.springframework.boot.autoconfigure.data.mongo.MongoDataAutoConfiguration,\
org.springframework.boot.autoconfigure.data.mongo.MongoReactiveDataAutoConfiguration,\
org.springframework.boot.autoconfigure.data.mongo.MongoReactiveRepositoriesAutoConfiguration,\
org.springframework.boot.autoconfigure.data.mongo.MongoRepositoriesAutoConfiguration,\
org.springframework.boot.autoconfigure.data.neo4j.Neo4jDataAutoConfiguration,\
org.springframework.boot.autoconfigure.data.neo4j.Neo4jReactiveDataAutoConfiguration,\
org.springframework.boot.autoconfigure.data.neo4j.Neo4jReactiveRepositoriesAutoConfiguration,\
org.springframework.boot.autoconfigure.data.neo4j.Neo4jRepositoriesAutoConfiguration,\
org.springframework.boot.autoconfigure.data.r2dbc.R2dbcDataAutoConfiguration,\
org.springframework.boot.autoconfigure.data.r2dbc.R2dbcRepositoriesAutoConfiguration,\
org.springframework.boot.autoconfigure.data.redis.RedisAutoConfiguration,\
org.springframework.boot.autoconfigure.data.redis.RedisReactiveAutoConfiguration,\
org.springframework.boot.autoconfigure.data.redis.RedisRepositoriesAutoConfiguration,\
org.springframework.boot.autoconfigure.data.rest.RepositoryRestMvcAutoConfiguration,\
org.springframework.boot.autoconfigure.data.web.SpringDataWebAutoConfiguration,\
org.springframework.boot.autoconfigure.elasticsearch.ElasticsearchRestClientAutoConfiguration,\
org.springframework.boot.autoconfigure.flyway.FlywayAutoConfiguration,\
org.springframework.boot.autoconfigure.freemarker.FreeMarkerAutoConfiguration,\
org.springframework.boot.autoconfigure.groovy.template.GroovyTemplateAutoConfiguration,\
org.springframework.boot.autoconfigure.gson.GsonAutoConfiguration,\
org.springframework.boot.autoconfigure.h2.H2ConsoleAutoConfiguration,\
org.springframework.boot.autoconfigure.hateoas.HypermediaAutoConfiguration,\
org.springframework.boot.autoconfigure.hazelcast.HazelcastAutoConfiguration,\
org.springframework.boot.autoconfigure.hazelcast.HazelcastJpaDependencyAutoConfiguration,\
org.springframework.boot.autoconfigure.http.HttpMessageConvertersAutoConfiguration,\
org.springframework.boot.autoconfigure.http.codec.CodecsAutoConfiguration,\
org.springframework.boot.autoconfigure.influx.InfluxDbAutoConfiguration,\
org.springframework.boot.autoconfigure.info.ProjectInfoAutoConfiguration,\
org.springframework.boot.autoconfigure.integration.IntegrationAutoConfiguration,\
org.springframework.boot.autoconfigure.jackson.JacksonAutoConfiguration,\
org.springframework.boot.autoconfigure.jdbc.DataSourceAutoConfiguration,\
org.springframework.boot.autoconfigure.jdbc.JdbcTemplateAutoConfiguration,\
org.springframework.boot.autoconfigure.jdbc.JndiDataSourceAutoConfiguration,\
org.springframework.boot.autoconfigure.jdbc.XADataSourceAutoConfiguration,\
org.springframework.boot.autoconfigure.jdbc.DataSourceTransactionManagerAutoConfiguration,\
org.springframework.boot.autoconfigure.jms.JmsAutoConfiguration,\
org.springframework.boot.autoconfigure.jmx.JmxAutoConfiguration,\
org.springframework.boot.autoconfigure.jms.JndiConnectionFactoryAutoConfiguration,\
org.springframework.boot.autoconfigure.jms.activemq.ActiveMQAutoConfiguration,\
org.springframework.boot.autoconfigure.jms.artemis.ArtemisAutoConfiguration,\
org.springframework.boot.autoconfigure.jersey.JerseyAutoConfiguration,\
org.springframework.boot.autoconfigure.jooq.JooqAutoConfiguration,\
org.springframework.boot.autoconfigure.jsonb.JsonbAutoConfiguration,\
org.springframework.boot.autoconfigure.kafka.KafkaAutoConfiguration,\
org.springframework.boot.autoconfigure.availability.ApplicationAvailabilityAutoConfiguration,\
org.springframework.boot.autoconfigure.ldap.embedded.EmbeddedLdapAutoConfiguration,\
org.springframework.boot.autoconfigure.ldap.LdapAutoConfiguration,\
org.springframework.boot.autoconfigure.liquibase.LiquibaseAutoConfiguration,\
org.springframework.boot.autoconfigure.mail.MailSenderAutoConfiguration,\
org.springframework.boot.autoconfigure.mail.MailSenderValidatorAutoConfiguration,\
org.springframework.boot.autoconfigure.mongo.embedded.EmbeddedMongoAutoConfiguration,\
org.springframework.boot.autoconfigure.mongo.MongoAutoConfiguration,\
org.springframework.boot.autoconfigure.mongo.MongoReactiveAutoConfiguration,\
org.springframework.boot.autoconfigure.mustache.MustacheAutoConfiguration,\
org.springframework.boot.autoconfigure.neo4j.Neo4jAutoConfiguration,\
org.springframework.boot.autoconfigure.netty.NettyAutoConfiguration,\
org.springframework.boot.autoconfigure.orm.jpa.HibernateJpaAutoConfiguration,\
org.springframework.boot.autoconfigure.quartz.QuartzAutoConfiguration,\
org.springframework.boot.autoconfigure.r2dbc.R2dbcAutoConfiguration,\
org.springframework.boot.autoconfigure.r2dbc.R2dbcTransactionManagerAutoConfiguration,\
org.springframework.boot.autoconfigure.rsocket.RSocketMessagingAutoConfiguration,\
org.springframework.boot.autoconfigure.rsocket.RSocketRequesterAutoConfiguration,\
org.springframework.boot.autoconfigure.rsocket.RSocketServerAutoConfiguration,\
org.springframework.boot.autoconfigure.rsocket.RSocketStrategiesAutoConfiguration,\
org.springframework.boot.autoconfigure.security.servlet.SecurityAutoConfiguration,\
org.springframework.boot.autoconfigure.security.servlet.UserDetailsServiceAutoConfiguration,\
org.springframework.boot.autoconfigure.security.servlet.SecurityFilterAutoConfiguration,\
org.springframework.boot.autoconfigure.security.reactive.ReactiveSecurityAutoConfiguration,\
org.springframework.boot.autoconfigure.security.reactive.ReactiveUserDetailsServiceAutoConfiguration,\
org.springframework.boot.autoconfigure.security.rsocket.RSocketSecurityAutoConfiguration,\
org.springframework.boot.autoconfigure.security.saml2.Saml2RelyingPartyAutoConfiguration,\
org.springframework.boot.autoconfigure.sendgrid.SendGridAutoConfiguration,\
org.springframework.boot.autoconfigure.session.SessionAutoConfiguration,\
org.springframework.boot.autoconfigure.security.oauth2.client.servlet.OAuth2ClientAutoConfiguration,\
org.springframework.boot.autoconfigure.security.oauth2.client.reactive.ReactiveOAuth2ClientAutoConfiguration,\
org.springframework.boot.autoconfigure.security.oauth2.resource.servlet.OAuth2ResourceServerAutoConfiguration,\
org.springframework.boot.autoconfigure.security.oauth2.resource.reactive.ReactiveOAuth2ResourceServerAutoConfiguration,\
org.springframework.boot.autoconfigure.solr.SolrAutoConfiguration,\
org.springframework.boot.autoconfigure.sql.init.SqlInitializationAutoConfiguration,\
org.springframework.boot.autoconfigure.task.TaskExecutionAutoConfiguration,\
org.springframework.boot.autoconfigure.task.TaskSchedulingAutoConfiguration,\
org.springframework.boot.autoconfigure.thymeleaf.ThymeleafAutoConfiguration,\
org.springframework.boot.autoconfigure.transaction.TransactionAutoConfiguration,\
org.springframework.boot.autoconfigure.transaction.jta.JtaAutoConfiguration,\
org.springframework.boot.autoconfigure.validation.ValidationAutoConfiguration,\
org.springframework.boot.autoconfigure.web.client.RestTemplateAutoConfiguration,\
org.springframework.boot.autoconfigure.web.embedded.EmbeddedWebServerFactoryCustomizerAutoConfiguration,\
org.springframework.boot.autoconfigure.web.reactive.HttpHandlerAutoConfiguration,\
org.springframework.boot.autoconfigure.web.reactive.ReactiveWebServerFactoryAutoConfiguration,\
org.springframework.boot.autoconfigure.web.reactive.WebFluxAutoConfiguration,\
org.springframework.boot.autoconfigure.web.reactive.error.ErrorWebFluxAutoConfiguration,\
org.springframework.boot.autoconfigure.web.reactive.function.client.ClientHttpConnectorAutoConfiguration,\
org.springframework.boot.autoconfigure.web.reactive.function.client.WebClientAutoConfiguration,\
org.springframework.boot.autoconfigure.web.servlet.DispatcherServletAutoConfiguration,\
org.springframework.boot.autoconfigure.web.servlet.ServletWebServerFactoryAutoConfiguration,\
org.springframework.boot.autoconfigure.web.servlet.error.ErrorMvcAutoConfiguration,\
org.springframework.boot.autoconfigure.web.servlet.HttpEncodingAutoConfiguration,\
org.springframework.boot.autoconfigure.web.servlet.MultipartAutoConfiguration,\
org.springframework.boot.autoconfigure.web.servlet.WebMvcAutoConfiguration,\
org.springframework.boot.autoconfigure.websocket.reactive.WebSocketReactiveAutoConfiguration,\
org.springframework.boot.autoconfigure.websocket.servlet.WebSocketServletAutoConfiguration,\
org.springframework.boot.autoconfigure.websocket.servlet.WebSocketMessagingAutoConfiguration,\
org.springframework.boot.autoconfigure.webservices.WebServicesAutoConfiguration,\
org.springframework.boot.autoconfigure.webservices.client.WebServiceTemplateAutoConfiguration

# Failure analyzers
org.springframework.boot.diagnostics.FailureAnalyzer=\
org.springframework.boot.autoconfigure.data.redis.RedisUrlSyntaxFailureAnalyzer,\
org.springframework.boot.autoconfigure.diagnostics.analyzer.NoSuchBeanDefinitionFailureAnalyzer,\
org.springframework.boot.autoconfigure.flyway.FlywayMigrationScriptMissingFailureAnalyzer,\
org.springframework.boot.autoconfigure.jdbc.DataSourceBeanCreationFailureAnalyzer,\
org.springframework.boot.autoconfigure.jdbc.HikariDriverConfigurationFailureAnalyzer,\
org.springframework.boot.autoconfigure.r2dbc.ConnectionFactoryBeanCreationFailureAnalyzer,\
org.springframework.boot.autoconfigure.session.NonUniqueSessionRepositoryFailureAnalyzer

# Template availability providers
org.springframework.boot.autoconfigure.template.TemplateAvailabilityProvider=\
org.springframework.boot.autoconfigure.freemarker.FreeMarkerTemplateAvailabilityProvider,\
org.springframework.boot.autoconfigure.mustache.MustacheTemplateAvailabilityProvider,\
org.springframework.boot.autoconfigure.groovy.template.GroovyTemplateAvailabilityProvider,\
org.springframework.boot.autoconfigure.thymeleaf.ThymeleafTemplateAvailabilityProvider,\
org.springframework.boot.autoconfigure.web.servlet.JspTemplateAvailabilityProvider

# DataSource initializer detectors
org.springframework.boot.sql.init.dependency.DatabaseInitializerDetector=\
org.springframework.boot.autoconfigure.flyway.FlywayMigrationInitializerDatabaseInitializerDetector

# Depends on database initialization detectors
org.springframework.boot.sql.init.dependency.DependsOnDatabaseInitializationDetector=\
org.springframework.boot.autoconfigure.batch.JobRepositoryDependsOnDatabaseInitializationDetector,\
org.springframework.boot.autoconfigure.quartz.SchedulerDependsOnDatabaseInitializationDetector,\
org.springframework.boot.autoconfigure.session.JdbcIndexedSessionRepositoryDependsOnDatabaseInitializationDetector

```

> 以**`RedisAutoConfiguration`**文件为例:

```java
@Configuration(proxyBeanMethods = false)
@ConditionalOnClass(RedisOperations.class)
@EnableConfigurationProperties(RedisProperties.class)
@Import({ LettuceConnectionConfiguration.class, JedisConnectionConfiguration.class })
public class RedisAutoConfiguration {

	@Bean
	@ConditionalOnMissingBean(name = "redisTemplate")
	@ConditionalOnSingleCandidate(RedisConnectionFactory.class)
	public RedisTemplate<Object, Object> redisTemplate(RedisConnectionFactory redisConnectionFactory) {
		RedisTemplate<Object, Object> template = new RedisTemplate<>();
		template.setConnectionFactory(redisConnectionFactory);
		return template;
	}

	@Bean
	@ConditionalOnMissingBean
	@ConditionalOnSingleCandidate(RedisConnectionFactory.class)
	public StringRedisTemplate stringRedisTemplate(RedisConnectionFactory redisConnectionFactory) {
		StringRedisTemplate template = new StringRedisTemplate();
		template.setConnectionFactory(redisConnectionFactory);
		return template;
	}

}
```

> 它引入了**`RedisProperties.class`** ,这个类中就是**`SpringBoot`**集成** `Redis`**的配置信息类，其中携带者一些默认值，如** `host`**的默认值是** `localhost`**等。同时，这个自动配置类只有在引入了** `RedisOperations.class`**才会被装载到Ioc容器中。而** `RedisOperations.class`**是在** `Spring-Data-Redis`**包中，当引入** `spring-boot-starter-data-redis`**时会同时依赖这个jar包。
> 所以，**`SpringBoot`**就是如此实现了自动配置。
