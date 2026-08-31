# [Python] Straight forward solution

**Author:** vbshubham
**Votes:** 12
**Link:** [https://leetcode.com/problems/painting-a-grid-with-three-different-colors/solutions/1330193/](https://leetcode.com/problems/painting-a-grid-with-three-different-colors/solutions/1330193/)

---

Using dp. Consider each row to be a state, we can find the valid adjacent states. Becomes number of paths problem.
Time complexity : O(n*3^m) 
```

from functools import cache, lru_cache
from itertools import product


class Solution:
    def colorTheGrid(self, m: int, n: int) -> int:
        mod = 10 ** 9 + 7

        def check(pos):
            return all(a != b for a, b in zip(pos, pos[1:]))

        def neighs(pos1, pos2):
            return all(a != b for a, b in zip(pos1, pos2))

        states = {''.join(pos) for pos in product('RGB', repeat=m) if check(pos)}
        adj = {}
        for state in states:
            adj[state] = [next_state for next_state in states if neighs(state, next_state)]

        @cache
        def f(prv_state, N):
            if N == 0:
                return 1
            return sum(f(next_state, N - 1) for next_state in adj[prv_state]) % mod

        return sum(f(state, n - 1) for state in states) % mod


