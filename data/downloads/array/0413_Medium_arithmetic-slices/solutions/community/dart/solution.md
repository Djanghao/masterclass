# Beats 100% || Dart Solution

**Author:** abhishekvallecha20
**Votes:** 3
**Link:** [https://leetcode.com/problems/arithmetic-slices/solutions/3326114/](https://leetcode.com/problems/arithmetic-slices/solutions/3326114/)

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
  int numberOfArithmeticSlices(List<int> nums) {
      int sum = 0;
      int slice = 0;
      for(int i = 2;i<nums.length;i+=1){
          if(nums[i-2]-nums[i-1]==nums[i-1]-nums[i]){
              sum+=1;
              slice+=sum;    
          }
          else sum = 0;
      }
      return slice;
  }
}
```