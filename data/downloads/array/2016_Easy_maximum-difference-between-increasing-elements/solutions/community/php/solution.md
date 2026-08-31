# simple solution

**Author:** ITPavel
**Votes:** 0
**Link:** [https://leetcode.com/problems/maximum-difference-between-increasing-elements/solutions/5011690/](https://leetcode.com/problems/maximum-difference-between-increasing-elements/solutions/5011690/)

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
    function maximumDifference($nums) {
    $max = 0;
    $len = count($nums);
    for ($i = 0; $i < $len - 1; $i++) {
        for ($j = $i + 1; $j < $len; $j++) {
            if ($max < $nums[$j] - $nums[$i]) {$max = $nums[$j] - $nums[$i];}
        }
    }
    return ($max == 0) ? -1 : $max;
    }
}
```