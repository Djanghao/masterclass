# [Python3] simulation

**Author:** ye15
**Votes:** 4
**Link:** [https://leetcode.com/problems/minimum-number-of-operations-to-reinitialize-a-permutation/solutions/1130760/](https://leetcode.com/problems/minimum-number-of-operations-to-reinitialize-a-permutation/solutions/1130760/)

---


```
class Solution:
    def reinitializePermutation(self, n: int) -> int:
        ans = 0
        perm = list(range(n))
        while True: 
            ans += 1
            perm = [perm[n//2+(i-1)//2] if i&1 else perm[i//2] for i in range(n)]
            if all(perm[i] == i for i in range(n)): return ans
```