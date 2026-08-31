# Python, clean O(N), 98%

**Author:** warmr0bot
**Votes:** 23
**Link:** [https://leetcode.com/problems/maximum-sum-of-two-non-overlapping-subarrays/solutions/760194/](https://leetcode.com/problems/maximum-sum-of-two-non-overlapping-subarrays/solutions/760194/)

---

We have to check two scenarious, subarray M is before L, or after. To be able to compute sums of subarrays faster we calculate prefix sum first:
```
class Solution:
    def maxSumTwoNoOverlap(self, A: List[int], L: int, M: int) -> int:
        prefix = [0]
        maxl = maxm = summ = 0
        for x in A:
            prefix.append(prefix[-1] + x)
        
        for x in range(M, len(prefix) - L):
            maxm = max(maxm, prefix[x] - prefix[x - M])
            summ = max(summ, maxm + prefix[x + L] - prefix[x])
        
        for x in range(L, len(prefix) - M):
            maxl = max(maxl, prefix[x] - prefix[x - L])
            summ = max(summ, maxl + prefix[x + M] - prefix[x])
        
        return summ
```