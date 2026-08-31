# scala easy solution

**Author:** lyk4411
**Votes:** 0
**Link:** [https://leetcode.com/problems/semi-ordered-permutation/solutions/3615997/](https://leetcode.com/problems/semi-ordered-permutation/solutions/3615997/)

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
  def semiOrderedPermutation(nums: Array[Int]): Int = {
    val n = nums.length
    val left = nums.indexOf(1)
    val right = nums.indexOf(n)
    left + (n - 1 - right) - (if(left > right) 1 else 0)
  }
}
```