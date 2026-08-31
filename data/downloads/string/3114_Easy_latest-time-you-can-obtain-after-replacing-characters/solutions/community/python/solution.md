# ✅ One Line Solution

**Author:** MikPosp
**Votes:** 1
**Link:** [https://leetcode.com/problems/latest-time-you-can-obtain-after-replacing-characters/solutions/5132170/](https://leetcode.com/problems/latest-time-you-can-obtain-after-replacing-characters/solutions/5132170/)

---

(Disclaimer: this is not an example to follow in a real project - it is written for fun and training mostly)

# Code #1.1 - One Line
Time complexity: $$O(1)$$. Space complexity: $$O(1)$$.
```
class Solution:
    def findLatestTime(self, s: str) -> str:
        return (q:=min(s[0],'01'[s[1] in '01?']))+min(s[1],'19'[q=='0'])+':'+min(s[3],'5')+min(s[4],'9')
```

# Code #1.2 - Unwrapped
Time complexity: $$O(1)$$. Space complexity: $$O(1)$$.
```
class Solution:
    def findLatestTime(self, s: str) -> str:
        a, b, _, c, d = [*s]
        a = min(a, '01'[b in '01?'])
        b = min(b, '19'[a == '0'])
        c = min(c, '5')
        d = min(d, '9')
        
        return a + b + ':' + c + d
```

(Disclaimer 2: all code above is just a product of fantasy, it is not claimed to be pure impeccable oneliners - please, remind about drawbacks only if you know how to make it better. PEP 8 is violated intentionally)