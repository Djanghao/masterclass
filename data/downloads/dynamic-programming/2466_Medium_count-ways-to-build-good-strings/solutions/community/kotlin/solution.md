# Kotlin 2466. Count Ways To Build Good Strings

**Author:** alkmse4
**Votes:** 0
**Link:** [https://leetcode.com/problems/count-ways-to-build-good-strings/solutions/3520697/](https://leetcode.com/problems/count-ways-to-build-good-strings/solutions/3520697/)

---



# Code
```
class Solution {
    fun countGoodStrings(low: Int, high: Int, zero: Int, one: Int): Int {
        var dp = MutableList(high + 1) {0}
        dp[0] = 1
        val mod = 1000000007
        var res = 0

        for(i in 1..high) {
            if (i >= zero) {
                dp[i] = (dp[i] + dp[i - zero]) % mod
            }
            if (i >= one) {
                dp[i] = (dp[i] + dp[i - one]) % mod
            }
            if (i >= low) {
                res = (res + dp[i]) % mod
            }
        }
         return res

    }
}
```