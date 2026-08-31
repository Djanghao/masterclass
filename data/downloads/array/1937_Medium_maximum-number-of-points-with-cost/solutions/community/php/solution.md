# Solution Maximum Number of Points with Cost

**Author:** Suyono-Sukorame
**Votes:** 0
**Link:** [https://leetcode.com/problems/maximum-number-of-points-with-cost/solutions/5650433/](https://leetcode.com/problems/maximum-number-of-points-with-cost/solutions/5650433/)

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
    public function maxPoints($mat) {
        $n = count($mat);
        $m = count($mat[0]);
        $dp = array_fill(0, $n, array_fill(0, $m, 0));

        for ($i = 0; $i < $m; $i++) {
            $dp[0][$i] = $mat[0][$i];
        }

        for ($i = 1; $i < $n; $i++) {
            $left = array_fill(0, $m, 0);
            $right = array_fill(0, $m, 0);
            $val = $dp[$i - 1];

            $left[0] = $val[0];
            $right[$m - 1] = $val[$m - 1];

            for ($j = 1; $j < $m; $j++) {
                $left[$j] = max($left[$j - 1] - 1, $val[$j]);
            }

            for ($j = $m - 2; $j >= 0; $j--) {
                $right[$j] = max($right[$j + 1] - 1, $val[$j]);
            }

            for ($j = 0; $j < $m; $j++) {
                $dp[$i][$j] = $mat[$i][$j] + max($left[$j], $right[$j]);
            }
        }

        return max($dp[$n - 1]);
    }
}

```