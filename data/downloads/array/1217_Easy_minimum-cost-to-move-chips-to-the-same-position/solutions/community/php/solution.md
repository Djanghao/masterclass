# Solution Minimum Cost to Move Chips to The Same Position

**Author:** Suyono-Sukorame
**Votes:** 0
**Link:** [https://leetcode.com/problems/minimum-cost-to-move-chips-to-the-same-position/solutions/4900256/](https://leetcode.com/problems/minimum-cost-to-move-chips-to-the-same-position/solutions/4900256/)

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
     * @param Integer[] $position
     * @return Integer
     */
    function minCostToMoveChips($position) {
        $even_count = 0;
        $odd_count = 0;
        
        foreach ($position as $pos) {
            if ($pos % 2 == 0) {
                $even_count++;
            } else {
                $odd_count++;
            }
        }
        
        return min($even_count, $odd_count);
    }
}

```