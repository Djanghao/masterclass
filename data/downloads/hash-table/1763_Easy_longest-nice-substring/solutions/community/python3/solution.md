# [Python3] brute-force & divide and conquer

**Author:** ye15
**Votes:** 86
**Link:** [https://leetcode.com/problems/longest-nice-substring/solutions/1074546/](https://leetcode.com/problems/longest-nice-substring/solutions/1074546/)

---


```
class Solution:
    def longestNiceSubstring(self, s: str) -> str:
        ans = ""
        for i in range(len(s)):
            for ii in range(i+1, len(s)+1):
                if all(s[k].swapcase() in s[i:ii] for k in range(i, ii)): 
                    ans = max(ans, s[i:ii], key=len)
        return ans 
```

Edited on 2/23/2021
Apparently, the small size doesn't give me enough motivation to seek more efficient algo. Below is the implementation of divide and conquer in Python3 of this [post](https://leetcode.com/problems/longest-nice-substring/discuss/1074589/JavaStraightforward-Divide-and-Conquer). This is indeed a lot faster than the naive solution above. Credit goes to original author. 
```
class Solution:
    def longestNiceSubstring(self, s: str) -> str:
        if not s: return "" # boundary condition 
        ss = set(s)
        for i, c in enumerate(s):
            if c.swapcase() not in ss: 
                s0 = self.longestNiceSubstring(s[:i])
                s1 = self.longestNiceSubstring(s[i+1:])
                return max(s0, s1, key=len)
        return s
```