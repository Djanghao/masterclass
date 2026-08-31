# Dart Solution

**Author:** Friendlygecko
**Votes:** 0
**Link:** [https://leetcode.com/problems/neighboring-bitwise-xor/solutions/4933671/](https://leetcode.com/problems/neighboring-bitwise-xor/solutions/4933671/)

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
  bool doesValidArrayExist(List<int> derived) {
    final xor = derived.fold<int>(0, (a, b) => a ^ b);
    return xor == 0;
  }
}
```