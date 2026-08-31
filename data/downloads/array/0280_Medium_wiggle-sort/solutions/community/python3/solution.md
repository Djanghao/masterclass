# Python | Swapping | Logic

**Author:** al5861
**Votes:** 4
**Link:** [https://leetcode.com/problems/wiggle-sort/solutions/2885138/](https://leetcode.com/problems/wiggle-sort/solutions/2885138/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
- at odd index, it should be larger than previous value so if it's nums[i - 1] > nums[i], we perform swap. Previous numbers won't mess up since nums[i] < nums[i - 1] and nums[i - 1] <= nums[i - 2]
- similar reasoning

# Complexity
- Time complexity:$$O(n)$$
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity:$$O(1)$$ 
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
class Solution:
    def wiggleSort(self, nums: List[int]) -> None:
        #Do not return anything, modify nums in-place instead.
        
        for i in range(1,len(nums)):
            if ((i % 2 == 1 and nums[i] < nums[i - 1]) or 
                (i % 2 == 0 and nums[i] > nums[i - 1])):
                nums[i - 1],nums[i] = nums[i],nums[i - 1]
                
```