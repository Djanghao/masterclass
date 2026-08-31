# Go DP/Memorization || Beat 100% 🔥

**Author:** ConstantineJin
**Votes:** 0
**Link:** [https://leetcode.com/problems/minimum-number-of-days-to-eat-n-oranges/solutions/5145159/](https://leetcode.com/problems/minimum-number-of-days-to-eat-n-oranges/solutions/5145159/)

---

# Intuition
To make $n$ smaller as quickly as possible, using division is far more efficient than subtraction.

# Complexity
- Time complexity: $$O(\	ext{log}^2n)$$

- Space complexity: $$O(\	ext{log}^2n)$$

# Code
```
func minDays(n int) int {
	mem := make(map[int]int)
	var dfs func(i int) int
	dfs = func(i int) int {
		if i <= 1 {
			return i
		}
		if v, ok := mem[i]; ok {
			return v
		}
		mem[i] = min(dfs(i/2)+i%2, dfs(i/3)+i%3) + 1
		return mem[i]
	}
	return dfs(n)
}
```