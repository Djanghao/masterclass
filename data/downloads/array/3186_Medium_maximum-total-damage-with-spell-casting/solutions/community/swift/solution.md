# Swift | DP

**Author:** pagafan7as
**Votes:** 0
**Link:** [https://leetcode.com/problems/maximum-total-damage-with-spell-casting/solutions/5329954/](https://leetcode.com/problems/maximum-total-damage-with-spell-casting/solutions/5329954/)

---

This problem is pretty standard DP. At each step, we compute the maximumTotalDamage casting a given spell vs the maximumTotalDamage not casting that spell.


```
class Solution {
    func maximumTotalDamage(_ power: [Int]) -> Int {
        let n = power.count
        let power = power.sorted()

        var dp = Array(repeating: 0, count: n + 1)

        func helper(_ start: Int = 0) -> Int {
            if start >= n { return 0 }
            if dp[start] > 0 { return dp[start]}

            // Values from "start" to "end" are equal and all of them can be cast
            // together.
            var end = start
            while end + 1 < n && power[end + 1] == power[start] {
                end += 1
            }

            // If spell of index "start" is used, we need to compute the next spell
            // that can be cast.
            var next = end + 1
            while next < n && power[next] <= power[start] + 2 {
                next += 1
            }

            // Either cast the spell at "start" or not.
            dp[start] = max((end - start + 1) * power[start] + helper(next),  helper(end + 1))
            return dp[start]
        }

        return helper()
    }
}
```