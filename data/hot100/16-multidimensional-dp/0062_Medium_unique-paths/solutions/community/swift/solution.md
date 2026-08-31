# ✔️ 100% Fastest Swift Solution, time: O(n * m), space: O(min(n, m)).

**Author:** sergeyleschev
**Votes:** 17
**Link:** [https://leetcode.com/problems/unique-paths/solutions/1912575/](https://leetcode.com/problems/unique-paths/solutions/1912575/)

---

```
class Solution {
    // - Complexity:
    //   - time: O(n * m), where n is the number of rows, and m is the number of columns.
    //   - space: O(min(n, m)), where n is the number of rows, and m is the number of columns.
    
    func uniquePaths(_ m: Int, _ n: Int) -> Int {
        var matrix: [[Int]] = Array(repeating: Array(repeating: 0, count: m), count: n)
        
        for i in 0..<n {
            for j in 0..<m {
                if i == 0 || j == 0 {
                    matrix[i][j] = 1
                } else {
                    matrix[i][j] = matrix[i - 1][j] + matrix[i][j - 1]
                }
            }
        }
        
        return matrix[n - 1][m - 1]
    }

}
```

Let me know in comments if you have any doubts. I will be happy to answer.

Please upvote if you found the solution useful.