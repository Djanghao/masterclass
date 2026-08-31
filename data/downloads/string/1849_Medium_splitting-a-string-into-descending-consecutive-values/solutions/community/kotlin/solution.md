# Dynamic Programming - Time O(n^3) - Space O(n^2)

**Author:** nguyense
**Votes:** 0
**Link:** [https://leetcode.com/problems/splitting-a-string-into-descending-consecutive-values/solutions/5230258/](https://leetcode.com/problems/splitting-a-string-into-descending-consecutive-values/solutions/5230258/)

---

# Approach: Dynamic Programming
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity: O(n^3)
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: O(n^2)
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
class Solution {
  // TO(n^3) / SO(n^2)
  fun splitString(s: String): Boolean {
    val n = s.length
    if (n < 2) return false

    // pre-compute cut values
    // TO(n^2) / SO(n^2)
    val values = Array(n) { LongArray(n) { -1 } }
    for (from in 0..<n) {
      values[from][from] = (s[from] - '0').toLong()
      for (to in from + 1..<n) {
        values[from][to] = values[from][to - 1] * 10 + (s[to] - '0')
      }
    }

    // TO(n^2) / SO(n^2)
    val dp = Array(n) { BooleanArray(n) { to -> to == n - 1 } }

    // TO(n^3) / SO(1)
    for (to in n - 2 downTo 0) {
      for (from in 0..to) {
        val big = values[from][to]
        val smallFrom = to + 1
        for (smallTo in smallFrom..<n) {
          if (dp[smallFrom][smallTo] && (big - 1 == values[smallFrom][smallTo])) {
            dp[from][to] = true
            break
          }
        }

        if (from == 0 && dp[from][to]) return true
      }
    }

    return false
  }
}
```