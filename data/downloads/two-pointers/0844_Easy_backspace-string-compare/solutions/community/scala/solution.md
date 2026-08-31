# Scala solution

**Author:** dustin10
**Votes:** 1
**Link:** [https://leetcode.com/problems/backspace-string-compare/solutions/381131/](https://leetcode.com/problems/backspace-string-compare/solutions/381131/)

---

```
  object Solution {
    def backspaceCompare(S: String, T: String): Boolean = {
      def backspaceCompare(S: String, returnValue: String): String = {
        if (S.isEmpty) returnValue
        else if (S.head == '#') backspaceCompare(S.tail, returnValue.dropRight(1))
        else backspaceCompare(S.tail, returnValue :+ S.head)
      }

      backspaceCompare(S, "") == backspaceCompare(T, "")
    }
  }
```