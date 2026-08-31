# PHP code

**Author:** rezaa98
**Votes:** 0
**Link:** [https://leetcode.com/problems/make-array-elements-equal-to-zero/solutions/6054114/](https://leetcode.com/problems/make-array-elements-equal-to-zero/solutions/6054114/)

---

# Code
```php []
class Solution {

    /**
     * @param Integer[] $nums
     * @return Integer
     */
    function countValidSelections($nums) {
        $n = count($nums);
        $sum = array_sum($nums);

        if ($sum == 0) {
            return 2 * $n;
        }

        $prefix = array_fill(0, $n, 0);
        $prefix[0] = $nums[0];

        for ($i = 1; $i < $n; $i++) {
            $prefix[$i] = $nums[$i] + $prefix[$i - 1];
        }

        $res = 0;
        for ($i = 0; $i < $n; $i++) {
            if ($nums[$i] == 0 && $sum - $prefix[$i] == $prefix[$i]) {
                $res += 2;
            }
            if ($nums[$i] == 0 && abs(($sum - $prefix[$i]) - $prefix[$i]) == 1) {
                $res += 1;
            }
        }

        return $res;
    }
}
```