# o(n) solution

**Author:** aarushimaheshwari
**Votes:** 0
**Link:** [https://leetcode.com/problems/minimum-changes-to-make-alternating-binary-string/solutions/5249266/](https://leetcode.com/problems/minimum-changes-to-make-alternating-binary-string/solutions/5249266/)

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
  def minOperations(s: String): Int = {
    val result = s.foldLeft((0, 0, 0)) {
      case ((start0, start1, idx), char) if (idx % 2 == 0) =>
        if (char == '0') (start0 + 1, start1, idx + 1)
        else (start0, start1 + 1, idx + 1)
      case ((start0, start1, idx), char) if (idx % 2 != 0) =>
        if (char == '0') (start0, start1 + 1, idx + 1)
        else (start0 + 1, start1, idx + 1)
    }
    math.min(result._1, result._2)
  }
}
```