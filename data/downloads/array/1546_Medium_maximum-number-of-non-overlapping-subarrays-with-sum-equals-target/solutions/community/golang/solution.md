# 👍Runtime 94 ms  Beats 62.50% of users with Go

**Author:** pvt2024
**Votes:** 0
**Link:** [https://leetcode.com/problems/maximum-number-of-non-overlapping-subarrays-with-sum-equals-target/solutions/5208613/](https://leetcode.com/problems/maximum-number-of-non-overlapping-subarrays-with-sum-equals-target/solutions/5208613/)

---

# Code
```
func maxNonOverlapping(nums []int, target int) int {
	h := map[int]struct{}{0: {}}
	c, s := 0, 0

	for _, num := range nums {
		s += num
		if _, exists := h[s-target]; exists {
			c++
			s = 0
			h = map[int]struct{}{0: {}}
		} else {
			h[s] = struct{}{}
		}
	}

	return c
}
```