# Solution Minimum ASCII Delete Sum for Two Strings

**Author:** Suyono-Sukorame
**Votes:** 0
**Link:** [https://leetcode.com/problems/minimum-ascii-delete-sum-for-two-strings/solutions/4779186/](https://leetcode.com/problems/minimum-ascii-delete-sum-for-two-strings/solutions/4779186/)

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

    function minimumDeleteSum($s1, $s2) {
        $m = strlen($s1);
        $n = strlen($s2);
        
        $dp = array_fill(0, $m + 1, array_fill(0, $n + 1, 0));
        
        for ($i = $m - 1; $i >= 0; $i--) {
            $dp[$i][$n] = $dp[$i + 1][$n] + ord($s1[$i]);
        }
        
        for ($j = $n - 1; $j >= 0; $j--) {
            $dp[$m][$j] = $dp[$m][$j + 1] + ord($s2[$j]);
        }
        
        for ($i = $m - 1; $i >= 0; $i--) {
            for ($j = $n - 1; $j >= 0; $j--) {
                if ($s1[$i] == $s2[$j]) {
                    $dp[$i][$j] = $dp[$i + 1][$j + 1];
                } else {
                    $dp[$i][$j] = min(
                        ord($s1[$i]) + $dp[$i + 1][$j],
                        ord($s2[$j]) + $dp[$i][$j + 1]
                    );
                }
            }
        }
        
        return $dp[0][0];
    }
}

```