# just a variant

**Author:** igormsc
**Votes:** 0
**Link:** [https://leetcode.com/problems/minimum-split-into-subarrays-with-gcd-greater-than-one/solutions/6117614/](https://leetcode.com/problems/minimum-split-into-subarrays-with-gcd-greater-than-one/solutions/6117614/)

---

# Code
```kotlin []
class Solution {
    fun minimumSplits(nums: IntArray): Int {
        var g = 0
        return nums.count { n ->
                                g = gcd(g, n)
                                (g == 1).also {if (it) g = n} } + 1
    }

    private fun gcd(a: Int, b: Int): Int = if (b == 0) a else gcd(b, a % b)
}
```