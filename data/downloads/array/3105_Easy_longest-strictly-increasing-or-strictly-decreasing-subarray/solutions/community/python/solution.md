# Java/Python Clean Solution | in linear Complexity

**Author:** Shree_Govind_Jee
**Votes:** 10
**Link:** [https://leetcode.com/problems/longest-strictly-increasing-or-strictly-decreasing-subarray/solutions/4985580/](https://leetcode.com/problems/longest-strictly-increasing-or-strictly-decreasing-subarray/solutions/4985580/)

---

# Complexity
- Time complexity:$$O(n)$$
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity:$$O(n)$$
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
**Java**
```
class Solution {
    public int longestMonotonicSubarray(int[] nums) {
        int inc = 1, dec =  1;
        int res = 1;
        for(int i = 1; i<nums.length; i++){
            if(nums[i]>nums[i-1]){
                inc+=1;
                dec=1;
            } else if(nums[i]<nums[i-1]){
                dec+=1;
                inc=1;
            } else{
                inc=1;
                dec = 1;
            }
            
            res = Math.max(res, Math.max(inc, dec));
        }
        return res;
    }
}
```
**Python**
```
class Solution:
    def longestMonotonicSubarray(self, nums: List[int]) -> int:
        if not nums:
            return 0
        
        increasing_length = 1
        decreasing_length = 1
        max_length = 1
        
        for i in range(1, len(nums)):
            if nums[i] > nums[i - 1]:
                increasing_length += 1
                decreasing_length = 1
            elif nums[i] < nums[i - 1]:
                decreasing_length += 1
                increasing_length = 1
            else:
                increasing_length = 1
                decreasing_length = 1
            
            max_length = max(max_length, increasing_length, decreasing_length)
        
        return max_length
```