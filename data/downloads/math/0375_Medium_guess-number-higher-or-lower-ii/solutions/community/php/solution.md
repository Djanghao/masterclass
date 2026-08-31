# Solution Guess Number Higher or Lower II

**Author:** Suyono-Sukorame
**Votes:** 0
**Link:** [https://leetcode.com/problems/guess-number-higher-or-lower-ii/solutions/4713012/](https://leetcode.com/problems/guess-number-higher-or-lower-ii/solutions/4713012/)

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
     * @param Integer $n
     * @return Integer
     */
    function getMoneyAmount($n) {
        $dp = array_fill(0, $n + 1, array_fill(0, $n + 1, 0));
        return $this->calculateCost($dp, 1, $n);
    }
    
    function calculateCost(&$dp, $start, $end) {
        if ($start >= $end) return 0;
        if ($dp[$start][$end] != 0) return $dp[$start][$end];
        
        $minCost = PHP_INT_MAX;
        for ($i = $start; $i <= $end; $i++) {
            $cost = $i + max($this->calculateCost($dp, $start, $i - 1), $this->calculateCost($dp, $i + 1, $end));
            $minCost = min($minCost, $cost);
        }
        $dp[$start][$end] = $minCost;
        return $minCost;
    }
}

```