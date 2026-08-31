# simple solution

**Author:** ITPavel
**Votes:** 0
**Link:** [https://leetcode.com/problems/semi-ordered-permutation/solutions/4956127/](https://leetcode.com/problems/semi-ordered-permutation/solutions/4956127/)

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
    fun semiOrderedPermutation(nums: IntArray): Int {
    val unit: Int = nums.indexOf(1)
    val n: Int = nums.indexOf(nums.size)
    return if (unit < n) {
        unit + (nums.size - n - 1)
    } else {
        unit + (nums.size - n - 1) - 1
    }
    }
}
```