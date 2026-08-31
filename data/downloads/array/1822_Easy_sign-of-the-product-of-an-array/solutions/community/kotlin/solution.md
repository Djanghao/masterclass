# Kotlin easy and fast solution

**Author:** jasonechiu
**Votes:** 1
**Link:** [https://leetcode.com/problems/sign-of-the-product-of-an-array/solutions/3475419/](https://leetcode.com/problems/sign-of-the-product-of-an-array/solutions/3475419/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
For each the nums list and return 0 if we meet a 0 in nums.
We use 1 to represent the positive number and -a for negative number. So if we meet a negative number, we just times -1 and ans can return directly without mod or any if-else condition expression.

# Complexity
- Time complexity: $$O(n)$$
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: $$O(1)$$
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
class Solution {
    fun arraySign(nums: IntArray): Int {
        var ans = 1
        nums.forEach {
            if (it == 0) return 0
            else if (it < 0) ans *= -1
        }
        return ans
    }
}
```