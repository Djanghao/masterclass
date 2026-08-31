# Kotlin O(n) time O(1) space

**Author:** user1482VR
**Votes:** 0
**Link:** [https://leetcode.com/problems/minimum-size-subarray-in-infinite-array/solutions/5457006/](https://leetcode.com/problems/minimum-size-subarray-in-infinite-array/solutions/5457006/)

---

# Code
```
 class Solution {

    fun minSizeSubarray(nums: IntArray, target: Int): Int {
        val fullNumsSize = nums.size * (target / nums.sum())
        if (target % nums.sum() == 0) {
            return fullNumsSize
        }

        val minSizeSubarrayLeftover = minSizeSubarrayLeftover(nums, target % nums.sum())
        if (minSizeSubarrayLeftover == -1) {
            return -1
        }
        return minSizeSubarrayLeftover + fullNumsSize
    }

    private fun minSizeSubarrayLeftover(nums: IntArray, target: Int): Int {
        var result = -1 

        var start = 0
        var end = 0
        var sum = nums[0]

        fun increaseEnd() {
            end += 1
            if (end != nums.size*2) {
                sum += nums[end % nums.size]
            }
        }

        fun increaseStart() {
            start += 1
            sum -= nums[(start - 1) % nums.size]
        }

        var maxWindow = nums.size - 1
        while (start <= nums.size*2-1 && end <= nums.size*2-1) {
            when {
                end - start + 1 > maxWindow -> increaseStart()
                start > end -> increaseEnd()
                sum < target -> increaseEnd()
                sum > target -> increaseStart() 
                else -> {
                    result = end - start + 1
                    if (result == 1) {
                        return 1
                    }
                    maxWindow = result
                    increaseStart()
                }
            }
        }

        return result
    }
}
```