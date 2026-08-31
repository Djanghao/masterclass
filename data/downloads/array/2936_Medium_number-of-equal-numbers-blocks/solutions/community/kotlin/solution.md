# Binary Search - Kotlin

**Author:** 1997onurcan
**Votes:** 0
**Link:** [https://leetcode.com/problems/number-of-equal-numbers-blocks/solutions/4828955/](https://leetcode.com/problems/number-of-equal-numbers-blocks/solutions/4828955/)

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
/**
 * Definition for BigArray.
 * class BigArray(elements: IntArray) {
 *     fun at(index: Long): Int
 *     fun size(): Long
 * }
 */
class Solution {
    fun countBlocks(nums: BigArray): Int {
        val size = nums.size()
        return countHelper(
            left = 0,
            right = size - 1,
            leftVal = nums.at(0),
            rightVal = nums.at(size - 1),
            bigArray = nums
        )
    }

    private fun countHelper(
        left: Long,
        right: Long,
        leftVal: Int,
        rightVal: Int,
        bigArray: BigArray
    ): Int {
        if (leftVal == rightVal) return 1
        if (left == right - 1) return 2
        val mid = left + (right - left) / 2
        val mVal = bigArray.at(mid)
        return countHelper(
            left = left,
            right = mid,
            leftVal = leftVal,
            rightVal = mVal,
            bigArray = bigArray
        ) +
                countHelper(
                    left = mid,
                    right = right,
                    leftVal = mVal,
                    rightVal = rightVal,
                    bigArray = bigArray
                ) - 1
    }
}
```