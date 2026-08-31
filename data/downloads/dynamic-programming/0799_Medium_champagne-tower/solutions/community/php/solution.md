# Solution Champagne Tower

**Author:** Suyono-Sukorame
**Votes:** 0
**Link:** [https://leetcode.com/problems/champagne-tower/solutions/4789542/](https://leetcode.com/problems/champagne-tower/solutions/4789542/)

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
     * @param Integer $poured
     * @param Integer $query_row
     * @param Integer $query_glass
     * @return Float
     */
    function champagneTower($poured, $query_row, $query_glass) {
        $tower = array_fill(0, 101, array_fill(0, 101, 0.0));
        $tower[0][0] = $poured;
        
        for ($i = 0; $i <= $query_row; $i++) {
            for ($j = 0; $j <= $i; $j++) {
                $q = ($tower[$i][$j] - 1.0) / 2.0;
                if ($q > 0) {
                    $tower[$i + 1][$j] += $q;
                    $tower[$i + 1][$j + 1] += $q;
                }
            }
        }
        
        return min(1.0, $tower[$query_row][$query_glass]);
    }
}

```