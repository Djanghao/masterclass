# Check the Length

**Author:** 2Math0
**Votes:** 0
**Link:** [https://leetcode.com/problems/optimal-division/solutions/5285265/](https://leetcode.com/problems/optimal-division/solutions/5285265/)

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
String optimalDivision(List<int> nums) {
  if (nums.length == 1) {
    return nums[0].toString();
  } else if (nums.length == 2) {
    return '${nums[0]}/${nums[1]}';
  } else {
    String result = '${nums[0]}/(';
    for (int i = 1; i < nums.length; i++) {
      result += '${nums[i]}/';
    }
    result = result.substring(0, result.length - 1); // Remove the last '/'
    result += ')';
    return result;
  }
}
}
```