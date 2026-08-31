# scala solution

**Author:** lyk4411
**Votes:** 0
**Link:** [https://leetcode.com/problems/minimum-operations-to-maximize-last-elements-in-arrays/solutions/4325126/](https://leetcode.com/problems/minimum-operations-to-maximize-last-elements-in-arrays/solutions/4325126/)

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
  def minOperations(nums1: Array[Int], nums2: Array[Int]): Int = {
    val mi = nums1.last min nums2.last
    val ma = nums1.last max nums2.last
    val (m, o) = (0 to nums1.length - 2).foldLeft(0 ,0){case ((mandatorySwap, optionalSwap), i) =>
        if ((nums1(i) > mi && nums2(i) > mi) || Math.max(nums1(i), nums2(i)) > ma) return -1
        (mandatorySwap + (if (nums1(i) > nums1.last|| nums2(i) > nums2.last) 1 else 0), optionalSwap + (if (nums1(i) <= mi && nums2(i) <= mi) 1 else 0))
    }
    m min (nums1.length - m - o)
  }
}
```