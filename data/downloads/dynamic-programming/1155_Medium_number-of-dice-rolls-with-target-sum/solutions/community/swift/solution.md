# ✅ [Solution][Swift] Dynamic Programming (beats 95%)

**Author:** adanilyak
**Votes:** 4
**Link:** [https://leetcode.com/problems/number-of-dice-rolls-with-target-sum/solutions/2649277/](https://leetcode.com/problems/number-of-dice-rolls-with-target-sum/solutions/2649277/)

---

**TC:** O(n * target * k)
**SC:** O(n * target)

```
class Solution {
    
    func numRollsToTarget(_ n: Int, _ k: Int, _ target: Int) -> Int {
    
        guard k * n >= target else { return 0 }
        
        let modulo = 1_000_000_000 + 7
        
        var dp = Array(repeating: Array(repeating: 0,
                                        // Max target plus one
                                        count: 1001),
                       // Max n plus one
                       count: 31)
        
        dp[0][0] = 1
        
        for i in 1...n {
            for j in 0...target {
                for v in 1...k {
                    guard j - v >= 0 else { break }
                    dp[i][j] = (dp[i][j] + dp[i-1][j-v]) % modulo
                }
            }
        }
        
        return dp[n][target]
    }
    
}
```