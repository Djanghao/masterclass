# Easy Approach

**Author:** jincykp
**Votes:** 0
**Link:** [https://leetcode.com/problems/neither-minimum-nor-maximum/solutions/5983296/](https://leetcode.com/problems/neither-minimum-nor-maximum/solutions/5983296/)

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
```dart []
class Solution {
  int findNonMinOrMax(List<int> nums) {
   nums.sort();
   if(nums.length>2){
    return nums[1];
   } else{
    return -1;
   }
  }
}
```