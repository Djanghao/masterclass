# Beating 100% users in Runtime & Memory using PHP

**Author:** nishk2
**Votes:** 0
**Link:** [https://leetcode.com/problems/falling-squares/solutions/5489951/](https://leetcode.com/problems/falling-squares/solutions/5489951/)

---

# Code
```
class Solution {
    function fallingSquares($positions) {
        $hgt = [0];
        $pos = [0];
        $res = [];
        $mx = 0;

        foreach ($positions as $box) {
            $mx = max($mx, self::helper($box, $pos, $hgt));
            $res[] = $mx;
        }

        return $res;
    }

    private static function helper($box, &$pos, &$hgt) {
        list($l, $h) = $box;
        $r = $l + $h;

        $i = self::bisectRight($pos, $l);
        $j = self::bisectLeft($pos, $r);

        $maxHeight = 0;
        for ($k = $i - 1; $k < $j; $k++) {
            if (isset($hgt[$k]) && $hgt[$k] > $maxHeight) {
                $maxHeight = $hgt[$k];
            }
        }

        $res = $h + $maxHeight;
        array_splice($pos, $i, $j - $i, [$l, $r]);
        array_splice($hgt, $i, $j - $i, [$res, isset($hgt[$j - 1]) ? $hgt[$j - 1] : 0]);

        return $res;
    }

    private static function bisectRight($arr, $x) {
        $lo = 0;
        $hi = count($arr);
        while ($lo < $hi) {
            $mid = intval(($lo + $hi) / 2);
            if ($x < $arr[$mid]) {
                $hi = $mid;
            } else {
                $lo = $mid + 1;
            }
        }
        return $lo;
    }

    private static function bisectLeft($arr, $x) {
        $lo = 0;
        $hi = count($arr);
        while ($lo < $hi) {
            $mid = intval(($lo + $hi) / 2);
            if ($arr[$mid] < $x) {
                $lo = $mid + 1;
            } else {
                $hi = $mid;
            }
        }
        return $lo;
    }
}
```