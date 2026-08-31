# Simple  Solution in PHP

**Author:** nishk2
**Votes:** 0
**Link:** [https://leetcode.com/problems/largest-multiple-of-three/solutions/5495194/](https://leetcode.com/problems/largest-multiple-of-three/solutions/5495194/)

---

# Code
```
class Solution {

    /**
     * @param Integer[] $digits
     * @return String
     */
    function del1($ans) {
        $i = strlen($ans) - 1;
        $ones = ["1", "4", "7"];
        while ($i > -1 && !in_array($ans[$i], $ones)) {
            $i--;
        }
        if ($i == -1) {
            return $this->del2($this->del2($ans));
        }
        return substr($ans, 0, $i) . substr($ans, $i + 1);
    }

    function del2($ans) {
        $i = strlen($ans) - 1;
        $twos = ["2", "5", "8"];
        while ($i > -1 && !in_array($ans[$i], $twos)) {
            $i--;
        }
        if ($i == -1) {
            return $this->del1($this->del1($ans));
        }
        return substr($ans, 0, $i) . substr($ans, $i + 1);
    }

    function largestMultipleOfThree($digits) {
        $c = array_count_values($digits);
        $ans = "";
        $rem = 0;
        for ($i = 9; $i > 0; $i--) {
            $ans .= str_repeat(strval($i), $c[$i] ?? 0); 
            $rem = ($rem + $i * ($c[$i] ?? 0) % 3) % 3;
        }

        if ($rem == 1) {
            $ans = $this->del1($ans);
        } 
        if ($rem == 2) {
            $ans = $this->del2($ans);
        }
        return ($ans) ? $ans . str_repeat("0", $c[0] ?? 0) : (isset($c[0]) ? "0" : ""); 
    }
}
```