# Scala solution

**Author:** malovig
**Votes:** 0
**Link:** [https://leetcode.com/problems/number-of-lines-to-write-string/solutions/3450139/](https://leetcode.com/problems/number-of-lines-to-write-string/solutions/3450139/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity: O(n)
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: O(1)
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
object Solution {
    def numberOfLines(widths: Array[Int], s: String): Array[Int] = {
      val (lines, width) = s.foldLeft((1, 0)) { case ((lines, width), c) =>
        if (width + widths(c - 'a') > 100) (lines + 1, widths(c - 'a'))
        else (lines, width + widths(c - 'a'))
      }
      Array(lines, width)
    }
}
```