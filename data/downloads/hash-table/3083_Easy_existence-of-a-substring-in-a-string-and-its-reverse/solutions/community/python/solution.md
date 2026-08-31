# [Python3] Set intersections  || 30ms/16.5mb

**Author:** yourick
**Votes:** 7
**Link:** [https://leetcode.com/problems/existence-of-a-substring-in-a-string-and-its-reverse/solutions/4888408/](https://leetcode.com/problems/existence-of-a-substring-in-a-string-and-its-reverse/solutions/4888408/)

---

##### Check two sets intersections:
It's more efficient to save all pairs for the string and then step by step check if any of pairs of reversed string exists in the previous set. But constraints is to low, so I prefer this solution.
```python3 []
class Solution:
    def isSubstringPresent(self, s: str) -> bool:
        def getPairs(s):
            pairs = set()
            for i in range(1, len(s)):
                pairs.add(s[i-1:i+1])
            return pairs
        
        return getPairs(s) & getPairs(s[::-1])
```

##### The shortest version:
```python3 []
class Solution:
    def isSubstringPresent(self, s: str) -> bool:
        def getPairs(s):
            return {s[i-1:i+1] for i in range(1, len(s))}
        return getPairs(s) & getPairs(s[::-1])
```