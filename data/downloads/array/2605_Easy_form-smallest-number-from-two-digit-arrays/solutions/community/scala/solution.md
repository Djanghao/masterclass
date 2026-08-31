# Scala solution

**Author:** malovig
**Votes:** 0
**Link:** [https://leetcode.com/problems/form-smallest-number-from-two-digit-arrays/solutions/4812984/](https://leetcode.com/problems/form-smallest-number-from-two-digit-arrays/solutions/4812984/)

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
object Solution {
    def minNumber(nums1: Array[Int], nums2: Array[Int]): Int = {
      nums1.intersect(nums2) match {
        case x if x.isEmpty => Array(nums1.min, nums2.min).sorted.mkString.toInt
        case x => x.sorted.min
      }
    }
}
```