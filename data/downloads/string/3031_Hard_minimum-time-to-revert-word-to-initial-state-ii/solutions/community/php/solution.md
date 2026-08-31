# Solution Minimum Time to Revert Word to Initial State II

**Author:** Suyono-Sukorame
**Votes:** 0
**Link:** [https://leetcode.com/problems/minimum-time-to-revert-word-to-initial-state-ii/solutions/4748696/](https://leetcode.com/problems/minimum-time-to-revert-word-to-initial-state-ii/solutions/4748696/)

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
     * @param String $word
     * @param Integer $k
     * @return Integer
     */
    function minimumTimeToInitialState($word, $k) {
        $z_function = function($s) {
            $z = array_fill(0, strlen($s), 0);
            $l = 0;
            $r = 0;
            $n = strlen($s);
            
            for ($i = 1; $i < $n; $i++) {
                if ($i < $r) {
                    $z[$i] = min($r - $i, $z[$i - $l]);
                }
                
                while ($i + $z[$i] < $n && $s[$i + $z[$i]] == $s[$z[$i]]) {
                    $z[$i]++;
                }
                
                if ($i + $z[$i] > $r) {
                    $l = $i;
                    $r = $i + $z[$i];
                }
            }
            
            return $z;
        };
        
        $z = $z_function($word);
        $n = strlen($word);
        $res = 1;
        
        for ($i = $k; $i < $n; $i += $k) {
            if ($z[$i] == $n - $i) {
                return $res;
            }
            $res++;
        }
        
        return $res;
    }
}
```