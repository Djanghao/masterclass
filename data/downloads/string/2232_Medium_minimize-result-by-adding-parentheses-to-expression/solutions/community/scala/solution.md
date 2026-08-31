# scala solution

**Author:** vititov
**Votes:** 0
**Link:** [https://leetcode.com/problems/minimize-result-by-adding-parentheses-to-expression/solutions/5680287/](https://leetcode.com/problems/minimize-result-by-adding-parentheses-to-expression/solutions/5680287/)

---

```scala []
object Solution {
  import scala.util.chaining._
  def int(s: String): Int = if (s.isEmpty) 1 else s.toInt
  def minimizeResult(expression: String): String =
    expression.split('+').toList pipe { l =>
      (for {
        (a1, a2) <- l.head.indices.map(l.head.splitAt)
        (b1, b2) <- (1 to l.last.length).map(l.last.splitAt)
      }
      yield {(int(a1)*(int(a2)+int(b1))*int(b2), LazyList(a1,(s"($a2+$b1)"),b2))}
      ).minBy(_._1)._2.filter(_.nonEmpty).mkString
    }
}
```