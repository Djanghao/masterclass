# simple and easy Python solution 😍❤️‍🔥

**Author:** shishirRsiam
**Votes:** 3
**Link:** [https://leetcode.com/problems/minimum-length-of-string-after-operations/solutions/5529943/](https://leetcode.com/problems/minimum-length-of-string-after-operations/solutions/5529943/)

---


# if it's help, please up \u2B06 vote! \u2764\uFE0F
###### Let's Connect on LinkedIn: www.linkedin.com/in/shishirrsiam
###### Let's Connect on Facebook: www.fb.com/shishirrsiam

# Code
```
from collections import Counter
class Solution(object):
    def minimumLength(self, s):
        mp = Counter(s)
        ans = 0
        for ch, cnt in mp.items():
            ans += 1
            if not cnt % 2:
                ans += 1
        return ans
```