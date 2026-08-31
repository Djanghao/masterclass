# Python stack

**Author:** venkat8096
**Votes:** 11
**Link:** [https://leetcode.com/problems/smallest-subsequence-of-distinct-characters/solutions/889563/](https://leetcode.com/problems/smallest-subsequence-of-distinct-characters/solutions/889563/)

---

```
# C \u2B55 D E \u262F
class Solution:
    def removeDuplicateLetters(self, s: str) -> str:
        d = Counter(s)
        visited = set()
        stack = []
        for i in range(len(s)):
            d[s[i]] -= 1
            if s[i] not in visited:
                while stack and stack[-1] > s[i] and d[stack[-1]]:
                    # stack.pop()
                    visited.remove(stack[-1])
                    stack.pop()
                visited.add(s[i])
                stack.append(s[i])
            
        return "".join(stack)
    
            
```