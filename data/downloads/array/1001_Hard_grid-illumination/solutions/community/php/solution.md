# Solution Grid Illumination

**Author:** Suyono-Sukorame
**Votes:** 0
**Link:** [https://leetcode.com/problems/grid-illumination/solutions/4856855/](https://leetcode.com/problems/grid-illumination/solutions/4856855/)

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

    private $n;
    private $rowIllum;
    private $colIllum;
    private $dia1Illum;
    private $dia2Illum;
    private $lamps;

    function isIlluminated($x, $y) {
        return isset($this->rowIllum[$x]) && $this->rowIllum[$x] > 0 || 
            isset($this->colIllum[$y]) && $this->colIllum[$y] > 0 || 
            isset($this->dia1Illum[$x - $y]) && $this->dia1Illum[$x - $y] > 0 || 
            isset($this->dia2Illum[$x + $y]) && $this->dia2Illum[$x + $y] > 0;
    }

    function turnOff($x, $y) {
        for ($i = max($x - 1, 0); $i < min($x + 2, $this->n); $i++) {
            if (isset($this->lamps[$i])) {
                $l = &$this->lamps[$i];
                for ($j = max($y - 1, 0); $j < min($y + 2, $this->n); $j++) {
                    if (in_array($j, $l)) {
                        $this->rowIllum[$i]--;
                        $this->colIllum[$j]--;
                        $this->dia1Illum[$i - $j]--;
                        $this->dia2Illum[$i + $j]--;
                        unset($l[array_search($j, $l)]);
                    }
                    if (empty($l)) {
                        unset($this->lamps[$i]);
                    }
                }
            }
        }
    }

    function turnOn($x, $y) {
        if (!isset($this->lamps[$x]) || !in_array($y, $this->lamps[$x])) {
            $this->lamps[$x][] = $y;
            $this->rowIllum[$x] = isset($this->rowIllum[$x]) ? $this->rowIllum[$x] + 1 : 1;
            $this->colIllum[$y] = isset($this->colIllum[$y]) ? $this->colIllum[$y] + 1 : 1;
            $this->dia1Illum[$x - $y] = isset($this->dia1Illum[$x - $y]) ? $this->dia1Illum[$x - $y] + 1 : 1;
            $this->dia2Illum[$x + $y] = isset($this->dia2Illum[$x + $y]) ? $this->dia2Illum[$x + $y] + 1 : 1;
        }
    }

    function gridIllumination($n, $lamps, $queries) {
        $this->n = $n;
        $this->rowIllum = [];
        $this->colIllum = [];
        $this->dia1Illum = [];
        $this->dia2Illum = [];
        $this->lamps = [];

        foreach ($lamps as $lamp) {
            $this->turnOn($lamp[0], $lamp[1]);
        }

        $ans = [];
        foreach ($queries as $q) {
            $x = $q[0];
            $y = $q[1];
            if ($this->isIlluminated($x, $y)) {
                $ans[] = 1;
                $this->turnOff($x, $y);
            } else {
                $ans[] = 0;
            }
        }

        return $ans;
    }
}

```