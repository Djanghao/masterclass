# kotlin, stack, itaration, 2O(n)

**Author:** LeonidIvankin
**Votes:** 0
**Link:** [https://leetcode.com/problems/construct-smallest-number-from-di-string/solutions/4103908/](https://leetcode.com/problems/construct-smallest-number-from-di-string/solutions/4103908/)

---


# Code
```
class Solution {
    fun smallestNumber(pattern: String): String {
    val stack = Stack<Int>()
    val result = StringBuilder()
    for (i in 0..pattern.length + 1) {
        while (stack.isNotEmpty() && (i == pattern.length + 1 || pattern[i - 1] == 'I')) {
            result.append(stack.pop() + 1)
        }
        stack.add(i)
    }
    return result.toString()
}
}
```