# One line. Use set.

**Author:** kosipov
**Votes:** 1
**Link:** [https://leetcode.com/problems/make-array-zero-by-subtracting-equal-amounts/solutions/3190235/](https://leetcode.com/problems/make-array-zero-by-subtracting-equal-amounts/solutions/3190235/)

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
object Solution {
    def minimumOperations(nums: Array[Int]): Int = {
            nums.filter(_ > 0).toSet.size
    }
}
```