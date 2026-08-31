# Simple JavaScript solution using backtracking

**Author:** loctn
**Votes:** 35
**Link:** [https://leetcode.com/problems/n-queens/solutions/19840/](https://leetcode.com/problems/n-queens/solutions/19840/)

---

```
var solveNQueens = function(n) {
    const res = [];
    backtrack(res, n);
    return res;
};

function backtrack(res, n, board = [], r = 0) {
    if (r === n) {
        res.push(board.map(c => '.'.repeat(c) + 'Q' + '.'.repeat(n - c - 1)));
        return;
    }
    for (let c = 0; c < n; c++) {
        if (!board.some((bc, br) => bc === c || bc === c + r - br || bc === c - r + br)) {
            board.push(c);
            backtrack(res, n, board, r + 1);
            board.pop();
        }
    }
}
```