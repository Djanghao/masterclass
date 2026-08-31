# Simple go O(N) solution

**Author:** ZhenghaoZhao
**Votes:** 0
**Link:** [https://leetcode.com/problems/rotated-digits/solutions/5693828/](https://leetcode.com/problems/rotated-digits/solutions/5693828/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
At first glance this is a standard dp problem where you use previous solutions for current solution

# Approach
<!-- Describe your approach to solving the problem. -->
Use given rotate rules as dp base cases and build off that. When going through some additional examples such as n = 20, 100 etc, I realized the changing factor is the last digit and I could use previous results for other digits

# Complexity
- Time complexity:
- O(N)
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity:
- O(N)
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```golang []
func rotatedDigits(n int) int {
	c := max(n+1, 10)
	dp := make([]int, c)

	dp[0] = 0
	dp[1] = 1
	dp[8] = 8
	dp[2] = 5
	dp[5] = 2
	dp[6] = 9
	dp[9] = 6

	dp[3] = -1
	dp[4] = -1
	dp[7] = -1

	rst := 0

	for i := range n + 1 {
		v := i / 10
		d := i % 10
		if dp[v] == -1 || dp[d] == -1 {
			dp[i] = -1
		} else {
			total := dp[v]*10 + dp[d]
			if total != i {
				rst++
			}
			dp[i] = total
		}
	}

	return rst
}
```