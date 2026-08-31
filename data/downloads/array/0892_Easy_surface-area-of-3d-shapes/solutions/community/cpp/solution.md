# C++ | Very Easy Code with Explanation

**Author:** ankit4601
**Votes:** 4
**Link:** [https://leetcode.com/problems/surface-area-of-3d-shapes/solutions/2326339/](https://leetcode.com/problems/surface-area-of-3d-shapes/solutions/2326339/)

---

Please Upvote :)

```
class Solution {
public:
    int surfaceArea(vector<vector<int>>& grid) {
        int res=0;
        for(int i=0;i<grid.size();i++)
        {
            for(int j=0;j<grid[0].size();j++)
            {
                if(grid[i][j])
                {
                    res+=2; // 1 for up, 1 for down
                    res+=fun(grid,i-1,j,grid[i][j]);// left
                    res+=fun(grid,i,j-1,grid[i][j]);// front
                    res+=fun(grid,i+1,j,grid[i][j]);// right
                    res+=fun(grid,i,j+1,grid[i][j]);// back
                }
            }
        }
        return res;
    }
    int fun(vector<vector<int>>& grid,int i,int j,int val)
    {
        if(i<0 || j<0 || i>=grid.size() || j>=grid[0].size())
            return val;// if no adjacent cube then total area is contributed
        
        if(grid[i][j]<val) // if neighbour cube is there then the diff is contributed
            return val-grid[i][j];
        
        return 0; // if the current is smaller than its neighbour, no contribution
    }
};
```