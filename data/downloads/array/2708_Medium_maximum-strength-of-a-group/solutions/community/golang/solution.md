# Golang solution with comment

**Author:** tjucoder
**Votes:** 1
**Link:** [https://leetcode.com/problems/maximum-strength-of-a-group/solutions/3936966/](https://leetcode.com/problems/maximum-strength-of-a-group/solutions/3936966/)

---

# Code
```go
func maxStrength(nums []int) int64 {
	strength, nonZero, maxNegative := 1, 0, math.MinInt64
	for _, v := range nums {
		if v == 0 {
			continue
		}
		strength *= v
		nonZero++
		if v < 0 && v > maxNegative {
			maxNegative = v
		}
	}
	if nonZero == 0 {
		// all 0
		return 0
	}
	if strength > 0 {
		// positive
		return int64(strength)
	}
	if nonZero == 1 {
		if len(nums) == 1 {
			// only one negative student
			return int64(strength)
		}
		// has 0 student
		return 0
	}
	// remove max negative student
	return int64(strength/maxNegative)
}
```