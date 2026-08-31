# Simple Dart Solution (BFS+Memo)

**Author:** AndreLock
**Votes:** 2
**Link:** [https://leetcode.com/problems/shortest-path-in-binary-matrix/solutions/3584117/](https://leetcode.com/problems/shortest-path-in-binary-matrix/solutions/3584117/)

---

# Approach
Since you need to fin the minimum moves to make it from one point to another you should immediately thing BFS because DFS is simply not nearly as good at this type of problem. To solve this I used BFS to traverse the grid and when I either ran into a travelled path or 1 I simply ended that path and continued with the rest until reaching the end at which point the BFS would end and return the found value.
# Code
```
class Solution {
  int shortestPathBinaryMatrix(List<List<int>> grid) {
      Set<String> visited = {};
      List<List<int>> queue = [];
      queue.add([0,0]);
      int depth = 0;
      bool done = false;
      while(queue.length != 0 && done == false){
          int init_length = queue.length;
          for(int i = 0 ; i < init_length ; ++i){
              int curry = queue[i][1];
              int currx = queue[i][0];
              String current_str = curry.toString() + ' ' + currx.toString();
              if(visited.contains(current_str)){
                  continue;
              }
              visited.add(current_str);
              if(grid[currx][curry] == 1){
                  continue;
              }
              if(currx == grid.length - 1 && curry == grid[0].length - 1){
                  done = true;
                  break;
              }
              for(int x = -1 ; x <= 1 ; ++x){
                  for(int z = -1 ; z <= 1 ; ++z){
                      if(x == 0 && z == 0){
                          continue;
                      }
                      int new_x = currx + x;
                      int new_y = curry + z;
                      if(new_x < 0 || new_y < 0 || new_x >= grid.length || new_y >= grid[0].length){
                          continue;
                      }
                      queue.add([new_x, new_y]);
                  }
              }
          }
        queue = queue.sublist(init_length);
        depth += 1;
      }
      if(done){
        return depth;
      }
      return -1;
  }
}
```