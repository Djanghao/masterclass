# 👍Runtime 598 ms  Beats 100.00% of users with Scala

**Author:** pvt2024
**Votes:** 0
**Link:** [https://leetcode.com/problems/valid-permutations-for-di-sequence/solutions/5005812/](https://leetcode.com/problems/valid-permutations-for-di-sequence/solutions/5005812/)

---

# Code
```
object Solution {
    def numPermsDISequence(s: String): Int = {
        val n = s.length()
        val dp = Array.ofDim[Int](n + 2, 2)
        val mod = 1000000007
        dp(1)(0) = 1

        for (i <- 1 to n) {
            if (s.charAt(i - 1) == 'I') {
                for (j <- 0 to i) dp(j + 1)(i & 1) = (dp(j)((i + 1) & 1) + dp(j)(i & 1)) % mod
            } else {
                for (j <- 0 to i) dp(j + 1)(i & 1) = ((dp(i)((i + 1) & 1) + mod - dp(j)((i + 1) & 1)) % mod + dp(j)(i & 1)) % mod
            }
        }

        dp(n + 1)(n & 1)
    }
}
```