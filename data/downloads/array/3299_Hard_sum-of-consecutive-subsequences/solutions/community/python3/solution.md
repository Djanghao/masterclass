# Python3 ||| 8 lines, dp || T/S: 98% / 31%

**Author:** Spaulding_
**Votes:** 1
**Link:** [https://leetcode.com/problems/sum-of-consecutive-subsequences/solutions/5833531/](https://leetcode.com/problems/sum-of-consecutive-subsequences/solutions/5833531/)

---

We just follow the hints.

```python3 []
class Solution:
    def getSum(self, nums: List[int], mod = 1_000_000_007) -> int:

        def dp(dir: int, res = 0)-> int:

            ct, sm = defaultdict(int), defaultdict(int)

            for num in nums:
                ct[num]+= ct[num + dir] + 1
                sm[num]+= sm[num + dir] + num * ct[num + dir] + num
                res    += sm[num + dir] + num * ct[num + dir]

            return res % mod

        return (sum(nums) + dp(-1) + dp(1)) %mod
```
[https://leetcode.com/problems/sum-of-consecutive-subsequences/submissions/1432259981/](https://leetcode.com/problems/sum-of-consecutive-subsequences/submissions/1432259981/)

I could be wrong, but I think that time complexity is *O*(*N*) and space complexity is *O*(*N*), in which *N* ~ `len(nums)`.
