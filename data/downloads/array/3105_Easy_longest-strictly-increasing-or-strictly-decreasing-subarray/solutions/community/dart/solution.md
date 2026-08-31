# Longest Strictly Increasing or Strictly Decreasing Subarray

**Author:** engthanoon1
**Votes:** 0
**Link:** [https://leetcode.com/problems/longest-strictly-increasing-or-strictly-decreasing-subarray/solutions/4996728/](https://leetcode.com/problems/longest-strictly-increasing-or-strictly-decreasing-subarray/solutions/4996728/)

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
 longestMonotonicSubarray(List<int> nums) {
    int maxest_length=0; 
    int a_max_length=1;
    int b_max_length=1;
    int t=nums[0];
    for (int n in nums){
      
        if (n>t)
        {
          a_max_length++;
          b_max_length=1;
       
        }
      
        else if (n<t)
        {
         b_max_length++;
         a_max_length=1;
        }
      else{
         a_max_length=1;
         b_max_length=1;
      }
       t=n;
      if (a_max_length>maxest_length)maxest_length=a_max_length;
      if (b_max_length > maxest_length)maxest_length=b_max_length;
      
      
    }
   return maxest_length;
}
}
```