# Python 3   ||   7 lines,  two-ptr, recursion w/ brief explanation   ||   T/S: 99% / 45%

**Author:** Spaulding_
**Votes:** 8
**Link:** [https://leetcode.com/problems/allocate-mailboxes/solutions/3061275/](https://leetcode.com/problems/allocate-mailboxes/solutions/3061275/)

---

Here's the plan:
For a given interval `interval`, we "divide and conquer" until we encounter either one of these base cases:
1. `k = 1`: If `len(interval)` is odd, we must place the box at the middle house. If `len(interval)` is even, we may place it anywhere at either of the two middle houses. The total distance and then be computed for that box and the houses in`interval`.
2. `len(interval) == k = 1`: Each house may have its own mailbox so the sum is zero. (Note`right - k + 2`in the code.) There's no need to parse up such an interval once its sum is zero.

```
class Solution:
    def minDistance(self, houses: List[int], k: int) -> int:
        houses.sort()

        @lru_cache(None)
        def dp(left, right, k):
            if k == 1:                                          # <-- 1.
                mid = houses[(left+right) // 2]
                return sum(abs(houses[i] - mid) for i in range(left, right + 1))

            return min(dp(left, i, 1) + dp(i+1, right, k - 1) 
                       for i in range(left, right - k + 2))     # <-- 2.

        return dp(0, len(houses)-1, k)
```
[https://leetcode.com/problems/allocate-mailboxes/submissions/1277776571](https://leetcode.com/problems/allocate-mailboxes/submissions/1277776571)

I could be wrong, but I think that time complexity is *O*(*N*^2 * k) and space complexity is, because of the cache, *O*(*N* * *K**).
