# Valid Tic-Tac-Toe State || Simple PHP Solution

**Author:** umerkhanwp
**Votes:** 0
**Link:** [https://leetcode.com/problems/valid-tic-tac-toe-state/solutions/4446481/](https://leetcode.com/problems/valid-tic-tac-toe-state/solutions/4446481/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
class Solution {

    /**
     * @param String[] $board
     * @return Boolean
     */
    function validTicTacToe($board) {
        $countX = 0;
        $countY = 0;
        $wins = ['diagonalX' => 0, 'diagonalY' => 0, 'rowX' => 0, 'rowY' => 0, 'colX' => 0, 'colY' => 0];

        // First Diagonal
        if($board[0][0] == 'X' && $board[1][1] == 'X' && $board[2][2] == 'X') {
            $wins['diagonalX']++;
        } elseif($board[0][0] == 'O' && $board[1][1] == 'O' && $board[2][2] == 'O') {
            $wins['diagonalY']++;
        }

        // Second Diagonal
        if($board[0][2] == 'X' && $board[1][1] == 'X' && $board[2][0] == 'X') {
            $wins['diagonalX']++;
        } elseif($board[0][2] == 'O' && $board[1][1] == 'O' && $board[2][0] == 'O') {
            $wins['diagonalY']++;
        }

        $this->calcCol(0, $wins, $board);
        $this->calcCol(1, $wins, $board);
        $this->calcCol(2, $wins, $board);

        foreach($board as $k => $b) {
            if($b == 'XXX') {
                $wins['rowX']++;
            } elseif($b == 'OOO') {
                $wins['rowY']++;
            } 
            $countX += substr_count($b, 'X');
            $countY += substr_count($b, 'O');
        }
        
        return $this->isValid($countX, $countY, $wins);
    }

    function calcCol($col, &$wins, $board) {
        $x = 0;
        $y = 0;
        for($i = 0; $i < 3; $i++) {
            if($board[$i][$col] == 'X') {
                $x++;
            } elseif($board[$i][$col] == 'O') {
                $y++;
            }
        }

        if($x == 3) $wins['colX']++;
        elseif($y == 3) $wins['colY']++;
    }

    function isValid($countX, $countY, $wins) {
        return !(
            $countY > $countX || 
            $countX > $countY + 1 || 
            $wins['rowX'] > 1 || 
            $wins['rowY'] > 1 || 
            $wins['colX'] > 1 || 
            $wins['colY'] > 1 || 
            ($wins['rowX'] > 0 && $wins['rowY'] > 0) || 
            ($wins['colX'] > 0 && $wins['colY'] > 0) || 
            ($countX == $countY && ($wins['rowX'] > 0 || $wins['colX'] > 0 || $wins['diagonalX'] > 0)) || 
            ($countX > $countY && ($wins['rowY'] > 0 || $wins['colY'] > 0 || $wins['diagonalY'] > 0))
        );
    }
}
```