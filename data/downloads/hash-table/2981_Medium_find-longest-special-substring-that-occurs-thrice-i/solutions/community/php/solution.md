# PHP SOLUTION

**Author:** akbarali1
**Votes:** 0
**Link:** [https://leetcode.com/problems/find-longest-special-substring-that-occurs-thrice-i/solutions/6132554/](https://leetcode.com/problems/find-longest-special-substring-that-occurs-thrice-i/solutions/6132554/)

---

# Code
```php []
class Solution {

    /**
     * @param String $s
     * @return Integer
     */
    public function maximumLength(string $s): int
    {
        $n = strlen($s);
        $l = 1;
        $r = $n;

        if (!$this->helper($s, $n, $l)) {
            return -1;
        }

        while ($l + 1 < $r) {
            $mid = ($l + $r) >> 1; // Bitwise division for efficiency
            if ($this->helper($s, $n, $mid)) {
                $l = $mid;
            } else {
                $r = $mid;
            }
        }

        return $l;
    }

    private function helper(string $s, int $n, int $x): bool
    {
        $cnt = [];
        $p = 0;

        for ($i = 0; $i < $n; $i++) {
            while ($p < $n && $s[$p] !== $s[$i]) {
                $p++;
            }

            if ($i - $p + 1 >= $x) {
                $charIndex = ord($s[$i]) - ord('a');
                if (!isset($cnt[$charIndex])) {
                    $cnt[$charIndex] = 0;
                }
                $cnt[$charIndex]++;
            }

            if (isset($cnt[$charIndex]) && $cnt[$charIndex] > 2) {
                return true;
            }
        }

        return false;
    }
}
```