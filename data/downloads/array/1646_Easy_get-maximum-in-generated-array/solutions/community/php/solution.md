# Solution Get Maximum in Generated Array

**Author:** Suyono-Sukorame
**Votes:** 0
**Link:** [https://leetcode.com/problems/get-maximum-in-generated-array/solutions/5219895/](https://leetcode.com/problems/get-maximum-in-generated-array/solutions/5219895/)

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
    public function getMaximumGenerated($n) {
        $dp = array_fill(0, $n + 1, 0);
        if ($n == 0) {
            return 0;
        }
        $dp[1] = 1;
        $maxi = 1;
        for ($i = 2; $i <= $n; ++$i) {
            if ($i % 2 == 1) {
                $dp[$i] = $dp[$i >> 1] + $dp[($i >> 1) + 1];
            } else {
                $dp[$i] = $dp[$i >> 1];
            }
            $maxi = max($maxi, $dp[$i]);
        }
        return $maxi;
    }
}

```