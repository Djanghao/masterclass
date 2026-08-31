# Set

**Author:** avuzi
**Votes:** 1
**Link:** [https://leetcode.com/problems/find-common-elements-between-two-arrays/solutions/4815858/](https://leetcode.com/problems/find-common-elements-between-two-arrays/solutions/4815858/)

---

# Code
```
class Solution {
    fun findIntersectionValues(nums1: IntArray, nums2: IntArray): IntArray {
        val set1 = nums1.toSet()
        val set2 = nums2.toSet()
        return intArrayOf(
            nums1.count { it in set2 },
            nums2.count { it in set1 },
        )
    }
}
```