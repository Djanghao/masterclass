# foreach + string concat (.=) + array_merge()

**Author:** yieldtoben
**Votes:** 0
**Link:** [https://leetcode.com/problems/find-winner-on-a-tic-tac-toe-game/solutions/5167635/](https://leetcode.com/problems/find-winner-on-a-tic-tac-toe-game/solutions/5167635/)

---

# Approach
Create arrays of strings for each win type (row|col|diag) and append the player to the appropriate win type indexed by the move element. Iterate over the merged win types and return the player if any contain 'AAA' or 'BBB', if not return "Draw" or "Pending" based on the number of moves played.

# Complexity
- Time complexity:
$$O(n)$$

- Space complexity:
$$O(1)$$

# Code
```
class Solution {

    /**
     * @param Integer[][] $moves
     * @return String
     */
    function tictactoe($moves) 
    {
      $col = $row = $diag = ["","",""];
      foreach ($moves as $p => $m)
      {
          [[$r, $c], $p] = [$m, $p % 2 ? "B" : "A"];
          $row[$r] .= $p; 
          $col[$c] .= $p;
          if ($r == $c) $diag[0] .= $p;
          if ($r + $c == 2) $diag[1] .= $p;
      }
      foreach (array_merge($row, $col, $diag) as $g)
          if ($g == "AAA" || $g == "BBB") return $g[0];
      return count($moves) == 9 ? "Draw" : "Pending";
    }
}
```