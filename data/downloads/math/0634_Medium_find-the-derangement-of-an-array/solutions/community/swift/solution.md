# swift solution - Dynamic Programming

**Author:** cl0ud_runner
**Votes:** 0
**Link:** [https://leetcode.com/problems/find-the-derangement-of-an-array/solutions/104999/](https://leetcode.com/problems/find-the-derangement-of-an-array/solutions/104999/)

---

```
class Solution {
    func findDerangement(_ n: Int) -> Int {
        if n < 2 {
            return 0
        }
        if n == 2 {
            return 1
        }
        
        var dp = [Int64](repeatElement(0, count: n + 1))
        
        dp[1] = 0
        dp[2] = 1
        for i in 3...n {
            dp[i] = Int64(i - 1) * (dp[i - 1] + dp[i - 2]) % 1000000007
        }
        
        return Int(dp[n])
    }
}
```