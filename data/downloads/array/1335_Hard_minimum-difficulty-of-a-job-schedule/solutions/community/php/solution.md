# Solution Minimum Difficulty of a Job Schedule

**Author:** Suyono-Sukorame
**Votes:** 0
**Link:** [https://leetcode.com/problems/minimum-difficulty-of-a-job-schedule/solutions/4920905/](https://leetcode.com/problems/minimum-difficulty-of-a-job-schedule/solutions/4920905/)

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
     * @param Integer[] $jobDifficulty
     * @param Integer $d
     * @return Integer
     */
    function minDifficulty($jobDifficulty, $d) {
        $n = count($jobDifficulty);
        if ($n < $d) return -1;
        
        $dp = array_fill(0, $n + 1, array_fill(0, $d + 1, PHP_INT_MAX));
        $dp[0][0] = 0;
        
        for ($i = 1; $i <= $n; $i++) {
            for ($k = 1; $k <= $d; $k++) {
                $maxDiff = 0;
                for ($j = $i - 1; $j >= $k - 1; $j--) {
                    $maxDiff = max($maxDiff, $jobDifficulty[$j]);
                    $dp[$i][$k] = min($dp[$i][$k], $dp[$j][$k - 1] + $maxDiff);
                }
            }
        }
        
        return $dp[$n][$d] != PHP_INT_MAX ? $dp[$n][$d] : -1;
    }
}

```