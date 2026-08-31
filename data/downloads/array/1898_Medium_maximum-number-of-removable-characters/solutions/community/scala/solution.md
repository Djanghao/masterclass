# Scala solution

**Author:** malovig
**Votes:** 0
**Link:** [https://leetcode.com/problems/maximum-number-of-removable-characters/solutions/3328835/](https://leetcode.com/problems/maximum-number-of-removable-characters/solutions/3328835/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity: O(n log m)
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: O(n)
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
object Solution {
    def maximumRemovals(s: String, p: String, removable: Array[Int]): Int = {
      val n = s.length
      val m = p.length

      def isSubsequence(k: Int): Boolean = {
        val removed = Array.fill(n)(false)
        for (i <- 0 until k) removed(removable(i)) = true
        var i,j = 0
        while (i < n && j < m) {
          if (!removed(i) && s(i) == p(j)) j += 1
          i += 1
        }
        j == m
      }

      var lo = 0
      var res = removable.length

      while (lo <= res) {
        val mid = lo + (res - lo) / 2
        if (isSubsequence(mid)) lo = mid + 1
        else res = mid - 1
      }

      res
    }
}
```