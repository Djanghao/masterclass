# Javascript simple one pass

**Author:** 6117392
**Votes:** 10
**Link:** [https://leetcode.com/problems/battleships-in-a-board/solutions/757718/](https://leetcode.com/problems/battleships-in-a-board/solutions/757718/)

---

```
/**
x x . . x
. . x . x
. . . . x
x x . . .
 */
var countBattleships = function(board) {
    let count = 0;
    for (let i = 0; i < board.length; i++) {
        for (let j = 0; j < board[i].length; j++) {
            if (board[i][j] === 'X'
                && board[i][j-1] !== 'X'
                && (!board[i-1] || board[i-1][j] !== 'X')) count++;
        }
    }
    return count;
};
```