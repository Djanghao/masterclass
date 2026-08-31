# [Golang] Topological Sort

**Author:** vasakris
**Votes:** 3
**Link:** [https://leetcode.com/problems/number-of-increasing-paths-in-a-grid/solutions/3652087/](https://leetcode.com/problems/number-of-increasing-paths-in-a-grid/solutions/3652087/)

---

# Complexity
- Time complexity:
O(m*n)

- Space complexity:
O(m*n)

# Code
```
func countPaths(grid [][]int) int {
    m := len(grid)
    n := len(grid[0])
    MOD := 1000000007

    inDegree := make([][]int, m)
    for r := 0; r < m; r++ {
        inDegree[r] = make([]int, n)
    }

    // Find InDegree O(m*n)
    for r := 0; r < m; r++ {
        for c := 0; c < n; c++ {
            for _, dir := range [][]int{{-1, 0}, {0, -1}, {1, 0}, {0, 1}} {
                nr := r + dir[0]
                nc := c + dir[1]

                if nr < 0 || nc < 0 || nr == m || nc == n {
                    continue
                }
                if grid[nr][nc] > grid[r][c] {
                    inDegree[nr][nc]++
                }
            }
        }
    }

    dp := make([][]int, m)
    for r := 0; r < m; r++ {
        dp[r] = make([]int, n)
        for c := 0; c < n; c++ {
            dp[r][c] = 1
        }
    }

    // Find Starting cells O(m*n)
    queue := [][]int{}
    for r := 0; r < m; r++ {
        for c := 0; c < n; c++ {
            if inDegree[r][c] == 0 {
                queue = append(queue, []int{r, c})
            }
        }
    }

    // Find Paths O(m*n)
    for len(queue) > 0 {
        cell := queue[0]
        queue = queue[1:]
        r := cell[0]
        c := cell[1]

        for _, dir := range [][]int{{-1, 0}, {0, -1}, {1, 0}, {0, 1}} {
            nr := r + dir[0]
            nc := c + dir[1]

            if nr < 0 || nc < 0 || nr == m || nc == n {
                continue
            }
                
            if grid[nr][nc] > grid[r][c] {
                inDegree[nr][nc]--
                dp[nr][nc] = (dp[nr][nc] + dp[r][c]) % MOD
                if inDegree[nr][nc] == 0 {
                    queue = append(queue, []int{nr, nc})
                }
            }
        }
    }

    // Sum Up Paths O(m*n)
    res := 0
    for r := 0; r < m; r++ {
        for c := 0; c < n; c++ {
            res =  (res + dp[r][c]) % MOD
        }
    }
    return res   
}
```