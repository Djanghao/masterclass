# Golang 0ms 100%

**Author:** harshawasthi90
**Votes:** 18
**Link:** [https://leetcode.com/problems/generate-parentheses/solutions/1694091/](https://leetcode.com/problems/generate-parentheses/solutions/1694091/)

---

```
package main

var current = make([]byte, 16)

func generateParenthesis(n int) []string {
	ans := make([]string, 0)
	rec22(&ans, n, 0, 0)
	return ans
}

func rec22(ans *[]string, n int, left int, right int) {
	if left+right == n*2 {
		*ans = append(*ans, string(current[:n*2]))
		return
	}

	if left < n {
		current[left+right] = '('
		rec22(ans, n, left+1, right)
	}

	if right < left {
		current[left+right] = ')'
		rec22(ans, n, left, right+1)
	}
}

```