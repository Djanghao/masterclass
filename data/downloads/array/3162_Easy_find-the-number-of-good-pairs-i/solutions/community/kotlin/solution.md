# Kotlin, one line lambda solution

**Author:** MedSaid
**Votes:** 0
**Link:** [https://leetcode.com/problems/find-the-number-of-good-pairs-i/solutions/5818106/](https://leetcode.com/problems/find-the-number-of-good-pairs-i/solutions/5818106/)

---

# Code
```kotlin []
class Solution {
    fun numberOfPairs(nums1: IntArray, nums2: IntArray, k: Int): Int {
        return nums1.flatMap { e1 -> nums2.filter{ e2 -> e1 % (e2*k) == 0 }}.count()
    }
}
```