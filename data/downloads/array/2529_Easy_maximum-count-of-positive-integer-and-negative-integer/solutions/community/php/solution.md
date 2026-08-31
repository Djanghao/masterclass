# Beat 100% with PHP

**Author:** fagner0
**Votes:** 0
**Link:** [https://leetcode.com/problems/maximum-count-of-positive-integer-and-negative-integer/solutions/5967433/](https://leetcode.com/problems/maximum-count-of-positive-integer-and-negative-integer/solutions/5967433/)

---

# Code
```php []
class Solution {

    /**
     * @param Integer[] $nums
     * @return Integer
     */
    function maximumCount($nums) {
        $count = count($nums);
        $positives = $negatives = 0;

        for ($i = 0; $i < $count; $i++) {
            if ($nums[$i] < 0) $negatives++;
            elseif ($nums[$i] > 0) $positives++;
        }

        return max($positives, $negatives);
    }
}
```