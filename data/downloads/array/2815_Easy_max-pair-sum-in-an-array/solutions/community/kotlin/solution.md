# Kotlin Straightforward Approach

**Author:** curenosm
**Votes:** 0
**Link:** [https://leetcode.com/problems/max-pair-sum-in-an-array/solutions/5491802/](https://leetcode.com/problems/max-pair-sum-in-an-array/solutions/5491802/)

---

# Code
```
class Solution {

    fun maxDigit(s: String): Int {
        for (d in 9 downTo -1)
            if (s.indexOf(d.digitToChar()) != -1)
                return d
        return -1
    }

    fun maxSum(nums: IntArray): Int {
        var nums = nums ; nums.sortDescending()
        var max = -1

        for (i in 0 until nums.size)
            for (j in 0 until nums.size)
                if (i != j
                    && maxDigit(nums[i].toString()) == maxDigit(nums[j].toString())
                    && nums[i] + nums[j] > max)
                        max = nums[i] + nums[j]

        return max
    }
}
```