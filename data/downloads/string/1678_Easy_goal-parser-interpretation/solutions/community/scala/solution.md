# ✅ Scala: using regex (beats 92%)

**Author:** aaabramov
**Votes:** 0
**Link:** [https://leetcode.com/problems/goal-parser-interpretation/solutions/3448365/](https://leetcode.com/problems/goal-parser-interpretation/solutions/3448365/)

---

# Code
```scala
object Solution {

  def interpret(command: String): String =
    command
      .replaceAll("\\\\(\\\\)", "o")
      .replaceAll("\\\\(al\\\\)", "al")

}
```