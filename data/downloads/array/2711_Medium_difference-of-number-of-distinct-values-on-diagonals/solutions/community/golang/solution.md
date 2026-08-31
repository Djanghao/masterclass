# Golang solution

**Author:** tjucoder
**Votes:** 0
**Link:** [https://leetcode.com/problems/difference-of-number-of-distinct-values-on-diagonals/solutions/3854126/](https://leetcode.com/problems/difference-of-number-of-distinct-values-on-diagonals/solutions/3854126/)

---

# Code
```go
func differenceOfDistinctValues(grid [][]int) [][]int {
	tl, br := make([][]int, len(grid)), make([][]int, len(grid))
	for i := range tl {
		tl[i] =  make([]int, len(grid[0]))
		br[i] =  make([]int, len(grid[0]))
	}
	for baseRow := len(grid)-1; baseRow >= 0; baseRow-- {
		hash := make(map[int]int)
		for col, row := 0, baseRow; col < len(grid[0]) && row < len(grid); col, row = col+1, row+1 {
			tl[row][col] = len(hash)
			hash[grid[row][col]]++
		}
		for col, row := 0, baseRow; col < len(grid[0]) && row < len(grid); col, row = col+1, row+1 {
			hash[grid[row][col]]--
			if hash[grid[row][col]] == 0 {
				delete(hash, grid[row][col])
			}
			br[row][col] = len(hash)
		}
	}
	for baseCol := 1; baseCol < len(grid[0]); baseCol++ {
		hash := make(map[int]int)
		for col, row := baseCol, 0; col < len(grid[0]) && row < len(grid); col, row = col+1, row+1 {
			tl[row][col] = len(hash)
			hash[grid[row][col]]++
		}
		for col, row := baseCol, 0; col < len(grid[0]) && row < len(grid); col, row = col+1, row+1 {
			hash[grid[row][col]]--
			if hash[grid[row][col]] == 0 {
				delete(hash, grid[row][col])
			}
			br[row][col] = len(hash)
		}
	}
	for r := range grid {
		for c := range grid[r] {
			grid[r][c] = abs(tl[r][c] - br[r][c])
		}
	}
	return grid
}

func abs(x int) int {
	if x >= 0 {
		return x
	}
	return -x
}
```