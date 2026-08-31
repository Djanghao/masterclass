# Solution Largest 1-Bordered Square

**Author:** Suyono-Sukorame
**Votes:** 0
**Link:** [https://leetcode.com/problems/largest-1-bordered-square/solutions/4890038/](https://leetcode.com/problems/largest-1-bordered-square/solutions/4890038/)

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
     * @param Integer[][] $grid
     * @return Integer
     */
    function largest1BorderedSquare($grid) {
        $m = count($grid);
        $n = count($grid[0]);
        $maxSize = 0;
        
        $horizontal = array_fill(0, $m, array_fill(0, $n, 0));
        $vertical = array_fill(0, $m, array_fill(0, $n, 0));
        
        for ($i = 0; $i < $m; $i++) {
            for ($j = 0; $j < $n; $j++) {
                if ($grid[$i][$j] == 1) {
                    $horizontal[$i][$j] = ($j == 0) ? 1 : $horizontal[$i][$j - 1] + 1;
                    $vertical[$i][$j] = ($i == 0) ? 1 : $vertical[$i - 1][$j] + 1;
                }
            }
        }
        
        for ($i = 0; $i < $m; $i++) {
            for ($j = 0; $j < $n; $j++) {
                $size = min($horizontal[$i][$j], $vertical[$i][$j]);
                while ($size > $maxSize) {
                    if ($horizontal[$i - $size + 1][$j] >= $size && $vertical[$i][$j - $size + 1] >= $size) {
                        $maxSize = $size;
                    }
                    $size--;
                }
            }
        }
        
        return $maxSize * $maxSize;
    }
}


```