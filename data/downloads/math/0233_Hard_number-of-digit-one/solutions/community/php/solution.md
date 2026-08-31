# Number of Digit One (Beats 100% Both)

**Author:** florglsnorp
**Votes:** 0
**Link:** [https://leetcode.com/problems/number-of-digit-one/solutions/6007888/](https://leetcode.com/problems/number-of-digit-one/solutions/6007888/)

---


# Code
```php []
class Solution {

    /**
     * @param Integer $n
     * @return Integer
     */
    function countDigitOne($n) {
        $count = 0;
        $factor = 1;
        while ($factor <= $n) {
            $lower = $n - intval($n / $factor) * $factor;
            $current = intval(($n / $factor) % 10);
            $higher = intval($n / ($factor * 10));
            if ($current == 0) {
                $count += $higher * $factor;
            } elseif ($current == 1) {
                $count += $higher * $factor + $lower + 1;
            } else {
                $count += ($higher + 1) * $factor;
            }
            $factor *= 10;
        }
        return $count;
    }
}
```