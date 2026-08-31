# Python 3   ||   6 lines,  pairwise   ||   T/S: 89% / 72%

**Author:** Spaulding_
**Votes:** 17
**Link:** [https://leetcode.com/problems/smallest-missing-integer-greater-than-sequential-prefix-sum/solutions/4519444/](https://leetcode.com/problems/smallest-missing-integer-greater-than-sequential-prefix-sum/solutions/4519444/)

---

A slight variation on the standard posted solution.
```
class Solution:
    def missingInteger(self, nums: List[int]) -> int:
        
        ans = nums[0]

        for n1, n2 in pairwise(nums):

            if n2 - n1 == 1:  ans+= n2
            else: break
        
        while ans in nums:  ans+= 1

        return ans
```
[https://leetcode.com/problems/smallest-missing-integer-greater-than-sequential-prefix-sum/submissions/1148321208/](http://)



I could be wrong, but I think that time complexity is *O*(*N*) and space complexity is *O*(1), in which *N* ~ `len(nums)`.
```