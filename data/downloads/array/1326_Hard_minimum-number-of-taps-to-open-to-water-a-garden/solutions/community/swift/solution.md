# Swift - DP solution

**Author:** ermorder
**Votes:** 0
**Link:** [https://leetcode.com/problems/minimum-number-of-taps-to-open-to-water-a-garden/solutions/3985841/](https://leetcode.com/problems/minimum-number-of-taps-to-open-to-water-a-garden/solutions/3985841/)

---

# Code
```
class Solution {
    func minTaps(_ n: Int, _ ranges: [Int]) -> Int {
        let maxValue = n + 1
        var dp = Array(repeating: maxValue, count: n + 1)
        dp[0] = 0
        for (i, range) in ranges.enumerated() {
            let tapStart = max(0, i - range)
            let tapEnd = min(n, i + range)
            for j in tapStart...tapEnd {
                dp[tapEnd] = min(dp[tapEnd], dp[j] + 1)
            }
        }
        return dp[n] == maxValue ? -1 : dp[n]
    }
}
```