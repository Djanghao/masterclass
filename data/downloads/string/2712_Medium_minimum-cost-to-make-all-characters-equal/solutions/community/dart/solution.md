# Dart Solution

**Author:** Friendlygecko
**Votes:** 0
**Link:** [https://leetcode.com/problems/minimum-cost-to-make-all-characters-equal/solutions/4300113/](https://leetcode.com/problems/minimum-cost-to-make-all-characters-equal/solutions/4300113/)

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
  int minimumCost(String s) {
    var res = 0;
    final size = s.split('').length;
    for (int i = 0; i < size - 1; i++) {
        if (s[i] != s[i + 1]) {
            res += min(i + 1, size - i - 1);
        }
    }

    return res;
  }
}
```

```
class Solution {
  int minimumCost(String s) {
    var res = 0;
    final size = s.split('').length;
    for (int i = 1; i < size; i++) {
        if (s[i] != s[i - 1]) {
            res += min(i, size - i);
        }
    }

    return res;
  }
}
```