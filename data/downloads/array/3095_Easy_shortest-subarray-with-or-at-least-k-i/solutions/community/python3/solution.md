# Python 3 || 5 lines, zip znd check   || T/S: 98% / 66%

**Author:** Spaulding_
**Votes:** 8
**Link:** [https://leetcode.com/problems/shortest-subarray-with-or-at-least-k-i/solutions/4947873/](https://leetcode.com/problems/shortest-subarray-with-or-at-least-k-i/solutions/4947873/)

---

Here's the plan:

1. We start by checking `acc = nums` for a value greater than `k`.If so, we return 1.

2. If not, we `or` each element of `acc` with its following element in `nums` and check again.
3. We repeat 2) until we succeed in finding an element in `acc` (returning `i`), or until we exhaust `nums` in the attempt (returning `-1`).



```
class Solution:
    def minimumSubarrayLength(self, nums: List[int], k: int) -> int:

        acc = nums

        for i in range(1,len(nums)+1):

            if max(acc) >= k: return i
            acc = [x|y for x,y in zip(acc, nums[i:])]
 
        return -1 
```
[https://leetcode.com/problems/shortest-subarray-with-or-at-least-k-i/submissions/1218419656/](https://leetcode.com/problems/shortest-subarray-with-or-at-least-k-i/submissions/1218419656/)



I could be wrong, but I think that time complexity is *O*(*N*^2) and space complexity is *O*(*N*), in which *N* ~ `len(nums)`.