# Go实现枚举

## 前言

> 在日常开发中我们经常会遇到要使用枚举值的情况  
> 但是Go语言中没有枚举，那么怎么可以在Go语言中使用上枚举呢？

## 具体实现

```Go
type WeekDay int

const (
    Monday WeekDay = 1
    Tuesday WeekDay = 2
    Wednesday WeekDay = 3
    Thursday WeekDay = 4
    Friday WeekDay = 5
    Saturday WeekDay = 6
    Sunday WeekDay = 7
)
```

但是每个枚举项都要写一次类型声明，这样很麻烦，我们可以使用iota来简化这个过程
```Go   

type WeekDay int

const (
    Monday WeekDay = iota + 1
    Tuesday
    Wednesday
    Thursday
    Friday
    Saturday
    Sunday
)
```

我们还可以为`WeekDay`添加一些自定义的方法

```Go
func (day WeekDay) String() string {
    return []string{"Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"}[day-1]
}
```


这样我们就可以通过`day.String()`来获取枚举项的字符串值了

## 代码示例

```Go
package main

import (
    "fmt"
)

type WeekDay int

const (
    Monday WeekDay = iota + 1
    Tuesday
    Wednesday
    Thursday
    Friday
    Saturday
    Sunday
)

func (day WeekDay) String() string {
    return []string{"Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"}[day-1]
}

func main() {
    fmt.Println(Monday.String())
    fmt.Println(Tuesday.String())
    fmt.Println(Wednesday.String())
    fmt.Println(Thursday.String())
    fmt.Println(Friday.String())
    fmt.Println(Saturday.String())
    fmt.Println(Sunday.String())
}
```