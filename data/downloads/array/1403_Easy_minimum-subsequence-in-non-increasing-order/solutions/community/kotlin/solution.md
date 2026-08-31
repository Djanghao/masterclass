# Simple & Easy

**Author:** user0122E
**Votes:** 0
**Link:** [https://leetcode.com/problems/minimum-subsequence-in-non-increasing-order/solutions/5838542/](https://leetcode.com/problems/minimum-subsequence-in-non-increasing-order/solutions/5838542/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
<!-- Describe your approach to solving the problem. -->
Due to the requirement of result, we must use sorting once

# Complexity
- Time complexity: $$O(nlogn)$$ the sort()
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: $$O(n)$$ with output or $$O(1)$$ without output
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```kotlin []
class Solution {
    fun minSubsequence(nums: IntArray): List<Int> {
        // Time: O(nlogn), Space: O(N) with output or O(1) without output
        // return subsequence && min size && max sum
        // non-increasing
        val result = mutableListOf<Int>()

        nums.sort()
        var max = nums.sum()
        var count = 0

        for(index in nums.lastIndex downTo 0) {
            max -= nums[index]
            result.add(nums[index])
            count += nums[index]
            if(count > max) break
        }

        return result
    }
}
```