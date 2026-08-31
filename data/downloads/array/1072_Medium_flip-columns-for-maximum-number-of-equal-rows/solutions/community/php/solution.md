# PHP solution code time and space beats 100% working 22/11/2024

**Author:** kimduong322
**Votes:** 0
**Link:** [https://leetcode.com/problems/flip-columns-for-maximum-number-of-equal-rows/solutions/6071401/](https://leetcode.com/problems/flip-columns-for-maximum-number-of-equal-rows/solutions/6071401/)

---


```php []
class Solution {

    /**
     * @param Integer[][] $matrix
     * @return Integer
     */
    function maxEqualRowsAfterFlips($matrix) {
        $h = [];
        foreach($matrix as $r) {
            $f = $r[0];
            $x = "";
            foreach($r as $b) {
                $b === $f ? ($x .= 'T') : ($x .= 'F');
            }
            if (array_key_exists($x, $h)) {
                $h[$x]++;
            } else $h[$x] = 1;
        }
        $res = -1;
        foreach ($h as $k => $v) {
            $res = max($res, $v);
        }
        return $res;
    }
}
```