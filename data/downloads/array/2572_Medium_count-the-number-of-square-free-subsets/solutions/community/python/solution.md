# Python | Bitmask DP | Bottom-up Solution

**Author:** Samit8
**Votes:** 8
**Link:** [https://leetcode.com/problems/count-the-number-of-square-free-subsets/solutions/3204685/](https://leetcode.com/problems/count-the-number-of-square-free-subsets/solutions/3204685/)

---

We iterate through all the element and  keep track of the primes that have been used by taking this element in a bitmask. Since the product should be free of squares, it contributes to all the subsets that don't have the prime factors present in the current element. Also if the element has already more than one of the same prime, we discard the element.

After calculating the contribution from each element, we can finally add the result of each bitmask from 0 to (2^10 - 1). Since the contribution of each element is added only towards the valid bitmasks, we are guaranteed to have the ways to have square free products only for each bitmask.

Also we need to subtract 1 at the end to subtract the case of taking an empty subset (which is said to be avoided in the problem statement).

```
class Solution:
    def squareFreeSubsets(self, nums: List[int]) -> int:
        MOD = 10**9 + 7
        primes = [2, 3, 5, 7, 11, 13, 17, 19, 23, 29]
        dp = [0] * (1 << 10)
        dp[0] = 1
        for a in nums:
            mask = 0
            for i, x in enumerate(primes):
                if a % (x * x) == 0:
                    mask = -1
                    break
                if a % x == 0:
                    mask |= 1 << i
            if mask >= 0:
                for i in range(1 << 10):
                    if (i & mask) == 0:
                        dp[i | mask] += dp[i]
        return (sum(dp) - 1) % MOD
```