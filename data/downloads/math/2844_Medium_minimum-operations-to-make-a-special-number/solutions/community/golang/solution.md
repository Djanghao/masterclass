# Golang O(n) solution

**Author:** tjucoder
**Votes:** 1
**Link:** [https://leetcode.com/problems/minimum-operations-to-make-a-special-number/solutions/3997874/](https://leetcode.com/problems/minimum-operations-to-make-a-special-number/solutions/3997874/)

---

# Code
```go
func minimumOperations(num string) int {
	minOp := len(num)
	c0, c5 := 0, 0
	for i := len(num)-1; i >= 0; i-- {
		switch num[i] {
		case '0':
			c0++
			if c0 == 2 {
				// end with 00
				return len(num) - i - 2
			}
		case '5':
			c5++
			if c0 == 1 {
				// end with 50
				return len(num) - i - 2
			}
		case '2', '7':
			if c5 > 0 {
				// end with 25/75
				return len(num) - i - 2
			}
		}
	}
	// end with 0
	return minOp - c0
}
```