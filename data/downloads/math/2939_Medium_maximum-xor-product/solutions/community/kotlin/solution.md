# :: Kotlin :: Bitwise Solution

**Author:** znxkznxk1030
**Votes:** 0
**Link:** [https://leetcode.com/problems/maximum-xor-product/solutions/4312711/](https://leetcode.com/problems/maximum-xor-product/solutions/4312711/)

---


```
class Solution {
    val mod = 1_000_000_007L

    fun maximumXorProduct(a: Long, b: Long, n: Int): Int {
        var x = 0L
        var _a = a
        var _b = b

        for (i in n-1 downTo 0) {
            val v = 1L shl i
            if ((x xor v) == a || (x xor v) == b) continue

            val ahas = (a shr i) and 1L == 1L
            val bhas = (b shr i) and 1L == 1L

            if (ahas && bhas) continue
            if (!ahas && !bhas) {
                x += v
                continue
            }

            if (ahas && !bhas && _a > _b) {
                x += v
                _a = _a xor v
                _b = _b xor v
            } else if (!ahas && bhas && _a < _b) {
                x += v
                _a = _a xor v
                _b = _b xor v
            }
        }

        var result = (a xor x) % mod
        result *= (b xor x) % mod
        result %= mod

        return result.toInt()
    }
}
```