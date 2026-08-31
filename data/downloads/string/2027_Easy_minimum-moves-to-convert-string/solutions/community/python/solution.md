# Easy Python Solution | Faster than 99% (24 ms)

**Author:** the_sky_high
**Votes:** 6
**Link:** [https://leetcode.com/problems/minimum-moves-to-convert-string/solutions/1525838/](https://leetcode.com/problems/minimum-moves-to-convert-string/solutions/1525838/)

---

# Easy Python Solution | Faster than 99% (24 ms)
**Runtime: 24 ms, faster than 99% of Python3 online submissions for Minimum Moves to Convert String.
Memory Usage: 14.2 MB.**

```
class Solution:
    def minimumMoves(self, s: str) -> int:
        i, m = 0, 0
        l = len(s)

        while i < l:
            if s[i] != 'X':
                i += 1
            elif 'X' not in s[i:i+1]:
                i += 2
            elif 'X' in s[i:i+2]:
                m += 1
                i += 3
        return m
```