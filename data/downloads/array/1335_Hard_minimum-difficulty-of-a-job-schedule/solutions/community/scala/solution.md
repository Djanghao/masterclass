# Dynamic Programming || Recursion || Memoization || Scala

**Author:** abhi_84
**Votes:** 0
**Link:** [https://leetcode.com/problems/minimum-difficulty-of-a-job-schedule/solutions/5237800/](https://leetcode.com/problems/minimum-difficulty-of-a-job-schedule/solutions/5237800/)

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
  def minDifficulty(a: Array[Int], d: Int): Int = {
    val n = a.length
    if (n < d) return -1
    
    val dp = Array.fill(n, d + 1)(-1)

    def solve(idx: Int, daysRemaining: Int): Int = {
      if (daysRemaining == 1) {
        var m = 0
        for (i <- idx until n) {
          m = math.max(m, a(i))
        }
        return m
      }

      if (dp(idx)(daysRemaining) != -1) {
        return dp(idx)(daysRemaining)
      }

      var result = Int.MaxValue
      var currentMax = 0

      for (i <- idx to n - daysRemaining) {
        currentMax = math.max(currentMax, a(i))
        val r = currentMax + solve(i + 1, daysRemaining - 1)
        result = math.min(result, r)
      }

      dp(idx)(daysRemaining) = result
      result
    }

    solve(0, d)
  }
}

```