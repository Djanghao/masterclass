# Dart...

**Author:** 0varun
**Votes:** 2
**Link:** [https://leetcode.com/problems/keep-multiplying-found-values-by-two/solutions/4352672/](https://leetcode.com/problems/keep-multiplying-found-values-by-two/solutions/4352672/)

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
  int findFinalValue(List<int> nums, int original) {
    while(nums.contains(original)) original *= 2;
    return original;
  }
}


```