# [Kotlin] O(nlogn) Solution

**Author:** catcatcute
**Votes:** 1
**Link:** [https://leetcode.com/problems/array-with-elements-not-equal-to-average-of-neighbors/solutions/1404868/](https://leetcode.com/problems/array-with-elements-not-equal-to-average-of-neighbors/solutions/1404868/)

---

```
class Solution {
    fun rearrangeArray(nums: IntArray): IntArray {
        nums.sort()
        val halfSize = (nums.size + 1) / 2
        return IntArray(nums.size) {
            if (it % 2 == 0) {
                nums[it / 2]
            } else {
                nums[halfSize + it / 2]
            }
        }
    }
}
```