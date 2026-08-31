# Runtime 216 ms Beats 50.00% of users with Go

**Author:** pvt2024
**Votes:** 0
**Link:** [https://leetcode.com/problems/minimum-path-cost-in-a-grid/solutions/4918283/](https://leetcode.com/problems/minimum-path-cost-in-a-grid/solutions/4918283/)

---

# Code
```
func rec(i, j int, grid, move, dp [][]int) int {
	if i == len(grid)-1 {
		return grid[i][j]
	}
	if dp[i][j] != -1 {
		return dp[i][j]
	}
	max := math.MaxInt32
	for k := 0; k < len(grid[0]); k++ {
		moveCost := grid[i][j] + move[grid[i][j]][k]
		max = int(math.Min(float64(max), float64(moveCost+rec(i+1, k, grid, move, dp))))
	}
	dp[i][j] = max
	return max
}

func minPathCost(grid, moveCost [][]int) int {
	m := len(grid)
	n := len(grid[0])
	ans := math.MaxInt32
	dp := make([][]int, m)
	for i := range dp {
		dp[i] = make([]int, n)
		for j := range dp[i] {
			dp[i][j] = -1
		}
	}
	for i := 0; i < n; i++ {
		ans = int(math.Min(float64(ans), float64(rec(0, i, grid, moveCost, dp))))
	}
	return ans
}

```