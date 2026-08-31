# ✅ [Solution][Swift] Dynamic Programming

**Author:** adanilyak
**Votes:** 0
**Link:** [https://leetcode.com/problems/paint-house-ii/solutions/5982948/](https://leetcode.com/problems/paint-house-ii/solutions/5982948/)

---

**TC:** $O(n * k^2)$
**SC:** $O(n * k)$
```swift []
class Solution {
    func minCostII(_ costs: [[Int]]) -> Int {
        let n = costs.count, k = costs[0].count
        guard n > 1 else { return costs[0].min()! }
        var dp = Array(repeating: Array(repeating: 1_000_000, count: k), count: n)
        for j in 0..<k {
            dp[n - 1][j] = costs[n - 1][j]
        }

        for i in (0..<(n - 1)).reversed() {
            for j in 0..<k {
                for l in 0..<k {
                    guard j != l else { continue }
                    dp[i][j] = min(dp[i][j], costs[i][j] + dp[i + 1][l])
                }
            }
        }

        return dp[0].min()!
    }
}
```