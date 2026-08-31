# Scala

**Author:** fairgrieve
**Votes:** 0
**Link:** [https://leetcode.com/problems/maximum-trailing-zeros-in-a-cornered-path/solutions/1959465/](https://leetcode.com/problems/maximum-trailing-zeros-in-a-cornered-path/solutions/1959465/)

---

```
import scala.annotation.tailrec
import scala.math.min

object Solution {
  def maxTrailingZeros(grid: Array[Array[Int]]): Int = {
    val m = grid.length
    val n = grid.headOption.map(_.length).getOrElse(0)
    val numFactors = grid.map(_.map(x => (computeNumFactors(x, 2), computeNumFactors(x, 5))))
    val verticalCumFactors = (0 until n).map(j => (0 until m).view.map(numFactors(_)(j)).scan(0, 0)(_ + _).toIndexedSeq)
    (0 until m)
      .iterator
      .flatMap { i =>
        val horizontalCumFactors = numFactors(i).scan(0, 0)(_ + _)
        (0 until n)
          .iterator
          .flatMap { j =>
            Iterator(horizontalCumFactors(j + 1) + verticalCumFactors(j)(i),
                     horizontalCumFactors(j + 1) + verticalCumFactors(j).last - verticalCumFactors(j)(i + 1),
                     horizontalCumFactors.last - horizontalCumFactors(j) + verticalCumFactors(j)(i),
                     horizontalCumFactors.last -
                       horizontalCumFactors(j) +
                       verticalCumFactors(j).last -
                       verticalCumFactors(j)(i + 1))
          }
      }
      .map { case (numTwos, numFives) => min(numTwos, numFives) }
      .maxOption
      .getOrElse(0)
  }

  @tailrec
  private def computeNumFactors(x: Int, factor: Int, count: Int = 0): Int = x match {
    case x if x != 0 && x % factor == 0 => computeNumFactors(x / factor, factor, count + 1)
    case _ => count
  }

  private implicit class RichTuple2[+A, +B](x: (A, B)) {
    def +[A1 >: A, B1 >: B](y: (A1, B1))(implicit a1Numeric: Numeric[A1], b1Numeric: Numeric[B1]): (A1, B1) = {
      (a1Numeric.plus(x._1, y._1), b1Numeric.plus(x._2, y._2))
    }

    def -[A1 >: A, B1 >: B](y: (A1, B1))(implicit a1Numeric: Numeric[A1], b1Numeric: Numeric[B1]): (A1, B1) = {
      (a1Numeric.minus(x._1, y._1), b1Numeric.minus(x._2, y._2))
    }
  }
}
```