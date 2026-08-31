# PHP Solution

**Author:** user0177X
**Votes:** 0
**Link:** [https://leetcode.com/problems/design-tic-tac-toe/solutions/3582260/](https://leetcode.com/problems/design-tic-tac-toe/solutions/3582260/)

---

# Code
```
class TicTacToe {

    private array $matrix = [];
    private int $n = 0;
    private int $count = 0;

    /**
     * @param Integer $n
     */
    function __construct($n) {
        $this->n = $n;
        $this->matrix = [];
        for ($i = 1; $i < $n; $i++) {
            $this->matrix[$i] = array_fill(0, $n, 0);
        }

        $this->count = 0;
    }
  
    /**
     * @param Integer $row
     * @param Integer $col
     * @param Integer $player
     * @return Integer
     */
    function move($row, $col, $player) {
        
        $this->matrix[$row][$col] = $player;
        $this->count++;

        if ($this->count < $this->n * 2 - 1) {
            return 0; 
        }

        return $this->isWinner($row, $col, $player);
    }

    function isWinner($row, $col, $player) {

        if ($this->isWinRow($row, $col, $player)
            || $this->isWinCol($row, $col, $player)
            || $this->isWinDiagonal($row, $col, $player)
            || $this->isWinDiagonalOpposite($row, $col, $player)
        ) {
            return $player;
        }

        return 0;
    }

    function isWinRow($row, $col, $player) {
        for ($i=0; $i < $this->n; $i++) {
            if ($this->matrix[$row][$i] != $player) {
                return false;
            }
        }
        return true;
    }

    function isWinCol($row, $col, $player) {
        for ($i=0; $i < $this->n; $i++) {
            if ($this->matrix[$i][$col] != $player) {
                return false;
            }
        }
        return true;
    }

    function isWinDiagonal($row, $col, $player) {
        if ($row == $col) {
            for ($i=0; $i < $this->n; $i++) {
                if ($this->matrix[$i][$i] != $player) {
                    return false;
                }
            }
            return true;
        }
        
        return false;
    }

    function isWinDiagonalOpposite($row, $col, $player) {
        if ($row + $col == $this->n - 1) {
            for ($i=0; $i < $this->n; $i++) {
                $j = $this->n - $i - 1;
                if ($this->matrix[$i][$j] != $player) {
                    return false;
                }
            }
            return true;
        }
        
        return false;
    }
}

/**
 * Your TicTacToe object will be instantiated and called as such:
 * $obj = TicTacToe($n);
 * $ret_1 = $obj->move($row, $col, $player);
 */
```