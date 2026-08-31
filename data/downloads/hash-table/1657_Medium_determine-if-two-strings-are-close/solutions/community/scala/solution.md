# [scala] fp + hash_table + counting

**Author:** leetcode08
**Votes:** 1
**Link:** [https://leetcode.com/problems/determine-if-two-strings-are-close/solutions/4561431/](https://leetcode.com/problems/determine-if-two-strings-are-close/solutions/4561431/)

---

# Complexity
- Time complexity: $$O(n)$$
- Space complexity: $$O(n)$$

# Code
```scala
object Solution {
  def closeStrings(word1: String, word2: String): Boolean =
    (word1.size == word2.size) && {
      val fm1 = freqMap(word1)
      val fm2 = freqMap(word2)
      (fm1.keys == fm2.keys) &&
        (frequencies(fm1) diff frequencies(fm2)).isEmpty
    }
      
  def freqMap(s: String): Map[Char, String] =
    s.groupBy(identity)

  def frequencies(freqMap: Map[Char, String]): List[Int] =
    freqMap.values.map(_.size).toList
}

```