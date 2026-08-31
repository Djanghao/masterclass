# Simple Solution using Stacks

**Author:** aaavs118
**Votes:** 1
**Link:** [https://leetcode.com/problems/minimum-add-to-make-parentheses-valid/solutions/5830284/](https://leetcode.com/problems/minimum-add-to-make-parentheses-valid/solutions/5830284/)

---

# Intuition
Only add open brackets to the stack and count the closed as carry if stack is empty


# Complexity
- Time complexity:
O(n)

- Space complexity:
O(n)

# Code
```kotlin []
class Solution {
    fun minAddToMakeValid(s: String): Int {
        var openStack = Stack<Char>()
        var carry = 0
        for (c in s) {
            if (c == '(') {
                openStack.add(c)
            } else {
                if (openStack.isEmpty()) carry++ else openStack.pop()
            }
        }
        return carry + openStack.size
    }
}
```