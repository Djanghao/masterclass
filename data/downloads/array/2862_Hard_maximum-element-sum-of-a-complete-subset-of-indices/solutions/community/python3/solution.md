# Python 3 || 11 lines,  brute force || T/S: 79% / 100%

**Author:** Spaulding_
**Votes:** 8
**Link:** [https://leetcode.com/problems/maximum-element-sum-of-a-complete-subset-of-indices/solutions/4057121/](https://leetcode.com/problems/maximum-element-sum-of-a-complete-subset-of-indices/solutions/4057121/)

---

Note: Any *complete set* starting with an integer greater than `len(nums//4)` is a single element.

```
sqs = [k*k for k in range (1,101)]

class Solution:
    def maximumSum(self, nums: List[int]) -> int:

        nums = [0]+nums
        n = len(nums)
        ans = max(nums[n//4:])          # <-- note above

        for i in range(1, n//4+1):      # <-- note above
            sm = 0
            for sq in sqs:
                if sq*i >= n: break
                sm+= nums[sq*i]
            ans = max(ans, sm)

        return ans
```
[https://leetcode.com/problems/maximum-element-sum-of-a-complete-subset-of-indices/submissions/1052736481/](http://)


I could be wrong, but I think that time complexity is *O*(*N*) and space complexity is *O*(*N*^2) / *O*(*N*log*N*), in which *N* ~ `len(nums)`.