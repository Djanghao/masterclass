# scala solution

**Author:** vititov
**Votes:** 0
**Link:** [https://leetcode.com/problems/maximum-difference-by-remapping-a-digit/solutions/3206861/](https://leetcode.com/problems/maximum-difference-by-remapping-a-digit/solutions/3206861/)

---

# Code
```
object Solution {
  def minMaxDifference(num: Int): Int = {
    lazy val s = num.toString
    lazy val d1 = s.dropWhile(_ == '9').headOption.getOrElse(s.head)
    lazy val d2 = s.dropWhile(_ == '0').headOption.getOrElse(s.head)
    s.map(ch => if(ch == d1) '9' else ch).toInt - s.map(ch => if(ch == d2) '0' else ch).toInt
  }
}
```