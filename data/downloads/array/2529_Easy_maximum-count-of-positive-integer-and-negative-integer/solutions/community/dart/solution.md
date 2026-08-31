# Iam the king check my solution

**Author:** jaseemca
**Votes:** 1
**Link:** [https://leetcode.com/problems/maximum-count-of-positive-integer-and-negative-integer/solutions/5070647/](https://leetcode.com/problems/maximum-count-of-positive-integer-and-negative-integer/solutions/5070647/)

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
  int maximumCount(List<int> nums) {
    int greater=0;
    int lower=0;
    
for(int i=0;i<nums.length;i++){
  if(nums[i]<0){
    lower++;

  }else if(nums[i]>0){
    greater++;
  }

}
if(greater>lower){
    return greater;
   }
   return lower;

  }
}
```