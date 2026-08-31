# [Python3] hash solution using dict (92.28%)

**Author:** ye15
**Votes:** 35
**Link:** [https://leetcode.com/problems/random-pick-with-blacklist/solutions/442236/](https://leetcode.com/problems/random-pick-with-blacklist/solutions/442236/)

---

Hash map blacklisted value in `[0, N-len(blacklist))` to whitelisted value in `[N-len(blacklist), N)`, and then randomly pick number in `[0, N-len(blacklist))`. 
```
from random import randint

class Solution:

    def __init__(self, N: int, blacklist: List[int]):
        blacklist = set(blacklist)  #to avoid TLE
        self.N = N - len(blacklist) #to be used in pick()
        key = [x for x in blacklist if x < N-len(blacklist)]
        val = [x for x in range(N-len(blacklist), N) if x not in blacklist]
        self.mapping = dict(zip(key, val))

    def pick(self) -> int:
        i = randint(0, self.N-1)
        return self.mapping.get(i, i)
```
