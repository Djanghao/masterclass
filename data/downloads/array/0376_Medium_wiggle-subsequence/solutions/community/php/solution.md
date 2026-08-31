# Solution Wiggle Subsequence

**Author:** Suyono-Sukorame
**Votes:** 0
**Link:** [https://leetcode.com/problems/wiggle-subsequence/solutions/4713015/](https://leetcode.com/problems/wiggle-subsequence/solutions/4713015/)

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
    function wiggleMaxLength($nums) {
        if (count($nums) < 2) return count($nums);
        
        $up = 1;
        $down = 1;
        
        for ($i = 1; $i < count($nums); $i++) {
            if ($nums[$i] > $nums[$i - 1]) {
                $up = $down + 1;
            } elseif ($nums[$i] < $nums[$i - 1]) {
                $down = $up + 1;
            }
        }
        
        return max($up, $down);
    }
}

```