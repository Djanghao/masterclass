# [Swift] Clean code + beats 100%

**Author:** olivernguyen
**Votes:** 2
**Link:** [https://leetcode.com/problems/string-compression-ii/solutions/2704654/](https://leetcode.com/problems/string-compression-ii/solutions/2704654/)

---

```
class Solution {
    func getLengthOfOptimalCompression(_ s: String, _ k: Int) -> Int {
        var s = Array(s)
        var n = s.count
        var dp = Array(repeating: Array(repeating: 0, count: 110), count: 110)
        for i in 0...n {
            for j in 0...n {
                dp[i][j] = 9999
            }
        }
        dp[0][0] = 0
        for i in 1...n {
            for j in 0...k {
                var cnt = 0
                var del = 0
                for l in stride(from: i, to: 0, by: -1) {
                    if s[l-1] == s[i-1] {
                        cnt += 1
                    } else {
                        del += 1
                    }
                    if j - del >= 0 {
                        let tmp = (cnt >= 100 ? 3 : cnt >= 10 ? 2 : cnt >= 2 ? 1: 0)
                        dp[i][j] = min(dp[i][j], dp[l-1][j-del] + 1 + tmp)
                    }
                }   
                if j > 0 {
                    dp[i][j] = min(dp[i][j], dp[i-1][j-1])
                }
            }
        }
        return dp[n][k]
    }
}
```