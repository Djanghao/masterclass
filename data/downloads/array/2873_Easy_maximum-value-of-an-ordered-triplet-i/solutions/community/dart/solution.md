# easy to understand but uses 3 for loops

**Author:** subruZz
**Votes:** 0
**Link:** [https://leetcode.com/problems/maximum-value-of-an-ordered-triplet-i/solutions/4805108/](https://leetcode.com/problems/maximum-value-of-an-ordered-triplet-i/solutions/4805108/)

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
  int maximumTripletValue(List<int> nums) {
      int sum=0;
   for(int i=0;i<nums.length-2;i++){
       int currentSum=0;
       for(int j=i+1;j<nums.length-1;j++){
       for(int k=j+1;k<nums.length;k++){
        currentSum=(nums[i]-nums[j])*nums[k];
        sum=currentSum>sum?currentSum:sum;
   } 
   } 
   } 
   return sum;
  }
}
```