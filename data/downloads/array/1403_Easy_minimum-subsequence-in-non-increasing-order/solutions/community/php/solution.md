# simple solution

**Author:** ITPavel
**Votes:** 0
**Link:** [https://leetcode.com/problems/minimum-subsequence-in-non-increasing-order/solutions/4831231/](https://leetcode.com/problems/minimum-subsequence-in-non-increasing-order/solutions/4831231/)

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
    function minSubsequence($nums) {
    $res = [];
    rsort($nums);
    $sum = array_sum($nums);
    $cur = 0;
    for ($i = 0; $i < count($nums); $i++) {
        $cur += $nums[$i];
        $res[] = $nums[$i];
        if ($cur > $sum - $cur) return $res;
    }
    }
}
```