# Simple solution. Beats 90.00% of users with PHP

**Author:** kia575g
**Votes:** 0
**Link:** [https://leetcode.com/problems/split-the-array/solutions/4929869/](https://leetcode.com/problems/split-the-array/solutions/4929869/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity:O(n)
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity:O(n)
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
class Solution {

    /**
     * @param Integer[] $nums
     * @return Boolean
     */
    function isPossibleToSplit($nums) {
        $count = count($nums);

        if($count < 2 || $count % 2 !== 0) {
            return false;
        }

        $map = [];

        foreach ($nums as $v) {
            $map[$v] = (array_key_exists($v, $map))?$map[$v]+1:1;

            if($map[$v] > 2) {
                return false;
            }
        }

        return true;
    }
}
```