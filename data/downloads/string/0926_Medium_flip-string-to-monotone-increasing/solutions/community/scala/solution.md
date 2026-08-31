# simple scala solution

**Author:** aarushimaheshwari
**Votes:** 0
**Link:** [https://leetcode.com/problems/flip-string-to-monotone-increasing/solutions/6125105/](https://leetcode.com/problems/flip-string-to-monotone-increasing/solutions/6125105/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->
O(n)
- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->
O(1)
# Code
```scala []
object Solution {
  def minFlipsMonoIncr(s: String): Int = {
    val totalZeroInRight = s.count(_ == '0')
    s.foldLeft(totalZeroInRight, totalZeroInRight) {
      case ((result, totalZero), ch) =>
        if (ch == '0') (Math.min(result, totalZero - 1), totalZero-1)
        else (result, totalZero + 1)
    }._1
  }
}
```