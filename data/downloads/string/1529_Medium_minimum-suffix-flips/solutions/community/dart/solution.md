# Dart Solution

**Author:** Friendlygecko
**Votes:** 0
**Link:** [https://leetcode.com/problems/minimum-suffix-flips/solutions/5388775/](https://leetcode.com/problems/minimum-suffix-flips/solutions/5388775/)

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
  int minFlips(String target) {
    var prev = '0';
    var flips = 0;
    for (int i = 0; i < target.length; i++) {
        if (prev != target[i]) {
            flips++;
            prev = target[i];
        }
    }

    return flips;
  }
}
```