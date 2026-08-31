# PHP || Union Find || Easy understand

**Author:** rayzor92
**Votes:** 2
**Link:** [https://leetcode.com/problems/lexicographically-smallest-equivalent-string/solutions/3049177/](https://leetcode.com/problems/lexicographically-smallest-equivalent-string/solutions/3049177/)

---

# Code
```
class Solution {

    /**
     * @param String $s1
     * @param String $s2
     * @param String $baseStr
     * @return String
     */
    private $representative = [];
    function smallestEquivalentString($s1, $s2, $baseStr) {
        for ($i = 0; $i < 26; $i++) {
            $char = chr($i + ord('a'));
            $this->representative[$char] = $char;
        }

        for ($i = 0; $i < strlen($s1); $i++) {
            $this->performUnion($s1[$i], $s2[$i]);
        }

        $ans = "";
        for ($c = 0; $c < strlen($baseStr); $c++) {
            $ans .= $this->find($baseStr[$c]);
        }

        return $ans;
    }
    
    private function find(string $x): string {
        if ($this->representative[$x] === $x) {
            return $x;
        }

        return $this->representative[$x] = $this->find($this->representative[$x]);
    }

    private function performUnion(string $x, string $y) {
        $x = $this->find($x);
        $y = $this->find($y);

        if ($x == $y) {
            return;
        }

        if ($x < $y) {
            $this->representative[$y] = $x;
        } else {
            $this->representative[$x] = $y;
        }
    }
}
```