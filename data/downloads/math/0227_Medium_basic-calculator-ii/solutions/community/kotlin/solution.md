# Kotlin way

**Author:** dmitriysin
**Votes:** 2
**Link:** [https://leetcode.com/problems/basic-calculator-ii/solutions/3465561/](https://leetcode.com/problems/basic-calculator-ii/solutions/3465561/)

---

```
import java.util.*

class Solution {
    fun calculate(s: String): Int {
        val stack = Stack<Int>()
        var digit = 0
        var action = '+'
        for (i in 0..s.lastIndex) {
            val char = s[i]
            if (char.isDigit()) digit = digit * 10 + char.toInt() - '0'.toInt()

            if ((char.isDigit().not() && char.isWhitespace().not()) || i == s.lastIndex) {
                when (action) {
                    '+' -> stack.add(digit)
                    '-' -> stack.add(-digit)
                    '*' -> stack.add(stack.pop() * digit)
                    '/' -> stack.add(stack.pop() / digit)
                }
                action = char
                digit = 0
            }
        }
        return stack.sum()
    }
}
```