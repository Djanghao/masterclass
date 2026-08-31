# 529. Minesweeper || Simple PHP Solution || DFS

**Author:** umerkhanwp
**Votes:** 0
**Link:** [https://leetcode.com/problems/minesweeper/solutions/4377209/](https://leetcode.com/problems/minesweeper/solutions/4377209/)

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
  private $m;
  private $n;

    /**
     * @param String[][] $board
     * @param Integer[] $click
     * @return String[][]
     */
    function updateBoard($board, $click) {
        if($board[$click[0]][$click[1]] == 'M') {
            $board[$click[0]][$click[1]] = 'X';
            return $board;
        }
        $this->m = count($board);
        $this->n = count($board[0]);
        $this->dfs($board, $click[0], $click[1]);
        return $board;
    }

    function dfs(&$board, $row, $col) {
      if($row < 0 || $row >= $this->m || $col < 0 || $col >= $this->n || $board[$row][$col] != 'E') {
        return;
      }

      $directions = [[-1, 0], [1, 0], [0, -1], [0, 1], [-1, -1], [1, 1], [1, -1], [-1, 1]];
      $mines = 0;

      foreach($directions as $dir) {
        $newRow = $row + $dir[0];
        $newCol = $col + $dir[1];

        if($newRow >= 0 && $newRow < $this->m && $newCol >= 0 && $newCol < $this->n && $board[$newRow][$newCol] == 'M') {
          $mines++;
        }
      }

      if($mines > 0) {
        $board[$row][$col] = strval($mines);
      } else {
        $board[$row][$col] = 'B';

        foreach($directions as $dir) {
          $newRow = $row + $dir[0];
          $newCol = $col + $dir[1];
          $this->dfs($board, $newRow, $newCol);
        }
        
      }
    }
}
```