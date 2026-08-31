# Simple PHP solution 0ms runtime

**Author:** quanvip1999
**Votes:** 1
**Link:** [https://leetcode.com/problems/determine-if-a-cell-is-reachable-at-a-given-time/solutions/4262510/](https://leetcode.com/problems/determine-if-a-cell-is-reachable-at-a-given-time/solutions/4262510/)

---

# Complexity
- Time complexity: O(1)
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: O(1)
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
class Solution {

    /**
     * @param Integer $sx
     * @param Integer $sy
     * @param Integer $fx
     * @param Integer $fy
     * @param Integer $t
     * @return Boolean
     */
    function isReachableAtTime($sx, $sy, $fx, $fy, $t) {
        $dx = abs($fx - $sx);
        $dy = abs($fy - $sy);
        $max = max($dx, $dy);
        if ($t < $max) return false;
        if ($dx == 0 && $dy == 0) {
            if ($t == 1) return false;
        }
        return true;
    }
}
```