# simple dart solution

**Author:** Shaham_Ahammed
**Votes:** 0
**Link:** [https://leetcode.com/problems/check-if-array-is-good/solutions/5069719/](https://leetcode.com/problems/check-if-array-is-good/solutions/5069719/)

---



# Code
```
class Solution {
  bool isGood(List<int> nums) {
  nums.sort();
  for(int i=0;i<nums.length-2;i++){
    if(nums[i]!=(i+1)){
         
        return false;
    }
  }
  int i=nums.length;
  if(nums[i-1] !=(nums.length-1) || nums[i-2]!=(nums.length-1)){
  
    return false;
  }

  return true;
  }
}
```