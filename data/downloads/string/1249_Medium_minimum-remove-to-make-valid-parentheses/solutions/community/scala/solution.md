# Scala FP: tailrec collecting indices of invalid brackets then cleaning

**Author:** SerhiyShaman
**Votes:** 1
**Link:** [https://leetcode.com/problems/minimum-remove-to-make-valid-parentheses/solutions/4982740/](https://leetcode.com/problems/minimum-remove-to-make-valid-parentheses/solutions/4982740/)

---

# Code
```
object Solution {
  def minRemoveToMakeValid(s: String): String = {
    val len = s.length

    @annotation.tailrec
    def invalid(i: Int, closed: List[Int], opened: List[Int]): Set[Int] = 
      if (i == len)
        closed.toSet ++ opened
      else s(i) match {
        case '(' =>                   invalid(i + 1, closed,      i :: opened) // count '(' index
        case ')' if opened.isEmpty => invalid(i + 1, i :: closed, opened)      // just drop ')' and count its index
        case ')' =>                   invalid(i + 1, closed,      opened.tail) // drop one '(' index
        case _ =>                     invalid(i + 1, closed,      opened)      // do nothing
      }

    val badSet = invalid(0, Nil, Nil)
    s.indices.collect { 
      case i if !badSet(i) => s(i)
    }.mkString
  }
}
```