# swift solution

**Author:** aayushkumar20
**Votes:** 0
**Link:** [https://leetcode.com/problems/minimum-moves-to-reach-target-with-rotations/solutions/2469360/](https://leetcode.com/problems/minimum-moves-to-reach-target-with-rotations/solutions/2469360/)

---

```
Class Solution {
    func minimumMoves(_ grid: [[Int]]) -> Int {
        let n = grid.count
        var dp = Array(repeating: Array(repeating: Array(repeating: 0, count: 2), count: n), count: n)
        
        for i in 0..<n {
            for j in 0..<n {
                for k in 0..<2 {
                    if i == 0 && j == 0 && k == 0 {
                        dp[i][j][k] = 0
                    } else if grid[i][j] == 1 {
                        dp[i][j][k] = Int.max
                    } else if k == 0 && (j + 1 >= n || grid[i][j + 1] == 1) {
                        dp[i][j][k] = Int.max
                    } else if k == 1 && (i + 1 >= n || grid[i + 1][j] == 1) {
                        dp[i][j][k] = Int.max
                    } else {
                        let choice1 = i - 1 >= 0 ? dp[i - 1][j][k] : Int.max
                        let choice2 = j - 1 >= 0 ? dp[i][j - 1][k] : Int.max
                        let tempMinChoice = min(choice1, choice2)
                        dp[i][j][k] = tempMinChoice == Int.max ? tempMinChoice : (tempMinChoice + 1)
                    }
                }
                //rotate
                if i + 1 < n && j + 1 < n && grid[i][j + 1] != 1 && grid[i + 1][j + 1] != 1 && dp[i][j][1] != Int.max && dp[i][j][0] > dp[i][j][1] + 1 {
                    dp[i][j][0] = dp[i][j][1] + 1
                }
                if i + 1 < n && j + 1 < n && grid[i + 1][j] != 1 && grid[i + 1][j + 1] != 1 && dp[i][j][0] != Int.max && dp[i][j][1] > dp[i][j][0] + 1 {
                    dp[i][j][1] = dp[i][j][0] + 1
                }
            }
        }
        return dp[n - 1][n - 2][0] == Int.max ? -1 : dp[n - 1][n - 2][0]
    }
}
```