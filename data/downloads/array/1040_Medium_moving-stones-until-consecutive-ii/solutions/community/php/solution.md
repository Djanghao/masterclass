# Solution Moving Stones Until Consecutive

**Author:** Suyono-Sukorame
**Votes:** 0
**Link:** [https://leetcode.com/problems/moving-stones-until-consecutive-ii/solutions/4878085/](https://leetcode.com/problems/moving-stones-until-consecutive-ii/solutions/4878085/)

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
     * @param Integer[] $stones
     * @return Integer[]
     */
    function numMovesStonesII($stones) {
        sort($stones);
        $n = count($stones);
        $total = $stones[$n - 1] - $stones[0] + 1 - $n;
        
        $maxMoves = max($stones[$n - 1] - $stones[1] - $n + 2, $stones[$n - 2] - $stones[0] - $n + 2);
        
        $left = 0;
        $minMoves = $n;
        
        for ($right = 0; $right < $n; $right++) {
            while ($stones[$right] - $stones[$left] >= $n) {
                $left++;
            }
            
            if ($right - $left + 1 === $n - 1 && $stones[$right] - $stones[$left] === $n - 2) {
                $minMoves = min($minMoves, 2);
            } else {
                $minMoves = min($minMoves, $n - ($right - $left + 1));
            }
        }
        
        return [$minMoves, $maxMoves];
    }
}

```