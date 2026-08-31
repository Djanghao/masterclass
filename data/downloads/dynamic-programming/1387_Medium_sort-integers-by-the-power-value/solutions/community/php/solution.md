# Solution Sort Integers by The Power Value

**Author:** Suyono-Sukorame
**Votes:** 0
**Link:** [https://leetcode.com/problems/sort-integers-by-the-power-value/solutions/4961744/](https://leetcode.com/problems/sort-integers-by-the-power-value/solutions/4961744/)

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
     * @param Integer $lo
     * @param Integer $hi
     * @param Integer $k
     * @return Integer
     */
    function getKth($lo, $hi, $k) {
        $count = function ($x) {
            $con = 0;
            while ($x != 1) {
                if ($x % 2 == 0) {
                    $x = $x / 2;
                    $con++;
                } else {
                    $x = 3 * $x + 1;
                    $con++;
                }
            }
            return $con;
        };

        $map = [];
        
        for ($i = $lo; $i <= $hi; $i++) {
            $map[$i] = $count($i);
        }
        
        $al = array_keys($map);
        usort($al, function($a, $b) use ($map) {
            if ($map[$a] != $map[$b]) {
                return $map[$a] - $map[$b];
            }
            return $a - $b;
        });
        
        return $al[$k - 1];
    }
}

```