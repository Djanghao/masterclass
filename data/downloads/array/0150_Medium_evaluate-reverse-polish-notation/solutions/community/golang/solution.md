# Go solution using hashmap and lambda

**Author:** andrewliang25
**Votes:** 23
**Link:** [https://leetcode.com/problems/evaluate-reverse-polish-notation/solutions/2844618/](https://leetcode.com/problems/evaluate-reverse-polish-notation/solutions/2844618/)

---

Replacing switch case with hashmap and anonymous functions for more readability:
```go
func evalRPN(tokens []string) int {
	stack := []int{}
	operators := map[string]func(int, int) int{
		"+": func(a, b int) int { return a + b },
		"-": func(a, b int) int { return a - b },
		"*": func(a, b int) int { return a * b },
		"/": func(a, b int) int { return a / b },
	}
	for _, token := range tokens {
		if calculate, exist := operators[token]; exist {
			a, b := stack[len(stack)-2], stack[len(stack)-1]
			stack = append(stack[:len(stack)-2], calculate(a, b))
		} else {
			num, _ := strconv.Atoi(token)
			stack = append(stack, num)
		}
	}
	return stack[0]
}
```
Runtime: 0 ms, faster than 100.00%
Memory Usage: 4.0 MB, less than 91.43%