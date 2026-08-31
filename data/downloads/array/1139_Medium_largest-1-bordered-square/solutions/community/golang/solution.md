# [Go] Compare halves of squares

**Author:** ivan-2727
**Votes:** 0
**Link:** [https://leetcode.com/problems/largest-1-bordered-square/solutions/5154364/](https://leetcode.com/problems/largest-1-bordered-square/solutions/5154364/)

---

```
func min(x, y int) int {
    if x < y {
        return x
    }
    return y
}

func max(x, y int) int {
    if x > y {
        return x
    }
    return y
}

func largest1BorderedSquare(grid [][]int) int {
    ans := 0
    m := len(grid)
    n := len(grid[0])
    side := make([][]int, m)
    for i := 0; i < m; i++ {
        side[i] = make([]int, n)
        for j := 0; j < n; j++ {
            if grid[i][j] != 1 {
                continue
            }
            down := 0
            for k := i; k < m; k++ {
                if grid[k][j] == 1 {
                    down += 1
                } else {
                    break
                }
            }
            right := 0
            for k := j; k < n; k++ {
                if grid[i][k] == 1 {
                    right += 1
                } else {
                    break
                }
            }
            side[i][j] = min(down, right)
            for k := 0; k <= min(i, j); k++ {
                if grid[i-k][j] == 1 && grid[i][j-k] == 1 {
                    if side[i-k][j-k] >= k {
                        ans = max(ans, (k+1)*(k+1))
                    }
                } else {
                    break
                }
            }
        }
    }
    return ans
}
```