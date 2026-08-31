# inequlity theorum of sides problem

**Author:** badusha_p
**Votes:** 0
**Link:** [https://leetcode.com/problems/type-of-triangle/solutions/6025229/](https://leetcode.com/problems/type-of-triangle/solutions/6025229/)

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
  String triangleType(List<int> nums) {
    List<String> triangle = ["equilateral", "isosceles", "scalene", "none"];
    if (nums[0] + nums[1] <= nums[2] || nums[1] + nums[2] <= nums[0] || nums[0] + nums[2] <= nums[1]) {
      return triangle[3];
    }
    if (nums[0] == nums[1] && nums[1] == nums[2]) {
      return triangle[0]; 
    } else if (nums[0] == nums[1] || nums[1] == nums[2] || nums[0] == nums[2]) {
      return triangle[1];
    } else {
      return triangle[2]; 
    }
  }
}


```