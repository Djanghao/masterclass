# 0 ms

**Author:** menesterov
**Votes:** 0
**Link:** [https://leetcode.com/problems/prison-cells-after-n-days/solutions/4952336/](https://leetcode.com/problems/prison-cells-after-n-days/solutions/4952336/)

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

    /**
     * @param Integer[] $cells
     * @param Integer $n
     * @return Integer[]
     */
    function prisonAfterNDays($cells, $n) {
        $d = 0;
        $looped = -1;
        $states[0] = $cells;
        while ($looped < 0 && $d < $n) {
            $newState[0] = 0;
            for ($x = 1; $x <= 6; $x++) {
                $newState[$x] = $states[$d][$x-1] == $states[$d][$x+1] ? 1 : 0;
            }
            $newState[7] = 0;
            for ($j = 0; $j <= $d; $j++) {
                if ($states[$j] == $newState) {
                    $looped = $j;
                    break;
                }
            }
            $states[++$d] =  $newState;
        }
        if ($looped < 0) return $states[$d];
        $loop_size = $d - $looped;
        $rest = $n - $d + 1;
        $shift = ($rest - 1) % $loop_size;
        return $states[$looped + $shift];
    }
}
```