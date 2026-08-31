# PHP recursive solution, beat 100%/100%

**Author:** churakovmike
**Votes:** 0
**Link:** [https://leetcode.com/problems/find-triangular-sum-of-an-array/solutions/3018533/](https://leetcode.com/problems/find-triangular-sum-of-an-array/solutions/3018533/)

---


# Code
```
class Solution {

    /**
     * @param Integer[] $nums
     * @return Integer
     */
    function triangularSum($nums) {
        if (count($nums) === 1) {
            return $nums[0];
        }

        $newNums = [];

        for ($i = 0; $i < count($nums) - 1; $i++) {
            $newNums[] = ($nums[$i] + $nums[$i+1]) % 10;
        }

        return $this->triangularSum($newNums);
    }
}
```