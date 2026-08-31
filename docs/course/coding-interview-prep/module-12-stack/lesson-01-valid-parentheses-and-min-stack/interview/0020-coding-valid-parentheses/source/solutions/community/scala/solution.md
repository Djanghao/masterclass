# Scala FP tail recursive

**Author:** squadgazzz
**Votes:** 7
**Link:** [https://leetcode.com/problems/valid-parentheses/solutions/980714/](https://leetcode.com/problems/valid-parentheses/solutions/980714/)

---

```
  def isValid(s: String): Boolean = {
    @annotation.tailrec
    def go(i: Int, stack: List[Char]): Boolean = {
      if (i >= s.length) {
        stack.isEmpty
      } else {
        s.charAt(i) match {
          case c @ ('(' | '[' | '{')                     => go(i + 1, c +: stack)
          case ')' if stack.isEmpty || stack.head != '(' => false
          case ']' if stack.isEmpty || stack.head != '[' => false
          case '}' if stack.isEmpty || stack.head != '{' => false
          case _                                         => go(i + 1, stack.tail)
        }
      }
    }
    go(0, Nil)
  }
```