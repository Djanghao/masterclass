# Clean Golang solution beats 100% speed and memory performance

**Author:** weii666
**Votes:** 0
**Link:** [https://leetcode.com/problems/check-if-there-is-a-path-with-equal-number-of-0s-and-1s/solutions/3536748/](https://leetcode.com/problems/check-if-there-is-a-path-with-equal-number-of-0s-and-1s/solutions/3536748/)

---

# Approach
Dynamic programming is adopted instead of backtracking, or we will get TLE. This solution is just like "unique paths". In each DP cell, we keep the minimum and maximum number of 1 along the paths, so that the result can be deduced by `dp[m-1][n-1]`.
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity: O(mn)
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: O(mn)
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
type Cell struct {
    Min1 int
    Max1 int
}

func max(a, b int) int {
    if a > b {
        return a
    }
    return b
}

func min(a, b int) int {
    if a < b {
        return a
    }
    return b
}

func isThereAPath(grid [][]int) bool {
    m := len(grid)
    n := len(grid[0])

    if (m + n) & 0x1 == 0 {
        return false
    }

    dp := make([][]Cell, m)
    for r:=0; r<m; r++ {
        dp[r] = make([]Cell, n)
    }

    if grid[0][0] == 1 {
        dp[0][0].Min1 = 1
        dp[0][0].Max1 = 1
    }

    for r:=1; r<m; r++ {
        dp[r][0].Min1 = dp[r-1][0].Min1
        dp[r][0].Max1 = dp[r-1][0].Max1
        
        if grid[r][0] == 1 {
            dp[r][0].Min1++
            dp[r][0].Max1++
        }
    }

    for c:=1; c<n; c++ {
        dp[0][c].Min1 = dp[0][c-1].Min1
        dp[0][c].Max1 = dp[0][c-1].Max1

        if grid[0][c] == 1 {
            dp[0][c].Min1++
            dp[0][c].Max1++
        }
    }

    for r:=1; r<m; r++ {
        for c:=1; c<n; c++ {
            dp[r][c].Min1 = min(dp[r-1][c].Min1, dp[r][c-1].Min1)
            dp[r][c].Max1 = max(dp[r-1][c].Max1, dp[r][c-1].Max1)

            if grid[r][c] == 1 {
                dp[r][c].Min1++
                dp[r][c].Max1++
            }
        }
    }

    return dp[m-1][n-1].Min1 <= (m+n)/2 && (m+n)/2 <= dp[m-1][n-1].Max1
}
```