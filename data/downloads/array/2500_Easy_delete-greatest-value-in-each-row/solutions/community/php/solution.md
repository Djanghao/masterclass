# Simple, Beats 100%

**Author:** J22qIDYZa7
**Votes:** 0
**Link:** [https://leetcode.com/problems/delete-greatest-value-in-each-row/solutions/6127920/](https://leetcode.com/problems/delete-greatest-value-in-each-row/solutions/6127920/)

---

# Code
```php []
class Solution
{

    /**
     * @param Integer[][] $grid
     * @return Integer
     */
    function deleteGreatestValue($grid)
    {
        $columns = count($grid[0]);
        $sum = array_fill(0, $columns, 0);

        foreach ($grid as $row){
            sort($row);

            for($column = 0; $column < $columns; $column++) {
                if($sum[$column] < $row[$column]) {
                    $sum[$column] = $row[$column];
                }
            }

        }

        return array_sum($sum);
    }
}
```