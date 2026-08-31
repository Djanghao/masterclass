# Runtime 311 ms Beats 100.00%; Memory 27.57 MB Beats 100.00%

**Author:** qwebot
**Votes:** 0
**Link:** [https://leetcode.com/problems/minimum-limit-of-balls-in-a-bag/solutions/6123088/](https://leetcode.com/problems/minimum-limit-of-balls-in-a-bag/solutions/6123088/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```php []
class Solution {

    /**
     * @param Integer[] $nums
     * @param Integer $maxOperations
     * @return Integer
     */
    function minimumSize($nums, $maxOperations) {
        $left = 1;
        $right = max($nums);

        while ($left < $right) {
            $mid = intdiv(($left + $right), 2);

            $canAchive = function() use ($nums, $mid, $maxOperations) {
                $operations = 0;
                foreach ($nums as $num) {
                    if ($num <= $mid) {
                        continue;
                    }
                    $operations += intdiv(($num - 1), $mid);

                    if ($operations > $maxOperations) {
                        return false;
                    }
                }
                return $operations <= $maxOperations;
            };

            if ($canAchive()) {
                $right = $mid;
            } else {
                $left = $mid + 1;
            }
        }

        return $left;
    }
}
```