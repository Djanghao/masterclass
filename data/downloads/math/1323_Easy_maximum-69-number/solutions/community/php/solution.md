# 2 line answer | easy | php

**Author:** ezzoddin
**Votes:** 1
**Link:** [https://leetcode.com/problems/maximum-69-number/solutions/3341573/](https://leetcode.com/problems/maximum-69-number/solutions/3341573/)

---


# Code
```
class Solution {

    /**
     * @param Integer $num
     * @return Integer
     */
    function maximum69Number ($num) {
        $pos = strpos($num, 6);
        return $pos !== false ? substr_replace($num, 9, $pos, 1) : $num;
    }
}
```