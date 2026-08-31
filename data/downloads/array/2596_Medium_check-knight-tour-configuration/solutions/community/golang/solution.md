# BFS | Easy to understand and optimized space

**Author:** nextgen_coder
**Votes:** 0
**Link:** [https://leetcode.com/problems/check-knight-tour-configuration/solutions/5860342/](https://leetcode.com/problems/check-knight-tour-configuration/solutions/5860342/)

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
```golang []
func checkValidGrid(grid [][]int) bool {
	m, n := len(grid), len(grid[0])
	moves := [][2]int{{-2, 1}, {-2, -1}, {-1, 2}, {-1, -2}, {2, 1}, {2, -1}, {1, 2}, {1, -2}}
	nextRow, nextCol := 0, 0
	for i := 0; i < m*n; i++ {
		if grid[nextRow][nextCol] != i {
			return false
		}
		for _, move := range moves {
			r, c := nextRow+move[0], nextCol+move[1]
			if r >= 0 && r < m && c >= 0 && c < n && grid[r][c] == i+1 {
				nextRow, nextCol = r, c
			}
		}

	}
	return true
}
```