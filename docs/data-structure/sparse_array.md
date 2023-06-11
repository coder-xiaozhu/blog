# 稀疏数组实现

## 什么是稀疏数组

稀疏数组是一种压缩存储的数组，当一个数组中大部分元素为0或者为同一个值的数组时，可以使用稀疏数组来保存该数组。

## 稀疏数组的实现

稀疏数组的实现需要两个步骤：
  1. 将二维数组转换为稀疏数组
  2. 将稀疏数组转换为二维数组
  
## 代码实现

```go
package main

import "fmt"

type SparseArray struct {
	Row int
	Col int
	Val int
}

func main() {

	chess := [][]int{
		{0, 0, 0, 0, 0, 0, 0, 0, 0},
		{0, 22, 0, 0, 0, 0, 15, 0, 0},
		{0, 0, -6, 0, 0, 0, 0, 0, 0},
		{0, 0, 0, -15, 0, 0, 0, 0, 0},
	}

	sparseArray := sliceToSparseArray(chess)
	fmt.Printf("%#v\n", sparseArray)

	slice := sparseToSlice(sparseArray)
	//打印slice
	for _, row := range slice {
		for _, col := range row {
			fmt.Printf("%d\t", col)
		}
		fmt.Println()
	}
}

// 二维数组转稀疏数组
func sliceToSparseArray(slice [][]int) []SparseArray {
	sparseArray := make([]SparseArray, 0)
	row := len(slice)
	col := len(slice[0])

	effectiveDataCount := 0

	for rowIndex, row := range slice {
		for colIndex, col := range row {
			if col == 0 {
				continue
			}
			effectiveDataCount++
			sparseArray = append(sparseArray, SparseArray{Row: rowIndex, Col: colIndex, Val: col})
		}
	}

	finalResult := make([]SparseArray, 0)
	finalResult = append(finalResult, SparseArray{Row: row, Col: col, Val: effectiveDataCount})
	finalResult = append(finalResult, sparseArray...)

	return finalResult
}

// 稀疏数组转二维数组
func sparseToSlice(sparse []SparseArray) [][]int {
	// 由于稀疏数组的特性，第一行的数据可以确定二维数组的行列
	var (
		rows  = sparse[0].Row
		col   = sparse[0].Col
		slice [][]int
	)

	// 初始化二维数组
	for i := 0; i < rows; i++ {
		colData := make([]int, col)
		slice = append(slice, colData)
	}

	// 为二维数组的有效数据赋值
	for i, data := range sparse {
		if i == 0 {
			continue
		}
		slice[data.Row][data.Col] = data.Val
	}

	return slice

}
```