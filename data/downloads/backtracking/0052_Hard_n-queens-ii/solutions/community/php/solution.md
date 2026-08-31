# VM

**Author:** venturamendo
**Votes:** 0
**Link:** [https://leetcode.com/problems/n-queens-ii/solutions/6101427/](https://leetcode.com/problems/n-queens-ii/solutions/6101427/)

---

```php []
class Solution {

    /**
     * @param Integer $n
     * @return Integer
     */
    function totalNQueens($n) {
        // Backtracking: https://www.youtube.com/watch?v=nalYyLZgvCY
        // 
        // Let's try to place one queen on each row.
        // Each time we call recursively, we go one row further.
        // To place a queen, we must first check if the cell is attacked or not.
        $this->n = $n;
        $this->validResults = 0;
        $this->backtrack();
        return $this->validResults;
    }

    // Cells in same positive diagonal have the same result of row-col.
    // Cells in same negative diagonal have the same result of row+col.
    function backtrack(
        $row = 0,
        $attackedCols = [],
        $attackedPositiveDiagonals = [],
        $attackedNegativeDiagonals = [],
    ) {
        if ($row >= $this->n) {
            $this->validResults++;
            return;
        }

        for ($col=0; $col<$this->n; $col++) {
            if (isset($attackedCols[$col])
                || isset($attackedPositiveDiagonals[$row-$col])
                || isset($attackedNegativeDiagonals[$row+$col])
            ) continue; // Already attacked cell

            $newAttackedCols = $attackedCols;
            $newAttackedCols[$col] = true;
            $newAttackedPositiveDiagonals = $attackedPositiveDiagonals;
            $newAttackedPositiveDiagonals[$row-$col] = true;
            $newAttackedNegativeDiagonals = $attackedNegativeDiagonals;
            $newAttackedNegativeDiagonals[$row+$col] = true;

            $this->backtrack(
                $row+1,
                $newAttackedCols,
                $newAttackedPositiveDiagonals,
                $newAttackedNegativeDiagonals,
            );
        }
    }
}
```