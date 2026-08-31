# Kotlin 2 pointer

**Author:** aymaletdinov2012
**Votes:** 0
**Link:** [https://leetcode.com/problems/minimum-adjacent-swaps-to-make-a-valid-array/solutions/5681573/](https://leetcode.com/problems/minimum-adjacent-swaps-to-make-a-valid-array/solutions/5681573/)

---

# Complexity
- Time complexity:
O(n)

- Space complexity:
O(1)

# Code
```kotlin []
class Solution {

    fun minimumSwaps(nums: IntArray): Int {
        if (nums.size < 2) return 0
        var rightMaxInd = 0
        var leftMinInd = 0

        nums.forEachIndexed { i, num ->
            if (num >= nums[rightMaxInd]) rightMaxInd = i
            if (num < nums[leftMinInd]) leftMinInd = i
        }

        var count = 0
        count += leftMinInd
        count += nums.lastIndex - rightMaxInd
        if (leftMinInd >= rightMaxInd) count--

        return count
    }
}
```