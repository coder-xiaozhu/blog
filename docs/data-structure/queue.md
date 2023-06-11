# 队列

## 什么是队列

队列是一种特殊的线性表，是一种先进先出（First In First Out）的线性表，简称FIFO。它只允许在表的前端（front）进行删除操作，而在表的后端（rear）进行插入操作。

## 队列的特点

- 队列是一种先进先出的线性表
- 队列的操作受限，只允许在一端插入数据，在另一端删除数据
- 队列的插入操作叫做入队，删除操作叫做出队


## 队列的实现

```Go
package main

import "fmt"

type QueueInterface[T any] interface {
	Push(ele T) bool
	Poll() (T, bool)
	Clear()
	IsEmpty() bool
	Size() int
}

// Queue 队列
type Queue[T any] struct {
	data    []T // 存放数据的切片
	rear    int // 队尾指针
	front   int // 队首指针
}

// Push 入队
func (q *Queue[T]) Push(ele T) bool {
	q.data = append(q.data, ele)
	q.rear++
	return true
}

// Poll 出队
func (q *Queue[T]) Poll() (T, bool) {
	// 如果队首和队尾相等，说明队列为空
	if q.rear == q.front {
		var zero T
		return zero, false
	}
	ele := q.data[q.front]
	q.front++
	return ele, true
}

// Clear 清空队列
func (q *Queue[T]) Clear() {
	q.data = make([]T, 0)
	q.front = 0
	q.rear = 0
}

// IsEmpty 判断队列是否为空
func (q *Queue[T]) IsEmpty() bool {
	return q.rear == q.front
}

// Size 队列长度
func (q *Queue[T]) Size() int {
	return q.rear - q.front
}

func main() {
	var queue QueueInterface[int]

	queue = new(Queue[int])

	queue.Push(111)
	queue.Push(222)
	queue.Push(333)
	queue.Push(444)

	poll, ok := queue.Poll()
	fmt.Printf("%#v,%#v\n", poll, ok)
	poll, ok = queue.Poll()
	fmt.Printf("%#v,%#v\n", poll, ok)
	poll, ok = queue.Poll()
	fmt.Printf("%#v,%#v\n", poll, ok)

	fmt.Printf("%#v\n", queue.Size())
	//fmt.Printf("%#v\n", q.Poll())

	//fmt.Printf("%#v\n", q.IsEmpty())
}

```
&emsp;&emsp;上面这种实现方式，已经出队的元素，还是会占用内存，如果队列长度很长，会造成内存浪费，我们可以使用切片的方式，来优化队列


## 另一种实现

```Go
package main

import "fmt"

type QueueInterface[T any] interface {
	Push(ele T) bool
	Poll() (T, bool)
	Clear()
	IsEmpty() bool
	Size() int
}

// Queue 队列
type Queue[T any] struct {
	data []T // 存放数据的切片
	size int // 队列长度
}

// Push 入队
func (q *Queue[T]) Push(ele T) bool {
	q.data = append(q.data, ele)
	q.size++
	return true
}

// Poll 出队
func (q *Queue[T]) Poll() (T, bool) {
	if q.size == 0 {
		var zero T
		return zero, false
	}
	ele := q.data[0]
    q.data = q.data[1:] // 释放已经出队的元素的内存
	q.size--
	return ele, true
}

// Clear 清空队列
func (q *Queue[T]) Clear() {
	q.data = make([]T, 0)
	q.size = 0
}

// IsEmpty 判断队列是否为空
func (q *Queue[T]) IsEmpty() bool {
	return q.size == 0
}

// Size 队列长度
func (q *Queue[T]) Size() int {
	return q.size
}

func main() {
	var queue QueueInterface[int]

	queue = new(Queue[int])

	queue.Push(111)
	queue.Push(222)
	queue.Push(333)
	queue.Push(444)

	poll, ok := queue.Poll()
	fmt.Printf("%#v,%#v\n", poll, ok)
	poll, ok = queue.Poll()
	fmt.Printf("%#v,%#v\n", poll, ok)
	poll, ok = queue.Poll()
	fmt.Printf("%#v,%#v\n", poll, ok)

	fmt.Printf("%#v\n", queue.Size())
	//fmt.Printf("%#v\n", q.Poll())

	//fmt.Printf("%#v\n", q.IsEmpty())
}
```