# Simple, two if conditions, one in loop, one outside

**Author:** drk_9
**Votes:** 1
**Link:** [https://leetcode.com/problems/missing-ranges/solutions/3546559/](https://leetcode.com/problems/missing-ranges/solutions/3546559/)

---

# Intuition
Scan left to right

# Approach
Scan left to right

# Complexity
- Time complexity: O(n)

- Space complexity: O(1)

# Code
```
class Solution {
    fun findMissingRanges(nums: IntArray, lower: Int, upper: Int): List<List<Int>> {
        var result = mutableListOf<List<Int>>()
        var currentRangePointer = lower

        for(num in nums) {
            if(num > currentRangePointer) {
                result.add(listOf(currentRangePointer, num - 1))
            }

            currentRangePointer = num + 1
        }

        if(currentRangePointer <= upper) {
            result.add(listOf(currentRangePointer, upper))
        }

        return result
    }
}
```