# Dart Solution

**Author:** Friendlygecko
**Votes:** 0
**Link:** [https://leetcode.com/problems/shortest-subarray-with-or-at-least-k-i/solutions/4952988/](https://leetcode.com/problems/shortest-subarray-with-or-at-least-k-i/solutions/4952988/)

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
    int minimumSubarrayLength(List<int> nums, int k) {
        var minimumDistance = 10000000;
        for (int i = 0; i < nums.length; i++) {
            for (int j = i; j < nums.length; j++) {
                final sub = nums.sublist(i, j + 1);
                final totalOr = sub.fold<int>(0, (a,b) => a | b);
                if (totalOr >= k) {
                    minimumDistance = min(minimumDistance, (j - i + 1));
                }
            }
        }

        return minimumDistance == 10000000 ? -1 : minimumDistance;
    }
}
```