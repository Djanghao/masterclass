# [Python3] greedy

**Author:** ye15
**Votes:** 69
**Link:** [https://leetcode.com/problems/minimum-time-to-type-word-using-special-typewriter/solutions/1417585/](https://leetcode.com/problems/minimum-time-to-type-word-using-special-typewriter/solutions/1417585/)

---


```
class Solution:
    def minTimeToType(self, word: str) -> int:
        ans = len(word)
        prev = "a"
        for ch in word: 
            val = (ord(ch) - ord(prev)) % 26 
            ans += min(val, 26 - val)
            prev = ch
        return ans 
```