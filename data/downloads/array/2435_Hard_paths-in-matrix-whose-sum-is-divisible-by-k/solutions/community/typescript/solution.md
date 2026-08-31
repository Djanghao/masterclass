# Typescript solution

**Author:** ravi070994
**Votes:** 0
**Link:** [https://leetcode.com/problems/paths-in-matrix-whose-sum-is-divisible-by-k/solutions/5125652/](https://leetcode.com/problems/paths-in-matrix-whose-sum-is-divisible-by-k/solutions/5125652/)

---

# Intuition
Initially solved it by computing all the possible sums along every path through the grid eventually reaching the destination. It exceeds the runtime threshold. Then, thought of just computing the reminder along the path instead of computing the actual sums and use dp along the way to avoid redundant computation.

# Approach
Using DFS to traverse the grid computing the latest reminder from the previous one and eventually checking if the last cell has a zero reminder.

# Complexity
- Time complexity:
O(m * n * k)

- Space complexity:
O(m * n * k)

# Code
```
function numberOfPaths(grid: number[][], k: number): number {
    const rowLen = grid.length, colLen = grid[0].length;
    const MOD = 10 ** 9 + 7;
    const memo = Array(rowLen).fill(0).map(() => Array(colLen).fill(0).map(() => Array(k).fill(-1)));

    const dfs = (row: number, col: number, reminder: number): number => {
      if (row >= rowLen || col >= colLen) return 0;

      const val = grid[row][col];
      const currentReminder = (val % k + reminder) % k;
      let ans = 0;

      if (row === rowLen - 1 && col === colLen -1) return currentReminder === 0 ? 1 : 0;

      if (memo[row][col][reminder] !== -1) return memo[row][col][reminder];

      ans += dfs(row, col + 1, currentReminder);
      ans += dfs(row + 1, col, currentReminder);

      ans %= MOD;

      memo[row][col][reminder] = ans;

      return ans;
    }

    return dfs(0, 0, 0);
};
```