# Solution

**Author:** deleted_user
**Votes:** 2
**Link:** [https://leetcode.com/problems/projection-area-of-3d-shapes/solutions/3507864/](https://leetcode.com/problems/projection-area-of-3d-shapes/solutions/3507864/)

---

```C++ []
class Solution {
public:
    int projectionArea(vector<vector<int>>& grid) {
        int n = grid.size(), area = 0;
        vector<int> x_v(n), y_v(n);
        for (int x = 0; x < n; x++) {
            for (int y = 0; y < n; y++) {
                int v = grid[x][y];
                if (v) {
                    area++;
                    if (x_v[x] < v) x_v[x] = v;
                    if (y_v[y] < v) y_v[y] = v;
                }
            }
            area += x_v[x];
        }
        for (int y = 0; y < n; y++)
            area += y_v[y];
        return area;
    }
};
```

```Python3 []
class Solution:    
    def projectionArea(self, grid: List[List[int]]) -> int:
        xy = sum(i > 0 for s in grid for i in s)
        xz = sum(max(s) for s in grid)
        yz = sum(max(s[i] for s in grid) for i in range(len(grid)))
        return xy + xz + yz
```

```Java []
class Solution {
    public int projectionArea(int[][] grid) {
        int a=0,x=0;
        for(int i=0;i<grid.length;i++)
        {
            int mr=Integer.MIN_VALUE;
            int mc=Integer.MIN_VALUE;
            for(int j=0;j<grid[0].length;j++)
            {
                if(grid[i][j]!=0)x+=1;
                if(grid[i][j]>mr)mr=grid[i][j];
                if(grid[j][i]>mc)mc=grid[j][i];
            }
            a+=mr+mc;
        }
        return (a+x);
    }
}
```
