# Scala solution by intuition

**Author:** deleted_user
**Votes:** 0
**Link:** [https://leetcode.com/problems/decrypt-string-from-alphabet-to-integer-mapping/solutions/5041659/](https://leetcode.com/problems/decrypt-string-from-alphabet-to-integer-mapping/solutions/5041659/)

---

# Intuition
- Iterate, collect and transform at every # or end of string.

# Approach
- Traverse left to right. 
- Collect every digit as string into temporary memory named 'current'.
- For every '#', process 'current' by grouping last two chars as doubles and rest as singles. 
- Accumulate the result in acc as = acc + singles + double

# Complexity
- Time complexity:
Same list gets processed twice, once the iterator and the other is the converter.

Hence time complexity is $$O(2n)$$

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
object Solution {
  def freqAlphabets(s: String): String = 
    val asChar: String => String = string => (string.toInt - 1 + 'a').toChar.toString
    @scala.annotation.tailrec
    def loop(chars: List[Char], current: String, acc: String): String =
      chars match
        case head @ '#' :: next =>
          val (singles, double) = current.splitAt(current.length - 2)
          val allSingles = singles.collect(c => asChar(c.toString)).mkString
          val doubleChar = asChar(double)
          val newAcc = s"$acc$allSingles$doubleChar"
          loop(next, "", newAcc)
        case head :: next =>
          loop(next, s"$current$head", acc)
        case Nil =>
          val allSingles = current.collect(c => asChar(c.toString)).mkString
          val newAcc = s"$acc$allSingles"
          newAcc
    loop(s.toCharArray().toList, current = "", acc = "")

}
```