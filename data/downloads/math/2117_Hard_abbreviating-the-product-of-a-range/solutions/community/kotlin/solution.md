# [Kotlin] 200 ms. One pass

**Author:** atrubin
**Votes:** 0
**Link:** [https://leetcode.com/problems/abbreviating-the-product-of-a-range/solutions/1646827/](https://leetcode.com/problems/abbreviating-the-product-of-a-range/solutions/1646827/)

---

```
class Solution {
    fun abbreviateProduct(left: Int, right: Int): String {
        val eps = 1_000_000_000_000L

        var pre = 1L
        var suf = 1L

        var zeroCount = 0

        (left.toLong()..right.toLong()).forEach {
            pre *= it
            suf *= it

            while (pre > eps) pre /= 10

            while (suf % 10L == 0L) {
                suf /= 10L
                zeroCount++
            }

            if (suf > eps) suf %= eps
        }

        return if (suf.toString().run { length <= 10 && pre.toString().indexOf(this) >= 0 }) {
            "${suf}e$zeroCount"
        } else {
            pre.toString().padStart(5, '0').substring(0, 5) +
                    "..." +
                    suf.toString().padStart(5, '0').let {
                        it.substring(it.length - 5, it.length)
                    } +
                    "e$zeroCount"
        }
    }
}
```