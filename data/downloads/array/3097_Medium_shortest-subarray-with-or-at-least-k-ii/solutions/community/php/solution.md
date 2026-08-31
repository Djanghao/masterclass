# PHP Solution

**Author:** garimarajput748
**Votes:** 1
**Link:** [https://leetcode.com/problems/shortest-subarray-with-or-at-least-k-ii/solutions/6029703/](https://leetcode.com/problems/shortest-subarray-with-or-at-least-k-ii/solutions/6029703/)

---

# Complexity
- Time complexity: $$O(n)$$  

- Space complexity: $$O(1)$$

# Code
```php []
class Solution {

    /**
     * @param Integer[] $nums
     * @param Integer $k
     * @return Integer
     */
    function minimumSubarrayLength($nums, $k) {
        $count = array_fill(0, 32, 0);
        $start = 0;
        $end = 0;
        $min = PHP_INT_MAX;

        while ($end < count($nums)) {
            $this->updateBits($count, $nums[$end], 1);

            while ($start <= $end && $this->getVal($count) >= $k) {
                $min = min($min, $end - $start + 1);
                $this->updateBits($count, $nums[$start], -1);
                $start++;
            }

            $end++;
        }

        return $min == PHP_INT_MAX ? -1 : $min;
    }

    private function updateBits(&$count, $num, $val) {
        for ($i = 0; $i < 32; $i++) {
            if ((($num >> $i) & 1) == 1) {
                $count[$i] += $val;
            }
        }
    }

    private function getVal($count) {
        $ans = 0;
        for ($i = 0; $i < 32; $i++) {
            if ($count[$i] > 0) {
                $ans |= (1 << $i);
            }
        }
        return $ans;
    }
    
}
```