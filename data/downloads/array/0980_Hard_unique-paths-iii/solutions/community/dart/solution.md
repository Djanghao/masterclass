# 100% Dart Solution Backtracking (W/ Explanation)

**Author:** AndreLock
**Votes:** 1
**Link:** [https://leetcode.com/problems/unique-paths-iii/solutions/3576705/](https://leetcode.com/problems/unique-paths-iii/solutions/3576705/)

---



# Approach
Given a grid return all possible traversals of the grid such that you never go to spots with obstacles (-1) and you never miss a single square. Also, you start from 1 and end at 2 which can be any position on the board.

I solved this using backtracking as there is not a good way to memoize this problem. Starting out I first found where the starting point was located which is the spot that equals 1. From there I called my function that checks all paths to find all paths to the endpoint (2) that visits every square. This function works using DFS where each iteration creates a new grid with the last position visited marked as -1 so that you never go back and you can always know if you have visited all points. From here you keep moving until you either reach out of bounds, an obstacle (or a prevously visited spot), or the end point. If you reach the end point it then checks the entire matrix to see if there are any spots that have been unvisited that should have been visited if there are not then add 1 to the answer.

Time: 294ms Beats: 100%
Memory: 150MB Beats: 100%


# Code
```
class Solution {
  int uniquePathsIII(List<List<int>> grid) {
      for(int i = 0 ; i < grid.length ; ++i){
          for(int x = 0 ; x < grid[i].length ; ++x){
              if(grid[i][x] == 1){
                return(traverse(grid, [i,x]));
              }
          }
      }
      return 0;
  }
  int traverse(List<List<int>> grid , List<int> current_position){
      if(current_position[0] < 0 || current_position[0] >= grid.length){
          return 0;
      }
      if(current_position[1] < 0 || current_position[1] >= grid[current_position[0]].length ){
          return 0;
      }
      if(grid[current_position[0]][current_position[1]] == -1){
          return 0;
      }
      List<List<int>> my_grid = [];
      for(int i = 0 ; i < grid.length ; ++i){
          my_grid.add(List.from(grid[i]));
      }
      my_grid[current_position[0]][current_position[1]] = -1;

      if(grid[current_position[0]][current_position[1]] == 2){
          for(int i = 0 ; i < grid.length ; ++i){
              for(int x = 0 ; x < grid[i].length ; ++x){
                  if(my_grid[i][x] == 0){
                      return 0;
                  }
              }
          }
          return 1;
      }

      int return_int = 0;
      return_int += traverse(my_grid, [current_position[0] , current_position[1] - 1]);
      return_int += traverse(my_grid, [current_position[0] , current_position[1] + 1]);
      return_int += traverse(my_grid, [current_position[0] - 1, current_position[1]]);
      return_int += traverse(my_grid, [current_position[0] + 1 , current_position[1]]);
      return return_int;
  }
}
```