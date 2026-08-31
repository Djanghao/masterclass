# Kotlin: 2 pointers

**Author:** clhost
**Votes:** 0
**Link:** [https://leetcode.com/problems/count-strictly-increasing-subarrays/solutions/3538424/](https://leetcode.com/problems/count-strictly-increasing-subarrays/solutions/3538424/)

---

# Code
```
class Solution {
    fun countSubarrays(nums: IntArray): Long {
        var s = 0
        var result = 0L

        for (i in 1 until nums.size) {
            if (nums[i] > nums[i - 1]) continue
            result += sum(i - s)
            s = i
        }

        result += sum(nums.size - s)

        return result
    }

    fun sum(n: Int) = n * (n + 1L) / 2L
}

```