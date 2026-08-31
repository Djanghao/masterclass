# Scala | dynamic programming

**Author:** aspen1382020
**Votes:** 0
**Link:** [https://leetcode.com/problems/extra-characters-in-a-string/solutions/3991785/](https://leetcode.com/problems/extra-characters-in-a-string/solutions/3991785/)

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
import scala.collection.mutable

object Solution {
  def minExtraChar(s: String, dictionary: Array[String]): Int = {
    val maxVal = s.length + 1
    val dp = Array.fill(s.length + 1)(maxVal)
    dp(0) = 0

    val dictionarySet = dictionary.toSet

    for (i <- 1 to s.length) {
      dp(i) = dp(i - 1) + 1
      for (l <- 1 to i) {
        if (dictionarySet.contains(s.substring(i - l, i))) {
          dp(i) = Math.min(dp(i), dp(i - l))
        }
      }
    }
    dp(s.length)
  }
}
```