# Easy solution

**Author:** spone12
**Votes:** 0
**Link:** [https://leetcode.com/problems/neither-minimum-nor-maximum/solutions/5985104/](https://leetcode.com/problems/neither-minimum-nor-maximum/solutions/5985104/)

---


# Complexity
- Time complexity: 5ms,  $$O(n)$$
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: 19.92mb, $$O(1)$$
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```php []
class Solution {

    /**
     * @param Integer[] $nums
     * @return Integer
     */
    function findNonMinOrMax($nums) {

        $minMax = [min($nums), max($nums)];
        foreach ($nums as $num) {
            if (!in_array($num, $minMax)) {
                return $num;
            }
        }
        return -1;
    }
}
```