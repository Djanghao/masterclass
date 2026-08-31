# Simple Kotlin solution for beginners

**Author:** ganesh2shiv
**Votes:** 1
**Link:** [https://leetcode.com/problems/form-smallest-number-from-two-digit-arrays/solutions/3393332/](https://leetcode.com/problems/form-smallest-number-from-two-digit-arrays/solutions/3393332/)

---

```
class Solution {
    fun minNumber(nums1: IntArray, nums2: IntArray): Int {
        val set = HashSet<Int>()
        var (min, min1, min2) = arrayOf(10, 10, 10)
        for (num in nums1) {
            min1 = minOf(min1, num)
            set.add(num)
        }
        for (num in nums2) {
            min2 = minOf(min2, num)
            if (set.contains(num)) min = minOf(min, num)
        }
        if (min != 10) return min
        return minOf(min1, min2) * 10 + maxOf(min1, min2)
    }
}
```