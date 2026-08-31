# [Kotlin] Simple Solution

**Author:** catcatcute
**Votes:** 1
**Link:** [https://leetcode.com/problems/find-greatest-common-divisor-of-array/solutions/1418918/](https://leetcode.com/problems/find-greatest-common-divisor-of-array/solutions/1418918/)

---

```
import kotlin.math.max
import kotlin.math.min

class Solution {
    fun findGCD(nums: IntArray): Int {
        var numPair = (nums.max()!! to nums.min()!!)
        while (numPair.second != 0) {
            numPair = numPair.run { second to first % second }
        }
        return numPair.first
    }
}
```