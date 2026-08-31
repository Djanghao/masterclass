# [Python3] scan

**Author:** ye15
**Votes:** 35
**Link:** [https://leetcode.com/problems/minimum-moves-to-convert-string/solutions/1500215/](https://leetcode.com/problems/minimum-moves-to-convert-string/solutions/1500215/)

---


```
class Solution:
    def minimumMoves(self, s: str) -> int:
        ans = i = 0
        while i < len(s): 
            if s[i] == "X": 
                ans += 1
                i += 3
            else: i += 1
        return ans 
```