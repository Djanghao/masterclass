# 🔥 Beats 100% Runtime (TypeScript) [EXPLAINED]

**Author:** r9n
**Votes:** 5
**Link:** [https://leetcode.com/problems/dungeon-game/solutions/5683815/](https://leetcode.com/problems/dungeon-game/solutions/5683815/)

---

# Intuition
The goal is to ensure the knight survives through the dungeon and reaches the bottom-right corner with positive health. We will work backward from the goal (bottom-right corner) to determine the minimum health needed at each cell to guarantee survival.


# Approach
This approach ensures that we find the minimum initial health needed for the knight to survive the dungeon.


# Complexity
- Time complexity:
O(m * n), where m is the number of rows and n is the number of columns. Each cell is processed once.


- Space complexity:
O(m * n) for storing the dynamic programming table.


# Code
```typescript []
function calculateMinimumHP(dungeon: number[][]): number {
    const m = dungeon.length;
    const n = dungeon[0].length;

    // DP table to store the minimum health needed at each cell
    const dp: number[][] = Array.from({ length: m }, () => Array(n).fill(0));

    // Initialize the bottom-right cell
    dp[m - 1][n - 1] = Math.max(1, 1 - dungeon[m - 1][n - 1]);

    // Fill the last row (bottom row)
    for (let j = n - 2; j >= 0; j--) {
        dp[m - 1][j] = Math.max(1, dp[m - 1][j + 1] - dungeon[m - 1][j]);
    }

    // Fill the last column (rightmost column)
    for (let i = m - 2; i >= 0; i--) {
        dp[i][n - 1] = Math.max(1, dp[i + 1][n - 1] - dungeon[i][n - 1]);
    }

    // Fill the rest of the DP table
    for (let i = m - 2; i >= 0; i--) {
        for (let j = n - 2; j >= 0; j--) {
            const minHealthNeeded = Math.min(dp[i + 1][j], dp[i][j + 1]);
            dp[i][j] = Math.max(1, minHealthNeeded - dungeon[i][j]);
        }
    }

    // Return the minimum health required at the starting cell
    return dp[0][0];
}

```