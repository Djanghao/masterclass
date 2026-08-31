# VM

**Author:** venturamendo
**Votes:** 0
**Link:** [https://leetcode.com/problems/equal-row-and-column-pairs/solutions/6032971/](https://leetcode.com/problems/equal-row-and-column-pairs/solutions/6032971/)

---

```php []
class Solution {

    /**
     * @param Integer[][] $grid
     * @return Integer
     */
    function equalPairs($grid) {
        // 1. Hash the values of each row (complete) and store those hashes in a map.
        //    If a hash is repeated, increase its 'value'.
        // 2. Hash the values of each column (complete) and compare against the map, if a hash is found, we have 'value' matches to add.

        $n = count($grid);
        if ($n <= 1) return $n;

        $rowMap = [];
        $equalRowCol = 0;

        foreach ($grid as $row) {
            $hash = implode('_', $row);
            $rowMap[$hash] = ($rowMap[$hash] ?? 0) + 1; // If not found, set its value to 1. Else, add 1.
        }
        for ($i = 0; $i < $n; $i++) {
            $hash = $this->hashOfCol($grid, $i, $n);
            $equalRowCol += ($rowMap[$hash] ?? 0);
        }
        return $equalRowCol;
    }

    function hashOfCol($grid, $i, $n): string {
        $col = [];
        for ($j = 0; $j < $n; $j++) {
            $col[] = $grid[$j][$i];
        }
        return implode('_', $col);
    }
}
```