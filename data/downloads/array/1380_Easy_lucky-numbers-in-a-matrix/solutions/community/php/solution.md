# The simplest solution, 100% beats

**Author:** pozitronik
**Votes:** 0
**Link:** [https://leetcode.com/problems/lucky-numbers-in-a-matrix/solutions/5505494/](https://leetcode.com/problems/lucky-numbers-in-a-matrix/solutions/5505494/)

---

# Code
```
class Solution {

    /**
     * @param Integer[][] $matrix
     * @return Integer[]
     */
    function luckyNumbers ($matrix) {
        $result = [];
        foreach ($matrix as $row) {
            $min = min($row);
            $max = max(array_column($matrix, array_search($min, $row, true)));
            if ($max === $min) {
                $result[] = $max;
            }
        }
        return $result;
    }
}
```