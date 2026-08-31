# Scala solution

**Author:** malovig
**Votes:** 0
**Link:** [https://leetcode.com/problems/guess-number-higher-or-lower-ii/solutions/3641231/](https://leetcode.com/problems/guess-number-higher-or-lower-ii/solutions/3641231/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity: O(n^3)
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: O(n^2)
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
object Solution {
    def getMoneyAmount(n: Int): Int = {
      val best = Array.fill(n+1, n+1)(-1)
      def dp(lo: Int, hi: Int): Int =
        if (lo >= hi) 0
        else if (best(lo)(hi) != -1) best(lo)(hi)
        else {
          var res = Int.MaxValue
          for (i <- lo to hi) res = math.min(res, List(0, i + dp(lo, i - 1), i + dp(i + 1, hi)).max)
          best(lo)(hi) = res
          res
        }
      dp(1, n)
    }
}
```