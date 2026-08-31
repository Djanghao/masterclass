# Python 3 || 6 lines,  slice once & check   ||   T/S: 100% / 98%

**Author:** Spaulding_
**Votes:** 8
**Link:** [https://leetcode.com/problems/minimum-right-shifts-to-sort-the-array/solutions/4052829/](https://leetcode.com/problems/minimum-right-shifts-to-sort-the-array/solutions/4052829/)

---

```
class Solution:
    def minimumRightShifts(self, nums: List[int]) -> int:
        
        n = len(nums)
    
        for i in range(1, n):
            if nums[i] < nums[i-1]:

                    nums = nums[i:]+nums[:i]
                    return n-i if nums == sorted(nums) else -1

        return 0
```
[https://leetcode.com/problems/minimum-right-shifts-to-sort-the-array/submissions/1051163323/](http://)


I could be wrong, but I think that time complexity is *O*(*N*log*N*) and space complexity is *O*(*N*), in which *N* ~ `len(nums)`. 

(Two thoughts:
(1) TC could in practice be better than *O*(*N*log*N*) because for a number of testcases, the sum of the slices will be sorted already; and 
(b) the only data structure is the sum of the slices, which then immediately overwrites 'nums`, so an argument could be made for SC being closer to *O*(1))