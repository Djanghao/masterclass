# Solution Moving Stones Until Consecutive

**Author:** Suyono-Sukorame
**Votes:** 0
**Link:** [https://leetcode.com/problems/moving-stones-until-consecutive/solutions/4870658/](https://leetcode.com/problems/moving-stones-until-consecutive/solutions/4870658/)

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
     * @param Integer $a
     * @param Integer $b
     * @param Integer $c
     * @return Integer[]
     */
    function numMovesStones($a, $b, $c) {
        $stones = [$a, $b, $c];
        sort($stones);
        $minMoves = 0;
        
        if ($stones[2] - $stones[0] == 2) {
            $minMoves = 0;
        } elseif ($stones[1] - $stones[0] <= 2 || $stones[2] - $stones[1] <= 2) {
            $minMoves = 1;
        } else {
            $minMoves = 2;
        }
        
        $maxMoves = $stones[2] - $stones[0] - 2;
        
        return [$minMoves, $maxMoves];
    }
}

```