# Python - Two Pointer - Memory usage less than 100%

**Author:** mmbhatk
**Votes:** 11
**Link:** [https://leetcode.com/problems/camelcase-matching/solutions/488216/](https://leetcode.com/problems/camelcase-matching/solutions/488216/)

---

```
class Solution:
    def camelMatch(self, queries: List[str], pattern: str) -> List[bool]:
        
        def match(p, q):
            i = 0
            for j, c in enumerate(q):
                if i < len(p) and p[i] == q[j]: i += 1
                elif q[j].isupper(): return False
            return i == len(p)
        
        return [True if match(pattern, s) else False for s in queries]
```