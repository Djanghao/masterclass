# [Python 3]SortedList

**Author:** chestnut890123
**Votes:** 2
**Link:** [https://leetcode.com/problems/find-the-index-of-permutation/solutions/5004992/](https://leetcode.com/problems/find-the-index-of-permutation/solutions/5004992/)

---

For each number, we need to calculate how many numbers come before and its corresponding combinations
* For first part, we could use `SortedList` to store how many numbers have appeared and substract from it
* For second part, it's basically a factorial of `n - i` where i is the current index (1-indexed). We could precompute the factorial to avoid repeat computations.

```
from sortedcontainers import SortedList

class Solution:
    def getPermutationIndex(self, perm: List[int]) -> int:
        ans = 0
        
        M = 10 ** 9 + 7
        n = len(perm)
        prev = SortedList()
        
        f = {0: 0}
        tmp = 1
        for i in range(1, n+1):            
            tmp = (tmp * i) % M
            f[i] = tmp
        
        
        for i, x in enumerate(perm, 1):
            loc = bisect.bisect(prev, x)
            ans = (ans + max(x - loc - 1, 0) * f[n-i]) % M
            prev.add(x)
            
        return ans