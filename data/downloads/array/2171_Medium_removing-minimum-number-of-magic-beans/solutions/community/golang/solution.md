# Golang sort solution

**Author:** tjucoder
**Votes:** 1
**Link:** [https://leetcode.com/problems/removing-minimum-number-of-magic-beans/solutions/1767588/](https://leetcode.com/problems/removing-minimum-number-of-magic-beans/solutions/1767588/)

---

```go
func minimumRemoval(beans []int) int64 {
	summary := 0
	removal := math.MaxInt64
	sort.Ints(beans)
	for _, v := range beans {
		summary += v
	}
	for i, v := range beans {
		if current := summary - (len(beans)-i) * v; current < removal {
			removal = current
		}
	}
	return int64(removal)
}
```