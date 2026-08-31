# Runtime 171 ms  Beats 100.00% of users with Go

**Author:** pvt2024
**Votes:** 0
**Link:** [https://leetcode.com/problems/bricks-falling-when-hit/solutions/4921061/](https://leetcode.com/problems/bricks-falling-when-hit/solutions/4921061/)

---

# Code
```
func hitBricks(grid [][]int, hits [][]int) []int {
	n := len(grid)
	m := len(grid[0])
	ans := make([]int, len(hits))

	for _, hit := range hits {
		grid[hit[0]][hit[1]] *= -1
	}
	for i := 0; i < m; i++ {
		dfs(grid, 0, i)
	}
	for i := len(hits) - 1; i >= 0; i-- {
		x := hits[i][0]
		y := hits[i][1]
		if grid[x][y] == 0 {
			continue
		}
		grid[x][y] = 1
		if connected(grid, x, y, n, m) {
			ans[i] = dfs(grid, x, y) - 1
		}
	}
	return ans
}

func dfs(grid [][]int, x, y int) int {
	if x < 0 || y < 0 || x >= len(grid) || y >= len(grid[0]) || grid[x][y] != 1 {
		return 0
	}
	grid[x][y] = 2
	return 1 + dfs(grid, x+1, y) + dfs(grid, x, y+1) + dfs(grid, x-1, y) + dfs(grid, x, y-1)
}

func connected(grid [][]int, x, y, n, m int) bool {
	if x == 0 {
		return true
	}
	if x+1 < n && grid[x+1][y] == 2 {
		return true
	}
	if x-1 >= 0 && grid[x-1][y] == 2 {
		return true
	}
	if y+1 < m && grid[x][y+1] == 2 {
		return true
	}
	if y-1 >= 0 && grid[x][y-1] == 2 {
		return true
	}
	return false
}
```