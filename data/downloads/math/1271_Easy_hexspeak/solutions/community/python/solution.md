# [Python 3] Bit shifts (20ms, beats 100%)

**Author:** sergiitk
**Votes:** 5
**Link:** [https://leetcode.com/problems/hexspeak/solutions/441790/](https://leetcode.com/problems/hexspeak/solutions/441790/)

---

The simple idea: it's enough to look at each 4 bits of the number.

```py
class Solution:
    def toHexspeak(self, num: str) -> str:
        num = int(num)
        mask = 0b1111
        ans = []
        while num != 0:
            digit = num & mask
            if 1 < digit < 10: return 'ERROR'
            num >>= 4
            ans.append(digit)

        hexdig = 'OI23456789ABCDEF'
        return ''.join(hexdig[d] for d in reversed(ans))
```