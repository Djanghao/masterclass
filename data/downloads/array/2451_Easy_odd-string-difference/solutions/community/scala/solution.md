# Effective one pass solution

**Author:** plGvpkMJLJ
**Votes:** 0
**Link:** [https://leetcode.com/problems/odd-string-difference/solutions/5114584/](https://leetcode.com/problems/odd-string-difference/solutions/5114584/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
import scala.annotation.tailrec
import java.util.Arrays

object Solution:
  @inline
  def wordDiff(word: String): Array[Byte] =
    word.iterator.sliding(2).collect { 
        case Seq(c1, c2) => (c2 - c1).toByte
    }.toArray

  def oddString(words: Array[String]): String =
    @tailrec
    def findOdd(
        it: Iterator[String],
        wordsDiff: Option[Array[Byte]],
        wordsDiffCalc: List[(String, Array[Byte])]
    ): Option[String] = it.nextOption() match
      case Some(word) =>
        val diff = wordDiff(word)
        wordsDiff match
          case Some(stdDiff) if Arrays.equals(stdDiff, diff) => findOdd(it, wordsDiff, wordsDiffCalc)
          case Some(stdDiff) => Some(word)
          case None =>
            wordsDiffCalc match
              case Nil => findOdd(it, wordsDiff, List(word -> diff))
              case (w1, diff1) :: Nil => findOdd(it, wordsDiff, (word, diff) :: wordsDiffCalc)
              case (w1, diff1) :: (w2, diff2) :: Nil if Arrays.equals(diff1, diff2) =>
                if Arrays.equals(diff1, diff) then findOdd(it, Some(diff), Nil)
                else Some(word)
              case (w1, diff1) :: (w2, diff2) :: Nil => if Arrays.equals(diff, diff1) then Some(w2) else Some(w1)
              case _ => None
      case None => None

    findOdd(words.iterator, None, Nil).getOrElse("")
```