# php

**Author:** 9SdWaZ11SF
**Votes:** 0
**Link:** [https://leetcode.com/problems/divisible-and-non-divisible-sums-difference/solutions/6088621/](https://leetcode.com/problems/divisible-and-non-divisible-sums-difference/solutions/6088621/)

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
     * @param Integer $n
     * @param Integer $m
     * @return Integer
     */
    function differenceOfSums($n, $m) {
        //$baseArr = range(1, $n);
        $without = 0;
        $with = 0;

        for ($i = 1; $i <= $n; $i++) {
            // if ($i % $m !== 0) {
            //     $without += $i;
            // } else {
            //     $with += $i;
            // }
            $i % $m !== 0 ? $without += $i : $with += $i;
        }

        return $without - $with;
    }
}
```