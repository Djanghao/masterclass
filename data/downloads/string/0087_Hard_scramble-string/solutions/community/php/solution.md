# PHP Solution

**Author:** ridho125
**Votes:** 1
**Link:** [https://leetcode.com/problems/scramble-string/solutions/3357536/](https://leetcode.com/problems/scramble-string/solutions/3357536/)

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
     * @param String $s1
     * @param String $s2
     * @return Boolean
     */
    function isScramble($s1, $s2) {
        if ($s1 == $s2) {
            return true;
        }
        
        $n = strlen($s1);
        $dp = [$n][$n][$n+1];
        
        for ($i = 0; $i < $n; $i++) {
            for ($j = 0; $j < $n; $j++) {
                $dp[$i][$j][1] = ($s1[$i] == $s2[$j]);
            }
        }
        
        for ($length = 2; $length <= $n; $length++) {
            for ($i = 0; $i <= $n-$length; $i++) {
                for ($j = 0; $j <= $n-$length; $j++) {
                    for ($k = 1; $k < $length; $k++) {
                        if (($dp[$i][$j][$k] && $dp[$i+$k][$j+$k][$length-$k]) || ($dp[$i][$j+$length-$k][$k] && $dp[$i+$k][$j][$length-$k])) {
                            $dp[$i][$j][$length] = true;
                            break;
                        }
                    }
                }
            }
        }
        
        return $dp[0][0][$n];
        
    }
}
```