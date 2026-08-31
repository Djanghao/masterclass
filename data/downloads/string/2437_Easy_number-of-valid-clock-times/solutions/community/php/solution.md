# PHP Clean Solution

**Author:** gmalykh2000
**Votes:** 0
**Link:** [https://leetcode.com/problems/number-of-valid-clock-times/solutions/4994940/](https://leetcode.com/problems/number-of-valid-clock-times/solutions/4994940/)

---

# Code
```
class Solution {

    /**
     * @param String $time
     * @return Integer
     */
    function countTime($time) {
        [$h1, $h2, $_, $m1, $m2] = str_split($time);

        $r = 1;

        if ($h1 === '?' && $h2 === '?') $r *= 24;
        if ($h1 === '?' && $h2 !== '?') $r *= $h2 < 4 ? 3 : 2;
        if ($h2 === '?' && $h1 !== '?') $r *= $h1 < 2 ? 10 : 4;
        
        if ($m1 === '?') $r *= 6;
        if ($m2 === '?') $r *= 10;

        return $r;
    }
}
```