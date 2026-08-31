# the fastest

**Author:** ahmed___
**Votes:** 0
**Link:** [https://leetcode.com/problems/surface-area-of-3d-shapes/solutions/3883906/](https://leetcode.com/problems/surface-area-of-3d-shapes/solutions/3883906/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity:
O(n^2)
- Space complexity:
O(1)
# Code
```
class Solution {
 int surfaceArea(List<List<int>> grid) {
    int n = grid.length;
    int area = 0;

    for (int i = 0; i < n; i++) {
        for (int j = 0; j < n; j++) {
            if (grid[i][j] > 0) {
                area += (grid[i][j] * 4) + 2; // Contribution from top and bottom faces

                // Check adjacent cells and subtract common faces
                if (i > 0) {
                    area -= min(grid[i][j], grid[i - 1][j]) * 2;
                }
                if (j > 0) {
                    area -=min(grid[i][j], grid[i][j - 1]) * 2;
                }
            }
        }
    }

    return area;
}

}
```