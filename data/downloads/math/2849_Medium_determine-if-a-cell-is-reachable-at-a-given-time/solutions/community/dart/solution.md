# Greedy solution

**Author:** congenial
**Votes:** 0
**Link:** [https://leetcode.com/problems/determine-if-a-cell-is-reachable-at-a-given-time/solutions/4262693/](https://leetcode.com/problems/determine-if-a-cell-is-reachable-at-a-given-time/solutions/4262693/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity: $$O(1)$$
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: $$O(1)$$
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
class Solution {
  bool isReachableAtTime(int sx, int sy, int fx, int fy, int t) {
    if (sx == fx && sy == fy) return t!=1;
    return max((sx-fx).abs(), (sy-fy).abs())<=t;
  }
}
```