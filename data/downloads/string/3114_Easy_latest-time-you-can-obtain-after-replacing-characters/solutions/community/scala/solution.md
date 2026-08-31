# [scala] - pattern match for hours, if/else for minutes

**Author:** nikiforo
**Votes:** 0
**Link:** [https://leetcode.com/problems/latest-time-you-can-obtain-after-replacing-characters/solutions/5023972/](https://leetcode.com/problems/latest-time-you-can-obtain-after-replacing-characters/solutions/5023972/)

---

I am deeply concerned by the amount of attention given to Scala. Please submit your solutions and upvote.

# Code
```scala
object Solution {
  def findLatestTime(s: String): String =
    s"${hours(s(0), s(1))}:${third(s(3))}${fourth(s(4))}"

  private def hours(c1: Char, c2: Char): String =
    (c1, c2) match {
      case ('?', '?') => "11"
      case ('?',   _) => if (c2 > '1') s"0$c2" else s"1$c2"
      case (_  , '?') => if (c1 == '0') "09" else "11"
      case _ => s"$c1$c2"
    }

  private def third(c: Char) = if (c == '?') '5' else c

  private def fourth(c: Char) = if (c == '?') '9' else c
}
```