# TS Solution

**Author:** ahmedhhamdy
**Votes:** 0
**Link:** [https://leetcode.com/problems/projection-area-of-3d-shapes/solutions/5827126/](https://leetcode.com/problems/projection-area-of-3d-shapes/solutions/5827126/)

---

Count non-zero cells for the top view.
Find the maximum value for the row (side view).
Find the maximum value for the corresponding column (front view).
# Complexity
- Time complexity: 57ms
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: 51.98MB
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```typescript []
function projectionArea(grid: number[][]): number {
  let topView = 0;
  let frontView = 0;
  let sideView = 0;

  for (let i = 0; i < grid.length; i++) {
    let maxRow = 0;
    let maxCol = 0;

    for (let j = 0; j < grid[i].length; j++) {
      if (grid[i][j] > 0) {
        topView++;
      }

      maxRow = Math.max(maxRow, grid[i][j]);
      maxCol = Math.max(maxCol, grid[j][i]);
    }

    sideView += maxRow;
    frontView += maxCol;
  }
  return topView + frontView + sideView;
}
```