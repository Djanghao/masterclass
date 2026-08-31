# PHP solution with "rsort" and for-loop

**Author:** eplaksin
**Votes:** 0
**Link:** [https://leetcode.com/problems/largest-perimeter-triangle/solutions/3292778/](https://leetcode.com/problems/largest-perimeter-triangle/solutions/3292778/)

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
    function largestPerimeter($nums) {
        rsort($nums);
        
        for ($i = 0; $i <= count($nums) - 3; $i++) {
            if ($nums[$i + 1] + $nums[$i + 2] > $nums[$i]) {
                return $nums[$i] + $nums[$i + 1] + $nums[$i + 2];
            }
        }

        return 0;
    }
}
```