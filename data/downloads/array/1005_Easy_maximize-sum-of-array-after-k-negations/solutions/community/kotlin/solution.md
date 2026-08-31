# Imperative Approach Kotlin

**Author:** curenosm
**Votes:** 0
**Link:** [https://leetcode.com/problems/maximize-sum-of-array-after-k-negations/solutions/5380330/](https://leetcode.com/problems/maximize-sum-of-array-after-k-negations/solutions/5380330/)

---

# Code
```
class Solution {
    fun largestSumAfterKNegations(nums: IntArray, k: Int): Int {
        var (min, k) = arrayOf(0, k)
        nums.sort()

        for (i in 0 until nums.size) {
            min = if (abs(nums[i]) < abs(nums[min])) i else min
            if (nums[i] < 0 && 0 < k) {
                nums[i] *= -1 ; k -= 1
            }
        }

        if (k % 2 == 0)
            return nums.sum()
        
        nums[min] *= -1
        return nums.sum()
    }
}
```