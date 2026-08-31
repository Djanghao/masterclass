# Solution Find the Shortest Superstring

**Author:** Suyono-Sukorame
**Votes:** 0
**Link:** [https://leetcode.com/problems/find-the-shortest-superstring/solutions/4829666/](https://leetcode.com/problems/find-the-shortest-superstring/solutions/4829666/)

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
     * @param String[] $words
     * @return String
     */
    function shortestSuperstring($words) {
        $n = count($words);
        $mat = [];
        
        for ($i = 0; $i < $n; $i++) {
            for ($j = $i + 1; $j < $n; $j++) {
                $mat[$i][$j] = $this->dist($words[$i], $words[$j]);
                $mat[$j][$i] = $this->dist($words[$j], $words[$i]);
            }
        }
        
        $dp = array_fill(0, 1 << $n, array_fill(0, $n, PHP_INT_MAX / 2));
        $parents = array_fill(0, 1 << $n, array_fill(0, $n, -1));
        
        for ($i = 0; $i < $n; $i++) {
            $dp[1 << $i][$i] = strlen($words[$i]);
        }
        
        $min = PHP_INT_MAX;
        $cur = 0;
        
        for ($s = 1; $s < (1 << $n); $s++) {
            for ($i = 0; $i < $n; $i++) {
                if (($s & (1 << $i)) == 0) continue;
                $prevS = $s & ~(1 << $i);
                for ($j = 0; $j < $n; $j++) {
                    if ($dp[$prevS][$j] + $mat[$j][$i] < $dp[$s][$i]) {
                        $dp[$s][$i] = $dp[$prevS][$j] + $mat[$j][$i];
                        $parents[$s][$i] = $j;
                    }
                }
                if ($s == (1 << $n) - 1 && $dp[$s][$i] < $min) {
                    $min = $dp[$s][$i];
                    $cur = $i;
                }
            }
        }
        
        $s = (1 << $n) - 1;
        $ans = "";
        
        while ($s > 0) {
            $prev = $parents[$s][$cur];
            if ($prev < 0) {
                $ans = $words[$cur] . $ans;
            } else {
                $ans = substr($words[$cur], strlen($words[$cur]) - $mat[$prev][$cur]) . $ans;
            }
            $s &= ~(1 << $cur);
            $cur = $prev;
        }
        
        return $ans;
    }
    
    private function dist($a, $b) {
        $d = strlen($b);
        
        for ($k = 1; $k <= min(strlen($a), strlen($b)); $k++) {
            if (substr($a, -$k) === substr($b, 0, $k)) {
                $d = strlen($b) - $k;
            }
        }
        
        return $d;
    }
}

```