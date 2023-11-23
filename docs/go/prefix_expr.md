# Go实现中缀表达式转前缀表达式并计算

```go

package main

import (
	"fmt"
	"strconv"
	"strings"
)

// 定义运算符的优先级
var precedence = map[string]int{
	"+": 1,
	"-": 1,
	"*": 2,
	"/": 2,
}

// 中缀表达式转前缀表达式
func infixToPrefix(infixExpr string) (string, error) {
	// 将中缀表达式转换为逆序的切片
	reversedTokens := reverseTokens(tokenize(infixExpr))

	// 栈用于保存运算符
	var operatorStack []string
	// 结果字符串
	result := ""

	for _, token := range reversedTokens {
		if isOperand(token) {
			// 如果是操作数，直接添加到结果字符串
			result += token + " "
		} else if token == ")" {
			// 如果是右括号，入栈
			operatorStack = append(operatorStack, token)
		} else if token == "(" {
			// 如果是左括号，弹出栈中的运算符并添加到结果字符串，直到遇到右括号
			for len(operatorStack) > 0 && operatorStack[len(operatorStack)-1] != ")" {
				result += string(operatorStack[len(operatorStack)-1]) + " "
				operatorStack = operatorStack[:len(operatorStack)-1]
			}
			// 弹出右括号
			operatorStack = operatorStack[:len(operatorStack)-1]
		} else {
			// 如果是运算符，比较优先级
			for len(operatorStack) > 0 && precedence[token] < precedence[operatorStack[len(operatorStack)-1]] {
				result += string(operatorStack[len(operatorStack)-1]) + " "
				operatorStack = operatorStack[:len(operatorStack)-1]
			}
			// 当前运算符入栈
			operatorStack = append(operatorStack, token)
		}
	}

	// 将栈中剩余的运算符添加到结果字符串
	for len(operatorStack) > 0 {
		result += string(operatorStack[len(operatorStack)-1]) + " "
		operatorStack = operatorStack[:len(operatorStack)-1]
	}

	// 去掉最后的空格并翻转结果字符串
	result = strings.TrimSpace(result)
	return reverseString(result), nil
}

// 将字符串逆序
func reverseString(s string) string {
	runes := []rune(s)
	for i, j := 0, len(runes)-1; i < j; i, j = i+1, j-1 {
		runes[i], runes[j] = runes[j], runes[i]
	}
	return string(runes)
}

// 将表达式字符串分割成运算符和操作数的切片
func tokenize(expr string) []string {
	var tokens []string
	token := ""

	for _, char := range expr {
		if isOperator(char) || isParenthesis(char) {
			if token != "" {
				tokens = append(tokens, token)
				token = ""
			}
			tokens = append(tokens, string(char))
		} else if char == ' ' {
			if token != "" {
				tokens = append(tokens, token)
				token = ""
			}
		} else {
			token += string(char)
		}
	}

	if token != "" {
		tokens = append(tokens, token)
	}

	return tokens
}

// 判断是否为运算符
func isOperator(char rune) bool {
	return char == '+' || char == '-' || char == '*' || char == '/'
}

// 判断是否为括号
func isParenthesis(char rune) bool {
	return char == '(' || char == ')'
}

// 判断是否为操作数
func isOperand(token string) bool {
	_, err := strconv.Atoi(token)
	return err == nil
}

// 将切片逆序
func reverseTokens(tokens []string) []string {
	for i, j := 0, len(tokens)-1; i < j; i, j = i+1, j-1 {
		tokens[i], tokens[j] = tokens[j], tokens[i]
	}
	return tokens
}

// 计算前缀表达式
func evalPrefix(prefix string) (int, error) {
	tokens := strings.Fields(prefix)
	stack := make([]int, 0)

	for i := len(tokens) - 1; i >= 0; i-- {
		token := tokens[i]

		// 如果是操作数，入栈
		if isOperand(token) {
			num, err := strconv.Atoi(token)
			if err != nil {
				return 0, err
			}
			stack = append(stack, num)
		} else {
			// 如果是运算符，从栈中弹出相应数量的操作数进行计算
			operand1 := stack[len(stack)-1]
			operand2 := stack[len(stack)-2]
			stack = stack[:len(stack)-2]

			switch token {
			case "+":
				stack = append(stack, operand1+operand2)
			case "-":
				stack = append(stack, operand1-operand2)
			case "*":
				stack = append(stack, operand1*operand2)
			case "/":
				stack = append(stack, operand1/operand2)
			}
		}
	}

	// 最终栈中剩余的元素即为计算结果
	if len(stack) != 1 {
		return 0, fmt.Errorf("invalid prefix expression")
	}

	return stack[0], nil
}

func main() {
	infixExpr := "1+2*(3+4)+1"
	prefixExpr, err := infixToPrefix(infixExpr)

	if err != nil {
		fmt.Println("Error:", err)
	} else {
		fmt.Println("Infix Expression:", infixExpr)
		fmt.Println("Prefix Expression:", prefixExpr)
	}

	prefix, _ := evalPrefix(prefixExpr)

	fmt.Println("result", prefix)
}


```