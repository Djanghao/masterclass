# go simple and fast solution

**Author:** Sheelendar
**Votes:** 0
**Link:** [https://leetcode.com/problems/longest-well-performing-interval/solutions/4017992/](https://leetcode.com/problems/longest-well-performing-interval/solutions/4017992/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
func longestWPI(hours []int) int {
	n := len(hours)
	if n == 0 {
		return 0
	}

	dp := make(map[int]int)
	sum := 0
	max := 0
	for i := 0; i < n; i++ {
		if hours[i] > 8 {
			sum = sum + 1
		} else {
			sum = sum - 1
		}
		if sum > 0 {
			max = i + 1
		} else {
			_, ok := dp[sum]
			if !ok {
				dp[sum] = i
			}
			if index, yes := dp[sum-1]; yes {
				max = Max(max, i-index)
			}
		}
	}
	return max
}

func Max(a, b int) int {
	if a > b {
		return a
	}
	return b
}
```