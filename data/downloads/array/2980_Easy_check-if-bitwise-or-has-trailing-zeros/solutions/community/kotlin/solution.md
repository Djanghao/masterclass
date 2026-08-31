# Kotlin Solution can't be easier

**Author:** evgeniy091993
**Votes:** 0
**Link:** [https://leetcode.com/problems/check-if-bitwise-or-has-trailing-zeros/solutions/5670043/](https://leetcode.com/problems/check-if-bitwise-or-has-trailing-zeros/solutions/5670043/)

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
```kotlin []
class Solution {
    fun hasTrailingZeros(nums: IntArray): Boolean {
        var count = 0
        for(n in nums) {
            if(n % 2 == 0) count++
            if(count >= 2) return true
        }

        return false
    }
}
```