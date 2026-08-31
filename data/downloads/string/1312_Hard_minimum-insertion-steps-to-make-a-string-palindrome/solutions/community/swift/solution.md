# [Swift] Longest Palindromic Subsequence

**Author:** alptekin35
**Votes:** 1
**Link:** [https://leetcode.com/problems/minimum-insertion-steps-to-make-a-string-palindrome/solutions/489247/](https://leetcode.com/problems/minimum-insertion-steps-to-make-a-string-palindrome/solutions/489247/)

---

```
class Solution {
    func minInsertions(_ s: String) -> Int {
        let n = s.count
        if n == 0 { return 0}
        var dp = Array(repeating: Array(repeating: 0, count: n), count: n)
        let sArr = Array(s)
        for i in (0..<n).reversed(){
            dp[i][i] = 1
            for j in i+1..<n{
                if sArr[i] == sArr[j]{
                    dp[i][j] = dp[i+1][j-1] + 2
                }else{
                    dp[i][j] = max(dp[i][j-1], dp[i+1][j])
                }
            }
        }
        return n - dp[0][n-1]
    }
}
```