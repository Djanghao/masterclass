# PHP solution

**Author:** punkundead
**Votes:** 0
**Link:** [https://leetcode.com/problems/array-nesting/solutions/1438810/](https://leetcode.com/problems/array-nesting/solutions/1438810/)

---

```php
class Solution
{

    /**
     * @param Integer[] $nums
     *
     * @return Integer
     */
    function arrayNesting($nums)
    {
        $max = 1;

        $count = count($nums);
        for ($i = 0; $i < $count; $i++) {
            if ($nums[$i] >= 0) {
                $j = $i;
                $c = 0;
                while ($nums[$j] >= 0) {
                    $n = $nums[$j];
                    $nums[$j] = -1;
                    $j = $n;
                    $c++;
                }
                $max = max($max, $c);
            }
        }

        return $max;
    }
}
```