# Easy Kotlin backtrack solution

**Author:** skulagin
**Votes:** 2
**Link:** [https://leetcode.com/problems/target-sum/solutions/4080768/](https://leetcode.com/problems/target-sum/solutions/4080768/)

---

# Complexity
- Time complexity: $$O(2^n)$$

- Space complexity: $$O(n)$$

# Code
```
class Solution {
    fun findTargetSumWays(nums: IntArray, target: Int): Int {
        var count = 0

        fun backtrack(start: Int, currentSum: Int) {
            if (start == nums.size) {
                if (currentSum == target) {
                    count++
                }
                return
            }

            // Add the current number to the sum
            backtrack(start + 1, currentSum + nums[start])

            // Subtract the current number from the sum
            backtrack(start + 1, currentSum - nums[start])
        }

        backtrack(0, 0)
        return count
    }
}
```