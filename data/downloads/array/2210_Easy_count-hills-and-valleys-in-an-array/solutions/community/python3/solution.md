# Python Clean solution || Simple and easy

**Author:** tkohli
**Votes:** 73
**Link:** [https://leetcode.com/problems/count-hills-and-valleys-in-an-array/solutions/1866831/](https://leetcode.com/problems/count-hills-and-valleys-in-an-array/solutions/1866831/)

---

We start by taking a for loop which goes from 1 to length of array -1.
Since we cannot take 2 adjacent values such that nums[i] == nums[j]. 
So, we update the current value to previous value which will help us in counting the next hill or valley. 

Time complexity = O(n)
Space complexity = O(1)

```class Solution:
    def countHillValley(self, nums: List[int]) -> int:
        hillValley = 0
        for i in range(1, len(nums)-1):
            if nums[i] == nums[i+1]:
                nums[i] = nums[i-1]
            if nums[i] > nums[i-1] and nums[i] > nums[i+1]:     #hill check
                hillValley += 1
            if nums[i] < nums[i-1] and nums[i] < nums[i+1]:     #valley check
                hillValley += 1
        return hillValley
```