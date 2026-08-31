# ✅ 🔥 (Beats 100% run time) TypeScript || JavaScript || Top-Down DP w. memoization 🔥 ✅

**Author:** glasseyes
**Votes:** 1
**Link:** [https://leetcode.com/problems/minimum-path-sum/solutions/3850380/](https://leetcode.com/problems/minimum-path-sum/solutions/3850380/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
At any given position, we must frin the cheaper option: right or down. Therefore, each position in the grid has the cost of it's current value, plus the cheapest of the two options. We can start at the origin, keep track of visited values and work our way down the grid.

# Approach
<!-- Describe your approach to solving the problem. -->
1. Declare a 2D array of M x N `memo` to keep track of each cell cost;
2. Declare a recursive `dp` function which takes the current X and Y coordinates as parameters;
    1. If we are in the end of the grid, store the value of the cell `grid[x][y]` in the memory `memo` and return it;
    2. Otherwise, if our memory already has a value for this coordinate, we can simply return it;
    3. Otherwise, if we are on either border, store the value of the cell plus the online option (either right or down) in the memory `memo` and return it;
    4. Otherwise, store the value of the cell `grid[x][y]` plus the smaller value of the recursion to the right or down `Math.min(dp(x + 1, y), dp(x, y + 1))` in the memory `memo` and return it;
3. Return  value of the recursion with the origin point [0, 0].

# Complexity
- Time complexity:
$$O(m * n)$$: we traverse the whole grid only once.

- Space complexity:
$$O(m * n)$$: for the auxiliary memory, in order to guarantee we will only visit each cell once

# Code
```
function minPathSum(grid: number[][]): number {
    const M = grid.length;
    const N = grid[0].length;
    const memo = new Array(M).fill(0).map(() => new Array(N));

    const dp = (x: number, y: number): number => {
        if (x === M - 1 && y === N - 1) {
            memo[x][y] = grid[x][y];
            return grid[x][y];
        } 

        if (memo[x][y] !== undefined) return memo[x][y];

        if (x === M - 1) {
            memo[x][y] = grid[x][y] + dp(x, y + 1);
            return memo[x][y];
        }

        if (y === N - 1) {
            memo[x][y] = grid[x][y] + dp(x + 1, y);
            return memo[x][y];
        }

        memo[x][y] = grid[x][y] + Math.min(dp(x + 1, y), dp(x, y + 1));
        return memo[x][y];
    }

    return dp(0,0);
};
```