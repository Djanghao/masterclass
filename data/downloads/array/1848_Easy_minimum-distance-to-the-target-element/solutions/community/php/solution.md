# simple solution

**Author:** ITPavel
**Votes:** 0
**Link:** [https://leetcode.com/problems/minimum-distance-to-the-target-element/solutions/5031660/](https://leetcode.com/problems/minimum-distance-to-the-target-element/solutions/5031660/)

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
    function getMinDistance($nums, $target, $start) {
    $arr = [];
    for ($i = 0; $i < count($nums); $i++) { if ($nums[$i] == $target) {array_push($arr, abs($i - $start)); }}
    return min($arr);
    }
}
```