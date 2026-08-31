# Python Recursion

**Author:** Black_Pegasus
**Votes:** 2
**Link:** [https://leetcode.com/problems/maximize-number-of-nice-divisors/solutions/1131023/](https://leetcode.com/problems/maximize-number-of-nice-divisors/solutions/1131023/)

---

The idea is similar to other posts but eliminating some IF condition to make it cleaner. 
`3*3 > 2*2*2`  is the most important fact to solve the problem. So we would always prefer to use `3` as the factor.
```
MOD = 10**9 + 7
class Solution:
    def maxNiceDivisors(self, n: int) -> int:
        if n <= 2: return n
        i, c = divmod(n, 3)
        if not c: return pow(3, i, MOD)
        return (self.maxNiceDivisors(n-2)*2) % MOD
```