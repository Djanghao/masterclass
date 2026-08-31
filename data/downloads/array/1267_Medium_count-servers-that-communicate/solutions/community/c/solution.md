# Easiest dfs solution

**Author:** mitedyna
**Votes:** 21
**Link:** [https://leetcode.com/problems/count-servers-that-communicate/solutions/1114519/](https://leetcode.com/problems/count-servers-that-communicate/solutions/1114519/)

---

```
class Solution {
public:
    //dfs travel along row and column and just turn 1 into 0
    void dfs(vector<vector<int>>& grid, int i ,int j, int &count){
        if(grid[i][j]==1){
            count++;
            grid[i][j]=0;
            for(int c=0;c<grid[0].size();c++){
                if(grid[i][c]==1)dfs(grid,i,c,count);
            }
            for(int r=0;r<grid.size();r++){
                if(grid[r][j]==1)dfs(grid,r,j,count);
            }
        }
        
    }
    int countServers(vector<vector<int>>& grid) {
        int ans=0;
        for(int i=0;i<grid.size();i++){
            for(int j=0;j<grid[0].size();j++){
                if(grid[i][j]==1){
                    int count=0;
                    dfs(grid,i,j,count);
                    if(count>1)ans+=count;
                }
            }
        }
        return ans;
        
    }
};
```