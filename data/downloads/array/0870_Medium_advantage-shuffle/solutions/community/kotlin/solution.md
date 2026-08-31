# 100% Kotlin

**Author:** fengqi2
**Votes:** 1
**Link:** [https://leetcode.com/problems/advantage-shuffle/solutions/3037169/](https://leetcode.com/problems/advantage-shuffle/solutions/3037169/)

---


# Code
```
class Solution {
    fun advantageCount(nums1: IntArray, nums2: IntArray): IntArray {
        nums1.sort()
        
        val pairs2 = nums2.mapIndexed {i, n -> Pair(n, i)}.sortedByDescending {it.first}
        var left = 0
        var right = nums1.lastIndex 

        val res = IntArray(nums1.size)

        for (p in pairs2) {
            if (nums1[right] > p.first) {
                res[p.second] = nums1[right--]
            } else {
                res[p.second] = nums1[left++]
            }
        }

        return res
    }
}
```