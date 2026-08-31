# Go binary search

**Author:** tjucoder
**Votes:** 1
**Link:** [https://leetcode.com/problems/find-the-smallest-divisor-given-a-threshold/solutions/569334/](https://leetcode.com/problems/find-the-smallest-divisor-given-a-threshold/solutions/569334/)

---

```go
func smallestDivisor(nums []int, threshold int) int {
	l, r := 1, max(nums...)
	for l <= r {
		m := (l + r) >> 1
		v := helper(nums, m)
		if v <= threshold {
			r = m-1
		} else {
			l = m+1
		}
	}
	return l
}

func helper(nums []int, d int) int {
	summary := 0
	for _, v := range nums {
		summary += v / d
		if v % d != 0 {
			summary++
		}
	}
	return summary
}

func max(values ...int) int {
	maxValue := math.MinInt32
	for _, v := range values {
		if v > maxValue {
			maxValue = v
		}
	}
	return maxValue
}
```