# Scala with readability tricks

**Author:** er-2
**Votes:** 2
**Link:** [https://leetcode.com/problems/utf-8-validation/solutions/2568850/](https://leetcode.com/problems/utf-8-validation/solutions/2568850/)

---

```scala
import scala.annotation.tailrec

object Solution {
  def validUtf8(data: Array[Int]): Boolean = validUtf8(data.toList)

  @tailrec
  def validUtf8(data: List[Int]): Boolean = data match {
    case Nil => true
    case n1 :: ns                   if ASCII_SEQ(n1) =>             validUtf8(ns)
    case n1 :: n2 :: ns             if TWO_BYTE(n1, n2) =>          validUtf8(ns)
    case n1 :: n2 :: n3 :: ns       if THREE_BYTE(n1, n2, n3) =>    validUtf8(ns)
    case n1 :: n2 :: n3 :: n4 :: ns if FOUR_BYTE(n1, n2, n3, n4) => validUtf8(ns)
    case _ => false
  }

  case class Pattern(p: String) {
    val mask = Integer.parseInt(p.replace('0', '1').replace('X', '0'), 2)
    val maskTarget = Integer.parseInt(p.replace('X', '0'), 2)

    def ~~(i: Int): Boolean = (mask & i) == maskTarget
  }

  val ASCII_PATTERN  = Pattern("0XXXXXXX")
  val TRAILING       = Pattern("10XXXXXX")
  val FIRST_OF_TWO   = Pattern("110XXXXX")
  val FIRST_OF_THREE = Pattern("1110XXXX")
  val FIRST_OF_FOUR  = Pattern("11110XXX")

  class Sequence(patterns: Pattern*) {
    def apply(ns: Int*): Boolean = patterns zip ns forall { _ ~~ _ }
  }

  val ASCII_SEQ  = Sequence(ASCII_PATTERN)
  val TWO_BYTE   = Sequence(FIRST_OF_TWO, TRAILING)
  val THREE_BYTE = Sequence(FIRST_OF_THREE, TRAILING, TRAILING)
  val FOUR_BYTE  = Sequence(FIRST_OF_FOUR, TRAILING, TRAILING, TRAILING)
}
```