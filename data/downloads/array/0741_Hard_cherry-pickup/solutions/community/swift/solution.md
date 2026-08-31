# [SWIFT] Bottom up approach, beats 100%

**Author:** sashkin
**Votes:** 0
**Link:** [https://leetcode.com/problems/cherry-pickup/solutions/3807607/](https://leetcode.com/problems/cherry-pickup/solutions/3807607/)

---

# Complexity
- Time complexity:
O(n^3)

- Space complexity:
O(n^2)

# Code
```
class Solution {
    func cherryPickup(_ grid: [[Int]]) -> Int {
        let size = grid.count
        var dp = Array(repeating: Array(repeating: Int.min, count: size), count: size)
        dp[0][0] = 0
        var prevDp = dp
        for i in 0..<size {
            for j in 0..<size {
                for k in 0..<size {
                    if i+j < k || i+j >= size + k { continue }
                    if grid[i][j] == -1 || grid[i+j-k][k] == -1 { continue }
                    var maxValue = dp[j][k]
                    if j > 0 && k > 0 {
                        maxValue = max(maxValue, dp[j-1][k-1])
                    }
                    if i > 0 {
                        maxValue = max(maxValue, prevDp[j][k])
                    }
                    if i > 0 && k > 0 {
                        maxValue = max(maxValue, prevDp[j][k-1])
                    }
                    if j > 0 {
                        maxValue = max(maxValue, dp[j-1][k])
                    }
                    if j == k {
                        dp[j][k] = maxValue + grid[i][j]
                    } else {
                        dp[j][k] = maxValue + grid[i][j] + grid[i+j-k][k]
                    }
                }
            }
            prevDp = dp
            dp = Array(repeating: Array(repeating: Int.min, count: size), count: size)
        }
        return max(0, prevDp[size-1][size-1])
    }
}
```