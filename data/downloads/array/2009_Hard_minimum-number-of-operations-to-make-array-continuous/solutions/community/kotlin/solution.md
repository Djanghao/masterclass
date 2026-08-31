# [Kotlin] Simple Short O(nlogn) Solution

**Author:** catcatcute
**Votes:** 2
**Link:** [https://leetcode.com/problems/minimum-number-of-operations-to-make-array-continuous/solutions/1470876/](https://leetcode.com/problems/minimum-number-of-operations-to-make-array-continuous/solutions/1470876/)

---

```
class Solution {
    fun minOperations(nums: IntArray): Int {
        val distinctNums = nums.sorted().distinct()
        var maxCount = 1
        var firstNumIndex = 0
        for (i in 1..distinctNums.lastIndex) {
            while (distinctNums[i] - distinctNums[firstNumIndex] >= nums.size) {
                ++firstNumIndex
            }
            maxCount = maxOf(maxCount, i - firstNumIndex + 1)
        }
        return nums.size - maxCount
    }
}
```