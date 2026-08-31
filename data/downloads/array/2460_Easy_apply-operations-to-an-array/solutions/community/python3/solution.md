# Python 3   ||   6 lines, iteration  ||   T/S: 99% /  52%

**Author:** Spaulding_
**Votes:** 10
**Link:** [https://leetcode.com/problems/apply-operations-to-an-array/solutions/2784066/](https://leetcode.com/problems/apply-operations-to-an-array/solutions/2784066/)

---

```
class Solution:
    def applyOperations(self, nums: List[int]) -> List[int]:

        for i in range(len(nums)-1):
            if nums[i] == nums[i+1]:
                nums[i]*= 2
                nums[i + 1] = 0   # <-- performing the "operation."  
      
        nums.sort(key=lambda x: x == 0)   # Sorting on a boolean key: False, then True
        
        return nums 
```
[https://leetcode.com/problems/apply-operations-to-an-array/submissions/1166861606/?submissionId=1166861050)

I could be wrong, but I think that time complexity is *O*(*N* log *N*) and space complexity is *O*(1), in which *N* ~ `len(nums)`.