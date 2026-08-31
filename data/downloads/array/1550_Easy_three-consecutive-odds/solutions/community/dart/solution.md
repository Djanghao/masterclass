# simple one !

**Author:** Alto-b
**Votes:** 1
**Link:** [https://leetcode.com/problems/three-consecutive-odds/solutions/4432123/](https://leetcode.com/problems/three-consecutive-odds/solutions/4432123/)

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
  bool threeConsecutiveOdds(List<int> arr) {
    for (int i = 0; i <= arr.length - 3; i++) {
      if (arr[i] % 2 != 0 && arr[i + 1] % 2 != 0 && arr[i + 2] % 2 != 0) {
        return true;
      }
    }
    return false;
  }
}

```