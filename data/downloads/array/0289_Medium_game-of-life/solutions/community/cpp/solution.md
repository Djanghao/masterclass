# C++ O(1) space, O(mn) time

**Author:** StefanPochmann
**Votes:** 646
**Link:** [https://leetcode.com/problems/game-of-life/solutions/73230/](https://leetcode.com/problems/game-of-life/solutions/73230/)

---

Since the board has ints but only the 1-bit is used, I use the 2-bit to store the new state. At the end, replace the old state with the new state by shifting all values one bit to the right.

    void gameOfLife(vector<vector<int>>& board) {
        int m = board.size(), n = m ? board[0].size() : 0;
        for (int i=0; i<m; ++i) {
            for (int j=0; j<n; ++j) {
                int count = 0;
                for (int I=max(i-1, 0); I<min(i+2, m); ++I)
                    for (int J=max(j-1, 0); J<min(j+2, n); ++J)
                        count += board[I][J] & 1;
                if (count == 3 || count - board[i][j] == 3)
                    board[i][j] |= 2;
            }
        }
        for (int i=0; i<m; ++i)
            for (int j=0; j<n; ++j)
                board[i][j] >>= 1;
    }

Note that the above `count` counts the live ones among a cell's neighbors and the cell itself. Starting with `int count = -board[i][j]` counts only the live neighbors and allows the neat

    if ((count | board[i][j]) == 3)

test. Thanks to aileenbai for showing that one in the comments.