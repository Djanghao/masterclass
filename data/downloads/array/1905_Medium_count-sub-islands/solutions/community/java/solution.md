# Java Easy Solution ( dfs on second and checking on 1st grid )

**Author:** anmol676
**Votes:** 25
**Link:** [https://leetcode.com/problems/count-sub-islands/solutions/1325964/](https://leetcode.com/problems/count-sub-islands/solutions/1325964/)

---

This question can be follow up for No of islands. In this we make a dfs call on 2nd grid and we take a flag i.e in my case I have taken ans . I initialize my ans to 1 means it is island then I traverse whole 2nd grid connected component which contains only 1 and at any time when the grid 2 contains 1 and at same time on that place grid 1 contains 0 means this can't be island so make flag variable back to zero but I do not stop the dfs . traverse whole component irrespective of the result . Atlast take a variable for storing the count and return that variable.


'''
class Solution {
   
    int ans =0;
    public void dfs(int[][] grid1, int[][] grid2, int i , int j){
        if(i<0|| i>=grid1.length ||j<0|| j>=grid1[0].length || grid2[i][j]==0 ) return;
        if(grid1[i][j]== 0)ans =0;
        grid2[i][j] =0;
        dfs(grid1, grid2, i-1, j);
        dfs(grid1, grid2, i+1, j);
        dfs(grid1, grid2, i, j+1);
        dfs(grid1, grid2, i, j-1);
    }
    
    
    
    public int countSubIslands(int[][] grid1, int[][] grid2) {
        // problem can be solved using dfs
        int res=0;
        for(int i=0 ;i <grid1.length ;i++){
            for(int j=0 ;j<grid2[0].length ;j++){
                
                if(grid2[i][j]==1)
                {
                    ans=1;
                    dfs(grid1, grid2, i, j);
                    res+=ans;
                }
            }
        }
        return res;
        
    }
}
'''