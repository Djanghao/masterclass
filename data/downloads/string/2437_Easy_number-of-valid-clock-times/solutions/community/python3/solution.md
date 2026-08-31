# Python Elegant & Short | RegEx

**Author:** Kyrylo-Ktl
**Votes:** 39
**Link:** [https://leetcode.com/problems/number-of-valid-clock-times/solutions/2706332/](https://leetcode.com/problems/number-of-valid-clock-times/solutions/2706332/)

---

```
import re


class Solution:
    """
    Time:   O(1)
    Memory: O(1)
    """

    def countTime(self, time: str) -> int:
        pattern = time.replace('?', '.')
        return sum(
            re.fullmatch(pattern, f'{hour:02}:{minute:02}') is not None
            for hour in range(24)
            for minute in range(60)
        )
```

If you like this solution remember to **upvote it** to let me know.

