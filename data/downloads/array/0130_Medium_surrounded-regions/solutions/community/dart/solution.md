# Dart Graph Triversal

**Author:** shashankgupta3891
**Votes:** 0
**Link:** [https://leetcode.com/problems/surrounded-regions/solutions/5205373/](https://leetcode.com/problems/surrounded-regions/solutions/5205373/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
<!-- Describe your approach to solving the problem. -->
Graph triversal

# Complexity
- Time complexity:
O((n+m)n*m)
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity:
O(n*m)
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
class Solution {
  void solve(List<List<String>> board) {
    int nRow = board.length;
    int nCol = board.first.length;
    List<List<int>> visited = [for(int i=0; i< nRow; i++) [for(int j=0; j<nCol; j++) 0]];

    for(int i= 0; i< nCol; i++) {
        _checkAndMark(0, i, visited, board, nRow, nCol);
        _checkAndMark(nRow - 1, i, visited, board, nRow, nCol);
     }

    for(int i= 0; i< nRow; i++){
        _checkAndMark(i, 0, visited, board, nRow, nCol);
        _checkAndMark(i, nCol - 1, visited, board, nRow, nCol);
    }
    
    for(int i=0; i<nRow ; i++){
        for(int j = 0; j< nCol; j++){
            if(visited[i][j] == 0){
                board[i][j] = "X";
            }
        }
    }
  }

  void _checkAndMark(int i, int j, List<List<int>> visited, List<List<String>> board, int nRow, int nCol){
    if(visited[i][j] == 0){
        visited[i][j] = 1;
        if(board[i][j] == "O") {
            _triverse(i, j, board, nRow, nCol, visited);
        }
    }
  }

  void _triverse(int i, int j, List<List<String>> board, int nRow, int nCol, List<List<int>> visited){
    List<int> dr = [0, -1, 0, 1];
    List<int> dc = [-1, 0, 1, 0];
    for(int k=0; k < dr.length; k++){
        int nextRow = i + dr[k];
        int nextCol = j + dc[k];
        if(nextRow<0) continue;
        if(nextRow>=nRow) continue;
        if(nextCol<0) continue;
        if(nextCol>=nCol) continue;
        if(visited[nextRow][nextCol] == 1) continue;
        visited[nextRow][nextCol] = 1;
        if(board[nextRow][nextCol] == "X") continue;
        _triverse(nextRow, nextCol, board, nRow, nCol, visited);
    }
  }
}
```