# Kotlin: Beats 100%

**Author:** skottska
**Votes:** 1
**Link:** [https://leetcode.com/problems/find-numbers-with-even-number-of-digits/solutions/3165933/](https://leetcode.com/problems/find-numbers-with-even-number-of-digits/solutions/3165933/)

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
    fun findNumbers(nums: IntArray) = nums.count { it.toString().length % 2 == 0 }
}
```