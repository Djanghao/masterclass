# simple and easy Python solution 😍❤️‍🔥

**Author:** shishirRsiam
**Votes:** 4
**Link:** [https://leetcode.com/problems/minimum-suffix-flips/solutions/5378050/](https://leetcode.com/problems/minimum-suffix-flips/solutions/5378050/)

---

# if it's help, please up \u2B06 vote! \u2764\uFE0F


# Code
```
class Solution(object):
    def minFlips(self, target):
        if '1' not in target:
            return 0
        ok = '0'
        ans, i, n = 0, target.find('1'), len(target)
        while i<n:
            if ok != target[i]:
                ans += 1
                ok = target[i]
            i += 1
        return ans

        
```