# Dart Solution

**Author:** Friendlygecko
**Votes:** 0
**Link:** [https://leetcode.com/problems/minimum-impossible-or/solutions/4954260/](https://leetcode.com/problems/minimum-impossible-or/solutions/4954260/)

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
    int minImpossibleOR(List<int> nums) {
        final List<int> powers = List.generate(32, (i) => 1 << i);
        for (final p in powers) {
            if (!nums.contains(p)) {
                return p;
            }
        }

        return -1;
    }
}
```