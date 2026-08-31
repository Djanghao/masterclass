# JavaScript solution commented and explained

**Author:** darkalarm
**Votes:** 20
**Link:** [https://leetcode.com/problems/find-winner-on-a-tic-tac-toe-game/solutions/1474728/](https://leetcode.com/problems/find-winner-on-a-tic-tac-toe-game/solutions/1474728/)

---

If we assign player `A` value 1, and player `B` value -1. Then in order for any of them to win
the addition of all values of a row / column / diagonal has to be 3 or -3. Given a row or column
index, if `rowIndex === columnIndex`, then it is on the main diagonal. If `rowIndex + columnIndex == 2`,
then it is on the anti diagonal. With this information with us, we can write a solution.

```
/**
 * @param {number[][]} moves
 * @return {string}
 */
var tictactoe = function(moves) {
  // record and move on approach
  let rows = [0, 0, 0], cols = [0, 0, 0], dia = 0, antiDia = 0, count = 0;
  for(let [row, column] of moves) {
    
    // Let's assume 1 represents A, -1 represents B
    let value = (count % 2 === 0) ? 1 : -1;
    rows[row] += value;
    cols[column] += value;
    
    // row + column === 2, it is on the anti diagonal
    if (row + column === 2) {
      antiDia += value;
    }
    
    // if row === column, it is on the main diagonal
    if (row === column) {
      dia += value;
    }
    // check whether we have a result already
    if([rows[row], cols[column], antiDia, dia].includes(3)) {
      return 'A'
    } else if ([rows[row], cols[column], antiDia, dia].includes(-3)) {
      return 'B' 
    }
    count++;
  }
  // Some moves are still left to be made
  if (count < 9) {
    return 'Pending';
  }
  return 'Draw';
};
```


