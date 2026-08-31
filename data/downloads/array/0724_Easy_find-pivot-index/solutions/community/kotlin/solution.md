# Simple Kotlin (O(n))

**Author:** spacescript
**Votes:** 3
**Link:** [https://leetcode.com/problems/find-pivot-index/solutions/3234416/](https://leetcode.com/problems/find-pivot-index/solutions/3234416/)

---


# Code
```
class Solution {
    fun pivotIndex(nums: IntArray): Int {
        if (nums.isEmpty()) {
            return 0
        }
            var pivot = -1
            var leftSum = 0
            var rightSum = nums.sum()

            nums.forEachIndexed{ idx, num ->
                rightSum -= num
                if (leftSum == rightSum) {
                    return idx
                }
                leftSum += num
            }

            return pivot
            }
}
```