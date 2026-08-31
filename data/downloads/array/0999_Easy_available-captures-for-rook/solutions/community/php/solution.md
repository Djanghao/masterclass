# Solution Available Captures for Rook

**Author:** Suyono-Sukorame
**Votes:** 0
**Link:** [https://leetcode.com/problems/available-captures-for-rook/solutions/4856778/](https://leetcode.com/problems/available-captures-for-rook/solutions/4856778/)

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
     * @param String[][] $board
     * @return Integer
     */
    function numRookCaptures($board) {
        $n = 8;
        
        $rookRow = -1;
        $rookCol = -1;
        for ($i = 0; $i < $n; $i++) {
            for ($j = 0; $j < $n; $j++) {
                if ($board[$i][$j] == 'R') {
                    $rookRow = $i;
                    $rookCol = $j;
                    break 2;
                }
            }
        }
        
        $captures = 0;
        
        $dirs = [[-1, 0], [0, 1], [1, 0], [0, -1]];
        foreach ($dirs as $dir) {
            $dx = $dir[0];
            $dy = $dir[1];
            $x = $rookRow + $dx;
            $y = $rookCol + $dy;
            
            while ($x >= 0 && $x < $n && $y >= 0 && $y < $n) {
                if ($board[$x][$y] == 'p') {
                    $captures++;
                    break;
                } elseif ($board[$x][$y] == 'B') {
                    break;
                }
                $x += $dx;
                $y += $dy;
            }
        }
        
        return $captures;
    }
}

```