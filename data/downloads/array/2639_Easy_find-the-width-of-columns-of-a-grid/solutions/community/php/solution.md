# PHP Solution

**Author:** astasjr
**Votes:** 0
**Link:** [https://leetcode.com/problems/find-the-width-of-columns-of-a-grid/solutions/5110270/](https://leetcode.com/problems/find-the-width-of-columns-of-a-grid/solutions/5110270/)

---


```
class Solution {

    /**
     * @param Integer[][] $grid
     * @return Integer[]
     */
    function findColumnWidth($grid) {
        $ans = [];
        for ($j = 0; $j < count($grid[0]); $j++) {
            $column = array_column($grid, $j);
            $lengths = array_map(function($item) {
                return strlen($item);
            }, $column);
            $ans[] = max($lengths);
        }
        return $ans;
    }
}
```