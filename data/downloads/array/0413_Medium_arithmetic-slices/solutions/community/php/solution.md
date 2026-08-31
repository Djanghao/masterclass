# php

**Author:** bokabokabokaboka
**Votes:** 0
**Link:** [https://leetcode.com/problems/arithmetic-slices/solutions/5064313/](https://leetcode.com/problems/arithmetic-slices/solutions/5064313/)

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
```
class Solution {

    /**
     * @param Integer[] $nums
     * @return Integer
     */
    function numberOfArithmeticSlices($nums) {
        $count = 0;
        $prev = 0;

        for($i = 0; $i < count($nums) - 2; $i++)
        {
            if($nums[$i] - $nums[$i + 1] === $nums[$i + 1] - $nums[$i + 2])
            {
                $count += ++$prev;
            }
            else
            {
                $prev = 0;
            }
        }

        return $count;
    }
}
```