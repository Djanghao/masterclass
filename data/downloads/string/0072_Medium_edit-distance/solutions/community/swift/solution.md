# ✔️ 100% Fastest Swift Solution

**Author:** sergeyleschev
**Votes:** 15
**Link:** [https://leetcode.com/problems/edit-distance/solutions/1915729/](https://leetcode.com/problems/edit-distance/solutions/1915729/)

---

```
class Solution {
    func minDistance(_ word1: String, _ word2: String) -> Int {
        let row = word1.count + 1
        let col = word2.count + 1
        let chs1  = Array(word1)
        let chs2  = Array(word2)
        var dp: [[Int]] = Array(repeating: Array(repeating: 0, count: col), count: row)
        
        for i in 0..<row { 
            for j in 0..<col {
                if i == 0 {
                    dp[i][j] = j
                
                } else if j == 0 {
                    dp[i][j] = i
                
                } else if chs1[i - 1] == chs2[j - 1] {
                    dp[i][j] = dp[i - 1][j - 1]
                
                } else {
                    dp[i][j] = 1 + min(dp[i][j - 1], dp[i - 1][j], dp[i - 1][j - 1])
                }
            }
        }
        
        return dp[row - 1][col - 1]
    }

}
```

Let me know in comments if you have any doubts. I will be happy to answer.

Please upvote if you found the solution useful.