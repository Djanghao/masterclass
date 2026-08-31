# 🔥🔥🔥BEATS 98% | NO SORTING O(N) ALG | PYTHON 🔥🔥🔥

**Author:** akashkaukuntla1224
**Votes:** 8
**Link:** [https://leetcode.com/problems/array-with-elements-not-equal-to-average-of-neighbors/solutions/5531335/](https://leetcode.com/problems/array-with-elements-not-equal-to-average-of-neighbors/solutions/5531335/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. --> At first, I thought about just iterating through the array and break ties as I see them, but then I realized all I need to do is for any length three subarray, I need to prevent it from being sorted (the middle value element cannot be in the middle of that length three array).

# Approach
<!-- Describe your approach to solving the problem. --> My approach is to iterate through the array and as I see length three subarrays that are sorted, I break their sortedness by swapping the middle element with the right element. This way, I can keep "pushing" the sortedness down the array till the end in the worst case (this doesn't matter because the array is not circular).

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ --> O(n) - One pass through the array.
#
- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ --> O(1) - Uses Array In-Place Swapping

# Code
```
class Solution:
    def rearrangeArray(self, nums: List[int]) -> List[int]:
        for i in range(1, len(nums) - 1):
            if ((nums[i-1] < nums[i] and nums[i] < nums[i+1]) 
            or  (nums[i-1] > nums[i] and nums[i] > nums[i+1])):
                nums[i], nums[i+1] = nums[i+1], nums[i]
        return nums
        
```

![image_2024-07-24_223446572.png](./images/0.png)
