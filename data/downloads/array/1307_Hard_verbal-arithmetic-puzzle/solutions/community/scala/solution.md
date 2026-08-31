# Scala

**Author:** fairgrieve
**Votes:** 0
**Link:** [https://leetcode.com/problems/verbal-arithmetic-puzzle/solutions/1985263/](https://leetcode.com/problems/verbal-arithmetic-puzzle/solutions/1985263/)

---

```
import scala.annotation.tailrec
import scala.collection.immutable.BitSet

object Solution {
  def isSolvable(words: Array[String], result: String): Boolean = words.iterator.forall(_.length <= result.length) && {
    val charsByColumn = (0 until result.length).map { i =>
      words
        .iterator
        .flatMap { word =>
          Some(i + word.length - result.length).collect { case j if word.isDefinedAt(j) => word(j) }
        }
        .toSeq
    }

    /**
     * @return If each char is bound to a value, returns [[Some]](sum of the values).  Otherwise, returns [[None]].
     */
    @tailrec
    def sumChars(chars: Seq[Char], bindings: Map[Char, Int], sum: Int = 0): Option[Int] = chars match {
      case char :: chars => bindings.get(char) match {
        case Some(value) => sumChars(chars, bindings, sum + value)
        case _ => None
      }

      case _ => Some(sum)
    }

    /**
     * A [[scala.collection.View]] of the columns from right to left.
     */
    val reverseWordCharsAndResultChar = charsByColumn.view.reverse.zip(result.reverseIterator)

    /**
     * @return Returns true iff it's still possible to solve the problem by binding the unbound characters to values.
     */
    def isPossiblySolvable(bindings: Map[Char, Int]) = {
      @tailrec
      def isPossiblySolvable(reverseWordCharsAndResultChar: Iterable[(Seq[Char], Char)], carry: Int): Boolean = {
        reverseWordCharsAndResultChar.headOption match {
          case Some(wordChars -> resultChar) =>
            sumChars(wordChars, bindings).map(_ + carry).zip(bindings.get(resultChar)) match {
              case Some(wordCharSum -> resultDigit) =>
                wordCharSum % 10 == resultDigit &&
                  isPossiblySolvable(reverseWordCharsAndResultChar.tail, wordCharSum / 10)

              case _ => true
            }

          case _ => carry == 0
        }
      }

      isPossiblySolvable(reverseWordCharsAndResultChar, 0)
    }

    /**
     * The [[Set]] of characters that cannot be 0 because leading zeros are prohibited.
     */
    val nonZeroChars = Iterator(result).concat(words).collect { case s if s.length > 1 => s.head }.toSet
    
    def isSolvable(chars: Seq[Char], values: Set[Int], bindings: Map[Char, Int]): Boolean = chars match {
      case char :: chars => (if (nonZeroChars.contains(char)) values - 0 else values)
        .iterator
        .map(value => (values - value, bindings + (char -> value)))
        .collect { case (values, bindings) if isPossiblySolvable(bindings) => isSolvable(chars, values, bindings) }
        .contains(true)

      case _ => true
    }

    // Determines whether the problem is solvable by recursively binding characters to values from right to left.
    isSolvable(reverseWordCharsAndResultChar
                 .iterator
                 .flatMap { case (wordChars, resultChar) => Iterator(resultChar).concat(wordChars) }
                 .distinct
                 .toSeq,
               (0 to 9).to(BitSet),
               Map.empty)
  }
}
```