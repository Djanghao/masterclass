# Scala

**Author:** fairgrieve
**Votes:** 3
**Link:** [https://leetcode.com/problems/fraction-to-recurring-decimal/solutions/806380/](https://leetcode.com/problems/fraction-to-recurring-decimal/solutions/806380/)

---

```
import scala.math.Integral.Implicits._
import scala.math._

object Solution {
  def fractionToDecimal(numerator: Int, denominator: Int): String = {
    val sign = if (signum(numerator) * signum(denominator) == -1) "-" else ""
    s"${sign}${fractionToDecimal(abs(numerator.toLong), abs(denominator.toLong))}"
  }

  private def fractionToDecimal(numerator: Long, denominator: Long): String = {
    numerator /% denominator match {
      case (quot, 0)   => quot.toString
      case (quot, rem) => s"${quot}.${generateFractional(rem, denominator)}"
    }
  }

  @scala.annotation.tailrec
  private def generateFractional(numerator: Long,
                                 denominator: Long,
                                 numeratorToIndex: Map[Long, Int] = Map(),
                                 fractional: String = ""): String = {
    numeratorToIndex.get(numerator) match {
      case Some(index) => s"${fractional.substring(0, index)}(${fractional.substring(index)})"
      case _           => 10 * numerator /% denominator match {
        case (quot, 0)   => fractional + quot
        case (quot, rem) => generateFractional(rem, denominator, numeratorToIndex + (numerator -> fractional.length),
                                               fractional + quot)
      }
    }
  }
}
```