# PHP one line solution

**Author:** DekaBla
**Votes:** 1
**Link:** [https://leetcode.com/problems/search-in-rotated-sorted-array/solutions/3828183/](https://leetcode.com/problems/search-in-rotated-sorted-array/solutions/3828183/)

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
     * @param Integer $target
     * @return Integer
     */
    function search($nums, $target) {
        return in_array($target, $nums) ? array_search($target, $nums) :-1;
    }
}
```