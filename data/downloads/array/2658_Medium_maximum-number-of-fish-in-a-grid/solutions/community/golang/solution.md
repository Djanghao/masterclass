# Golang DFS solution

**Author:** tjucoder
**Votes:** 0
**Link:** [https://leetcode.com/problems/maximum-number-of-fish-in-a-grid/solutions/3963099/](https://leetcode.com/problems/maximum-number-of-fish-in-a-grid/solutions/3963099/)

---

# Code
```go
func findMaxFish(grid [][]int) int {
	mf := 0
	for i := range grid {
		for j := range grid[i] {
			fish := dfs(grid, i, j)
			if fish > mf {
				mf = fish
			}
		}
	}
	return mf
}

func dfs(grid [][]int, i, j int) int {
	if i < 0 || i >= len(grid) || j < 0 || j >= len(grid[0]) {
		return 0
	}
	if grid[i][j] == 0 {
		return 0
	}
	fish := grid[i][j]
	grid[i][j] = 0
	fish += dfs(grid, i-1, j)
	fish += dfs(grid, i+1, j)
	fish += dfs(grid, i, j-1)
	fish += dfs(grid, i, j+1)
	return fish
}

```