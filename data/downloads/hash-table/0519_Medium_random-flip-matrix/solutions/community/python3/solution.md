# If used take next available, 95% speed

**Author:** EvgenySH
**Votes:** 3
**Link:** [https://leetcode.com/problems/random-flip-matrix/solutions/1226124/](https://leetcode.com/problems/random-flip-matrix/solutions/1226124/)

---

Runtime: 48 ms, faster than 95.00% of Python3 online submissions for Random Flip Matrix.
Memory Usage: 14.7 MB, less than 59.17% of Python3 online submissions for Random Flip Matrix.
```
from random import randint
class Solution:

    def __init__(self, n_rows: int, n_cols: int):
        self.rows = n_rows
        self.cols = n_cols
        self.len_range = n_rows * n_cols
        self.upper_limit = self.len_range - 1
        self.used = set()

    def flip(self):
        val = randint(0, self.upper_limit)
        while val in self.used:
            val += 1
            if val == self.len_range:
                val = 0
        self.used.add(val)
        return list(divmod(val, self.cols))

    def reset(self) -> None:
        self.used = set()
```