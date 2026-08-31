# PHP Solution | Beats 100%

**Author:** garimarajput748
**Votes:** 1
**Link:** [https://leetcode.com/problems/minimized-maximum-of-products-distributed-to-any-store/solutions/6042972/](https://leetcode.com/problems/minimized-maximum-of-products-distributed-to-any-store/solutions/6042972/)

---

# Complexity
- Time complexity: $$O(Nlog(Max(Quantities)))$$ 

- Space complexity: $$O(1)$$

# Code
```php []
class Solution {

    /**
     * @param Integer $n
     * @param Integer[] $quantities
     * @return Integer
     */
    function minimizedMaximum($n, $quantities) {
        $low = 1;
        $high = max($quantities);

        while ($low < $high) {
            $mid = intdiv($low + $high, 2);
            $needed = 0;

            foreach ($quantities as $q) {
                $needed += intdiv($q + $mid - 1, $mid);
            }

            if ($needed <= $n) {
                $high = $mid;
            } else {
                $low = $mid + 1;
            }
        }

        return $low;
    }
}
```