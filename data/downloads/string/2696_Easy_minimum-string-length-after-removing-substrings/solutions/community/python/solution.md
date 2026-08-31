# Python Elegant & Short | O(n) | Stack

**Author:** Kyrylo-Ktl
**Votes:** 23
**Link:** [https://leetcode.com/problems/minimum-string-length-after-removing-substrings/solutions/3549237/](https://leetcode.com/problems/minimum-string-length-after-removing-substrings/solutions/3549237/)

---

# Complexity
- Time complexity: $$O(n)$$
- Space complexity: $$O(n)$$

# Code
```
class Solution:
    def minLength(self, s: str) -> int:
        stack = []

        for c in s:
            if stack and stack[-1] + c in ('AB', 'CD'):
                stack.pop()
            else:
                stack.append(c)

        return len(stack)
```