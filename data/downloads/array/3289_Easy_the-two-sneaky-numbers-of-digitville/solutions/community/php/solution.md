# php

**Author:** 9SdWaZ11SF
**Votes:** 0
**Link:** [https://leetcode.com/problems/the-two-sneaky-numbers-of-digitville/solutions/6084575/](https://leetcode.com/problems/the-two-sneaky-numbers-of-digitville/solutions/6084575/)

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
     * @return Integer[]
     */
    function getSneakyNumbers($nums) {
        $sort = sort($nums);
        $res = [];

         for($i = 0; $i < count($nums) - 1; $i++) {
            if($nums[$i] === $nums[$i + 1]) {
                $res[] = $nums[$i];
            }
         }
         return $res;
    }
}
```