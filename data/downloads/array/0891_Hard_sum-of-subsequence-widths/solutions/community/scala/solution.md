# Scala solution

**Author:** malovig
**Votes:** 0
**Link:** [https://leetcode.com/problems/sum-of-subsequence-widths/solutions/3626631/](https://leetcode.com/problems/sum-of-subsequence-widths/solutions/3626631/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity: O(n log n)
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: O(n)
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
object Solution {
    def sumSubseqWidths(nums: Array[Int]): Int = {
      val twoPower = Array.ofDim[Long](nums.length)
      val mod = 1000000007L
      twoPower(0) = 1
      for (i <- 1 until nums.length) twoPower(i) = (twoPower(i - 1) * 2) % mod
      val effective = Array.ofDim[Long](nums.length)
      for (i <- nums.indices) effective(i) = twoPower(i) - twoPower(nums.length - i - 1)
      val sorted= nums.sorted
      var ans = 0L
      for (i <- nums.indices) ans = (ans + effective(i) * sorted(i)) % mod
      ans.toInt
    }
}
```