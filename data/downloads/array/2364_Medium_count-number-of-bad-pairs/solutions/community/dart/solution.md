# Dart Solution

**Author:** Friendlygecko
**Votes:** 0
**Link:** [https://leetcode.com/problems/count-number-of-bad-pairs/solutions/4383843/](https://leetcode.com/problems/count-number-of-bad-pairs/solutions/4383843/)

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
  int countBadPairs(List<int> nums) {
    final size = nums.length;
    Map<int, int> m = {};
    final totalPairs = (size * (size - 1)) ~/ 2;
    for (int i = 0; i < size; i++) {
        final diff = nums[i] - i;
        if (!m.containsKey(diff)) {
            m[diff] = 1;
        } else {
            m[diff] = m[diff]! + 1;
        }
    }
    var c = 0;
    for (final entry in m.entries) {
        if (entry.value > 1) {
            c += ((entry.value * (entry.value - 1)) ~/ 2);
        }
    }
    return totalPairs - c;
  }
}
```