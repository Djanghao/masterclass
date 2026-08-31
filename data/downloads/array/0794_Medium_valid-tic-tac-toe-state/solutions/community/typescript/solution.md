# Simple solution

**Author:** mjlai3
**Votes:** 0
**Link:** [https://leetcode.com/problems/valid-tic-tac-toe-state/solutions/4239215/](https://leetcode.com/problems/valid-tic-tac-toe-state/solutions/4239215/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity:
O(1)

- Space complexity:
O(1)

# Code
```
function validTicTacToe(board: string[]): boolean {
  // Valid lengths
  if (board[0].length !== 3 || board[1].length !== 3 || board[2].length !== 3) {
    return false;
  }

  let x = 0, o = 0;
  let row = new Array(3).fill(0);
  let col = new Array(3).fill(0);
  let diag = 0;
  let antiDiag = 0;
  let xWinCount = 0;
  let oWinCount = 0;

  for (let rowIndex = 0;rowIndex<3;rowIndex++) {
    board[rowIndex].split('').forEach((char, columnIndex) => {
      if (char === "X") {
        ++x
        row[rowIndex] = row[rowIndex] - 1
        col[columnIndex] = col[columnIndex] - 1
        if (rowIndex === columnIndex) --diag
        if (rowIndex + columnIndex === 2) --antiDiag
      }
      if (char === "O") {
        ++o
        row[rowIndex] = row[rowIndex] + 1
        col[columnIndex] = col[columnIndex] + 1
        if (rowIndex === columnIndex) ++diag
        if (rowIndex + columnIndex === 2) ++antiDiag
      }
    })
  }

  if (o > x) {
    return false;
  }

  if (x - o > 1) {
    return false
  }

  for (const iRow of row) {
    if (iRow === -3) xWinCount++
    if (iRow === 3) oWinCount++
  }

  for (const iCol of col) {
    if (iCol === -3) xWinCount++
    if (iCol === 3) oWinCount++
  }

  if (diag === 3) oWinCount++
  if (antiDiag === 3) oWinCount++
  if (diag === -3) xWinCount++
  if (antiDiag === -3) xWinCount++

  if (xWinCount > 0 && oWinCount > 0) return false;

  // o cannot have same or more moves than x if x wins
  if (xWinCount > 0 && o >= x) return false;

  // x cannot have more moves than o if o wins
  if (oWinCount > 0 && x > o) return false;

  if (xWinCount > 2 || oWinCount > 2) return false;

  return true;
};
```