# Solution Maximum Non Negative Product in a Matrix

**Author:** Suyono-Sukorame
**Votes:** 0
**Link:** [https://leetcode.com/problems/maximum-non-negative-product-in-a-matrix/solutions/5183517/](https://leetcode.com/problems/maximum-non-negative-product-in-a-matrix/solutions/5183517/)

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
    private $M = 1000000007;

    private function f($i, $j, $n, $m, &$a, &$dp) {
        if ($i == $n - 1 && $j == $m - 1) return [$a[$i][$j], $a[$i][$j]];
        
        if ($dp[$i][$j][0] != -1 && $dp[$i][$j][1] != -1) {
            return [$dp[$i][$j][0], $dp[$i][$j][1]];
        }
        
        $downMax = PHP_INT_MIN;
        $downMin = PHP_INT_MAX;
        $rightMax = PHP_INT_MIN;
        $rightMin = PHP_INT_MAX;
        
        if ($i + 1 < $n) {
            $x = $this->f($i + 1, $j, $n, $m, $a, $dp);
            $downMax = max($a[$i][$j] * $x[0], $a[$i][$j] * $x[1]);
            $downMin = min($a[$i][$j] * $x[0], $a[$i][$j] * $x[1]);
        }
        
        if ($j + 1 < $m) {
            $x = $this->f($i, $j + 1, $n, $m, $a, $dp);
            $rightMax = max($a[$i][$j] * $x[0], $a[$i][$j] * $x[1]);
            $rightMin = min($a[$i][$j] * $x[0], $a[$i][$j] * $x[1]);
        }
        
        $dp[$i][$j][0] = max($downMax, $rightMax);
        $dp[$i][$j][1] = min($downMin, $rightMin);
        
        return [$dp[$i][$j][0], $dp[$i][$j][1]];
    }
    
    public function maxProductPath($a) {
        $n = count($a);
        $m = count($a[0]);
        $dp = array_fill(0, $n, array_fill(0, $m, [-1, -1]));
        $x = $this->f(0, 0, $n, $m, $a, $dp);
        
        $ans = max($x[0], $x[1]);
        $ans %= $this->M;
        $ans = $ans < 0 ? -1 : $ans;
        
        return (int)$ans;
    }
}

```