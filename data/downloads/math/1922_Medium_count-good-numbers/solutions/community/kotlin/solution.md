# Easy Solution with O(log n) time complexity in kotlin 🫨

**Author:** arbindprasad096
**Votes:** 0
**Link:** [https://leetcode.com/problems/count-good-numbers/solutions/5026523/](https://leetcode.com/problems/count-good-numbers/solutions/5026523/)

---


# Code
```
class Solution {
    private val MOD = 1000000007

    fun countGoodNumbers(n: Long): Int {
        val oddCount = n / 2
        val evenCount = n - oddCount

        return (powMod(5, evenCount) * powMod(4, oddCount) % MOD).toInt()
    }

    private fun powMod(base: Long, exponent: Long): Long {
        if (exponent == 0L) return 1L

        val halfPow = powMod(base, exponent / 2)
        val result = (halfPow * halfPow) % MOD

        return if (exponent % 2 == 0L) result else (result * base) % MOD
    }
}
```