# C#, O(mn * min(m,n)) DP solution, beats 100%

**Author:** edevyatkin
**Votes:** 2
**Link:** [https://leetcode.com/problems/largest-1-bordered-square/solutions/1099472/](https://leetcode.com/problems/largest-1-bordered-square/solutions/1099472/)

---

```
public class Solution {
    public int Largest1BorderedSquare(int[][] grid) {
        int height = grid.Length;
        int width = grid[0].Length;
        int border = 0;
        var dp = new (int Left, int Top)[height+1][];
        for (int row = 0; row <= height; row++)
            dp[row] = new (int Left, int Top)[width+1];
        for (int i = 1; i <= height; i++) {
            for (int j = 1; j <= width; j++) {
                if (grid[i-1][j-1] == 0)
                    continue;
                border = Math.Max(border, 1);
                int left = dp[i][j-1].Left;
                int top = dp[i-1][j].Top;
                int corner = Math.Min(left, top);
                while (corner > 0) {
                    if (Math.Min(dp[i-corner][j].Left, dp[i][j-corner].Top) >= corner+1) {
                        border = Math.Max(border, corner+1);
                        break;
                    }
                    corner--;
                }
                dp[i][j].Left = left + 1;
                dp[i][j].Top = top + 1;
            }
        }
        
        return border*border;
    }
}
```