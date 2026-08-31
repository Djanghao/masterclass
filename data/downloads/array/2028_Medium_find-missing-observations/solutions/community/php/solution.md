# php: non-standard approach by using 6 in the head and then using them to fill up with 1 at the tail

**Author:** V-Isa
**Votes:** 0
**Link:** [https://leetcode.com/problems/find-missing-observations/solutions/5743392/](https://leetcode.com/problems/find-missing-observations/solutions/5743392/)

---

# Code
```php []
class Solution {

    /**
     * @param Integer[] $rolls
     * @param Integer $mean
     * @param Integer $n
     * @return Integer[]
     */
    function missingRolls($rolls, $mean, $n) {
        for($i = 0, $c = count($rolls), $s = 0; $i < $c; $i++) {
            $s += $rolls[$i];
        }
        //($s + $ms) / ($c + $n) = $mean;
        $ms = $mean * ($c + $n) - $s;
        $mrolls = [];
        $mc = 0;
        while (6 < $ms) {
            $mrolls[] = 6;
            $ms -= 6;
            $mc++;
            if ($n < $mc) {
                return [];
            }
        }
        if (0 < $ms) {
            if ($n === $mc) {
                return [];
            }
            $mrolls[] = $ms;
            $mc++;
        }
        if ($n > $mc) {
            for($i = 0, $c = $n - $mc, $c2 = $mc, $j = 0; $i < $c && $j < $c2; $i++) {
                if (1 === $mrolls[$j]) {
                    $j++;
                    $i--;
                    continue;
                }
                $mrolls[] = 1;
                $mc++;
                $mrolls[$j] -= 1;
            }
            if ($n > $mc) {
                return [];
            }
        }
        return $mrolls;
    }
}
```