# [Python] Brute Force

**Author:** Aquaman97
**Votes:** 7
**Link:** [https://leetcode.com/problems/distinct-echo-substrings/solutions/477042/](https://leetcode.com/problems/distinct-echo-substrings/solutions/477042/)

---

```python
class Solution:
    def distinctEchoSubstrings(self, text: str) -> int:
        res = set()
        n = len(text)
        def check(s):
            l = len(s)
            if l % 2 == 0 and s[:l//2] == s[l//2:]:
                return True
            return False
        for i in range(n):
            for j in range(i+1, n+1):
                if check(text[i:j]):
                    res.add(text[i:j])
        #print(res)
        return len(res)
```