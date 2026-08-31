# Scala solution

**Author:** malovig
**Votes:** 0
**Link:** [https://leetcode.com/problems/maximum-length-of-repeated-subarray/solutions/3694256/](https://leetcode.com/problems/maximum-length-of-repeated-subarray/solutions/3694256/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity: O(m*n)
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: O(m*n)
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
object Solution {
    def findLength(nums1: Array[Int], nums2: Array[Int]): Int = {
      val dp = Array.ofDim[Int](nums1.length + 1, nums2.length + 1)
      var maxLength = 0

      for (i <- 1 to nums1.length; j <- 1 to nums2.length) 
        if (nums1(i-1) == nums2(j-1)) {
          dp(i)(j) = dp(i-1)(j-1) + 1
          maxLength = math.max(maxLength, dp(i)(j))
        }

      maxLength
    }
}
```