# Kotlin Solution with Lambda

**Author:** kotlinc
**Votes:** 3
**Link:** [https://leetcode.com/problems/capacity-to-ship-packages-within-d-days/solutions/3216745/](https://leetcode.com/problems/capacity-to-ship-packages-within-d-days/solutions/3216745/)

---

# Intuition\r
We can use lambda's `fold` function.\r
\r
Note that the tried `capacity` must be at least of `MIN_WEIGHT`, which is the heaviest cargo in the `weights` array.\r
\r
# Complexity\r
- Time complexity: $$O(N Log N)$$\r
<!-- Add your time complexity here, e.g. $$O(n)$$ -->\r
\r
- Space complexity: $$O(1)$$\r
<!-- Add your space complexity here, e.g. $$O(n)$$ -->\r
\r
# Code\r
```\r
class Solution {\r
  fun shipWithinDays(weights: IntArray, days: Int): Int {\r
    val MIN_WEIGHT = weights.max()!!\r
\r
    fun can(capacity: Int): Boolean {\r
      if (capacity < MIN_WEIGHT)\r
        return false\r
\r
      var needs = 0\r
      weights.fold(0) { prev, v ->\r
        if (prev < v) {\r
          needs++\r
          capacity - v\r
        } else \r
          prev - v        \r
      }\r
      return needs <= days\r
    }\r
    return (0..24).reversed().fold(0) { prev, idx ->\r
      val next = prev + (1 shl idx)\r
      if (can(next))\r
        prev\r
      else\r
        next\r
    }.let { it + 1 }\r
  }\r
\r
}\r
```