# [Kotlin] Clean & Short O(n) Solution

**Author:** catcatcute
**Votes:** 2
**Link:** [https://leetcode.com/problems/sum-of-beauty-in-the-array/solutions/1471946/](https://leetcode.com/problems/sum-of-beauty-in-the-array/solutions/1471946/)

---

```
class Solution {
    fun sumOfBeauties(nums: IntArray): Int {
        var leftMax = nums[0]
        val rightMins = IntArray(nums.size).also { 
            it[it.lastIndex] = nums[nums.lastIndex]
            for (i in it.lastIndex - 1 downTo 2) {
                it[i] = minOf(it[i + 1], nums[i])
            }
        }
        return (1 until nums.lastIndex).fold(0) { acc, index ->
            when {
                nums[index] > leftMax && nums[index] < rightMins[index + 1] -> acc + 2
                nums[index] > nums[index - 1] && nums[index] < nums[index + 1] -> acc + 1
                else -> acc
            }.also {
                leftMax = maxOf(leftMax, nums[index])
            }
        }
    }
}
```