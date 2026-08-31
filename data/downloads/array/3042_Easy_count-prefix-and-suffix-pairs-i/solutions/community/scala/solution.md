# [scala] - startsWith, endsWith with indices

**Author:** nikiforo
**Votes:** 0
**Link:** [https://leetcode.com/problems/count-prefix-and-suffix-pairs-i/solutions/4775454/](https://leetcode.com/problems/count-prefix-and-suffix-pairs-i/solutions/4775454/)

---

I am deeply concerned by the amount of attention given to Scala. Please submit your solutions and upvote.

```
object Solution {
  def countPrefixSuffixPairs(words: Array[String]): Int =
    words.indices.map { i =>
      (i + 1).until(words.length).count(j => isPrefixAndSuffix(words(i), words(j)))
    }.sum

  private def isPrefixAndSuffix(s1: String, s2: String) = s2.startsWith(s1) && s2.endsWith(s1)
}
```