# scala twoliner

**Author:** vititov
**Votes:** 0
**Link:** [https://leetcode.com/problems/count-vowel-strings-in-ranges/solutions/5309774/](https://leetcode.com/problems/count-vowel-strings-in-ranges/solutions/5309774/)

---

```scala
object Solution {
  def vowelStrings(words: Array[String], queries: Array[Array[Int]]): Array[Int] =
    lazy val pfx = words
      .map(w => ("aeiou".contains(w.head) && "aeiou".contains(w.last)).compare(false).sign)
      .scanLeft(0)(_ + _)
    queries.map(q => pfx(q.last+1)-pfx(q.head))
}
```