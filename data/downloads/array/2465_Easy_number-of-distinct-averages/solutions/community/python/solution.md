# Python 3   ||   3 lines, w/ example   ||   T/S: 99% / 95%

**Author:** Spaulding_
**Votes:** 12
**Link:** [https://leetcode.com/problems/number-of-distinct-averages/solutions/2807778/](https://leetcode.com/problems/number-of-distinct-averages/solutions/2807778/)

---

This problem is equivalent to finding the number of distinct pair-sums, which we do in the code below.
```
class Solution:                                                 
    def distinctAverages(self, nums: List[int]) -> int:
                                                #   Ex: nums = [4,1,4,0,3,5]
        nums.sort()                             #   nums = [0,1,3,4,4,5]
                                                #        i: 0 1 2 3 4 5

        n = len(nums)                           #   ans = len({0+5,1+4,3+4})
                                                #       = len({5,5,7})
        return len({nums[i]+nums[n-i-1] 
                        for i in range(n//2)})  #       = len({5,7}) = 2 <-- answer
```
[https://leetcode.com/problems/number-of-distinct-averages/submissions/1290388395/](https://leetcode.com/problems/number-of-distinct-averages/submissions/1290388395/)

I could be wrong, but I think that time complexity is *O*(*N* log *N*) and space complexity is *O*(*N*), in which *N* ~ `len(nums)`.
