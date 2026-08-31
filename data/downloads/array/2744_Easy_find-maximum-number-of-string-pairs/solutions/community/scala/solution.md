# [scala] - make pairs by indices, count

**Author:** nikiforo
**Votes:** 1
**Link:** [https://leetcode.com/problems/find-maximum-number-of-string-pairs/solutions/3696015/](https://leetcode.com/problems/find-maximum-number-of-string-pairs/solutions/3696015/)

---

# Code
```
object Solution {
  def maximumNumberOfStringPairs(words: Array[String]): Int = {
    val counts =
      words.indices.map { i =>
        val reversed = words(i).reverse
        words.iterator.drop(i + 1).count(_ == reversed)
      }
    counts.sum
  }
}
```