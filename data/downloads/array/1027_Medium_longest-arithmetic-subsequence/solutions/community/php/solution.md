# Solution Longest Arithmetic Subsequence

**Author:** Suyono-Sukorame
**Votes:** 0
**Link:** [https://leetcode.com/problems/longest-arithmetic-subsequence/solutions/4864766/](https://leetcode.com/problems/longest-arithmetic-subsequence/solutions/4864766/)

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
     * @param Integer[] $nums
     * @return Integer
     */
    function longestArithSeqLength($nums) {
        $n = count($nums);
        if ($n <= 2) return $n;
        
        $dp = [];
        $maxLen = 2;
        
        for ($i = 0; $i < $n; $i++) {
            for ($j = 0; $j < $i; $j++) {
                $diff = $nums[$i] - $nums[$j];
                
                if (isset($dp[$j][$diff])) {
                    $dp[$i][$diff] = $dp[$j][$diff] + 1;
                } else {
                    $dp[$i][$diff] = 2;
                }
                
                $maxLen = max($maxLen, $dp[$i][$diff]);
            }
        }
        
        return $maxLen;
    }
}

```