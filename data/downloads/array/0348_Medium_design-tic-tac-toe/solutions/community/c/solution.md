# c++ 94% faster

**Author:** arjung27
**Votes:** 2
**Link:** [https://leetcode.com/problems/design-tic-tac-toe/solutions/503322/](https://leetcode.com/problems/design-tic-tac-toe/solutions/503322/)

---

```
class TicTacToe {
private:
    int *rows;
    int *cols;
    int size, diaglr, diagrl;    
public:
    /** Initialize your data structure here. */
    TicTacToe(int n) {
        rows = new int[n]();
        cols = new int[n]();
        // memset(rows, 0, n);
        // memset(cols, 0, n);
        // for (int i=0; i < n; i++) {
        //     rows[i] = 0;
        //     cols[i] = 0;
        // }
        diaglr = 0;
        diagrl = 0;
        size = n;
    }
    
    /** Player {player} makes a move at ({row}, {col}).
        @param row The row of the board.
        @param col The column of the board.
        @param player The player, can be either 1 or 2.
        @return The current winning condition, can be either:
                0: No one wins.
                1: Player 1 wins.
                2: Player 2 wins. */
    int move(int row, int col, int player) {
        int move_ = (player==1)?1:-1;
        int winTotal = size*move_;
        rows[row] += move_;
        cols[col] += move_;
        
        if(rows[row] == winTotal) {
            return player;
        }
        
        if(cols[col] == winTotal) {
            return player;
        }
        if (row == col) {
            diaglr += move_;
            if (diaglr == winTotal) return player; 
        }
        if (row + col == size - 1) {
            diagrl += move_;
            if (diagrl == winTotal) return player;
        }
        return 0;
    }
};

/**
 * Your TicTacToe object will be instantiated and called as such:
 * TicTacToe* obj = new TicTacToe(n);
 * int param_1 = obj->move(row,col,player);
 */
 ```