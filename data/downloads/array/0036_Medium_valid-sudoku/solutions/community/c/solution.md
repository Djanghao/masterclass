# C++ Simple and Easy 10-Short-Line Solution

**Author:** YehudisK
**Votes:** 188
**Link:** [https://leetcode.com/problems/valid-sudoku/solutions/1332984/](https://leetcode.com/problems/valid-sudoku/solutions/1332984/)

---

For each row, column and block we keep a set of numbers.
If we find a number that was seen already in that row, column or block - return false.
```
class Solution {
public:
    bool isValidSudoku(vector<vector<char>>& board) {
        vector<set<int>> rows(9), cols(9), blocks(9);
        
        for (int i = 0; i < 9; i++) {
            for (int j = 0; j < 9; j++) {
                
                if (board[i][j] == '.') continue;
                
                int curr = board[i][j] - '0';
                if (rows[i].count(curr) || cols[j].count(curr) || blocks[(i/3)*3+j/3].count(curr)) 
                    return false;
                
                rows[i].insert(curr);
                cols[j].insert(curr);
                blocks[(i/3)*3+j/3].insert(curr);
            }
        }
        
        return true;
    }
};
```
**Like it? please upvote!**