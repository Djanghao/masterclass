# Single loop counting (3ms)

**Author:** J22qIDYZa7
**Votes:** 0
**Link:** [https://leetcode.com/problems/swap-adjacent-in-lr-string/solutions/6115045/](https://leetcode.com/problems/swap-adjacent-in-lr-string/solutions/6115045/)

---

# Code
```php []
class Solution {

    /**
     * @param String $start
     * @param String $result
     * @return Boolean
     */
    function canTransform($start, $result) {
        $l = 0;
        $r = 0;

        $len = strlen($start);

        for ($i = 0; $i < $len; $i++) {

            $s = $start[$i];
            $t = $result[$i];

            if ($s == 'L') {
                if ($r > 0) {
                    return false;
                }
                $l--;
            } elseif ($s == 'R') {
                $r++;
            }

            if ($t == 'L') {
                $l++;
            } elseif ($t == 'R') {
                if ($l > 0) {
                    return false;
                }
                $r--;
            }

            if ($l < 0 || $r < 0)
                return false;
        }

        return $l == 0 && $r == 0;
    }
}
```