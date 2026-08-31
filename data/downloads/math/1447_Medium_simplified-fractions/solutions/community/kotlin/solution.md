# Kotlin

**Author:** GroundZeroCro
**Votes:** 0
**Link:** [https://leetcode.com/problems/simplified-fractions/solutions/4769103/](https://leetcode.com/problems/simplified-fractions/solutions/4769103/)

---

# Code
```
class Solution {
    fun simplifiedFractions(n: Int): List<String> {
        val ans = mutableListOf<String>()
        for (denominator in 2..n) {
            for (numerator in 1 until denominator) {
                if (getGcd(numerator, denominator) == 1) {
                    ans += "$numerator/$denominator"
                }
            }
        }
        return ans
    }

    private fun hasGcd(a: Int, b: Int): Boolean {
        return getGcd(a, b) > 0
    }

    private fun getGcd(a: Int, b: Int): Int {
        if (b == 0) return a
        return getGcd(b, a % b)
    }
}
```