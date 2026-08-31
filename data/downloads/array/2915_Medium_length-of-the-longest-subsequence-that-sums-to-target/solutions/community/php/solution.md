# PHP solution

**Author:** lina_jamadar23
**Votes:** 0
**Link:** [https://leetcode.com/problems/length-of-the-longest-subsequence-that-sums-to-target/solutions/4224405/](https://leetcode.com/problems/length-of-the-longest-subsequence-that-sums-to-target/solutions/4224405/)

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
     * @param Integer $target
     * @return Integer
     */
    function lengthOfLongestSubsequence($nums, $target) {
    $n = count($nums);
    $dp = array_fill(0, $n, array_fill(0, $target + 1, -1));
    $dp[0][0] = 0;
    if ($nums[0] <= $target) {
        $dp[0][$nums[0]] = 1;
    }
    
    for ($i = 1; $i < $n; $i++) {
        for ($j = 0; $j <= $target; $j++) {
            $dp[$i][$j] = $dp[$i - 1][$j];
            if ($j - $nums[$i] >= 0 && $dp[$i - 1][$j - $nums[$i]] != -1) {
                $dp[$i][$j] = max($dp[$i][$j], 1 + $dp[$i - 1][$j - $nums[$i]]);
            }
        }
    }
    
    return $dp[$n - 1][$target];
     
    }
}
```