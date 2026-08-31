# Kotlin - Prefix Sum / Hash Table

**Author:** MohiFayden
**Votes:** 0
**Link:** [https://leetcode.com/problems/maximum-size-subarray-sum-equals-k/solutions/5845666/](https://leetcode.com/problems/maximum-size-subarray-sum-equals-k/solutions/5845666/)

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
    fun maxSubArrayLen(nums: IntArray, k: Int): Int {

        // Intuition:
        // We use a prefix sum approach to track cumulative sums as we iterate through the array.
        // By storing the first occurrence of each prefix sum in a map, we can quickly check
        // if a subarray that sums to `k` exists by looking for `prefixSum - k` in the map.
        // This helps efficiently find the maximum length of such subarrays.

        var ans = 0

        val map = mutableMapOf<Int, Int>()
        var prefixSum = 0
        map[0] = -1

        for ((index, num) in nums.withIndex()) {
            prefixSum += num
            if (!map.contains(prefixSum)) {
                map[prefixSum] = index
            }

            val complement = prefixSum - k
            if (map.contains(complement)) {
                ans = maxOf(ans, index - map[complement]!!)
            }
        }

        return ans
    }
}
```