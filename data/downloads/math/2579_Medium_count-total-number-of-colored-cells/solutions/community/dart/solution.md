# O(1) Easy solution

**Author:** Caypoh23
**Votes:** 0
**Link:** [https://leetcode.com/problems/count-total-number-of-colored-cells/solutions/5649132/](https://leetcode.com/problems/count-total-number-of-colored-cells/solutions/5649132/)

---

# Complexity
- Time complexity: O(1)
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: O(1)
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
class Solution {
  int coloredCells(int n) {
    return 2 * n * (n - 1) + 1;
  }
}
```