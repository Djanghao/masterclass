# Kotlin. Nice and short solution.

**Author:** ramanchik
**Votes:** 4
**Link:** [https://leetcode.com/problems/evaluate-reverse-polish-notation/solutions/4648010/](https://leetcode.com/problems/evaluate-reverse-polish-notation/solutions/4648010/)

---

# Code
```
class Solution {
    fun evalRPN(tokens: Array<String>): Int = LinkedList<Int>().apply {
        tokens.forEach {
            push(
                when(it) {
                    "+" -> pop() + pop()
                    "*" -> pop() * pop()
                    "/" -> pop().let{pop() / it}
                    "-" -> pop().let{pop() - it}
                    else -> it.toInt()
                }
            )
        }
    }.pop()
}
```