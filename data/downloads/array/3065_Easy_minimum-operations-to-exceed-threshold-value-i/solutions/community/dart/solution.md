# Dart 0ms

**Author:** Muhammed_Shebin
**Votes:** 0
**Link:** [https://leetcode.com/problems/minimum-operations-to-exceed-threshold-value-i/solutions/6079937/](https://leetcode.com/problems/minimum-operations-to-exceed-threshold-value-i/solutions/6079937/)

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
  int minOperations(List<int> nums, int k) {
    int count=0;
    for(int i=0;i<nums.length;i++){
        if(nums[i]<k)count++;
    }
    return count;
  }
}
```