# Scala solution

**Author:** malovig
**Votes:** 0
**Link:** [https://leetcode.com/problems/delete-columns-to-make-sorted-iii/solutions/3646419/](https://leetcode.com/problems/delete-columns-to-make-sorted-iii/solutions/3646419/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity: O(m^2 * n)
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: O(m)
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
object Solution {
    def minDeletionSize(strs: Array[String]): Int = {
      val m = strs(0).length
      val dp = Array.fill(m)(1)
      var overallMax = 0
      for (i <- 0 until m) {
        for (j <- 0 until i)
          if (strs.indices.forall(k => strs(k).charAt(j) <= strs(k).charAt(i))) dp(i) = math.max(dp(i), dp(j) + 1)
        overallMax = math.max(dp(i), overallMax)
      }
      m - overallMax
    }

}
```