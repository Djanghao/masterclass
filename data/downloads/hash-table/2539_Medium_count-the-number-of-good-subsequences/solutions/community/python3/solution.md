# [Python 3] 229 ms, DP, combinatorics with inverse factors

**Author:** huangshan01
**Votes:** 10
**Link:** [https://leetcode.com/problems/count-the-number-of-good-subsequences/solutions/3070480/](https://leetcode.com/problems/count-the-number-of-good-subsequences/solutions/3070480/)

---

![image.png](./images/0.png)


A DP problem - for each frequency f in [1 to max(freq)], we start with an empty sequence, try to find out how many different subsequences can be constructed with each letter's frequency equal to f. 

The intuition is somewhat similar to knapsack problems. For example, s = 'aaabb' with max(freq) = 3 and two unique letters 'a' and 'b'. 

Building subsequences with f = 1. To begin with, we have **1 way to build an empty sequence**. Then we can choose any 'a' to construct a good subsequence, so **number of subseqs to build = 1 + 1 * comb(3, 1) = 4, which include 1 empty sequence and three good sequences**. Next move to 'b', we add the first or the second 'b' to the 4 subsequences. **Total number of subseqs = 4 + 4 * comb(2, 1) = 12** where the first 4 is from the empty and three single 'a', and the following 8 are newcomers due to 'b'. Then the answer for f = 1 equals 12 - 1 = 11, since we need to **exclude the empty sequence**.

Repeatting the building procedure for f = 2 and 3, and finally summing up the number of ways for each f gives the answer.

However, s.length <= 10^4, combination calculation will TLE using recursive formula. Recall that **Comb(n, k) = n! / k! / (n - k)!**. We accelerate it by mod factorial (**n!**), and mod factorial of inverse factors (**1 / k!** and **1 / (n - k)!**).

Mod factorial is given in `fac(x)` and mod facotiral of inverse in `ifac(x)`. Updated `ifac(x)` to use `-1` power upon chestnut890123's comment.

# Code
```
class Solution:
    def countGoodSubsequences(self, s: str) -> int:
        @cache
        def fac(x):
            if x == 1:
                return 1
            return (x * fac(x - 1)) % MOD
        
        @cache
        def ifac(x):
            if x <= 1:
                return 1
            return pow(x, -1, MOD) * ifac(x - 1) % MOD

        @cache
        def cnk(n, k):
            return fac(n) * ifac(k) * ifac(n - k) % MOD
        
        MOD = 1_000_000_007
        ct = Counter(s)
        ma = max(ct.values())
        ans = 0

        for i in range(1, ma + 1):
            cur = 1
            for ch in ct:
                if ct[ch] >= i:
                    x = cnk(ct[ch], i)
                    cur = cur * (x + 1) % MOD
            ans = (ans + cur - 1) % MOD

        return ans
```