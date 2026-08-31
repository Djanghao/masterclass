# Python simple solution

**Author:** StikS32
**Votes:** 36
**Link:** [https://leetcode.com/problems/rings-and-rods/solutions/2044864/](https://leetcode.com/problems/rings-and-rods/solutions/2044864/)

---

```
class Solution:
    def countPoints(self, r: str) -> int:
        ans = 0
        for i in range(10):
            i = str(i)
            if 'R'+i in r and 'G'+i in r and 'B'+i in r:
                ans += 1
        return ans
```