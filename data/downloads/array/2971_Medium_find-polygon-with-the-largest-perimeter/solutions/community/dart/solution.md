# Dart Solution

**Author:** Friendlygecko
**Votes:** 0
**Link:** [https://leetcode.com/problems/find-polygon-with-the-largest-perimeter/solutions/5409781/](https://leetcode.com/problems/find-polygon-with-the-largest-perimeter/solutions/5409781/)

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
  int largestPerimeter(List<int> nums) {
    nums.sort();
    List<int> prefix = List.filled(nums.length, 0);
    prefix[0] = nums[0];
    for (int i = 1; i < nums.length; i++) {
        prefix[i] = nums[i] + prefix[i - 1];
    }

    var maximum = -1;
    for (int i = 2; i < nums.length; i++) {
        if (nums[i] < prefix[i - 1]) {
            maximum = prefix[i];
        }
    }

    return maximum;
  }
}
```