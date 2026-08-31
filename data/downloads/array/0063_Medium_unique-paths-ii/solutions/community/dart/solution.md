# Dart Solution W/ Explanation (DP+Memo)

**Author:** AndreLock
**Votes:** 1
**Link:** [https://leetcode.com/problems/unique-paths-ii/solutions/3575945/](https://leetcode.com/problems/unique-paths-ii/solutions/3575945/)

---

# Approach
Given a matrix return the total number of possible ways to traverse the grid from top left to bottom right. The challenge in this one lies in the fact that there are certain 1's on the board that are obstacles and thus can not be traversed. 

To solve this I took each right and down path for each tile to find out how many times each choice could reach the end. To optimize this I saved that value to each memoized tile that way if a tile had been traversed already the number of paths would not need to be recomputed.

Time: 298ms Beats: 100%
Memory: 145.7MB Beats: 100%



# Code
```
class Solution {
  int uniquePathsWithObstacles(List<List<int>> obstacleGrid) {
      Map<String,int> memo = {};
      return uniquePaths(obstacleGrid, [0,0], memo);
  }
  int uniquePaths(List<List<int>> grid , List<int> current_position, Map<String,int> memo){
      if(current_position[0] >= grid.length || current_position[1] >= grid[0].length || grid[current_position[0]][current_position[1]] == 1){
          return 0;
      }
      if(current_position[0] == grid.length - 1 && current_position[1] == grid[0].length - 1){
          return 1;
      }
      String current = current_position[0].toString() + ' ' + current_position[1].toString();

      if(memo.containsKey(current)){
          return(memo[current] ?? 0);
      }
      int return_paths = 0;
      return_paths += uniquePaths(grid, [current_position[0] + 1 , current_position[1]], memo);
      return_paths += uniquePaths(grid, [current_position[0] , current_position[1] + 1], memo);
      memo[current] = return_paths;
      return return_paths;
  }
}
```