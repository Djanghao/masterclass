# [Kotlin] Simple Short O(n2) Solution

**Author:** catcatcute
**Votes:** 1
**Link:** [https://leetcode.com/problems/count-number-of-pairs-with-absolute-difference-k/solutions/1470911/](https://leetcode.com/problems/count-number-of-pairs-with-absolute-difference-k/solutions/1470911/)

---

```
import kotlin.math.abs

class Solution {
    fun countKDifference(nums: IntArray, k: Int): Int {
        var res = 0
        for (i in 0 until nums.lastIndex) {
            for (j in i + 1..nums.lastIndex) {
                if (abs(nums[i] - nums[j]) == k) {
                    ++res
                }
            }
        }
        return res
    }
}
```