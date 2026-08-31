# Scala FP: 3 IFs tailrec state machine

**Author:** SerhiyShaman
**Votes:** 1
**Link:** [https://leetcode.com/problems/reverse-substrings-between-each-pair-of-parentheses/solutions/5458810/](https://leetcode.com/problems/reverse-substrings-between-each-pair-of-parentheses/solutions/5458810/)

---

# Code
```
object Solution {
  @annotation.tailrec
  def reverseParentheses(s: String, i: Int = 0, stack: List[Char] = List(), reversed: List[Char] = List()): String = 
    if (i == s.length) stack.mkString.reverse
    else if (s(i) != ')') reverseParentheses(s, i + 1, s(i) :: stack, reversed)
    else if (stack.head != '(') reverseParentheses(s, i, stack.tail, stack.head :: reversed)
    else reverseParentheses(s, i + 1, reversed ++ stack.tail, List())  
}
```