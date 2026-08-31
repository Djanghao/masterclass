# first sink the islands connected to edges. then sink and count remaining islands

**Author:** akshayvjain
**Votes:** 0
**Link:** [https://leetcode.com/problems/number-of-closed-islands/solutions/2998410/](https://leetcode.com/problems/number-of-closed-islands/solutions/2998410/)

---

# Intuition
first sink the islands connected to edges.
then sink and count remaining islands
<!-- Describe your first thoughts on how to solve this problem. -->

<!-- # Approach -->
<!-- Describe your approach to solving the problem. -->

<!-- # Complexity -->
<!-- - Time complexity: -->
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

<!-- - Space complexity: -->
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
class Solution {
  int totalIslands = 0;
  int rows = 0;
  int columns = 0;
  List<List<int>> g = [[]];
  void dfs(int i, int j){
      g[i][j] = 1;
      var c = [[1,0],[-1,0],[0,1],[0,-1]];
      for(var e in c){
          int nx = i + e[0];
          int ny = j + e[1];
          if(nx < 0 || nx >= rows || ny < 0 || ny >= columns){
            continue;
          }
          if(g[nx][ny] == 0){
            dfs(nx,ny);
          }
      }
  }

  int closedIsland(List<List<int>> grid) {
      g = grid;
      rows = grid.length; columns = grid[0].length;
      for(int i =0; i < rows; i++){
          for(int j = 0; j < columns; j++){
              if(i == 0 || j == 0 || i == (rows - 1) || j == (columns - 1)){
                if(grid[i][j] == 0){
                    dfs(i,j);
                  }
                }
              }
          }
      for(int i =0; i < rows; i++){
          for(int j = 0; j < columns; j++){
              if(grid[i][j] == 0){
                dfs(i,j);
                totalIslands += 1;
              }
          }
      }
  
    return totalIslands;
  }
}
```