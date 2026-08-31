# simple solution

**Author:** ITPavel
**Votes:** 0
**Link:** [https://leetcode.com/problems/maximum-ascending-subarray-sum/solutions/4961829/](https://leetcode.com/problems/maximum-ascending-subarray-sum/solutions/4961829/)

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
    function maxAscendingSum($nums) {
     $max = $nums[0];
    $sum = $nums[0];
    for ($i = 1; $i < count($nums); $i++) {
        $cur = $nums[$i];
        if ($cur <= $nums[$i - 1]) {
            $sum = 0;
        }
        $sum += $cur;
        $max = max($max, $sum);
    }
    return $max;
    }
}
```