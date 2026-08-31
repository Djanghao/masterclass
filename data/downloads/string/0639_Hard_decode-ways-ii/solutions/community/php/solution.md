# Solution Decode Ways II

**Author:** Suyono-Sukorame
**Votes:** 0
**Link:** [https://leetcode.com/problems/decode-ways-ii/solutions/4751490/](https://leetcode.com/problems/decode-ways-ii/solutions/4751490/)

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
     * @param String $s
     * @return Integer
     */
    function numDecodings($s) {
        $mod = pow(10, 9) + 7;
        $dp = [];
        $n = strlen($s);
        
        $dp[0] = 1;
        $dp[1] = $s[0] == '*' ? 9 : ($s[0] == '0' ? 0 : 1);
        
        for ($i = 1; $i < $n; $i++) {
            if ($s[$i] == '*') {
                $dp[$i + 1] = 9 * $dp[$i] % $mod;
                if ($s[$i - 1] == '1') {
                    $dp[$i + 1] = ($dp[$i + 1] + 9 * $dp[$i - 1]) % $mod;
                } elseif ($s[$i - 1] == '2') {
                    $dp[$i + 1] = ($dp[$i + 1] + 6 * $dp[$i - 1]) % $mod;
                } elseif ($s[$i - 1] == '*') {
                    $dp[$i + 1] = ($dp[$i + 1] + 15 * $dp[$i - 1]) % $mod;
                }
            } else {
                $dp[$i + 1] = $s[$i] != '0' ? $dp[$i] : 0;
                if ($s[$i - 1] == '1') {
                    $dp[$i + 1] = ($dp[$i + 1] + $dp[$i - 1]) % $mod;
                } elseif ($s[$i - 1] == '2' && $s[$i] <= '6') {
                    $dp[$i + 1] = ($dp[$i + 1] + $dp[$i - 1]) % $mod;
                } elseif ($s[$i - 1] == '*') {
                    $dp[$i + 1] = ($dp[$i + 1] + ($s[$i] <= '6' ? 2 : 1) * $dp[$i - 1]) % $mod;
                }
            }
        }
        
        return $dp[$n];
    }
}

```