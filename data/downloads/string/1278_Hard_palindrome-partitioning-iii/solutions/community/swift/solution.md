# [Accepted] Swift

**Author:** vasilisiniak
**Votes:** 0
**Link:** [https://leetcode.com/problems/palindrome-partitioning-iii/solutions/5917872/](https://leetcode.com/problems/palindrome-partitioning-iii/solutions/5917872/)

---

```
class Solution {
    func palindromePartition(_ s: String, _ k: Int) -> Int {

        guard k < s.count else { return 0 }
        
        let s = Array(s)

        var ks = Array(
            repeating: Array(repeating: 0, count: s.count),
            count: s.count
        )

        for i in 0..<s.count {
            if i > 0 {
                if s[i - 1] == s[i] { ks[i - 1][i] = 0 }
                else { ks[i - 1][i] = 1 }
            }
            for j in 0..<max(0, i - 1) {
                if s[i] == s[j] { ks[j][i] = ks[j + 1][i - 1] }
                else { ks[j][i] = ks[j + 1][i - 1] + 1 }
            }
        }

        var dp = Array(
            repeating: Array(repeating: Int.max, count: s.count),
            count: k
        )

        dp[0] = ks.indices.map { ks[$0][s.count - 1] }

        for k in 1..<k {
            for i in (s.count - k - 1)..<s.count { dp[k][i] = 0 }

            for i in (0..<s.count - k - 1).reversed() {
                for j in i..<s.count - k {
                    dp[k][i] = min(dp[k][i], ks[i][j] + dp[k - 1][j + 1])
                }
            }
        }

        return dp[k - 1][0]
    }
}
```