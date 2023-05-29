
# Feign 相关内容

## 为Feign添加全局配置和接口调用失败的后处理

#### 编写配置类
```javascript
@Configuration
public class GlobalFeignConfiguration {

    private static final String AUTHORIZATION = "Authorization";
    private static fianl String TOKEN_PREFIX = "Bearer "

    @Bean
    public RequestInterceptor headerInterceptor() {
        return template -> {
            
            Map<String, Collection<String>> headers = ImmutableMap.of(AUTHORIZATION, Lists.newArrayList(String.valueOf(TOKEN_PREFIX + "123553453dasdad")));
            template.headers(headers);
        };
    }
}
```
#### 接口调用失败的后处理
```javascript
// 实现TestFeignFeign接口的方法并编写对应处理即可
@Slf4j
@Component
public class TestFeignFallBack implements TestFeign {
  

}
```
#### 为Feign接口添加全局配置和失败后处理
```javascript
@FeignClient(name = "test-demo",
        configuration = GlobalFeignConfiguration.class, fallback = TestFeign.class)
public interface TestFeign {

}
```