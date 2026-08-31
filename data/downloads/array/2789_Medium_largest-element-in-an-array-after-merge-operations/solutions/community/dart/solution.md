# Dart Solution Runtime 375ms

**Author:** aswanth_ds_
**Votes:** 0
**Link:** [https://leetcode.com/problems/largest-element-in-an-array-after-merge-operations/solutions/4177232/](https://leetcode.com/problems/largest-element-in-an-array-after-merge-operations/solutions/4177232/)

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
  int maxArrayValue(List<int> nums) { 
      int n = nums.length;
      int nthvalue = nums[n -1];
      for( int i = n- 2 ; i >=0  ; i--){
           if(nums[i] <= nthvalue){
               nthvalue += nums[i];
           }else{
               nthvalue = nums[i];
           }
      }
      return nthvalue;
  }
}
```