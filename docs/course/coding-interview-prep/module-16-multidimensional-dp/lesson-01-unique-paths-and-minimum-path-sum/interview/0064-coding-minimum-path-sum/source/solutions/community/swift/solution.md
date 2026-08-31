# ✔️ 100% Fastest Swift Solution, time: O(n * m), space: O(m).

**Author:** sergeyleschev
**Votes:** 10
**Link:** [https://leetcode.com/problems/minimum-path-sum/solutions/1915672/](https://leetcode.com/problems/minimum-path-sum/solutions/1915672/)

---

```
class Solution {
    // - Complexity:
    //   - time: O(n * m), where n is the number of rows in the grid, and m is the number of columns in the grid.
    //   - space: O(m), where m is the number of columns in the grid.

    func minPathSum(_ grid: [[Int]]) -> Int {
        var matrix: [[Int]] = grid
        let n = grid.count - 1
        let m = grid[0].count - 1
        
        for i in 0...n {
            for j in 0...m {
                var step = matrix[i][j]
        
                if i > 0 && j > 0 {
                    step += min(matrix[i - 1][j], matrix[i][j - 1])
                } else if i > 0 && j == 0 {
                    step += matrix[i - 1][j]
                } else if j > 0 && i == 0 {
                    step += matrix[i][j - 1]
                }
                
                matrix[i][j] = step
            }
        }
        
        return matrix[n][m]
    }

}
```

Let me know in comments if you have any doubts. I will be happy to answer.

Please upvote if you found the solution useful.