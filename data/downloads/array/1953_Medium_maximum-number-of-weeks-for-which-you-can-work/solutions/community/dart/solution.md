# Flag

**Author:** kapitan-karablya
**Votes:** 0
**Link:** [https://leetcode.com/problems/maximum-number-of-weeks-for-which-you-can-work/solutions/4879560/](https://leetcode.com/problems/maximum-number-of-weeks-for-which-you-can-work/solutions/4879560/)

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
import 'dart:math';

class Solution {
  int numberOfWeeks(List<int> milestones) {
    int sum = milestones.reduce((acc, value) => acc + value);
    int maxVal = milestones.reduce(max);
    int rest = sum - maxVal;
    return (maxVal > rest) ? rest * 2 + 1 : sum;
  }
}
```