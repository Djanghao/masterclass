# Runtime: 2929 ms / Memory Usage: 52.3 MB

**Author:** ordinary9843
**Votes:** 1
**Link:** [https://leetcode.com/problems/maximum-score-from-performing-multiplication-operations/solutions/2582537/](https://leetcode.com/problems/maximum-score-from-performing-multiplication-operations/solutions/2582537/)

---

Runtime: 2929 ms, faster than 100.00% of PHP online submissions for Maximum Score from Performing Multiplication Operations.
Memory Usage: 52.3 MB, less than 100.00% of PHP online submissions for Maximum Score from Performing Multiplication Operations.

```
class Solution {

    /**
     * @param Integer[] $nums
     * @param Integer[] $multipliers
     * @return Integer
     */
    function maximumScore($nums, $multipliers) {
        $n = count($nums);
        $m = count($multipliers);
        $dp = [];    
        for ($i = $m - 1; $i >= 0; $i--) {
            for ($j = 0; $j <= $i; $j++) {
                $k = $i - $j;
                $dp[$j][$k] = max(
                    $dp[$j + 1][$k] + $nums[$j] * $multipliers[$i],
                    $dp[$j][$k + 1] + $nums[$n - $k - 1] * $multipliers[$i]
                );
            }
        }
        
        return $dp[0][0]; 
    }
}
```