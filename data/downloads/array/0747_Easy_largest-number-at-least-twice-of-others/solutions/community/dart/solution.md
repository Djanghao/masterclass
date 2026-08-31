# Simple solution

**Author:** AkobirTohirov
**Votes:** 0
**Link:** [https://leetcode.com/problems/largest-number-at-least-twice-of-others/solutions/5925030/](https://leetcode.com/problems/largest-number-at-least-twice-of-others/solutions/5925030/)

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
  int dominantIndex(List<int> nums) {
    int max1 = nums.reduce(max);
    int index = nums.indexOf(max1);
    nums.remove(max1);
    int max2 = nums.reduce(max);

    return (max1 >= 2 * max2) ? index : -1;
  }
}
```