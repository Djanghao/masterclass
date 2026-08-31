# [Python3] Binary Search + Heap

**Author:** awice
**Votes:** 28
**Link:** [https://leetcode.com/problems/earliest-second-to-mark-indices-ii/solutions/4778732/](https://leetcode.com/problems/earliest-second-to-mark-indices-ii/solutions/4778732/)

---

We can use binary search to reduce it to the decision problem, is `changeIndices[:bound]` enough to make `nums` all zeros?

Observe that it is strictly better to use the "Set nums[changeIndices[s]] to zero" ability (let's call this "zero ability") on the first occurrence of changeIndices[s].  Eg. if we have `changeIndices = [3,1,4,5,3,9]` we should use the setting on the first 3 (if we use a zero ability on a 3.)

Also, if we have decided all places to use a zero ability, then we can solve for whether this `bound` is possible - it's just a greedy.

The trick is we can lazily decide where to use the zero abilities.  If at `i` we are at the first occurrence of a `changeIndices[i]`, then if we have spent a turn marking, we could take this, and if we haven't, then we have to delete the lowest one we have picked up (as it's worth the least to delete).  We can use a heap to manage this.


# Code
```
class Solution:
    def earliestSecondToMarkIndices(self, A: List[int], B: List[int]) -> int:
        firsts = {}
        for i, b in enumerate(B):
            if A[b - 1] and b not in firsts:
                firsts[b] = i
        
        firsts_inv = {i: b for b, i in firsts.items()}

        def possible(bound):
            # Is B[:bound] enough to clear A?
            pq = []
            mark = 0

            for i in range(bound - 1, -1, -1):
                if i in firsts_inv:
                    heappush(pq, A[firsts_inv[i] - 1])
                    
                    if mark:
                        mark -= 1
                    else:
                        mark += 1
                        heappop(pq)
                else:
                    mark += 1

            return sum(A) - sum(pq) + len(A) - len(pq) <= mark

        lo, hi = 0, len(B) + 1
        while lo < hi:
            mi = lo + hi >> 1
            if not possible(mi):
                lo = mi + 1
            else:
                hi = mi
        
        return lo if lo <= len(B) else -1
```