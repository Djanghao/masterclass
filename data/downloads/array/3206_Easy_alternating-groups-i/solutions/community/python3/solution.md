# simple and easy Python solution 😍❤️‍🔥

**Author:** shishirRsiam
**Votes:** 16
**Link:** [https://leetcode.com/problems/alternating-groups-i/solutions/5428976/](https://leetcode.com/problems/alternating-groups-i/solutions/5428976/)

---

# if it's help, please up \u2B06 vote! \u2764\uFE0F


# Code
```
class Solution(object):
    def numberOfAlternatingGroups(self, colors):
        n = len(colors)
        ans = 0
        colors += colors
        for i in range(n):
            if colors[i] == colors[i+2] and colors[i] != colors[i+1]:
                ans += 1
        return ans
```