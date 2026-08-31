# Solution Minimum Number of Flips to Convert Binary Matrix to Zero Matrix

**Author:** Suyono-Sukorame
**Votes:** 0
**Link:** [https://leetcode.com/problems/minimum-number-of-flips-to-convert-binary-matrix-to-zero-matrix/solutions/4913191/](https://leetcode.com/problems/minimum-number-of-flips-to-convert-binary-matrix-to-zero-matrix/solutions/4913191/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
class Solution {
    private $ans;

    /**
     * @param Integer[][] $mat
     * @return Integer
     */
    function minFlips($mat) {
        if ($this->isZero($mat)) return 0;
        $this->ans = -1;
        $this->backtrack($mat, 0, 0);
        return $this->ans;
    }

    function backtrack($mat, $spot, $flips) {
        $rows = count($mat);
        $cols = count($mat[0]);
        
        if ($spot == $rows * $cols && $this->isZero($mat)) {
            $this->ans = $this->ans == -1 ? $flips : min($this->ans, $flips);
            return;
        }
        if ($spot >= $rows * $cols) return;

        $i = (int)($spot / $cols);
        $j = $spot % $cols;

        $this->flip($mat, $i, $j);
        $this->backtrack($mat, $spot + 1, $flips + 1);
        $this->flip($mat, $i, $j);
        $this->backtrack($mat, $spot + 1, $flips);
    }

    function flip(&$mat, $i, $j) {
        $rows = count($mat);
        $cols = count($mat[0]);

        $mat[$i][$j] ^= 1;
        if ($i - 1 >= 0) $mat[$i - 1][$j] ^= 1;
        if ($i + 1 < $rows) $mat[$i + 1][$j] ^= 1;
        if ($j - 1 >= 0) $mat[$i][$j - 1] ^= 1;
        if ($j + 1 < $cols) $mat[$i][$j + 1] ^= 1;
    }

    function isZero($mat) {
        foreach ($mat as $row) {
            foreach ($row as $cell) {
                if ($cell != 0) return false;
            }
        }
        return true;
    }
}

```