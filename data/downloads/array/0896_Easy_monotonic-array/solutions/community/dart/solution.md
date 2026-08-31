# Dart solution using two functions

**Author:** Nissamudeen-VA
**Votes:** 1
**Link:** [https://leetcode.com/problems/monotonic-array/solutions/3925120/](https://leetcode.com/problems/monotonic-array/solutions/3925120/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
 
class Solution {
  bool isMonotonic(List<int> nums) {
      return isIncrease(nums) || isDecrease(nums);
  }

  bool isIncrease(List<int> nums){
      int first = nums[0];
      for(int i=1; i<nums.length; i++){
          if(nums[i]>=first){
              first = nums[i];
          }else{
              return false;
          }
      }
      return true;
  }

  bool isDecrease(List<int> nums){
      int first = nums[0];
      for(int i=1; i<nums.length; i++){
          if(nums[i]<=first){
              first = nums[i];
          }else{
              return false;
          }
      }
      return true;
  }
}
```