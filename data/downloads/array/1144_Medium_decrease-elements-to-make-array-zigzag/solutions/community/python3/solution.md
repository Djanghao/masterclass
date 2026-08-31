# Python o(n) time O(1) memory - with explanation

**Author:** D3GAN
**Votes:** 5
**Link:** [https://leetcode.com/problems/decrease-elements-to-make-array-zigzag/solutions/368490/](https://leetcode.com/problems/decrease-elements-to-make-array-zigzag/solutions/368490/)

---

There are two possible ways the array can satisfy the zigzag requirement: 1: start with a zig (increasing) 2. start with zag (decreasing). There is a loop which goes through the whole list of numbers, in each step we keep track of the number of subtractions needed to satisfy the requiremnets for both possible ways mentioned before. We also keep track of the last modified number. O(n) time and O(1) Memory.
```
class Solution(object):
    def movesToMakeZigzag(self, nums):
        """
        :type nums: List[int]
        :rtype: int
        """
        
        zig, zag = 0, 0
        prev_zig, prev_zag = nums[0], nums[0]
        
        for i in range(1, len(nums)):
            if i % 2 == 0:
                zig += max(0, prev_zig - nums[i] + 1)
                prev_zig = nums[i] 
                zag += max(0, nums[i] - prev_zag + 1)
                prev_zag = nums[i] - max(0, nums[i] - prev_zag + 1)
            else:
                zag += max(0, prev_zag - nums[i] + 1)
                prev_zag = nums[i]
                zig += max(0, nums[i] - prev_zig + 1)
                prev_zig = nums[i] - max(0, nums[i] - prev_zig + 1)
        
        return min(zig, zag)
```
