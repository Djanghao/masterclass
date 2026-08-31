# [C#} No BFS/DFS required. Single pass 100%.

**Author:** laprade
**Votes:** 1
**Link:** [https://leetcode.com/problems/check-if-there-is-a-valid-path-in-a-grid/solutions/548414/](https://leetcode.com/problems/check-if-there-is-a-valid-path-in-a-grid/solutions/548414/)

---

Proof
-
![image](./images/0.png)

Reasoning
-
We don't actually need to handle branching paths. There's always only one direction the road can lead from our current location. The only exception is if we start on Road Type 4, in which case we can go Right or Down, so we use a boolean to retry exactly one time in that case.

The algorithm is straightforward. Given our current direction and the type of tile in front of us, we know what our new direction will be.

Algorithm
-
```
public class Solution {
    private static readonly int[] starters = {-1, 1, 3, 3, 1, -1, 1};
    private static readonly int[,] transformer = {{-1,-1,-1,-1},{0,1,-1,-1},{-1,-1,2,3},{-1,3,0,-1},{3,-1,1,-1},{-1,2,-1,0},{2,-1,-1,1}};
    public bool HasValidPath(int[][] grid, bool secondTry = false) {
        var row = 0;
        var col = 0;
        var rowTarget = grid.Length - 1;
        var colTarget = grid[0].Length - 1;
        var streetType = grid[row][col];
        var finalTry = streetType != 4 || secondTry;
        var direction = secondTry ? 3 : starters[streetType];
        while (direction != -1) {
            if (row == rowTarget && col == colTarget) return true;
            bool done = true;
            switch (direction) {
                case 0: // Left
                    done = col-- == 0;
                    break;
                case 1: // Right
                    done = col++ == colTarget;
                    break;
                case 2: // Up
                    done = row-- == 0;
                    break;
                case 3: // Down
                    done = row++ == rowTarget;
                    break;
            }
            if (done) break;
            streetType = grid[row][col];
            direction = transformer[streetType,direction];
        }
        return finalTry ? false : HasValidPath(grid, true);
    }
}
```