# ✅Python || Easy Approach || Replace (5 lines)

**Author:** chuhonghao01
**Votes:** 15
**Link:** [https://leetcode.com/problems/time-needed-to-rearrange-a-binary-string/solutions/2454424/](https://leetcode.com/problems/time-needed-to-rearrange-a-binary-string/solutions/2454424/)

---

```
class Solution:
    def secondsToRemoveOccurrences(self, s: str) -> int:

        ans = 0

        while '01' in s:
            ans += 1
            s = s.replace('01', '10')
            
        return ans
```