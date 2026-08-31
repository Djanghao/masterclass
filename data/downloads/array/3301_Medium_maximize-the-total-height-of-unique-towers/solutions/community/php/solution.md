# PHP solution | Beats 100% ✅

**Author:** TarantulaNebula
**Votes:** 0
**Link:** [https://leetcode.com/problems/maximize-the-total-height-of-unique-towers/solutions/5846942/](https://leetcode.com/problems/maximize-the-total-height-of-unique-towers/solutions/5846942/)

---


---



# Complexity
- Time complexity:$$O(nlogn)$$
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity:$$O(1)$$
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```php []
class Solution {

    /**
     * @param Integer[] $maximumHeight
     * @return Integer
     */
    function maximumTotalSum($maximumHeight) {
        sort($maximumHeight);
        $n = sizeof($maximumHeight);
        $currHeight = 0; $sum = 0;
        $lastAssignedHeight = PHP_INT_MAX;
        for($i = $n - 1; $i >= 0; $i--){
            $currHeight = min($maximumHeight[$i], $lastAssignedHeight - 1);
            if($currHeight < 1){
                return -1;
            }
            $sum += $currHeight;
            $lastAssignedHeight = $currHeight;
        }

        return $sum;
    }
}
```