# Optimized PHP solution

**Author:** wolfvit
**Votes:** 0
**Link:** [https://leetcode.com/problems/maximum-swap/solutions/5927193/](https://leetcode.com/problems/maximum-swap/solutions/5927193/)

---

# Complexity
- Time complexity: $$O(n)$$
- Space complexity: $$O(n)$$

# Code
```php []
class Solution {

    /**
     * @param Integer $num
     * @return Integer
     */
    function maximumSwap($num) {
        $s = strval($num); 
        $l = strlen($s);
        $swap0 = $swap1 = -1;
        $max = $l - 1;

        for ($i = $l - 2; $i >= 0; $i--) {
            if ($s[$i] > $s[$max]) {
                $max = $i;
            } elseif ($s[$i] < $s[$max]) {
                $swap0 = $i;
                $swap1 = $max;
            }
        }

        if ($swap1 >= 0)
            [$s[$swap0], $s[$swap1]] = [$s[$swap1], $s[$swap0]];

        return intval($s);
    }
}
```