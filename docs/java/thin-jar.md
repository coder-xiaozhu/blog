# SpringBoot-Jar包瘦身

## 前言
><font color=LightCoral>&emsp;&emsp;众所周知,SpringBoot打Jar包的时候会把所有依赖的Jar包都打包在BOOT-INF/lib目录下,随着业务越来越复杂,引用的Jar包也就越来越多,导致每次更新版本的时候上传的Jar包越来越大,耗费的时间越来越久,所以本文找了一种解决办法 </font>


## 解决思路如下
>&emsp;&emsp;在考虑有没有办法把不会修改的jar包(非公司内部jar包)当作外部依赖,每次只打包公司内部开发的jar包,找到以下解决办法


1. **在SpringBoot项目中找到pom.xml文件,修改文件**
```xml
<build>
        <plugins>
            <plugin>
                <groupId>org.springframework.boot</groupId>
                <artifactId>spring-boot-maven-plugin</artifactId>
                <configuration>
                    <!-- 指定布局 -->
                    <layout>ZIP</layout>
                    <!-- 指定项目启动类 -->
                    <mainClass>com.example.demo.DemoApplication</mainClass>
                    <!-- 指定需要和jar包打包在一起的依赖,这里没写的都不会打包进Jar包里。-->
                  <includes>
                        <include>
                            <groupId>com.example.demo</groupId>
                            <artifactId>part1</artifactId>
                        </include>
                       <include>
                            <groupId>com.example.demo</groupId>
                            <artifactId>part2</artifactId>
                        </include>
                       <include>
                            <groupId>com.example.demo</groupId>
                            <artifactId>part3</artifactId>
                        </include>
                    </includes>
                </configuration>
            </plugin>
        </plugins>
    </build>
```  

2. **在classpath下(例如(src/main/resource))添加loader.properties文件,内容如下：**  
 如果不想添加此文件，可以在启动命令中添加参数，即添加 `-Dloader.path=lib/,BOOT-INF/lib/`

```properties
# 表示外部依赖的目录
loader.path=lib/,BOOT-INF/lib/
```  

3. **提取外部依赖,(即项目中要使用，但未打包进Jar包中的依赖)**  
 `outputDirectory`：表示拷贝的依赖放在当前目录的export-lib文件夹中
 `includeScope`：需要拷贝的依赖的范围是runtime
 `excludeGroupIds`：需要排除的依(其实就上面引入的那些项目内部依赖)
```bash
mvn dependency:copy-dependencies -DoutputDirectory=export-lib -DincludeScope=runtime -DexcludeGroupIds=com.example.demo
```  

4. **打包项目( `-Dmaven.test.skip=true` 表示跳过单元测试,不执行测试用例)**
```bash
mvn clean package -Dmaven.test.skip=true
```  

5. **启动项目**
```bash
java -jar demo-0.0.1-SNAPSHOT.jar
```  

## LAYOUT 的可选值如下
>1. **`JAR`: 可执行jar**
>2. **`WAR`: 可执行war， provided依赖放在`WEB-INF/lib-provided`目录中，以防止war部署在servlet容器会崩溃**
>3. **`ZIP(alias to DIR)`: 和JAR布局相似，不同的是可以使用外部配置，而不是JAR布局中的默认配置。**
>4. **`NONE`: 打包所有依赖和项目资源，不打包启动加载器（指spring boot loader代码）**
