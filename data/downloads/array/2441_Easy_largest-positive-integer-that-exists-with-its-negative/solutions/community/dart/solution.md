# Easy Approach !

**Author:** jasijasu959
**Votes:** 2
**Link:** [https://leetcode.com/problems/largest-positive-integer-that-exists-with-its-negative/solutions/5099532/](https://leetcode.com/problems/largest-positive-integer-that-exists-with-its-negative/solutions/5099532/)

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
  int findMaxK(List<int> nums) {
    nums.sort();
    for(int i=nums.length-1 ; i>=0 ; i--){
        if(nums[i]>0 && nums.contains(-nums[i])){
            return nums[i];  
        }else if(nums[i]<0){
            return -1;
        }
    }
    return -1;
  }
}
```