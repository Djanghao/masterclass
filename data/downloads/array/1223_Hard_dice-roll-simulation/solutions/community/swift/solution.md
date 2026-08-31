# [Swift] Bottom up DP

**Author:** sashkin
**Votes:** 0
**Link:** [https://leetcode.com/problems/dice-roll-simulation/solutions/3744016/](https://leetcode.com/problems/dice-roll-simulation/solutions/3744016/)

---

I think the limitation of max value in rollMax <= 15 can lead to Space complexity O(1) as we don't need to keep n-sized subtractingDp. Feel free to add your comment with the improved solution.

# Complexity
- Time complexity:
O(n)

- Space complexity:
O(n), could be improved to O(1)

# Code
```
class Solution {
    func dieSimulator(_ n: Int, _ rollMax: [Int]) -> Int {
        if n == 1 { return 6 }
        var dp: [Int] = Array(repeating: 1, count: 6)
        var subtractingDp: [[Int]] = Array(repeating: Array(repeating: 0, count: 6), count: n)
        for i in 0..<6 {
            subtractingDp[0][i] = 1
        }
        var curSum = dp.reduce(0, +)
        
        for i in 1..<n {
            for j in 0..<6 {
                subtractingDp[i][j] = curSum - dp[j]
                if subtractingDp[i][j] < 0 { subtractingDp[i][j] += 1000000007 }
                let subtractingIndex = i - rollMax[j]
                let subtractValue = subtractingIndex < 0 ? 0 : subtractingDp[subtractingIndex][j]
                dp[j] = curSum - subtractValue
                if dp[j] < 0 { dp[j] += 1000000007 }
            }
            curSum = dp.reduce(0,+) % 1000000007
        }
        
        return curSum
    }
}
```