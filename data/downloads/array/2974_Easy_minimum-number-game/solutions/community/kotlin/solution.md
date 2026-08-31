# Easy Way to Compleate Task Begginers Kotlin

**Author:** TimofeyMarion
**Votes:** 0
**Link:** [https://leetcode.com/problems/minimum-number-game/solutions/5635415/](https://leetcode.com/problems/minimum-number-game/solutions/5635415/)

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
    fun numberGame(nums: IntArray): IntArray {
        val _nums = nums.toList().sorted().toMutableList()

        for (i in 0..<_nums.lastIndex step 2) {
            val one = _nums[i]
            val two = _nums[i+1]
            _nums[i] = two
            _nums[i+1] = one
        }
        return _nums.toIntArray()
    }
}
```