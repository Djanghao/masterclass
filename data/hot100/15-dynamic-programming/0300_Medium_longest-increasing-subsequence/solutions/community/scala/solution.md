# [scala] 1D DP approach

**Author:** VOSID8
**Votes:** 0
**Link:** [https://leetcode.com/problems/longest-increasing-subsequence/solutions/6032737/](https://leetcode.com/problems/longest-increasing-subsequence/solutions/6032737/)

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
```scala []
object Solution {
  def lengthOfLIS(nums: Array[Int]): Int = {
    val dp = Array.fill(nums.length)(1)

    for {
      l <- 1 until nums.length
      r <- 0 until l 
      if nums(l) > nums(r)
    } dp(l) = Math.max(dp(l), dp(r) + 1)

    dp.max
  }
}

```