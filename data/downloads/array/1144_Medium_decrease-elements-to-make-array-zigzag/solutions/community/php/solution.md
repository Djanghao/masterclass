# Solution Decrease Elements To Make Array Zigzag

**Author:** Suyono-Sukorame
**Votes:** 0
**Link:** [https://leetcode.com/problems/decrease-elements-to-make-array-zigzag/solutions/4890074/](https://leetcode.com/problems/decrease-elements-to-make-array-zigzag/solutions/4890074/)

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
     * @param Integer[] $nums
     * @return Integer
     */
    function movesToMakeZigzag($nums) {
        $n = count($nums);
        $evenMoves = 0;
        $oddMoves = 0;
        
        for ($i = 0; $i < $n; $i++) {
            if ($i % 2 == 0) {
                $prev = ($i > 0) ? $nums[$i - 1] : PHP_INT_MAX;
                $next = ($i < $n - 1) ? $nums[$i + 1] : PHP_INT_MAX;
                $target = min($prev, $next) - 1;
                $evenMoves += max(0, $nums[$i] - $target);
            } 
            else {
                $prev = $nums[$i - 1];
                $next = ($i < $n - 1) ? $nums[$i + 1] : PHP_INT_MAX;
                $target = min($prev, $next) - 1;
                $oddMoves += max(0, $nums[$i] - $target);
            }
        }
        
        return min($evenMoves, $oddMoves);
    }
}

```