# 1-line simple solution (even numbers have zero at the end, use it)

**Author:** ITPavel
**Votes:** 0
**Link:** [https://leetcode.com/problems/check-if-bitwise-or-has-trailing-zeros/solutions/4878432/](https://leetcode.com/problems/check-if-bitwise-or-has-trailing-zeros/solutions/4878432/)

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
    function hasTrailingZeros($nums) {
        return count(array_filter($nums, function($k) {return $k%2 == 0;}))>1; 
    }
}
```