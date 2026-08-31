# PHP Solution

**Author:** user0177X
**Votes:** 1
**Link:** [https://leetcode.com/problems/spiral-matrix-ii/solutions/3507603/](https://leetcode.com/problems/spiral-matrix-ii/solutions/3507603/)

---

# Complexity
- Time complexity: O(n n)
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: O(1)
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
class Solution {

    /**
     * @param Integer $n
     * @return Integer[][]
     */
    function generateMatrix($n) {
        
        $k = 1;
        $matrix = [];
        for ($i = 0; $i < $n; $i++) {
            $matrix[$i] = array_fill(0, $n, null);
        }

        $min_v = 0;
        $max_v = $n - 1;
        $min_h = 0;
        $max_h = $n - 1;

        $direction = 0;

        while ($min_h <= $max_h && $min_v <= $max_v ) {
            switch ($direction) {
                case 0: 
                    for ($i = $min_v; $i <= $max_v; $i++) {
                        $matrix[$min_h][$i] = $k++;
                    }
                    $min_h++;
                    $direction++;
                    break;
                case 1: 
                    for ($i = $min_h; $i <= $max_h; $i++) {
                        $matrix[$i][$max_v] = $k++;
                    }
                    $max_v--;
                    $direction++;
                    break;
                case 2: 
                    for ($i = $max_v; $i >= $min_v; $i--) {
                        $matrix[$max_h][$i] = $k++;
                    }
                    $max_h--;
                    $direction++;
                    break;
                case 3: 
                    for ($i = $max_h; $i >= $min_h; $i--) {
                        $matrix[$i][$min_v] = $k++;
                    }
                    $min_v++;
                    $direction = 0;
                    break;
            }
        }

        return $matrix;
    }
}
```