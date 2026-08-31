# just an example

**Author:** igormsc
**Votes:** 0
**Link:** [https://leetcode.com/problems/maximum-size-of-a-set-after-removals/solutions/4536181/](https://leetcode.com/problems/maximum-size-of-a-set-after-removals/solutions/4536181/)

---

# Code
```
class Solution {
    fun maximumSetSize(nums1: IntArray, nums2: IntArray): Int = nums1.size.let { n ->
        val s1 = nums1.toSet()
        val s2 = mutableSetOf<Int>()
        nums2.count { s2.add(it) && s1.contains(it) }
               .let { min(n, min(s1.size - it, n/2)+min(s2.size-it, n/2)+it)} }
}
```