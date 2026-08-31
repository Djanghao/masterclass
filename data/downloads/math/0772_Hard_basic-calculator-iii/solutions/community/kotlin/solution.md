# Kotlin postfix evaluation

**Author:** Karim_Ibrahim
**Votes:** 1
**Link:** [https://leetcode.com/problems/basic-calculator-iii/solutions/3951977/](https://leetcode.com/problems/basic-calculator-iii/solutions/3951977/)

---

# Code
```
import java.util.Stack
import java.util.Queue
import java.util.LinkedList

class Solution {

    val precedence = mapOf(
        "+" to 1,
        "-" to 1,
        "*" to 2,
        "/" to 2
    )
    // 1 + 1
    // 2 - 1 + 2
    // (1 + (4 + 5 + 2) - 3) + (6 + 8)
    public fun calculate(s: String): Int {
        val stack = Stack<String>()
        val accum = StringBuilder()
        val postfix: Queue<String> = LinkedList()

        for(c in s) {
            if(c.isWhitespace()) {
                continue
            }

            if(c.isDigit()) {
                accum.append(c)
            } else if(c == '(') {
                stack.push(c.toString())
            } else if(c == ')') {
                if(accum.isNotEmpty()) {
                    postfix.add(accum.toString())
                    accum.clear()
                }
                while(stack.isNotEmpty() && stack.peek() != "(") {
                    postfix.add(stack.pop())
                }
                stack.pop()
            } else {
                if(accum.isNotEmpty()) {
                    postfix.add(accum.toString())
                    accum.clear()
                }
                while(stack.isNotEmpty() && stack.peek() != "(") {
                    if(precedence[c.toString()]!! > precedence[stack.peek()]!!) {
                        break
                    }
                    postfix.add(stack.pop())
                }
                stack.push(c.toString())
            }
        }
        if(accum.isNotEmpty()) {
            postfix.add(accum.toString())
        }
        while(stack.isNotEmpty()) {
            postfix.add(stack.pop())
        }

        val intStack = Stack<Int>()
        for(item in postfix) {
            if(item == "+" || item == "-" || item == "*" || item == "/") {
               val op2 = intStack.pop()
               val op1 = if(intStack.isNotEmpty()) intStack.pop() else 0
               intStack.push(when(item) {
                    "+" -> op1 + op2
                    "-" -> op1 - op2
                    "*" -> op1 * op2
                    "/" -> op1 / op2
                    else -> 0
               })
            } else {
                intStack.push(item.toInt())
            }
        }

        return intStack.pop()
    }
}

```