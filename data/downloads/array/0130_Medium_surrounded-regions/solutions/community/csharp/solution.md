# C# Solution | DFS

**Author:** anshulgarg904
**Votes:** 2
**Link:** [https://leetcode.com/problems/surrounded-regions/solutions/3603105/](https://leetcode.com/problems/surrounded-regions/solutions/3603105/)

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
public class Solution {
    int m;
    int n;

    public void Solve(char[][] board) {
        m = board.Length;
        n = board[0].Length;

        for(int i=0; i<m; i++){
            for(int j=0; j<n; j++){
                bool[,] visited = new bool[m,n];
                if(board[i][j] == 'O' && !IsBoundaryReachable(board, i, j, visited)){
                    UpdateCells(board, i, j);
                }
            }
        }
    }
    
    private void UpdateCells(char[][] board, int row, int column){
        if(row < 0 || column < 0 || row >= m || column >= n){
            return;
        }

        if(board[row][column] == 'X'){
            return;
        }

        board[row][column] = 'X';
        UpdateCells(board, row-1, column);
        UpdateCells(board, row+1, column);
        UpdateCells(board, row, column-1);
        UpdateCells(board, row, column+1);
    }

    public bool IsBoundaryReachable(char[][] board, int row, int column, bool[,] visited) {
        if(row < 0 || column < 0 || row >= m || column >= n){
            return true;
        }

        if(board[row][column] == 'X' || visited[row, column]){
            return false;
        }

        visited[row, column] = true;

        return (IsBoundaryReachable(board, row-1, column, visited) 
        || IsBoundaryReachable(board, row, column-1,visited) 
        || IsBoundaryReachable(board, row+1, column,visited) 
        || IsBoundaryReachable(board, row, column+1,visited));
    }
}
```