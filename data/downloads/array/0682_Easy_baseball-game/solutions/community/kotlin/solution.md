# Simple Kotlin Solution With Stack

**Author:** rohaninsuvarisi
**Votes:** 1
**Link:** [https://leetcode.com/problems/baseball-game/solutions/5456746/](https://leetcode.com/problems/baseball-game/solutions/5456746/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
<!-- Describe your approach to solving the problem. -->
I have 2 solution using ArrayDequeue and Stack. ArrayDeque is preferred for stack operations due to its performance and modern implementation.


# Code
ArrayDequeue Solution
```
class Solution {
    fun calPoints(operations: Array<String>): Int {
        val stack = ArrayDeque<Int>()
        for (op in operations) {
            when (op) {
                "D" -> {
                    stack.add(stack.last() * 2)
                }
                "C" -> {
                    stack.removeLast()
                }
                "+" -> {
                    val top = stack.removeLast()
                    val newTop = top + stack.last()
                    stack.add(top)
                    stack.add(newTop)
                }
                else -> {
                    stack.add(op.toInt())
                }
            }
        }
        return stack.sum()   
    }
}
```

Stack Solution

```
fun calPoints(operations: Array<String>): Int {
    val stack = Stack<Int>()
    for(op in operations) {
        when(op) {
            "D" -> {
                stack.push(stack.peek()*2)
            }
            "C" -> {
                if (stack.isNotEmpty()){
                    stack.pop()
                }
            }
            "+" -> {
                val peekElement = stack.pop()
                val sum = peekElement + stack.peek()
                stack.push(peekElement)
                stack.push(sum)
            }
            else -> {
                try {
                    stack.push(op.toInt())
                } catch (e: Exception){
                    throw Exception("not integer value")
                }
            }
        }
    }
    var sum = 0
    while (stack.isNotEmpty()){
        sum += stack.pop()
    }
    return sum
}
```