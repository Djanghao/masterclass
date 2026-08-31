# 3 lines slow scala solution

**Author:** vititov
**Votes:** 0
**Link:** [https://leetcode.com/problems/apply-operations-to-make-string-empty/solutions/4983610/](https://leetcode.com/problems/apply-operations-to-make-string-empty/solutions/4983610/)

---

# Code
```
object Solution {
  def lastNonEmptyString(s: String): String = {
    lazy val aMap = s.to(Vector).zipWithIndex.groupMap(_._1)(_._2)
    lazy val mx = aMap.values.map(_.length).max
    aMap.to(List).filter(_._2.length == mx).sortBy(_._2.last).map(_._1).mkString
  }
}
```