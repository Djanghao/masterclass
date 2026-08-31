# Solution with a Tail Recursion in Scala

**Author:** user4025QJ
**Votes:** 3
**Link:** [https://leetcode.com/problems/letter-combinations-of-a-phone-number/solutions/3809648/](https://leetcode.com/problems/letter-combinations-of-a-phone-number/solutions/3809648/)

---

My solution with a tailrec in Scala

# Code
```
object Solution {
  def letterCombinations(digits: String): List[String] = {
    val keys = scala.collection.mutable.HashMap(
      '2' -> List("a", "b", "c"),
      '3' ->  List("d", "e", "f"),
      '4' -> List("g", "h", "i"),
      '5' -> List("j", "k", "l"),
      '6' -> List("m", "n", "o"),
      '7' -> List("p", "q", "r", "s"),
      '8' -> List("t", "u", "v"),
      '9' -> List("w", "x", "y", "z")
    )

    @scala.annotation.tailrec
    def _letterCombinations(digits: String, acc: List[String]): List[String] = {
      if (digits.isEmpty) acc
      else {
        val res = acc.flatMap { case x =>
          keys.get(digits.head) match {
            case Some(value) => value.map(y => x + y)
            case None => Nil
          }
        }

        _letterCombinations(digits.tail, res)
      }
    }

    digits match {
      case "" => Nil
      case _ => _letterCombinations(digits.tail, keys(digits.head))
    }
  }
}
```