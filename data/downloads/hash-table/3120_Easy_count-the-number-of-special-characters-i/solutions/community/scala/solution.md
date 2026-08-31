# Scala 1 liner without using set

**Author:** hariprasath1436
**Votes:** 0
**Link:** [https://leetcode.com/problems/count-the-number-of-special-characters-i/solutions/5055655/](https://leetcode.com/problems/count-the-number-of-special-characters-i/solutions/5055655/)

---

# Code
```
object Solution {
  def numberOfSpecialChars(word: String): Int = {
    word.distinct.count(c => c.isLower && word.contains(c.toUpper))
  }
}

```