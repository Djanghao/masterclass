# JAVA || Clean & Concise & Optimal code || 2ms Time || 100% Faster Solution

**Author:** anii_agrawal
**Votes:** 16
**Link:** [https://leetcode.com/problems/count-servers-that-communicate/solutions/1245787/](https://leetcode.com/problems/count-servers-that-communicate/solutions/1245787/)

---

```
class Solution {
    public int countServers(int[][] grid) {
        
        int rows = grid.length;
        int cols = rows == 0 ? 0 : grid[0].length;
        int servers = 0;
        int[] countServersInRow = new int[rows];
        int[] countServersInCol = new int[cols];
        
        for (int row = 0; row < rows; row++) {
            for (int col = 0; col < cols; col++) {
                if (grid[row][col] == 1) {
                    ++countServersInRow[row];
                    ++countServersInCol[col];
                }
            }
        }
        
        for (int row = 0; row < rows; row++) {
            for (int col = 0; col < cols; col++) {
                if (grid[row][col] == 1 && (countServersInRow[row] > 1 || countServersInCol[col] > 1)) {
                    ++servers;
                }
            }
        }
        
        return servers;
    }
}
```

Please help to **UPVOTE** if this post is useful for you.
If you have any questions, feel free to comment below.

**LOVE CODING :)
HAPPY CODING :)
HAPPY LEARNING :)**