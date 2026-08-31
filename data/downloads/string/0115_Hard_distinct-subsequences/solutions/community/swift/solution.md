# ✔️ 100% Fastest Swift Solution

**Author:** sergeyleschev
**Votes:** 11
**Link:** [https://leetcode.com/problems/distinct-subsequences/solutions/1932086/](https://leetcode.com/problems/distinct-subsequences/solutions/1932086/)

---

```
class Solution {
    func numDistinct(_ s: String, _ t: String) -> Int {
        let s = Array(s), t = Array(t)
        var memo = Array(repeating: Array(repeating: -1, count: t.count), count: s.count)
        
        func numDistinct(_ i: Int, _ j: Int) -> Int {
            if j < 0 { return 1 }
            if i < 0 { return 0 }
            
            if memo[i][j] != -1 { return memo[i][j] }
            
            if s[i] != t[j] {
                memo[i][j] = numDistinct(i - 1, j)
            } else {
                memo[i][j] = numDistinct(i - 1, j) + numDistinct(i - 1, j - 1)
            }
            
            return memo[i][j]
        }
        
        return numDistinct(s.count - 1, t.count - 1)
    }

}
```

Let me know in comments if you have any doubts. I will be happy to answer.

Please upvote if you found the solution useful.