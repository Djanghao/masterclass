# Python 3   ||   7 lines,  sliding ptrs   ||   T/S: 89% / 97%

**Author:** Spaulding_
**Votes:** 10
**Link:** [https://leetcode.com/problems/maximum-sum-of-two-non-overlapping-subarrays/solutions/3649604/](https://leetcode.com/problems/maximum-sum-of-two-non-overlapping-subarrays/solutions/3649604/)

---

```
class Solution:
    def maxSumTwoNoOverlap(self, nums: List[int], firstLen: int, secondLen: int) -> int:

        nums = list(accumulate(nums, initial = 0))
        mx1 = mx2 = mx3 = 0
        
        for sm0,sm1,sm2,sm3 in zip(nums, 
                                   nums[firstLen:],
                                   nums[secondLen:],
                                   nums[firstLen+secondLen:]):

            mx1 = max(mx1, sm1 - sm0)
            mx2 = max(mx2, sm2 - sm0)
            mx3 = max(mx3, max(mx1 + sm3-sm1, mx2 + sm3-sm2))
            
        return mx3
```
[https://leetcode.com/problems/maximum-sum-of-two-non-overlapping-subarrays/submissions/1273655658/](https://leetcode.com/problems/maximum-sum-of-two-non-overlapping-subarrays/submissions/1273655658/)

I could be wrong, but I think that time complexity is *O*(*N*) and space complexity is *O*(*N*), in which *N* ~`len(nums)`.