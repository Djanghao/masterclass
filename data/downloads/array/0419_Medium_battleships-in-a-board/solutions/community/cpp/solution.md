# Easiest solution | just 6 lines | with explanation

**Author:** jagdish_t19
**Votes:** 13
**Link:** [https://leetcode.com/problems/battleships-in-a-board/solutions/1784118/](https://leetcode.com/problems/battleships-in-a-board/solutions/1784118/)

---

for each 'X', we will decide whether this X will create a new battleship or it will join an already created battleship. This can be checked by following conditions:
			if there is an 'X' to upper cell of current cell, current X will not create a new battleship, it will join the battleship of upper cell.
			if there is an 'X' to left cell of current cell, current X will not create a new battleship, it will join the battleship of left cell. 
So, when there is no X to left cell or upper cell of the current cell, A new battleship is created. The number of battleships is simply the number of times a new battleship gets created which will be the answer.

Following is my C++ code:
```
struct Solution {
    int countBattleships(vector<vector<char>>& board) {
        int ans = 0;
        for (int i = 0; i < board.size(); i++)
            for (int j = 0; j < board[0].size(); j++)
                if ('X' == board[i][j] && (!i || '.' == board[i - 1][j]) && (!j || '.' == board[i][j - 1]))
                    ans++;
        return ans;
    }
};
```