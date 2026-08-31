# Scala solution

**Author:** malovig
**Votes:** 0
**Link:** [https://leetcode.com/problems/new-21-game/solutions/3560707/](https://leetcode.com/problems/new-21-game/solutions/3560707/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity: O(n)
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: O(n)
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
object Solution {
    def new21Game(n: Int, k: Int, maxPts: Int): Double = {
      if (k == 0 || n >= k + maxPts) 1.0
      else {
        val dp = Array.fill[Double](n + 1)(0.0)
        var sum = 1.0
        var res = 0.0
        dp(0) = 1.0
        for (i <- 1 to n) {
          dp(i) = sum / maxPts
          if (i < k) sum += dp(i) else res += dp(i)
          if (i - maxPts >= 0) sum -= dp(i - maxPts)
        }
        res
      }
    }
}
```