# Python 3 ~actually~ easiest solution

**Author:** drblessing
**Votes:** 127
**Link:** [https://leetcode.com/problems/reverse-string/solutions/670137/](https://leetcode.com/problems/reverse-string/solutions/670137/)

---

**It's so simiple, a caveman could do it**

```
class Solution:
    def reverseString(self, s: List[str]) -> None:
        s[:] = s[::-1]
```

**Note:**
`s[:] = s[::-1]` is required **NOT** `s = s[::-1]` because you have to edit the list **inplace**. 
Under the hood, `s[:] =` is editing the actual memory bytes s points to, and `s = ` points the variable name `s` to other bytes in the memory.

(easiest except .reverse())