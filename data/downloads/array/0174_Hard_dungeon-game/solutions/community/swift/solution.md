# [SWIFT] Space-efficient solution

**Author:** sashkin
**Votes:** 0
**Link:** [https://leetcode.com/problems/dungeon-game/solutions/3770890/](https://leetcode.com/problems/dungeon-game/solutions/3770890/)

---

# Complexity
- Time complexity:
O(mn)

- Space complexity:
O(n). Can be improved by deciding which side is less, but in the end 1 <= m, n <= 200, so when m and n are at their max, the size of the additional dp array will be 200 instead of 40 000 in other posted solutions in swift

# Code
```
class Solution {
    func calculateMinimumHP(_ dungeon: [[Int]]) -> Int {
        let rows = dungeon.count
        let columns = dungeon[0].count
        var dp = Array(repeating: 0, count: columns)
        dp[columns-1] = min(0, dungeon[rows-1][columns-1])
        for i in (0..<columns-1).reversed() {
            dp[i] = min(0, dp[i+1] + dungeon[rows-1][i])
        }
        
        for i in (0..<rows-1).reversed() {
            dp[columns-1] = min(0, dp[columns-1] + dungeon[i][columns-1])
            for j in (0..<columns-1).reversed() {
                dp[j] = min(0, max(dp[j], dp[j+1]) + dungeon[i][j])
            }
        }
        return -dp[0] + 1
    }
}
```