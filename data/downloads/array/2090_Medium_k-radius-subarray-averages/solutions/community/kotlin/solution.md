# With prefix and sliding window in Kotlin

**Author:** behzodhalil
**Votes:** 2
**Link:** [https://leetcode.com/problems/k-radius-subarray-averages/solutions/4600889/](https://leetcode.com/problems/k-radius-subarray-averages/solutions/4600889/)

---


# Complexity
- Time complexity:O(n)
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: O(n - 2k)
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
class Solution {
    fun getAverages(nums: IntArray, k: Int): IntArray {
        val bucketSize = nums.size
        val windowSize = 2 * k + 1

        val bucket = IntArray(bucketSize) { -1 }
        var prefix = 0L

        for(index in nums.indices) {
            prefix += nums[index].toLong()

            if(index >= 2 * k) {
                bucket[index - k] = (prefix / windowSize).toInt()
                prefix -= nums[index - 2 * k].toLong()
            }
        }

        return bucket
    }
}
```