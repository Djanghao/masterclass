# php

**Author:** tinghaolai
**Votes:** 0
**Link:** [https://leetcode.com/problems/minimum-number-of-increments-on-subarrays-to-form-a-target-array/solutions/3225504/](https://leetcode.com/problems/minimum-number-of-increments-on-subarrays-to-form-a-target-array/solutions/3225504/)

---


# Code
```
class Solution {

    /**
     * @param Integer[] $target
     * @return Integer
     */
    function minNumberOperations($target) {
        $currentMax = 0;
        $result = 0;
        foreach ($target as $value) {
            if ($value > $currentMax) {
                $result += $value - $currentMax;
            }

            $currentMax = $value;
        }

        return $result;
    }
}
```