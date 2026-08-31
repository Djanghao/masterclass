# 100% Dart Solution W/ Explanation

**Author:** AndreLock
**Votes:** 1
**Link:** [https://leetcode.com/problems/valid-sudoku/solutions/3573119/](https://leetcode.com/problems/valid-sudoku/solutions/3573119/)

---



# Approach
Given a sudoku board check to make sure that all of the initial numbers on the board do not conflict with each other.

To do this I checked for each value if the same value was in the same row, column, or square making sure to skip over the current value as to not compare it with itself. If it was unique I would continue iterating until finding the next number and would repeat the process until reaching the end. 

Time: 274ms Beats: 100%
Memory: 146.1MB Beats: 53.23%


# Code
```
class Solution {
  bool isValidSudoku(List<List<String>> board) {
      return valid(board, [0,0]);
  }
  bool valid(List<List<String>>board , List<int> current_pos){
      if(current_pos[0] == 9 && current_pos[1] == 8){
          return true;
      }
      if(current_pos[0] == 9){
          current_pos[0] = 0;
          current_pos[1] += 1;
      }
      if(board[current_pos[0]][current_pos[1]] != '.'){
          for(int i = 0 ; i < board[0].length ; ++i){
              if(i == current_pos[1]){
                  continue;
              }
              if(board[current_pos[0]][i] == board[current_pos[0]][current_pos[1]]){
                  return false;
              } 
          }
          for(int i = 0 ; i < board.length ; ++i){
              if(i == current_pos[0]){
                  continue;
              }
              if(board[i][current_pos[1]] == board[current_pos[0]][current_pos[1]]){
                  return false;
              } 
          }
          for(int i = ((current_pos[0] / 3).toInt() * 3); i < (((current_pos[0] / 3).toInt() * 3)+ 3); ++i){
            for(int x = ((current_pos[1] / 3).toInt() * 3); x < ((current_pos[1] / 3).toInt() * 3) + 3; ++x){
                if(i == current_pos[0] && current_pos[1] == x){
                    continue;
                }
                if(board[i][x] == board[current_pos[0]][current_pos[1]]){
                    return false;
                }
            }
          }
      }
      return valid(board, [current_pos[0] + 1, current_pos[1]]);
  }
}
```