# simple solution

**Author:** ITPavel
**Votes:** 0
**Link:** [https://leetcode.com/problems/find-the-middle-index-in-array/solutions/4899958/](https://leetcode.com/problems/find-the-middle-index-in-array/solutions/4899958/)

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
    function findMiddleIndex($nums) {
            $sumAll = array_reduce($nums, function($carry, $item) {
        return $carry + $item;
    });
    $sumLeft = 0;
    for ($i = 0; $i < count($nums); $i++) {
        if ($sumLeft == $sumAll - $sumLeft - $nums[$i]) {
            return $i;
        }
        $sumLeft += $nums[$i];
    }
    return -1;
    }
}
```