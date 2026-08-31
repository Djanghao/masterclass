# [Python] O(M log^2 M) solution

**Author:** maxkvant
**Votes:** 2
**Link:** [https://leetcode.com/problems/number-of-different-subsequences-gcds/solutions/1149279/](https://leetcode.com/problems/number-of-different-subsequences-gcds/solutions/1149279/)

---

Idea: test every number up to max_n=max(nums). 

Notice  that subsequence with gcd = k exist if and only if the subsequence of all array multiples of k has gcd = k.

The time complexity is `(max_n/1 + max_n/2 + ... max_n/max_n) * O(gcd)  = O(max_n * log^2(max_n))`.

```
import math

class Solution:
    def countDifferentSubsequenceGCDs(self, nums: List[int]) -> int:
        max_n = max(nums) + 1
        seen = set(nums)
        
        ans = 0
        for k in range(1, max_n): # iterate candidate k
            gcd = 0
            for multiple in range(k, max_n, k): # compute gcd of all array multiples of k
                if multiple in seen:
                    gcd = math.gcd(gcd, multiple)
            if gcd == k: # check the candidate 
                ans += 1
        return ans
```