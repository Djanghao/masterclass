# Short Iterative Python O(n) stack solution

**Author:** arsamigullin
**Votes:** 5
**Link:** [https://leetcode.com/problems/check-if-word-is-valid-after-substitutions/solutions/778791/](https://leetcode.com/problems/check-if-word-is-valid-after-substitutions/solutions/778791/)

---

```
class Solution:
    def isValid(self, S: str) -> bool:
        stack = []
        for ch in S:
            if ch == 'c':
                if len(stack) < 2 or stack.pop() != 'b' or stack.pop() != 'a':
                    return False
            else:
                stack.append(ch)
        
        return not stack
```