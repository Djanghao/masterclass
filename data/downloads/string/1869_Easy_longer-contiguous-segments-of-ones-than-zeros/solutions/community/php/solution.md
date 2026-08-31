# __ Easy Logical solution __ 🐘

**Author:** Gasal246
**Votes:** 0
**Link:** [https://leetcode.com/problems/longer-contiguous-segments-of-ones-than-zeros/solutions/4636683/](https://leetcode.com/problems/longer-contiguous-segments-of-ones-than-zeros/solutions/4636683/)

---

### Easy Logical solution using php
*...applicable to any language*

# Code
```
class Solution {

    /**
     * @param String $s
     * @return Boolean
     */
    function checkZeroOnes($s) {
        $zeros = $ones = 0;
        $zLen = $oLen = 0;
        for ($i = 0; $i < strlen($s); $i++) {
            if ($s[$i] === '0') {
                $zLen++;
                $oLen = 0;
            } else {
                $oLen++;
                $zLen = 0;
            }
            $zeros = max($zeros, $zLen);
            $ones = max($ones, $oLen);
        }
        return $ones > $zeros;
    }
}
```