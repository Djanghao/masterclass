# Yet another Scala solution

**Author:** Wizzy-wooz
**Votes:** 0
**Link:** [https://leetcode.com/problems/largest-substring-between-two-equal-characters/solutions/4484648/](https://leetcode.com/problems/largest-substring-between-two-equal-characters/solutions/4484648/)

---

# Approach
This modification uses view to create a lazy sequence, and collect to filter and transform the values simultaneously without creating unnecessary collections. The if (indices.nonEmpty) check ensures that you return -1 when there are no pairs of equal characters in the string.

# Complexity
- Time complexity:
O(N)

- Space complexity:
O(N)

# Code
```
object Solution {
  def maxLengthBetweenEqualCharacters(s: String): Int = {
    val indices = s.zipWithIndex.view
      .groupMap(_._1)(_._2)
      .values
      .collect { case ids if ids.size > 1 => ids.max - ids.min - 1 }

    if (indices.nonEmpty) indices.max else -1
  }
}
```