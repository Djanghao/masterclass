# Simple o(n) Scala way solution

**Author:** plGvpkMJLJ
**Votes:** 0
**Link:** [https://leetcode.com/problems/longest-continuous-increasing-subsequence/solutions/5199914/](https://leetcode.com/problems/longest-continuous-increasing-subsequence/solutions/5199914/)

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
object Solution:
    def findLengthOfLCIS(nums: Array[Int]): Int = 
      val result = nums.foldLeft((0, 0, Option.empty[Int])) { (state, n) =>
        val (max, currentMax, prev) = state
        prev match
          case None => (max, 1, Some(n))
          case Some(v) if n > v => (max, currentMax + 1, Some(n))
          case Some(v) => (math.max(max, currentMax), 1, Some(n))
      }
      math.max(result(0), result(1))

```