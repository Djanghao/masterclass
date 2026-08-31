# ✅ Scala: straightforward solution (beats 100%/100%)

**Author:** aaabramov
**Votes:** 0
**Link:** [https://leetcode.com/problems/find-and-replace-pattern/solutions/3464726/](https://leetcode.com/problems/find-and-replace-pattern/solutions/3464726/)

---

# Code
```scala
object Solution {
  import scala.collection.mutable

  def findAndReplacePattern(words: Array[String], pattern: String): List[String] = {

    def check(s: String): Boolean = {
      val bijection = Array.fill[Char](26)(0)
      val used = new mutable.HashSet[Char]()

      s.zip(pattern).foreach { case (l, p) =>
        val idx = l - 'a'
        if (bijection(idx) == 0 && !used(p)) {
          bijection(idx) = p
          used.add(p)
        } else if (bijection(idx) != p) {
          return false
        }
      }

      true
    }

    words
      .filter { s =>
        if (s.length != pattern.length)
          false
        else
          check(s)
      }
      .toList
  }

}
```