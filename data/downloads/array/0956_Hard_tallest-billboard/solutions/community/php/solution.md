# Solution Tallest Billboard

**Author:** Suyono-Sukorame
**Votes:** 0
**Link:** [https://leetcode.com/problems/tallest-billboard/solutions/4832098/](https://leetcode.com/problems/tallest-billboard/solutions/4832098/)

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

    function tallestBillboard($rods) {
        $sum = array_sum($rods);
        $dp = array_fill(0, count($rods) + 1, array_fill(0, $sum + 1, 0));

        for ($i = 1; $i <= count($rods); $i++) {
            for ($j = 0; $j <= $sum; $j++) {
                if ($dp[$i - 1][$j] < $j) {
                    continue;
                }
                $dp[$i][$j] = max($dp[$i][$j], $dp[$i - 1][$j]);
                $k = $j + $rods[$i - 1];
                $dp[$i][$k] = max($dp[$i][$k], $dp[$i - 1][$j] + $rods[$i - 1]);
                $k = abs($j - $rods[$i - 1]);
                $dp[$i][$k] = max($dp[$i][$k], $dp[$i - 1][$j] + $rods[$i - 1]);
            }
        }
        
        return $dp[count($rods)][0] / 2;
    }
}

```