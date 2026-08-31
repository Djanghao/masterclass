# First Ever Solution in PHP

**Author:** nishk2
**Votes:** 0
**Link:** [https://leetcode.com/problems/additive-number/solutions/5572206/](https://leetcode.com/problems/additive-number/solutions/5572206/)

---

# Code
```
class Solution {
    function isAdditiveNumber($num) {
        $n = strlen($num);
        for ($i = 1; $i < $n; ++$i) {
            for ($j = $i + 1; $j < $n; ++$j) {
                $s1 = substr($num, 0, $i);
                $s2 = substr($num, $i, $j - $i);
                if (($i > 1 && $s1[0] === '0') || ($j - $i > 1 && $s2[0] === '0')) {
                    continue;
                }
                $next = $this->add($s1, $s2);
                $cur = $s1 . $s2 . $next;
                while (strlen($cur) < $n) {
                    $s1 = $s2;
                    $s2 = $next;
                    $next = $this->add($s1, $s2);
                    $cur .= $next;
                }
                if ($cur === $num) {
                    return true;
                }
            }
        }
        return false;
    }

    private function add($m, $n) {
        $res = "";
        $resLength = max(strlen($m), strlen($n));

        $carry = 0;
        for ($i = 0; $i < $resLength; ++$i) {
            $mDigitI = $i < strlen($m) ? intval($m[strlen($m) - 1 - $i]) : 0;
            $nDigitI = $i < strlen($n) ? intval($n[strlen($n) - 1 - $i]) : 0;
            $sum = $carry + $mDigitI + $nDigitI;
            $carry = intval($sum / 10);
            $sum %= 10;
            $res = strval($sum) . $res;
        }
        if ($carry) {
            $res = strval($carry) . $res;
        }
        return $res;
    }
}
```