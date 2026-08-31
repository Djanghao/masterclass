# [scala] - flatMap, filter

**Author:** nikiforo
**Votes:** 0
**Link:** [https://leetcode.com/problems/split-strings-by-separator/solutions/3815055/](https://leetcode.com/problems/split-strings-by-separator/solutions/3815055/)

---

# Code
```
object Solution {
  def splitWordsBySeparator(words: List[String], separator: Char): List[String] =
    words.flatMap(_.split(separator)).filter(_.nonEmpty)
}
```