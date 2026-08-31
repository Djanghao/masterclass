# Dart O(1) Space, O(n^2) Time

**Author:** shashankgupta3891
**Votes:** 0
**Link:** [https://leetcode.com/problems/game-of-life/solutions/5433488/](https://leetcode.com/problems/game-of-life/solutions/5433488/)

---

# Intuition
If there is a change in element then It should smartly stored in same data structure.
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
If I found any live cell (1) which needs to convert into dead cell (0) then I change it to 2

If I found any dead cell (1) which needs to convert into live cell (0) then I change it to 3

<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity:
O(n^2)
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity:
O(1)
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
class Solution {
  void gameOfLife(List<List<int>> board) {
    int nRow = board.length;
    int nCol = board.first.length;
    for(int i= 0; i< nRow; i++){
        for(int j = 0; j< nCol; j++){
            int liveNCell = 0;
            int deadNCell = 0;
            for(int x = -1; x<2; x++){
                for(int y = -1; y<2; y++){
                    if(x ==0 && y== 0) continue;
                    int nX = i-x;
                    int nY = j-y;
                    if(nX<0 || nX >= nRow) continue;
                    if(nY<0 || nY >= nCol) continue;

                    int element = board[nX][nY];
                    if(element == 0 || element == 3){
                        deadNCell += 1;
                    }
                    if(element == 1 || element == 2) {
                        liveNCell +=1;
                    }
                }
            }
            
            if(board[i][j]==1){
                if(liveNCell<2){
                    board[i][j] = 2;
                }
                if(liveNCell>3){
                    board[i][j] = 2;
                }
            } else {
                if(liveNCell ==3){
                    board[i][j] = 3;
                }
            }
            
        }
    }

    for(int i= 0; i< nRow; i++){
        for(int j = 0; j< nCol; j++){
            if(board[i][j] == 2){
                board[i][j] = 0;
            }
            if(board[i][j] == 3){
                board[i][j] = 1;
            }
        }
    }
  }
}
```