# Scala solution

**Author:** dustin10
**Votes:** 2
**Link:** [https://leetcode.com/problems/detect-capital/solutions/377504/](https://leetcode.com/problems/detect-capital/solutions/377504/)

---

```
  object Solution {
    def detectCapitalUse(word: String): Boolean = {
      word.toUpperCase == word || 
      word.toLowerCase == word || 
      (word.head.toUpper.toString + word.tail.toLowerCase == word)
    }
  }
```