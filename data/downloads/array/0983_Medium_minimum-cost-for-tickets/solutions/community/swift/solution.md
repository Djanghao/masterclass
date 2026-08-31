# ✅ [Solution][Swift] Dynamic Programming (beats 90%)

**Author:** adanilyak
**Votes:** 2
**Link:** [https://leetcode.com/problems/minimum-cost-for-tickets/solutions/3351619/](https://leetcode.com/problems/minimum-cost-for-tickets/solutions/3351619/)

---

**TC:** O(n)
**SC:** O(n)
```
class Solution {
    func mincostTickets(_ days: [Int], _ costs: [Int]) -> Int {
        let days = Set(days)
        var dp = Array(repeating: 0, count: 366)
        
        for i in 1...365 {
            if days.contains(i) {
                dp[i] = min(
                    dp[i - 1] + costs[0],
                    dp[max(0, i - 7)] + costs[1],
                    dp[max(0, i - 30)] + costs[2]
                )
            } else {
                dp[i] = dp[i - 1]
            }
        }

        return dp[365]
    }
}
```