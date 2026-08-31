# Readable Iterative Binary Search

**Author:** V1Nut
**Votes:** 0
**Link:** [https://leetcode.com/problems/find-target-indices-after-sorting-array/solutions/5290373/](https://leetcode.com/problems/find-target-indices-after-sorting-array/solutions/5290373/)

---

# Code
```
class Solution {
    fun targetIndices(nums: IntArray, target: Int): List<Int> {
        nums.sort()
        var l = 0
        var r = nums.lastIndex

        while (l <= r) {
            val m = (l + r) / 2

            when {
                nums[m] > target -> r = m - 1
                nums[m] < target -> l = m + 1
                else -> {
                    l = m
                    r = m
                    while (l - 1 >= 0 && nums[l - 1] == target) l--
                    while (r + 1 < nums.size && nums[r + 1] == target) r++
                    return (l..r).toList()
                }
            }
        }

        return emptyList()
    }
}
```