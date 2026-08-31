# Dart Solution

**Author:** Friendlygecko
**Votes:** 0
**Link:** [https://leetcode.com/problems/triples-with-bitwise-and-equal-to-zero/solutions/5003895/](https://leetcode.com/problems/triples-with-bitwise-and-equal-to-zero/solutions/5003895/)

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
    int countTriplets(List<int> nums) {
        Map<int, int> m = {};
        var total = 0;
        for (int i = 0; i < nums.length; i++) {
            for (int j = 0; j < nums.length; j++) {
                final total = nums[i] & nums[j];
                m[total] = (m[total] ?? 0) + 1;
            }
        }

        for (int i = 0; i < nums.length; i++) {
            for (final entry in m.entries) {
                final key = entry.key;
                final value = entry.value;
                if (nums[i] & key == 0) {
                    total += value;
                }
            }
        }

        return total;
    }
}
```