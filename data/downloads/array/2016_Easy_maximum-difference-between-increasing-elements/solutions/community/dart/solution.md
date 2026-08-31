# Dart

**Author:** Muhammed_Shebin
**Votes:** 0
**Link:** [https://leetcode.com/problems/maximum-difference-between-increasing-elements/solutions/6049835/](https://leetcode.com/problems/maximum-difference-between-increasing-elements/solutions/6049835/)

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
  int maximumDifference(List<int> nums) {
   int number= -1;
   for(int i=0;i < nums.length;i++){
    for(int j=0;j < nums.length;j++){
        if(nums[i] < nums[j] && i<j){
            if(number < nums[j] - nums[i])
            number = nums[j] - nums[i];
        }
    }
   } 
   return number;
  }
}
```