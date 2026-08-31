# [Go] ♻️ In-place with max on 6 elements (instead of 9)

**Author:** vWAj0nMjOtK33vIH0jpLww
**Votes:** 3
**Link:** [https://leetcode.com/problems/largest-local-values-in-a-matrix/solutions/5146743/](https://leetcode.com/problems/largest-local-values-in-a-matrix/solutions/5146743/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
**Space** reuse and computation **results** reuse \u267B\uFE0F

<!-- # Approach -->
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity: $$O(n^2)$$
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: $$O(1)$$
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
func largestLocal(grid [][]int) [][]int {
	I, J := len(grid)-2, len(grid[0])-2
	for i, row := range grid[:I] {
		row[0] = max(row[0], grid[i+1][0], grid[i+2][0])
		row[1] = max(row[1], grid[i+1][1], grid[i+2][1])
		for j, x := range row[:J] {
			row[j+2] = max(row[j+2], grid[i+1][j+2], grid[i+2][j+2])
			row[j] = max(x, row[j+1], row[j+2])
		}
		grid[i] = row[:J]
	}
	return grid[:I]
}
```