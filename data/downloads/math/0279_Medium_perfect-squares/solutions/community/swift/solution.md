# ✅ Swift: Easy to Understand and Simple Solution

**Author:** sohagkumarbiswas
**Votes:** 6
**Link:** [https://leetcode.com/problems/perfect-squares/solutions/2837850/](https://leetcode.com/problems/perfect-squares/solutions/2837850/)

---

Solution:
```
class Solution {
    func numSquares(_ n: Int) -> Int {
        var dp = Array(0...n)
        
        for i in 1...n {
            var j = 1
            
            while j * j <= i {
                dp[i] = min(dp[i], dp[i - j * j] + 1)
                j += 1
            }
        }
        
        return dp[n]
    }
}
```