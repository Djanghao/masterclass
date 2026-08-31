# Kotlin based solution, 100% runtime, 100% memory

**Author:** Karn
**Votes:** 1
**Link:** [https://leetcode.com/problems/convert-integer-to-the-sum-of-two-no-zero-integers/solutions/492138/](https://leetcode.com/problems/convert-integer-to-the-sum-of-two-no-zero-integers/solutions/492138/)

---

A relatively simple solution in kotlin is as follows:

```kotlin
class Solution {
    fun getNoZeroIntegers(n: Int): IntArray {
        for (i in 1 until n) {
            if (!isNonZero(i)) continue
            
            if (isNonZero(n - i)) {
                return intArrayOf(i, n - i)
            }
        }

        throw IllegalArgumentException("Precondition failed -- all numbers assumed to fit property")
    }
    
    fun isNonZero(n: Int): Boolean {
        var n = n
        while (n > 0) {
            if (n % 10 == 0) {
                return false
            }
            
            n = n / 10
        }
        
        return true
    }
}
```