# 💡Swift - Optimal Solution - Dynamic Programming

**Author:** bernikovich
**Votes:** 2
**Link:** [https://leetcode.com/problems/painting-the-walls/solutions/4166176/](https://leetcode.com/problems/painting-the-walls/solutions/4166176/)

---

# Solution
```
class Solution {
    func paintWalls(_ cost: [Int], _ time: [Int]) -> Int {
        let n = cost.count
        // The initial state of DP represents that
        // it costs nothing to paint no walls.
        var dp: [Int] = Array(repeating: Int.max, count: n + 1)
        dp[n] = 0
        // Wall by wall, decide the lowest cost at which remaining
        // walls can be painted.
        for i in 0..<n {
            for remaining in 1...n where dp[remaining] != Int.max {
                // Try both cases where we either pay or don't for the wall at i.
                let remainingAfter = max(0, remaining - 1 - time[i])
                dp[remainingAfter] = min(dp[remainingAfter], dp[remaining] + cost[i])
            }
        }
        // Return the value for the state when no walls to paint remain.
        return dp[0]
    }
}
```

# Complexity
- Time: $$O(n^2)$$
- Space: $$O(n)$$