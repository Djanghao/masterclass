# Solution Max Increase to Keep City Skyline

**Author:** Suyono-Sukorame
**Votes:** 0
**Link:** [https://leetcode.com/problems/max-increase-to-keep-city-skyline/solutions/4789841/](https://leetcode.com/problems/max-increase-to-keep-city-skyline/solutions/4789841/)

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
     * @param Integer[][] $grid
     * @return Integer
     */
    function maxIncreaseKeepingSkyline($grid) {
        $n = count($grid);
        $maxRow = array_fill(0, $n, 0);
        $maxCol = array_fill(0, $n, 0);
        
        for ($i = 0; $i < $n; $i++) {
            for ($j = 0; $j < $n; $j++) {
                $maxRow[$i] = max($maxRow[$i], $grid[$i][$j]);
                $maxCol[$j] = max($maxCol[$j], $grid[$i][$j]);
            }
        }
        
        $maxIncrease = 0;
        for ($i = 0; $i < $n; $i++) {
            for ($j = 0; $j < $n; $j++) {
                $maxIncrease += min($maxRow[$i], $maxCol[$j]) - $grid[$i][$j];
            }
        }
        
        return $maxIncrease;
    }
}

```