# ✨[TYPESCRIPT]✨ 140 ms Beats 79.37% ✅

**Author:** rain84
**Votes:** 1
**Link:** [https://leetcode.com/problems/minimum-number-of-days-to-disconnect-island/solutions/5622912/](https://leetcode.com/problems/minimum-number-of-days-to-disconnect-island/solutions/5622912/)

---

# Intuition

There is a lot of LOC's, but it is not a most complicated solution.
Realy. 

# Approach

1. Use dfs and use it to count the number of "islands"
2. If there are 0 islands or more than the 1st, it means that nothing in the matrix needs to be changed and we return a zero
3. Go through the "island" cells of the matrix and see how many islands there will be if the cell becomes "water"

# Code
```
function minDays(grid: number[][]): number {
  const [m, n] = [grid.length, grid[0].length]

  const dfs = (i: number, j: number) => {
    if (i < 0 || m <= i || j < 0 || n <= j || [0, 2].includes(grid[i][j])) return

    grid[i][j] = 2
    const dir = [-1, 0, 1, 0, -1]
    for (let k = 0; k < 4; k++) {
      const [y, x] = [i + dir[k], j + dir[k + 1]]
      dfs(y, x)
    }
  }

  const count = () => {
    let c = 0

    for (let i = 0; i < m; i++) {
      for (let j = 0; j < n; j++) {
        if (grid[i][j] === 1) {
          dfs(i, j)
          c++
        }
      }
    }

    for (let i = 0; i < m; i++) {
      for (let j = 0; j < n; j++) {
        if (grid[i][j] === 2) {
          grid[i][j] = 1
        }
      }
    }

    return c
  }

  if (count() !== 1) return 0

  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (grid[i][j] === 1) {
        grid[i][j] = 0

        if (count() !== 1) return 1

        grid[i][j] = 1
      }
    }
  }

  return 2
}
```

## **Please upvote \uD83D\uDC4D if you like \u2764\uFE0F my solution**