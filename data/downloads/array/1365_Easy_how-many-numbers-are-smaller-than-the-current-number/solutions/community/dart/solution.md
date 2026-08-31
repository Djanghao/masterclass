# Simple and easy to understand solution in Dart

**Author:** nidha_nidh
**Votes:** 1
**Link:** [https://leetcode.com/problems/how-many-numbers-are-smaller-than-the-current-number/solutions/4765992/](https://leetcode.com/problems/how-many-numbers-are-smaller-than-the-current-number/solutions/4765992/)

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
    int count=0;
    
  List<int> smallerNumbersThanCurrent(List<int> nums) {
      List<int>f=[];
     
      for(int i=0;i<nums.length;i++){
         count=0;
          for(int j=0;j<nums.length;j++){
              if(nums[i]!=nums[j] && nums[i]>nums[j]){
                  count=count+1;
              }
              

          }
          f.add(count);
    
        
        
      }
      return f;
      
  }
}
```