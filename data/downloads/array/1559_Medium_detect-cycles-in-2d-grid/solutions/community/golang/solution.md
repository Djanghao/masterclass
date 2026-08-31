# Runtime 54 ms  Beats 55.00% of users with Go

**Author:** pvt2024
**Votes:** 0
**Link:** [https://leetcode.com/problems/detect-cycles-in-2d-grid/solutions/4925779/](https://leetcode.com/problems/detect-cycles-in-2d-grid/solutions/4925779/)

---

# Code
```
var n, m int
var arr [][]byte

func dfs(r, c, parI, parJ int, visited [][]int) bool {
	dir := [][]int{{0, 1}, {0, -1}, {-1, 0}, {1, 0}}
	visited[r][c] = 1
	var ans bool

	for i := 0; i < 4; i++ {
		nr := r + dir[i][0]
		nc := c + dir[i][1]
		if nr >= 0 && nc >= 0 && nr < n && nc < m && arr[nr][nc] == arr[r][c] {
			if visited[nr][nc] == 1 && nr != parI && nc != parJ {
				return true
			}
			if visited[nr][nc] != 1 {
				ans = ans || dfs(nr, nc, r, c, visited)
			}
		}
	}
	return ans
}

func containsCycle(grid [][]byte) bool {
	n = len(grid)
	m = len(grid[0])
	arr = grid

	visited := make([][]int, n)
	for i := range visited {
		visited[i] = make([]int, m)
		for j := range visited[i] {
			visited[i][j] = -1
		}
	}

	for i := 0; i < n; i++ {
		for j := 0; j < m; j++ {
			if visited[i][j] != 1 {
				ans := dfs(i, j, -1, -1, visited)
				if ans == true {
					return true
				}
			}
		}
	}
	return false
}

```