# C++ time O(1) space O(n) short simple solution

**Author:** sxycwzwzq
**Votes:** 53
**Link:** [https://leetcode.com/problems/design-tic-tac-toe/solutions/81912/](https://leetcode.com/problems/design-tic-tac-toe/solutions/81912/)

---

new version:

    class TicTacToe {
    private:
        //count parameter: player 1 + : player 2: -
        vector<int> rowJudge;
        vector<int> colJudge;
        int diag, anti;
        int total;
    public:
        /** Initialize your data structure here. */

        TicTacToe(int n):total(n), rowJudge(n), colJudge(n),diag(0),anti(0){}
    
        int move(int row, int col, int player) {
            int add = player == 1 ? 1 : -1;
            diag += row == col ? add : 0;
            anti += row == total - col - 1 ? add : 0;
            rowJudge[row] += add;
            colJudge[col] += add;
            if(abs(rowJudge[row]) == total || abs(colJudge[col]) == total || abs(diag) == total || abs(anti) == total) 
                return player;
            return 0;
        }
    };

old version:

    class TicTacToe {
    private:
        //status:
        // 0: no one fill
        // 1 or 2: player fill
        //-1 : invalid
        //pair: 
        //first:player, second:count
        vector<pair<int,int>> rowJudge;
        vector<pair<int,int>> colJudge;
        pair<int,int> diag, anti;
        int total;
    public:
        /** Initialize your data structure here. */
        TicTacToe(int n):total(n), rowJudge(n), colJudge(n){}
        
        /** Player {player} makes a move at ({row}, {col}).
            @param row The row of the board.
            @param col The column of the board.
            @param player The player, can be either 1 or 2.
            @return The current winning condition, can be either:
                    0: No one wins.
                    1: Player 1 wins.
                    2: Player 2 wins. */
        int move(int row, int col, int player) {
            if(rowJudge[row].first == 0 || rowJudge[row].first == player){
                rowJudge[row].first = player;
                rowJudge[row].second++;
                if(rowJudge[row].second == total){
                    return player;
                }
            }
            else {
                rowJudge[row].first = -1;
            }
            
            if(colJudge[col].first == 0 || colJudge[col].first == player){
                colJudge[col].first = player;
                colJudge[col].second++;
                if(colJudge[col].second == total){
                    return player;
                }
            }
            else {
                colJudge[col].first = -1;
            }
            
            
            if(row == col){
                if(diag.first == 0 || diag.first == player){
                    diag.first = player;
                    diag.second++;
                    if(diag.second == total){
                        return player;
                    }
                }
                else{
                    diag.first = -1;
                }
            }
            if(row + col == total - 1){
                if(anti.first == 0 || anti.first == player){
                    anti.first = player;
                    anti.second++;
                    if(anti.second == total){
                        return player;
                    }
                }
                else{
                    anti.first = -1;
                }
            }
            return 0;
        }
    };