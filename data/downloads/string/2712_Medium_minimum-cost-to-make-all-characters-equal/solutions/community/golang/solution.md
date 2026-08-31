# Golang solution, iterate once, very simple

**Author:** tjucoder
**Votes:** 0
**Link:** [https://leetcode.com/problems/minimum-cost-to-make-all-characters-equal/solutions/3854371/](https://leetcode.com/problems/minimum-cost-to-make-all-characters-equal/solutions/3854371/)

---

# Code
```go
func minimumCost(s string) int64 {
	cost := 0
	for i := 0; i < len(s)-1; i++ {
		if s[i] != s[i+1] {
			cost += min(i+1, len(s)-i-1)
		}
	}
	return int64(cost)
}

func min(values ...int) int {
	minValue := math.MaxInt64
	for _, v := range values {
		if v < minValue {
			minValue = v
		}
	}
	return minValue
}

```