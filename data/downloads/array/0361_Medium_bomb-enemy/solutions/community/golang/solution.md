# Golang DP with detail explaination

**Author:** zf6cag5dpe71czpk
**Votes:** 0
**Link:** [https://leetcode.com/problems/bomb-enemy/solutions/5364491/](https://leetcode.com/problems/bomb-enemy/solutions/5364491/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
This code uses dynamic programming for four 2D arrays (up, down, left, right) are created to store cumulative enemy counts in each direction to efficiently calculate the maximum number of enemies that can be killed by placing a bomb in the optimal empty cell of the grid.

# Approach
<!-- Describe your approach to solving the problem. -->
### Dynamic Programming Approach

1. **Initialize Accumulation Arrays**:
   - Four 2D arrays (`up`, `down`, `left`, `right`) are created to store cumulative enemy counts in each direction.
   - `up[i][j]` counts enemies from top to bottom up to position `(i, j)`.
   - `down[i][j]` counts enemies from bottom to top up to position `(i, j)`.
   - `left[i][j]` counts enemies from left to right up to position `(i, j)`.
   - `right[i][j]` counts enemies from right to left up to position `(i, j)`.

2. **Initialize the First Rows and Columns**:
   - The first row of `up` and the last row of `down` are initialized based on the presence of enemies.
   - The first column of `left` and the last column of `right` are initialized similarly.

3. **Fill Accumulation Arrays**:
   - For each subsequent cell in the same row, we check the contents of the cell:
     - If the cell contains an enemy ('E'), we add 1 to the count from the previous cell (left[i][j-1]) for kill one more enemy.
     - If the cell contains a wall ('W'), we reset the count to 0 because the wall blocks the line of sight.
     - If the cell is empty ('0'), we carry forward the count from the previous cell (left[i][j-1]) since the kill count does not change.
   - Similarly, update `right`, `up`, and `down` arrays in their respective directions, skipping walls and accumulating counts.

4. **Calculate Maximum Kills**:
   - Iterate over all cells in the grid. For each empty cell ('0'), calculate the total number of enemies that can be killed by summing values from the four accumulation arrays.
   - Track the maximum value of these sums to determine the optimal bomb placement.

The function will calculate the maximum enemies killed by placing a bomb in an optimal empty cell.

# Complexity
- Time complexity:  $$O(m*n)$$
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: $$O(m*n)$$
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
func maxKilledEnemies(grid [][]byte) int {
	var m = len(grid)
	var n = len(grid[0])

	if m < 1 || n < 1 {
		return 0
	}

	var up = make([][]int, m)
	for i := range up {
		up[i] = make([]int, n)
	}
	var down = make([][]int, m)
	for i := range down {
		down[i] = make([]int, n)
	}
	var left = make([][]int, m)
	for i := range left {
		left[i] = make([]int, n)
	}
	var right = make([][]int, m)
	for i := range right {
		right[i] = make([]int, n)
	}

	for i := range up[0] {
		if grid[0][i] == 'E' {
			up[0][i] = 1
		} else {
			up[0][i] = 0
		}
	}
	for i := range down[m-1] {
		if grid[m-1][i] == 'E' {
			down[m-1][i] = 1
		} else {
			down[m-1][i] = 0
		}
	}
	for i := range left {
		if grid[i][0] == 'E' {
			left[i][0] = 1
		} else {
			left[i][0] = 0
		}
	}
	for i := range right {
		if grid[i][n-1] == 'E' {
			right[i][n-1] = 1
		} else {
			right[i][n-1] = 0
		}
	}

	for i := 0; i < m; i++ {
		for j := 1; j < n; j++ {
			if grid[i][j] == 'E' {
				left[i][j] = left[i][j-1] + 1
			} else if grid[i][j] == 'W' {
				left[i][j] = 0
			} else {
				left[i][j] = left[i][j-1]
			}
		}
	}

	for i := 0; i < m; i++ {
		for j := n - 2; j >= 0; j-- {
			if grid[i][j] == 'E' {
				right[i][j] = right[i][j+1] + 1
			} else if grid[i][j] == 'W' {
				right[i][j] = 0
			} else {
				right[i][j] = right[i][j+1]
			}
		}
	}

	for i := 1; i < m; i++ {
		for j := 0; j < n; j++ {
			if grid[i][j] == 'E' {
				up[i][j] = up[i-1][j] + 1
			} else if grid[i][j] == 'W' {
				up[i][j] = 0
			} else {
				up[i][j] = up[i-1][j]
			}
		}
	}

	for i := m - 2; i >= 0; i-- {
		for j := 0; j < n; j++ {
			if grid[i][j] == 'E' {
				down[i][j] = down[i+1][j] + 1
			} else if grid[i][j] == 'W' {
				down[i][j] = 0
			} else {
				down[i][j] = down[i+1][j]
			}
		}
	}

	var maxVal = 0
	for i := 0; i < m; i++ {
		for j := 0; j < n; j++ {
			if grid[i][j] != '0' {
				continue
			}

			var sum = up[i][j] + down[i][j] + left[i][j] + right[i][j]
			if sum <= maxVal {
				continue
			}
			maxVal = sum
		}
	}
	return maxVal
}

```