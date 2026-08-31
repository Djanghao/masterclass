# Scala 6 lines foldLeft O(N) space and time

**Author:** jkalmeij
**Votes:** 1
**Link:** [https://leetcode.com/problems/score-of-parentheses/solutions/1857589/](https://leetcode.com/problems/score-of-parentheses/solutions/1857589/)

---

```scala
// whenever we find '(' we start a new tally.
// whenever we find a ')' we complete the current tally and merge it into the previous tally.
// "(()(()))"
// ( => [0, 0]
// (( => [0, 0, 0]
// (() => [0, 1]
// (()( => [0, 1, 0]
// (()(( => [0, 1, 0, 0]
// (()(() => [0, 1, 1]
// (()(()) => [0, 1 + 2*1] => [0, 3]
// (()(())) => [0 + 2*3] => [6]
object Solution {
  def scoreOfParentheses(s: String): Int = s.foldLeft(List[Int](0)) { 
      case (stack, '(') => 0 :: stack
      case (0 :: next :: tail, ')') => (1 + next) :: tail
      case (head :: next :: tail, ')') => (head * 2 + next) :: tail
      case _ => ??? // can only happen if input is non-balanced.
  }.head
}
```