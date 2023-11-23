# Golang 面试题

## Go基础类

### 1、与其他语言相比，使用 Go 有什么好处?

- 与其他作为学术实验开始的语言不同，Go 代码的设计是`务实`的。每个功能和语法决策都旨在让程序员的生活更轻松。
- Golang 针对`并发`进行了优化，并且在规模上运行良好。
- 由于单一的标准代码格式，Golang 通常被认为比其他语言更具可读性。
- 自动垃圾收集明显比 Java 或 Python 更有效，因为它与程序`同时执行`。

### 2、Golang 使用什么数据类型?

<font color=LightCoral>&emsp;&emsp;Method、Bool、String、Array、Slice、Struct、Pointer、Function、Interface、Map、Channel</font>

### 3、Go 程序中的包是什么?

&emsp;&emsp;包 (pkg) 是 Go 工作区中包含 Go 源文件或其他包的目录。源文件中的每个函数、
变量和类型都存储在链接包中。每个 Go 源文件都属于一个包，该包在文件顶
部使用以下命令声明：
```Go
    package <packagename>
```
&emsp;&emsp;您可以使用以下方法导入和导出包以重用导出的函数或类型：
```Go
import <packagename>
```
&emsp;&emsp;Golang 的标准包是`fmt`，其中包含格式化和打印功能，如 `Println()`

### 4、Go 支持什么形式的类型转换? 将整数转换为浮点数。

&emsp;&emsp;Go 支持显式类型转换以满足其严格的类型要求。

```Go
i := 55 //int
j := =float64(i) //转换为float64

```

### 5、什么是 Goroutine？你如何停止它?

一个 Goroutine 是一个函数或方法执行同时旁边其他任何够程采用了特殊的
Goroutine 线程。Goroutine 线程比标准线程更轻量级，大多数 Golang 程 序 同时使
用数千个 Goroutine。
