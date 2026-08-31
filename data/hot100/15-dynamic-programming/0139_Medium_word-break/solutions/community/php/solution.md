# 139. Word Break

**Author:** Manvi_Savani
**Votes:** 1
**Link:** [https://leetcode.com/problems/word-break/solutions/5206347/](https://leetcode.com/problems/word-break/solutions/5206347/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity:
12ms
Beats 45.83% of users with PHP

- Space complexity:
20.03MB
Beats 45.83% of users with PHP

# Code
```
class Solution {

    /**
     * @param String $s
     * @param String[] $wordDict
     * @return Boolean
     */
    function wordBreak($s, $wordDict) {
        $wordDict = array_flip($wordDict);
        $n = strlen($s);
        $dp = array_fill(0, $n + 1, false);
        $dp[0] = true;
    
        for ($i = 1; $i <= $n; $i++) {
            for ($j = 0; $j < $i; $j++) {
                if ($dp[$j] && isset($wordDict[substr($s, $j, $i - $j)])) {
                    $dp[$i] = true;
                    break;
                }
            }
        }
    
        return $dp[$n];
    }
}
```