# SpringBoot打包后不能读取classpath下文件

## 前言

&emsp;&emsp;在做读取 SpringBoot 项目读取文件的时候(文件在 `resource/`目录下)，在本地IDEA无论使用 `Resource`类还是使用 `Classpathresource`类获取文件均无问题,但是在打成jar发布后 使用 `Resource` 类无法获取到文件,而使用 `Classpathresource`则无问题。
下面是报错信息

```text
java.io.FileNotFoundException: G:\Coding\Java\demo\target\file:\G:\Coding\Java\demo\target\demo-0.0.1-SNAPSHOT.jar!\BOOT-INF\classes!\text.json (文件名、目录名或卷标语法不正确。)
```

## 问题分析

- 通常来说, 我们在写SpringBoot程序的时候，程序运行所必须的资源文件我们会一起打包到jar包中, 那么我们如果要去读取这个资源文件就要去jar包的 `classes` (也就是 `classpath`) 中去读取。
- 当我们使用 `new DefaultResourceLoader().getResource("classpath:text.json")` 在本地读取的时候，资源文件是存在于真实文件系统里的一个文件
  (`G:\Coding\Java\demo\src\main\resources\text.json`)。
- 而在jar包中, 它不是一个真实文件系统的文件.为了能用统一的文件系统路径去表示jar内的文件, Java开创了 `!`这个符号.`!`表示这个文件是一个压缩包(zip)(jar 本身就是一个 zip), 之后的路径则为压缩包内的路径(压缩包内的路径不分运行平台, 统一为 Unix 路径)。
  正常情况下的 `new DefaultResourceLoader().getResource("classpath:text.json")`操作, 会得到一个 jar包路径后面加上一个 `!`号然后再拼接上包内路径的一个路径。
- Spring Boot 为了避免资源文件冲突(Java的打包规范忽略了资源文件的问题, 两个库的代码文件是可以合并的, 因为包名不同；但是资源文件都从jar的根目录开始编排, 如果重名将互相覆盖而导致打包后资源文件的丢失)而采用 fat-jar 的方式来打包程序。fat-jar 就是一种 nested jar, 所有的依赖库不会合并到用户代码上, 而是以jar包的形式存放在jar包内。一个典型的 Spring Boot 打完包的结构大概是这样的：

![图示](/1189227572.png)

- `classes` 下面是开发者写的代码和资源文件
- `org/springframework/boot/loader` 是 Spring Boot 相关的 `Loader` 类和 `Launcher` 等类

1. jar的入口类其实是 Spring Boot Launcher,他会为每一个依赖创建一个 `ClassLoader`, 这样就可以让每个依赖自己读取自己的资源文件而互不冲突
2. 而用户自己的类是从 `/BOOT-INF/classes`开始的, 用户自己的资源文件的根目录也在这里, 所以为了让用户能够正确读到自己的资源文件，加载用户代码的那个 `ClassLoader` 的 `classpath` 从这里开始。
3. fat-jar并不是 Java官方标准, 所以 Java 认为所有 classpath 都是从 jar 的根目录开始的.于是我们得到的文件路径, 将是 {用户代码根目录}!/{资源文件路径}而用户代码根目录本身就是在jar内的, 最终我们会得到这么一个路径 `jar:G:\Coding\Java\demo\target\file:\G:\Coding\Java\demo\target\demo-0.0.1-SNAPSHOT.jar!\BOOT-INF\classes!\text.json`(注意,有两个 `!`号)没错, `classes`文件夹被认为是一个压缩包了.所以我们将找不到这个文件。
4. 如果读取资源文件的操作只在自己的代码发生, 那么只要不使用 `new DefaultResourceLoader().getResource("classpath:text.json")`而直接获取流就可以避免这个问题。

## 解决办法

**使用 `ClassPathResource`读取资源文件即可** ，下面是示例代码：

```Java
package com.codezf.util;

import org.springframework.core.io.ClassPathResource;
import org.springframework.stereotype.Component;

import javax.annotation.PostConstruct;
import java.io.InputStream;

/**
 * @author Coder
 */
@Component
public class Test {

    private static final String file_path = "text.json";

    @PostConstruct
    public void init() throws Exception {
        InputStream inputStream = new ClassPathResource(file_path).getInputStream();
        byte[] bytes = new byte[inputStream.available()];
        int read = inputStream.read(bytes);
        System.out.println(new String(bytes));
    }
}

```

**`@PostConstruct`注解标注的方法会在 Spring 为 Bean 初始化完成之后被调用，详情可见[`@PostConstruct`](https://docs.spring.io/spring-framework/docs/5.3.26/reference/html/core.html#beans-postconstruct-and-predestroy-annotations)**
