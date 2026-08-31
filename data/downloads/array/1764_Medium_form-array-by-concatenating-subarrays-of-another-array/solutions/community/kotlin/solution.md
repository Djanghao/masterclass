# Kotlin (semi) idiomatic approach

**Author:** wizard12193
**Votes:** 0
**Link:** [https://leetcode.com/problems/form-array-by-concatenating-subarrays-of-another-array/solutions/4134419/](https://leetcode.com/problems/form-array-by-concatenating-subarrays-of-another-array/solutions/4134419/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
class Solution {
fun canChoose(groups: Array<IntArray>, nums: IntArray): Boolean {
    var index = 0
    return groups.none { group ->
        index = isSubarray(nums, group, index)
        index == -1
    }
}

private fun isSubarray(nums: IntArray, group: IntArray, index: Int): Int {
    if (index >= nums.size) return -1
    val arr = nums.sliceArray(index until nums.size)
    arr.forEachIndexed { idx, num ->
        if (idx <= arr.size - group.size && arr.sliceArray(idx until idx + group.size)
                .contentEquals(group)
        ) return idx + group.size
    }
    return -1
}
}
```