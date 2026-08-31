# O(n) Php

**Author:** legion112
**Votes:** 0
**Link:** [https://leetcode.com/problems/line-reflection/solutions/4134490/](https://leetcode.com/problems/line-reflection/solutions/4134490/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
1. Find min max x values
2. Create `hashmap<y, hashset<x>>`
3. Go to each value in hashset to check if it has oposit value `$xOposite = ($max + $min) - $x`
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity: O(n)
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: O(n)
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```php
class Solution {

    function isReflected(array &$points):bool {
        if (empty($points)) return true;

        $min = PHP_INT_MAX;
        $max = PHP_INT_MIN;

        $points = array_reduce($points, static function(array $carry, array $point) use (&$min, &$max):array {
            [$x, $y] = $point;
            $min = min($min, $x);
            $max = max($max, $x);

            $carry[$y][$x] = true;
            return $carry;
        }, []);

    
        $sum = $min + $max;
        unset($min, $max);

        foreach ($points as $y => $xs) {
            
            // checking each point has oposit point
            foreach ($xs as $x => $_) {
                $x2 = $sum - $x;

                if (!isset($xs[$x2])) {
                    return false;
                }
            }
        }
        

        return true;
    }
}  
```