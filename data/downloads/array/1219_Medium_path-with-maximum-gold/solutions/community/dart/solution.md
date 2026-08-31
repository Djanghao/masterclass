# beats

**Author:** Rubayat_Islam19
**Votes:** 1
**Link:** [https://leetcode.com/problems/path-with-maximum-gold/solutions/5157822/](https://leetcode.com/problems/path-with-maximum-gold/solutions/5157822/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
class Solution {
  List<List<bool>> vis=[];
  List<List<int>> copyGrid=[];
  int sum=0;
  int ans=0;
  void dfs(int i,int j){
    if(i<0||i>=copyGrid.length||j<0||j>=copyGrid[0].length||copyGrid[i][j]==0||vis[i][j])
      return;
    vis[i][j]=true;
    sum+=copyGrid[i][j];
    ans=max(ans,sum);
    dfs( i + 1 , j );
    dfs( i - 1 , j );
    dfs( i , j + 1 );
    dfs( i , j - 1 );
    vis[i][j]=false;
    sum-=copyGrid[i][j];
  }
  int getMaximumGold(List<List<int>> grid) {
    ans=0;
    copyGrid=grid;
    vis=List.generate(grid.length,(_)=>List.generate(grid[0].length,(_)=>false));
    for(int i=0;i<grid.length;i++){
      for(int j=0;j<grid[0].length;j++){
        dfs(i,j);
      }
    }
    return ans;
  }
}
```