# 2 line PHP solution

**Author:** sammy_the_goose
**Votes:** 1
**Link:** [https://leetcode.com/problems/make-array-zero-by-subtracting-equal-amounts/solutions/2848650/](https://leetcode.com/problems/make-array-zero-by-subtracting-equal-amounts/solutions/2848650/)

---


# Code
```
class Solution {

    /**
     * @param Integer[] $nums
     * @return Integer
     */
    function minimumOperations($nums) {
        $values = array_count_values($nums);

        return (isset($values[0])) ? count($values) - 1 : count($values);
    }
}
```