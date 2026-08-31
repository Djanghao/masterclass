# Simple | Minimum top-left | DP

**Author:** lovung
**Votes:** 1
**Link:** [https://leetcode.com/problems/maximum-difference-score-in-a-grid/solutions/5145793/](https://leetcode.com/problems/maximum-difference-score-in-a-grid/solutions/5145793/)

---

# Intuition
Dynamic Programming

# Approach
`dp[i][j]` will help to save value of minimum value of the top-left rectangle.

Max score of jumping to have the destination at a cell (i, j) is the different between `grid[i][j]` and minimum number in the top-left rectangle (except (i, j) because requirement `you have to make at least one move`). That's why I calculated `res = max(res, grid[i][j]-val)` before `dp[i][j] = min(val, grid[i][j])`.

Example:
`grid = [[9,5,7,3],[8,9,6,1],[6,7,14,3],[2,5,3,1]]`
Max Score at (2,2) is `14-5` because 5 is the minimum value in the retangle from (0,0) to (2,2).



# Complexity
- Time complexity: `O(m*n)`
- Space complexity: `O(m*n)`

# Code
```
func maxScore(grid [][]int) int {
	m, n := len(grid), len(grid[0])
	dp := make([][]int, m)
	res := math.MinInt
	for i := range m {
		dp[i] = make([]int, n)
	}
	for i := 0; i < m; i++ {
		for j := 0; j < n; j++ {
			val := math.MaxInt
			if In(grid, i-1, j) {
				val = min(val, dp[i-1][j])
			}
			if In(grid, i, j-1) {
				val = min(val, dp[i][j-1])
			}
			res = max(res, grid[i][j]-val)
			dp[i][j] = min(val, grid[i][j])
		}
	}
	return res
}

func In[T any](mat [][]T, i, j int) bool {
	return i >= 0 && i < len(mat) &&
		j >= 0 && (len(mat) == 0 || j < len(mat[0]))
}
```