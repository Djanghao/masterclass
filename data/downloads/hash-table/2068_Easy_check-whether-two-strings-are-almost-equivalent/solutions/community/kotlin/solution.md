# Kotlin Simple Solution

**Author:** curenosm
**Votes:** 0
**Link:** [https://leetcode.com/problems/check-whether-two-strings-are-almost-equivalent/solutions/5939551/](https://leetcode.com/problems/check-whether-two-strings-are-almost-equivalent/solutions/5939551/)

---

# Code
```kotlin []
class Solution {
  fun checkAlmostEquivalent(word1: String, word2: String): Boolean {
    val freq1 = word1.groupingBy{ it }.eachCount()
    val freq2 = word2.groupingBy{ it }.eachCount()
    return ('a'..'z')
      .map { c -> freq1.getOrDefault(c, 0) to freq2.getOrDefault(c, 0) }
      .all { abs(it.first - it.second) <= 3 } 
  }
}
```