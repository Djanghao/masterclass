# Solution Minimum Score Triangulation of Polygon

**Author:** Suyono-Sukorame
**Votes:** 0
**Link:** [https://leetcode.com/problems/minimum-score-triangulation-of-polygon/solutions/4876548/](https://leetcode.com/problems/minimum-score-triangulation-of-polygon/solutions/4876548/)

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
     * @param Integer[] $values
     * @return Integer
     */
    function minScoreTriangulation($values) {
        $n = count($values);
        $dp = array_fill(0, $n, array_fill(0, $n, 0));
        
        for ($len = 3; $len <= $n; $len++) {
            for ($i = 0; $i + $len - 1 < $n; $i++) {
                $j = $i + $len - 1;
                $dp[$i][$j] = PHP_INT_MAX;
                for ($k = $i + 1; $k < $j; $k++) {
                    $dp[$i][$j] = min($dp[$i][$j], $dp[$i][$k] + $dp[$k][$j] + $values[$i] * $values[$j] * $values[$k]);
                }
            }
        }
        
        return $dp[0][$n - 1];
    }
}

```