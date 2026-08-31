# Simple solution on Dart

**Author:** _DREDD_
**Votes:** 0
**Link:** [https://leetcode.com/problems/maximum-consecutive-floors-without-special-floors/solutions/5833525/](https://leetcode.com/problems/maximum-consecutive-floors-without-special-floors/solutions/5833525/)

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
  int maxConsecutive(int bottom, int top, List<int> special) {
    special.sort();

    int ans = max(0, special.first - bottom);
    int countTopFloor = top - special[special.length - 1];

    for (int i = 1; i < special.length; i++) {
        ans = max(ans, special[i] - special[i - 1] - 1);
    }

    return ans > countTopFloor ? ans : countTopFloor;
  }
}
```