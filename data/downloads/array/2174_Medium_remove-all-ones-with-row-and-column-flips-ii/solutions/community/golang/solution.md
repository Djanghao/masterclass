# [Go] Clean, dumb DFS with bitmasks

**Author:** sebnyberg
**Votes:** 3
**Link:** [https://leetcode.com/problems/remove-all-ones-with-row-and-column-flips-ii/solutions/1782577/](https://leetcode.com/problems/remove-all-ones-with-row-and-column-flips-ii/solutions/1782577/)

---

The center-point of a cross must be a 1.

So the optimal solution can be found by trying all possible crosses.

To check whether a row/col has been set to zero, use one bitmask for rows, one for columns.

Being clever doesn't matter for this problem.. the constraints are too loose.

# Clean, dumb

```go
func removeOnes(grid [][]int) int {
	var findMin func(rows, cols int, moves int) int
	findMin = func(rows, cols int, moves int) int {
		min := math.MaxInt32
		for i := range grid {
			for j := range grid[i] {
				if grid[i][j] == 0 || rows&(1<<i) > 0 || cols&(1<<j) > 0 {
					continue
				}
				res := findMin(rows|(1<<i), cols|(1<<j), moves+1)
				if res < min {
					min = res
				}
			}
		}
		if min == math.MaxInt32 {
			return moves
		}
		return min
	}

	return findMin(0, 0, 0)
}
```
