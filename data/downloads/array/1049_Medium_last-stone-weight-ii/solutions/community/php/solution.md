# Solution Last Stone Weight II

**Author:** Suyono-Sukorame
**Votes:** 0
**Link:** [https://leetcode.com/problems/last-stone-weight-ii/solutions/4878099/](https://leetcode.com/problems/last-stone-weight-ii/solutions/4878099/)

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
     * @return Integer
     */
    function lastStoneWeightII($stones) {
        $totalSum = array_sum($stones);
        $target = intval($totalSum / 2);
        
        $dp = array_fill(0, $target + 1, 0);
        $dp[0] = 1;
        
        foreach ($stones as $stone) {
            for ($i = $target; $i >= $stone; $i--) {
                if ($dp[$i - $stone]) {
                    $dp[$i] = 1;
                }
            }
        }
        
        for ($i = $target; $i >= 0; $i--) {
            if ($dp[$i]) {
                return $totalSum - 2 * $i;
            }
        }
        
        return 0;
    }
}

```