# Dart Solution

**Author:** Friendlygecko
**Votes:** 0
**Link:** [https://leetcode.com/problems/maximum-sum-of-an-hourglass/solutions/4330744/](https://leetcode.com/problems/maximum-sum-of-an-hourglass/solutions/4330744/)

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
  int maxSum(List<List<int>> grid) {
    var res = 0;

    for (int i = 0; i < grid.length - 2; i++) {
        for (int j = 1; j < grid[0].length - 1; j++) {
            final topLeft = grid[i][j - 1];
            final topMid = grid[i][j];
            final topRight = grid[i][j + 1];
            final mid = grid[i + 1][j];
            final bottomLeft = grid[i + 2][j - 1];
            final bottomMid = grid[i + 2][j];
            final bottomRight = grid[i + 2][j + 1];
            final sum = topLeft + topMid + topRight + mid + bottomLeft + bottomMid + bottomRight;
            res = max(sum, res);
        }
    }

    return res;
  }
}
```