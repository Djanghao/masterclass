# Dynamic Programming PHP Solution (with less space complexity)

**Author:** user0177X
**Votes:** 0
**Link:** [https://leetcode.com/problems/restore-the-array/solutions/3448166/](https://leetcode.com/problems/restore-the-array/solutions/3448166/)

---

# Code
```
class Solution {

    /**
     * @param String $s
     * @param Integer $k
     * @return Integer
     */
    function numberOfArrays($s, $k) {
        
        $m   = strlen($s);
        $n   = strlen((string)$k);
        $mod = 1_000_000_007;
        $dp  = array_fill(0, $n + 1, 0);
        $dp[0] = 1;

        for ($start = 0; $start < $m; $start++) {

            if ($s[$start] == '0') {
                $dp[$start % ($n + 1)] = 0;
                continue;
            }
            
            for ($end = $start; $end < $m; $end++) {

                $currentNumber = substr($s, $start, $end + 1 - $start);
                if ((int)$currentNumber > $k) {
                    break;
                }
                
                $dp[($end + 1) % ($n + 1)] += $dp[$start % ($n + 1)];
                $dp[($end + 1) % ($n + 1)] %= $mod;
            }

            $dp[$start % ($n + 1)] = 0;
        }
        
        return $dp[$m % ($n + 1)];
    }
}
```