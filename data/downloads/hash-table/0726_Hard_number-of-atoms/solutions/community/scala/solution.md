# Scala FP: state machine on this -> next char pairs

**Author:** SerhiyShaman
**Votes:** 1
**Link:** [https://leetcode.com/problems/number-of-atoms/solutions/5474693/](https://leetcode.com/problems/number-of-atoms/solutions/5474693/)

---

# Code
```
object Solution {
  type LEMS = Map[String, Int]
  val EmptyLems = Map.empty[String, Int]

  implicit class LemsExt(val lems: LEMS) extends AnyVal {
    def +(other: LEMS): LEMS = (lems.toSeq ++ other.toSeq).groupMapReduce(_._1)(_._2)(_ + _)
    def *(count: Int): LEMS = lems.view.mapValues(_ * count).toMap
  }

  def countOfAtoms(formula: String): String = {
    val input = (formula ++ "))").toList.sliding(2)

    @annotation.tailrec
    def readNumber(prev: Int = 0): Int = input.next match { // ch is always digit
      case ch :: nch :: _ if nch.isDigit => readNumber(prev * 10 + ch - '0')
      case other => prev * 10 + other.head - '0'
    }

    @annotation.tailrec
    def readLem(prev: String): LEMS = input.next match { // ch is always lower case letter
      case ch :: nch :: _ if nch.isLower => readLem(s"$prev$ch")
      case ch :: nch :: _ if nch.isDigit => Map(s"$prev$ch" -> readNumber())
      case other => Map(s"$prev${other.head}" -> 1)
    }

    def readLems(prev: LEMS = EmptyLems): LEMS = input.next match {
      case '(' :: _ => readLems(prev + readLems())
      case ')' :: nch :: _ if nch.isDigit => prev * readNumber()
      case ')' :: _ => prev
      case ch :: nch :: _ if nch.isLower => readLems(prev + readLem(ch.toString))
      case ch :: nch :: _ if nch.isDigit => readLems(prev + Map(ch.toString -> readNumber()))
      case other => readLems(prev + Map(other.head.toString -> 1))
    }

    readLems().toSeq.sortBy(_._1).map(p => s"${p._1}${if (p._2 == 1) "" else p._2}").mkString
  }
}
```