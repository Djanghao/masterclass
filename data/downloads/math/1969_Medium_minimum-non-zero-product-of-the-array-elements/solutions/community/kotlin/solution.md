# [Kotlin] Fast Pow Solution

**Author:** catcatcute
**Votes:** 1
**Link:** [https://leetcode.com/problems/minimum-non-zero-product-of-the-array-elements/solutions/1404984/](https://leetcode.com/problems/minimum-non-zero-product-of-the-array-elements/solutions/1404984/)

---

```
import kotlin.math.max

class Solution {
    fun minNonZeroProduct(p: Int): Int {
        val mod = 1000000007L

        fun pow(base: Long, exponent: Long): Long {
            require(exponent >= 0)
            var exponent = exponent
            var res = 1L
            var multiplier = base
            while (exponent > 0) {
                if (exponent % 2 == 1L) {
                    res *= multiplier
                    res %= mod
                    --exponent
                } else {
                    multiplier *= multiplier
                    multiplier %= mod
                    exponent /= 2
                }
            }
            return res
        }

        // 1
        // 1 [] 2 3
        // 1 [2 3 4 5] 6 7 -> 1 [1 1 6 6] 6 7 
        val maxValue = (1L shl p) - 1

        return (maxValue % mod * pow((maxValue - 1) % mod, maxValue / 2) % mod).toInt()
    }
}
```