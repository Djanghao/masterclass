# Kotlin

**Author:** onissay
**Votes:** 3
**Link:** [https://leetcode.com/problems/goal-parser-interpretation/solutions/2672010/](https://leetcode.com/problems/goal-parser-interpretation/solutions/2672010/)

---

```
class Solution {
    fun interpret(command: String) = command.replace("()","o").replace("(al)","al")
}
```