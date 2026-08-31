# [Kotlin] Simple GCD Solution

**Author:** catcatcute
**Votes:** 1
**Link:** [https://leetcode.com/problems/number-of-pairs-of-interchangeable-rectangles/solutions/1461186/](https://leetcode.com/problems/number-of-pairs-of-interchangeable-rectangles/solutions/1461186/)

---

```
class Solution {
    fun interchangeableRectangles(rectangles: Array<IntArray>): Long {

        fun gcd(a: Int, b: Int): Int {
            var a = a
            var b = b
            while (b > 0) {
                a = b.also { b = a % b }
            }
            return a
        }

        var res = 0L
        val count = mutableMapOf<Pair<Int, Int>, Long>()
        rectangles.forEach {
            val g = gcd(it[0], it[1])
            val key = Pair(it[0] / g, it[1] / g)
            res += count[key] ?: 0L
            count[key] = (count[key] ?: 0L) + 1L
        }

        return res
    }
}
```