# Scala

**Author:** fairgrieve
**Votes:** 0
**Link:** [https://leetcode.com/problems/painting-a-grid-with-three-different-colors/solutions/1895567/](https://leetcode.com/problems/painting-a-grid-with-three-different-colors/solutions/1895567/)

---

```
import scala.util.chaining.scalaUtilChainingOps

object Solution {
  private object Color extends Enumeration {
    type Color = Value
    val Red, Blue, Green = Value
  }
  import Color._

  def colorTheGrid(m: Int, n: Int): Int = {
    val validCols = (1 to m).foldLeft(Iterable(List[Color]())) {
      case (cols, _) => cols.flatMap {
        case Nil => Color.values.iterator.map(List(_))
        case head :: tail => Color.values.iterator.collect {
          case color if color != head => color :: head :: tail
        }
      }
    }

    (2 to n)
      .foldLeft(validCols.map(_ -> 1)) {
        case (counts, _) => validCols.map { col1 =>
          counts
            .collect {
              case (col2, count) if col1.iterator.zip(col2).forall { case (color1, color2) => color1 != color2 } =>
                count
            }
            .fold(0)(add)
            .pipe(col1 -> _)
        }
      }
      .map(_._2)
      .fold(0)(add)
  }

  private def add(x: Int, y: Int) = (x + y) % 1000000007
}
```