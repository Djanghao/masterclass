# Solution Number of Dice Rolls With Target Sum

**Author:** Suyono-Sukorame
**Votes:** 0
**Link:** [https://leetcode.com/problems/number-of-dice-rolls-with-target-sum/solutions/4890679/](https://leetcode.com/problems/number-of-dice-rolls-with-target-sum/solutions/4890679/)

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
     * @param Integer $k
     * @param Integer $target
     * @return Integer
     */
    function numRollsToTarget($n, $k, $target) {
        $mod = 1000000007;
        $dp = array_fill(0, $target + 1, array_fill(0, $n + 1, 0));
        
        $dp[0][0] = 1;
        
        for ($i = 1; $i <= $n; $i++) {
            for ($j = 1; $j <= $target; $j++) {
                for ($x = 1; $x <= $k; $x++) {
                    if ($j >= $x) {
                        $dp[$j][$i] = ($dp[$j][$i] + $dp[$j - $x][$i - 1]) % $mod;
                    } else {
                        break;
                    }
                }
            }
        }
        
        return $dp[$target][$n];
    }
}

```