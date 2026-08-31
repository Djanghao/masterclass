# Kotlin solution

**Author:** lihaiyang
**Votes:** 7
**Link:** [https://leetcode.com/problems/minimum-remove-to-make-valid-parentheses/solutions/4563273/](https://leetcode.com/problems/minimum-remove-to-make-valid-parentheses/solutions/4563273/)

---

# Code
```
class Solution {
    fun minRemoveToMakeValid(s: String) = buildString {
        val indexes = mutableListOf<Int>()
        s.forEach {
            when (it) {
                '(' -> indexes.add(length)
                ')' -> if (!indexes.isEmpty()) indexes.removeLast()
                       else return@forEach
            }
            append(it)
        }
        indexes.reversed().forEach {
            deleteAt(it)
        }
    }
}
```

Let me know if you have any suggestions. Thanks!