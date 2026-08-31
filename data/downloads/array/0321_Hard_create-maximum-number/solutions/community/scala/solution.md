# Scala solution

**Author:** malovig
**Votes:** 0
**Link:** [https://leetcode.com/problems/create-maximum-number/solutions/3564988/](https://leetcode.com/problems/create-maximum-number/solutions/3564988/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity: O(k * n^2)
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: O(k)
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
object Solution {
    def maxNumber(nums1: Array[Int], nums2: Array[Int], k: Int): Array[Int] = {
      val res = Array.ofDim[Int](k)
      for (i <- Math.max(0, k - nums2.length) to Math.min(k, nums1.length)) {
        val candidate = merge(maxArray(nums1, i), maxArray(nums2, k - i), k)
        if (greater(candidate, 0, res, 0)) res.indices.foreach(j => res(j) = candidate(j))
      }
      res
    }

    def merge(nums1: Array[Int], nums2: Array[Int], k: Int): Array[Int] = {
      val res = Array.ofDim[Int](k)
      var i = 0
      var j = 0
      for (r <- res.indices)
        res(r) = if (greater(nums1, i, nums2, j)) {
            i += 1
            nums1(i - 1)
          } else {
            j += 1
            nums2(j - 1)
          }
      res
    }

    def greater(nums1: Array[Int], i: Int, nums2: Array[Int], j: Int): Boolean = {
      var ii = i
      var jj = j
      while (ii < nums1.length && jj < nums2.length && nums1(ii) == nums2(jj)) {
        ii += 1
        jj += 1
      }
      jj == nums2.length || (ii < nums1.length && nums1(ii) > nums2(jj))
    }

    def maxArray(nums: Array[Int], k: Int): Array[Int] = {
      val ans = Array.ofDim[Int](k)
      var j = 0
      for (i <- nums.indices) {
        while (nums.length - i + j > k && j > 0 && ans(j - 1) < nums(i)) j -= 1
        if (j < k) {
          ans(j) = nums(i)
          j += 1
        }
      }
      ans
    }
}
```