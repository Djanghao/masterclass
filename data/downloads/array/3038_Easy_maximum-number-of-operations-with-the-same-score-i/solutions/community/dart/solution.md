# simple solution easy to underrstand

**Author:** subruZz
**Votes:** 0
**Link:** [https://leetcode.com/problems/maximum-number-of-operations-with-the-same-score-i/solutions/4875883/](https://leetcode.com/problems/maximum-number-of-operations-with-the-same-score-i/solutions/4875883/)

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
  int maxOperations(List<int> nums) {
   if(nums.length<2)return 0;
   int c=1;
   int sum=nums[0]+nums[1];
   for(int i=2;i<nums.length-1;i+=2){
   if(nums[i]+nums[i+1]==sum)c++;
   else break;
   }
  return c;
  }
}
```