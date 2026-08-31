# usort, asort, ksort (320ms)

**Author:** J22qIDYZa7
**Votes:** 1
**Link:** [https://leetcode.com/problems/most-beautiful-item-for-each-query/solutions/6035276/](https://leetcode.com/problems/most-beautiful-item-for-each-query/solutions/6035276/)

---


# Code
```php []
class Solution
{

    /**
     * @param Integer[][] $items
     * @param Integer[] $queries
     * @return Integer[]
     */
    function maximumBeauty($items, $queries)
    {
        usort($items, function ($a, $b) {
            if(($a[0] <=> $b[0]) == 0){
                return $a[1] <=> $b[1];
            }
            return $a[0] <=> $b[0];
        });
        asort($queries);

        $max = 0;
        $position = 0;
        foreach ($queries as $key => $query) {
            while (isset($items[$position]) && $items[$position][0] <= $query) {
                $max = max($max, $items[$position][1]);
                $position++;
            }
            $queries[$key] = $max;
        }

        ksort($queries);
        return $queries;
    }
}
```