# VM

**Author:** venturamendo
**Votes:** 0
**Link:** [https://leetcode.com/problems/find-the-highest-altitude/solutions/6031328/](https://leetcode.com/problems/find-the-highest-altitude/solutions/6031328/)

---

```php []
class Solution {

    /**
     * @param Integer[] $gain
     * @return Integer
     */
    function largestAltitude($gain) {
        $max = 0;
        $last = 0;
        foreach ($gain as $delta) {
            $last += $delta;
            if ($delta > 0) {
                $max = max($max, $last);
            }
        }
        return $max;
    }
}
```