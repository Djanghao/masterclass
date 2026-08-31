# Scala solution

**Author:** malovig
**Votes:** 0
**Link:** [https://leetcode.com/problems/check-whether-two-strings-are-almost-equivalent/solutions/4239295/](https://leetcode.com/problems/check-whether-two-strings-are-almost-equivalent/solutions/4239295/)

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
    def checkAlmostEquivalent(word1: String, word2: String): Boolean = {
      val w1 = word1.groupBy(identity).view.mapValues(_.length)
      val w2 = word2.groupBy(identity).view.mapValues(_.length)
      ('a' to 'z').map(m => (w1.getOrElse(m, 0) - w2.getOrElse(m, 0)).abs).forall(_ <= 3)
    }
}
```