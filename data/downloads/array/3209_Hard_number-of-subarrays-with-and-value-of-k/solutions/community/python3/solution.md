# Python 3 || 12 lines, divide & conquer || T/S: 86% / 45%

**Author:** Spaulding_
**Votes:** 8
**Link:** [https://leetcode.com/problems/number-of-subarrays-with-and-value-of-k/solutions/5430715/](https://leetcode.com/problems/number-of-subarrays-with-and-value-of-k/solutions/5430715/)

---

It's clear that if an integer *n* can be in such an array, then it's necessary that *n* & *k* = *k*. Thus we can limit our search to such subarrays. 

We can proceed with a *dp* solution, but only consider these subarrays.

Here's the plan:
1. We use itertool's `groupby()` to identify these subarrays in `nums`.

2. We use the function `count` to count the number of subarrays satisfying the requirements of the problem.
3. We return the sum of these counts as problem's solution.

```
class Solution:
    def countSubarrays(self, nums: List[int], k: int) -> int:

        def count(arr: list, res = 0)-> int:                    # <-- 1)

            d = defaultdict(int)
            
            for num in arr:
                tmp = defaultdict(int)
                for and_ in d:
                    tmp[and_ & num]+= d[and_]

                tmp[num]+= 1
                d = tmp
                res+= d[k]

            return res

        
        grps = [list(g) for key,g in groupby(nums,              # <-- 2)
                              lambda x: x &k == k) if key]

        return sum(map(count,grps))                             # <-- 3)
```
[https://leetcode.com/problems/number-of-subarrays-with-and-value-of-k/submissions/1312109109/](https://leetcode.com/problems/number-of-subarrays-with-and-value-of-k/submissions/1312109109/)

I could be wrong, but I think that time complexity is *O*(*N* log *K*) and space complexity is *O*(*N*), in which *N* ~ `len(nums)` and *N* ~ `k`.