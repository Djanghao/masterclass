# Super Simple

**Author:** aseemkv66
**Votes:** 1
**Link:** [https://leetcode.com/problems/sort-array-by-parity/solutions/4496135/](https://leetcode.com/problems/sort-array-by-parity/solutions/4496135/)

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
  List<int> sortArrayByParity(List<int> nums) {
   List<int> res = [];
   for(int i=0; i<nums.length; i++){
       if(nums[i].isEven){
           res.add(nums[i]);
       }
   }
   for(int j=0; j<nums.length; j++){
       if(nums[j].isOdd){
           res.add(nums[j]);
       }
   }
   return res;
  }
}
```