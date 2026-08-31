# Simple Scala one liner

**Author:** taintech
**Votes:** 0
**Link:** [https://leetcode.com/problems/find-the-integer-added-to-array-i/solutions/5105607/](https://leetcode.com/problems/find-the-integer-added-to-array-i/solutions/5105607/)

---

# Intuition
If arrays were sorted, maximum elements from arrays had same difference as any element.

# Approach
Tak maximum of both arrays.

# Complexity
- Time complexity:
O(n)

- Space complexity:
O(1)

# Code
```
object Solution {
    def addedInteger(nums1: Array[Int], nums2: Array[Int]): Int = {
        nums2.max - nums1.max
    }
}
```