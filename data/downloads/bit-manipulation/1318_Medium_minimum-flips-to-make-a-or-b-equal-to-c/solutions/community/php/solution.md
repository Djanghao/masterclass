# PHP Solution short and long

**Author:** saigonguy
**Votes:** 1
**Link:** [https://leetcode.com/problems/minimum-flips-to-make-a-or-b-equal-to-c/solutions/3606946/](https://leetcode.com/problems/minimum-flips-to-make-a-or-b-equal-to-c/solutions/3606946/)

---


# Code
```
class Solution {

    /**
     * Long
     */
    function minFlips($a, $b, $c) {
        $flip = 0;
        while($a !== 0 || $b !== 0 || $c !== 0) {
            if( $c&1 == 1) {
                if(($a&1) ==0 && ($b&1) == 0) {
                    $flip++;
                }
            } else {
                $flip += (($a&1) + ($b&1));
            }
            $a>>=1;
            $b>>=1;
            $c>>=1;
        }
        return $flip;
    }

    /**
     * Short
     */
    function minFlips($a, $b, $c) {
        $flip = 0;
        while ($a != 0 || $b != 0 || $c != 0) {
            $flip += ($c & 1) ? (($a & 1) || ($b & 1) ? 0 : 1) : ($a & 1) + ($b & 1);
            $a /= 2;
            $b /= 2;
            $c /= 2;
        }
        return $flip;
    }
}
```