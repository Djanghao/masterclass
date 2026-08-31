# PHP Solution

**Author:** lrazo
**Votes:** 0
**Link:** [https://leetcode.com/problems/k-inverse-pairs-array/solutions/4634577/](https://leetcode.com/problems/k-inverse-pairs-array/solutions/4634577/)

---

# Code
```
class Solution {

    /**
     * @param Integer $n
     * @param Integer $k
     * @return Integer
     */
    function kInversePairs($n, $k) {
        $dp = array_fill(0, $n + 1, array_fill(0, $k + 1, 0));
        $dp[0][0] = 1;
        $mod = 1000000007;

        for ($i = 1; $i <= $n; $i++) {
            $val = 0;
            for ($j = 0; $j <= $k; $j++) {
                $val += $dp[$i - 1][$j];
                if ($j >= $i) $val -= $dp[$i - 1][$j - $i];
                if ($val < 0) $val += $mod;
                $val = ($val % $mod);
                $dp[$i][$j] = $val;
            }
        }
        return (int)($dp[$n][$k]);
    }
}

```