# Solution Palindrome Partitioning III

**Author:** Suyono-Sukorame
**Votes:** 0
**Link:** [https://leetcode.com/problems/palindrome-partitioning-iii/solutions/4910695/](https://leetcode.com/problems/palindrome-partitioning-iii/solutions/4910695/)

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

    function palindromePartition($s, $k) {
        $n = strlen($s);
        
        $diffCount = array_fill(0, $n, array_fill(0, $n, 0));
        for ($i = $n - 1; $i >= 0; $i--) {
            for ($j = $i + 1; $j < $n; $j++) {
                $diffCount[$i][$j] = ($s[$i] != $s[$j]) + $diffCount[$i + 1][$j - 1];
            }
        }
        
        $dp = array_fill(0, $n, array_fill(0, $k + 1, PHP_INT_MAX));
        $dp[0][1] = 0;
        
        for ($i = 1; $i < $n; $i++) {
            for ($j = 1; $j <= min($i + 1, $k); $j++) {
                if ($j == 1) {
                    $dp[$i][$j] = $diffCount[0][$i];
                } else {
                    for ($p = $i; $p >= $j - 1; $p--) {
                        $dp[$i][$j] = min($dp[$i][$j], $dp[$p - 1][$j - 1] + $diffCount[$p][$i]);
                    }
                }
            }
        }
        
        return $dp[$n - 1][$k];
    }
}

```