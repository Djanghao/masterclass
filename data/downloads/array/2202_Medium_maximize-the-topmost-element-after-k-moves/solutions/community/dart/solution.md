# Dart Solution

**Author:** tashtanov333
**Votes:** 0
**Link:** [https://leetcode.com/problems/maximize-the-topmost-element-after-k-moves/solutions/3439524/](https://leetcode.com/problems/maximize-the-topmost-element-after-k-moves/solutions/3439524/)

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
  int maximumTop(List<int> nums, int k) {
    if(nums.length==1&& k%2==1)return -1;
    int max=0;
    for(int i=0;i<k-1&&i<nums.length;i++){
        max=max>nums[i]?max:nums[i];
    }
    if(k<nums.length){
        max=max>nums[k]?max:nums[k];
    }
     
      return max;
  }
}
```