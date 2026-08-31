# [Python3] sliding window with explanation

**Author:** hwsbjts
**Votes:** 15
**Link:** [https://leetcode.com/problems/replace-the-substring-for-balanced-string/solutions/884039/](https://leetcode.com/problems/replace-the-substring-for-balanced-string/solutions/884039/)

---

This problem can be split into two small problems:
1. find out which letters have extra numbers in the string
2. find out the shortest substring that contains those extra letters

Once this gets sorted out the solution gonna be pretty straightforward.
Complexity: time O(n) space O(1)

```
class Solution:
    def balancedString(self, s: str) -> int:
        counter = collections.Counter(s)
        n = len(s) // 4
        extras = {}
        for key in counter:
            if counter[key] > n:
                extras[key] = counter[key] - n
        
        if not extras: return 0
        i = 0
        res = len(s)
        for j in range(len(s)):
            if s[j] in extras:
                extras[s[j]] -= 1
            
            while max(extras.values()) <= 0:
                res = min(res, j-i+1)
                if s[i] in extras:
                    extras[s[i]] += 1
                i += 1
                
                
        return res
```