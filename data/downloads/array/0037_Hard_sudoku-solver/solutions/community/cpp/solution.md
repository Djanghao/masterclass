# ✅☑️ Best C++ Solution Ever || Easy Solution || Backtracking || One Stop Solution.

**Author:** its_vishal_7575
**Votes:** 65
**Link:** [https://leetcode.com/problems/sudoku-solver/solutions/3226518/](https://leetcode.com/problems/sudoku-solver/solutions/3226518/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
We can solve this question Matrix + Backtracking.

# Approach
<!-- Describe your approach to solving the problem. -->
We can easily understand the approach by seeing the code which is easy to understand with comments.

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->
Time Complexity : O(9^(N*N)) : For every unassigned index there are 9 possible options so the worst-case time complexity of sudoku solver is O(9^(N*N)).

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->
Space Complexity : O(1), Constant space.

# Code
```
/*

    Time Complexity : O(9^(N*N)) : For every unassigned index there are 9 possible options so the worst-case time
    complexity of sudoku solver is O(9^(N*N)).

    Space Complexity : O(1), Constant space.

    Solved using Matrix + Backtracking.

*/

class Solution {
private:
    bool isValid(vector<vector<char>>& board, int row, int col, char ch){
        for(int i=0; i<9; i++){
            if(board[i][col] == ch){
                return false;
            }
            if(board[row][i] == ch){
                return false;
            }
            if(board[3*(row/3)+i/3][3*(col/3)+i%3] == ch){
                return false;
            }
        }
        return true;
    }
    bool solve(vector<vector<char>>& board) {
        for(int i=0; i<board.size(); i++){
            for(int j=0; j<board[0].size(); j++){
                if(board[i][j] == '.'){
                    for(char ch='1'; ch<='9'; ch++){
                        if(isValid(board, i, j, ch)){
                            board[i][j] = ch;
                            if(solve(board) == true){
                                return true;
                            }
                            board[i][j] = '.';
                        }
                    }
                    return false;
                }
            }
        }
        return true;
    }
public:
    void solveSudoku(vector<vector<char>>& board) {
        solve(board);
    }
};

```

***IF YOU LIKE THE SOLUTION THEN PLEASE UPVOTE MY SOLUTION BECAUSE IT GIVES ME MOTIVATION TO REGULARLY POST THE SOLUTION.***

![WhatsApp Image 2023-02-10 at 19.01.02.jpeg](./images/0.jpeg)