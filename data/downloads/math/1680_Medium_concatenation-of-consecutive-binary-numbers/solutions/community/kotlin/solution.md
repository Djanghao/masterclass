# [Kotlin] Easy solution with bit manipulation

**Author:** luoyunfeng1853
**Votes:** 0
**Link:** [https://leetcode.com/problems/concatenation-of-consecutive-binary-numbers/solutions/2616332/](https://leetcode.com/problems/concatenation-of-consecutive-binary-numbers/solutions/2616332/)

---

```
class Solution {
    fun concatenatedBinary(n: Int): Int {
        var sum = 0L
        var len = 0
        val mod = 1_000_000_007
        for (i in 1L..n) {
            if (i and i-1 == 0L) {
                len++
            }
            sum = ((sum shl len) or i) % mod
        }
        return sum.toInt()
    }
}
```