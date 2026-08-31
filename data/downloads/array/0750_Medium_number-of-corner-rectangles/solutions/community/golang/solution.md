# Golang 100%

**Author:** Balloon66688
**Votes:** 0
**Link:** [https://leetcode.com/problems/number-of-corner-rectangles/solutions/3157712/](https://leetcode.com/problems/number-of-corner-rectangles/solutions/3157712/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity: O(m*n^2) (n is length of grid and m is the width of grid)
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: (m*n)
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
func countCornerRectangles(grid [][]int) int {
    dp := [][]map[int]int{}
    for i := 0; i < len(grid); i++ {
        tem := []map[int]int{}
        for j := 0; j < len(grid[0]); j++ {
            tem = append(tem, make(map[int]int))
        }
        dp = append(dp, tem)
    }
    ans := 0
    for i := 0; i < len(grid); i++ {
        cur := make(map[int]int)
        for j := 0; j < len(grid[i]); j++ {
            if grid[i][j] == 1 {
                cur[j] = 1
                dp[i][j] = cur

                for k := i-1; k >= 0; k-- {
                    if grid[k][j] == 1 {
                        ans += Compare(dp[i][j], dp[k][j])
                        // fmt.Println(ans, dp[i][j], dp[k][j])
                    }   
                }
            }
        }
    }
    return ans
}

func Compare(a, b map[int]int) int {
    ans := 0
    for i, v := range a {
        if v == 1 && b[i] == 1 {
            ans += 1
        }
    }
    return ans - 1
}
```