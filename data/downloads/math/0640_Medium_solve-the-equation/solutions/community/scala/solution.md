# scala solution

**Author:** vititov
**Votes:** 0
**Link:** [https://leetcode.com/problems/solve-the-equation/solutions/5679085/](https://leetcode.com/problems/solve-the-equation/solutions/5679085/)

---

```scala []
object Solution {
  import scala.util.chaining._
  def solveEquation(equation: String): String = {
    def parse(s: String):List[String] = {
      lazy val (take,drop) = s.drop(1).span(!"+-".contains(_))
      if(s.isEmpty) Nil else s"${s(0)}$take" +: parse(drop)
    }
    def part(l: List[String]) = l.partition(_.contains('x'))
    equation.split('=').toVector.map(x => if(x(0)!='-') s"+$x" else x)
      .map(x => part(parse(x)).productIterator
        .map(_.asInstanceOf[List[String]].map{_.filterNot(_ == 'x')}
            .map{s => (if(s.nonEmpty && s.last.isDigit) s else  s"${s}1").toInt}.sum
        ).toList) pipe {x3 =>
    (x3.head.head - x3.last.head, x3.last.last - x3.head.last) match {
      case (0,0) => "Infinite solutions"
      case (0,_) => "No solution"
      case (a,b) => s"x=${b/a}"
    }}
  }
}
```