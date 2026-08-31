# Easy Java DP with memoization and comments

**Author:** juliandeluca
**Votes:** 4
**Link:** [https://leetcode.com/problems/check-if-there-is-a-path-with-equal-number-of-0s-and-1s/solutions/4752694/](https://leetcode.com/problems/check-if-there-is-a-path-with-equal-number-of-0s-and-1s/solutions/4752694/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
For 0s and 1s to be balanced, we need their sum to be half of n+m, so we can just do a recursive sum.

We know that if m+n is even, then we'll have an odd number of cells (for example matrix `[[0]]` of just 1 element, has 1 row + 1 column = 2), so we can skip those and return false.

If if get to the last cell (`grid[n-1][m-1]`) and sum is half of n+m (let's call this `k`), we know there's the same amount of 0s and 1s.


# Approach
<!-- Describe your approach to solving the problem. -->
Go from `[0][0]` to `[n-1][m-1]` passing the sum down the recursion. If at any moment `sum > k` just return false.

Another optimization can be for a matrix full of 0s. We know half way through it that if `sum` needs `k-sum` 1s to get to k, but if there's fewer cells ahead of us we just won't get there even if they're all 1s. All paths will have exactly `n+m` cells, and at any moment if we are on row `x` and column `y` we know the remaining cells will be `(n+m)-(x+y)`, which is equivalent to `n+m-x-y` so we can check that with: `n+m-x-y < k-sum` in which case we know we can return false, since we don't have enough cells ahead of us to sum up to k.

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->
$$O(nm)$$

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->
$$O(nmk)$$

# Code
```
class Solution {
    Boolean[][][] memo;
    int n, m, k;
    public boolean isThereAPath(int[][] grid) {
        n = grid.length;
        m = grid[0].length;
        if ((n+m) % 2 == 0) return false;
        k = (n+m) / 2; // Target sum
        // Memo up to k, no need for after k since we know it'll be False
        memo = new Boolean[n][m][k+1];
        return isThereAPath(grid, 0, 0, 0);
    }

    public boolean isThereAPath(int[][] grid, int x, int y, int sum) {
        if (x >= n || y >= m) return false;
        sum += grid[x][y];
        // Sum shouldn't be more than k.
        // Also, n+m is max possible sum and x+y is what we've seen so far. Their difference
        // is the remaining cells, which must be at least k-sum (otherwise we won't get to k == sum)
        if (sum > k || n+m-x-y < k-sum) return false; // Optimization/Optional
        if (x == n-1 && y == m-1) return memo[x][y][sum] = sum == k;
        if (memo[x][y][sum] != null) return memo[x][y][sum];
        return memo[x][y][sum] = isThereAPath(grid, x+1, y, sum) || isThereAPath(grid, x, y+1, sum);
    }
}
```