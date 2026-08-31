# [Python3] kmp

**Author:** ye15
**Votes:** 13
**Link:** [https://leetcode.com/problems/remove-all-occurrences-of-a-substring/solutions/1298899/](https://leetcode.com/problems/remove-all-occurrences-of-a-substring/solutions/1298899/)

---

This is based on this [post](https://leetcode.com/problems/remove-all-occurrences-of-a-substring/discuss/1298794/linear-algorithms%3A-KMP-or-Rollinghash).
```
class Solution:
    def removeOccurrences(self, s: str, part: str) -> str:
        lps = [0]
        k = 0 
        for i in range(1, len(part)): 
            while k and part[k] != part[i]: k = lps[k-1]
            if part[k] == part[i]: k += 1
            lps.append(k)
        
        stack = [("", 0)]
        for ch in s: 
            k = stack[-1][1]
            while k and part[k] != ch: k = lps[k-1]
            if part[k] == ch: k += 1
            stack.append((ch, k))
            if k == len(part): 
                for _ in range(len(part)): stack.pop()
        return "".join(x for x, _ in stack)
```