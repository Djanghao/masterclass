# Solution Count Subtrees With Max Distance Between Cities

**Author:** Suyono-Sukorame
**Votes:** 0
**Link:** [https://leetcode.com/problems/count-subtrees-with-max-distance-between-cities/solutions/5195183/](https://leetcode.com/problems/count-subtrees-with-max-distance-between-cities/solutions/5195183/)

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
    public function countSubgraphsForEachDiameter($n, $edges) {
        $g = array_fill(0, $n, array_fill(0, $n, 999));
        
        foreach ($edges as $e) {
            $i = $e[0] - 1;
            $j = $e[1] - 1;
            $g[$i][$j] = $g[$j][$i] = 1;
        }
        
        for ($k = 0; $k < $n; $k++) {
            for ($i = 0; $i < $n; $i++) {
                for ($j = 0; $j < $n; $j++) {
                    $g[$i][$j] = min($g[$i][$j], $g[$i][$k] + $g[$k][$j]);
                }
            }
        }
        
        $ans = array_fill(0, $n - 1, 0);
        for ($s = 0; $s < (1 << $n); $s++) {
            $k = substr_count(decbin($s), '1');
            $e = 0;
            $d = 0;
            for ($i = 0; $i < $n; $i++) {
                if ($s & (1 << $i)) {
                    for ($j = $i + 1; $j < $n; $j++) {
                        if ($s & (1 << $j)) {
                            $e += $g[$i][$j] == 1;
                            $d = max($d, $g[$i][$j]);
                        }
                    }
                }
            }
            if ($e == $k - 1 && $d > 0) {
                $ans[$d - 1]++;
            }
        }
        
        return $ans;
    }
}

```