# scala oneliner

**Author:** vititov
**Votes:** 0
**Link:** [https://leetcode.com/problems/longest-absolute-file-path/solutions/5442156/](https://leetcode.com/problems/longest-absolute-file-path/solutions/5442156/)

---

```scala
object Solution {
  import scala.util.chaining._
  def lengthLongestPath(input: String): Int =
    input.split("\
").iterator.scanLeft((List.empty[String])){case (stack,line) =>
      line.span(_ == '\	')
        .pipe{case (t,d) => d +: stack.drop(stack.length-t.length)}
    }.collect { case l if l.nonEmpty && l.head.contains('.') =>
      l.map(_.length).sum + (l.length - 1)
    }.maxOption.getOrElse(0)
}
```