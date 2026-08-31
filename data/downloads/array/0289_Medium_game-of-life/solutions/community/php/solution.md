# VM

**Author:** venturamendo
**Votes:** 0
**Link:** [https://leetcode.com/problems/game-of-life/solutions/6079290/](https://leetcode.com/problems/game-of-life/solutions/6079290/)

---

```php []
class Solution {

    /**
     * @param Integer[][] $board
     * @return NULL
     */
    function gameOfLife(&$board) {
        $numRows = count($board);
        $numCols = count($board[0]);

        $stateChange = array_fill(0, $numRows, array_fill(0, $numCols, false));

        foreach ($board as $row => $rowCells) {
            foreach ($rowCells as $col => $cell) {
                $aliveNeighbours = -$cell;
                for ($iRow=max(0, $row-1); $iRow<min($numRows, $row+2); $iRow++) {
                    for ($iCol=max(0, $col-1); $iCol<min($numCols, $col+2); $iCol++) {
                        $aliveNeighbours += $board[$iRow][$iCol];
                    }
                }
                $stateChange[$row][$col] = ($cell === 0)
                    ? $aliveNeighbours === 3
                    : ($aliveNeighbours < 2 || $aliveNeighbours > 3);
            }
        }

        foreach ($board as $row => $rowCells) {
            foreach ($rowCells as $col => $cell) {
                if ($stateChange[$row][$col]) $board[$row][$col] = (int)!(bool)$board[$row][$col];
            }
        }
    }
}
```