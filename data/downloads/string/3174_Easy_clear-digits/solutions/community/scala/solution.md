# [scala] - recursion

**Author:** nikiforo
**Votes:** 0
**Link:** [https://leetcode.com/problems/clear-digits/solutions/5289008/](https://leetcode.com/problems/clear-digits/solutions/5289008/)

---

I am deeply concerned by the amount of attention given to Scala. Please submit your solutions and upvote.

# Code
```
object Solution {

  def clearDigits(s: String): String = go(List.empty, s.toList).mkString

  private def go(prev: List[Char], chars: List[Char]): List[Char] =
    chars match {
      case Nil => prev.reverse
      case h :: tail => if (h.isDigit) go(prev.drop(1), tail) else go(h :: prev, tail)
    }
}
```