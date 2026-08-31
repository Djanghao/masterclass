# :: Kotlin :: Sliding Window Solution

**Author:** znxkznxk1030
**Votes:** 1
**Link:** [https://leetcode.com/problems/count-subarrays-with-score-less-than-k/solutions/3510827/](https://leetcode.com/problems/count-subarrays-with-score-less-than-k/solutions/3510827/)

---

# Code
```
class Solution {
    fun countSubarrays(nums: IntArray, k: Long): Long {
        var result = 0L
        var left = 0
        var acc = 0L
        for (right in nums.indices) {
            acc = acc + nums[right].toLong()

            while(left <= right) {
                val length = right - left + 1
                if (acc * length.toLong() < k) break
                acc -= nums[left]
                left++ 
            }

            result += right - left + 1
        }

        return result
    }
}
```