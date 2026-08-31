# Solution Matrix Block Sum

**Author:** Suyono-Sukorame
**Votes:** 0
**Link:** [https://leetcode.com/problems/matrix-block-sum/solutions/4918274/](https://leetcode.com/problems/matrix-block-sum/solutions/4918274/)

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
     * @param Integer[][] $mat
     * @param Integer $k
     * @return Integer[][]
     */
    function matrixBlockSum($mat, $k) {
        $m = count($mat);
        $n = count($mat[0]);
        
        $prefixSum = array_fill(0, $m + 1, array_fill(0, $n + 1, 0));
        
        for ($i = 1; $i <= $m; $i++) {
            for ($j = 1; $j <= $n; $j++) {
                $prefixSum[$i][$j] = $prefixSum[$i - 1][$j] + $prefixSum[$i][$j - 1] - $prefixSum[$i - 1][$j - 1] + $mat[$i - 1][$j - 1];
            }
        }
        
        $answer = array_fill(0, $m, array_fill(0, $n, 0));
        for ($i = 0; $i < $m; $i++) {
            for ($j = 0; $j < $n; $j++) {
                $r1 = max(0, $i - $k);
                $c1 = max(0, $j - $k);
                $r2 = min($m - 1, $i + $k);
                $c2 = min($n - 1, $j + $k);
                
                $answer[$i][$j] = $prefixSum[$r2 + 1][$c2 + 1] - $prefixSum[$r1][$c2 + 1] - $prefixSum[$r2 + 1][$c1] + $prefixSum[$r1][$c1];
            }
        }
        
        return $answer;
    }
}

```