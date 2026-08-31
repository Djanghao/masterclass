# Dart Recursion

**Author:** Coaspe
**Votes:** 1
**Link:** [https://leetcode.com/problems/number-of-islands/solutions/2796982/](https://leetcode.com/problems/number-of-islands/solutions/2796982/)

---

# Code
```
class Solution {
  int numIslands(List<List<String>> grid) {
  int answer = 0;
    List<List<int>> visited = [for (var i=0;i<grid.length;i++) List.generate(grid[0].length, (_) => 0)];
    int lenRow = grid.length;
    int lenCol = grid[0].length;
    bool isSafe(int r, int c) {
      return 0 <= r && r <= lenRow - 1 && 0 <= c && c <= lenCol - 1;
    }
    void dfs(int r, int c){
        visited[r][c] = 1;
        for (var d in [[0,-1],[-1,0],[0,1],[1,0]]) {
          if (isSafe(r+d[0], c+d[1]) && visited[r+d[0]][c+d[1]] != 1 && grid[r+d[0]][c+d[1]] == '1'){
            dfs(r+d[0], c+d[1]);
          }
        }
    }
    for (var r = 0; r < grid.length; r++) {
      for (var c = 0; c < grid[0].length; c++) {
        if (grid[r][c] == '0' || visited[r][c] == 1) continue;
        answer += 1;
        dfs(r,c);
      }
    }
    return answer;
  }
}
```