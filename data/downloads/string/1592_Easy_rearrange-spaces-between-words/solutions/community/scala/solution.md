# Scala solution

**Author:** malovig
**Votes:** 0
**Link:** [https://leetcode.com/problems/rearrange-spaces-between-words/solutions/3841737/](https://leetcode.com/problems/rearrange-spaces-between-words/solutions/3841737/)

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
    def reorderSpaces(text: String): String = {
      val words = text.trim.split("\\\\s+")
      val spaces = text.count(_ == ' ')
      val numGaps = if (words.length == 1) 0 else words.length - 1
      val gapSize = if (numGaps == 0) 0 else spaces / numGaps
      val extraSpaces = if (numGaps == 0) spaces else spaces % numGaps
      words.mkString(" " * gapSize) + " " * extraSpaces
    }
}
```