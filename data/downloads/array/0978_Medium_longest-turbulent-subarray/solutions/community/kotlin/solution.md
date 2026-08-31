# [Kotlin] Simple Short Solution

**Author:** catcatcute
**Votes:** 2
**Link:** [https://leetcode.com/problems/longest-turbulent-subarray/solutions/1464888/](https://leetcode.com/problems/longest-turbulent-subarray/solutions/1464888/)

---

```
class Solution {
    fun maxTurbulenceSize(arr: IntArray): Int {
        var res = 1
        var currentSize = 1
        var diff = 0
        for (i in 1..arr.lastIndex) {
            val newDiff = arr[i] - arr[i - 1]
            when {
                diff < 0 && newDiff > 0 || diff > 0 && newDiff < 0 -> ++currentSize
                newDiff == 0 -> currentSize = 1
                else -> currentSize = 2
            }
            diff = newDiff
            res = maxOf(res, currentSize)
        }
        return res
    }
}
```