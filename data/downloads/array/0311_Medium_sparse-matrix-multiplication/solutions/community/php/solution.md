# PHP Solution

**Author:** user0177X
**Votes:** 0
**Link:** [https://leetcode.com/problems/sparse-matrix-multiplication/solutions/3500259/](https://leetcode.com/problems/sparse-matrix-multiplication/solutions/3500259/)

---

# Complexity
- Time complexity: O(m k n)
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: O(1)
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
class Solution {

    /**
     * @param Integer[][] $mat1
     * @param Integer[][] $mat2
     * @return Integer[][]
     */
    function multiply($mat1, $mat2) {
        
        $result = [];

        $m = count($mat1);
        $k = count($mat1[0]);
        $n = count($mat2[0]);

        for ($i = 0; $i < $m; $i++) {
            $result[$i] = [];
            for ($l = 0; $l < $n; $l++) {
                $result[$i][$l] = 0;
                for ($j = 0; $j < $k; $j++) {
                    $result[$i][$l]+= $mat1[$i][$j] * $mat2[$j][$l];
                }
            }
        }

        return $result;
    }
}
```