# Solution O(n), O(1) Beats 100.00%

**Author:** kovolev
**Votes:** 1
**Link:** [https://leetcode.com/problems/valid-mountain-array/solutions/4324345/](https://leetcode.com/problems/valid-mountain-array/solutions/4324345/)

---

# Complexity
- Time complexity: O(n)
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: O(1)
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
class Solution {

    /**
     * @param Integer[] $arr
     * @return Boolean
     */
    function validMountainArray($arr) {
        $left = 0;
        $right = count($arr) - 1;

        while($left < count($arr) - 1 && $arr[$left] < $arr[$left + 1])
            $left += 1;

        while($right > 0 && $arr[$right] < $arr[$right - 1])
            $right -= 1;

        if($left > 0 && $left == $right && $right < count($arr) - 1)
            return true;
        else
            return false;
    }
}
```