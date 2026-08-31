# 0ms JAVA | 98.98% faster & 100% memory

**Author:** onefineday01
**Votes:** 8
**Link:** [https://leetcode.com/problems/max-increase-to-keep-city-skyline/solutions/587891/](https://leetcode.com/problems/max-increase-to-keep-city-skyline/solutions/587891/)

---

```
class Solution {
    public int maxIncreaseKeepingSkyline(int[][] grid) {
        if(grid == null)
            return 0;
        int n = grid.length;
        int m = grid[0].length;
        int maxrow[] = new int[n];
        int maxcol[] = new int[m];
        for(int i = 0; i < n; i++)
            for(int j = 0 ; j < m; j++){
                maxrow[i] = Math.max(maxrow[i], grid[i][j]);
                maxcol[j] = Math.max(maxcol[j], grid[i][j]);
            }
        int count = 0;
        for(int i = 0; i < n; i++)
            for(int j = 0 ; j < m; j++)
                count += (Math.min(maxrow[i], maxcol[j]) - grid[i][j]);
                
        return count;
    }
}
```