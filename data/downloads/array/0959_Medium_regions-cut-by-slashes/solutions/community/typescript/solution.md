# DFS on Matrix

**Author:** hasferrr
**Votes:** 3
**Link:** [https://leetcode.com/problems/regions-cut-by-slashes/solutions/5614775/](https://leetcode.com/problems/regions-cut-by-slashes/solutions/5614775/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
Convert the grid to matrix, then run DFS to find how many regions there are

# Approach
<!-- Describe your approach to solving the problem. -->
- create matrix of size `grid.length * 3`
- fill 1s and 0s to the matrix
- run DFS to find the [number of island](https://leetcode.com/problems/number-of-islands/description/)

# Complexity
- Time complexity: $$O(n^2)$$
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: $$O(n^2)$$
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
function regionsBySlashes(grid: string[]): number {
  const matrix = Array.from({ length: grid.length * 3 }, () => Array(grid[0].length * 3))

  const mapChar = {
    " ": [
      [0, 0, 0],
      [0, 0, 0],
      [0, 0, 0],
    ],
    "/": [
      [0, 0, 1],
      [0, 1, 0],
      [1, 0, 0],
    ],
    "\\\": [
      [1, 0, 0],
      [0, 1, 0],
      [0, 0, 1],
    ],
  }

  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[0].length; j++) {
      const seq = mapChar[grid[i][j]]
      for (let k = 0; k < 3; k++) {
        for (let l = 0; l < 3; l++) {
          matrix[i * 3 + k][j * 3 + l] = seq[k][l]
        }
      }
    }
  }

  let count = 0

  const DIRECTIONS = [
    [0, 1], [1, 0], [0, -1], [-1, 0]
  ]
  const dfs = (i: number, j: number): boolean => {
    if (matrix[i][j] !== 0) return false
    matrix[i][j] = -1
    for (const [dy, dx] of DIRECTIONS) {
      const newRow = i + dy
      const newCol = j + dx
      if (
        newRow < 0
        || newCol < 0
        || newRow === matrix.length
        || newCol === matrix[0].length
        || matrix[newRow][newCol] !== 0) {
        continue
      }
      dfs(newRow, newCol)
    }
    return true
  }

  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[0].length; j++) {
      if (dfs(i, j)) count++
    }
  }
  return count
}

```