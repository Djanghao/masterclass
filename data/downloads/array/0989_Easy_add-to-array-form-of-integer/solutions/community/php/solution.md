# PHP Solution with built in functions only

**Author:** agomaahu
**Votes:** 2
**Link:** [https://leetcode.com/problems/add-to-array-form-of-integer/solutions/3295062/](https://leetcode.com/problems/add-to-array-form-of-integer/solutions/3295062/)

---


# Code
```
class Solution {

    /**
     * @param Integer[] $num
     * @param Integer $k
     * @return Integer[]
     */
    function addToArrayForm($num, $k) {
        return str_split(bcadd(implode($num), $k));
    }
}
```