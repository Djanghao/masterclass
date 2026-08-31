# Go, Python3 Solutions

**Author:** hjrand1005
**Votes:** 2
**Link:** [https://leetcode.com/problems/maximal-square/solutions/4172975/](https://leetcode.com/problems/maximal-square/solutions/4172975/)

---

#### Go

```go
func maximalSquare(matrix [][]byte) int {
    n := len(matrix)
    m := len(matrix[0])
    dp := make([][]int, n)
    for i := range dp {
        dp[i] = make([]int, m)
    }
    maxDimension := 0
    
    for i := 0; i < n; i++ {
        for j := 0; j < m; j++ {
            if matrix[i][j] == '1' {
                left, up, diag := 0, 0, 0
                if i > 0 {
                    up = dp[i-1][j]
                }
                if j > 0 {
                    left = dp[i][j-1]
                }
                if i > 0 && j > 0 {
                    diag = dp[i-1][j-1]
                }
                dp[i][j] = min(min(left, up), diag) + 1
                maxDimension = max(maxDimension, dp[i][j])
            }
        }
    }
    return maxDimension * maxDimension
}

func min(a, b int) int {
    if a < b {
        return a
    }
    return b
}

func max(a, b int) int {
    if a > b {
        return a
    }
    return b
}
```

#### Python3

```python
class Solution:
    def maximalSquare(self, matrix: List[List[str]]) -> int:
        n = len(matrix)
        m = len(matrix[0])
        max_dim = 0
        dp = [[0] * m for _ in range(n)]
        
        for i in range(n):
            for j in range(m):
                if matrix[i][j] == '1':
                    left = up = diag = 0
                    if i > 0:
                        up = dp[i-1][j]
                    if j > 0:
                        left = dp[i][j-1]
                    if i > 0 and j > 0:
                        diag = dp[i-1][j-1]
                    dp[i][j] = min(left, up, diag) + 1
                    max_dim = max(max_dim, dp[i][j])
                    
        return max_dim * max_dim
```