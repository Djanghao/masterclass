# Python 3   ||   2 lines,  w/ explanation   ||   T/S: 93% / 98%

**Author:** Spaulding_
**Votes:** 11
**Link:** [https://leetcode.com/problems/find-the-value-of-the-partition/solutions/3651210/](https://leetcode.com/problems/find-the-value-of-the-partition/solutions/3651210/)

---

Here's the plan:

- We sort the array to find the minimum difference between adjacent elements.

- We calculate the minimum difference between adjacent elements in the sorted nums array using a generator expression.
- We find the least difference, which represents the minimum absolute difference between the maximum element of `nums1 `and the minimum element of `nums2`.
- We return the  minimum difference aas the answer to the problem. 
```
class Solution:
    def findValueOfPartition(self, nums: List[int]) -> int:
        
        nums.sort()

        return min(nums[i] - nums[i-1] for i in range(1,len(nums)))
```
[https://leetcode.com/problems/find-the-value-of-the-partition/submissions/1297175458/](https://leetcode.com/problems/find-the-value-of-the-partition/submissions/1297175458/)

I could be wrong, but I think that time complexity is *O*(*N* log *N*) and space complexity is *O*(1), in which *N* ~`len(nums)`.