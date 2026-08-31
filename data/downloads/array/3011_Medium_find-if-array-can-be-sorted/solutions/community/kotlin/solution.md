# Simple and concise Kotlin solution, 2 ms

**Author:** user7581dN
**Votes:** 11
**Link:** [https://leetcode.com/problems/find-if-array-can-be-sorted/solutions/6013184/](https://leetcode.com/problems/find-if-array-can-be-sorted/solutions/6013184/)

---

# Approach
Track the largest number in the current segment (with equal number of set bits), fail fast if any number is less than the previous segment's largest.

# Complexity
- Time complexity:
$$O(n)$$

- Space complexity:
$$O(1)$$

# Code
```kotlin []
class Solution {
    fun canSortArray(nums: IntArray): Boolean {
        var curBits = 0
        var prevMax = 0
        var max = 0
        for (num in nums) {
            val bits = num.countOneBits()
            if (bits != curBits) {
                curBits = bits
                prevMax = max
            }
            if (num < prevMax) return false
            max = max(max, num)
        }
        return true
    }
}
```