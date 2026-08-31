# DFS Approach with comments

**Author:** benottoman
**Votes:** 0
**Link:** [https://leetcode.com/problems/pacific-atlantic-water-flow/solutions/4604687/](https://leetcode.com/problems/pacific-atlantic-water-flow/solutions/4604687/)

---

# Complexity
- Time complexity: O(m * n)
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: O(m * n)
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
class Solution {
  List<List<int>> pacificAtlantic(List<List<int>> heights) {
    final rows = heights.length;
    final cols = heights[0].length;

    final flowsToPac = <(int r, int c)>{};
    final flowsToAtl = <(int r, int c)>{};
    final flowsToBoth = <List<int>>[];

    void dfsFlowsToOcean(int r, int c, Set flowsTo, int prevHeight) {
      // Check we've already confirmed this cell flows to a particular ocean
      if (flowsTo.contains((r, c))) return;
      // Check out of bounds
      if (r < 0 || c < 0 || r >= rows || c >= cols) return;
      // Moving from outside edge inward so we want the next cell inward to be greater
      if (prevHeight > heights[r][c]) return;

      flowsTo.add((r, c));
      dfsFlowsToOcean(r + 1, c, flowsTo, heights[r][c]);  // Down
      dfsFlowsToOcean(r - 1, c, flowsTo, heights[r][c]);  // Up
      dfsFlowsToOcean(r, c + 1, flowsTo, heights[r][c]);  // Right
      dfsFlowsToOcean(r, c - 1, flowsTo, heights[r][c]);  // Left
    }

    for (int r = 0; r < rows; r++){
      // Start at left edge (touches Pac)
      dfsFlowsToOcean(r, 0, flowsToPac, -1);
      // Start at right edge (touches Atl)
      dfsFlowsToOcean(r, cols - 1, flowsToAtl, -1);
    }

    for (int c = 0; c < cols; c++) {
      // Start at top edge (touches Pac)
      dfsFlowsToOcean(0, c, flowsToPac, -1);
      // Start at bottom edge (touches Atl)
      dfsFlowsToOcean(rows - 1, c, flowsToAtl, -1);
    }

    // Check cell flows to both oceans
    for (final (int r, int c) in flowsToPac) {
      if (flowsToAtl.contains((r, c))) flowsToBoth.add([r, c]);
    }

    return flowsToBoth;
  }
}
```