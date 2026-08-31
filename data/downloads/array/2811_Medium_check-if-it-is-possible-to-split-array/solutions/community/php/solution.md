# PHP 7ms solution

**Author:** DekaBla
**Votes:** 0
**Link:** [https://leetcode.com/problems/check-if-it-is-possible-to-split-array/solutions/3933119/](https://leetcode.com/problems/check-if-it-is-possible-to-split-array/solutions/3933119/)

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
     * @param Integer $m
     * @return Boolean
     */
    function canSplitArray($nums, $m) {
        if (count($nums) <= 2) return true;
        for ($i = 1; $i < count($nums); $i++) {
            if ($nums[$i] + $nums[$i-1] >= $m) return true;
        }
        return false;
    }
}
```