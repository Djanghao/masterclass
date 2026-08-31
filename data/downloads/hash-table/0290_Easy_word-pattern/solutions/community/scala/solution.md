# ✅ Scala: using HashMap & HashSet

**Author:** aaabramov
**Votes:** 2
**Link:** [https://leetcode.com/problems/word-pattern/solutions/3774312/](https://leetcode.com/problems/word-pattern/solutions/3774312/)

---

# Complexity
- Time complexity: $$O(n)$$
- Space complexity: $$O(n)$$

# Code
```scala
object Solution {

  import scala.collection.mutable

  def wordPattern(pattern: String, s: String): Boolean = {
    val matchers = new mutable.HashMap[Char, String]()
    val seen = new mutable.HashSet[String]()
    val words = s.split(' ')

    if (pattern.length != words.length){
      return false
    }

    words
      .zip(pattern)
      .forall { case (word, pattern) =>
        if (matchers.contains(pattern)){
          matchers.get(pattern).contains(word)
        } else {
          if (seen.contains(word)){
            false
          } else {
            matchers.put(pattern, word)
            seen.add(word)
            true
          }
        }
      }

  }

}
```