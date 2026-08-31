# Simple & easy to read DFS solution in Dart

**Author:** adithya_suresh_lc
**Votes:** 0
**Link:** [https://leetcode.com/problems/max-area-of-island/solutions/4472805/](https://leetcode.com/problems/max-area-of-island/solutions/4472805/)

---

# Code
```
class Solution {
    static const offsets = [
        [-1, 0],
        [0, -1,],
        [1, 0,],
        [0, 1],
    ];

    int maxAreaOfIsland(List<List<int>> grid) {
        var result = 0;
        for(var i = 0; i < grid.length; ++i) {
            final rl = grid[i].length;
            for(var j = 0; j < rl; ++j) {
                if(grid[i][j] == 1) {
                    result = max(result, findArea(grid, i, j));
                }
            }
        }
        return result;
    }

    bool isValidOffset(int i, int l) {
        return 0 <= i && i < l;
    }

    List<List<int>> getValidOffsets(int i, int j, List<List<int>> grid) {
        return offsets.where(
            (e) {
                return isValidOffset(i + e[0], grid.length) && isValidOffset(j + e[1], grid[0].length);
            },
        ).toList();
    }

    int findArea(List<List<int>> grid, int i, int j) {
        grid[i][j] = 2;
        final offsets = getValidOffsets(i, j, grid);
        var result = 1;
        for(final offset in offsets) {
            final a = i + offset[0];
            final b = j + offset[1];
            if(grid[a][b] == 1) {
                result += findArea(grid, a, b);
            }
        }
        return result;
    }
}

```