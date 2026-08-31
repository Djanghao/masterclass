# Kotlin beats 100%

**Author:** usernamectrlc
**Votes:** 0
**Link:** [https://leetcode.com/problems/minimum-operations-to-make-all-array-elements-equal/solutions/5513696/](https://leetcode.com/problems/minimum-operations-to-make-all-array-elements-equal/solutions/5513696/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
sort nums in order to break sort nums into 2 part. 
first part that every element is less than current query 
second part that every element is equal or more than current querry

use binary search to find the first index that element is equal or more than the querry 

After that use presum left and presum right to calculate the final answer
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
    fun minOperations(nums: IntArray, queries: IntArray): List<Long> {
        nums.sort()
        val preSum = LongArray(nums.size + 1)

        nums.forEachIndexed { i, number ->
            preSum[i + 1] = preSum[i] + number
        }

        val res = mutableListOf<Long>()
        val n = nums.size
        val maxNum = nums.maxOrNull() ?: 0

        queries.forEach { query ->
            if (query > maxNum) {
                res.add(query.toLong() * n - preSum.last())
            } else {
                val index = binarySearch(nums, query)
                val leftSum = preSum[index]
                val rightSum = preSum.last() - preSum[index]
                val leftOps = query.toLong() * index - leftSum
                val rightOps = rightSum - query.toLong() * (n - index)
                res.add(leftOps + rightOps)
            }
        }

        return res
    }

    private fun binarySearch(nums: IntArray, target: Int): Int {
        var left = 0
        var right = nums.size

        while (left < right) {
            val mid = left + (right - left) / 2
            if (nums[mid] < target) {
                left = mid + 1
            } else {
                right = mid
            }
        }

        return left
    }
}

```