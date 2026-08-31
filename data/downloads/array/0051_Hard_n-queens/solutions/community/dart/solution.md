# Dart Solution W/ Explanation

**Author:** AndreLock
**Votes:** 3
**Link:** [https://leetcode.com/problems/n-queens/solutions/3569890/](https://leetcode.com/problems/n-queens/solutions/3569890/)

---


# Approach
Given a number n return all possible configurations of queens on a chess board such that none can take another assuming they are all on their own teams where the chess board is size n*n. To do this I used 1's to denote places that are reserved by other queens that have been previously placed. Given this I iterated through the current row to find all possible spaces that are not being taken by another queen. If they are safe to place a piece in I did and continued on iterating through the rest of the rows until either reaching the end or running out of safe spaces to place queens. Then I returned all possible configurations back to my function called nQueenControl. The purpose of this function was to replace all of the ones with "."'s and return the final strings to the solveNQueens function.


# Code
```
class Solution {
  List<List<String>> solveNQueens(int n) {
      List<String> init_mat = [];
      for(int i = 0 ; i < n ; ++i){
          init_mat.add("."*n);
      }
      List<List<String>> ret_list = nQueenControl(init_mat , 0);
      return ret_list;
  }
  List<List<String>> nQueenControl(List<String> matrix, int row){
      List<List<String>> ret_list = nQueens(matrix , row);
      for(int i = 0 ; i < ret_list.length ; ++i){
        for(int x = 0 ; x < ret_list[i].length ; ++x){
          ret_list[i][x] = ret_list[i][x].replaceAll('1' , '.');
        }
      }
      return ret_list;
  }
  List<List<String>> nQueens(List<String> matrix , int row){
    if(row == matrix.length){
      return [matrix];
    }
    List<List<String>> return_list = [];
    for(int i = 0 ; i < matrix[row].length ; ++i){
      if(matrix[row][i] == '1'){
        continue;
      }
      List<String> new_matrix = List.from(matrix);
      List<String> current_row = matrix[row].split('');
      current_row[i] = 'Q';
      new_matrix[row] = current_row.join('');
      int itr = 1;
      for(int x = row + 1 ; x < matrix.length ; ++x){
        List<String> next_row = matrix[x].split('');
        next_row[i] = '1';
        if(i - itr >= 0){
          next_row[i - itr] = '1';
        }
        if(i + itr < matrix.length){
          next_row[i + itr] = '1';
        }
        itr += 1;
        new_matrix[x] = next_row.join('');
      }
      List<List<String>> nQu = nQueens(new_matrix , row + 1);
      for(int i = 0 ; i < nQu.length ; ++i){
        return_list.add(nQu[i]);
      }
    }
    return return_list;
  }
}
```