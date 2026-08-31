# Kotlin Binary search

**Author:** aliam
**Votes:** 0
**Link:** [https://leetcode.com/problems/maximum-number-that-sum-of-the-prices-is-less-than-or-equal-to-k/solutions/4588493/](https://leetcode.com/problems/maximum-number-that-sum-of-the-prices-is-less-than-or-equal-to-k/solutions/4588493/)

---

# Intuition
Use a binary search in the range $$[1, 10 ^5]$$ to find the highest possible value that is good. At each mid value in the binary search, check if that value `isGood(t: Int)`. 

`isGood(t: Int)` calculates the $$price$$ of a a `number` from **1** up to **number** and checks if $$sum(prices) <= k$$.



# Code
```
class Solution {
    fun findMaximumNumber(k: Long, x: Int): Long {

        fun isGood(t: Long): Boolean {
            var total = 0L
            for (i in 1..62) {
                if (i % x == 0) {
                    val e = (1L shl i)
                    total += (t / e) * (e / 2)
                    total += maxOf(0, (t % e) + 1 - (e / 2))
                }
            }
            return total <= k
        }

        var l = 1L
        var r = 1e15.toLong()
        var res = -1L
        while (l <= r) {
            val m = (l + r + 1) / 2
            if (isGood(m)) {
                res = m
                l = m + 1
            } else {
                r = m - 1
            }
        }

        return res
    }
}
```