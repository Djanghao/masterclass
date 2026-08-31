# Simple Kotlin solution

**Author:** qveex
**Votes:** 2
**Link:** [https://leetcode.com/problems/maximum-gap/solutions/3838809/](https://leetcode.com/problems/maximum-gap/solutions/3838809/)

---

# Code
```
import kotlin.math.abs

class Solution {
    fun maximumGap(nums: IntArray) =
        nums.takeIf { it.size > 1 }?.sorted()?.run {
            List(size - 1) { abs(get(it) - get(it + 1)) }.max()
        } ?: 0
}
```