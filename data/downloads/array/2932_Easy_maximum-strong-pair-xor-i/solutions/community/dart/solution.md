# simple solution

**Author:** subruZz
**Votes:** 0
**Link:** [https://leetcode.com/problems/maximum-strong-pair-xor-i/solutions/4806429/](https://leetcode.com/problems/maximum-strong-pair-xor-i/solutions/4806429/)

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
  int maximumStrongPairXor(List<int> nums) {
      int sum=0;
       for(int i=0;i<nums.length;i++){
        int currentSum=0;
        for(int j=i;j<nums.length;j++){
        if((nums[i]-nums[j]).abs()<=min(nums[i],nums[j])){
    

            currentSum=nums[i]^nums[j];
        sum=currentSum>sum?currentSum:sum;
        }
    }
   
    }
    return sum;
  }
}
```