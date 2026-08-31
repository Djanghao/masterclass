# Scala solution

**Author:** malovig
**Votes:** 0
**Link:** [https://leetcode.com/problems/minimum-swaps-to-make-sequences-increasing/solutions/3612842/](https://leetcode.com/problems/minimum-swaps-to-make-sequences-increasing/solutions/3612842/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity: O(n)
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: O(1)
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
object Solution {
    def minSwap(nums1: Array[Int], nums2: Array[Int]): Int = {
      var curNoSwap = 0
      var curSwap = 1
      for (i <- 1 until nums1.length) {
        val prevNoSwap = curNoSwap
        val prevSwap = curSwap
        curNoSwap = Int.MaxValue
        curSwap = Int.MaxValue
        if (nums1(i) > nums1(i - 1) && nums2(i) > nums2(i - 1)) {
          curNoSwap = prevNoSwap
          curSwap = 1 + prevSwap
        }
        if (nums1(i) > nums2(i - 1) && nums2(i) > nums1(i - 1)) {
          curNoSwap = math.min(curNoSwap, prevSwap)
          curSwap = math.min(curSwap, 1 + prevNoSwap)
        }
      }
      math.min(curNoSwap, curSwap)
    }
}
```