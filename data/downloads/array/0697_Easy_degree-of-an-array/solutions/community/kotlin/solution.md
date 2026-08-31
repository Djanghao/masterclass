# [Kotlin] Classic Sliding Window

**Author:** ICalmPersonI
**Votes:** 1
**Link:** [https://leetcode.com/problems/degree-of-an-array/solutions/5681329/](https://leetcode.com/problems/degree-of-an-array/solutions/5681329/)

---

# Complexity
- Time complexity: $$O(n)$$

- Space complexity: $$O(n)$$

# Code
```kotlin []
class Solution {

    fun findShortestSubArray(nums: IntArray): Int {
        val n = nums.size
        val degree = getDegree(nums)

        val freq = hashMapOf<Int, Int>()
        var minLen = Int.MAX_VALUE
        var i = 0
        var j = 0
        while (j < n) {
            freq[nums[j]] = (freq[nums[j]] ?: 0) + 1
            while (freq[nums[j]]!! == degree) {
                minLen = min(minLen, j - i + 1)
                freq[nums[i]] = freq[nums[i]]!! - 1
                i++
            }
            j++
        }

        return minLen
    }

    private fun getDegree(nums: IntArray): Int {
        val freq = hashMapOf<Int, Int>()
        var max = 0
        for (num in nums) {
            val value = (freq[num] ?: 0) + 1
            freq[num] = value
            max = max(value, max)
        }
        return max
    }
    
}
```