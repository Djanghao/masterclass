# php use bit manipulation beat 96.55%

**Author:** hjoru
**Votes:** 4
**Link:** [https://leetcode.com/problems/number-of-1-bits/solutions/1724179/](https://leetcode.com/problems/number-of-1-bits/solutions/1724179/)

---

```
class Solution {
    /**
     * @param Integer $n
     * @return Integer
     */
    function hammingWeight($n) {
        $count = 0;
        while ($n != 0) {
            if ($n & 1 == 1) {
                $count++;
            }
            $n = $n >> 1;
        }
        return $count;
    }
}