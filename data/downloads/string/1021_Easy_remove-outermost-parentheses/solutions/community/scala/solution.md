# Scala 100%/100% using foldLeft

**Author:** bubbafat
**Votes:** 2
**Link:** [https://leetcode.com/problems/remove-outermost-parentheses/solutions/324172/](https://leetcode.com/problems/remove-outermost-parentheses/solutions/324172/)

---

```
object Solution {
    case class State(count: Int, running: StringBuilder)
    
    def removeOuterParentheses(S: String): String = {
        S.foldLeft(State(0, new StringBuilder))((acc, ch) => {
            acc match {
                case State(0, run) if ch == '(' => State(1, run)
                case State(1, run) if ch == ')' => State(0, run)
                case State(x, run) if ch == '(' => State(x+1, run += ch)
                case State(x, run) if ch == ')' => State(x-1, run += ch)
            }
        }).running.toString
    }
}
```