# scala solution

**Author:** lyk4411
**Votes:** 0
**Link:** [https://leetcode.com/problems/length-of-the-longest-subsequence-that-sums-to-target/solutions/4975395/](https://leetcode.com/problems/length-of-the-longest-subsequence-that-sums-to-target/solutions/4975395/)

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
  def lengthOfLongestSubsequence(nums: List[Int], target: Int): Int = {
    val dp = scala.collection.mutable.Map[Int, Int]()
    dp.put(0, 0)
    for{num <- nums
        t <- target to num by -1}{
      if(dp.contains(t - num))
        dp.put(t, Math.max(dp.getOrElse(t, 0), dp(t - num) + 1))
    }
    dp.getOrElse(target, -1)
  }
}
```