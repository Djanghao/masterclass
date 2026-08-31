# ✅Recursion✅ || Brute Force || C++ || Java

**Author:** AnishKrSingh
**Votes:** 87
**Link:** [https://leetcode.com/problems/minimum-moves-to-spread-stones-over-grid/solutions/4024629/](https://leetcode.com/problems/minimum-moves-to-spread-stones-over-grid/solutions/4024629/)

---

# Intuition 
**``` Since the constraints are very less we can apply recursion here.```**
# Approach
**```Each time we encounter a cell with grid[i][j] == 0 then we can take 1 from any of the other 8 cells which have a value > 1```**

# Complexity
**- Time complexity:**
**```The maximum depth of recursion is O(n^2).
The maximum depth of recursion is O(n\xB2). For each recursive call, there are up to 8 possible moves for each empty cell. Therefore, the overall time complexity is O(8^(n\xB2)) in the worst case. ```**

**Therefore, the overall time complexity is O(8^(n\xB2)).**

**- Space complexity:**
**```The space complexity is O(D), where D is the maximum depth of the recursion ```**

# Code (C++)
```
class Solution {
public:
    int minimumMoves(vector<vector<int>>& grid) {
        // Base Case
        int t = 0;
        for (int i = 0; i < 3; ++i)
            for (int j = 0; j < 3; ++j)
                if (grid[i][j] == 0)
                    t++;
        if (t == 0)
            return 0;
        
        int ans = INT_MAX;
        for (int i = 0; i < 3; ++i)
        {
            for (int j = 0; j < 3; ++j)
            {
                if (grid[i][j] == 0)
                {
                    for (int ni = 0; ni < 3; ++ni)
                    {
                        for (int nj = 0; nj < 3; ++nj)
                        {
                            int d = abs(ni - i) + abs(nj - j);
                            if (grid[ni][nj] > 1)
                            {
                                grid[ni][nj]--;
                                grid[i][j]++;
                                ans = min(ans, d + minimumMoves(grid));
                                grid[ni][nj]++;
                                grid[i][j]--;
                            }
                        }
                    }
                }
            }
        }
        return ans;
    }
};

```
# Code (Java)
```
import java.util.*;
public class Solution {
    public int minimumMoves(int[][] grid) {
        // Base Case
        int t = 0;
        for (int i = 0; i < 3; ++i)
            for (int j = 0; j < 3; ++j)
                if (grid[i][j] == 0)
                    t++;
        if (t == 0)
            return 0;

        int ans = Integer.MAX_VALUE;
        for (int i = 0; i < 3; ++i) {
            for (int j = 0; j < 3; ++j) {
                if (grid[i][j] == 0) {
                    for (int ni = 0; ni < 3; ++ni) {
                        for (int nj = 0; nj < 3; ++nj) {
                            int d = Math.abs(ni - i) + Math.abs(nj - j);
                            if (grid[ni][nj] > 1) {
                                grid[ni][nj]--;
                                grid[i][j]++;
                                ans = Math.min(ans, d + minimumMoves(grid));
                                grid[ni][nj]++;
                                grid[i][j]--;
                            }
                        }
                    }
                }
            }
        }
        return ans;
    }
}

```
``` Please Upvote if it was helpful ```