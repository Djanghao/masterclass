# Kotlin O(nlog(n)) 2 lines solution

**Author:** ChizhikovAlexey
**Votes:** 0
**Link:** [https://leetcode.com/problems/minimum-moves-to-equal-array-elements-ii/solutions/2723603/](https://leetcode.com/problems/minimum-moves-to-equal-array-elements-ii/solutions/2723603/)

---

```
import kotlin.math.abs

class Solution {
    fun minMoves2(nums: IntArray): Int {
        val median = nums.sorted()[nums.size / 2]
        return nums.map { abs(it - median) }.sum()
    }
}
```