# Java O(MN) label and count with explanation (14ms, beats 100%)

**Author:** hdchen
**Votes:** 18
**Link:** [https://leetcode.com/problems/count-fertile-pyramids-in-a-land/solutions/1598926/](https://leetcode.com/problems/count-fertile-pyramids-in-a-land/solutions/1598926/)

---

**Thinking Process**
* At the beginning, I consider of using prefix sum so that I can check if current row is valid in O(1)
* For a 3-layer pyramid, f(3) = 1 + 3 x f(2), it seems it can be calculated by math approach. But how do I remove duplicates?
* Then I think I may try the approach similar to calculating the largest histogram or rectangle areas problems. 
* So I focused on `the pyramids formed by the current cell` and drew some examples to find out the rules.
* We can count the number of pyramid with the bottom-right cell located at grid[i][j].
* Let `grid[i][j] indicates the layer of largest pyramid which the bottom-right cell is the current cell` then the number of pyramid formed by current cell is equal to `grid[i][j] - 1`
* grid[i][j] is determined by grid[i - 1][j - 1] and the number of consecutive fertile cells which ends at the current cell. For example, if `grid[i - 1][j - 1] is 3` then the largest pyramid can be formed by current cell is at most `4`. If the consecutive fertile cells is `3`, the layer is at most `2` for the current cell. Thus, we pick the smaller one.

**Example**
Input
```
1 1 1 1 0
1 1 1 1 1
1 1 1 1 1
0 1 0 0 1
```
After labelling
```
1 1 1 1 0 
1 1 2 2 2 
1 1 2 2 3 
0 1 0 0 1
```
```
class Solution {
    public int countPyramids(int[][] grid) {
        int m = grid.length, n = grid[0].length;
        int[][] rev = new int[m][n];
        for (int i = 0; i < m; ++i) {
            for (int j = 0; j < n; ++j) rev[m - i - 1][j] = grid[i][j];
        }
        return cal(grid) + cal(rev);
    }
    private int cal(int[][] grid) {
        int m = grid.length, n = grid[0].length, res = 0;
        for (int i = 1; i < m; ++i) {
            for (int j = 0, cnt = 0; j < n; ++j) {
                if (0 != grid[i][j]) cnt++;
                else cnt = 0;
                if (0 == cnt || 0 == j) continue;
                grid[i][j] = Math.min(grid[i - 1][j - 1] + 1, (cnt + 1) >> 1);
                res += grid[i][j] - 1;
            }
        }
        return res;
    }
}
```