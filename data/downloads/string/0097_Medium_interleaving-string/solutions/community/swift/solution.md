# ✅ Swift: Easy to Understand and Simple Solution

**Author:** sohagkumarbiswas
**Votes:** 1
**Link:** [https://leetcode.com/problems/interleaving-string/solutions/3957400/](https://leetcode.com/problems/interleaving-string/solutions/3957400/)

---



# Code
```
class Solution {
    func isInterleave(_ s1: String, _ s2: String, _ s3: String) -> Bool {
        let (m, n) = (s1.count, s2.count)
        guard s3.count == m + n else { return false }
        
        let (a1, a2, a3) = (Array(s1), Array(s2), Array(s3))
        var dp: [[Bool]] = Array(
            repeating: Array(repeating: false, count: n+1), 
            count: m+1)
               
        for i in 0..<m+1 { 
            for j in 0..<n+1 {
                if i == 0 && j == 0 {
                    dp[i][j] = true

                } else if i == 0 {
                    dp[i][j] = dp[i][j-1] && a2[j-1] == a3[j-1]

                } else if j == 0 {
                    dp[i][j] = dp[i-1][j] && a1[i-1] == a3[i-1]

                } else {
                    dp[i][j] = (dp[i][j-1] && a2[j-1] == a3[i+j-1]) 
                            || (dp[i-1][j] && a1[i-1] == a3[i+j-1])
                }
            }
        }

        return dp[m][n]
    }
}
```