# Solution Valid Permutations for DI Sequence

**Author:** Suyono-Sukorame
**Votes:** 0
**Link:** [https://leetcode.com/problems/valid-permutations-for-di-sequence/solutions/4816940/](https://leetcode.com/problems/valid-permutations-for-di-sequence/solutions/4816940/)

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
    function numPermsDISequence($s) {
        $mod = 1000000007;
        $n = strlen($s);
        
        $dp = array_fill(0, $n + 1, 1);
        
        for ($i = 0; $i < $n; $i++) {
            $next = array_fill(0, $n + 1, 0);
            if ($s[$i] == 'I') {
                $sum = 0;
                for ($j = 0; $j < $n - $i; $j++) {
                    $sum = ($sum + $dp[$j]) % $mod;
                    $next[$j] = $sum;
                }
            } else {
                $sum = 0;
                for ($j = $n - $i - 1; $j >= 0; $j--) {
                    $sum = ($sum + $dp[$j + 1]) % $mod;
                    $next[$j] = $sum;
                }
            }
            $dp = $next;
        }
        
        return $dp[0];
    }
}

```