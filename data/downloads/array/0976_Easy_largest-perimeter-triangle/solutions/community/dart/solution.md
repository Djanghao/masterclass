# BEATS 100% DART solution

**Author:** Mohamed_Sadeck
**Votes:** 2
**Link:** [https://leetcode.com/problems/largest-perimeter-triangle/solutions/5044747/](https://leetcode.com/problems/largest-perimeter-triangle/solutions/5044747/)

---

# Code
```
class Solution {
  int largestPerimeter(List<int> nums) {
    nums.sort();
    int i=nums.length-1;
    while(i>1){
        if(nums[i]<nums[i-1]+nums[i-2]) return nums[i]+nums[i-1]+nums[i-2];
        i--;
    }
    return 0;
  }
}
```