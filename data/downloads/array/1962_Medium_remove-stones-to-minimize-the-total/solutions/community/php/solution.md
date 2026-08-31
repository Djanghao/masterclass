# Sorted solution

**Author:** user4910Lo
**Votes:** 1
**Link:** [https://leetcode.com/problems/remove-stones-to-minimize-the-total/solutions/2963260/](https://leetcode.com/problems/remove-stones-to-minimize-the-total/solutions/2963260/)

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
     * @param Integer[] $piles
     * @param Integer $k
     * @return Integer
     */
    function minStoneSum($piles, $k) {
        $countPiles = count($piles);
        sort($piles);
        $i = 0;
        while($k > 0) {
            $piles[$countPiles- 1 - $i] -= floor($piles[$countPiles-1 - $i] / 2);
            $i++;

            if ($piles[$countPiles-1 - $i] < $piles[$countPiles-1]) {
                sort($piles);
                $i = 0;
            }
            
            $k--;
        }

        return array_sum($piles);
    }
}
```