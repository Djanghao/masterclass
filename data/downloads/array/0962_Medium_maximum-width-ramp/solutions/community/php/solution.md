# BEATS 100%

**Author:** Heliostat9
**Votes:** 0
**Link:** [https://leetcode.com/problems/maximum-width-ramp/solutions/5896865/](https://leetcode.com/problems/maximum-width-ramp/solutions/5896865/)

---


# Solution
```php []
class Solution {

    /**
     * @param Integer[] $nums
     * @return Integer
     */
    function maxWidthRamp(array $nums): int {
        $stack = [];
        $max = 0;

        $n = count($nums);

        for ($i = 0; $i < $n; $i++) {
            if (empty($stack) || $nums[$i] < $nums[end($stack)]) {
                $stack[] = $i;
            }
        }

        for ($j = $n - 1; $j >= 0; $j--) {
            while(!empty($stack) && $nums[$j] >= $nums[end($stack)]) {
               $i = array_pop($stack);
               $max = max($max, $j - $i);
            }
        }

        return $max;
    }
}
```