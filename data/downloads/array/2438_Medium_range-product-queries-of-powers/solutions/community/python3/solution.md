# Python Elegant & Short | Prefix Sum | Binary Power

**Author:** Kyrylo-Ktl
**Votes:** 11
**Link:** [https://leetcode.com/problems/range-product-queries-of-powers/solutions/2706355/](https://leetcode.com/problems/range-product-queries-of-powers/solutions/2706355/)

---

```
from itertools import accumulate
from typing import List, Generator


class Solution:
    """
    Time:   O(log(n) + m)
    Memory: O(log(n))

    where m - length of queries
    """

    MAX_POWER = 32
    MOD = 10 ** 9 + 7

    def productQueries(self, n: int, queries: List[List[int]]) -> List[int]:
        cum_powers = list(accumulate(self._to_powers(n), initial=1))
        return [pow(2, cum_powers[r + 1] - cum_powers[l], self.MOD) for l, r in queries]

    @classmethod
    def _to_powers(cls, num: int) -> Generator:
        return (p for p in range(cls.MAX_POWER) if num & (1 << p) != 0)
```

If you like this solution remember to **upvote it** to let me know.
