# PHP Solution Rotate Image

**Author:** andy_austin
**Votes:** 1
**Link:** [https://leetcode.com/problems/rotate-image/solutions/4000501/](https://leetcode.com/problems/rotate-image/solutions/4000501/)

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
     * @param Integer[][] $matrix
     * @return NULL
     */
    function rotate(&$matrix) {

        for ($i = 0; $i < count($matrix); $i++) {
            for ($j = $i; $j < count($matrix[$i]); $j++){
                $temp = $matrix[$i][$j];
                $matrix[$i][$j] = $matrix[$j][$i];
                $matrix[$j][$i] = $temp;
            }
        }
        for ($i = 0; $i < count($matrix); $i++) {
            $matrix[$i] = array_reverse($matrix[$i]);
        }
    }
}
```