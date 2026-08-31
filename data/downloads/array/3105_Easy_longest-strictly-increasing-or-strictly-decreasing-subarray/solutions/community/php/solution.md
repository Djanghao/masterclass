# php FAST solution

**Author:** a8deh
**Votes:** 0
**Link:** [https://leetcode.com/problems/longest-strictly-increasing-or-strictly-decreasing-subarray/solutions/5121261/](https://leetcode.com/problems/longest-strictly-increasing-or-strictly-decreasing-subarray/solutions/5121261/)

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
    function longestMonotonicSubarray($nums) {
       

            $n = count($nums);
    if ($n <= 1) {
        return $n;
    }
    
    $maxLen = 1;
    $incLen = 1;
    $decLen = 1;
    
    for ($i = 1; $i < $n; $i++) {
        if ($nums[$i] > $nums[$i - 1]) {
            $incLen++;
            $decLen = 1;
        } elseif ($nums[$i] < $nums[$i - 1]) {
            $decLen++;
            $incLen = 1;
        } else {
            $incLen = 1;
            $decLen = 1;
        }
        
        $maxLen = max($maxLen, $incLen, $decLen);
    }
    
    return $maxLen;
    }
}

```