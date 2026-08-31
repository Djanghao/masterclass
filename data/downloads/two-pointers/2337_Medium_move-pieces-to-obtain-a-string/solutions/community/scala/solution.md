# Scala

**Author:** fairgrieve
**Votes:** 1
**Link:** [https://leetcode.com/problems/move-pieces-to-obtain-a-string/solutions/2265359/](https://leetcode.com/problems/move-pieces-to-obtain-a-string/solutions/2265359/)

---

```
object Solution {
  def canChange(start: String, target: String): Boolean = {
    nonBlanks(start).corresponds(nonBlanks(target))(_ == _) &&
      indicesOf(start, 'L').corresponds(indicesOf(target, 'L'))(_ >= _) &&
      indicesOf(start, 'R').corresponds(indicesOf(target, 'R'))(_ <= _)
  }

  private def nonBlanks(s: String) = s.iterator.filter(_ != '_')
  
  private def indicesOf(s: String, c: Char) = s.iterator.zipWithIndex.collect { case (c1, i) if c1 == c => i }
}
```