# php

**Author:** rtyshyk
**Votes:** 0
**Link:** [https://leetcode.com/problems/find-closest-number-to-zero/solutions/5722448/](https://leetcode.com/problems/find-closest-number-to-zero/solutions/5722448/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity: O(n)
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: O(1)
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```php []
class Solution {

    /**
     * @param Integer[] $nums
     * @return Integer
     */
    function findClosestNumber($nums) {
        $closestNum = null;

        foreach ($nums as $num) {
            // If closestNum is null, set it to the current number
            if ($closestNum === null) {
                $closestNum = $num;
            } else {
                // Compare the absolute distance to 0
                if (abs($num) < abs($closestNum)) {
                    $closestNum = $num;
                } elseif (abs($num) == abs($closestNum) && $num > $closestNum) {
                    $closestNum = $num;
                }
            }
        }

        return $closestNum;
    }
}

```